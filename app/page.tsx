import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { MovingTechCards } from "@/components/moving-tech-cards"
import { ContactSection } from "@/components/contact-section"
import { QuoteSection } from "@/components/quote-section"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      <Navigation />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <MovingTechCards />
      <ContactSection />
      <QuoteSection />

      <footer className="py-8 px-8 lg:px-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-mono">{'> echo "Built with ❤️ by Aiden C T"'}</p>
            <p className="text-sm text-muted-foreground font-mono">© 2024 - Present. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
