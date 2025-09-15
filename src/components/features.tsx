import {
  RiMessage3Fill,
  RiRefreshLine,
  RiQuillPenAiFill,
  RiRam2Fill,
  RiFolderShield2Fill,
  RiWindow2Fill,
} from "react-icons/ri"

export function Features() {
  const features = [
    {
      title: "Lightning Fast Performance",
      description:
        "Built from the ground up with performance in mind. Experience 50% faster launch times and 30% less memory usage compared to other clients.",
      icon: RiRam2Fill,
      iconColor: "text-yellow-400",
      stats: "50% faster",
      details: ["Optimized rendering pipeline", "Efficient memory management", "Instant mod loading"],
    },
    {
      title: "Universal Mod Support",
      description:
        "Full compatibility with Fabric, Quilt, and NeoForge. Install any mod with our unified drag-and-drop interface.",
      icon: RiQuillPenAiFill,
      iconColor: "text-blue-400",
      stats: "3 mod loaders",
      details: ["Fabric compatibility", "Quilt support", "NeoForge integration"],
    },
    {
      title: "Clean Interface",
      description:
        "No clutter, no distractions. Just Play, Mods, and Settings. Focus on what matters most - your gameplay.",
      icon: RiWindow2Fill,
      iconColor: "text-purple-400",
      stats: "Zero bloat",
      details: ["Minimal UI design", "Distraction-free experience", "Intuitive navigation"],
    },
    {
      title: "Built-in Optimization",
      description: "Sodium, Iris, Lithium, and 100+ performance mods come pre-installed and perfectly configured.",
      icon: RiFolderShield2Fill,
      iconColor: "text-green-400",
      stats: "100+ mods",
      details: ["Sodium rendering", "Iris shaders", "Lithium optimization"],
    },
    {
      title: "Social Features",
      description:
        "Connect with friends, host worlds, and chat in real-time. All seamlessly integrated without UI clutter.",
      icon: RiMessage3Fill,
      iconColor: "text-pink-400",
      stats: "Real-time sync",
      details: ["Friends system", "World hosting", "Integrated chat"],
    },
    {
      title: "Auto-Updates",
      description:
        "Stay current with Minecraft releases through our intelligent, modular update system that never interrupts your gameplay.",
      icon: RiRefreshLine,
      iconColor: "text-orange-400",
      stats: "Always current",
      details: ["Seamless updates", "Version compatibility", "Zero downtime"],
    },
  ]

  return (
    <section className="py-32 px-6 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Subtle geometric elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-sm text-gray-200">Why developers choose Comet</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Why People
            <br />
            <span className="text-gray-200">Prefer Us</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed to enhance your Minecraft experience while maintaining the highest performance
            standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <feature.icon
                    className={`w-12 h-12 ${feature.iconColor} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  />
                  <div className="text-right">
                    <div className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                      {feature.stats}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-200 leading-relaxed mb-6 group-hover:text-gray-100 transition-colors">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center space-x-3 opacity-80 group-hover:opacity-100 transition-all duration-300"
                      style={{ transitionDelay: `${detailIndex * 50}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors"></div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <span className="text-gray-200">Ready to experience the difference?</span>
            <button className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300 rounded-full px-6 py-2 font-semibold">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
