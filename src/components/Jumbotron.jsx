import React from 'react'
import fotoGue from '../assets/foto_gue.png'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

function Jumbotron() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-[#111111]">      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
            <motion.img
              src={fotoGue}
              alt="Reyhan"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-gray-300 shadow-xl object-cover"
            />
          </Tilt>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left text-gray-900 dark:text-white"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm Reyhan Marlizal
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-3 h-8">
            <Typewriter
              words={['Fullstack Web Developer', 'Tech Enthusiast', 'Problem Solver']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </p>

          <p className="text-gray-700 dark:text-gray-400 max-w-md leading-relaxed mb-6">
            I create fast, responsive, and maintainable web applications using modern technologies like React, Node.js, and Laravel.
          </p>

          <motion.a
            href="https://wa.me/6289525577041"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-6 py-3 bg-gradient-to-tr from-teal-500 via-sky-500 to-indigo-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Jumbotron
