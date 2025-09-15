import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DownloadSection } from "@/components/download-section"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <div className="pt-32">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Download <span className="text-gray-300">Comet Client</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get started with the fastest Minecraft client. Free download, no registration required.
          </p>
        </div>
        <DownloadSection />
      </div>
      <Footer />
    </main>
  )
}
