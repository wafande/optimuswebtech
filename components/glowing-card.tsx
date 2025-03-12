"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
  glowIntensity?: number
}

export function GlowingCard({ children, className = "", glowIntensity = 1.5 }: GlowingCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      })
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate position relative to card center (values from -1 to 1)
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1

    setMousePosition({ x, y })
  }

  // Calculate rotation based on mouse position
  const rotateX = isHovered ? -mousePosition.y * 5 : 0
  const rotateY = isHovered ? mousePosition.x * 5 : 0

  // Calculate glow position
  const glowX = isHovered ? 50 + mousePosition.x * 30 : 50
  const glowY = isHovered ? 50 + mousePosition.y * 30 : 50

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("relative rounded-xl overflow-hidden group perspective", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(6, 182, 212, 0.15), transparent 70%)`
            : "",
          boxShadow: isHovered
            ? `0 0 30px 10px rgba(6, 182, 212, 0.1), 
               0 0 10px 5px rgba(147, 51, 234, 0.1) inset`
            : "",
        }}
      />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          boxShadow: isHovered
            ? `0 0 0 1px rgba(6, 182, 212, 0.3), 
               0 0 0 3px rgba(6, 182, 212, 0.1)`
            : "",
        }}
      />

      {/* Card background */}
      <div
        className="absolute inset-[1px] rounded-[11px] bg-black/80 backdrop-blur-sm z-10 border border-white/10 transition-colors duration-300"
        style={{
          borderColor: isHovered ? "rgba(6, 182, 212, 0.3)" : "rgba(255, 255, 255, 0.1)",
          background: isHovered
            ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(6, 18, 21, 0.8))"
            : "rgba(0, 0, 0, 0.8)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 transform-gpu"
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
          transition: "transform 0.2s ease-out",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

