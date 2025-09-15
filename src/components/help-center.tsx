"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RiRocket2Fill, RiSettings4Fill, RiPuzzleFill, RiFlashlightFill, RiToolsFill, RiUser3Fill, RiBookOpenFill, RiBugFill, RiExternalLinkFill, RiTimerFill } from "react-icons/ri"

export function HelpCenter() {
  const [activeCategory, setActiveCategory] = useState("getting-started")
  const videos = [
    { title: "Install Comet", duration: "3:12", id: "dQw4w9WgXcQ" },
    { title: "Add Your First Mod", duration: "4:08", id: "kxopViU98Xo" },
    { title: "Boost FPS Settings", duration: "2:45", id: "oHg5SJYRHA0" },
  ]
  const [selectedVideo, setSelectedVideo] = useState(0)

  const categories = [
    { id: "getting-started", name: "Getting Started", Icon: RiRocket2Fill },
    { id: "installation", name: "Installation", Icon: RiSettings4Fill },
    { id: "mods", name: "Mods & Modpacks", Icon: RiPuzzleFill },
    { id: "performance", name: "Performance", Icon: RiFlashlightFill },
    { id: "troubleshooting", name: "Troubleshooting", Icon: RiToolsFill },
    { id: "account", name: "Account & Login", Icon: RiUser3Fill },
  ]

  const helpContent = {
    "getting-started": [
      {
        title: "Welcome to Comet Client",
        content: "Learn the basics of using Comet Client and get started with your first world.",
      },
      {
        title: "First Time Setup",
        content: "Step-by-step guide to setting up Comet Client for the first time.",
      },
      {
        title: "Interface Overview",
        content: "Understanding the Comet Client interface and navigation.",
      },
    ],
    installation: [
      {
        title: "System Requirements",
        content: "Minimum and recommended system requirements for optimal performance.",
      },
      {
        title: "Installing on Windows",
        content: "Complete installation guide for Windows users.",
      },
      {
        title: "Installing on macOS",
        content: "Complete installation guide for macOS users.",
      },
      {
        title: "Installing on Linux",
        content: "Complete installation guide for Linux users.",
      },
    ],
    mods: [
      {
        title: "Installing Mods",
        content: "How to install and manage mods in Comet Client.",
      },
      {
        title: "Mod Compatibility",
        content: "Understanding mod compatibility and resolving conflicts.",
      },
      {
        title: "Creating Modpacks",
        content: "How to create and share custom modpacks.",
      },
    ],
    performance: [
      {
        title: "Optimizing Performance",
        content: "Tips and tricks to get the best performance from Comet Client.",
      },
      {
        title: "Graphics Settings",
        content: "Configuring graphics settings for your hardware.",
      },
      {
        title: "Memory Allocation",
        content: "How to allocate the right amount of RAM for optimal performance.",
      },
    ],
    troubleshooting: [
      {
        title: "Common Issues",
        content: "Solutions to the most common problems users encounter.",
      },
      {
        title: "Crash Reports",
        content: "How to read and report crash logs.",
      },
      {
        title: "Connection Problems",
        content: "Fixing server connection and network issues.",
      },
    ],
    account: [
      {
        title: "Minecraft Account Setup",
        content: "How to link your Minecraft account with Comet Client.",
      },
      {
        title: "Login Issues",
        content: "Troubleshooting login and authentication problems.",
      },
      {
        title: "Account Security",
        content: "Keeping your Minecraft account safe and secure.",
      },
    ],
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-white">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.Icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left p-3 rounded-2xl transition-all duration-300 flex items-center space-x-3 ${
                        activeCategory === category.id
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/10">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Video tutorials rail */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                <div className="flex-1 min-w-0">
                  {/* Sample iframe video */}
                  <div className="aspect-video rounded-2xl p-2 border-2 border-dashed border-white/20">
                    <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${videos[selectedVideo].id}`}
                      title="Tutorial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-72 flex flex-col gap-4">
                  {videos.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVideo(i)}
                      className={`text-left p-4 rounded-xl transition-colors border-2 ${
                        selectedVideo === i
                          ? "bg-white/10 border-dashed border-white/30"
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="text-sm text-white font-semibold truncate">{v.title}</div>
                      <div className="text-xs text-white/60">{v.duration}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {helpContent[activeCategory as keyof typeof helpContent]?.map((item, index) => {
                const CategoryIcon = (categories.find(c => c.id === activeCategory)?.Icon) || RiBookOpenFill
                return (
                  <div key={index} className="relative group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                    <div className="pointer-events-none absolute -inset-px rounded-[22px] bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/10">
                          <CategoryIcon className="w-4.5 h-4.5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-white/80 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                        <RiTimerFill className="w-3.5 h-3.5" />
                        5 min
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">{item.content}</p>
                    <div className="mt-4 flex gap-2">
                      <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm inline-flex items-center gap-2">
                        <RiBookOpenFill className="w-4 h-4" /> Open Guide
                      </Button>
                      <Button className="bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 text-sm inline-flex items-center gap-2">
                        <RiBugFill className="w-4 h-4" /> Report Issue
                      </Button>
                    </div>
                    <div className="mt-3 text-right">
                      <a className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white cursor-pointer">
                        View online <RiExternalLinkFill className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
