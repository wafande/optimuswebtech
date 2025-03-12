"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  baseVelocity?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({
  children,
  className = "",
  baseVelocity = 0.2,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const upTransform = useTransform(scrollYProgress, [0, 1], ["0%", `-${baseVelocity * 100}%`])
  const downTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${baseVelocity * 100}%`])
  const leftTransform = useTransform(scrollYProgress, [0, 1], ["0%", `-${baseVelocity * 100}%`])
  const rightTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${baseVelocity * 100}%`])

  const getTransformProperty = () => {
    switch (direction) {
      case "up":
        return upTransform
      case "down":
        return downTransform
      case "left":
        return leftTransform
      case "right":
        return rightTransform
      default:
        return upTransform
    }
  }

  const transform = getTransformProperty()

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          [direction === "up" || direction === "down" ? "y" : "x"]: transform,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

