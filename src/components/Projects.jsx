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
      description: 'A personal portfolio built with React and TailwindCSS.',
      tools: ['React', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'To-Do App',
      image: fotoTodoApp,
      description: 'Aplikasi manajemen tugas modern berbasis Laravel dan Tailwind CSS dengan antarmuka bersih dan responsif. Mendukung RESTful API dan token autentikasi via localStorage. Fitur utama: CRUD tugas, pengelompokan berdasarkan kategori, tenggat waktu, serta filter berdasarkan status dan prioritas. Dirancang untuk membantu pengguna mengelola aktivitas harian secara efisien dan terstruktur.',
      tools: ['Laravel', 'Tailwind CSS', 'MySQL'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'BookingYuk',
      image: fotoBookingYuk,
      description: 'BookingYuk sistem informasi berbasis web yang dirancang untuk mempermudah proses pemesanan event. Menyediakan layanan pemesanan event yang efisien, terorganisir, dan mudah diakses, baik untuk pengguna umum maupun pihak penyelenggara/admin.',
      tools: ['Laravel','React', 'Tailwind CSS', 'MySQL'],
      demoLink: '#',
      codeLink: '#'
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
    <section id='projects' className='px-6 md:px-12 py-16 bg-white dark:bg-[#111111] transition-colors duration-500 flex items-center'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-gray-600 dark:text-white text-center mb-12'>Projects</h2>
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
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto px-4 py-8">
        <div className="flex min-h-full items-center justify-center">
          <div className={`bg-white rounded-lg w-full max-w-2xl mx-auto relative transform transition-all duration-300 ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="max-h-[90vh] overflow-y-auto p-6">
              <button onClick={closeModal} className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl">
                &times;
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.title}</h3>
              <img src={selectedProject.image} alt={selectedProject.title} className="mb-4 w-full h-48 object-cover rounded"/>
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      {toolIcons[tool]} {tool}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition text-center">
                  Live Demo
                </a>
                <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" className="border border-teal-600 text-teal-600 px-4 py-2 rounded hover:bg-teal-600 hover:text-white transition text-center">
                  Github
                </a>
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