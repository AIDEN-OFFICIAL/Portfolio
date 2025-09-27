"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [isCollapsed, setIsCollapsed] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(href.slice(1))
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-md border border-border"
      >
        {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
      </Button>

      <nav
        className={`fixed top-20 right-6 z-50 bg-card/80 backdrop-blur-md border border-border rounded-lg p-2 transition-all duration-300 ${
          isCollapsed ? "translate-x-[100%] opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className="text-xs font-mono justify-start"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
    </>
  )
}
