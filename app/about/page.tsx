"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Award, Briefcase, GraduationCap, MapPin } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { GlowingCard } from "@/components/glowing-card"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticButton } from "@/components/magnetic-button"
import { MouseTrail } from "@/components/mouse-trail"

export default function AboutPage() {
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
                    Our Story
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    About OptimusWebTech
                  </h1>
                  <p className="max-w-[600px] text-white/70 md:text-xl">
                    We're a team of visionary tech innovators dedicated to propelling businesses into the digital
                    future.
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
                    alt="Team Meeting"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    src="/placeholder.svg?height=550&width=750"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
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
                  text="FROM STARTUP TO INDUSTRY LEADER"
                  className="text-2xl font-bold tracking-wider"
                  glitchInterval={4000}
                />
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2010, OptimusWebTech has evolved from a visionary startup to a pioneering force in advanced
                  technology solutions.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              {[
                {
                  title: "Our Mission",
                  content:
                    "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital frontier.",
                },
                {
                  title: "Our Vision",
                  content:
                    "To be the most trusted technology partner for businesses worldwide, known for our cutting-edge expertise, reliability, and future-focused approach.",
                },
                {
                  title: "Our Values",
                  content: (
                    <ul className="list-disc list-inside text-white/70 space-y-2">
                      <li>Quantum excellence in everything we do</li>
                      <li>Neural innovation that drives business value</li>
                      <li>Immersive integrity and transparency</li>
                      <li>Client success as our primary directive</li>
                    </ul>
                  ),
                },
                {
                  title: "Our Approach",
                  content:
                    "We take a holistic approach, working closely with our clients to understand their unique challenges and goals before implementing tailored quantum solutions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlowingCard>
                    <div className="space-y-4 p-6">
                      <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
                      <div className="text-white/70">{item.content}</div>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Our Team Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>

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
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Meet the Visionaries
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of certified tech innovators brings decades of combined experience across quantum computing,
                  neural networks, and immersive technologies.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  name: "ISAAC NEWTON MUCHINA",
                  role: "CTO & Co-Founder",
                  bio: "ISAAC leads our technical strategy, cybersecurity, development and innovation initiatives, With over 8 years of experience in technology bringing his expertise in neural architecture and cybernetic security systems.",
                  image: "/isaac.jpeg",
                },
                {
                  name: "CHRIS NJIRU",
                  role: "CEO & Co-Founder",
                  bio: "With over 5 years of experience in technology leadership, CHRIS Co-founded OptimusWebTech with a vision to transform how businesses leverage advanced computing.",
                  image: "/chris.jpg",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlowingCard>
                    <div className="flex flex-col items-center space-y-4 p-6">
                      <div className="relative">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
                        <img
                          alt={member.name}
                          className="relative rounded-full border border-white/10 bg-black"
                          height="200"
                          src={member.image}
                          style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                          }}
                          width="200"
                        />
                      </div>
                      <div className="space-y-2 text-center">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-sm text-cyan-400">{member.role}</p>
                        <p className="text-sm text-white/70">{member.bio}</p>
                      </div>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Achievements Section */}
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
                  Our Achievements
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Quantum Milestones
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're proud of our journey and the recognition we've received along the digital frontier.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {[
                { icon: <Award className="h-6 w-6 text-cyan-400" />, number: "500+", label: "Successful Projects" },
                { icon: <Briefcase className="h-6 w-6 text-cyan-400" />, number: "200+", label: "Happy Clients" },
                { icon: <Users className="h-6 w-6 text-cyan-400" />, number: "50+", label: "Team Members" },
                { icon: <GraduationCap className="h-6 w-6 text-cyan-400" />, number: "15+", label: "Industry Awards" },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 p-4"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
                    <div className="relative bg-black rounded-full p-4">{achievement.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    {achievement.number}
                  </h3>
                  <p className="text-center text-white/70">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Locations Section */}
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
                  Our Locations
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Global Network
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With innovation hubs in major tech centers, we serve clients across the digital multiverse.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                { city: "San Francisco", address: "123 Tech Avenue, San Francisco, CA 94105" },
                { city: "New York", address: "456 Innovation Street, New York, NY 10001" },
                { city: "London", address: "789 Digital Lane, London, UK EC2A 4NE" },
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlowingCard>
                    <div className="flex flex-col items-center space-y-2 p-6">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
                        <div className="relative bg-black rounded-full p-3">
                          <MapPin className="h-6 w-6 text-cyan-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold">{location.city}</h3>
                      <p className="text-center text-white/70">{location.address}</p>
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
                  Ready to Join Our Quantum Journey?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                  Contact us today to schedule a consultation and discover how our advanced technology solutions can
                  transform your business.
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
