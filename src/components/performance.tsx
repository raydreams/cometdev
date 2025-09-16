"use client"

import { RiRocket2Line, RiCpuFill, RiBrainFill, RiCompass2Fill } from "react-icons/ri"

export function Performance() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      <div className="absolute inset-0 bg-black"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Performance, reimagined</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Faster. Lighter. Smoother.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Comet removes the bloat and optimizes the core for faster launches, higher FPS,
              and low memory usage—without sacrificing any features.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: RiCpuFill, title: "Instant Launch", desc: "Open in under 9.3s on average" },
                { icon: RiBrainFill, title: "Lean Memory", desc: "Up to 30% less RAM usage" },
                { icon: RiRocket2Line, title: "High FPS", desc: "+60% FPS in demanding scenes" },
                { icon: RiCompass2Fill, title: "No Bloat", desc: "Only the useful stuff, nothing else" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
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

          <div className="relative">
            {/* Dashed outer outline that always stays visible */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl border-2 border-dashed border-white/30"></div>

            {/* Image card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-3xl">
                <img
                  src="/cometloader.png"
                  alt="Comet performance preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Fade from image to stats: starts at #191919 and deepens */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(25,25,25,0) 0%, rgba(25,25,25,0.85) 55%, rgba(0,0,0,0.75) 100%)",
                  }}
                ></div>
              </div>

              {/* Stats overlay on bottom of image */}
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 divide-x divide-white/10 bg-black/40 backdrop-blur-sm rounded-b-3xl">
                {[{ label: "Launch", value: "2.3s" }, { label: "Memory", value: "-30%" }, { label: "FPS", value: "+55%" }].map((s, i) => (
                  <div key={i} className="p-4 text-center">
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-xs uppercase tracking-wide text-gray-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
