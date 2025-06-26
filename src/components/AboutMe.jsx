import fotoAboutMe from '../assets/foto_aboutme.jpg'
import { motion } from 'framer-motion'
import { BiSolidGraduation, BiCodeAlt, BiRocket } from "react-icons/bi";

function AboutMe() {
  const timelineItems = [
    {
      icon: <BiSolidGraduation />,
      title: 'College Days',
      desc: "I began my journey into web development during college, diving deep into HTML, CSS, and JavaScript fundamentals.",
    },
    {
      icon: <BiCodeAlt />,
      title: 'Building Projects',
      desc: "I've built a variety of fullstack applications using React, Tailwind CSS, Node.js, and Laravel, focusing on clean and maintainable code."
    },
    {
      icon: <BiRocket />,
      title: 'Looking Ahead',
      desc: "I'm eager to collaborate on exciting projects and continue growing as a developer, always pushing for better solutions."
    }
  ]

  return (
    <>
      <section id="aboutme" className="min-h-screen px-6 md:px-12 py-8 bg-white dark:bg-[#111111] transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-600 dark:text-white text-center mb-12">
            About Me
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {timelineItems.map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg border dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-3xl text-sky-600 mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe