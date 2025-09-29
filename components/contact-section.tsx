import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 lg:px-16 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-mono">{"> ping contact.server"}</p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Let's <span className="text-primary neon-text">Connect</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary">{"> contact --info"}</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-mono text-sm text-muted-foreground">Email</p>
                        <p className="font-mono">aidencterrence5@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-mono text-sm text-muted-foreground">Phone</p>
                        <p className="font-mono">+91 88914 71531</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-destructive" />
                      </div>
                      <div>
                        <p className="font-mono text-sm text-muted-foreground">Location</p>
                        <p className="font-mono">Kerala, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-accent">{"> social --links"}</h3>

                  <div className="flex gap-4">
                <a
                  href="https://github.com/AIDEN-OFFICIAL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >

                    <Button variant="outline" size="icon" className="hover:border-primary/50 bg-transparent">
                      <Github className="w-5 h-5" />
                      </Button>
                </a>
                    <a
                      href="https://www.linkedin.com/in/aiden-c-t-827aaa306/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Button variant="outline" size="icon" className="hover:border-primary/50 bg-transparent">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </a>
                <a
                  href="https://leetcode.com/u/mernstack/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                      
                    <Button variant="outline" size="icon" className="hover:border-primary/50 bg-transparent">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary">{"> send --message"}</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-mono text-muted-foreground">Name</label>
                      <Input className="mt-1 font-mono" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-mono text-muted-foreground">Email</label>
                      <Input className="mt-1 font-mono" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-mono text-muted-foreground">Subject</label>
                    <Input className="mt-1 font-mono" placeholder="Project discussion" />
                  </div>

                  <div>
                    <label className="text-sm font-mono text-muted-foreground">Message</label>
                    <Textarea
                      className="mt-1 font-mono min-h-32"
                      placeholder="Let's build something amazing together..."
                    />
                  </div>

                  <Button className="w-full font-mono" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
