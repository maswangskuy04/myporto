import React, { useState } from 'react'
import { FaReact, FaLaravel } from 'react-icons/fa'
import { SiTailwindcss, SiMysql } from 'react-icons/si'
import { motion } from 'framer-motion'
import fotoPorto from '../assets/porto.png'

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
      image: 'https://placehold.co/600x400?text=To-Do+App',
      description: 'Aplikasi web Daftar Tugas yang modern dan efisien yang dibangun dengan Laravel dan Tailwind CSS. Ini memiliki antarmuka pengguna yang bersih dan responsif serta menggunakan API RESTful untuk komunikasi klien-server, dengan token otentikasi yang disimpan dengan aman di localStorage. Pengguna dapat membuat, memperbarui, dan menghapus tugas, serta mengorganisirnya berdasarkan kategori, menetapkan tenggat waktu, dan memfilter tugas berdasarkan status atau prioritas. Aplikasi ini dirancang untuk membantu pengguna mengelola aktivitas harian mereka dengan jelas dan produktif.',
      tools: ['Laravel', 'Tailwind CSS', 'MySQL'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'NabungCoy',
      image: 'https://placehold.co/600x400?text=NabungCoy',
      description: 'Ini adalah situs pelacak uang yang bersih dan ramah pengguna yang dibangun dengan Laravel dan Tailwind CSS. Ini membantu pengguna mencatat pendapatan dan pengeluaran mereka dengan mudah, seperti menyimpan uang. Dirancang dengan kesederhanaan dalam pikiran, situs ini menawarkan pengalaman yang lancar sambil menjaga data keuangan Anda terorganisir dan aman.',
      tools: ['Laravel', 'Tailwind CSS', 'MySQL'],
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
    <section id='projects' className='min-h-screen px-6 md:px-12 py-20 transition-colors duration-500 flex items-center justify-centermin-h-screen px-6 md:px-12 py-20 bg-white dark:bg-[#111111] transition-colors duration-500 flex items-center'>
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
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className={`bg-white rounded-lg max-w-lg w-full p-6 relative transform transition-all duration-300 ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <button onClick={closeModal} className='absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl'>&times;</button>
          <h3 className='text-2xl font-bold text-gray-800 mb-4'>{selectedProject.title}</h3>
          <img src={selectedProject.image} alt={selectedProject.title} className='mb-4 w-full h-48 object-cover rounded' />
          <p className='text-gray-700 mb-6'>{selectedProject.description}</p>
          <div className='mb-6'>
            <div className='flex flex-wrap gap-2'>
              {selectedProject.tools.map((tool, i) => (
                <div key={i} className='flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700'>
                  {toolIcons[tool]} {tool}
                </div>
              ))}
            </div>
          </div>
          <div className='flex gap-4'>
            <a href={selectedProject.demoLink} target='_blank' rel='noopener noreferrer' className='bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition'>Live Demo</a>
            <a href={selectedProject.codeLink} target='_blank' rel='noopener noreferrer' className='border border-teal-600 text-teal-600 px-4 py-2 rounded hover:bg-teal-600 hover:text-white transition'>Github</a>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Projects