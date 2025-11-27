import fotoAboutMe from '../assets/foto_aboutme.jpg'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

function AboutMe() {
  return (
    <section id="about" className="min-h-screen px-6 md:px-12 py-8 bg-white dark:bg-[#111111] transition-colors duration-500">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-center mb-12">
          About Me
        </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-center justify-center'
        >
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareBorderRadius="5%" scale={1.05} glareMaxOpacity={0.2}>
            <img
              src={fotoAboutMe}
              alt="Portrait of Reyhan Marlizal"
              className="rounded-2xl w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-white dark:border-[#1a1a1a] shadow-md"
            />
          </Tilt>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-4">Reyhan Marlizal</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Web Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="p-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center"
        >
          <p className="mb-4">
            My journey in web development started at <strong>Bina Sarana Informatika University</strong>, where I first discovered the magic of building websites with HTML, CSS, PHP, and JavaScript. I quickly fell in love with the craft — experimenting, building, failing, learning.
          </p>

          <p className="mb-4">
            Since then, I’ve developed fullstack applications using React, Tailwind CSS, Node.js, and Laravel. I enjoy transforming ideas into fast, scalable products — especially those that push me to grow.
          </p>

          <p>
            What’s next? I'm constantly learning, growing, and leveling up. Whether it's a solo project or part of a great team, I’m ready to build something impactful.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
