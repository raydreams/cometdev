import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get("username")

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 })
  }

  try {
    const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`, {
      signal: AbortSignal.timeout(5000),
      headers: {
        "User-Agent": "Comet-Client/1.0",
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const data = await response.json()
    return NextResponse.json({ id: data.id })
  } catch (error) {
    console.error("Failed to fetch UUID:", error)
    return NextResponse.json({ error: "Failed to fetch UUID" }, { status: 500 })
  }
}
