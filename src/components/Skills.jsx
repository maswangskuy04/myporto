import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

function Skills() {
  const skills = [
    {
      title: 'Frontend',
      items: [
        { name: 'HTML5', icon: 'skill-icons:html' },
        { name: 'CSS3', icon: 'skill-icons:css' },
        { name: 'JavaScript', icon: 'skill-icons:javascript' },
        { name: 'React', icon: 'skill-icons:react-dark' },
        { name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
        { name: 'Bootstrap', icon: 'skill-icons:bootstrap' },
        { name: 'jQuery', icon: 'skill-icons:jquery' }
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'PHP', icon: 'skill-icons:php-dark' },
        { name: 'Node.js', icon: 'skill-icons:nodejs-dark' },
        { name: 'Laravel', icon: 'skill-icons:laravel-dark' },
        { name: 'Codeigniter 3', icon: 'devicon-plain:codeigniter' },
        { name: 'MySQL', icon: 'skill-icons:mysql-dark' },
        { name: 'Express.js', icon: 'skill-icons:expressjs-dark' }
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'Git', icon: 'skill-icons:git' },
        { name: 'GitHub', icon: 'skill-icons:github-dark' },
        { name: 'Postman', icon: 'skill-icons:postman' },
        { name: 'VS Code', icon: 'skill-icons:vscode-dark' },
        { name: 'Docker', icon: 'skill-icons:docker' },
        { name: 'Redis', icon: 'skill-icons:redis-dark' }
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen bg-[#f8f9fa] dark:bg-[#2d2e2e] px-6 md:px-12 py-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col space-y-5">
        <div className='mb-8'>
          <h2 className="text-3xl md:text-4xl text-center md:text-left uppercase text-zinc-900 dark:text-zinc-100">
            Tools & Technologies
          </h2>
        </div>

        <div className="space-y-20">
          {skills.map((group, i) => (
            <motion.section
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-6 text-xs uppercase text-zinc-600 dark:text-zinc-300">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-x-10 gap-y-6">
                {group.items.map((item) => (
                  <div key={item.name} className="group flex items-center gap-3">
                    <Icon
                      icon={item.icon}
                      className="text-xl text-zinc-700 dark:text-zinc-300 opacity-80 group-hover:opacity-100 grayscale-0 dark:grayscale transition"
                    />
                    <span className="text-sm text-zinc-800 dark:text-zinc-100 tracking-wide">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
