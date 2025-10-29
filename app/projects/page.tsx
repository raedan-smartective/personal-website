"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, X, ChevronLeft, ChevronRight, Download, Maximize2 } from "lucide-react"
import { FullscreenViewer } from "@/components/fullscreen-viewer"

interface MediaItem {
  type: "video" | "iframe" | "image"
  src: string
  poster?: string
  caption?: string
  rotation?: number
}

interface Project {
  id: string
  name: string
  shortSummary: string
  fullDescription: string
  badges: Array<{ label: string; variant?: "default" | "outline" }>
  problemSolved?: {
    title: string
    description: string
  }
  features: {
    title: string
    items: string[]
  }
  technologies: string[]
  media: MediaItem[]
  downloadUrl?: string
  downloadLabel?: string
  gradientFrom: string
  gradientTo: string
}

const projects: Project[] = [
  {
    id: "smartective",
    name: "Smartective Voice-to-Form",
    shortSummary: "Revolutionary AI voice-to-form system for safety compliance documentation.",
    fullDescription:
      "Revolutionary voice-to-form system that transforms spoken conversations into structured compliance documentation, dramatically reducing paperwork time while improving consistency and accuracy across industrial environments.",
    badges: [
      { label: "AI Platform", variant: "default" },
      { label: "Voice AI", variant: "outline" },
    ],
    features: {
      title: "Technical Features",
      items: [
        "Real-time voice recognition and processing",
        "Intelligent form field mapping",
        "Multi-language support for diverse workforces",
        "Integration with existing compliance systems",
      ],
    },
    problemSolved: {
      title: "Innovation",
      description:
        "Cutting-edge AI system leveraging best in class voice recognition and processing models to create structured compliance documentation.",
    },
    technologies: ["React", "Node.js", "OpenAI API", "WebRTC"],
    media: [
      {
        type: "video",
        caption: "Form creation and voice-to-form system demo.",
        src: "/smartective-demo-video.mp4",
      },
    ],
    gradientFrom: "from-primary/20",
    gradientTo: "to-accent/20",
  },
  {
    id: "municipal",
    name: "MuniciPal",
    shortSummary: "Crowdsourced infrastructure reporting connecting citizens, governments, and contractors.",
    fullDescription:
      "A crowdsourced infrastructure issue reporting application designed to democratize and digitize the public works process, connecting citizens, government entities, and infrastructure contractors in a seamless workflow.",
    badges: [
      { label: "Civic Tech", variant: "default" },
      { label: "Mobile App", variant: "outline" },
    ],
    problemSolved: {
      title: "Problem Solved",
      description:
        "Citizens lack efficient ways to report infrastructure issues, leading to delayed repairs and poor communication between residents and local government.",
    },
    features: {
      title: "Key Features",
      items: [
        "GPS-enabled issue reporting with photo uploads",
        "Real-time status tracking and notifications",
        "Government dashboard for issue management",
        "Contractor integration for work assignments",
      ],
    },
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    media: [
      {
        type: "video",
        src: "/municipal-presentation.MP4",
        poster: "/municipal-app-demo-infrastructure-reporting.png",
        caption: "Computer Science Capstone Class Final Presentation. I speak from 2:36 to 5:45. Group members: Sahithi Rampally, Adam Azmi, Brett Bradley, Kyle Jefferson, and Dina Taing.",
      },
    ],
    gradientFrom: "from-primary/20",
    gradientTo: "to-accent/20",
  },
  {
    id: "contralake",
    name: "ContraLake",
    shortSummary: "AI-powered RAG chatbot for healthcare contract intelligence and research.",
    fullDescription:
      "An AI-powered chatbot utilizing retrieval augmented generation (RAG) with a comprehensive corpus of healthcare payor contracts, designed for hospital executives to fuel contract intelligence workflows and streamline contract research.",
    badges: [
      { label: "Healthcare AI", variant: "default" },
      { label: "RAG System", variant: "outline" },
    ],
    problemSolved: {
      title: "Problem Solved",
      description:
        "Hospital executives spend countless hours manually reviewing complex payor contracts, leading to missed opportunities and inefficient contract negotiations.",
    },
    features: {
      title: "AI Capabilities",
      items: [
        "Natural language contract queries",
        "Intelligent document retrieval and analysis",
        "Contract comparison and benchmarking",
        "Automated clause extraction and summarization",
      ],
    },
    technologies: ["Python", "Microsoft Azure", "OpenAI API", "Vector DB"],
    media: [
      {
        type: "video",
        src: "/contralake-demo-video.mp4",
        caption: "Demo built for hospital stakeholders and presented at a final presentation with industry leaders in Baton Rouge. Created in collaboration with Bibhushita Baral, Faris Khattak, Myles Crockem, Sahithi Rampally, Catherine Rodriguez, and Riley Hudson.",
      },
    ],
    gradientFrom: "from-accent/20",
    gradientTo: "to-primary/20",
  },
  {
    id: "rfid-avian",
    name: "RFID System for Avian Research",
    shortSummary: "Custom-built RFID tracking system for monitoring European Starling behavior and parental provisioning patterns.",
    fullDescription:
      "A cost-effective, DIY RFID system for studying free-living European starlings (Sturnus vulgaris). Using Arduino-based readers, custom 3D-printed antenna components, and weatherproofed copper wire antennas, this system tracks individual birds via RFID leg bands to monitor parental provisioning behavior and nestling development in natural nest boxes.",
    badges: [
      { label: "Avian Research", variant: "default" },
      { label: "IoT System", variant: "outline" },
    ],
    problemSolved: {
      title: "Research Challenge",
      description:
        "Long-term behavioral studies of wild birds require automated, non-invasive tracking that operates continuously without researcher intervention or habitat disruption.",
    },
    features: {
      title: "System Components",
      items: [
        "Custom 3D-printed antenna coiling devices",
        "Weatherproofed copper wire antennas with Plastidip coating",
        "Arduino RFID readers with unique ID detection",
        "Custom RFID leg bands from PIT tags and heat-shrink tubing",
      ],
    },
    technologies: ["Arduino", "RFID Technology", "3D Printing", "Data Analytics"],
    media: [
      {
        type: "iframe",
        src: "/DIY RFID System.pdf#toolbar=0&navpanes=0&scrollbar=0",
        caption: "Poster presented at the Society for Integrative and Comparative Biology (SICB) annual conference.",
      },
    ],
    gradientFrom: "from-accent/20",
    gradientTo: "to-primary/20",
  },
  {
    id: "biodiesel-algae",
    name: "Biodiesel from Algae Bioprocess",
    shortSummary: "Sustainable biodiesel production from microalgae utilizing carbon fixation and lipid extraction for renewable energy.",
    fullDescription:
      "A bioprocess design for producing biodiesel from algae biomass. This sustainable approach utilizes carbon fixation to generate lipids from microalgae, creating a renewable energy source with minimal environmental impact. The process was optimized for economic efficiency while producing high-quality biodiesel.",
    badges: [
      { label: "Bioprocess Engineering", variant: "default" },
      { label: "Sustainability", variant: "outline" },
    ],
    problemSolved: {
      title: "Environmental Impact",
      description:
        "Provides a sustainable fuel alternative using renewable biomass with minimal carbon footprint.",
    },
    features: {
      title: "Process Highlights",
      items: [
        "Carbon fixation utilizing microalgae for lipid production",
        "Optimized for economic and logistical efficiency",
        "Sustainable raw materials with minimal environmental impact",
        "Cost-effective production of high-quality biodiesel",
      ],
    },
    technologies: ["Bioprocess Engineering", "Algae Cultivation", "Lipid Extraction", "Process Optimization"],
    media: [
      {
        type: "image",
        src: "/algal-biofuel-process-diagram.png",
        rotation: 90,
        caption: "Process flow diagram for biodiesel production from algae biomass. Created in collaboration with Madisson Boutte, Andrew Cagle, Eddie Lowery, Cody Thompson, and Andrew Whitehead",
      },
    ],
    downloadUrl: "/Bio-Process Design Project - Biodiesel from Biomass Report.pdf",
    downloadLabel: "Download Full Report",
    gradientFrom: "from-primary/20",
    gradientTo: "to-accent/20",
  },
]

