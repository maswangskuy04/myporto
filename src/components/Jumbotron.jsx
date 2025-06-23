import React, { useEffect, useState } from 'react'
import fotoGue from '../assets/foto_gue.png'
import { Typewriter } from 'react-simple-typewriter'
import { motion, useAnimation } from 'framer-motion'

function Jumbotron() {

  return (
    <>
    <section className='min-h-screen px-6 md:px-12 py-20 bg-white dark:bg-[#111111] transition-colors duration-500 flex items-center'>
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-10'>
        <div className="flex justify-center w-full md:w-1/2">
          <motion.div
            transition={{ duration: .5 }}
            className="relative p-1 rounded-full bg-gradient-to-tr from-teal-500 to-purple-600 shadow-lg dark:from-teal-700 dark:to-purple-700"
          >
            <div style={{ background: 'linear-gradient(to top right, #14b8a6, #8b5cf6)', filter: 'blur(20px)', opacity: .5 }} className='absolute inset-0 z-0 rounded-full animate-pulse'></div>
            <img
              src={fotoGue}
              alt="Foto Reyhan"
              className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-[6px] border-white dark:border-gray-700 shadow-xl transition-all duration-500 ease-in-out hover:scale-110 hover:grayscale-0 hover:brightness-110"
            />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5, delay: .4 }} className='w-full md:w-1/2 text-center md:text-left'>
          <h1 className='text-4xl md:text-5xl font-extrabold dark:text-gray-300 text-gray-900 leading-snug mb-4'>
            Hi, I'm <span className='text-teal-600 dark:text-teal-400'>Reyhan Marlizal</span>
          </h1>
          <p className='text-lg md:text-xl dark:text-gray-300 text-gray-700 font-medium mb-6'>
            <span className='text-sky-600 dark:text-sky-400 font-semibold'>
              <Typewriter
                words={['Fullstack Web Developer', 'Tech Problem Solver']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>{'  '}
            <span className='text-gray-600 dark:text-gray-400'>I specialize in crafting performant fullstack web applications with clean, maintainable code.</span>
          </p>
          <div className='flex justify-center md:justify-start'>
            <a href="https://wa.me/6289525577041" className='px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-700 dark:hover:bg-gray-200'>Let's Talk</a>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default Jumbotron