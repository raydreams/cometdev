/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RiSparkling2Fill, RiInstanceFill, RiFlaskFill, RiBriefcase2Fill, RiQuestionAnswerFill, RiImportFill, RiCloseFill, RiMenuSearchFill } from "react-icons/ri"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  //     { href: "/support", label: "Support", icon: RiQuestionAnswerFill },

  const navItems = [
    { href: "/features", label: "Features", icon: RiSparkling2Fill },
    { href: "/mods", label: "Mods", icon: RiInstanceFill },
    { href: "/staff", label: "Staff", icon: RiFlaskFill },
    { href: "/careers", label: "Careers", icon: RiBriefcase2Fill },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div
          className={`relative bg-black/80 backdrop-blur-3xl border border-white/20 rounded-3xl px-8 py-5 transition-all duration-500 ${
            scrolled 
              ? "shadow-2xl bg-black/90 border-white/30 scale-[0.98] mt-2" 
              : "shadow-xl hover:shadow-2xl hover:scale-[1.02] mt-4"
          }`}
        >
          {/* Muted background pattern */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-white/20"></div>
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/5 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/8 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/6 rounded-full animate-pulse delay-1500"></div>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-black font-black text-xl">C</span>
                </div>
                <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-black text-white group-hover:text-gray-200 transition-colors">COMET</div>
                <div className="text-xs text-gray-400 font-medium tracking-wider">CLIENT</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-xl px-6 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hidden sm:flex items-center space-x-2"
              onClick={() => {
                window.location.href = "/download"
              }}
              >
                <RiImportFill className="w-4 h-4" />
                <span>Download</span>
              </Button>

              <button
                className="lg:hidden p-3 rounded-xl hover:bg-white/10 transition-colors duration-300 border border-white/10"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <RiCloseFill className="w-5 h-5 text-white" /> : <RiMenuSearchFill className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="relative z-10 lg:hidden mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 rounded-xl px-4 py-3 hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <Button className="bg-white text-black hover:bg-gray-100 rounded-xl px-6 py-3 font-bold w-full flex items-center justify-center space-x-2">
                    <RiImportFill className="w-4 h-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
