import { useEffect, useState } from 'react'
import Jumbotron from './components/Jumbotron'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

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

  const navLinks = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Tools & Technologies' },
    { id: 'projects', label: 'My Projects' },
  ]

  return (
    <>
      <Navbar links={navLinks} theme={theme} toggleTheme={toggleTheme} />
      
      <ScrollToTop />
      <main className='min-h-screen transtion-colors duration-500 overflow-hidden'>
        <Jumbotron />
        <AboutMe />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  )
}

export default App
