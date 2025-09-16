"use client"

import { useEffect, useState } from "react"

type HealthResponse = {
  status: "ok" | "degraded" | "down" | "unknown"
  updatedAt?: string
  services?: Array<{ name: string; status: string }>
  incidents?: Array<{ id: string; date: string; title: string; status: string }>
  uptime?: { daily: Array<{ date: string; percent: number | null }> }
  placeholder?: boolean
  message?: string
}

export function LiveStatus() {
  const [data, setData] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/health", { cache: "no-store" })
        if (!res.ok) {
          setError(res.status === 404 ? "Data not found" : `Error ${res.status}`)
          setData(null)
        } else {
          const json: HealthResponse = await res.json()
          setData(json)
        }
      } catch {
        setError("Failed to load status")
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 animate-pulse h-40" />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-white/20 pointer-events-none" />
          <div className="text-3xl font-bold">Data not found</div>
          <p className="mt-2 text-gray-400">We couldn’t retrieve live status data right now.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">Overall</div>
            <div className="text-2xl font-bold">
              {data.status === "ok" ? "All systems operational" : data.status}
            </div>
          </div>
          <div className="text-sm text-gray-400">{data.updatedAt ? new Date(data.updatedAt).toLocaleString() : ""}</div>
        </div>
        {/* Uptime bars */}
        <div className="mt-6">
          <div className="text-sm text-gray-400 mb-3">Last 7 days uptime</div>
          <div className="grid grid-cols-7 gap-2">
            {(data.uptime?.daily ?? Array.from({ length: 7 }, () => ({ date: "", percent: null as number | null }))).map((d, idx) => {
              const isPlaceholder = d.percent == null
              const height = isPlaceholder ? 50 : Math.max(4, Math.min(100, Math.round(d.percent as number)))
              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="relative h-24 w-6 rounded-md overflow-hidden border border-white/10 bg-black/40">
                    <div
                      className={`${isPlaceholder ? "bg-orange-500/60" : "bg-green-500/70"} absolute bottom-0 left-0 right-0`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-gray-400">{d.date ? new Date(d.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : "--"}</div>
                </div>
              )
            })}
          </div>
          {(!data.uptime?.daily || data.uptime.daily.every(d => d.percent == null)) && (
            <div className="mt-2 text-xs text-orange-400">No uptime data found</div>
          )}
        </div>

        {/* Services */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          {(data.services ?? []).map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-black/40 p-4 flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className={`text-sm px-2 py-1 rounded-full border ${
                s.status === "ok" ? "text-green-400 border-green-400/30 bg-green-400/10" :
                s.status === "degraded" ? "text-yellow-400 border-yellow-400/30 bg-yellow-400/10" :
                s.status === "down" ? "text-red-400 border-red-400/30 bg-red-400/10" :
                "text-gray-400 border-white/10 bg-white/5"
              }`}>
                {s.status}
              </span>
            </div>
          ))}
          {(!data.services || data.services.length === 0) && (
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center text-orange-400">
              No service data found
            </div>
          )}
        </div>

        {/* Incidents */}
        <div className="mt-8">
          <div className="text-sm text-gray-400 mb-3">Recent incidents</div>
          <div className="space-y-2">
            {(data.incidents ?? []).map((i) => (
              <div key={i.id} className="rounded-2xl border border-white/10 bg-black/40 p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{i.title}</div>
                  <div className="text-xs text-gray-400">{new Date(i.date).toLocaleString()}</div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full border ${
                  i.status === "resolved" ? "text-green-400 border-green-400/30 bg-green-400/10" :
                  i.status === "investigating" ? "text-yellow-400 border-yellow-400/30 bg-yellow-400/10" :
                  i.status === "identified" ? "text-orange-400 border-orange-400/30 bg-orange-400/10" :
                  "text-gray-400 border-white/10 bg-white/5"
                }`}>
                  {i.status}
                </span>
              </div>
            ))}
            {(!data.incidents || data.incidents.length === 0) && (
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center text-orange-400">
                No incident history found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


