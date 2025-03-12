"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "Page updated",
      target: "Home Page",
      user: "Admin",
      time: "10 minutes ago",
      icon: "🔄",
    },
    {
      id: 2,
      action: "New message",
      target: "Contact Form",
      user: "John Smith",
      time: "1 hour ago",
      icon: "📨",
    },
    {
      id: 3,
      action: "Portfolio added",
      target: "AR Project",
      user: "Admin",
      time: "3 hours ago",
      icon: "➕",
    },
    {
      id: 4,
      action: "User registered",
      target: "New Client",
      user: "Sarah Johnson",
      time: "5 hours ago",
      icon: "👤",
    },
    {
      id: 5,
      action: "Project updated",
      target: "Quantum Leap",
      user: "Admin",
      time: "Yesterday",
      icon: "📝",
    },
  ]

  return (
    <div className="bg-black border border-white/10 rounded-lg overflow-hidden h-full">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <h2 className="text-lg font-medium">Recent Activity</h2>
        <Clock className="h-4 w-4 text-white/50" />
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center text-lg">
                {activity.icon}
              </div>
              <div>
                <p className="font-medium">
                  {activity.action}: <span className="text-cyan-400">{activity.target}</span>
                </p>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span>{activity.user}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

