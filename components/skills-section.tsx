import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Redux", "Tailwind CSS", "Bootstrap", "EJS", "ShadCN", "Material UI", "Figma"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JSON handling", "JWT Auth", "Passport.js", "Multer"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "PostgreSQL", "Firestore"],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: ["AWS (EC2, S3)", "Docker", "CI/CD", "Firebase", "Git", "GitHub"],
  },
  {
    title: "Real-time & Communication",
    icon: "🔄",
    skills: ["WebRTC", "WebSocket", "Socket.io", "Real-time APIs"],
  },
  {
    title: "Tools & Services",
    icon: "🛠️",
    skills: ["Postman", "Cloudinary", "Razorpay", "MVC Architecture", "API Integration"],
  },
{
  title: "Interpersonal & Teamwork",
  icon: "🤝",
  skills: [
    "Strong Communication",
    "Collaboration & Teamwork",
    "Public Speaking",
    "Strong Work Ethic"
  ],
  },
{
  title: "Cognitive & Mindset",
  icon: "🧠",
  skills: [
    "Problem Solving & Critical Thinking",
    "Continuous Learning",
    "Adaptability"
  ],
}
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-8 lg:px-16 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-mono">{"> ls -la skills/"}</p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Technical <span className="text-primary neon-text">Arsenal</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-bold text-primary">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-mono bg-secondary/50 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">{"> status --current"}</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready for an immediate professional challenge, I am actively mastering DevOps (Docker, CI/CD, AWS) and real-time architecture (WebRTC) toward a DevOps Manager role, applying this knowledge directly to my capstone project, DevDirect,
                which connects aspiring developers with industry interview practice.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
