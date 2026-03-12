import fotoAboutMe from "../assets/foto_aboutme.png"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

function AboutMe() {
  const primaryStack = [
    "Laravel",
    "PHP",
    "Node.js",
    "React",
    "MySQL",
    "Docker",
    "Redis"
  ]

  return (
    <section id="profile" className="relative min-h-screen bg-[#f8f9fa] dark:bg-[#2d2e2e] px-6 md:px-12 py-16 transition-colors duration-500">
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl text-center md:text-left uppercase text-zinc-900 dark:text-zinc-100"
        >
          Profile
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden md:flex justify-start"
          >
            <div className="relative w-65 h-[380px] overflow-hidden rounded-xl">
              <img
                src={fotoAboutMe}
                alt="Portrait"
                className="w-full h-full object-cover grayscale-0 dark:grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs tracking-widest uppercase opacity-70">
                  Backend Developer
                </p>
                <p className="text-sm font-semibold">
                  Reyhan Marlizal
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl">
              <p>
                Backend Developer with a background in Information Technology
                and experience developing web applications using Laravel.
                Skilled in building backend features such as RESTful APIs,
                authentication systems, role-based access control, and
                relational database management.
              </p>
              <p>
                Experienced in working with MVC architecture while maintaining
                clean code structure, organized data management, and reliable
                backend services for web applications.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                Technologies I Use
              </p>

              <div className="flex flex-wrap gap-2 max-w-xl">
                {primaryStack.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-6 pt-2 text-zinc-600 dark:text-zinc-400 text-xl">
              <a href="https://github.com/maswangskuy04" className="hover:text-zinc-900 dark:hover:text-white">
                <Icon icon="mdi:github" />
              </a>
              <a href="https://www.linkedin.com/in/reyhan-marlizal" className="hover:text-zinc-900 dark:hover:text-white">
                <Icon icon="mdi:linkedin" />
              </a>
              <a href="mailto:reyhanmarlizal@gmail.com" className="hover:text-zinc-900 dark:hover:text-white">
                <Icon icon="mdi:email-outline" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe