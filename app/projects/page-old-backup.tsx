import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
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
                <div className="md:w-2/3">
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
                <div className="md:w-1/3 p-8">
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
                <div className="md:w-2/3">
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
                <div className="md:w-1/3 p-8">
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
                <div className="md:w-2/3">
                  <div className="relative h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <iframe
                      src="https://app.supademo.com/embed/cmgjf8wzj00460n0i4dqbnc35?embed_v=2&utm_source=embed"
                      loading="lazy"
                      title="Smartective Landing Demo"
                      allow="clipboard-write"
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                </div>
                <div className="md:w-1/3 p-8">
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
    </div>
  )
}
