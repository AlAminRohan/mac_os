import { FaApple, FaImages } from 'react-icons/fa'
import { GrContact } from 'react-icons/gr'
import {
  HiMiniRectangleGroup,
  HiOutlineCodeBracketSquare,
  HiOutlineTrash,
} from 'react-icons/hi2'
import { PiTerminalBold } from 'react-icons/pi'
import { TbNotes } from 'react-icons/tb'

const dockApps = [
  { label: 'Finder', icon: FaApple },
  { label: 'Safari', icon: HiMiniRectangleGroup },
  { label: 'Gallery', icon: FaImages },
  { label: 'Contact', icon: GrContact },
  { label: 'Terminal', icon: PiTerminalBold },
  { label: 'Notebook', icon: TbNotes },
  { label: 'VS Code', icon: HiOutlineCodeBracketSquare },
  { label: 'Trash', icon: HiOutlineTrash },
]

function Dock() {
  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-6 flex justify-center px-4">
      <div className="pointer-events-auto flex items-end gap-2 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 shadow-2xl backdrop-blur-xl">
        {dockApps.map((app) => (
          <button
            type="button"
            key={app.label}
            className="dock-item group relative flex flex-col items-center justify-end"
          >
            <span className="pointer-events-none absolute -top-9 rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
              {app.label}
            </span>
            <app.icon className="text-3xl text-white drop-shadow-md transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110" />
          </button>
        ))}
      </div>
    </footer>
  )
}

export default Dock
