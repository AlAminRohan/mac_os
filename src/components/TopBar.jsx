import { NavLink } from 'react-router-dom'
import { FaApple, FaWifi } from 'react-icons/fa'
import { BsSliders2 } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { BsToggles } from "react-icons/bs";

function TopBar({ onOpenProjects, themeMode, onChangeThemeMode, clockText }) {
  return (
    <header className="flex h-12 items-center justify-between border-b border-white/20 bg-black/35 px-4 text-sm text-white backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <FaApple className="text-xl" />
        <span className="font-semibold">Rohan&apos;s Portfolio</span>
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
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            type="button"
            className="rounded-full p-1.5 transition hover:bg-white/30"
            aria-label="Control center"
          >
            <BsToggles />
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[50] mt-2 w-40 rounded-box bg-base-100 p-2 text-sm text-base-content shadow"
          >
            <li>
              <button
                type="button"
                onClick={() => onChangeThemeMode('dark')}
                className={themeMode === 'dark' ? 'active' : ''}
              >
                Dark
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onChangeThemeMode('light')}
                className={themeMode === 'light' ? 'active' : ''}
              >
                Light
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onChangeThemeMode('system')}
                className={themeMode === 'system' ? 'active' : ''}
              >
                System
              </button>
            </li>
          </ul>
        </div>
        <span className="text-sm font-medium text-white/90">{clockText}</span>
      </div>
    </header>
  )
}

export default TopBar
