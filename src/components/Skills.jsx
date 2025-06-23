import {
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiNodedotjs, SiReact,
  SiTailwindcss, SiBootstrap, SiGithub, SiLaravel,
  SiMysql,
  SiPhpmyadmin
} from 'react-icons/si';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    {
      icon: <SiHtml5 className="text-orange-600" />,
      name: 'HTML5',
    },
    {
      icon: <SiCss3 className="text-blue-600" />,
      name: 'CSS3',
    },
    {
      icon: <SiJavascript className="text-yellow-500" />,
      name: 'JavaScript',
    },
    {
      icon: <SiPhp className="text-indigo-600" />,
      name: 'PHP',
    },
    {
      icon: <SiNodedotjs className="text-green-600" />,
      name: 'Node.js',
    },
    {
      icon: <SiReact className="text-cyan-400" />,
      name: 'ReactJS',
    },
    {
      icon: <SiTailwindcss className="text-sky-500" />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiLaravel className='text-red-500' />,
      name: 'Laravel',
    },
    {
      icon: <SiBootstrap className="text-purple-600" />,
      name: 'Bootstrap',
    },
    {
      icon: <SiGithub className="text-gray-800 dark:text-white" />,
      name: 'GitHub',
    },
    {
      icon: <SiMysql className='text-cyan-700 dark:text-orange-400' />,
      name: 'MySQL'
    }
  ]

  return (
    <>
    <section id='skills' className='px-6 md:px-12 py-16 bg-white dark:bg-[#111111] transition-colors duration-500'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold text-gray-600 dark:text-white text-center mb-12'>Skills & Abilities</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {skills.map((skill, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: index * .1 }} viewport={{ once: false }} className='flip-card relative w-full h-40 sm:h-36 group cursor-pointer'>
              <div className='flip-card-inner w-full h-full relative'>
                <div className='flip-card-front border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 dark:text-white shadow-inner-soft transition-all duration-300 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-70 flex flex-col gap-4 items-center justify-center rounded-xl'>
                  <div className='text-5xl mb-2'>{skill.icon}</div>
                  <span className='text-sm sm:text-base font-medium'>{skill.name}</span>
                </div>
                <div className='flip-card-back relative bg-gradient-to-tr from-indigo-200/30 to-indigo-500/40 text-white shadow-lg flex items-center justify-center rounded-xl overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-sweep pointer-events-none'></div>
                  <div className='absolute inset-0 bg-[radial-gradient(#00f6ff33_1px,transparent_1px)] [background-size:8px_8px] opacity-10 pointer-events-none'></div>
                  <span className='text-4xl font-black tracking-widest bg-gradient-to-r from-sky-200 via-gray-200 to-rose-200 bg-clip-text text-transparent animate-shimmer bg-[length:300%_100%] drop-shadow-[0_0_12px_#67e8f9] z-10'>
                    RM
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Skills;
