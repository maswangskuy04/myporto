import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

function Experience() {

  const experiences = [
    {
      role: "Junior Web Programmer Training",
      company: "Pusat Pelatihan Kerja Daerah Jakarta Pusat",
      period: "Jul 2024 — Sep 2024",
      points: [
        "Participated in Laravel web development training using MVC architecture",
        "Implemented authentication, authorization, and session management",
        "Built RESTful APIs and backend services",
        "Developed social media web app with CRUD posts and comments",
        "Applied modular structure and Eloquent ORM"
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Distrik Navigasi Kelas I Tanjung Priok",
      period: "Aug 2022 — Nov 2022",
      points: [
        "Developed ship traffic management system using Laravel",
        "Implemented multi-role system (Admin, Operator, Agent)",
        "Built CRUD features for ship scheduling",
        "Designed relational database structure",
        "Collaborated with internal operational teams"
      ]
    }
  ]

  return (
    <section id="experience" className="relative min-h-screen bg-[#f8f9fa] dark:bg-[#2d2e2e] px-6 md:px-12 py-16 transition-colors duration-500">
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-5">
        <header className="mb-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl text-center md:text-left uppercase text-zinc-900 dark:text-zinc-100"
          >
            Experience
          </motion.h2>
        </header>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[200px_1fr] gap-6"
            >
              <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                {exp.period}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
                  {exp.company}
                </p>
                <div className="space-y-3">
                  {exp.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Icon icon="ei:chevron-right" className="text-zinc-600 dark:text-zinc-300 mt-[3px]" width="16"/>
                      <p className="font-averia leading-relaxed">{point}</p>
                    </div>
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

export default Experience