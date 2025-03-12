"use client"

import { useEffect, useState } from "react"
import { motion, stagger, useAnimate } from "framer-motion"

interface TypewriterProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({ words, className = "", cursorClassName = "" }: TypewriterProps) => {
  const [scope, animate] = useAnimate()
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (isAnimating) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.05,
          delay: stagger(0.05),
          ease: "easeInOut",
        },
      )
    }
  }, [animate, isAnimating])

  const renderWords = () => {
    return (
      <div className={`inline-block ${className}`}>
        {words.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.split("").map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  key={`char-${index}`}
                  className={word.className}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div ref={scope} className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
      <div className="mt-4">
        <div className="text-white leading-snug tracking-tight">
          {renderWords()}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className={`inline-block rounded-sm w-[4px] h-12 ml-1 bg-cyan-400 ${cursorClassName}`}
          ></motion.span>
        </div>
      </div>
    </div>
  )
}

