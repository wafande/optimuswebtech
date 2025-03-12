"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
  glitchIntensity?: number
  glitchInterval?: number
}

export function GlitchText({ text, className = "", glitchIntensity = 3, glitchInterval = 3000 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, glitchInterval)

    return () => clearInterval(intervalId)
  }, [glitchInterval])

  const generateGlitchVariants = () => {
    const variants = []

    for (let i = 0; i < glitchIntensity; i++) {
      const xOffset = Math.random() * 8 - 4
      const yOffset = Math.random() * 8 - 4
      const skewX = Math.random() * 4 - 2
      const skewY = Math.random() * 4 - 2

      variants.push({
        transform: `translate(${xOffset}px, ${yOffset}px) skew(${skewX}deg, ${skewY}deg)`,
        textShadow: `
          ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px ${Math.random() * 10}px rgba(0, 255, 255, 0.8),
          ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px ${Math.random() * 10}px rgba(255, 0, 255, 0.8)
        `,
        clipPath: `inset(${Math.floor(Math.random() * 100)}% 0 ${Math.floor(Math.random() * 100)}% 0)`,
      })
    }

    return variants
  }

  const glitchVariants = generateGlitchVariants()

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Base text */}
      <span className="relative z-10">{text}</span>

      {/* Glitch layers */}
      {isGlitching &&
        glitchVariants.map((variant, index) => (
          <motion.span
            key={index}
            className="absolute inset-0 text-cyan-400 opacity-70"
            initial={{ ...variant }}
            animate={{
              transform: variant.transform,
              textShadow: variant.textShadow,
              clipPath: variant.clipPath,
              transition: {
                duration: 0.1,
                repeat: 3,
                repeatType: "mirror",
              },
            }}
          >
            {text}
          </motion.span>
        ))}

      {/* RGB split effect */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-red-500 opacity-70"
            animate={{
              transform: `translate(-2px, 0)`,
              transition: {
                duration: 0.1,
                repeat: 3,
                repeatType: "mirror",
              },
            }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-blue-500 opacity-70"
            animate={{
              transform: `translate(2px, 0)`,
              transition: {
                duration: 0.1,
                repeat: 3,
                repeatType: "mirror",
              },
            }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  )
}

