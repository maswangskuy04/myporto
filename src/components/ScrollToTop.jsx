import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    visible && (
      <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 p-3 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-700 transition" aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    )
  )
}

export default ScrollToTop
