"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GlowingCard } from "@/components/glowing-card"
import { MouseTrail } from "@/components/mouse-trail"
import { MagneticButton } from "@/components/magnetic-button"
import { TextScramble } from "@/components/text-scramble"
import { ExternalLink, Code, Eye } from "lucide-react"

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const portfolioItems = [
    {
      id: 1,
      title: "Neural Network Dashboard",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "An advanced dashboard for monitoring neural network performance with real-time analytics.",
      technologies: ["React", "Three.js", "TensorFlow.js", "Node.js"],
      link: "#",
    },
    {
      id: 2,
      title: "Quantum E-Commerce Platform",
      category: "ecommerce",
      image: "/placeholder.svg?height=600&width=800",
      description: "A next-generation e-commerce platform with predictive inventory management.",
      technologies: ["Next.js", "GraphQL", "Stripe", "MongoDB"],
      link: "#",
    },
    {
      id: 3,
      title: "Immersive Virtual Reality Tour",
      category: "vr",
      image: "/placeholder.svg?height=600&width=800",
      description: "A fully immersive VR experience for architectural visualization and virtual property tours.",
      technologies: ["Unity", "WebXR", "Three.js", "Blender"],
      link: "#",
    },
    {
      id: 4,
      title: "Adaptive Learning Platform",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "An AI-driven learning platform that adapts to individual student needs and learning styles.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
      link: "#",
    },
    {
      id: 5,
      title: "Blockchain Supply Chain Tracker",
      category: "blockchain",
      image: "/placeholder.svg?height=600&width=800",
      description: "A transparent supply chain tracking system built on blockchain technology.",
      technologies: ["Ethereum", "Solidity", "React", "Node.js"],
      link: "#",
    },
    {
      id: 6,
      title: "Augmented Reality Product Viewer",
      category: "ar",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "An AR application that allows customers to visualize products in their own space before purchasing.",
      technologies: ["ARKit", "ARCore", "React Native", "Three.js"],
      link: "#",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "vr", label: "Virtual Reality" },
    { id: "ar", label: "Augmented Reality" },
    { id: "blockchain", label: "Blockchain" },
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
                Our Work
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Portfolio
              </h1>
              <p className="max-w-[800px] mx-auto text-white/70 md:text-xl">
                <TextScramble
                  text="Explore our cutting-edge projects that showcase our expertise in creating immersive digital experiences."
                  speed={30}
                />
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="relative w-full py-8">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categories.indexOf(category) * 0.1 }}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative w-full py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowingCard className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center z-10">
                        <div className="flex gap-4">
                          <MagneticButton
                            size="sm"
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                          >
                            <Eye className="mr-1 h-4 w-4" />
                            View
                          </MagneticButton>
                          <MagneticButton
                            size="sm"
                            variant="outline"
                            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-950/50"
                          >
                            <Code className="mr-1 h-4 w-4" />
                            Details
                          </MagneticButton>
                        </div>
                      </div>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full aspect-video object-cover object-center transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/70 mb-4 flex-grow">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-cyan-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={item.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        View Project <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </GlowingCard>
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
                Ready to Build Something Amazing?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                Let's collaborate on your next digital project and create something extraordinary together.
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
                Start a Project
              </MagneticButton>
              <MagneticButton
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-950/50"
              >
                View Services
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

