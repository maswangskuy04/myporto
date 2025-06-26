import fotoAboutMe from '../assets/foto_aboutme.jpg'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Tilt from 'react-parallax-tilt'

function AboutMe() {
  const timelineItems = [
    {
      icon: <Icon icon="game-icons:graduate-cap" />,
      title: 'Getting Started',
      desc: "Started my journey at Bina Sarana Informatika University, where I first got into HTML, CSS, PHP, and JavaScript.",
    },
    {
      icon: <Icon icon="iconoir:code" width="24" height="24" />,
      title: 'Building Projects',
      desc: "Built fullstack apps using React, Tailwind, Node.js, and Laravel — always learning, always building.",
    },
    {
      icon: <Icon icon="mingcute:rocket-line" />,
      title: 'Looking Ahead',
      desc: "Excited to grow, take on new challenges, and build something that matters.",
    }
  ]

  return (
    <section id="about" className="min-h-screen px-6 md:px-12 py-8 bg-white dark:bg-[#111111] transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent z-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center"
        >
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareBorderRadius='5%' scale={1.05} glareMaxOpacity={0.2}>
            <img
              src={fotoAboutMe}
              alt="Reyhan Marlizal"
              className="rounded-2xl w-64 h-64 object-cover"
            />
          </Tilt>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Reyhan Marlizal</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Fullstack Web Developer</p>
        </motion.div>

        <div className="flex flex-col gap-10 relative">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-white mb-4">About Me</h2>

          {timelineItems.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.25 }}
              className="relative ml-6 md:ml-12 bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl"
            >
              <div className="absolute -left-10 md:-left-14 top-4 w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 text-white flex items-center justify-center shadow-md text-xl">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
