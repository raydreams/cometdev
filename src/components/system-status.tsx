"use client"

import { useState } from "react"

interface ServiceStatus {
  name: string
  status: "operational" | "degraded" | "outage"
  uptime: string
  responseTime: string
  description: string
}

export function SystemStatus() {
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: "Client Downloads",
      status: "operational",
      uptime: "99.98%",
      responseTime: "145ms",
      description: "Client download servers and CDN",
    },
    {
      name: "Authentication",
      status: "operational",
      uptime: "99.99%",
      responseTime: "89ms",
      description: "User authentication and account services",
    },
    {
      name: "Mod Repository",
      status: "operational",
      uptime: "99.95%",
      responseTime: "203ms",
      description: "Mod downloads and compatibility checking",
    },
    {
      name: "Social Features",
      status: "operational",
      uptime: "99.97%",
      responseTime: "156ms",
      description: "Friends, chat, and world hosting",
    },
    {
      name: "Update Servers",
      status: "operational",
      uptime: "99.99%",
      responseTime: "98ms",
      description: "Client updates and version management",
    },
    {
      name: "Website & API",
      status: "operational",
      uptime: "99.96%",
      responseTime: "124ms",
      description: "Main website and public API endpoints",
    },
  ])

  const [incidents] = useState([
    {
      id: 1,
      title: "Scheduled Maintenance - Mod Repository",
      status: "resolved",
      date: "2024-01-15",
      time: "02:00 UTC",
      description: "Routine maintenance to improve mod download speeds. All services restored.",
    },
    {
      id: 2,
      title: "Brief Authentication Slowdown",
      status: "resolved",
      date: "2024-01-12",
      time: "14:30 UTC",
      description: "Temporary increase in login response times due to high traffic. Resolved automatically.",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      case "degraded":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
      case "outage":
        return "text-red-400 bg-red-400/10 border-red-400/20"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return "✓"
      case "degraded":
        return "⚠"
      case "outage":
        return "✗"
      default:
        return "?"
    }
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Overall Status */}
        <div className="mb-12">
          <div className="p-8 rounded-3xl bg-green-500/5 border border-green-500/20 text-center">
            <div className="w-16 h-16 bg-green-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-green-400 text-2xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">All Systems Operational</h2>
            <p className="text-gray-300">All services are running normally with no known issues.</p>
          </div>
        </div>

        {/* Service Status */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Service Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">{service.name}</h4>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(service.status)}`}
                  >
                    <span className="mr-2">{getStatusIcon(service.status)}</span>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Uptime (30d)</div>
                    <div className="font-semibold text-white">{service.uptime}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Response Time</div>
                    <div className="font-semibold text-white">{service.responseTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Global Uptime", value: "99.97%", change: "+0.02%" },
              { label: "Avg Response Time", value: "134ms", change: "-12ms" },
              { label: "Active Users", value: "847K", change: "+5.2%" },
              { label: "Data Transferred", value: "2.4TB", change: "+18%" },
            ].map((metric, index) => (
              <div key={index} className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
                <div className="text-green-400 text-xs">{metric.change}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Recent Incidents</h3>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold">{incident.title}</h4>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-400/10 text-green-400 border border-green-400/20">
                    Resolved
                  </div>
                </div>
                <div className="text-gray-400 text-sm mb-2">
                  {incident.date} at {incident.time}
                </div>
                <p className="text-gray-300">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Stay Informed</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to status updates and get notified about incidents and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-full hover:from-gray-100 hover:to-gray-300 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
