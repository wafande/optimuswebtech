"use client"

import type React from "react"

import { useState, useRef, type MouseEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
}

export function MagneticButton({
  children,
  className = "",
  strength = 30,
  variant = "default",
  size = "default",
  onClick,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Calculate distance from center (0 to 1)
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    const maxDistance = Math.sqrt((rect.width / 2) * (rect.width / 2) + (rect.height / 2) * (rect.height / 2))
    const distanceRatio = Math.min(distance / maxDistance, 1)

    // Apply non-linear transformation for smoother effect
    const factor = 1 - Math.pow(distanceRatio, 2)

    setPosition({
      x: distanceX * factor * (strength / 100),
      y: distanceY * factor * (strength / 100),
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const buttonVariants = {
    default: {
      x: position.x,
      y: position.y,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      },
    },
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate="default"
      variants={buttonVariants}
      className="inline-block"
    >
      <Button
        ref={buttonRef}
        variant={variant}
        size={size}
        onClick={onClick}
        className={cn("relative overflow-hidden group", className)}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Button>
    </motion.div>
  )
}

