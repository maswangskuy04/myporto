import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import fotoPorto from '../assets/porto.png'
import fotoBookingYuk from '../assets/bookingyuk.png'
import fotoTodoApp from '../assets/todoapp.png'
import fotoAdaGue from '../assets/adague.png'
import converteryt from '../assets/converteryt.png'
import ProjectDescription from './common/ProjectDescription'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const toolIcons = {
    'React': 'skill-icons:react-dark',
    'Tailwind CSS': 'skill-icons:tailwindcss-dark',
    'Laravel': 'skill-icons:laravel-dark',
    'MySQL': 'skill-icons:mysql-dark',
    'Node.js': 'skill-icons:nodejs-dark',
    'Express.js': 'skill-icons:expressjs-dark',
    'Socket.IO': 'devicon:socketio',
    'JWT': 'devicon:jwt',
    'TypeScript': 'skill-icons:typescript',
    'Redis': 'skill-icons:redis-dark',
  }

  const projects = [
    {
      title: 'Portofolio Website',
      image: fotoPorto,
      description: 'Personal portfolio website showcasing my projects and skills.',
      tools: ['React', 'Tailwind CSS'],
    },
    {
      title: 'To-Do App',
      image: fotoTodoApp,
      description: 'Task management application with RESTful API architecture, smart filtering, and relational database design using Laravel and MySQL.',
      tools: ['Laravel', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'BookingYuk',
      image: fotoBookingYuk,
      description: 'Event booking system with role-based access, RESTful API architecture, and MySQL-backed data management.',
      tools: ['Laravel', 'React', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'AdaGue',
      image: fotoAdaGue,
      description: 'A real-time 1:1 chat platform built to connect users instantly through automatic matching, secure authentication, and live presence updates.',
      tools: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'JWT', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'Converter YouTube',
      image: converteryt,
      description: 'A YouTube to MP3 conversion platform with real-time progress updates, WebSocket communication, and a scalable backend designed to handle asynchronous processing efficiently.',
      tools: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Socket.IO', 'Tailwind CSS', 'Redis'],
    },
  ]

  return (
    <>
      <section id="projects" className="min-h-screen bg-[#f5f3f0] dark:bg-[#231f20] px-6 md:px-12 py-16 transition-colors duration-500">
        <div className="max-w-6xl mx-auto flex flex-col space-y-5">
          <div className='mb-6'>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl text-center md:text-left uppercase text-zinc-900 dark:text-zinc-100"
            >
              My Projects
            </motion.h2>
          </div>

          <ul className="divide-y divide-zinc-400 dark:divide-zinc-500">
            {projects.map((project, index) => (
              <li key={index} className="relative">
                <motion.button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="group w-full text-left focus:outline-none"
                >
                  <article className="md:hidden py-5 space-y-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/9] object-cover grayscale contrast-125"
                    />

                    <div>
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        {project.tools.join(', ')}
                      </p>
                    </div>
                  </article>

                  <article className="hidden md:flex items-start gap-6 py-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="cust-image-project"
                    />

                    <div className="flex-1 space-y-1">
                      <h3 className="text-sm uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        {project.tools.join(' – ')}
                      </p>
                    </div>

                    <span className="flex items-center gap-1.5 text-xs font-mono uppercase text-zinc-500 dark:text-zinc-300 opacity-0 group-hover:opacity-100 transition">
                      view
                      <Icon icon='line-md:chevron-small-right' className='text-lg' />
                    </span>
                  </article>
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/70 px-4 py-10"
          onClick={() => setSelectedProject(null)}
        >
          <motion.article
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-zinc-100 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-600 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          >
            <header className="px-5 py-3 border-b border-zinc-400 dark:border-zinc-600 flex justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
                Project Archive
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-lg text-red-500"
              >
                <Icon icon="line-md:close-small" />
              </button>
            </header>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full object-cover grayscale-0 dark:grayscale"
            />

            <div className="flex-1 px-5 py-4 overflow-y-auto space-y-4">
              <h3 className="text-sm text-zinc-700 dark:text-zinc-200 uppercase tracking-wide">
                {selectedProject.title}
              </h3>

              <ProjectDescription text={selectedProject.description} />

              <div className="pt-3 border-t border-zinc-400 dark:border-zinc-600">
                <p className="text-xs font-bold text-zinc-700 dark:text-zinc-200 uppercase mb-2">
                  Stack
                </p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProject.tools.map((tool, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 opacity-80 hover:opacity-100 transition"
                    >
                      {toolIcons[tool] && (
                        <Icon
                          icon={toolIcons[tool]}
                          className="text-sm grayscale-0 dark:grayscale"
                          aria-hidden
                        />
                      )}
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </>
  )
}

export default Projects
