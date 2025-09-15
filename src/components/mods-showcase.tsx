/* eslint-disable @typescript-eslint/no-unused-vars */
import { modsTimeline, loaderIcons } from "@/lib/mods-data"

export function ModsShowcase() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Curated Mods, Seamless Support</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            First-class support for OptiFine, Fabric, Forge, and Quilt. Hand-picked performance and quality-of-life mods
            from Comet and Modrinth.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="pointer-events-none absolute left-1/2 top-0 -ml-px h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          <div className="space-y-10">
            {modsTimeline.map((row, rowIndex) => (
              <div key={row.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch`}>
                {(row.direction === "right" ? row.mods : [...row.mods].reverse()).map((mod, index) => {
                  const content = (
                    <div
                      className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] group"
                    >
                      {/* Accent glow */}
                      <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/10">
                          <mod.icon className="h-6 w-6 text-white/90" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-xl font-semibold">{mod.name}</h3>
                            <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
                              {mod.source === "comet" ? "Comet" : "Modrinth"}
                            </span>
                          </div>
                          <p className="text-gray-300 mt-2 text-sm leading-relaxed">{mod.description}</p>
                          <div className="mt-4 flex flex-wrap items-center gap-3">
                            {mod.supportedLoaders.map((loader) => {
                              const L = loaderIcons[loader]
                              const Icon = L.icon
                              return (
                                <span key={loader} className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                                  <Icon className={`h-3.5 w-3.5 ${L.color}`} />
                                  <span className="text-gray-300">{L.label}</span>
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )

                  // Positioning relative to center line with connector
                  const isRight = row.direction === "right"
                  const isFirst = index === 0
                  const isSecond = index === 1

                  return (
                    <div key={mod.id} className={`relative group ${isRight ? "lg:col-start-1" : "lg:col-start-2"}`}>
                      {/* Horizontal connector to center line */}
                      <div
                        className={`pointer-events-none hidden lg:block absolute top-12 ${
                          isRight ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                        } h-px w-[calc(50%-1rem)] bg-gradient-to-${isRight ? "r" : "l"} from-transparent via-white/15 to-transparent`}
                      ></div>

                      {content}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
