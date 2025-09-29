"use client"

import { useState, useEffect } from "react"

const titles = [
  "Full-Stack JavaScript Developer",
  "React Specialist",
  "Node.js Expert",
  "MongoDB Developer",
  "TypeScript Enthusiast",
  "Problem Solver",
  "Fast Learner",             // Added based on request and career highlights
  "CI/CD Enthusiast",         // New/Learning
  "AWS Cloud Enthusiast",     // New/Learning
  "Docker Enthusiast",        // New/Learning
  "WebRTC Developer",
  "WebSocket Architect",
];

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
