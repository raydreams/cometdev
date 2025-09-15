import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getBlogPost } from "@/lib/blog-store"
import { BlogPost } from "@/components/blog-post"
import { ScrollToTop } from "@/components/scroll-to-top"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = getBlogPost(params.id)

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <div className="pt-32">
        <BlogPost blog={blog} />
      </div>
      <Footer />
    </main>
  )
}
