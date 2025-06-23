import React, { useState } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiNodedotjs, SiReact,
  SiTailwindcss, SiBootstrap, SiGithub, SiLaravel
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

function Skills() {
 const [modalSkill, setModalSkill] = useState(null)

  const skills = [
    {
      icon: <SiHtml5 className="text-orange-600" />,
      name: 'HTML5',
      desc: 'Membangun struktur web yang semantik dan responsif menggunakan elemen-elemen HTML5 modern.'
    },
    {
      icon: <SiCss3 className="text-blue-600" />,
      name: 'CSS3',
      desc: 'Mendesain tampilan responsif dengan Flexbox, Grid, dan animasi CSS untuk pengalaman pengguna yang optimal.'
    },
    {
      icon: <SiJavascript className="text-yellow-500" />,
      name: 'JavaScript',
      desc: 'Membuat website yang interaktif menggunakan DOM manipulation, event handling, dan integrasi REST API.'
    },
    {
      icon: <SiPhp className="text-indigo-600" />,
      name: 'PHP',
      desc: 'Mengembangkan backend dinamis menggunakan PHP, termasuk koneksi database MySQL dan pembuatan RESTful API.'
    },
    {
      icon: <SiNodedotjs className="text-green-600" />,
      name: 'Node.js',
      desc: 'Membangun backend menggunakan Node.js dan Express, termasuk integrasi MySQL dan penggunaan WebSocket untuk komunikasi real-time.'
    },
    {
      icon: <SiReact className="text-cyan-400" />,
      name: 'React',
      desc: 'Membangun UI interaktif dengan React, menggunakan Hooks untuk mengelola state dan side effect.'
    },
    {
      icon: <SiTailwindcss className="text-sky-500" />,
      name: 'Tailwind CSS',
      desc: 'Mengembangkan antarmuka cepat dengan utility-first CSS menggunakan Tailwind, termasuk desain responsif, dark mode, dan kustomisasi.'
    },
    {
      icon: <SiLaravel className='text-red-500' />,
      name: 'Laravel',
      desc: 'Membuat aplikasi web skalabel dengan Laravel, mengelola routing, middleware, serta integrasi database dan autentikasi.'
    },
    {
      icon: <SiBootstrap className="text-purple-600" />,
      name: 'Bootstrap',
      desc: 'Membangun landing page dan dashboard admin menggunakan Bootstrap, dengan pemanfaatan grid system, komponen UI, dan responsivitas.'
    },
    {
      icon: <SiGithub className="text-gray-800 dark:text-white" />,
      name: 'GitHub',
      desc: 'Mengelola kode versi proyek menggunakan GitHub, familiar dengan branching, pull request, dan kolaborasi tim melalui Git workflow.'
    }
  ]

  return (
    <>
    <section id='skills' className='px-6 md:px-12 py-16 bg-white dark:bg-[#111111] transition-colors duration-500 flex items-center'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-gray-600 dark:text-white text-center mb-12'>Skills</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {skills.map((skill, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: index * .1 }} viewport={{ once: false }} className='flip-card relative w-full h-40 sm:h-36 group cursor-pointer' onClick={() => setModalSkill(skill)}>
              <div className='flip-card-inner w-full h-full relative'>
                <div className='flip-card-front border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 dark:text-white shadow-inner-soft transition-all duration-300 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-70 flex flex-col gap-4 items-center justify-center rounded-xl'>
                  <div className='text-5xl mb-2'>{skill.icon}</div>
                  <span className='text-sm sm:text-base font-medium'>{skill.name}</span>
                </div>
                <div className='flip-card-back relative bg-gradient-to-tr from-indigo-200/30 to-indigo-500/40 text-white shadow-lg flex items-center justify-center rounded-xl overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-sweep pointer-events-none'></div>
                  <div className='absolute inset-0 bg-[radial-gradient(#00f6ff33_1px,transparent_1px)] [background-size:8px_8px] opacity-10 pointer-events-none'></div>
                  <span className='text-4xl font-black tracking-widest bg-gradient-to-r from-sky-200 via-gray-200 to-rose-200 bg-clip-text text-transparent animate-shimmer bg-[length:300%_100%] drop-shadow-[0_0_12px_#67e8f9] z-10'>
                    RM
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <AnimatePresence>
      {modalSkill && (
        <motion.div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModalSkill(null)}>
          <motion.div className='bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl max-w-md w-full shadow-2xl relative' initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: .8, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
            <div className='text-4xl mb-4'>{modalSkill.icon}</div>
            <h3 className='text-xl font-bold mb-2'>{modalSkill.name}</h3>
            <p className='text-sm leading-relaxed'>{modalSkill.desc}</p>
            <button onClick={() => setModalSkill(null)} className='mt-4 text-sm text-red-600 hover:underline'>Tutup</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Skills;
