import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Jumbotron() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 py-16 bg-[#f8f9fa] dark:bg-[#2d2e2e] transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto w-full space-y-10"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-wider rounded-full w-fit bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 dark:from-zinc-200 dark:via-white dark:to-zinc-200 text-zinc-200 dark:text-zinc-700 badge-gradient"
        >
          <Icon icon="mdi:code" />
          Backend Developer
        </motion.span>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-zinc-800 dark:text-zinc-200"
        >
          Reyhan Marlizal
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          Designing and building reliable backend systems for web applications.
        </motion.p>

        <motion.div
          variants={item}
          className="flex items-center gap-6"
        >
          <Link
            to="projects"
            smooth
            duration={500}
            className="group relative flex items-center gap-2 px-6 py-3 border border-zinc-900 dark:border-white text-zinc-800 dark:text-zinc-200 text-sm rounded-md overflow-hidden"
          >
            <span className="absolute inset-0 bg-zinc-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            <span className="relative flex items-center gap-2 group-hover:text-zinc-200 dark:group-hover:text-zinc-800 font-bungee transition">
              <Icon icon="mdi:laptop" />
              View Projects
            </span>
          </Link>

          <a
            href="https://wa.me/6289525577041"
            target="_blank"
            className="group relative py-2 inline-flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
          >
            Contact
            <Icon icon="line-md:arrow-right"  />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Jumbotron