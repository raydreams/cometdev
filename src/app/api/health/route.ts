/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server"

// Very simple scraper stub: expects a JSON endpoint or a plain status page with keywords.
// In production, replace parsing with a proper adapter for your source.

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const override = searchParams.get("url")
    const source = override || process.env.STATUS_SOURCE_URL

    if (!source) {
      return NextResponse.json(
        { status: "unknown", message: "STATUS_SOURCE_URL not configured" },
        { status: 404 }
      )
    }

    const res = await fetch(source, { next: { revalidate: 0 } })
    if (!res.ok) {
      return NextResponse.json(
        { status: "unknown", message: `Upstream ${res.status}` },
        { status: 502 }
      )
    }

    const contentType = res.headers.get("content-type") || ""

    // If JSON, try to map fields directly
    if (contentType.includes("application/json")) {
      const json = await res.json()
      const mapped = mapJson(json)
      return NextResponse.json(withPlaceholdersIfEmpty(mapped), { status: 200 })
    }

    // Fallback: plain text/HTML keyword detection
    const text = await res.text()
    const lower = text.toLowerCase()
    const status = lower.includes("degraded")
      ? "degraded"
      : lower.includes("partial outage") || lower.includes("down")
      ? "down"
      : lower.includes("operational") || lower.includes("all systems")
      ? "ok"
      : "unknown"

    return NextResponse.json(
      withPlaceholdersIfEmpty({ status, updatedAt: new Date().toISOString(), services: [], incidents: [], uptime: { daily: [] } }),
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      withPlaceholdersIfEmpty({ status: "unknown", message: "Scrape failed", services: [], incidents: [], uptime: { daily: [] } }),
      { status: 200 }
    )
  }
}

function mapJson(input: any) {
  // Best-effort normalizer across common status JSON shapes
  const now = new Date().toISOString()
  // Try common fields
  const status = input.status || input.overall_status || input.state || "unknown"
  const services =
    input.components?.map((c: any) => ({ name: c.name, status: c.status })) ||
    input.services?.map((s: any) => ({ name: s.name || s.id, status: s.status || s.state })) ||
    []
  const incidents = input.incidents || input.history || []
  const uptime = input.uptime || input.daily_uptime || { daily: [] }
  return { status, services, incidents, uptime, updatedAt: input.updatedAt || input.updated_at || now }
}

function withPlaceholdersIfEmpty(mapped: any) {
  const ensure = { ...mapped }
  if (!ensure.uptime || !ensure.uptime.daily || ensure.uptime.daily.length === 0) {
    ensure.uptime = { daily: Array.from({ length: 7 }, () => ({ date: new Date().toISOString(), percent: null })) }
  }
  if (!ensure.incidents) ensure.incidents = []
  if (!ensure.services) ensure.services = []
  ensure.placeholder = (!mapped.services?.length && !mapped.incidents?.length && (mapped.uptime?.daily ?? []).every((d: any) => d.percent == null))
  return ensure
}


