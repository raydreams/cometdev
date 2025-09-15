"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useMemo, useState } from "react"
import { RiWindowsFill, RiAppleFill, RiUbuntuFill, RiFolder2Fill, RiPuzzleFill, RiDownload2Fill, RiCloseLine, RiEmotionUnhappyFill, RiStarSmileFill } from "react-icons/ri"
import { loaderIcons } from "@/lib/mods-data"
// import { FAQ } from "@/components/faq"

export function DownloadSection() {
  const downloads = [
    {
      platform: "Windows",
      Icon: RiWindowsFill,
      version: "2.0.1",
      size: "45.2 MB",
      requirements: ["Windows 10 or later", "Java 17+", "4GB RAM minimum"],
      downloadUrl: "#",
    },
    {
      platform: "macOS",
      Icon: RiAppleFill,
      version: "2.0.1",
      size: "48.1 MB",
      requirements: ["macOS 10.15 or later", "Java 17+", "4GB RAM minimum"],
      downloadUrl: "#",
    },
    {
      platform: "Linux",
      Icon: RiUbuntuFill,
      version: "2.0.1",
      size: "44.8 MB",
      requirements: ["Ubuntu 18.04+ or equivalent", "Java 17+", "4GB RAM minimum"],
      downloadUrl: "#",
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)

  const detectedPlatform = useMemo(() => {
    if (typeof navigator === "undefined") return null
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes("windows")) return "Windows"
    if (ua.includes("mac") || ua.includes("darwin")) return "macOS"
    if (ua.includes("linux")) return "Linux"
    return null
  }, [])

  const handleDownloadClick = (platform: string) => {
    setSelectedPlatform(platform)
    setIsModalOpen(true)
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Platform Downloads with connector lines */}
        <div className="relative mb-20">
          {/* trunk line from header */}
          <div className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 h-[calc(100%+520px)] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
          {/* branch line above cards spanning full width */}
          <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          {/* three drops to each column */}
          <div className="pointer-events-none absolute -top-2 left-[16.666%] h-5 w-px bg-white/10 hidden md:block"></div>
          <div className="pointer-events-none absolute -top-2 left-1/2 h-5 w-px bg-white/10 hidden md:block"></div>
          <div className="pointer-events-none absolute -top-2 right-[16.666%] h-5 w-px bg-white/10 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloads.map((download, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl border transition-all duration-300 text-center relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10 ${
                  detectedPlatform === download.platform
                    ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] border-white/30 ring-1 ring-white/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/10">
                  <download.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{download.platform}</h3>
                <div className="text-gray-400 mb-6">
                  <div>Version {download.version}</div>
                  <div>{download.size}</div>
                </div>

                {detectedPlatform === download.platform && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/90">
                    <RiStarSmileFill className="w-4 h-4 text-white" />
                    Recommended for your device
                  </div>
                )}

                <Button onClick={() => handleDownloadClick(download.platform)} className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-semibold mb-6 w-full inline-flex items-center justify-center gap-2">
                  <RiDownload2Fill className="w-4 h-4" />
                  Download for {download.platform}
                </Button>

                <div className="text-left">
                  <h4 className="font-semibold mb-3 text-white">Requirements:</h4>
                  <ul className="space-y-2">
                    {download.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mod Loader Support */}
        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 mb-16">
          {/* continuation of trunk through this section */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-[calc(100%+40px)] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Mod Loader Support</h2>
          <p className="text-center text-gray-300 mb-8">Fully supports OptiFine, Fabric, Forge, and Quilt</p>
          <div className="flex flex-wrap justify-center gap-4">
            {(["optifine", "fabric", "forge", "quilt"] as const).map((loader) => {
              const meta = loaderIcons[loader]
              const Icon = meta.icon
              return (
                <span key={loader} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Icon className={`w-5 h-5 ${meta.color}`} />
                  <span className="text-white/90 text-sm">{meta.label}</span>
                </span>
              )
            })}
          </div>
        </div>

        {/* Installation & Upload Guide */}
        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 mb-16">
          {/* continuation of trunk through this section */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-[calc(100%+40px)] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Install & Manage Mods</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Download</h3>
              <p className="text-gray-400">Download the installer for your operating system from above.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Install</h3>
              <p className="text-gray-400">
                Run the installer and follow the setup wizard. Java 17+ will be installed automatically if needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Play</h3>
              <p className="text-gray-400">
                Launch Comet Client, log in with your Minecraft account, and start playing!
              </p>
            </div>
          </div>

          {/* Upload methods */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <RiPuzzleFill className="w-5 h-5 text-white" />
                <h4 className="font-semibold text-white">Upload via Mods Tab</h4>
              </div>
              <p className="text-gray-400 text-sm">Drag and drop mods directly in the launcher’s Mods tab. We support both Comet mods and Modrinth downloads.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <RiFolder2Fill className="w-5 h-5 text-white" />
                <h4 className="font-semibold text-white">Upload via Mods Folder</h4>
              </div>
              <p className="text-gray-400 text-sm">Place .jar files into your instance’s mods folder. Changes are detected automatically on launch.</p>
            </div>
          </div>
        </div>

        {/* Error Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop (screen) */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            {/* Dialog with image background */}
            <div className="relative w-full max-w-lg rounded-2xl border border-white/15 p-6 pt-16 shadow-2xl overflow-visible">
              {/* Modal background image */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[url('/modalblur.png')] bg-cover bg-center opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
              </div>
              {/* Top decorative image aligned to modal top */}
              <div className="absolute -top-36 left-1/2 -translate-x-1/2 z-10">
                <Image src="/notfound.png" alt="Decorative" width={320} height={180} className="pointer-events-none select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]" />
              </div>
              <button
                aria-label="Close"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-3 top-3 rounded-full p-1 hover:bg-white/10"
              >
                <RiCloseLine className="h-5 w-5 text-white/80" />
              </button>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/10">
                <RiEmotionUnhappyFill className="h-6 w-6 text-white" />
              </div>
              <p className="text-gray-300 text-center font-bold">
                We&apos;re finishing up the release process.
              </p>
              <p className="text-gray-300 text-center mb-4">Please check back soon.</p>
              {selectedPlatform && (
                <p className="text-xs text-center text-white/70 mb-4">Requested: {selectedPlatform}</p>
              )}
              <div className="flex justify-center">
                <Button onClick={() => setIsModalOpen(false)} className="rounded-full px-6">
                  Okay
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
