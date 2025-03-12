"use client"

import { useState, useEffect } from "react"

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  scrambleSpeed?: number
  characters?: string
}

export function TextScramble({
  text,
  className = "",
  speed = 20,
  scrambleSpeed = 10,
  characters = "abcdefgz01239",
}: TextScrambleProps) {
  const [output, setOutput] = useState("")
  const [isScrambling, setIsScrambling] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const scramble = () => {
      setIsScrambling(true)

      let iteration = 0
      const finalLength = text.length
      const currentText = ""

      const update = () => {
        if (iteration >= finalLength) {
          setIsScrambling(false)
          setOutput(text)
          return
        }

        let newOutput = ""

        for (let i = 0; i < finalLength; i++) {
          if (i < iteration) {
            newOutput += text[i]
          } else if (i === iteration) {
            newOutput += characters[Math.floor(Math.random() * characters.length)]
          } else {
            newOutput += characters[Math.floor(Math.random() * characters.length)]
          }
        }

        setOutput(newOutput)
        iteration += 1 / 3

        timeout = setTimeout(update, scrambleSpeed)
      }

      update()
    }

    scramble()

    const interval = setInterval(() => {
      scramble()
    }, 10000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, scrambleSpeed, characters])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-md"></div>

      {/* Glowing background */}
      <div
        className={`absolute inset-[1px] rounded-[3px] transition-colors duration-300 ${
          isScrambling ? "bg-cyan-950/20" : "bg-black/40"
        }`}
        style={{
          boxShadow: isScrambling ? "0 0 15px 2px rgba(6, 182, 212, 0.2) inset" : "none",
        }}
      ></div>

      {/* Futuristic terminal interface */}
      <div className="relative z-10 flex flex-col">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-3 py-1 border-b border-cyan-500/30 bg-black/50">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500/70"></span>
            <span className="w-2 h-2 rounded-full bg-green-500/70"></span>
          </div>
          <div className="text-xs text-cyan-400/70 font-mono">QUANTUM-TERMINAL</div>
          <div className="text-xs text-cyan-400/70 font-mono">{isScrambling ? "DECODING..." : "READY"}</div>
        </div>

        {/* Terminal content */}
        <div className="px-3 py-2 bg-gradient-to-b from-black/80 to-cyan-950/10">
          {/* Line numbers and content */}
          <div className="flex">
            <div className="mr-2 text-cyan-500/50 font-mono text-sm select-none">{isScrambling ? ">_" : ">>"}</div>
            <div
              className={`font-mono text-lg tracking-wide font-medium ${isScrambling ? "text-cyan-400" : "text-white"}`}
              style={{
                textShadow: isScrambling ? "0 0 8px rgba(6, 182, 212, 0.7)" : "0 0 2px rgba(255, 255, 255, 0.3)",
                letterSpacing: "0.05em",
              }}
            >
              {output}

              {/* Animated cursor */}
              <span
                className="inline-block w-[2px] h-[1em] ml-1 align-middle bg-cyan-400 opacity-70"
                style={{
                  animation: "blink 1s step-end infinite",
                }}
              ></span>
            </div>
          </div>

          {/* Status indicators */}
          <div className="flex justify-between mt-2 text-xs text-cyan-500/50 font-mono">
            <div>{new Date().toISOString().split("T")[0]}</div>
            <div className="flex items-center">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${isScrambling ? "bg-purple-500 animate-pulse" : "bg-cyan-500"}`}
              ></span>
              {isScrambling ? "PROCESSING" : "COMPLETE"}
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes to globals.css if not already present */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

