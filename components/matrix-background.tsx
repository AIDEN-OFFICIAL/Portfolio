"use client"

import { useEffect, useRef } from "react"

export function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const createChar = () => {
      const char = document.createElement("div")
      char.className = "matrix-char"
      char.textContent = chars[Math.floor(Math.random() * chars.length)]
      char.style.left = Math.random() * 100 + "%"
      char.style.animationDuration = Math.random() * 3 + 2 + "s"
      char.style.fontSize = Math.random() * 15 + 18 + "px"
      container.appendChild(char)

      setTimeout(() => {
        if (container.contains(char)) {
          container.removeChild(char)
        }
      }, 5000)
    }

    const interval = setInterval(createChar, 100)
    return () => clearInterval(interval)
  }, [])

  return <div ref={containerRef} className="matrix-bg" />
}
