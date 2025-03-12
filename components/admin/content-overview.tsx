"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Plus, FileText, Image, Users } from "lucide-react"

export function ContentOverview() {
  const [activeTab, setActiveTab] = useState("pages")

  const tabs = [
    { id: "pages", label: "Pages", icon: <FileText className="h-4 w-4" /> },
    { id: "portfolio", label: "Portfolio", icon: <Image className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Users className="h-4 w-4" /> },
  ]

  const contentItems = {
    pages: [
      { id: 1, title: "Home Page", status: "Published", lastUpdated: "2 days ago" },
      { id: 2, title: "About Us", status: "Published", lastUpdated: "1 week ago" },
      { id: 3, title: "Services", status: "Published", lastUpdated: "3 days ago" },
      { id: 4, title: "Contact", status: "Published", lastUpdated: "5 days ago" },
      { id: 5, title: "Terms of Service", status: "Draft", lastUpdated: "1 day ago" },
    ],
    portfolio: [
      { id: 1, title: "Neural Network Dashboard", status: "Published", lastUpdated: "1 week ago" },
      { id: 2, title: "Quantum E-Commerce Platform", status: "Published", lastUpdated: "3 days ago" },
      { id: 3, title: "Immersive Virtual Reality Tour", status: "Published", lastUpdated: "2 weeks ago" },
      { id: 4, title: "New AR Project", status: "Draft", lastUpdated: "1 day ago" },
    ],
    projects: [
      { id: 1, title: "Project Quantum Leap", status: "Active", lastUpdated: "2 days ago" },
      { id: 2, title: "Neural Interface Initiative", status: "Active", lastUpdated: "1 week ago" },
      { id: 3, title: "Digital Twin Ecosystem", status: "Completed", lastUpdated: "1 month ago" },
      { id: 4, title: "New Research Project", status: "Planning", lastUpdated: "12 hours ago" },
    ],
  }

  const activeItems = contentItems[activeTab as keyof typeof contentItems]

  return (
    <div className="bg-black border border-white/10 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <h2 className="text-lg font-medium">Content Overview</h2>
        <Button
          size="sm"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add New
        </Button>
      </div>

      <div className="border-b border-white/10">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-cyan-400 text-cyan-400"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-white/50 text-sm">
                <th className="pb-3 font-medium">Title</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Last Updated</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeItems.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="border-t border-white/5"
                >
                  <td className="py-3 font-medium">{item.title}</td>
                  <td className="py-3">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        item.status === "Published" || item.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : item.status === "Draft" || item.status === "Planning"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 text-white/70">{item.lastUpdated}</td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-white/70 hover:text-cyan-400 hover:bg-white/5"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-white/70 hover:text-red-400 hover:bg-white/5"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

