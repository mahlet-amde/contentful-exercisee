import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  color: string
  title: string
  isExpanded: boolean
  index: number
  totalCards: number
}

export function FeatureCard({ color, title, isExpanded, index, totalCards }: FeatureCardProps) {
  return (
    <motion.div
      className={cn("w-full rounded-2xl overflow-hidden transition-all duration-500", "absolute left-0 right-0")}
      style={{
        backgroundColor: color,
        zIndex: totalCards - index,
        height: "29rem",
        top: isExpanded ? `${index * 10}rem` : `${index * 1.5}rem`, 
        opacity: isExpanded ? 1 : 0.9,
        transform: `scale(${isExpanded ? 1 : 0.95})`,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="p-8 text-white h-full flex flex-col justify-between">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className={cn("text-xl transition-opacity duration-500", isExpanded ? "opacity-100" : "opacity-0")}>
          This is the content for {title}. 
        </p>
      </div>
    </motion.div>
  )
}

