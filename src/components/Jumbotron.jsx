import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Jumbotron() {
  return (
    <section id="jumbotron" className="bg-[#f8f9fa] dark:bg-[#2d2e2e] min-h-screen flex items-center px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-widest uppercase text-zinc-600 dark:text-zinc-300"
          >
            Web Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl leading-tight uppercase text-zinc-900 dark:text-zinc-100"
          >
            Reyhan Marlizal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300"
          >
            Web developer with a strong focus on backend development, database design, and building scalable, maintainable systems.
          </motion.p>
        </header>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10"
        >
          <Link
            to="projects"
            smooth
            duration={500}
            className="inline-flex items-center gap-2 transition cursor-pointer"
          >
            <span className='text-base font-medium text-zinc-600 dark:text-zinc-300 hover:opacity-70'>View selected projects</span>
            <Icon icon="line-md:arrow-right" className='text-zinc-600 dark:text-zinc-300' />
          </Link>
        </motion.nav>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ 
          duration: 1.6,
          repeat: Infinity,
          ease: 'easeInOut'
         }}
         className='absolute bottom-8 inset-x-0 flex justify-center text-zinc-600 dark:text-zinc-400 pointer-events-none'
      >
        <Icon icon="line-md:chevron-down" className='text-2xl' />
      </motion.div>
    </section>
  )
}

export default Jumbotron
