import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      items: [
        { icon: <Icon icon="devicon:html5" />, name: 'HTML5' },
        { icon: <Icon icon="devicon:css3" />, name: 'CSS3' },
        { icon: <Icon icon="devicon:javascript" />, name: 'Javascript' },
        { icon: <Icon icon="devicon:php" />, name: 'PHP' },
        { icon: <Icon icon="devicon:cplusplus" />, name: 'C++' },
        { icon: <Icon icon="devicon:java" />, name: 'Java' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { icon: <Icon icon="devicon:nodejs-wordmark" />, name: 'Node.js (Runtime)' },
        { icon: <Icon icon="devicon:express" />, name: 'Express.js' },
        { icon: <Icon icon="devicon:react" />, name: 'ReactJS' },
        { icon: <Icon icon="devicon:jquery-wordmark" />, name: 'jQuery' },
        { icon: <Icon icon="devicon:tailwindcss" />, name: 'Tailwind CSS' },
        { icon: <Icon icon="devicon:laravel" />, name: 'Laravel' },
        { icon: <Icon icon="devicon-plain:codeigniter" color='#EE4323' />, name: 'Codeigniter' },
        { icon: <Icon icon="devicon:bootstrap" />, name: 'Bootstrap' },
      ],
    },
    {
      title: 'Tools & Platforms',
      items: [
        { icon: <Icon icon="devicon:github" className='rounded-full dark:bg-white' />, name: 'GitHub' },
        { icon: <Icon icon="devicon:mysql-wordmark" />, name: 'MySQL' },
        { icon: <Icon icon="devicon:postman" />, name: 'Postman' },
        { icon: <Icon icon="devicon:git" />, name: 'Git' },
        { icon: <Icon icon="devicon:npm-wordmark" />, name: 'Npm' },
        { icon: <Icon icon="devicon:vscode" />, name: 'Visual Studio Code' },
        { icon: <Icon icon="devicon:netbeans" />, name: 'Netbeans' },
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen px-6 md:px-12 py-8 bg-white dark:bg-[#111111] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium text-gray-600 dark:text-white text-center mb-12">
          Skills & Abilities
        </h2>
        <div className="space-y-12">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-6">
                {category.title}
              </h3>
              <div className="overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory py-2">
                <div className="flex gap-6 px-1">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 snap-start w-[220px] rounded-xl bg-gray-50 dark:bg-[#242423] border border-gray-200 dark:border-[#333] p-6 flex flex-col items-center justify-center text-center shadow"
                    >
                      <div className="text-5xl mb-2 text-gray-700 dark:text-white">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills