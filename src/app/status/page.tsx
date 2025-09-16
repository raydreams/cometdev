import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LiveStatus } from "@/components/live-status"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <div className="pt-32">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400">All systems operational</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            System
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Status</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Real-time status of all Comet Client services and infrastructure.
          </p>
        </div>
        <LiveStatus />
      </div>
      <Footer />
    </main>
  )
}
