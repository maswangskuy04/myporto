import fotoAboutMe from '../assets/foto_aboutme.png'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

function AboutMe() {
  return (
    <section id="about" className="min-h-screen bg-[#f5f3f0] dark:bg-[#231f20] px-6 md:px-12 py-16 transition-colors duration-500">
      <div className="mx-auto max-w-6xl flex flex-col space-y-5">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl text-center md:text-left uppercase text-zinc-900 dark:text-zinc-100">
            About Me
          </h2>
        </header>

        <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-16 items-start">
          <motion.figure
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto md:mx-0 w-fit text-center md:text-left"
          >
            <img
              src={fotoAboutMe}
              alt="Portrait of Reyhan Marlizal"
              className="h-64 w-48 md:h-64 md:w-48 object-cover rounded grayscale-0 dark:grayscale"
            />

            <figcaption className="mt-4 pt-3 border-t border-zinc-400 dark:border-zinc-400 flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/USERNAME"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                <Icon icon="streamline-logos:linkedin-logo-block" className="text-lg grayscale" />
              </a>

              <a
                href="mailto:email@domain.com"
                aria-label="Email"
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                <Icon icon="streamline-logos:google-mail-logo-solid" className="text-lg" />
              </a>

              <a
                href="https://instagram.com/wangskuy"
                aria-label="Instagram"
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                <Icon icon="streamline-logos:instagram-logo-2-block" className="text-lg" />
              </a>
            </figcaption>
          </motion.figure>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-6"
          >
            <p className="max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              A Bachelor’s degree in Information Technology provides a strong foundation in backend development and data management, with practical experience in building RESTful APIs, implementing authentication flows, and working with relational databases using Node.js, PHP, and MySQL.
            </p>

            <p className="max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              This background is complemented by a vocational web programming training program at PPKD Jakarta Pusat, focused on modern web application development, including PHP frameworks, responsive design principles, and hands-on exposure to the complete frontend–backend workflow.
            </p>

            <p className="max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              The overall development approach emphasizes clean architecture, structured data flow, and long-term maintainability, with a strong interest in building real-world applications that prioritize performance, security, and production-ready quality.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
