/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { DisabledOverlay } from "./disabled-overlay"

interface MaintenanceContextType {
  isMaintenanceMode: boolean
  setMaintenanceMode: (active: boolean, config?: any) => void
  maintenanceConfig: any
}

const MaintenanceContext = createContext<MaintenanceContextType | undefined>(undefined)

export function MaintenanceProvider({ children }: { children: ReactNode }) {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false)
  const [maintenanceConfig, setMaintenanceConfig] = useState({})

  // Check for maintenance mode on mount (could be from API, localStorage, etc.)
  useEffect(() => {
    // Example: Check localStorage or make API call
    const maintenanceStatus = localStorage.getItem("maintenanceMode")
    if (maintenanceStatus === "true") {
      setIsMaintenanceMode(true)
    }
  }, [])

  const setMaintenanceMode = (active: boolean, config = {}) => {
    setIsMaintenanceMode(active)
    setMaintenanceConfig(config)
    localStorage.setItem("maintenanceMode", active.toString())
  }

  return (
    <MaintenanceContext.Provider value={{ isMaintenanceMode, setMaintenanceMode, maintenanceConfig }}>
      {children}
      <DisabledOverlay isActive={isMaintenanceMode} type="maintenance" {...maintenanceConfig} />
    </MaintenanceContext.Provider>
  )
}

export function useMaintenance() {
  const context = useContext(MaintenanceContext)
  if (context === undefined) {
    throw new Error("useMaintenance must be used within a MaintenanceProvider")
  }
  return context
}
