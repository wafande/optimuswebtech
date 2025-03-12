"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Lock, User } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate authentication - in a real app, you would call an API
    try {
      // For demo purposes, we'll use a simple check
      if (email === "admin@optimuswebtech.com" && password === "admin123") {
        // Set a mock token in localStorage
        localStorage.setItem("adminToken", "mock-jwt-token")
        // Redirect to dashboard
        router.push("/admin/dashboard")
      } else {
        setError("Invalid credentials. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>

      <div className="container px-4 md:px-6 relative z-10 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
          <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col items-center space-y-2 mb-8">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
                <div className="relative bg-black rounded-full p-2">
                  <Zap className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <GlitchText
                text="ADMIN ACCESS"
                className="text-2xl font-bold tracking-wider mt-4"
                glitchInterval={4000}
              />
              <p className="text-white/70 text-center">Enter your credentials to access the control panel</p>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-200 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80 flex items-center">
                  <User className="h-4 w-4 mr-2 text-cyan-400" />
                  Email
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@optimuswebtech.com"
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-white/80 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-cyan-400" />
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
              >
                {isLoading ? "Authenticating..." : "Access Control Panel"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-white/50">Secure Quantum-Encrypted Connection</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

