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
  RiEye2Fill,
  RiTShirt2Fill,
  RiHammerFill,
  RiLeafFill,
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
  optifine: { label: "OptiFine", icon: RiEye2Fill, color: "text-sky-300" },
  fabric: { label: "Fabric", icon: RiTShirt2Fill, color: "text-yellow-300" },
  forge: { label: "Forge", icon: RiHammerFill, color: "text-orange-300" },
  quilt: { label: "Quilt", icon: RiLeafFill, color: "text-emerald-300" },
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


