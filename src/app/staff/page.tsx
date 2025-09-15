import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StaffGrid } from "@/components/staff-grid"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Users, Sparkles, Heart, Code2 } from "lucide-react"

export default function StaffPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-white rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 mb-10">
            <Users className="w-5 h-5 text-white animate-pulse" />
            <span className="text-sm text-white font-semibold tracking-wide">Our Team</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-10 text-white leading-tight">
            Meet the
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Dream Team
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            The passionate developers, designers, and community managers who are building the future of Minecraft clients. 
            Each team member brings unique expertise and dedication to create the best possible experience for our community.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: Code2,
                value: "12+",
                label: "Team Members",
                desc: "Diverse expertise",
                color: "text-blue-400",
              },
              {
                icon: Sparkles,
                value: "4",
                label: "Departments",
                desc: "Specialized teams",
                color: "text-purple-400",
              },
              {
                icon: Heart,
                value: "100%",
                label: "Passionate",
                desc: "About Minecraft",
                color: "text-red-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StaffGrid />
      <Footer />
    </main>
  )
}
