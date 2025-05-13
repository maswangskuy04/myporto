import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiNodedotjs, SiReact, SiTailwindcss, SiBootstrap, SiGithub  } from 'react-icons/si';
import { motion } from 'framer-motion'

function Skills() {
  const skills = [
    { icon: <SiHtml5 className="text-orange-600" />, name: 'HTML5' },
    { icon: <SiCss3 className="text-blue-600" />, name: 'CSS3' },
    { icon: <SiJavascript className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <SiPhp className="text-indigo-600" />, name: 'PHP' },
    { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
    { icon: <SiReact className="text-cyan-400" />, name: 'React' },
    { icon: <SiTailwindcss className="text-sky-500" />, name: 'Tailwind CSS' },
    { icon: <SiBootstrap className="text-purple-600" />, name: 'Bootstrap' },
    { icon: <SiGithub className="text-gray-800 dark:text-white" />, name: 'GitHub' }
  ]

  return (
    <>
    <section id='skills' className='min-h-screen px-6 md:px-12 py-20 bg-white dark:bg-[#111111] transition-colors duration-500 flex items-center'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-gray-600 dark:text-white text-center mb-12'>Skills</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          { skills.map((skill, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: index * .1 }} viewport={{ once: false }} className='flip-card relative w-full h-40 sm:h-36 group'>
              <div className='flip-card-inner w-full h-full relative'>
                {/* Depan */}
                <div className='flip-card-front border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white shadow-lg transition-all duration-300 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-70 flex flex-col gap-4 items-center justify-center rounded-xl'>
                  <div className='text-5xl mb-2'>{skill.icon}</div>
                  <span className='text-sm sm:text-base font-medium'>{skill.name}</span>
                </div>
                {/* Belakang */}
                <div className='flip-card-back bg-gray-500 dark:bg-gray-800 text-white shadow text-center'>
                  <span className='text-sm text-center px-4'>
                    {skill.name === 'HTML5' ? 'Markup semantik untuk web yang SEO-friendly dan accessible.' : ''}
                    {skill.name === 'CSS3' ? 'Desain responsif dengan Flexbox, Grid, dan animasi CSS.' : ''}
                    {skill.name === 'JavaScript' ? 'DOM manipulation, API integration, dan event handling untuk web interaktif.' : ''}
                    {skill.name === 'PHP' ? 'Backend development dengan PHP, Laravel, dan MySQL untuk aplikasi dinamis dan API.' : ''}
                    {skill.name === 'Node.js' ? 'Backend development dengan Node.js, API menggunakan MySQL, dan pengalaman dengan WebSocket.' : ''}
                    {skill.name === 'React' ? 'Membangun UI interaktif dengan React. Terbiasa pakai Hooks (useState, useEffect) untuk ngatur state & side effect.' : ''}
                    {skill.name === 'Tailwind CSS' ? 'Build UI cepat dengan utility class. Terbiasa pakai responsive design, dark mode, custom config, dan integrasi React.' : ''}
                    {skill.name === 'Bootstrap' ? 'Pengalaman menggunakan Bootstrap untuk landing page dan admin panel. Familiar dengan grid, navbar, dan modal.' : ''}
                    {skill.name === 'GitHub' ? 'Berpengalaman menggunakan GitHub dalam proyek tertentu, dengan pemahaman Git workflow seperti commit, branch, dan pull request.' : ''}
                  </span>
                </div>
              </div>
            </motion.div>
          )) }
        </div>
      </div>
    </section>
    </>
  )
}

export default Skills