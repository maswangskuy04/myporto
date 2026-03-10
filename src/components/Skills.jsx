import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

function Skills() {
  const skills = [
    {
      title: "Frontend",
      description:
        "Technologies used to build responsive and interactive user interfaces, focusing on performance, accessibility, and clean component structure.",
      items: [
        { name: "HTML5", icon: "skill-icons:html" },
        { name: "CSS3", icon: "skill-icons:css" },
        { name: "JavaScript", icon: "skill-icons:javascript" },
        { name: "React", icon: "skill-icons:react-dark" },
        { name: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark" },
        { name: "Bootstrap", icon: "skill-icons:bootstrap" },
        { name: "jQuery", icon: "skill-icons:jquery" },
        { name: "Sass", icon: "skill-icons:sass" }
      ],
    },
    {
      title: "Backend",
      description:
        "Used for building server-side logic, REST APIs, authentication systems, and managing application architecture and database interactions.",
      items: [
        { name: "PHP", icon: "skill-icons:php-dark" },
        { name: "Node.js", icon: "skill-icons:nodejs-dark" },
        { name: "Laravel", icon: "skill-icons:laravel-dark" },
        { name: "Codeigniter 3", icon: "devicon-plain:codeigniter" },
        { name: "MySQL", icon: "skill-icons:mysql-dark" },
        { name: "Express.js", icon: "skill-icons:expressjs-dark" }
      ],
    },
    {
      title: "Tools",
      description:
        "Development tools used for version control, API testing, containerization, and improving development workflow and collaboration.",
      items: [
        { name: "Git", icon: "skill-icons:git" },
        { name: "GitHub", icon: "skill-icons:github-dark" },
        { name: "Postman", icon: "skill-icons:postman" },
        { name: "VS Code", icon: "skill-icons:vscode-dark" },
        { name: "Docker", icon: "skill-icons:docker" },
        { name: "Redis", icon: "skill-icons:redis-dark" }
      ],
    },
  ]

  return (
    <section id="skills" className="relative min-h-screen bg-[#f8f9fa] dark:bg-[#2d2e2e] px-6 md:px-12 py-16 transition-colors duration-500">
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-5">
        <header className='mb-8'>
          <motion.h2
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl text-center md:text-left uppercase text-zinc-900 dark:text-zinc-100"
          >
            Tech Stack
          </motion.h2>
        </header>

        <div className="space-y-16">
          {skills.map((group, i) => (
            <motion.section
              key={group.title}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-2 text-xs uppercase text-zinc-600 dark:text-zinc-300">
                {group.title}
              </h3>

              <p className='mb-6 max-w-xl text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                {group.description}
              </p>

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
