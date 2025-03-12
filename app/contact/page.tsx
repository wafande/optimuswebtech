"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { MouseTrail } from "@/components/mouse-trail"
import { TextScramble } from "@/components/text-scramble"

export default function ContactPage() {
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
                    Get In Touch
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    Connect With Us
                  </h1>
                  <p className="max-w-[600px] text-white/70 md:text-xl">
                    <TextScramble
                      text="We'd love to hear from you. Reach out to discuss how we can propel your business into the digital frontier."
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
                    alt="Contact"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    src="/placeholder.svg?height=550&width=750"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    Contact Information
                  </h2>
                  <p className="text-white/70">Reach out to us through any of our quantum communication channels.</p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="h-6 w-6 text-cyan-400" />,
                      title: "Email",
                      content: "info@optimuswebtech.com",
                    },
                    { icon: <Phone className="h-6 w-6 text-cyan-400" />, title: "Phone", content: "+1 (555) 123-4567" },
                    {
                      icon: <MapPin className="h-6 w-6 text-cyan-400" />,
                      title: "Address",
                      content: (
                        <div>
                          123 Tech Avenue
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </div>
                      ),
                    },
                    {
                      icon: <Clock className="h-6 w-6 text-cyan-400" />,
                      title: "Business Hours",
                      content: (
                        <div>
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </div>
                      ),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="relative mt-0.5">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
                        <div className="relative bg-black rounded-full p-2">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-bold text-cyan-400">{item.title}</h3>
                        <div className="text-white/70">{item.content}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlowingCard>
                  <div className="flex flex-col space-y-1.5 p-6 border-b border-white/10">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-white/70">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none text-white/80">
                          First Name
                        </label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none text-white/80">
                          Last Name
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none text-white/80">
                        Email
                      </label>
                      <Input
                        id="email"
                        placeholder="john.doe@example.com"
                        type="email"
                        className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium leading-none text-white/80">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        type="tel"
                        className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium leading-none text-white/80">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none text-white/80">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        className="min-h-[120px] bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400"
                      />
                    </div>
                  </div>
                  <div className="flex items-center p-6 border-t border-white/10">
                    <MagneticButton className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </MagneticButton>
                  </div>
                </GlowingCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Our Location
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Visit our innovation hub to meet our team and discuss your technology needs in person.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-5xl mt-8"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm">
                  <img
                    alt="Map"
                    className="w-full h-full object-cover opacity-80"
                    src="/placeholder.svg?height=600&width=1200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
                      <div className="relative bg-black/80 rounded-full p-2">
                        <MapPin className="h-5 w-5 text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-white text-sm">123 Tech Avenue, San Francisco, CA 94105</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32 relative">
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
                <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 text-sm text-white">
                  FAQs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our quantum services.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              {[
                {
                  question: "What industries do you serve?",
                  answer:
                    "We serve a wide range of industries including healthcare, finance, education, manufacturing, retail, and professional services. Our quantum solutions are tailored to meet the specific needs of each industry's digital transformation journey.",
                },
                {
                  question: "Do you offer support outside of business hours?",
                  answer:
                    "Yes, we offer 24/7 neural support for critical issues. Our quantum response team is always available to address urgent matters that may arise outside of regular business hours.",
                },
                {
                  question: "How quickly can you respond to IT emergencies?",
                  answer:
                    "Our average response time for critical issues is under 15 minutes. We prioritize emergencies and work diligently to resolve them as quickly as possible using our predictive resolution systems.",
                },
                {
                  question: "Do you offer remote support?",
                  answer:
                    "Yes, we offer both remote and on-site support. Many issues can be resolved through our quantum remote access systems, which allows for faster resolution times and reduced costs.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlowingCard>
                    <div className="space-y-4 p-6">
                      <h3 className="text-xl font-bold text-cyan-400">{faq.question}</h3>
                      <p className="text-white/70">{faq.answer}</p>
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
                  Ready to Begin Your Digital Transformation?
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
                  View Services
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

