import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

function Skills() {
  const categories = [
    {
      items: [
        { icon: <Icon icon="devicon:html5" />, name: 'HTML5' },
        { icon: <Icon icon="devicon:css3" />, name: 'CSS3' },
        { icon: <Icon icon="devicon:javascript" />, name: 'Javascript' },
        { icon: <Icon icon="devicon:php" />, name: 'PHP' },
        { icon: <Icon icon="devicon:cplusplus" />, name: 'C++' },
      ],
    },
    {
      items: [
        { icon: <Icon icon="devicon:nodejs-wordmark" />, name: 'Node.js (Runtime)' },
        { icon: <Icon icon="devicon:express" />, name: 'Express.js' },
        { icon: <Icon icon="devicon:react" />, name: 'ReactJS' },
        { icon: <Icon icon="devicon:jquery-wordmark" />, name: 'jQuery' },
        { icon: <Icon icon="devicon:tailwindcss" />, name: 'Tailwind CSS' },
        { icon: <Icon icon="devicon:laravel" />, name: 'Laravel' },
        { icon: <Icon icon="devicon-plain:codeigniter" color="#EE4323" />, name: 'CodeIgniter' },
        { icon: <Icon icon="devicon:bootstrap" />, name: 'Bootstrap' },
      ],
    },
    {
      items: [
        { icon: <Icon icon="devicon:github" className="rounded-full dark:bg-white" />, name: 'GitHub' },
        { icon: <Icon icon="devicon:mysql-wordmark" />, name: 'MySQL' },
        { icon: <Icon icon="devicon:postman" />, name: 'Postman' },
        { icon: <Icon icon="devicon:git" />, name: 'Git' },
        { icon: <Icon icon="devicon:npm-wordmark" />, name: 'Npm' },
        { icon: <Icon icon="devicon:vscode" />, name: 'Visual Studio Code' },
      ],
    },
  ]

  const isDark = document.documentElement.classList.contains("dark")

  return (
    <section id="skills" className="min-h-screen px-6 md:px-12 py-8 bg-white dark:bg-[#111111] transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-center mb-12">
          Skills & Abilities
        </h2>

        <div className="space-y-16">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="-mx-6 md:-mx-12">
                <Marquee
                  gradient={true}
                  gradientWidth={80}
                  gradientColor={isDark ? '#111' : '#fff'}
                  speed={35}
                  pauseOnHover={true}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  className="py-4 overflow-hidden bg-white dark:bg-[#111111]"
                >
                  {[...category.items, ...category.items].map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="mr-0 w-[180px] md:w-[200px] p-1 flex flex-col items-center justify-center text-center"
                    >
                      <div className="text-5xl mb-3 text-gray-700 dark:text-white">
                        {skill.icon}
                      </div>

                      <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </Marquee>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
