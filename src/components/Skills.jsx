import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion';

function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      items: [
        { icon: <Icon icon="devicon:html5" />, name: 'HTML5' },
        { icon: <Icon icon="devicon:css3" />, name: 'CSS3' },
        { icon: <Icon icon="devicon:javascript" />, name: 'JavaScript' },
        { icon: <Icon icon="devicon:php" />, name: 'PHP' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { icon: <Icon icon="devicon:nodejs-wordmark" />, name: 'Node.js' },
        { icon: <Icon icon="devicon:react" />, name: 'ReactJS' },
        { icon: <Icon icon="devicon:tailwindcss" />, name: 'Tailwind CSS' },
        { icon: <Icon icon="devicon:laravel" />, name: 'Laravel' },
        { icon: <Icon icon="devicon:bootstrap" />, name: 'Bootstrap' },
      ]
    },
    {
      title: 'Tools & Platforms',
      items: [
        { icon: <Icon icon="devicon:github" />, name: 'GitHub' },
        { icon: <Icon icon="devicon:mysql-wordmark" />, name: 'MySQL' },
        { icon: <Icon icon="devicon:postman" />, name: 'Postman' },
        { icon: <Icon icon="devicon:git" />, name: 'Git' },
        { icon: <Icon icon="devicon:vscode" />, name: 'Visual Studio Code' },
      ]
    }
  ]

  return (
    <section id='skills' className='min-h-screen px-6 md:px-12 py-8 bg-white dark:bg-[#111111] transition-colors duration-500'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-medium text-gray-600 dark:text-white text-center mb-12'>Skills & Abilities</h2>
        {categories.map((category, i) => (
          <div key={i} className='mb-10'>
            <h3 className='text-lg font-medium text-gray-600 dark:text-white mb-6'>{category.title}</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
              {category.items.map((skill, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: false }} className='w-full h-36 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white shadow-inner-soft flex flex-col gap-4 items-center justify-center rounded-xl'>
                  <div className='text-5xl mb-2'>{skill.icon}</div>
                  <span className='text-sm sm:text-base font-medium'>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
