"use client"
import { Button } from "@/components/ui/button"
import { DisabledOverlay, useDisabledOverlay } from "./disabled-overlay"
import { useMaintenance } from "./maintenance-provider"

export function OverlayDemo() {
  const { showOverlay, hideOverlay, isActive, config } = useDisabledOverlay()
  const { setMaintenanceMode } = useMaintenance()

  const triggerMaintenance = () => {
    setMaintenanceMode(true, {
      title: "Scheduled Maintenance",
      message: "We're updating our servers to provide you with better performance and new features.",
      estimatedTime: "2 hours",
      allowClose: true,
    })
  }

  const triggerDisabled = () => {
    showOverlay({
      type: "disabled",
      title: "Feature Temporarily Disabled",
      message: "This feature is currently undergoing improvements and will be back soon.",
      allowClose: true,
      onClose: hideOverlay,
    })
  }

  const triggerLoading = () => {
    showOverlay({
      type: "loading",
      title: "Processing Request",
      message: "Please wait while we process your request. This may take a few moments.",
      allowClose: false,
    })

    // Auto-hide after 3 seconds for demo
    setTimeout(() => {
      hideOverlay()
    }, 3000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 space-y-2">
        <div className="text-xs text-gray-400 mb-2">Overlay Demo</div>
        <Button
          onClick={triggerMaintenance}
          size="sm"
          className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
        >
          Maintenance
        </Button>
        <Button
          onClick={triggerDisabled}
          size="sm"
          className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/30"
        >
          Disabled
        </Button>
        <Button
          onClick={triggerLoading}
          size="sm"
          className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30"
        >
          Loading
        </Button>
      </div>

      <DisabledOverlay isActive={isActive} {...config} />
    </div>
  )
}
