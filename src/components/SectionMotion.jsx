import { motion } from "motion/react"

export default function SectionMotion({ id, className, children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.section>
  )
}
