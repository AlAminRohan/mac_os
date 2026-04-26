import { HiMiniRectangleGroup } from 'react-icons/hi2'
import educationIcon from '../assets/Icons/Education.png'
import galleryIcon from '../assets/Icons/Gallery.png'
import terminalIcon from '../assets/Icons/Terminal.png'
import trashIcon from '../assets/Icons/Trash Full.png'
import vsCodeIcon from '../assets/Icons/VS code.png'
import contactIcon from '../assets/Icons/contact.png'
import macOsIcon from '../assets/Icons/macOS.png'
import safariIcon from '../assets/Icons/Safari.png'

const dockApps = [
  { label: 'Finder', image: macOsIcon },
  { label: 'Safari', image: safariIcon },
  { label: 'Gallery', image: galleryIcon },
  { label: 'Contact', image: contactIcon },
  { label: 'Terminal', image: terminalIcon },
  { label: 'Notebook', image: educationIcon },
  { label: 'Experience', image: vsCodeIcon },
  { label: 'Trash', image: trashIcon },
]

function Dock() {
  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-6 flex justify-center px-4">
      <div className="pointer-events-auto p-2 flex items-end gap-1 rounded-2xl border border-white/25 bg-white/15  shadow-2xl backdrop-blur-xl  ">
        {dockApps.map((app) => (
          <button
            type="button"
            key={app.label}
            className="dock-item group relative flex flex-col items-center justify-end"
          >
            <span className="pointer-events-none absolute -top-12 rounded-lg border border-white/30 bg-black/55 px-2 py-1 text-xs text-white opacity-0 shadow-lg backdrop-blur-xl transition group-hover:opacity-100">
              {app.label}
            </span>
            <span className="pointer-events-none absolute -top-2 h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-black/55 opacity-0 transition group-hover:opacity-100" />
            {app.image ? (
              <img
                src={app.image}
                alt={app.label}
                className="h-14 w-14  object-contain drop-shadow-md transition-all duration-200 group-hover:-translate-y-4 group-hover:scale-110"
              />
            ) : (
              <app.icon className="text-3xl text-white drop-shadow-md transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110" />
            )}
          </button>
        ))}
      </div>
    </footer>
  )
}

export default Dock
