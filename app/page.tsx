"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin } from "lucide-react"
import { RoleCycler } from "@/components/role-cycler"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="flex items-center justify-center px-6 pt-0 min-h-[500px]">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-12">
                <motion.div
                  className="flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                    <img
                      src="/images/design-mode/IMG_1979.JPG.jpeg"
                      alt="Raedan Stephens"
                      className="w-full h-full object-cover object-[center_0%] scale-100 rotate-[5deg]"
                    />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <motion.div
                    className="mt-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h1 className="font-playfair font-bold text-5xl md:text-6xl pb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Raedan Stephens
                    </h1>
                  </motion.div>

                  <motion.div
                    className="-mt-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <RoleCycler />
                  </motion.div>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-left">
                      CEO of <span className="text-primary font-semibold">Smartective</span>, dual-degree student in
                      Biological Engineering & Computer Science at LSU, working to build the future of AI-powered
                      documentation & compliance.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link href="/projects">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        View My Work
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open("https://www.linkedin.com/in/raedan-stephens-a720a9199/", "_blank")}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open("https://github.com/Raedans21", "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section className="py-16 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-12 text-center">About Me</h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    Hi, I'm Raedan Stephens. I'm pursuing dual degrees in Biological Engineering and Computer Science
                    at Louisiana State University while serving as CEO of Smartective, an AI startup focused on
                    documentation and compliance solutions.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    I'm passionate about creating intelligent systems that transform workflows and improve performance.
                    I have experience developing scalable system architectures and creating AI tools that save time and
                    money.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Beyond technology, I'm fascinated by startup ecosystems and team dynamics. I believe that
                    effective communication and innovative thinking are the bridges between great ideas and meaningful
                    impact.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Biological Engineering</Badge>
                    <Badge variant="secondary">Computer Science</Badge>
                    <Badge variant="secondary">AI & Machine Learning</Badge>
                    <Badge variant="secondary">Startup Leadership</Badge>
                  </div>
                </div>

                <Card className="p-8 bg-card">
                  <h3 className="font-playfair font-semibold text-2xl mb-2">Quick Facts</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-primary">Location:</span> Louisiana, USA
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Education:</span> LSU (Dual Degree)
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Role:</span> CEO at Smartective
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Email:</span> raedans21@gmail.com
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
