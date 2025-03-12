"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Server, Shield, Code, Headphones, ChevronRight, Users, BarChart, Cloud, Cpu, Globe } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { GlowingCard } from "@/components/glowing-card"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { FloatingElement } from "@/components/floating-element"
import { Cube3D } from "@/components/3d-cube"
import { GlitchText } from "@/components/glitch-text"
import { MouseTrail } from "@/components/mouse-trail"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticButton } from "@/components/magnetic-button"
import { TextScramble } from "@/components/text-scramble"
import { DistortionEffect } from "@/components/distortion-effect"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const words = [
    { text: "Innovative" },
    { text: "IT" },
    { text: "Solutions" },
    { text: "for" },
    { text: "Tomorrow's" },
    { text: "Challenges" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden pt-16">
      <MouseTrail />

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <ParticleBackground />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>

          <motion.div style={{ opacity, scale, y }} className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <div className="h-20 mb-6">{isLoaded && <TypewriterEffect words={words} />}</div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="max-w-[600px] text-white/70 md:text-xl"
                  >
                    <TextScramble
                      text="Empowering businesses with cutting-edge technology solutions to drive growth and innovation in the digital frontier."
                      speed={30}
                    />
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <MagneticButton
                    size="lg"
                    className="px-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/20"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Get Started
                  </MagneticButton>
                  <MagneticButton
                    size="lg"
                    variant="outline"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-950/50"
                    onClick={() => (window.location.href = "/services")}
                  >
                    Learn More
                  </MagneticButton>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center justify-center relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-2 w-full h-full">
                  <FloatingElement>
                    <DistortionEffect className="w-full h-[300px] rounded-xl" intensity={0.15} speed={0.008} />
                  </FloatingElement>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <ChevronRight className="h-8 w-8 text-cyan-400 rotate-90" />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 text-sm text-white">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Next-Gen IT Solutions
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a wide range of advanced technology services to help your business thrive in the digital
                  landscape.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
              {[
                {
                  icon: <Server className="h-6 w-6 text-cyan-400" />,
                  title: "Quantum Infrastructure",
                  desc: "Next-generation infrastructure solutions powered by cutting-edge technology.",
                },
                {
                  icon: <Shield className="h-6 w-6 text-cyan-400" />,
                  title: "Neural Security",
                  desc: "AI-driven security systems that adapt and evolve to protect against emerging threats.",
                },
                {
                  icon: <Code className="h-6 w-6 text-cyan-400" />,
                  title: "Immersive Development",
                  desc: "Custom software solutions that create seamless digital experiences.",
                },
                {
                  icon: <BarChart className="h-6 w-6 text-cyan-400" />,
                  title: "Predictive Analytics",
                  desc: "Transform your data into actionable insights with our advanced AI algorithms.",
                },
                {
                  icon: <Cloud className="h-6 w-6 text-cyan-400" />,
                  title: "Edge Computing",
                  desc: "Distributed cloud solutions that bring computing power closer to your data sources.",
                },
                {
                  icon: <Headphones className="h-6 w-6 text-cyan-400" />,
                  title: "Holistic Support",
                  desc: "24/7 technical support with predictive issue resolution before problems arise.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlowingCard>
                    <div className="flex flex-col items-center space-y-2 p-6">
                      <div className="rounded-full bg-cyan-950/50 p-3 border border-cyan-500/20">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-center text-white/70">{service.desc}</p>
                      <Link
                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn more <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3D Cube Section */}
        <ParallaxSection className="w-full py-20 md:py-32 relative" baseVelocity={0.3} direction="up">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-4"
              >
                <GlitchText
                  text="DIGITAL TRANSFORMATION"
                  className="text-3xl font-bold tracking-wider"
                  glitchInterval={4000}
                />
                <p className="max-w-[600px] text-white/70 md:text-xl">
                  Reimagine your business with our cutting-edge technology solutions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-cyan-400">Innovate</h3>
                  <p className="text-white/70">
                    Stay ahead of the competition with forward-thinking solutions that push boundaries.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center"
                >
                  <Cube3D size={200} className="my-8" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-purple-400">Transform</h3>
                  <p className="text-white/70">
                    Revolutionize your operations with intelligent automation and data-driven insights.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Why Choose Us Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 text-sm text-white">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  The OptimusWebTech Advantage
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're committed to delivering exceptional technology solutions that propel your business into the
                  future.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-16">
              {[
                {
                  icon: <Users className="h-8 w-8 text-cyan-400" />,
                  title: "Visionary Team",
                  desc: "Our team of certified tech innovators brings years of cutting-edge industry experience.",
                },
                {
                  icon: <Cpu className="h-8 w-8 text-cyan-400" />,
                  title: "Quantum Results",
                  desc: "We've helped hundreds of businesses achieve unprecedented technological transformation.",
                },
                {
                  icon: <Globe className="h-8 w-8 text-cyan-400" />,
                  title: "Omnipresent Support",
                  desc: "Round-the-clock support with predictive issue resolution before problems arise.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center space-y-4 p-6"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
                    <div className="relative bg-black rounded-full p-4">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-white/70">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 text-sm text-white">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Success Stories
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our clients who have experienced the future of technology with OptimusWebTech.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-16">
              {[
                {
                  quote:
                    "OptimusWebTech transformed our digital infrastructure, resulting in a 300% increase in processing speed and significant cost savings.",
                  name: "Sarah Johnson",
                  role: "CTO, Nexus Innovations",
                },
                {
                  quote:
                    "Their neural security solutions have given us peace of mind knowing our data is protected by the most advanced AI-driven systems available.",
                  name: "Michael Chen",
                  role: "CISO, Quantum Dynamics",
                },
                {
                  quote:
                    "The immersive applications they developed have revolutionized how we interact with our customers and analyze market trends.",
                  name: "Emily Rodriguez",
                  role: "CEO, FutureTech Solutions",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <GlowingCard>
                    <div className="flex flex-col justify-between h-full space-y-4 p-6">
                      <div className="space-y-2">
                        <p className="text-white/80 italic">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
                          <img
                            alt="Client"
                            className="relative rounded-full border border-white/10 bg-black"
                            height="40"
                            src="/placeholder.svg?height=40&width=40"
                            style={{
                              aspectRatio: "40/40",
                              objectFit: "cover",
                            }}
                            width="40"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{testimonial.name}</p>
                          <p className="text-sm text-white/50">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
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
                  Ready to Enter the Future?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                  Contact us today to schedule a free consultation and discover how our advanced technology solutions
                  can transform your business.
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
                  Explore Services
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

