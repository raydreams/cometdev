import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ModsShowcase } from "@/components/mods-showcase"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ModsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <div className="pt-32">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Powerful
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Mod Support</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Full compatibility with Fabric, Quilt, and NeoForge, plus 100+ built-in performance and utility mods ready
            to use.
          </p>
        </div>
        <ModsShowcase />
      </div>
      <Footer />
    </main>
  )
}
