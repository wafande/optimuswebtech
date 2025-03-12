"use client"

import { useEffect, useRef } from "react"

interface DistortionEffectProps {
  className?: string
  intensity?: number
  speed?: number
  imageUrl?: string
}

export function DistortionEffect({
  className = "",
  intensity = 0.2,
  speed = 0.01,
  imageUrl = "/placeholder.svg?height=600&width=1200",
}: DistortionEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Load image
    const image = new Image()
    image.crossOrigin = "anonymous"
    image.src = imageUrl

    let time = 0
    let animationFrameId: number

    image.onload = () => {
      const animate = () => {
        time += speed

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw distorted image
        for (let i = 0; i < canvas.height; i += 2) {
          // Calculate distortion
          const distortion = Math.sin(i * 0.05 + time) * intensity * 20

          // Source dimensions
          const sx = 0
          const sy = i
          const sWidth = image.width
          const sHeight = 2

          // Destination dimensions
          const dx = distortion
          const dy = i
          const dWidth = canvas.width
          const dHeight = 2

          // Draw slice
          ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        }

        animationFrameId = requestAnimationFrame(animate)
      }

      animate()
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [imageUrl, intensity, speed])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}

