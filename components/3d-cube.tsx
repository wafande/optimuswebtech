"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface CubeProps {
  size?: number
  className?: string
}

export function Cube3D({ size = 100, className = "" }: CubeProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const sides = [
    // Front
    {
      transform: `translateZ(${size / 2}px)`,
      background: "rgba(6, 182, 212, 0.2)",
      border: "1px solid rgba(6, 182, 212, 0.5)",
    },
    // Back
    {
      transform: `rotateY(180deg) translateZ(${size / 2}px)`,
      background: "rgba(147, 51, 234, 0.2)",
      border: "1px solid rgba(147, 51, 234, 0.5)",
    },
    // Right
    {
      transform: `rotateY(90deg) translateZ(${size / 2}px)`,
      background: "rgba(6, 182, 212, 0.15)",
      border: "1px solid rgba(6, 182, 212, 0.4)",
    },
    // Left
    {
      transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
      background: "rgba(147, 51, 234, 0.15)",
      border: "1px solid rgba(147, 51, 234, 0.4)",
    },
    // Top
    {
      transform: `rotateX(90deg) translateZ(${size / 2}px)`,
      background: "rgba(6, 182, 212, 0.1)",
      border: "1px solid rgba(6, 182, 212, 0.3)",
    },
    // Bottom
    {
      transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
      background: "rgba(147, 51, 234, 0.1)",
      border: "1px solid rgba(147, 51, 234, 0.3)",
    },
  ]

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="preserve-3d"
        style={{
          width: size,
          height: size,
          position: "relative",
          transformStyle: "preserve-3d",
        }}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { rotateX: 0, rotateY: 0 },
          visible: {
            rotateX: 360,
            rotateY: 360,
            transition: {
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          },
        }}
      >
        {sides.map((side, index) => (
          <div
            key={index}
            className="absolute w-full h-full backdrop-blur-sm"
            style={{
              ...side,
              boxShadow: "0 0 10px rgba(6, 182, 212, 0.3)",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

