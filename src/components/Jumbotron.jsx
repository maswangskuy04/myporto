import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Jumbotron() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 py-16 bg-[#f8f9fa] dark:bg-[#2d2e2e] transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="max-w-5xl mx-auto w-full space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-xs text-zinc-500 dark:text-zinc-400"
        >
          Backend Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-zinc-900 dark:text-white leading-tight"
        >
          Reyhan Marlizal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          I build scalable backend systems, focusing on clean architecture,
          reliability, and production-ready APIs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-6"
        >
          <Link
            to="projects"
            smooth
            duration={500}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white dark:text-black text-white text-sm rounded-md hover:opacity-90 transition"
          >
            <Icon icon="mdi:laptop" />
            View Projects
          </Link>

          <a
            href="https://wa.me/6289525577041"
            target="_blank"
            className="inline-flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
          >
            Contact
            <Icon icon="line-md:arrow-right"  />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Jumbotron