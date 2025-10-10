"use client"

import { Suspense, useEffect, useState } from "react"
import React from "react"
// import { UnicornStudioEmbed } from "./unicorn-studio-embed"
import { DynamicTitle } from "./dynamic-title"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Github, Linkedin, ExternalLink, FileText, Play } from "lucide-react"

const UnicornStudioEmbed = React.lazy(() =>
  import("@/components/unicorn-studio-embed")
)

export function HeroSection() {
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowBackground(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden w-full">
      {/* Responsive background with 2s delay */}
      <div className="absolute inset-0 w-full h-full">
        {!showBackground ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-50">
            <div className="text-center space-y-2">
              <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
              <p className="text-lg text-muted-foreground font-mono">Loading 3D background...</p>
            </div>
          </div>
        ) : (
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-50">
                <div className="text-center space-y-2">
                  <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
                  <p className="text-lg text-muted-foreground font-mono">Loading 3D background...</p>
                </div>
              </div>
            }
          >
            <UnicornStudioEmbed projectId="uJULULYaZcc3pznl8ChH" className="w-full h-full object-cover" isBackground={true} />
          </Suspense>
        )}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col w-full">
        <div className="flex-shrink-0 pt-8 pb-4 text-center flex justify-center">
          <div className="bg-black/30 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-white/20">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold font-mono">
              <DynamicTitle />
            </h1>
          </div>
        </div>

        <div className="flex-1"></div>

        <div className="flex-shrink-0 pb-1 text-center">
          <div className="relative inline-block top-[-15px] right-[-3px]">
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md rounded-lg -m-8 z-0"></div>
            <div className="relative z-10 p-1">
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://github.com/AIDEN-OFFICIAL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/15 backdrop-blur-sm border-white/20 hover:bg-slate-800 text-black"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/aiden-c-t-827aaa306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-slate-800 text-black"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="https://leetcode.com/u/mernstack/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-slate-800 text-black"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-left Play Video icon-only button with tooltip */}
        <div className="absolute bottom-6 left-6 z-30">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://youtu.be/7_9FW3KE0bk?si=AXvBWO81PuQVxUh9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play Video"
                >
                  <Button
                    variant="default"
                    size="icon"
                    className="bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-slate-900"
                  >
                    <Play className="w-5 h-5" />
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                Play Video
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Bottom-right Download Resume icon-only button with tooltip */}
        <div className="absolute bottom-6 right-6 z-30">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="/RESUME.pdf" download aria-label="Download Resume">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                  >
                    <FileText className="w-5 h-5" />
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                Download Resume
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="scan-line w-full h-full opacity-10"></div>
      </div>
    </section>
  )
}
