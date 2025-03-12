"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { MagneticButton } from "@/components/magnetic-button"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-black/50 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
            <div className="relative bg-black rounded-full p-1">
              <Zap className="h-6 w-6 text-cyan-400" />
            </div>
          </div>
          <Link href="/">
            <GlitchText
              text="OptimusWebTech"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
              glitchInterval={5000}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 relative group ${
                pathname === item.href ? "text-white" : "text-white/70"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="hidden md:flex text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors"
          >
            Admin
          </Link>
          <Button variant="outline" className="hidden md:flex border-cyan-400/50 text-cyan-400 hover:bg-cyan-950/50">
            Log In
          </Button>
          <MagneticButton className="hidden md:flex bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
            Get Started
          </MagneticButton>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 flex flex-col">
          <nav className="flex flex-col items-center justify-center gap-6 p-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium transition-colors hover:text-cyan-400 ${
                  pathname === item.href ? "text-cyan-400" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="text-lg font-medium text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin
            </Link>
            <div className="flex flex-col gap-4 w-full max-w-xs mt-4">
              <Button variant="outline" className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-950/50">
                Log In
              </Button>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

