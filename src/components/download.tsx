"use client"

import { Button } from "@/components/ui/button"
import { Zap, Shield, Rocket, Download as DownloadIcon, Monitor, Laptop, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

export function Download() {
  const [userOS, setUserOS] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Detect user's operating system
    const detectOS = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      if (userAgent.includes("win")) {
        setUserOS("windows")
      } else if (userAgent.includes("mac")) {
        setUserOS("macos")
      } else if (userAgent.includes("linux")) {
        setUserOS("linux")
      } else {
        setUserOS("unknown")
      }
      setIsLoading(false)
    }

    detectOS()
  }, [])
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-white/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-3/4 left-1/3 w-20 h-20 border border-white/15 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-10">
            <DownloadIcon className="w-5 h-5 text-white animate-bounce" />
            <span className="text-sm text-white font-semibold tracking-wide">Download Now</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-10 text-white leading-tight">
            Get Comet Client
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Experience the future of Minecraft clients. Download in seconds, play in minutes.
          </p>
        </div>

        {/* Platform Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {[
            {
              id: "windows",
              icon: Monitor,
              title: "Windows",
              desc: "Windows 10/11 optimized",
              features: ["DirectX 12 support", "Auto-updates", "Native Windows integration"],
              color: "from-blue-500/20 to-cyan-500/20",
              borderColor: "border-blue-500/30",
              iconColor: "text-blue-400",
              fileSize: "~150 MB",
              requirements: "Windows 10+ • Java 17+",
            },
            {
              id: "macos",
              icon: Laptop,
              title: "macOS",
              desc: "Apple Silicon & Intel optimized",
              features: ["Metal rendering", "Apple Silicon native", "macOS integration"],
              color: "from-gray-500/20 to-gray-600/20",
              borderColor: "border-gray-500/30",
              iconColor: "text-gray-400",
              fileSize: "~160 MB",
              requirements: "macOS 10.15+ • Java 17+",
            },
            {
              id: "linux",
              icon: Monitor,
              title: "Linux",
              desc: "Ubuntu, Debian & more",
              features: ["OpenGL support", "Package managers", "Cross-distro compatibility"],
              color: "from-green-500/20 to-emerald-500/20",
              borderColor: "border-green-500/30",
              iconColor: "text-green-400",
              fileSize: "~140 MB",
              requirements: "Ubuntu 18.04+ • Java 17+",
            },
          ].map((platform, index) => {
            const isUserOS = userOS === platform.id
            const isRecommended = isUserOS && !isLoading
            
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-3xl bg-gradient-to-br ${platform.color} border ${
                  isRecommended 
                    ? "border-white/60 ring-2 ring-white/20" 
                    : platform.borderColor
                } hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10`}
              >
                {/* Recommended badge */}
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-white to-gray-200 text-black px-4 py-1 rounded-full text-xs font-bold">
                      Recommended for you
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-14 h-14 ${isRecommended ? "bg-white/20" : "bg-white/10"} rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors`}>
                    <platform.icon className={`w-7 h-7 ${platform.iconColor} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{platform.title}</h3>
                    <p className="text-gray-300 text-sm">{platform.desc}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                      <span>{platform.fileSize}</span>
                      <span>•</span>
                      <span>{platform.requirements}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-1.5 mb-4">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  size="lg"
                  className={`w-full ${
                    isRecommended 
                      ? "bg-white text-black hover:bg-gray-200" 
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  } rounded-xl py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span>{isRecommended ? "Download Now" : `Download for ${platform.title}`}</span>
                </Button>
              </div>
            )
          })}
        </div>

        {/* All Downloads Link */}
        <div className="text-center mb-16">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 rounded-xl px-6 py-3 flex items-center space-x-2 mx-auto"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View all download options</span>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Download in under 30 seconds",
              color: "text-yellow-400",
            },
            {
              icon: Shield,
              title: "100% Secure",
              desc: "Verified and malware-free",
              color: "text-green-400",
            },
            {
              icon: Rocket,
              title: "Always Free",
              desc: "No hidden costs or subscriptions",
              color: "text-blue-400",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
            >
              <feature.icon
                className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">System Requirements</h3>
              <p className="text-gray-300">Everything you need to get started with Comet Client</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Minimum Requirements</span>
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>Java 17 or higher</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>4GB RAM minimum</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>2GB free disk space</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>OpenGL 3.3+ support</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Minecraft Compatibility</span>
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>Minecraft 1.20.1 - 1.21.x</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>Fabric 0.15+</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>Quilt 2.0+</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>NeoForge 20.1+</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Recommended Specs</span>
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>8GB RAM or more</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>Dedicated graphics card</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>SSD storage recommended</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>Latest Java 21</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
