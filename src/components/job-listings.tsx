"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { JobApplication } from "@/components/job-application"
import { RiBriefcase4Fill } from "react-icons/ri"
import { motion } from "framer-motion"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead the development of our client interface and web platform using React, TypeScript, and modern web technologies.",
    requirements: [
      "5+ years of React/TypeScript experience",
      "Experience with Electron or similar desktop frameworks",
      "Strong understanding of performance optimization",
      "Experience with gaming or client applications preferred",
    ],
  },
  {
    id: "2",
    title: "Minecraft Mod Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Develop and maintain mod integrations for Fabric, Quilt, and NeoForge. Work on performance optimizations and new features.",
    requirements: [
      "Expert knowledge of Minecraft modding",
      "Experience with Fabric, Quilt, or Forge",
      "Java programming expertise",
      "Understanding of game performance optimization",
    ],
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design beautiful, minimal interfaces that enhance the gaming experience without adding clutter.",
    requirements: [
      "Strong portfolio of minimal, clean designs",
      "Experience with gaming interfaces",
      "Proficiency in Figma and design systems",
      "Understanding of accessibility principles",
    ],
  },
  {
    id: "4",
    title: "Community Manager",
    department: "Community",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and nurture our community across Discord, social media, and forums. Gather feedback and coordinate with development.",
    requirements: [
      "Experience managing gaming communities",
      "Strong communication skills",
      "Knowledge of Minecraft community",
      "Experience with Discord and social media management",
    ],
  },
]

export function JobListings({ disabled = false }: { disabled?: boolean }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApplication, setShowApplication] = useState(false)

  const handleApply = (job: Job) => {
    setSelectedJob(job)
    setShowApplication(true)
  }

  if (!disabled && showApplication && selectedJob) {
    return <JobApplication job={selectedJob} onBack={() => setShowApplication(false)} />
  }

  if (disabled) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative group"
            initial={{ y: 0, scale: 1 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 280, damping: 20, mass: 0.5 }}
          >
            {/* Gradient glow border */}
            <motion.div
              className="absolute -inset-px rounded-[28px] bg-gradient-to-r from-red-500/50 via-red-400/20 to-transparent blur-md"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            ></motion.div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-10 text-center">
              {/* Soft animated accents */}
              <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-red-400/10 blur-3xl"></div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent"></div>

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/30 to-red-400/20 ring-1 ring-inset ring-white/10 shadow-[0_0_40px_rgba(239,68,68,0.25)]">
                <RiBriefcase4Fill className="h-10 w-10 text-red-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Careers</h3>
              <p className="text-gray-300 mb-6">Job listings are coming soon.</p>

              {/* subtle bottom gradient border */}
              <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 bg-white/10 rounded-full">{job.department}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full">{job.location}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full">{job.type}</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleApply(job)}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-6 mt-4 md:mt-0"
                >
                  Apply Now
                </Button>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="text-gray-300 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
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
    </section>
  )
}
