"use client"

import type { BlogPost as BlogPostType } from "@/lib/blog-store"
import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"
import { RiUser2Fill } from "react-icons/ri"

async function getUuidFromUsername(username: string): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000) // 3 second timeout

    const response = await fetch(`https://api.allorigins.win/raw?url=https://api.mojang.com/users/profiles/minecraft/${username}`, {
      signal: controller.signal,
    })
    clearTimeout(timeoutId)

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.id
  } catch (error) {
    return null
  }
}

// Component for handling avatar with UUID conversion
function AuthorAvatar({ author, minecraftSkin }: { author: string; minecraftSkin: string }) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadAvatar = async () => {
      try {
        const uuid = await getUuidFromUsername(author)

        if (uuid) {
          setAvatarUrl(`https://api.mineatar.io/body/front/${uuid}`)
        } else if (minecraftSkin) {
          const fallbackUuid = await getUuidFromUsername(minecraftSkin)
          if (fallbackUuid) {
            setAvatarUrl(`https://api.mineatar.io/body/front/${fallbackUuid}`)
          }
        }
      } catch (error) {
        // Silently fail and use fallback
      } finally {
        setIsLoading(false)
      }
    }

    loadAvatar()
  }, [author, minecraftSkin])

  if (isLoading) {
    return (
      <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse flex items-center justify-center">
        <RiUser2Fill className="w-6 h-6 text-gray-400" />
      </div>
    )
  }

  if (!avatarUrl) {
    return (
      <img
        src="/benjiav.png"
        alt={author}
        className="w-16 h-16 rounded-full shadow-xl object-cover object-top"
        style={{
          filter: "drop-shadow(0 0 0 3px rgba(0, 0, 0, 0.8))",
        }}
      />
    )
  }

  return (
    <img
      src={avatarUrl || "/benjiav.png"}
      alt={author}
      className="w-16 h-16 rounded-full shadow-xl object-cover object-top"
      style={{
        filter: "drop-shadow(0 0 0 3px rgba(0, 0, 0, 0.8))",
      }}
      onError={() => setAvatarUrl(null)}
    />
  )
}

interface BlogPostProps {
  blog: BlogPostType
}

export function BlogPost({ blog }: BlogPostProps) {
  // Process content to replace :emojicomet: with image
  const processContent = (content: string) => {
    return content.replace(
      /:emojicomet:/g,
      '![comet emoji](/cometemoji.webp)'
    )
  }

  return (
    <article className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Image */}
        <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden mb-8">
          <img 
            src={blog.headerImage || "/placeholder.svg"} 
            alt={blog.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log("Image failed to load:", blog.headerImage)
              e.currentTarget.src = "/placeholder.svg"
            }}
            onLoad={(e) => {
              console.log("Image loaded successfully:", blog.headerImage)
              console.log("Image dimensions:", e.currentTarget.naturalWidth, "x", e.currentTarget.naturalHeight)
            }}
          />
        </div>

        {/* Meta Info */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative">
            <AuthorAvatar author={blog.author} minecraftSkin={blog.minecraftSkin} />
          </div>
          <div>
            <div className="text-lg font-semibold text-white">{blog.author}</div>
            <div className="text-gray-400">
              {blog.updatedAt > blog.createdAt ? (
                <>
                  Published {blog.createdAt.toLocaleDateString()} • Updated {blog.updatedAt.toLocaleDateString()}
                </>
              ) : (
                <>Published {blog.createdAt.toLocaleDateString()}</>
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">{blog.title}</h1>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 text-white">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 text-white mt-8">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-bold mb-3 text-white mt-6">{children}</h3>,
              p: ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
              ul: ({ children }) => <ul className="text-gray-300 mb-4 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="text-gray-300 mb-4 space-y-2">{children}</ol>,
              li: ({ children }) => (
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
              code: ({ children }) => (
                <code className="bg-white/10 px-2 py-1 rounded text-white text-sm">{children}</code>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#4D4B4C] pl-4 my-4 text-gray-400 text-sm [&_strong]:text-gray-300 [&_strong]:font-normal [&_strong]:not-italic">
                  {children}
                </blockquote>
              ),
              img: ({ src, alt, ...props }) => {
                // Special styling for comet emoji
                if (src === "/cometemoji.webp") {
                  return (
                    <img
                      src={src}
                      alt={alt}
                      className="inline-block w-6 h-6 mx-1 align-middle"
                      {...props}
                    />
                  )
                }
                // Default image styling
                return (
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-lg my-4 max-w-full h-auto"
                    {...props}
                  />
                )
              },
            }}
          >
            {processContent(blog.content)}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
