/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server"
import { getRandomAnnouncement } from "@/lib/announcement-store"

export const runtime = "edge"

function serialize() {
  const item = getRandomAnnouncement()
  return { announcement: item.announcement, href: item.href, link: item.link ?? null }
}

export async function GET(request: Request) {
  // WebSocket upgrade support (Edge runtime)
  if (request.headers.get("upgrade") === "websocket") {
    const pair = (globalThis as any).WebSocketPair ? (new (globalThis as any).WebSocketPair()) : null
    if (!pair) {
      return new Response("WebSocket not supported in this runtime", { status: 400 })
    }

    const [client, server] = [pair[0], pair[1]]
    ;(server as any).accept()

    // Send an initial announcement
    ;(server as any).send(JSON.stringify(serialize()))

    const interval = setInterval(() => {
      try {
        ;(server as any).send(JSON.stringify(serialize()))
      } catch {
        clearInterval(interval)
      }
    }, 15000)

    ;(server as any).addEventListener("close", () => clearInterval(interval))
    ;(server as any).addEventListener("error", () => clearInterval(interval))

    return new Response(null, { status: 101, webSocket: client as any } as any)
  }

  // Fallback JSON response
  return NextResponse.json(serialize())
}


