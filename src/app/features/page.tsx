import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeaturesDetailed } from "@/components/features-detailed"
import { RiSparkling2Fill, RiRocket2Fill, RiCpuFill, RiQuillPenFill } from "react-icons/ri"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <div className="pt-32">
        {/* Hero */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-10 text-center">
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
              </div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/10">
                <RiSparkling2Fill className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Powerful Features</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Built for speed, simplicity, and seamless mod support. Discover what makes Comet stand apart.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[{icon:RiRocket2Fill,label:"Fast"},{icon:RiCpuFill,label:"Optimized"},{icon:RiQuillPenFill,label:"Simple"}].map((b,i)=>{
                  const Icon = b.icon as React.ComponentType<{ className?: string }>
                  return (
                    <div key={i} className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                      <Icon className="w-4 h-4 text-white/80" />
                      <span className="text-sm text-white/90">{b.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <FeaturesDetailed />
      </div>
      <Footer />
    </main>
  )
}
