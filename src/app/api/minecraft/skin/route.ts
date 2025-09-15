import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const uuid = searchParams.get("uuid")

  if (!uuid) {
    return NextResponse.json({ error: "UUID is required" }, { status: 400 })
  }

  try {
    const response = await fetch(`https://crafatar.com/renders/body/${uuid}?overlay`, {
      signal: AbortSignal.timeout(5000),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Skin not found" }, { status: 404 })
    }

    // Return the image URL since we can't proxy binary data easily
    return NextResponse.json({ skinUrl: response.url })
  } catch (error) {
    console.error("Failed to fetch skin:", error)
    return NextResponse.json({ error: "Failed to fetch skin" }, { status: 500 })
  }
}
