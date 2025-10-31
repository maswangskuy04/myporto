import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

function Jumbotron() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-white dark:bg-[#111111] transition-colors duration-500">      
      <div className="max-w-4xl w-full text-center text-gray-900 dark:text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Hi, I'm Reyhan Marlizal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-3 h-8"
        >
          <Typewriter
            words={['Web Developer', 'Always Improving', 'Tech Enthusiast']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-400 max-w-xl mx-auto leading-relaxed mb-6"
        >
          I’m a web developer diving into fullstack projects — always learning and building with care.
        </motion.p>

        <motion.a
          href="https://wa.me/6289525577041"
          initial={{ opacity: 0, scale: 0.60 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block px-6 py-3 bg-gradient-to-tr from-gray-700 via-gray-500 to-gray-300 text-white font-semibold rounded-xl shadow-md hover:shadow-lg"
        >
          Let's Talk
        </motion.a>
      </div>
    </section>
  )
}

export default Jumbotron