export default function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [mediaIndices, setMediaIndices] = useState<Record<string, number>>({})
  const [fullscreenMedia, setFullscreenMedia] = useState<{ src: string; type: "pdf" | "image"; rotation?: number } | null>(null)

  const getCurrentMediaIndex = (projectId: string) => mediaIndices[projectId] || 0

  const setMediaIndex = (projectId: string, index: number) => {
    setMediaIndices(prev => ({ ...prev, [projectId]: index }))
  }

  const nextMedia = (projectId: string, maxIndex: number) => {
    const current = getCurrentMediaIndex(projectId)
    setMediaIndex(projectId, current < maxIndex ? current + 1 : 0)
  }

  const prevMedia = (projectId: string, maxIndex: number) => {
    const current = getCurrentMediaIndex(projectId)
    setMediaIndex(projectId, current > 0 ? current - 1 : maxIndex)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative pt-24 lg:pt-32 pb-10 lg:pb-16 px-4 lg:px-6 mb-0 lg:mb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto relative">
          <motion.div
            layout
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-playfair font-bold text-3xl md:text-5xl lg:text-6xl pb-2 mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From lab benches to cloud servers, I build systems that make complex processes clear — translating biology,
               infrastructure, and AI into tools people can actually use.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 lg:px-6 pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">

          <LayoutGroup>
            <motion.div
              layout
              className="space-y-6"
              transition={{ type: "spring", stiffness: 500, damping: 35, mass: 1 }}
            >
              {projects.map((project, index) => {
                const isExpanded = expandedProject === project.id

                return (
                  <motion.div
                    key={project.id}
                    layout
                    layoutId={`card-container-${project.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      mass: 1,
                      delay: index * 0.08,
                    }}
                    style={{ willChange: "transform" }}
                  >
                    <Card
                      className={`relative overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow ${
                        !isExpanded ? "min-h-[240px]" : ""
                      }`}
                      onClick={() => !isExpanded && setExpandedProject(project.id)}
                    >
                      <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className={`bg-card ${isExpanded ? "" : "p-6 flex flex-col justify-between min-h-[240px]"}`}
                      >
                        {!isExpanded ? (
                          /* Compact State */
                          <>
                            <div>
                              <motion.h3 layout="position" className="font-playfair font-semibold text-3xl mb-3">
                                {project.name}
                              </motion.h3>
                              <motion.div layout="position" className="flex items-center gap-2 mb-4">
                                {project.badges.map((badge, idx) => (
                                  <Badge
                                    key={idx}
                                    variant={badge.variant}
                                    className={badge.variant === "default" ? "bg-primary text-primary-foreground" : ""}
                                  >
                                    {badge.label}
                                  </Badge>
                                ))}
                              </motion.div>
                              <AnimatePresence>
                                <motion.p
                                  initial={{ opacity: 1 }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="text-muted-foreground line-clamp-2"
                                >
                                  {project.shortSummary}
                                </motion.p>
                              </AnimatePresence>
                            </div>
                            <Button className="w-fit mt-4 group-hover:gap-3 transition-all" variant="outline">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </>
                        ) : (
                          /* Expanded State */
                          <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/3 px-4 lg:px-6 pt-4 lg:pt-6 pb-1.5 flex flex-col justify-between">
                              <div>
                                <motion.h3
                                  layout="position"
                                  className="font-playfair font-semibold text-3xl mb-3"
                                >
                                  {project.name}
                                </motion.h3>

                                <motion.div layout="position" className="flex items-center gap-2 mb-4">
                                  {project.badges.map((badge, idx) => (
                                    <Badge
                                      key={idx}
                                      variant={badge.variant}
                                      className={
                                        badge.variant === "default"
                                          ? "bg-primary text-primary-foreground"
                                          : badge.label.includes("Healthcare")
                                            ? "bg-accent text-accent-foreground"
                                            : ""
                                      }
                                    >
                                      {badge.label}
                                    </Badge>
                                  ))}
                                </motion.div>

                                <AnimatePresence>
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                  >
                                    <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

                                    <div className="space-y-4 mb-6">
                                      {project.problemSolved && (
                                        <div>
                                          <h4
                                            className={`font-semibold mb-2 ${
                                              project.problemSolved.title === "Innovation"
                                                ? "text-primary"
                                                : "text-primary"
                                            }`}
                                          >
                                            {project.problemSolved.title}
                                          </h4>
                                          <p className="text-sm text-muted-foreground">
                                            {project.problemSolved.description}
                                          </p>
                                        </div>
                                      )}

                                      <div>
                                        <h4 className="font-semibold text-accent mb-2">{project.features.title}</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                          {project.features.items.map((item, idx) => (
                                            <li key={idx}>• {item}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                      {project.technologies.map((tech, idx) => (
                                        <Badge key={idx} variant="outline">
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>

                                    {project.downloadUrl && (
                                      <div className="mb-6">
                                        <Button
                                          variant="default"
                                          asChild
                                          className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground group-hover:gap-3 transition-all"
                                        >
                                          <a
                                            href={project.downloadUrl}
                                            download
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            <Download className="w-4 h-4 mr-2" />
                                            {project.downloadLabel || "Download"}
                                          </a>
                                        </Button>
                                      </div>
                                    )}
                                  </motion.div>
                                </AnimatePresence>
                              </div>

                              <Button
                                className="w-fit group-hover:gap-3 transition-all"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setExpandedProject(null)
                                }}
                              >
                                Close
                                <X className="w-4 h-4 ml-2" />
                              </Button>
                            </div>

                            <AnimatePresence>
                              <motion.div
                                layout="position"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 35, delay: 0.05 }}
                                className="lg:w-2/3 px-4 lg:pr-6 pt-4 lg:pt-6"
                              >
                                {(() => {
                                  const currentMediaIndex = getCurrentMediaIndex(project.id)
                                  const currentMedia = project.media[currentMediaIndex]
                                  const hasMultipleMedia = project.media.length > 1

                                  return (
                                    <motion.div
                                      layout="position"
                                      className="space-y-3"
                                    >
                                      <motion.div
                                        layout="position"
                                        className={`relative h-64 md:h-96 lg:h-[600px] min-h-[16rem] md:min-h-[24rem] lg:min-h-[600px] bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} rounded-lg overflow-hidden`}
                                      >
                                        {currentMedia.type === "video" ? (
                                          <video
                                            key={currentMedia.src}
                                            className="w-full h-full object-cover"
                                            controls
                                            poster={currentMedia.poster}
                                            preload="metadata"
                                            playsInline
                                          >
                                            <source src={currentMedia.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                          </video>
                                        ) : currentMedia.type === "image" ? (
                                          <>
                                            <img
                                              key={currentMedia.src}
                                              src={currentMedia.src}
                                              alt={project.name}
                                              className="w-full h-full object-contain"
                                              style={{
                                                transform: currentMedia.rotation
                                                  ? `rotate(${currentMedia.rotation}deg) scale(1.5)`
                                                  : undefined,
                                              }}
                                            />
                                            <Button
                                              variant="outline"
                                              size="icon"
                                              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm lg:hidden"
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                setFullscreenMedia({
                                                  src: currentMedia.src,
                                                  type: "image",
                                                  rotation: currentMedia.rotation,
                                                })
                                              }}
                                            >
                                              <Maximize2 className="w-4 h-4" />
                                            </Button>
                                          </>
                                        ) : (
                                          <>
                                            <iframe
                                              key={currentMedia.src}
                                              src={currentMedia.src}
                                              loading="lazy"
                                              title={project.name}
                                              allow="clipboard-write"
                                              className="absolute inset-0 w-full h-full border-0"
                                            />
                                            <Button
                                              variant="outline"
                                              size="icon"
                                              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm lg:hidden"
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                setFullscreenMedia({ src: currentMedia.src, type: "pdf" })
                                              }}
                                            >
                                              <Maximize2 className="w-4 h-4" />
                                            </Button>
                                          </>
                                        )}

                                        {/* Navigation Buttons */}
                                        {hasMultipleMedia && (
                                          <>
                                            <Button
                                              variant="outline"
                                              size="icon"
                                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                prevMedia(project.id, project.media.length - 1)
                                              }}
                                            >
                                              <ChevronLeft className="w-5 h-5" />
                                            </Button>
                                            <Button
                                              variant="outline"
                                              size="icon"
                                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                nextMedia(project.id, project.media.length - 1)
                                              }}
                                            >
                                              <ChevronRight className="w-5 h-5" />
                                            </Button>
                                          </>
                                        )}
                                      </motion.div>

                                      {/* Caption */}
                                      {currentMedia.caption && (
                                        <p className="text-sm text-muted-foreground italic px-2">
                                          {currentMedia.caption}
                                        </p>
                                      )}

                                      {/* Media Indicator Dots */}
                                      {hasMultipleMedia && (
                                        <div className="flex justify-center gap-2">
                                          {project.media.map((_, idx) => (
                                            <button
                                              key={idx}
                                              onClick={() => setMediaIndex(project.id, idx)}
                                              className={`w-2 h-2 rounded-full transition-all ${
                                                idx === currentMediaIndex
                                                  ? "bg-primary w-6"
                                                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                              }`}
                                              aria-label={`View media ${idx + 1}`}
                                            />
                                          ))}
                                        </div>
                                      )}
                                    </motion.div>
                                  )
                                })()}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        )}
                      </motion.div>
                    </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </LayoutGroup>
        </div>
      </div>

      {/* Fullscreen Media Viewer */}
      {fullscreenMedia && (
        <FullscreenViewer
          isOpen={true}
          onClose={() => setFullscreenMedia(null)}
          src={fullscreenMedia.src}
          type={fullscreenMedia.type}
          rotation={fullscreenMedia.rotation}
        />
      )}
    </div>
  )
}
