"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-6 mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Experience
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of experiences shaped by curiosity, problem-solving, and the drive to turn ideas into practical systems
              — from research labs to startups.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {/* Smartective CEO - Right side */}
              <div className="relative flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  viewport={{ once: false, margin: "-200px 0px -200px 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 pr-8"
                >
                  <Card className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-0">
                      <div>
                        <h3 className="font-playfair font-semibold text-2xl">Co-Founder & CEO</h3>
                        <p className="text-primary font-medium text-lg">Smartective</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-0">
                      Founded and lead AI technology startup creating innovative tools for documentation and generalized
                      compliance, starting with a voice-to-form system that reduces paperwork time and
                      improves consistency across various industries.
                    </p>
                    <div className="grid md:grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Key Achievements</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Developed proprietary AI voice processing</li>
                          <li>• Built comprehensive compliance platform</li>
                          <li>• Created scalable AI infrastructure</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-2 border-border">

                    <img
                      src="/images/design-mode/logo_transparent_bg.png"
                      alt="Smartective Logo"
                      className="w-16 h-16 object-contain"
                    />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Totaro-Monroe Lab - Left side */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <img
                      src="/bell-tower-pic.png"
                      alt="IoT Safety Monitoring System"
                      className="w-20 h-20 object-contain rounded-full"
                    />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  viewport={{ once: false, margin: "-200px 0px -200px 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 pl-8"
                >
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
                          <li>• Mobile app for worker surveys</li>
                          <li>• Real-time analytics dashboard</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-2">Contributions</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Built mobile data collection app</li>
                          <li>• Created real-time monitoring dashboard</li>
                          <li>• Implemented safety alerting systems</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Lattin Lab - Right side */}
              <div className="relative flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  viewport={{ once: false, margin: "-200px 0px -200px 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 pr-8"
                >
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
                </motion.div>
                <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <img
                      src="/lattin-lab-logo.png"
                      alt="Avian Neurobiology Research Poster"
                      className="w-20 h-20 object-contain rounded-full"
                    />
                  </div>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Cybirical LLC - Left side */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-2 border-border">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <img
                    src="/images/design-mode/image.png"
                      alt="Cybirical Logo"
                      className="w-20 h-20 object-contain rounded-full"
                    />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  viewport={{ once: false, margin: "-200px 0px -200px 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 pl-8"
                >
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
                          <li>• System admin feature development</li>
                          <li>• Testing suite expansion</li>
                          <li>• Code review</li>
                          <li>• Documentation and reporting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-2">Skills Developed</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Enterprise software development</li>
                          <li>• Cybersecurity best practices</li>
                          <li>• Professional communication</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <div className="mt-16">
            <Card className="pt-6 pb-0 overflow-hidden">
              <h3 className="font-playfair font-semibold text-2xl text-center mb-4">My Resume</h3>
              <div className="w-full h-[1100px] overflow-hidden -mb-[150px] flex justify-center">
                <iframe
                  src="/Stephens Resume.pdf"
                  className="w-[125%] h-[1100px] border-0 rounded origin-top"
                  style={{ transform: "scale(0.8)" }}
                  title="Raedan Stephens Resume"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
