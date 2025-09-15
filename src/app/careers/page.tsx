import { JobListings } from "@/components/job-listings"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <div className="pt-32">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join the
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Comet Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Help us build the future of Minecraft clients. We&apos;re looking for passionate developers, designers, and
            community managers.
          </p>
        </div>
        <JobListings disabled={true} />
      </div>
      <Footer />
    </main>
  )
}
