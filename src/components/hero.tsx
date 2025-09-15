import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import {
  RiMeteorFill,
  RiSpyFill,
  RiTeamFill,
  RiCollageFill,
  RiSparkling2Fill,
  RiDashboardFill,
  RiCloudWindyFill,
  RiPlayLargeFill,
  RiDownload2Fill,
} from "react-icons/ri"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <Navigation />

      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Logo with glow effect */}
            <div className="mb-12 relative">
              <div className="w-40 h-40 bg-white rounded-full mx-auto flex items-center justify-center shadow-2xl relative group">
                <span className="text-black font-bold text-6xl">C</span>
                <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Main heading with better typography */}
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none text-white tracking-tight">COMET</h1>
            <div className="text-2xl md:text-4xl text-gray-400 mb-8 font-light tracking-wider">
              MINECRAFT • REIMAGINED
            </div>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              The fastest, cleanest, & most minmalisti Minecraft client ever built.
              <br />
              Zero bloat, maximum performance, & with infinite possibilities.
            </p>

            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-3"
              >
                <RiDownload2Fill className="w-6 h-6" />
                <span>Download Free</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-12 py-6 text-xl bg-transparent hover:border-white/50 transition-all duration-300 flex items-center space-x-3"
              >
                <RiPlayLargeFill className="w-6 h-6" />
                <span>Watch Demo</span>
              </Button>
            </div>
          </div>

          {/* Stats grid with better design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: RiMeteorFill,
                value: "9.3s",
                label: "Launch Time",
                desc: "50% faster than competitors",
                color: "text-yellow-400",
              },
              {
                icon: RiTeamFill,
                value: "100+",
                label: "Active Users",
                desc: "Growing community",
                color: "text-blue-400",
              },
              {
                icon: RiCollageFill,
                value: "80+",
                label: "Built-in Mods",
                desc: "Performance optimized",
                color: "text-green-400",
              },
              {
                icon: RiSpyFill,
                value: "99.9%",
                label: "Uptime",
                desc: "Always available",
                color: "text-purple-400",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 text-center relative overflow-hidden"
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <metric.icon
                    className={`w-8 h-8 mx-auto mb-4 ${metric.color} group-hover:scale-110 transition-all duration-300 group-hover:rotate-12`}
                  />
                  <div
                    className={`text-4xl font-black mb-2 ${metric.color || "text-white"} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-white font-bold text-lg mb-2">{metric.label}</div>
                  <div className="text-gray-400 text-sm">{metric.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Lightning Fast",
                desc: "Optimized from the ground up for maximum performance",
                icon: RiCloudWindyFill,
                color: "text-yellow-400",
              },
              {
                title: "Universal Mods",
                desc: "Full compatibility with Fabric, Quilt, and NeoForge",
                icon: RiDashboardFill,
                color: "text-blue-400",
              },
              {
                title: "Zero Bloat",
                desc: "Clean interface with only the features you need",
                icon: RiSparkling2Fill,
                color: "text-purple-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden hover:scale-105"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <feature.icon
                    className={`w-12 h-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}
                  />
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
