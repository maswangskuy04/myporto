import { useEffect, useState } from 'react'
import Jumbotron from './components/Jumbotron'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <>
    <div className='min-h-screen transition-colors duration-500'>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white shadow transition"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
      <Jumbotron />
      <Skills />
      <Projects />
    </div>
    </>
  )
}

export default App
