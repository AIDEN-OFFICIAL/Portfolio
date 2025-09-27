import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-mono">{"> cat about.txt"}</p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              About <span className="text-primary neon-text">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">{"> summary.exe"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Self-taught Full-Stack JavaScript Developer specializing in the <b>MERN stack </b> and <b>TypeScript</b>. I build
                    production-ready web applications with services like <b>Razorpay</b>, <b>Cloudinary</b>, and <b>Firebase</b>, achieving
                    40% backend error reduction and 30% improved scalability. Solved <b><i>200+ LeetCode</i></b>  problems to
                    strengthen my foundation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
My career goal is to transition into a <b>Software Architect</b> role. To achieve this, I am actively broadening my expertise across critical domains including <b>DevOps</b> , <b>CI/CD pipelines</b>, <b>Docker</b>, <b>WebRTC</b>, <b>WebSocket</b>, and overall Software Architecture. My foundation in football instills the discipline, collaborative spirit, and team-player mentality necessary for collective success.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-accent">{"> education.log"}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary">Full Stack Development</h4>
                      <p className="text-sm text-muted-foreground">BROTOTYPE, Kochi (2024–Present)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Bachelor of Computer Applications</h4>
                      <p className="text-sm text-muted-foreground">MG University, Kerala (2021–2024)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">AI / ML Add-On Course</h4>
                      <p className="text-sm text-muted-foreground">Athena Erudition Academy (2022–2024)</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-destructive">{"> achievements.json"}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-primary">▶</span>
                      <span>Solved 250+ LeetCode problems to strengthen DSA skills</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">▶</span>
                      <span>Built and deployed scalable full-stack applications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">▶</span>
                      <span>Reduced backend bugs and improved code efficiency</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">▶</span>
                      <span>Fast self-learner, adaptable to modern tech stacks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">▶</span>
                      <span>Strong communication and team collaboration skills</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-chart-4">{"> interests.md"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My core philosophy is leveraging technology to solve tangible, real-world problems, fueling continuous learning of new web trends and open-source contributions. I am actively expanding expertise in DevOps and multi-language abilities (like Python, Java, Golang), while also pursuing interests in AI model creation and integration. This technical drive is balanced by attending tech events for new perspectives and developing analytical skills through fundamental market analysis. 
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
