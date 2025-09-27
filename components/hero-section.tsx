"use client"

import { UnicornStudioEmbed } from "./unicorn-studio-embed"
import { DynamicTitle } from "./dynamic-title"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ExternalLink, FileText, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <UnicornStudioEmbed projectId="uJULULYaZcc3pznl8ChH" className="w-full h-full" isBackground={true} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
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
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/15 backdrop-blur-sm border-white/20 hover:bg-slate-800 text-black"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-slate-800 text-black"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-slate-800 text-black"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-left Play Video button */}
        <div className="absolute bottom-6 left-6 z-30">
          <Button
            variant="default"
            className="flex items-center gap-2 w-44 justify-center bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-slate-900"
            asChild
          >
            <a
              href="https://youtu.be/7_9FW3KE0bk?si=AXvBWO81PuQVxUh9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-4 h-4" />
              Play Video
            </a>
          </Button>
        </div>

        {/* Bottom-right Download Resume button */}
        <div className="absolute bottom-6 right-6 z-30">
          <Button
            variant="outline"
            className="flex items-center gap-2 w-44 justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
            asChild
          >
            <a href="/RESUME.pdf" download>
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="scan-line w-full h-full opacity-10"></div>
      </div>
    </section>
  )
}
