"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GlitchText } from "@/components/glitch-text"
import { GlowingCard } from "@/components/glowing-card"
import { MouseTrail } from "@/components/mouse-trail"
import { MagneticButton } from "@/components/magnetic-button"
import { TextScramble } from "@/components/text-scramble"
import { Clock, ArrowRight, Users, BarChart, Layers } from "lucide-react"

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Project Quantum Leap",
      category: "AI & Machine Learning",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A groundbreaking research initiative exploring the intersection of quantum computing and artificial intelligence.",
      duration: "18 months",
      team: "8 specialists",
      impact: "Revolutionary approach to solving complex computational problems",
      status: "In Progress",
      progress: 65,
    },
    {
      id: 2,
      title: "Neural Interface Initiative",
      category: "Biotechnology",
      image: "/placeholder.svg?height=600&width=800",
      description: "Developing next-generation brain-computer interfaces for enhanced human-machine collaboration.",
      duration: "24 months",
      team: "12 specialists",
      impact: "Potential to transform how humans interact with digital systems",
      status: "Research Phase",
      progress: 30,
    },
    {
      id: 3,
      title: "Digital Twin Ecosystem",
      category: "IoT & Digital Twins",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Creating comprehensive digital replicas of physical systems for advanced simulation and optimization.",
      duration: "12 months",
      team: "6 specialists",
      impact: "40% improvement in operational efficiency for manufacturing clients",
      status: "Completed",
      progress: 100,
    },
    {
      id: 4,
      title: "Autonomous Systems Network",
      category: "Robotics & Automation",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Building a decentralized network for autonomous systems to communicate and collaborate efficiently.",
      duration: "15 months",
      team: "9 specialists",
      impact: "Enabling swarm intelligence for complex tasks",
      status: "Testing Phase",
      progress: 80,
    },
  ]

  return (
    <div className="pt-16 bg-black text-white overflow-hidden">
      <MouseTrail />

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 text-sm text-white">
                Research & Development
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Frontier Projects
              </h1>
              <p className="max-w-[800px] mx-auto text-white/70 md:text-xl">
                <TextScramble
                  text="Discover our cutting-edge R&D initiatives pushing the boundaries of what's possible in technology."
                  speed={30}
                />
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative w-full py-12 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <GlowingCard>
                    <div className="p-1">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full aspect-video object-cover object-center"
                        />
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </GlowingCard>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="space-y-4">
                    <GlitchText text={project.title} className="text-2xl md:text-3xl font-bold" glitchInterval={5000} />
                    <p className="text-white/70">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-sm"></div>
                          <Clock className="relative h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Duration</p>
                          <p className="text-sm font-medium">{project.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-sm"></div>
                          <Users className="relative h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Team</p>
                          <p className="text-sm font-medium">{project.team}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-sm"></div>
                          <BarChart className="relative h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Impact</p>
                          <p className="text-sm font-medium">{project.impact}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-sm"></div>
                          <Layers className="relative h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Status</p>
                          <p className="text-sm font-medium">{project.status}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-white/70">Progress</span>
                        <span className="text-sm text-cyan-400">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <MagneticButton className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Interested in Collaborating?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                We're always looking for partners to join us on the frontier of technological innovation.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-2 min-[400px]:flex-row mt-6"
            >
              <MagneticButton
                size="lg"
                className="px-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/20"
              >
                Partner With Us
              </MagneticButton>
              <MagneticButton
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-950/50"
              >
                View Research
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

