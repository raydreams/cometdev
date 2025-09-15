"use client"

import { useRef, useState, useEffect } from "react"
import { RiQuestionAnswerFill, RiArrowDownSLine } from "react-icons/ri"
import { RiDownload2Fill, RiPuzzleFill, RiFolder2Fill, RiUbuntuFill } from "react-icons/ri"

interface FaqItemConfig {
  icon: React.ComponentType<{ className?: string }>
  q: string
  a: string
}

const defaultItems: FaqItemConfig[] = [
  {
    icon: RiDownload2Fill,
    q: "Is Comet Client free?",
    a: "Yes. Comet Client is free to download and use — no subscriptions or paywalls.",
  },
  {
    icon: RiPuzzleFill,
    q: "Can I use my existing mods?",
    a: "Absolutely. We support OptiFine, Fabric, Forge, and Quilt. Drag and drop mods in the launcher or place them in your instance's mods folder.",
  },
  {
    icon: RiFolder2Fill,
    q: "How do I upload mods?",
    a: "Two ways: via the Mods tab in the launcher (drag & drop) or by copying .jar files into the mods folder. Both Comet mods and Modrinth mods are supported.",
  },
  {
    icon: RiUbuntuFill,
    q: "What are the system requirements?",
    a: "Windows 10+, macOS 10.15+, or a recent Linux distro; Java 17+; and at least 4GB RAM recommended for smooth gameplay.",
  },
]

function AnimatedPanel({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const content = el.firstElementChild as HTMLElement | null
    if (!content) return
    const next = isOpen ? content.scrollHeight : 0
    setHeight(next)
  }, [isOpen, children])

  return (
    <div
      ref={ref}
      style={{ height }}
      className="grid transition-[height] duration-300 ease-out"
    >
      <div>{children}</div>
    </div>
  )
}

export function FAQ({ items = defaultItems }: { items?: FaqItemConfig[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
      <div className="mb-6 flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/10">
          <RiQuestionAnswerFill className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-4xl mx-auto divide-y divide-white/10">
        {items.map((item, i) => {
          const Icon = item.icon
          const isOpen = openIndex === i
          return (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left flex items-start gap-3 group"
                aria-expanded={isOpen}
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/10">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{item.q}</h3>
                    <RiArrowDownSLine
                      className={`ml-4 h-5 w-5 text-white/80 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>
              </button>
              <AnimatedPanel isOpen={isOpen}>
                <div className="pl-11 pr-2 pt-3 text-gray-300">{item.a}</div>
              </AnimatedPanel>
            </div>
          )
        })}
      </div>
    </div>
  )
}


