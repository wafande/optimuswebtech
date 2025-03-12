"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Server, Shield, Code, ChevronRight, Cloud } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticButton } from "@/components/magnetic-button"
import { MouseTrail } from "@/components/mouse-trail"
import { TextScramble } from "@/components/text-scramble"

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden pt-16">
      <MouseTrail />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 text-sm text-white">
                    Our Services
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    Quantum IT Solutions
                  </h1>
                  <p className="max-w-[600px] text-white/70 md:text-xl">
                    <TextScramble
                      text="Advanced technology solutions tailored to propel your business into the digital frontier."
                      speed={30}
                    />
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center justify-center relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-2 w-full h-full">
                  <img
                    alt="IT Services"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    src="/placeholder.svg?height=550&width=750"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <ParallaxSection className="w-full py-20 md:py-32 relative" baseVelocity={0.2} direction="up">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <GlitchText
                  text="COMPREHENSIVE SOLUTIONS"
                  className="text-2xl font-bold tracking-wider"
                  glitchInterval={4000}
                />
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide spectrum of advanced technology services to help your business thrive in the digital
                  landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </ParallaxSection>

        {/* IT Infrastructure Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center relative order-2 lg:order-1"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-2 w-full h-full">
                  <img
                    alt="IT Infrastructure"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    src="/placeholder.svg?height=550&width=750"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-4 order-1 lg:order-2"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1">
                    <Server className="mr-2 h-4 w-4 text-white" />
                    <span className="text-sm text-white">Quantum Infrastructure</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    Next-Gen Infrastructure
                  </h2>
                  <p className="max-w-[600px] text-white/70 md:text-xl">
                    Build a solid foundation for your business with our comprehensive quantum infrastructure services.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  {[
                    "Neural network design and implementation",
                    "Quantum server setup and management",
                    "Holographic storage solutions",
                    "Immersive virtualization services",
                    "Predictive disaster recovery planning",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-sm"></div>
                        <ChevronRight className="relative h-4 w-4 text-cyan-400" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div>
                  <MagneticButton className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cybersecurity Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1">
                    <Shield className="mr-2 h-4 w-4 text-white" />
                    <span className="text-sm text-white">Neural Security</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    Advanced Security Systems
                  </h2>
                  <p className="max-w-[600px] text-white/70 md:text-xl">
                    Protect your business from cyber threats with our adaptive neural security solutions.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  {[
                    "Quantum encryption and security assessments",
                    "Neural firewall implementation and management",
                    "Adaptive endpoint protection",
                    "Holographic data encryption solutions",
                    "Immersive security awareness training",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-sm"></div>
                        <ChevronRight className="relative h-4 w-4 text-cyan-400" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div>
                  <MagneticButton className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-2 w-full h-full">
                  <img
                    alt="Cybersecurity"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    src="/placeholder.svg?height=550&width=750"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center relative order-2 lg:order-1"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-2 w-full h-full">
                  <img
                    alt="Software Development"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    src="/placeholder.svg?height=550&width=750"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-4 order-1 lg:order-2"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1">
                    <Code className="mr-2 h-4 w-4 text-white" />
                    <span className="text-sm text-white">Immersive Development</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    Custom Software Solutions
                  </h2>
                  <p className="max-w-[600px] text-white/70 md:text-xl">
                    Tailored immersive applications designed to meet your specific business needs in the digital
                    frontier.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  {[
                    "Neural application development",
                    "Immersive web and mobile experiences",
                    "Quantum API development and integration",
                    "Legacy system neural transformation",
                    "Adaptive software maintenance and support",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-sm"></div>
                        <ChevronRight className="relative h-4 w-4 text-cyan-400" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div>
                  <MagneticButton className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cloud Services Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1">
                    <Cloud className="mr-2 h-4 w-4 text-white" />
                    <span className="text-sm text-white">Edge Computing</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    Quantum Cloud Solutions
                  </h2>
                  <p className="max-w-[600px] text-white/70 md:text-xl">
                    Leverage the power of quantum cloud computing to enhance flexibility and transcend traditional
                    limitations.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  {[
                    "Neural cloud migration strategies",
                    "Quantum AWS, Azure, and Google Cloud solutions",
                    "Adaptive cloud infrastructure management",
                    "Immersive SaaS, PaaS, and IaaS implementations",
                    "Quantum cloud security and compliance",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-sm"></div>
                        <ChevronRight className="relative h-4 w-4 text-cyan-400" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div>
                  <MagneticButton className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-2 w-full h-full">
                  <img
                    alt="Cloud Services"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    src="/placeholder.svg?height=550&width=750"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
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
                  Ready to Transform Your Digital Infrastructure?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                  Contact us today to schedule a free quantum consultation and discover how our advanced technology
                  solutions can propel your business into the future.
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
                  Contact Us
                </MagneticButton>
                <MagneticButton
                  size="lg"
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-950/50"
                >
                  Learn More
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

