import Link from "next/link"
import { Zap } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 py-6 md:py-0 bg-black">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur"></div>
            <div className="relative bg-black rounded-full p-1">
              <Zap className="h-4 w-4 text-cyan-400" />
            </div>
          </div>
          <p className="text-sm text-white/50">© 2025 OptimusWebTech. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/portfolio" className="text-sm text-white/50 hover:text-cyan-400 transition-colors">
            Portfolio
          </Link>
          <Link href="/projects" className="text-sm text-white/50 hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <Link href="/privacy" className="text-sm text-white/50 hover:text-cyan-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-white/50 hover:text-cyan-400 transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm text-white/50 hover:text-cyan-400 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}

