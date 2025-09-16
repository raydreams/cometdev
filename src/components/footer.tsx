import Link from "next/link"
import { Github, Twitter, MessageCircle, Youtube, Heart, Code, Zap } from "lucide-react"
import { RiMailLockLine } from "react-icons/ri"
import { RandomQuote } from "@/components/random-quote"

export function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                <span className="text-black font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold text-white">Comet Client</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              The future of Minecraft clients. Experience unparalleled performance with a clean, distraction-free
              interface that puts your gameplay first.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Discord", icon: MessageCircle, href: "https://discord.gg/TgvVFmZTgG" },
                { name: "Twitter", icon: Twitter, href: "https://x.com/CometClient" },
                { name: "GitHub", icon: Github, href: "https://github.com/CometClient" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Product</span>
            </h3>
            <div className="space-y-4">
              {[
                { href: "/features", label: "Features" },
                { href: "/mods", label: "Mods" },
                { href: "/download", label: "Download" },
                { href: "/changelog", label: "Changelog" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white flex items-center space-x-2 items-right">
              <Code className="w-5 h-5" />
              <span>Support</span>
            </h3>
            <div className="space-y-4">
              {[
                { href: "/help", label: "Help Center" },
                { href: "/contact", label: "Contact Us" },
                { href: "/status", label: "System Status" },
                { href: "/community", label: "Community" },
                { href: "/support", label: "Support" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>


        {/* Random Quote Section */}
        <RandomQuote />

        {/* Newsletter signup */}
        <div className="relative bg-white/5 rounded-2xl p-6 mb-12 border border-white/10">
          {/* Disabled overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
            {/* Red radial blur effects on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent rounded-l-2xl blur-md"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-red-500/20 via-red-500/10 to-transparent rounded-r-2xl blur-md"></div>
            
            <div className="text-center relative z-10">
              <RiMailLockLine className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Newsletter coming soon</p>
            </div>
          </div>
          
          <div className="max-w-md mx-auto text-center opacity-50">
            <h3 className="text-xl font-bold mb-3 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">Get updates on new features and releases.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-red-500/50 transition-colors text-sm"
                disabled
              />
              <button className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 text-sm" disabled>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>© 2024 Comet Client. All rights reserved.</span>
              <div className="flex space-x-6">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
