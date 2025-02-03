"use client"

import { useRef, useEffect, useState } from "react"
import { FeatureCard } from "./FeatureCard"
import CardWithImage from "./CardWithImage"

const FEATURES = [
  { color: "#3B82F6", title: "Blue Card" },
  { color: "#F59E0B", title: "Orange Card" },
  { color: "#10B981", title: "Green Card" },
  { color: "#F59E0B", title: "Orange Card" },
]

export function StackedCards() {
  const [expandedIndex, setExpandedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollDirection = scrollTop > lastScrollTop.current ? "down" : "up"
        lastScrollTop.current = scrollTop

        const containerVisibility = (window.innerHeight - top) / height

        if (scrollDirection === "up") {
          const newExpandedIndex = Math.floor(containerVisibility * FEATURES.length)
          setExpandedIndex(Math.min(Math.max(newExpandedIndex - 1, -1), FEATURES.length - 1))
        } else {
          const newExpandedIndex = Math.floor((1 - containerVisibility) * FEATURES.length)
          setExpandedIndex(FEATURES.length - 1 - newExpandedIndex)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() 

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative bg-black px-4 md:px-14 py-20"
      style={{ height: `${FEATURES.length * 55}rem` }} 
    >
      {/* <div className="sticky top-20 h-[33rem]"> */}
        {" "}
        {FEATURES.map((feature, index) => (
          // eslint-disable-next-line react/jsx-key
          <CardWithImage />
          // {/* // <FeatureCard */}
          // {/* //   key={index}
          // //   {...feature}
          // //   isExpanded={index <= expandedIndex}
          // //   index={index}
          // //   totalCards={FEATURES.length}
          // // /> */}
         ))} 
      {/* </div> */}
    </div>
  )
}

