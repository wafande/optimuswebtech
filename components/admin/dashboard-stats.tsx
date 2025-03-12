"use client"

import { motion } from "framer-motion"
import { Users, FileText, MessageSquare, Eye } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Users",
      value: "1,284",
      change: "+12%",
      isPositive: true,
      icon: <Users className="h-5 w-5 text-cyan-400" />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Content Items",
      value: "32",
      change: "+4",
      isPositive: true,
      icon: <FileText className="h-5 w-5 text-purple-400" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Messages",
      value: "8",
      change: "3 new",
      isPositive: true,
      icon: <MessageSquare className="h-5 w-5 text-green-400" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Page Views",
      value: "24.5K",
      change: "+18%",
      isPositive: true,
      icon: <Eye className="h-5 w-5 text-amber-400" />,
      color: "from-amber-500 to-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-black border border-white/10 rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md bg-gradient-to-r ${stat.color} bg-opacity-10`}>{stat.icon}</div>
                <h3 className="text-sm font-medium text-white/70">{stat.title}</h3>
              </div>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  stat.isPositive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold">{stat.value}</p>
          </div>
          <div className={`h-1 bg-gradient-to-r ${stat.color}`}></div>
        </motion.div>
      ))}
    </div>
  )
}

