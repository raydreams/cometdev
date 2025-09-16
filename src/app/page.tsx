import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Performance } from "@/components/performance"
import { Social } from "@/components/social"
import { Download } from "@/components/download"
import { Footer } from "@/components/footer"
import { FeaturedBlogs } from "@/components/featured-blogs"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackToTopButton } from "@/components/backtotop"
//import { OverlayDemo } from "@/components/overlay-demo"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <div className="pt-24">
        <BackToTopButton />
        <Hero />
        <Features />
        <Performance />
        <Social />
        <FeaturedBlogs />
        <Download />
        <Footer />
      </div>
   {/*  <OverlayDemo /> */}
    </main>
  )
}
