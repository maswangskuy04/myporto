import React, { useState } from 'react'
import { FaReact, FaLaravel } from 'react-icons/fa'
import { SiTailwindcss, SiMysql } from 'react-icons/si'
import { motion } from 'framer-motion'
import fotoPorto from '../assets/porto.png'
import fotoBookingYuk from '../assets/bookingyuk.png'
import fotoTodoApp from '../assets/todoapp.png'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const toolIcons = {
    'React': <FaReact className='text-blue-500' />,
    'Tailwind CSS': <SiTailwindcss className='text-teal-400' />,
    'Laravel': <FaLaravel className='text-red-600' />,
    'MySQL': <SiMysql className='text-blue-600' />,
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
      description: 'Task manager with Laravel, Tailwind CSS, REST API, and smart filtering.',
      tools: ['Laravel', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'BookingYuk',
      image: fotoBookingYuk,
      description: 'Web-based event booking system for users and organizers, built for efficiency and ease of use.',
      tools: ['Laravel','React', 'Tailwind CSS', 'MySQL'],
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setTimeout(() => setShowModal(true), 10)
  }
  const closeModal = () => {
    setShowModal(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
    <section id='projects' className='min-h-screen px-6 md:px-12 py-8 bg-white dark:bg-[#111111] transition-colors duration-500'>

      <div className='max-w-6xl mx-auto relative'>
        <h2 className='text-3xl font-medium text-gray-600 dark:text-white text-center mb-12'>Projects</h2>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
          { projects.map((project, index) => (
            <motion.div key={index} onClick={() => openModal(project)} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .3, delay: index * .1 }} viewport={{ once: false }} whileHover={{ y: -5 }} className='cursor-pointer bg-white dark:bg-[#333] rounded-lg overflow-hidden shadow-lg'>
              <img src={project.image} alt={project.title}  className='w-full h-48 object-cover rounded-t-lg' />
              <div className='p-6'>
                <h3 className='text-xl font-semibold dark:text-white text-gray-800'>{project.title}</h3>
              </div>
            </motion.div>
          )) }
        </div>
      </div>
    </section>

    {/* modal */}
    {selectedProject && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto px-4 py-8" onClick={closeModal}>
        <div className="flex min-h-full items-center justify-center">
          <div className={`bg-white rounded-lg w-full max-w-xl mx-auto relative transform transition-all duration-300 ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} onClick={(e) => e.stopPropagation()}>
            <div className="max-h-[90vh] overflow-y-auto p-6">
              <button onClick={closeModal} className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl">
                &times;
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.title}</h3>
              <img src={selectedProject.image} alt={selectedProject.title} className="mb-6 w-full h-48 object-cover rounded"/>
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {toolIcons[tool]} {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Projects