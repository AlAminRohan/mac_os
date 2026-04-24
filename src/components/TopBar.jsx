import { NavLink } from 'react-router-dom'
import { FaApple, FaMoon, FaSun, FaWifi } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { IoPersonCircleOutline } from 'react-icons/io5'

function TopBar({ onOpenProjects, theme, onToggleTheme, clockText }) {
  return (
    <header className="flex h-12 items-center justify-between border-b border-white/20 bg-black/35 px-4 text-sm text-white backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <FaApple className="text-xl" />
        <span className="font-semibold">Muzammal&apos;s Portfolio</span>
        <button
          type="button"
          onClick={onOpenProjects}
          className="rounded px-2 py-1 text-white/80 transition hover:bg-white/15"
        >
          Projects
        </button>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `rounded px-2 py-1 transition ${
              isActive ? 'bg-white/25 text-white' : 'text-white/80 hover:bg-white/15'
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `rounded px-2 py-1 transition ${
              isActive ? 'bg-white/25 text-white' : 'text-white/80 hover:bg-white/15'
            }`
          }
        >
          Resume
        </NavLink>
      </div>

      <div className="flex items-center gap-3 text-lg">
        <FaWifi title="WiFi" />
        <FiSearch title="Search" />
        <IoPersonCircleOutline title="Profile" />
        <button
          type="button"
          className="rounded-full bg-white/15 p-1.5 transition hover:bg-white/30"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <span className="text-sm font-medium text-white/90">{clockText}</span>
      </div>
    </header>
  )
}

export default TopBar
