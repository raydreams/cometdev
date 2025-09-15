import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-store"

export function BlogList() {
  const blogs = getAllBlogPosts()

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`} className="block group">
              <article className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                      <img
                        src={blog.headerImage || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="relative">
                        <img
                          src={`https://minecraft-api.com/api/skins/${blog.minecraftSkin || "Steve"}/head/10.5/10/12`}
                          alt={blog.author}
                          className="w-10 h-10 rounded-full shadow-lg"
                          style={{
                            filter: "drop-shadow(0 0 0 2px rgba(0, 0, 0, 0.8))",
                          }}
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{blog.author}</div>
                        <div className="text-xs text-gray-400">{blog.createdAt.toLocaleDateString()}</div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                      {blog.content.replace(/[#*`]/g, "").substring(0, 200)}...
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
