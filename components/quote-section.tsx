"use client"

export function QuoteSection() {
  return (
    <section className="py-20 px-8 lg:px-16 bg-background/30 backdrop-blur-sm border-y border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="relative">
            <div className="text-6xl text-primary/20 font-serif absolute -top-4 -left-4">"</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed font-serif italic">
              I'm an empty glass which can be filled with anything
            </blockquote>
            <div className="text-6xl text-primary/20 font-serif absolute -bottom-4 -right-4">"</div>
          </div>
          <cite className="text-lg font-mono text-primary font-semibold not-italic">- AIDEN CT</cite>
        </div>
      </div>
    </section>
  )
}
