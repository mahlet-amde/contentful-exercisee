import type React from "react"
import { motion } from "framer-motion"
import type { CardProps } from "../types/card"

export const Card: React.FC<CardProps> = ({ title, content, color, index }) => {
  return (
    <motion.div
      className={`card ${color} p-6 rounded-lg shadow-lg`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{content}</p>
    </motion.div>
  )
}

