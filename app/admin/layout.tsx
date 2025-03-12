"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Toaster } from "@/components/ui/toaster"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken")
    const isLoginPage = pathname === "/admin"

    if (!token && !isLoginPage) {
      // Redirect to login if not authenticated and not on login page
      router.push("/admin")
    } else if (token && isLoginPage) {
      // Redirect to dashboard if authenticated and on login page
      router.push("/admin/dashboard")
    } else {
      setIsAuthenticated(!!token)
      setIsLoading(false)
    }
  }, [pathname, router])

  // Show nothing while checking authentication
  if (isLoading && pathname !== "/admin") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
      </div>
    )
  }

  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

