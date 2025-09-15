"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, Clock, Wrench } from "lucide-react"

interface DisabledOverlayProps {
  isActive?: boolean
  title?: string
  message?: string
  type?: "maintenance" | "disabled" | "loading"
  estimatedTime?: string
  onClose?: () => void
  allowClose?: boolean
}

export function DisabledOverlay({
  isActive = false,
  title,
  message,
  type = "maintenance",
  estimatedTime,
  onClose,
  allowClose = false,
}: DisabledOverlayProps) {
  const [isVisible, setIsVisible] = useState(isActive)

  useEffect(() => {
    setIsVisible(isActive)
  }, [isActive])

  if (!isVisible) return null

  const getIcon = () => {
    switch (type) {
      case "maintenance":
        return <Wrench className="w-12 h-12 text-red-400" />
      case "loading":
        return <Clock className="w-12 h-12 text-blue-400 animate-spin" />
      case "disabled":
      default:
        return <AlertTriangle className="w-12 h-12 text-red-400" />
    }
  }

  const getDefaultTitle = () => {
    switch (type) {
      case "maintenance":
        return "System Maintenance"
      case "loading":
        return "Loading..."
      case "disabled":
      default:
        return "Service Temporarily Disabled"
    }
  }

  const getDefaultMessage = () => {
    switch (type) {
      case "maintenance":
        return "We're performing scheduled maintenance to improve your experience. Please check back soon."
      case "loading":
        return "Please wait while we process your request..."
      case "disabled":
      default:
        return "This feature is temporarily unavailable. We're working to restore it as quickly as possible."
    }
  }

  const handleClose = () => {
    if (allowClose && onClose) {
      setIsVisible(false)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-md w-full mx-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20">{getIcon()}</div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-4">{title || getDefaultTitle()}</h2>

          {/* Message */}
          <p className="text-gray-300 mb-6 leading-relaxed">{message || getDefaultMessage()}</p>

          {/* Estimated Time */}
          {estimatedTime && (
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Estimated time: {estimatedTime}</span>
              </div>
            </div>
          )}

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span>Status updates available at status.cometclient.com</span>
          </div>

          {/* Close Button (if allowed) */}
          {allowClose && (
            <button
              onClick={handleClose}
              className="w-full px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Continue Anyway
            </button>
          )}

          {/* Loading Animation for loading type */}
          {type === "loading" && (
            <div className="mt-6">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full animate-pulse"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Hook for managing overlay state
export function useDisabledOverlay() {
  const [isActive, setIsActive] = useState(false)
  const [config, setConfig] = useState<Partial<DisabledOverlayProps>>({})

  const showOverlay = (overlayConfig?: Partial<DisabledOverlayProps>) => {
    setConfig(overlayConfig || {})
    setIsActive(true)
  }

  const hideOverlay = () => {
    setIsActive(false)
    setConfig({})
  }

  return {
    isActive,
    config,
    showOverlay,
    hideOverlay,
  }
}
