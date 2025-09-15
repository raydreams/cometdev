import { RiGlobalFill, RiMessage3Fill, RiTeamFill, RiUserStarFill } from "react-icons/ri"

export function Social() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <RiUserStarFill className="w-4 h-4 text-white animate-pulse" />
            <span className="text-sm text-gray-200 font-medium">Connect without compromise</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Built for the
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto leading-relaxed">
            Connect with friends, host worlds, and chat seamlessly—all integrated into your client without cluttering
            your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: RiTeamFill,
              title: "Friends System",
              description:
                "See who's online, join their worlds instantly, and stay connected with your Minecraft community.",
              color: "text-blue-400",
              features: ["Real-time status", "One-click joining", "Cross-server presence"],
            },
            {
              icon: RiMessage3Fill,
              title: "Integrated Chat",
              description: "Chat with friends across servers and worlds with our seamless messaging system.",
              color: "text-green-400",
              features: ["Cross-server messaging", "Rich text support", "Message history"],
            },
            {
              icon: RiGlobalFill,
              title: "World Hosting",
              description:
                "Create and share worlds instantly with friends—no server setup or port forwarding required.",
              color: "text-purple-400",
              features: ["Instant hosting", "No technical setup", "Automatic backups"],
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <feature.icon
                    className={`w-8 h-8 ${feature.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gray-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center space-x-3 opacity-80 group-hover:opacity-100 transition-all duration-300"
                      style={{ transitionDelay: `${itemIndex * 50}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors"></div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
