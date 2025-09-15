import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HelpCenter } from "@/components/help-center"
import { RiQuestionAnswerFill } from "react-icons/ri"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <div className="pt-32">
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-10 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/10">
                <RiQuestionAnswerFill className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Help Center</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Guides, fixes, and video walkthroughs to get you playing faster.
              </p>
            </div>
          </div>
        </section>
        <HelpCenter />
      </div>
      <Footer />
    </main>
  )
}
