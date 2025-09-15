import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog-list"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <div className="pt-32">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Comet <span className="text-gray-300">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Latest updates, features, and insights from the Comet Client development team.
          </p>
        </div>
        <BlogList />
      </div>
      <Footer />
    </main>
  )
}
