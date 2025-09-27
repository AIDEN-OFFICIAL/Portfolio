"use client"

import { useState, useEffect } from "react"

const titles = [
  "Full-Stack Developer",
  "React Specialist",
  "Node.js Expert",
  "TypeScript Enthusiast",
  "DevOps Engineer",
  "WebRTC Developer",
  "WebSocket Architect",
  "CI/CD Specialist",
  "Docker Expert",
  "AWS Cloud Engineer",
  "MongoDB Developer",
  "Problem Solver",
]

export function DynamicTitle() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return <span className={`text-primary neon-text ${isTyping ? "typing-animation" : ""}`}>{titles[currentTitle]}      <span className="blinking-cursor">|</span>
</span>
}
