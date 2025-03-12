"use client"

import { useEffect, useRef } from "react"

export function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Mouse trail properties
    const points: { x: number; y: number; age: number; size: number }[] = []
    const maxPoints = 15
    const maxAge = 50
    let mouseX = 0
    let mouseY = 0
    let isMouseMoving = false
    let lastMouseMoveTime = 0

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true
      lastMouseMoveTime = Date.now()

      // Add new point
      if (points.length === 0 || Math.hypot(points[0].x - mouseX, points[0].y - mouseY) > 5) {
        points.unshift({
          x: mouseX,
          y: mouseY,
          age: 0,
          size: Math.random() * 2 + 4,
        })

        if (points.length > maxPoints) {
          points.pop()
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Check if mouse is still moving
      if (Date.now() - lastMouseMoveTime > 300) {
        isMouseMoving = false
      }

      // Update and draw points
      if (isMouseMoving || points.length > 0) {
        // Update points
        for (let i = 0; i < points.length; i++) {
          points[i].age++

          if (points[i].age > maxAge) {
            points.splice(i, 1)
            i--
            continue
          }
        }

        // Draw points
        for (let i = 0; i < points.length; i++) {
          const point = points[i]
          const nextPoint = points[i + 1]

          // Calculate opacity based on age
          const opacity = 1 - point.age / maxAge

          // Draw glow
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.size * 2)

          gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity * 0.8})`)
          gradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity * 0.4})`)
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

          ctx.beginPath()
          ctx.arc(point.x, point.y, point.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()

          // Draw line to next point
          if (nextPoint) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(nextPoint.x, nextPoint.y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.5})`
            ctx.lineWidth = point.size * 0.8
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
}

