"use client"

import { useEffect, useRef } from "react"

interface DistortionEffectProps {
  className?: string
  intensity?: number
  speed?: number
  imageUrl?: string // Path to your custom image. Replace the default with your own image path.
}

export function DistortionEffect({
  className = "",
  intensity = 0.2,
  speed = 0.01,
  imageUrl = "/optimus1.svg", // Replace this with your actual logo path
}: DistortionEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      const container = canvas.parentElement
      if (!container) return

      // Get container dimensions
      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      // Set canvas size while maintaining aspect ratio
      const aspectRatio = 698 / 272 // Original SVG dimensions

      let width = containerWidth
      let height = containerWidth / aspectRatio

      // If height is too tall for container, scale based on height instead
      if (height > containerHeight) {
        height = containerHeight
        width = height * aspectRatio
      }

      canvas.width = width
      canvas.height = height
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
      const imageAspectRatio = image.width / image.height
      const canvasAspectRatio = canvas.width / canvas.height

      let drawWidth = canvas.width
      let drawHeight = canvas.height
      let offsetX = 0
      let offsetY = 0

      if (canvasAspectRatio > imageAspectRatio) {
        drawWidth = canvas.height * imageAspectRatio
        offsetX = (canvas.width - drawWidth) / 2
      } else {
        drawHeight = canvas.width / imageAspectRatio
        offsetY = (canvas.height - drawHeight) / 2
      }

      const animate = () => {
        time += speed
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < canvas.height; i += 2) {
          const distortion = Math.sin(i * 0.05 + time) * intensity * 20

          // Source dimensions
          const sx = 0
          const sy = (i / canvas.height) * image.height
          const sWidth = image.width
          const sHeight = (2 / canvas.height) * image.height

          // Destination dimensions
          const dx = distortion + offsetX
          const dy = i
          const dWidth = drawWidth
          const dHeight = 2

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

  // The canvas element renders the distortion effect using the image specified in imageUrl prop
  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full object-contain ${className}`}
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "auto",
        display: "block",
      }}
    />
  )
}

