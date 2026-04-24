import { FaCircle, FaFolder } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { projects } from '../data/projects'

function ProjectsModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-10">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 shadow-2xl">
        <div className="flex items-center justify-between bg-zinc-800/90 px-4 py-3">
          <div className="flex items-center gap-2 text-xs">
            <FaCircle className="text-red-400" />
            <FaCircle className="text-yellow-400" />
            <FaCircle className="text-green-400" />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-white/10 px-3 py-1 text-xs text-white/80 hover:bg-white/20"
          >
            Close
          </button>
        </div>

        <div className="grid min-h-[420px] grid-cols-12">
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
