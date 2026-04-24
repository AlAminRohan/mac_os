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
  const [theme, setTheme] = useState('dark')
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
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950">
      <TopBar
        onOpenProjects={() => navigate('/projects')}
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'cupcake' : 'dark'))}
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
