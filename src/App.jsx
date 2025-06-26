import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Jumbotron from './components/Jumbotron'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    
    if(savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    if(newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <>
      <button onClick={toggleTheme} className="fixed top-20 left-3 z-50 p-3 rounded-full bg-gray-200 dark:bg-[#1e1e1e] text-gray-800 dark:text-white shadow transition">
        {theme === 'dark' ? <Icon icon="fxemoji:sunwithface" /> : <Icon icon="fxemoji:newmoonwithface" />}
      </button>
      <Header />
      <ScrollToTop />

      <main className='pt-15 min-h-screen transtion-colors duration-500'>
        <Jumbotron />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
