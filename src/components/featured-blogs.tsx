"use client"

import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { getAllBlogPosts } from "@/lib/blog-store"
import {
  RiCalendar2Fill,
  RiUser2Fill,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiSparkling2Fill,
  RiLink as RiLinkIcon,
} from "react-icons/ri"

async function getUuidFromUsername(username: string): Promise<string | null> {
  try {
    const response = await fetch(`/api/minecraft/uuid?username=${encodeURIComponent(username)}`, {
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) return null
    const data = await response.json()
    return data.id || null
  } catch (error) {
    console.warn(`Failed to fetch UUID for ${username}:`, error)
    return null
  }
}

async function loadBodySkin(uuid: string): Promise<string | null> {
  try {
    const response = await fetch(`/api/minecraft/skin?uuid=${encodeURIComponent(uuid)}`, {
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) return null
    const data = await response.json()
    return data.skinUrl || null
  } catch (error) {
    console.warn(`Failed to load skin for UUID ${uuid}:`, error)
    return null
  }
}

function AuthorBodySkin({ author, minecraftSkin }: { author: string; minecraftSkin: string }) {
  const [skinUrl, setSkinUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Generate a consistent color based on the author name for fallback
  const getAuthorColor = (name: string) => {
    const colors = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-purple-500 to-pink-600",
      "from-teal-500 to-blue-600",
      "from-red-500 to-orange-600",
    ]
    const hash = name.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  useEffect(() => {
    async function fetchSkin() {
      if (!minecraftSkin) {
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        const uuid = await getUuidFromUsername(minecraftSkin)
        if (uuid) {
          const skin = await loadBodySkin(uuid)
          if (skin) {
            setSkinUrl(skin)
          } else {
            setError(true)
          }
        } else {
          setError(true)
        }
      } catch (err) {
        console.warn("Error fetching Minecraft skin:", err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSkin()
  }, [minecraftSkin])

  const gradientClass = getAuthorColor(author)

  // Loading state
  if (isLoading && minecraftSkin) {
    return (
      <div className="w-16 h-32 bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    )
  }

  // Success state with skin
  if (skinUrl && !error) {
    return (
      <div className="w-16 h-32 rounded-lg overflow-hidden">
        <img
          src={skinUrl || "/benjiav.png"}
          alt={`${author}'s Minecraft skin`}
          className="w-full h-full object-contain"
          onError={() => setError(true)}
          loading="lazy"
        />
      </div>
    )
  }

  // Fallback to benjiav.png
  return (
    <div className="w-16 h-32 rounded-lg overflow-hidden">
      <img
        src="/benjiav.png"
        alt={`${author}'s avatar`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  )
}

export function FeaturedBlogs() {
  const blogs = getAllBlogPosts().slice(0, 10)
  
  // Debug: Log the first blog's headerImage
  console.log("First blog headerImage:", blogs[0]?.headerImage)
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollerRef.current
    if (!container) return
    const amount = Math.floor(container.clientWidth * 0.85)
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <RiSparkling2Fill className="w-4 h-4 text-white animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">Latest insights from our team</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Featured
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Updates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments, feature releases, and insights from the Comet Client team.
          </p>
        </div>

        {blogs.length > 0 ? (
          <>
            {/* Carousel Controls */}
            <div className="relative">
              <button
                aria-label="Scroll left"
                onClick={() => scrollByAmount("left")}
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
              >
                <RiArrowLeftLine className="w-6 h-6" />
              </button>
              <button
                aria-label="Scroll right"
                onClick={() => scrollByAmount("right")}
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
              >
                <RiArrowRightLine className="w-6 h-6" />
              </button>

              {/* Scroller */}
              <div
                ref={scrollerRef}
                className="mb-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pl-16 pr-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
                style={{ scrollBehavior: "smooth" }}
              >
                {/* Hide scrollbar for WebKit */}
                <style jsx>{`
                  div::-webkit-scrollbar { display: none; }
                `}</style>
                {blogs.map((blog, index) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    className="group snap-start"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <article className="relative w-[280px] sm:w-[320px] md:w-[360px] rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      {/* Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900" style={{ zIndex: 1 }}>
                        <img
                          src={blog.headerImage || "/placeholder.svg?height=192&width=360&query=blog header"}
                          alt={blog.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            console.log("Featured blog image failed to load:", blog.headerImage)
                            e.currentTarget.src = "/placeholder.svg?height=192&width=360&query=blog header"
                          }}
                          onLoad={(e) => {
                            console.log("Featured blog image loaded successfully:", blog.headerImage)
                            console.log("Image dimensions:", e.currentTarget.naturalWidth, "x", e.currentTarget.naturalHeight)
                          }}
                        />
                        {/* Debug text overlay */}
                        <div className="absolute top-2 left-2 bg-black/80 text-white text-xs p-1 rounded">
                          {blog.headerImage}
                        </div>

                        {/* Hover overlay with author avatar and metadata */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-300 flex items-end">
                          <div className="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-start gap-4">
                              {/* Author avatar on the left - only visible on hover */}
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                                <AuthorBodySkin author={blog.author} minecraftSkin={blog.minecraftSkin} />
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                {/* Title */}
                                <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2 leading-tight">
                                  {blog.title}
                                </h3>

                                {/* Author and Date on same line */}
                                <div className="flex items-center gap-1 text-xs text-gray-300">
                                  <RiUser2Fill className="w-3 h-3" />
                                  <span>{blog.author}</span>
                                  <span className="mx-1">•</span>
                                  <RiCalendar2Fill className="w-3 h-3" />
                                  <span>
                                    {blog.createdAt.toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "numeric",
                                      day: "numeric",
                                    })}
                                  </span>
                                </div>
                              </div>

                              {/* Link Icon */}
                              <RiLinkIcon className="mt-0.5 w-4 h-4 text-white/80 shrink-0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            {/* View All Posts CTA */}
            <div className="text-center">
              <Link
                href="/blog"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-medium">View All Posts</span>
                <RiArrowRightLine className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <RiSparkling2Fill className="w-8 h-8 text-white/60" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Coming Soon</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              We're working on exciting blog content. Check back soon for the latest updates and insights!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
