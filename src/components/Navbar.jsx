import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ links, theme, toggleTheme }) {
  const [active, setActive] = useState('jumbotron')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = ['jumbotron', ...links.map(link => link.id)]

    const onScroll = () => {
      const y = window.scrollY + 140
      setScrolled(window.scrollY > 20)

      for (let i = sections.length - 1; i >= 0; i--) {
        const elements = document.getElementById(sections[i])
        if (elements && y >= elements.offsetTop) {
          setActive(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  return (
    <>
      <header className={`hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-3 ${scrolled ? 'backdrop-blur bg-white/80 dark:bg-black/70 shadow-sm' : 'bg-transparent'}`}>
        <nav className="flex items-center gap-1 h-12">
          {links.map(link => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={500}
              className={`px-4 py-2 text-xs rounded-full cursor-pointer transition ${active === link.id ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black' : 'text-zinc-500 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100'}`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-1 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-200"
          >
            <Icon
              icon={theme === 'dark' ? 'line-md:sunny-filled' : 'line-md:moon-filled'}
              className="text-sm"
            />
          </button>
        </nav>
      </header>

      <header className={`md:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 ${scrolled ? 'bg-white/50 dark:bg-black/80 backdrop-blur transition-all duration-300' : 'bg-transparent'}`}>
        <span className="text-sm font-bold text-zinc-600 dark:text-zinc-200">RM</span>

        <button onClick={() => setOpen(!open)}>
          <Icon icon="lucide:menu" className="text-xl dark:text-zinc-200" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur transition-colors duration-500"
          >
            <div className="h-16 flex items-center justify-between px-5">
              <span className="text-xs tracking-widest text-zinc-500 dark:text-zinc-200">RM</span>

              <button onClick={() => setOpen(false)}>
                <Icon icon="lucide:x" className="text-2xl text-zinc-500 dark:text-zinc-200" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08 }
                }
              }}
              className="flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-6"
            >
              {links.map(link => (
                <motion.div
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    to={link.id}
                    smooth
                    duration={500}
                    onClick={() => setOpen(false)}
                    className={`text-2xl tracking-wide transition ${active === link.id ? 'font-semibold text-zinc-900 dark:text-zinc-100' : 'text-zinc-500'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                onClick={() => {
                  toggleTheme()
                  setOpen(false)
                }}
                className="mt-10 text-sm text-zinc-500"
              >
                <Icon
                  icon={theme === 'dark' ? 'line-md:sunny-filled' : 'line-md:moon-filled'}
                  className="text-lg"
                />
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
