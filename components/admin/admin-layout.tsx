"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, FileText, Image, Users, MessageSquare, Settings, LogOut, Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin panel.",
    })
    router.push("/admin")
  }

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { href: "/admin/pages", label: "Pages", icon: <FileText className="h-5 w-5" /> },
    { href: "/admin/portfolio", label: "Portfolio", icon: <Image className="h-5 w-5" /> },
    { href: "/admin/projects", label: "Projects", icon: <Users className="h-5 w-5" /> },
    { href: "/admin/messages", label: "Messages", icon: <MessageSquare className="h-5 w-5" /> },
    { href: "/admin/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar - Desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-white/10 transform transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 p-4 border-b border-white/10">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
              <div className="relative bg-black rounded-full p-1">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Admin Panel
            </span>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <Button
              variant="ghost"
              className="w-full justify-start text-white/70 hover:bg-white/5 hover:text-white"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : ""}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 h-16 flex items-center px-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex text-white hover:bg-white/10 mr-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="ml-auto flex items-center gap-4">
            <Link href="/" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
              View Site
            </Link>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
              <div className="relative h-8 w-8 rounded-full bg-black flex items-center justify-center">
                <span className="text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur-md lg:hidden">
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}

              <Button
                variant="ghost"
                className="w-full justify-start text-white/70 hover:bg-white/5 hover:text-white mt-4"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </nav>
          </div>
        )}

        {/* Page Content */}
        <main>{children}</main>
      </div>
    </div>
  )
}

