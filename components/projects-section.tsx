import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "December Delight",
    subtitle: "Full-Stack eCommerce Platform",
    description:
      "Built using Node.js, Express, MongoDB, and EJS. Integrated Razorpay, wallet refunds, coupon management, and AWS deployment. Reduced manual refund effort by ~95%.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay", "AWS"],
    impact: "95% reduction in manual refund effort",
    type: "eCommerce",
  },
  {
    title: "User Management System",
    subtitle: "Full-Stack Role-Based App",
    description:
      "Developed using React, Node.js, and MongoDB. Role-based access for users/admins with Cloudinary integration. Reduced admin handling time by ~60%.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
    impact: "60% reduction in admin handling time",
    type: "Web App",
  },
  {
    title: "Student API",
    subtitle: "TypeScript REST Backend",
    description:
      "Created a modular, type-safe CRUD API using TypeScript and Express.js. Focused on learning backend logic and structure. Reduced runtime errors by ~70%.",
    tech: ["TypeScript", "Express.js", "REST API"],
    impact: "70% reduction in runtime errors",
    type: "API",
  },
  {
    title: "Netflix Clone",
    subtitle: "Movie App with Firebase Auth",
    description: "Built using React, TMDB API, and Firebase. Integrated Google/email login and video trailer viewer.",
    tech: ["React", "Firebase", "TMDB API"],
    impact: "Full authentication system",
    type: "Streaming",
  },
  {
    title: "OLX Clone",
    subtitle: "Classified Marketplace App",
    description: "Developed with React, Firestore, Cloudinary. Included image uploads, filters, and authentication.",
    tech: ["React", "Firestore", "Cloudinary"],
    impact: "Complete marketplace functionality",
    type: "Marketplace",
  },
  {
    title: "To-Do App",
    subtitle: "React + LocalStorage",
    description:
      "CRUD task manager using React and localStorage. Features strike-through, batch actions, and UI states.",
    tech: ["React", "LocalStorage"],
    impact: "Efficient task management",
    type: "Productivity",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-mono">{"> git log --oneline --projects"}</p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Featured <span className="text-primary neon-text">Projects</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs font-mono">
                        {project.type}
                      </Badge>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs text-primary font-mono">
                        {"> impact: "}
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="font-mono bg-transparent">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
