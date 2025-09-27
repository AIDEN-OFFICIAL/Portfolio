"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

const tagSets = [
  ["Full-Stack Developer", "JavaScript Expert", "Problem Solver"],
  ["Self-Taught", "200+ LeetCode", "React Specialist"],
  ["Node.js Expert", "TypeScript Enthusiast", "DevOps Engineer"],
  ["WebRTC Developer", "Socket.io Expert", "AWS Cloud Engineer"],
  ["MongoDB Developer", "Docker Expert", "CI/CD Specialist"],
]

export function DynamicTags() {
  const [currentSet, setCurrentSet] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % tagSets.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {tagSets[currentSet].map((tag, index) => (
        <Badge
          key={`${currentSet}-${index}`}
          className="px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground font-mono text-sm hover:bg-primary/30 transition-colors"
        >
          {tag}
        </Badge>
      ))}
    </div>
  )
}
