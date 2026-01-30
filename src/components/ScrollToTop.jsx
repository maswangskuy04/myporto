import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-11 w-11 rounded-full bg-zinc-800 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-800 shadow-lg backdrop-blur"
        >
          <Icon icon="line-md:chevron-small-up" className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
