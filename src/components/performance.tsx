"use client"

import { RiRocket2Line, RiCpuFill, RiBrainFill, RiCompass2Fill } from "react-icons/ri"
import { useState, useEffect } from "react"

export function Performance() {
  // Static data for initial load animation
  const metrics = [
    { label: "Launch Time", value: 2.3, maxValue: 5.0, percentage: 46, color: "from-green-400 to-emerald-500", unit: "s" },
    { label: "Memory Usage", value: 512, maxValue: 1200, percentage: 43, color: "from-blue-400 to-cyan-500", unit: "MB" },
    { label: "CPU Usage", value: 15, maxValue: 100, percentage: 15, color: "from-purple-400 to-violet-500", unit: "%" },
    { label: "FPS Boost", value: 45, maxValue: 100, percentage: 45, color: "from-yellow-400 to-orange-500", unit: "%" },
  ]

  const comparisonData = [
    { name: "Comet Client", score: 95, color: "from-white to-gray-200" },
    { name: "Lunar Client", score: 72, color: "from-gray-400 to-gray-600" },
    { name: "Badlion Client", score: 68, color: "from-gray-500 to-gray-700" },
  ]

  // No live updates - just initial load animation

  // Simple animated counter component
  const AnimatedCounter = ({ value, unit, isInteger = false }: { value: number, unit: string, isInteger?: boolean }) => {
    const [displayValue, setDisplayValue] = useState(0)
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setDisplayValue(value)
      }, 500) // Start counting after 500ms
      
      return () => clearTimeout(timer)
    }, [value])
    
    return (
      <span className="font-bold text-white">
        {isInteger ? Math.round(displayValue) : displayValue.toFixed(1)}{unit}
      </span>
    )
  }

  // Simple animated bar component
  const AnimatedBar = ({ percentage, color, delay = 0 }: { percentage: number, color: string, delay?: number }) => {
    return (
      <div className="relative w-full bg-gray-800 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className={`h-4 rounded-full bg-gradient-to-r ${color} relative overflow-hidden bar-fill shadow-lg`}
          style={{ 
            '--target-width': `${percentage}%`,
            animationDelay: `${delay}ms`
          } as React.CSSProperties}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-50 blur-sm`}></div>
        </div>
      </div>
    )
  }
  return (
    <>
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        @keyframes bar-fill {
          0% { width: 0%; }
          100% { width: var(--target-width); }
        }
        
        .bar-fill {
          animation: bar-fill 2s ease-out forwards;
        }
      `}</style>
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Clean background */}
        <div className="absolute inset-0 bg-black"></div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Performance that matters</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
              Built for
              <br />
              <span className="text-gray-300">Speed</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              While other clients slow you down with bloat and unnecessary features, Comet Client is engineered from the
              ground up for maximum performance and efficiency.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: RiCpuFill,
                  title: "50% Faster Launch",
                  desc: "Get into your world in just 2.3 seconds",
                  color: "text-yellow-400",
                },
                {
                  icon: RiBrainFill,
                  title: "30% Less Memory",
                  desc: "Optimized memory usage leaves more for your world",
                  color: "text-blue-400",
                },
                {
                  icon: RiRocket2Line,
                  title: "Modern Architecture",
                  desc: "Built with the latest performance technologies",
                  color: "text-green-400",
                },
                {
                  icon: RiCompass2Fill,
                  title: "Zero Bloat",
                  desc: "Only the features you need, nothing more",
                  color: "text-purple-400",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                    <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-full hover:from-gray-100 hover:to-gray-300 transition-all duration-300 hover:scale-105">
                Download & Benchmark
              </button>
              <button className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300">
                View Benchmarks
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Performance dashboard mockup */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden">
              {/* Animated background grid */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                  animation: 'grid-move 20s linear infinite'
                }}></div>
              </div>
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <h3 className="text-xl font-semibold">Performance Monitor</h3>
                </div>
                <div className="flex items-center space-x-2 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">Live</span>
                </div>
              </div>

              <div className="space-y-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {metric.label}
                      </span>
                      <div className="text-right">
                        <AnimatedCounter value={metric.value} unit={metric.unit} />
                        <span className="text-gray-400 text-sm ml-2">/ {metric.maxValue}{metric.unit}</span>
                      </div>
                    </div>
                    <AnimatedBar 
                      percentage={metric.percentage} 
                      color={metric.color} 
                      delay={index * 200}
                    />
                    {/* Performance indicator dots */}
                    <div className="flex justify-end mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            i < Math.floor(metric.percentage / 20) 
                              ? 'bg-white animate-pulse' 
                              : 'bg-gray-600'
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison chart */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">vs Competition</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-blue-400">Real-time</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {comparisonData.map((client, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="w-24 text-sm text-gray-300 group-hover:text-white transition-colors">
                          {client.name}
                        </div>
                        <div className="flex-1 relative">
                          <AnimatedBar 
                            percentage={client.score} 
                            color={client.color} 
                            delay={index * 300}
                          />
                        </div>
                        <div className="w-8 text-sm font-semibold text-right">
                          <AnimatedCounter value={client.score} unit="%" isInteger={true} />
                        </div>
                      </div>
                      {/* Performance trend indicator */}
                      <div className="flex justify-end">
                        <div className="flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-1 rounded-full transition-all duration-500 ${
                                i === 0 ? 'bg-green-400' : 
                                i === 1 ? 'bg-yellow-400' : 'bg-red-400'
                              }`}
                              style={{ 
                                opacity: 0.8,
                                animationDelay: `${i * 200}ms`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
