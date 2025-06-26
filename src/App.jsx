import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Jumbotron from './components/Jumbotron'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [theme, setTheme] = useState('light')
  const [showNav, setShowNav] = useState(false)

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

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skill & Abilities' },
    { id: 'projects', label: 'Projects' },
  ]

  return (
    <>
      <nav className='fixed top-4 right-4 z-50 flex flex-col gap-2'>
        <button onClick={toggleTheme} className="p-3 rounded-full bg-gray-200 dark:bg-[#1e1e1e] text-gray-800 dark:text-white shadow transition">
          {theme === 'dark' ? <Icon icon="fxemoji:sunwithface" className='text-xl' /> : <Icon icon="fxemoji:newmoonwithface" className='text-xl' />}
        </button>

        <div className='relative'>
          <button onClick={() => setShowNav(prev => !prev)} className='p-3 rounded-full bg-gray-200 dark:bg-[#1e1e1e] text-gray-800 dark:text-white shadow transition'>
            <Icon icon='material-symbols:menu-rounded' className='text-xl' />
          </button>

          <AnimatePresence>
            {showNav && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className='absolute right-0 mt-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden flex flex-col'
              >
                {navLinks.map(link => (
                  <Link
                    key={link.id}
                    to={link.id}
                    smooth
                    duration={500}
                    onClick={() => setShowNav(false)}
                    className='px-4 py-2 text-sm whitespace-nowrap text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition cursor-pointer'
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </nav>
      
      <ScrollToTop />
      <main className='pt-15 min-h-screen transtion-colors duration-500'>
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
