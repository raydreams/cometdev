"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitJobApplication } from "@/app/actions/submit-application"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

interface JobApplicationProps {
  job: Job
  onBack: () => void
}

export function JobApplication({ job, onBack }: JobApplicationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitJobApplication(formData)
      if (result.success) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting application:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-black text-2xl">✓</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
          <p className="text-gray-300 mb-8">
            Thank you for your interest in joining the Comet team. We&apos;ll review your application and get back to you
            within 5-7 business days.
          </p>
          <Button onClick={onBack} className="bg-white text-black hover:bg-gray-200 rounded-full px-8">
            Back to Jobs
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/5 rounded-full mb-8 bg-transparent"
        >
          ← Back to Jobs
        </Button>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
          <div className="flex gap-3 text-sm mb-4">
            <span className="px-3 py-1 bg-white/10 rounded-full">{job.department}</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">{job.location}</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">{job.type}</span>
          </div>
          <p className="text-gray-300">{job.description}</p>
        </div>

        <form action={handleSubmit} className="space-y-6">
          <input type="hidden" name="jobId" value={job.id} />
          <input type="hidden" name="jobTitle" value={job.title} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                required
                className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                required
                className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
              Portfolio/GitHub URL
            </label>
            <Input
              id="portfolio"
              name="portfolio"
              type="url"
              className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
              placeholder="https://github.com/username"
            />
          </div>

          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
              Cover Letter *
            </label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              required
              rows={6}
              className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400 resize-none"
              placeholder="Tell us why you're interested in this position and what makes you a great fit for the Comet team..."
            />
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium mb-2">
              Resume/CV *
            </label>
            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="w-full p-3 bg-white/5 border border-white/20 rounded-2xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:bg-gray-200 rounded-full py-3 text-lg font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </section>
  )
}
