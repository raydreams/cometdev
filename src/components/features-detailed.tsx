import { RiSpeedUpFill, RiQuillPenAiFill, RiRocket2Fill, RiPuzzleFill, RiGamepadFill, RiComputerFill, RiTeamFill, RiEarthFill, RiChatSmile3Fill } from "react-icons/ri"

export function FeaturesDetailed() {
  const features = [
    {
      category: "Performance",
      items: [
        {
          title: "Lightning Fast Launch",
          description: "Get into your world in just 9.3 seconds with our optimized startup sequence.",
          Icon: RiSpeedUpFill,
          benefits: ["50% faster than competitors", "Optimized mod loading", "Instant world access"],
        },
        {
          title: "Memory Optimization",
          description: "Uses 30% less RAM while delivering better performance than other clients.",
          Icon: RiQuillPenAiFill,
          benefits: ["Smart memory management", "Garbage collection optimization", "Lower system requirements"],
        },
        {
          title: "Built-in Performance Mods",
          description: "Sodium, Iris, Lithium, and 100+ performance mods come pre-installed.",
          Icon: RiRocket2Fill,
          benefits: ["No manual installation", "Perfect compatibility", "Automatic updates"],
        },
      ],
    },
    {
      category: "Compatibility",
      items: [
        {
          title: "Universal Mod Support",
          description: "Full compatibility with Fabric, Quilt, and Forge mod loaders.",
          Icon: RiPuzzleFill,
          benefits: ["Drag & drop installation", "Automatic dependency resolution", "Version compatibility checking"],
        },
        {
          title: "Minecraft Version Support",
          description: "Supports all modern Minecraft versions with day-one compatibility.",
          Icon: RiGamepadFill,
          benefits: ["Latest version support", "Snapshot compatibility", "Legacy version support"],
        },
        {
          title: "Cross-Platform",
          description: "Available for Windows, macOS, and Linux with native performance.",
          Icon: RiComputerFill,
          benefits: ["Native performance", "Platform-specific optimizations", "Consistent experience"],
        },
      ],
    },
    {
      category: "Social",
      items: [
        {
          title: "Friends System",
          description: "Connect with friends, see who's online, and join their worlds instantly.",
          Icon: RiTeamFill,
          benefits: ["Real-time status", "One-click joining", "Cross-server chat"],
        },
        {
          title: "World Hosting",
          description: "Host worlds for friends without setting up servers or port forwarding.",
          Icon: RiEarthFill,
          benefits: ["Instant hosting", "No technical setup", "Automatic backups"],
        },
        {
          title: "Integrated Chat",
          description: "Chat with friends across different servers and worlds seamlessly.",
          Icon: RiChatSmile3Fill,
          benefits: ["Cross-server messaging", "Rich text support", "Message history"],
        },
      ],
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">{category.category}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/10">
                    <feature.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">{feature.title}</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed text-center">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-sm text-gray-400">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
