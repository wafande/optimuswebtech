"use client"

import { useCallback, useEffect, useRef } from "react"
import { useTheme } from "next-themes"

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    particles.forEach((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()

      // Draw connections
      particles.forEach((otherParticle) => {
        const dist = Math.sqrt(Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2))

        if (dist < 150) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 * (1 - dist / 150)})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
        }
      })

      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x > ctx.canvas.width || particle.x < 0) {
        particle.speedX *= -1
      }

      if (particle.y > ctx.canvas.height || particle.y < 0) {
        particle.speedY *= -1
      }
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Create particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 0.5
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: i % 3 === 0 ? "rgba(0, 255, 255, 0.7)" : "rgba(128, 0, 255, 0.5)",
      })
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      drawParticles(ctx, particles)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [drawParticles])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

