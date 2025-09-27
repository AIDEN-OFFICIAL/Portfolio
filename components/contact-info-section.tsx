"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function ContactInfoSection() {
  return (
    <section className="py-20 px-8 lg:px-16 bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-lg -m-8 z-0"></div>
          <div className="relative z-10 flex items-center justify-center gap-4 pt-4">
            <Button
              className="font-mono bg-primary/90 backdrop-blur-sm hover:bg-primary border border-white/20"
              size="lg"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-2">
          <p className="text-xs text-muted-foreground font-mono">{"> contact --info"}</p>
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border/50 inline-block">
            <div className="space-y-2 text-sm font-mono text-foreground">
              <p>📧 aidencterrence5@gmail.com</p>
              <p>📱 +91 88914 71531</p>
              <p>📍 Kerala, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
