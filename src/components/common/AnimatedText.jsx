import { motion } from "framer-motion"

export default function AnimatedText({ text, className = "" }) {
  const letters = text.split("")

  return (
    <motion.p
      className={className}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.95 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                delay: i * 0.03, 
                type: "spring", 
                stiffness: 120 
              } 
            }
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  )
}
