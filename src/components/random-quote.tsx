"use client"

import { useState, useEffect } from "react"
import { RiDoubleQuotesL, RiDoubleQuotesR, RiRefreshLine, RiSparkling2Fill } from "react-icons/ri"

export function RandomQuote() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const quotes = [
    {
      text: "Performance isn't just about speed, it's about removing everything that slows you down.",
      author: "Comet Team",
    },
    {
      text: "The best client is the one you don't notice - it just works.",
      author: "CometDev",
    },
    {
      text: "Every millisecond matters when you're building worlds.",
      author: "Performance Team",
    },
    {
      text: "Clean code, clean interface, clean experience.",
      author: "Design Team",
    },
    {
      text: "Minecraft deserves better than bloated clients.",
      author: "Community",
    },
    {
      text: "Speed is not just a feature, it's a philosophy.",
      author: "Engineering Team",
    },
    {
      text: "Less is more, especially when it comes to client software.",
      author: "UX Team",
    },
    {
      text: "The future of gaming is lightweight, fast, and beautiful.",
      author: "Vision Team",
    },
    {
      text: "Innovation happens when you remove constraints, not add them.",
      author: "Innovation Team",
    },
    {
      text: "Great software feels invisible - it just enables what you want to do.",
      author: "Product Team",
    },
  ]

  const refreshQuote = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
      setIsRefreshing(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 8000) // Change quote every 8 seconds

    return () => clearInterval(interval)
  }, [quotes.length])

  // Truncate text to approximately 2 lines (about 120 characters)
  const truncateText = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text
    const truncated = text.substring(0, maxLength)
    const lastSpace = truncated.lastIndexOf(" ")
    return truncated.substring(0, lastSpace) + "..."
  }

  return (
    <div className="mb-12">
      <div className="relative group">
        {/* outer glow border */}
        <div className="absolute -inset-px rounded-[28px] bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-60 group-hover:opacity-100 blur-sm transition-opacity"></div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-6">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -top-6 -left-6 opacity-10 rotate-0">
            <RiDoubleQuotesL className="w-16 h-16 text-white" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-6 opacity-10 rotate-0">
            <RiDoubleQuotesR className="w-16 h-16 text-white" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                <RiSparkling2Fill className="w-4 h-4 text-white/70" />
                <h3 className="text-xs font-semibold text-white/90 tracking-wide">Quote of the Moment</h3>
              </div>
              <button
                onClick={refreshQuote}
                className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
                aria-label="Refresh quote"
                disabled={isRefreshing}
              >
                <RiRefreshLine
                  className={`w-5 h-5 text-white/70 group-hover:text-white transition-all duration-300 ${
                    isRefreshing ? "animate-spin" : "group-hover:rotate-180"
                  }`}
                />
              </button>
            </div>

            <div className={`transition-all duration-500 ${isRefreshing ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              <blockquote className="text-xl md:text-2xl font-semibold text-white/95 mb-3 leading-relaxed">
                “{truncateText(quotes[currentQuote].text)}”
              </blockquote>
              <cite className="text-gray-400 text-sm font-medium">— {quotes[currentQuote].author}</cite>
            </div>

            {/* indicators */}
            <div className="flex justify-center gap-1.5 mt-5">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  aria-label={`Show quote ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentQuote
                      ? "w-5 bg-white"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
