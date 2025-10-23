"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Download } from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home")
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Engineering", "Entrepreneurship", "Software Development"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-playfair font-bold text-xl text-primary">Raedan Stephens</div>
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveTab("home")}
                className={`transition-colors ${
                  activeTab === "home" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`transition-colors ${
                  activeTab === "experience"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`transition-colors ${
                  activeTab === "projects"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Home Tab */}
        {activeTab === "home" && (
          <div className="min-h-screen">
            {/* Hero Section */}
            <section className="flex items-center justify-center px-6 pt-[120px] pb-8 min-h-[650px]">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-12">
                  <div className="animate-fade-in-up flex-shrink-0">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                      <img
                        src="/images/design-mode/IMG_1979.JPG.jpeg"
                        alt="Raedan Stephens"
                        className="w-full h-full object-cover object-[center_50%] scale-105 rotate-[5deg]"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                      <h1 className="font-playfair font-bold text-5xl md:text-6xl text-foreground text-left mb-2">
                        Raedan Stephens
                      </h1>
                    </div>

                    <div className="animate-fade-in-up mb-6" style={{ animationDelay: "0.4s" }}>
                      <div className="text-2xl md:text-3xl text-muted-foreground flex items-center text-left min-w-[450px] h-12">
                        <span className="relative whitespace-nowrap">
                          {roles.map((role, index) => (
                            <span
                              key={role}
                              className={`absolute inset-0 transition-opacity duration-500 ${
                                index === currentRole ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              {role}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>

                    <div className="animate-fade-in-up mb-6" style={{ animationDelay: "0.6s" }}>
                      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-left">
                        CEO of <span className="text-primary font-semibold">Smartective</span>, dual-degree student in
                        Biological Engineering & Computer Science at LSU, working to build the future of AI-powered
                        safety & compliance.
                      </p>
                    </div>

                    <div className="animate-fade-in-up flex gap-4" style={{ animationDelay: "0.8s" }}>
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => setActiveTab("projects")}
                      >
                        View My Work
                      </Button>
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
                    </div>
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
                      at Louisiana State University while serving as CEO of Smartective, an AI startup focused on safety
                      and compliance solutions.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                      I'm passionate about creating intelligent systems that transform workflows and improve
                      performance. I have experience developing scalable system architectures and creating AI tools that
                      save time and money.
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
                    <h3 className="font-playfair font-semibold text-2xl mb-6">Quick Facts</h3>
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
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">Professional Experience</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  A journey of innovation, leadership, and technical excellence across entrepreneurship, research, and
                  industry.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

                <div className="space-y-16">
                  {/* Smartective CEO - Right side */}
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8">
                      <Card className="p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-playfair font-semibold text-2xl">CEO</h3>
                            <p className="text-primary font-medium text-lg">Smartective</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">2025 - Present</div>
                            <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                              <Download className="w-4 h-4 mr-2" />
                              Business Plan
                            </Button>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Founded and lead AI technology startup creating innovative tools for safety and generalized
                          compliance, starting with a revolutionary voice-to-form system that reduces paperwork time and
                          improves consistency across industrial environments.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Key Achievements</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Developed proprietary AI voice processing</li>
                              <li>• Built comprehensive compliance platform</li>
                              <li>• Established partnerships with industrial clients</li>
                              <li>• Created scalable AI infrastructure</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-accent mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">
                                React
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Python
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                OpenAI API
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                AWS
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-2 border-border">
                      <img
                        src="/images/design-mode/logo_transparent_bg.png"
                        alt="Smartective Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>

                  {/* Totaro-Monroe Lab - Left side */}
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <img
                        src="/iot-safety-monitoring-mobile-app-interface-dashboa.jpg"
                        alt="IoT Safety Monitoring System"
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1 pl-8">
                      <Card className="p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-playfair font-semibold text-2xl">Research Assistant</h3>
                            <p className="text-accent font-medium text-lg">Totaro-Monroe Lab, LSU</p>
                          </div>
                          <div className="text-sm text-muted-foreground">2022 - 2025</div>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Built a distributed IoT safety monitoring solution for the industrial workforce that measured
                          biometric inputs from wearables, cognitive inputs from surveys, and environmental sensor
                          inputs to create comprehensive safety analytics.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">System Components</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Wearable biometric sensors</li>
                              <li>• Environmental monitoring stations</li>
                              <li>• Mobile app for worker surveys</li>
                              <li>• Real-time analytics dashboard</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-accent mb-2">Contributions</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Developed IoT sensor integration</li>
                              <li>• Built mobile data collection app</li>
                              <li>• Created real-time monitoring dashboard</li>
                              <li>• Implemented safety alert systems</li>
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Lattin Lab - Right side */}
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8">
                      <Card className="p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-playfair font-semibold text-2xl">Research Assistant</h3>
                            <p className="text-primary font-medium text-lg">
                              Lattin Lab - Avian Neurobiology & Neuroendocrinology
                            </p>
                          </div>
                          <div className="text-sm text-muted-foreground">2021 - 2023</div>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Developed and implemented RFID tracking systems for monitoring European Starling development
                          and visitation patterns, contributing to research in avian neurobiology and neuroendocrinology
                          at LSU.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Research Focus</h4>
                            <ul className="text-sm space-y-1">
                              <li>• RFID tracking system development</li>
                              <li>• European Starling behavior analysis</li>
                              <li>• Developmental pattern monitoring</li>
                              <li>• Data collection and analysis</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-accent mb-2">Contributions</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Designed custom RFID hardware</li>
                              <li>• Automated data collection systems</li>
                              <li>• Research poster presentations</li>
                              <li>• Laboratory data analysis</li>
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <img
                        src="/research-poster-avian-neurobiology-rfid-tracking-e.jpg"
                        alt="Avian Neurobiology Research Poster"
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>

                  {/* Cybirical LLC - Left side */}
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-2 border-border">
                      <img
                        src="/images/design-mode/image.png"
                        alt="Cybirical Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="flex-1 pl-8">
                      <Card className="p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-playfair font-semibold text-2xl">Programming Intern</h3>
                            <p className="text-accent font-medium text-lg">Cybirical LLC</p>
                          </div>
                          <div className="text-sm text-muted-foreground">2020 - 2021</div>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Contributed to system features and expanded testing suites for electrical utility
                          cybersecurity software, gaining valuable experience in enterprise software development and
                          cybersecurity protocols for critical infrastructure.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Responsibilities</h4>
                            <ul className="text-sm space-y-1">
                              <li>• System feature development</li>
                              <li>• Testing suite expansion</li>
                              <li>• Code review and optimization</li>
                              <li>• Documentation and reporting</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-accent mb-2">Skills Developed</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Enterprise software development</li>
                              <li>• Cybersecurity best practices</li>
                              <li>• Utility industry knowledge</li>
                              <li>• Professional communication</li>
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Section */}
              <div className="mt-16">
                <Card className="p-8">
                  <h3 className="font-playfair font-semibold text-2xl mb-6 text-center">Resume</h3>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <iframe
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Raedan%20Stephens%20Resume-UrWiuHD5Sucps144H8CR2iezHUQuQC.pdf"
                      className="w-full h-[800px] border-0 rounded"
                      title="Raedan Stephens Resume"
                    />
                    <div className="text-center mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          window.open(
                            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Raedan%20Stephens%20Resume-UrWiuHD5Sucps144H8CR2iezHUQuQC.pdf",
                            "_blank",
                          )
                        }
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">Projects</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Innovative solutions spanning AI, civic technology, and healthcare, each designed to solve real-world
                  problems through cutting-edge technology and thoughtful design.
                </p>
              </div>

              <div className="space-y-12">
                {/* MuniciPal */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          poster="/municipal-app-demo-infrastructure-reporting.jpg"
                        >
                          <source src="/placeholder-video.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <Badge className="bg-primary text-primary-foreground mr-3">Civic Tech</Badge>
                        <Badge variant="outline">Mobile App</Badge>
                      </div>
                      <h3 className="font-playfair font-semibold text-3xl mb-4">MuniciPal</h3>
                      <p className="text-muted-foreground mb-6">
                        A crowdsourced infrastructure issue reporting application designed to democratize and digitize
                        the public works process, connecting citizens, government entities, and infrastructure
                        contractors in a seamless workflow.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Problem Solved</h4>
                          <p className="text-sm text-muted-foreground">
                            Citizens lack efficient ways to report infrastructure issues, leading to delayed repairs and
                            poor communication between residents and local government.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-accent mb-2">Key Features</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• GPS-enabled issue reporting with photo uploads</li>
                            <li>• Real-time status tracking and notifications</li>
                            <li>• Government dashboard for issue management</li>
                            <li>• Contractor integration for work assignments</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="outline">React Native</Badge>
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">PostgreSQL</Badge>
                        <Badge variant="outline">AWS</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* ContraLake */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          poster="/contralake-ai-chatbot-healthcare-contracts-interfa.jpg"
                        >
                          <source src="/placeholder-video.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <Badge className="bg-accent text-accent-foreground mr-3">Healthcare AI</Badge>
                        <Badge variant="outline">RAG System</Badge>
                      </div>
                      <h3 className="font-playfair font-semibold text-3xl mb-4">ContraLake</h3>
                      <p className="text-muted-foreground mb-6">
                        An AI-powered chatbot utilizing retrieval augmented generation (RAG) with a comprehensive corpus
                        of healthcare payor contracts, designed for hospital executives to fuel contract intelligence
                        workflows and streamline contract research.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-accent mb-2">Problem Solved</h4>
                          <p className="text-sm text-muted-foreground">
                            Hospital executives spend countless hours manually reviewing complex payor contracts,
                            leading to missed opportunities and inefficient contract negotiations.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">AI Capabilities</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Natural language contract queries</li>
                            <li>• Intelligent document retrieval and analysis</li>
                            <li>• Contract comparison and benchmarking</li>
                            <li>• Automated clause extraction and summarization</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">LangChain</Badge>
                        <Badge variant="outline">OpenAI API</Badge>
                        <Badge variant="outline">Vector DB</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Smartective Voice-to-Form */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          poster="/smartective-voice-to-form-system-ai-interface.jpg"
                        >
                          <source src="/placeholder-video.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <Badge className="bg-primary text-primary-foreground mr-3">AI Platform</Badge>
                        <Badge variant="outline">Voice AI</Badge>
                      </div>
                      <h3 className="font-playfair font-semibold text-3xl mb-4">Smartective Voice-to-Form</h3>
                      <p className="text-muted-foreground mb-6">
                        Revolutionary voice-to-form system that transforms spoken safety reports into structured
                        compliance documentation, dramatically reducing paperwork time while improving consistency and
                        accuracy across industrial environments.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                          <p className="text-sm text-muted-foreground">
                            First-of-its-kind AI system specifically trained on safety terminology and compliance
                            requirements, with custom NLP models for industrial environments.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-accent mb-2">Technical Features</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Real-time voice recognition and processing</li>
                            <li>• Intelligent form field mapping</li>
                            <li>• Multi-language support for diverse workforces</li>
                            <li>• Integration with existing compliance systems</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">OpenAI API</Badge>
                        <Badge variant="outline">WebRTC</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
