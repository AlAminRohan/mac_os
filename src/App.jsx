import { useEffect, useMemo, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Dock from './components/Dock'
import ProjectsModal from './components/ProjectsModal'
import TopBar from './components/TopBar'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [themeMode, setThemeMode] = useState('system')
  const [clockText, setClockText] = useState('')
  const showProjectsModal = useMemo(() => location.pathname === '/projects', [location.pathname])

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setClockText(
        now.toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }),
      )
    }

    updateClock()
    const timerId = setInterval(updateClock, 1000)
    return () => clearInterval(timerId)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = () => {
      if (themeMode === 'system') {
        document.documentElement.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light')
        return
      }

      document.documentElement.setAttribute('data-theme', themeMode)
    }

    applyTheme()
    mediaQuery.addEventListener('change', applyTheme)

    return () => mediaQuery.removeEventListener('change', applyTheme)
  }, [themeMode])

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950">
      <TopBar
        onOpenProjects={() => navigate('/projects')}
        themeMode={themeMode}
        onChangeThemeMode={setThemeMode}
        clockText={clockText}
      />

      <main className="flex flex-1 items-center justify-center px-6 pb-32 pt-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>

      {showProjectsModal ? <ProjectsModal onClose={() => navigate('/')} /> : null}
      <Dock />
    </div>
  )
}

export default App
