import { useEffect, useRef, useState } from 'react'
import { FaCircle, FaFolder } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { projects } from '../data/projects'

function ProjectsModal({ onClose }) {
  const [position, setPosition] = useState({ x: 120, y: 90 })
  const dragDataRef = useRef({ isDragging: false, offsetX: 0, offsetY: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!dragDataRef.current.isDragging) {
        return
      }

      const nextX = event.clientX - dragDataRef.current.offsetX
      const nextY = event.clientY - dragDataRef.current.offsetY

      setPosition({
        x: Math.max(0, nextX),
        y: Math.max(0, nextY),
      })
    }

    const stopDragging = () => {
      dragDataRef.current.isDragging = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', stopDragging)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', stopDragging)
    }
  }, [])

  const handleDragStart = (event) => {
    const target = event.currentTarget.parentElement
    const modalRect = target?.getBoundingClientRect()
    if (!modalRect) {
      return
    }

    dragDataRef.current = {
      isDragging: true,
      offsetX: event.clientX - modalRect.left,
      offsetY: event.clientY - modalRect.top,
    }
  }

  return (
    <div className="fixed inset-0 z-40 bg-black/40 px-4 py-10">
      <div
        className="absolute w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 shadow-2xl"
        style={{ left: position.x, top: position.y }}
      >
        <div
          className="flex cursor-move select-none items-center justify-between bg-zinc-800/90 px-4 py-3"
          onMouseDown={handleDragStart}
        >
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onClose()
              }}
              aria-label="Close window"
            >
              <FaCircle className="text-red-400" />
            </button>
            <FaCircle className="text-yellow-400" />
            <FaCircle className="text-green-400" />
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onClose()
            }}
            className="rounded bg-white/10 px-3 py-1 text-xs text-white/80 hover:bg-white/20"
          >
            Close
          </button>
        </div>

        <div className="grid min-h-[420px] grid-cols-12 ">
          <aside className="col-span-4 border-r border-white/10 bg-zinc-800/70 p-4 text-sm text-white/90 md:col-span-3">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
              Favorites
            </p>
            <ul className="space-y-2">
              <li className="rounded bg-white/10 px-3 py-2 text-blue-300">Work</li>
              <li className="px-3 py-2">About me</li>
              <li className="px-3 py-2">Resume</li>
              <li className="px-3 py-2">Trash</li>
            </ul>
          </aside>

          <section className="col-span-8 bg-zinc-900 p-5 md:col-span-9">
            <div className="mb-5 flex items-center justify-end">
              <FiSearch className="text-lg text-white/50" />
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <div key={project.name} className="cursor-pointer text-center text-white">
                  <FaFolder className="mx-auto text-6xl text-sky-400 transition hover:-translate-y-1" />
                  <p className="mt-2 text-sm font-medium text-white/90">{project.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectsModal
