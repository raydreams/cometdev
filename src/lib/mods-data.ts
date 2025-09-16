/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  RiSparkling2Fill,
  RiSpeedUpFill,
  RiMagicFill,
  RiTerminalBoxFill,
  RiShieldStarFill,
  RiBrushFill,
  RiCpuFill,
  RiTimerFlashFill,
  RiOutletFill,
  RiTShirt2Fill,
  RiHammerFill,
  RiGridFill,
  RiReceiptFill,
} from "react-icons/ri"
import { IconType } from "react-icons"

export type ModLoader = "optifine" | "fabric" | "forge" | "quilt"

export interface ModCard {
  id: string
  name: string
  description: string
  source: "comet" | "modrinth"
  icon: IconType
  supportedLoaders: ModLoader[]
  tags: string[]
}

export interface ModsRow {
  id: string
  direction: "right" | "left"
  mods: ModCard[]
}

export const loaderIcons: Record<ModLoader, { label: string; icon: IconType; color: string }> = {
  optifine: { label: "OptiFine", icon: RiOutletFill, color: "text-[#932D2E]" },
  fabric: { label: "Fabric", icon: RiReceiptFill, color: "text-[#DBD0B4]" },
  forge: { label: "Forge", icon: RiHammerFill, color: "text-[#1D2C41]" },
  quilt: { label: "Quilt", icon: RiGridFill, color: "text-[#DC29DD]" },
}

export const modsTimeline: ModsRow[] = [
  {
    id: "row-1",
    direction: "right",
    mods: [
      {
        id: "sodium",
        name: "Sodium",
        description: "Dramatically improves rendering performance with modern optimizations.",
        source: "modrinth",
        icon: RiSpeedUpFill,
        supportedLoaders: ["fabric", "quilt"],
        tags: ["performance", "rendering"],
      },
      {
        id: "iris",
        name: "Iris",
        description: "High-performance shaders with excellent compatibility.",
        source: "modrinth",
        icon: RiMagicFill,
        supportedLoaders: ["fabric", "quilt"],
        tags: ["graphics", "shaders"],
      },
    ],
  },
  {
    id: "row-2",
    direction: "left",
    mods: [
      {
        id: "comet-optimizer",
        name: "Comet Optimizer",
        description: "Smart defaults and tweaks to maximize FPS and stability.",
        source: "comet",
        icon: RiCpuFill,
        supportedLoaders: ["optifine", "fabric", "forge", "quilt"],
        tags: ["optimizer", "defaults"],
      },
      {
        id: "comet-hud",
        name: "Comet HUD",
        description: "Clean, customizable in-game overlays and widgets.",
        source: "comet",
        icon: RiBrushFill,
        supportedLoaders: ["fabric", "forge", "quilt"],
        tags: ["ui", "overlay"],
      },
    ],
  },
  {
    id: "row-3",
    direction: "right",
    mods: [
      {
        id: "lithium",
        name: "Lithium",
        description: "Optimizes game logic, physics, and AI for smoother gameplay.",
        source: "modrinth",
        icon: RiTimerFlashFill,
        supportedLoaders: ["fabric", "quilt"],
        tags: ["performance", "logic"],
      },
      {
        id: "entity-culling",
        name: "Entity Culling",
        description: "Culls hidden entities to significantly boost FPS.",
        source: "modrinth",
        icon: RiShieldStarFill,
        supportedLoaders: ["fabric", "quilt"],
        tags: ["performance", "culling"],
      },
    ],
  },
]


