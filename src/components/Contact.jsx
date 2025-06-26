import { motion } from 'framer-motion'
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-12 py-8 bg-white dark:bg-[#111111] transition-colors duration-500"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-medium text-gray-600 dark:text-white text-center mb-12"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-600 dark:text-gray-300 text-lg mb-10"
        >
          Feel free to reach out for opportunities, collaborations, or just a friendly chat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-left space-y-4 text-gray-800 dark:text-gray-200"
        >
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:reyhanmarlizal@gmail.com" className="hover:underline">
              reyhanmarlizal@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <FaWhatsapp className="text-green-500" />
            <a href="https://wa.me/6289525577041" target="_blank" rel="noopener noreferrer" className="hover:underline">
              +62 895-2557-7041
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
