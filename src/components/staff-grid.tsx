"use client"

import { Users, ExternalLink, Mail } from "lucide-react"
import { staffData, StaffMember } from "@/lib/staff-data"
import { useState, useEffect } from "react"

// UUID fetching function (same as blog components)
async function getUuidFromUsername(username: string): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000)

    const response = await fetch(`http://thriving-semolina-cfa630.netlify.app/?destination=https://api.mojang.com/users/profiles/minecraft/${username}`, {
      signal: controller.signal,
    })
    clearTimeout(timeoutId)

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.id
  } catch {
    return null
  }
}

// Enhanced staff member card component
function StaffMemberCard({ member }: { member: StaffMember }) {
  const [skinUrl, setSkinUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadSkin = async () => {
      try {
        const uuid = await getUuidFromUsername(member.minecraftSkin)
        if (uuid) {
          setSkinUrl(`https://api.mineatar.io/body/front/${uuid}`)
        } else {
          setError(true)
        }
      } catch {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadSkin()
  }, [member.minecraftSkin])

  return (
    <div className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
      {/* Minecraft Skin */}
      <div className="relative mb-6 flex justify-center">
        {isLoading ? (
          <div className="w-20 h-32 bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        ) : error || !skinUrl ? (
          <div className="w-20 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={skinUrl}
            alt={member.name}
            className="w-20 h-32 rounded-lg shadow-xl group-hover:scale-110 transition-transform duration-300 object-cover object-top"
            style={{
              filter: "drop-shadow(0 0 0 3px rgba(0, 0, 0, 0.8))",
            }}
            onError={() => setError(true)}
          />
        )}
      </div>

      {/* Enhanced Badge */}
      <div className="relative mb-4">
        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${member.badgeColor} group-hover:scale-105`}>
          <member.icon className="w-4 h-4" />
          <span>{member.badge}</span>
        </div>
        
        {/* Enhanced Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-black/95 backdrop-blur-sm text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 border border-white/20">
          {member.role}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {member.role}
      </p>
    </div>
  )
}

export function StaffGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {staffData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-24 last:mb-0">
            {/* Enhanced Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
                {section.members[0]?.icon && (() => {
                  const IconComponent = section.members[0].icon;
                  return <IconComponent className="w-4 h-4 text-white" />;
                })()}
                <span className="text-sm text-white font-medium">{section.title}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{section.title}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{section.description}</p>
            </div>

            {/* Enhanced Section Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.members.map((member, memberIndex) => {
                const totalMembers = section.members.length
                const hasTwoInLastRowAtXl = totalMembers % 4 === 2
                const firstIndexOfLastRowAtXl = Math.floor((totalMembers - 1) / 4) * 4
                const shouldCenterAtXl = hasTwoInLastRowAtXl && memberIndex === firstIndexOfLastRowAtXl

                return (
                  <div key={memberIndex} className={shouldCenterAtXl ? "xl:col-start-2" : ""}>
                    <StaffMemberCard member={member} />
                  </div>
                )
              })}
            </div>

            {/* Enhanced Section Divider */}
            {sectionIndex < staffData.length - 1 && (
              <div className="mt-20 flex items-center justify-center">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="mx-6 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            )}
          </div>
        ))}

        {/* Enhanced Join the team CTA */}
        <div className="mt-24 text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm max-w-4xl mx-auto overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-16 h-16 border border-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white rounded-full animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Want to Join Our Team?</h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                We&apos;re always looking for talented individuals who share our passion for performance, clean design, and creating amazing experiences for the Minecraft community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  <span>View Open Positions</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 border border-white/20 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <span>Get in Touch</span>
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
