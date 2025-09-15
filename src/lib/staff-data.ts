/* eslint-disable @typescript-eslint/no-unused-vars */
import { Users, Bug, Star, LucideIcon } from "lucide-react"
import { IconType } from "react-icons"
import { RiVipCrown2Fill, RiGamepadFill, RiRobot3Fill, RiPencilRuler2Fill, RiFolder4Fill, RiScan2Fill, RiShakeHandsFill, RiArtboardFill, RiBardFill, RiGlobeFill } from "react-icons/ri"

export interface StaffMember {
  name: string
  role: string
  minecraftSkin: string
  badge: string
  badgeColor: string
  icon: LucideIcon | IconType
}

export interface StaffSection {
  title: string
  description: string
  members: StaffMember[]
}

export const staffData: StaffSection[] = [
  {
    title: "Leadership",
    description: "The visionaries behind Comet Client",
    members: [
      {
        name: "Benji",
        role: "Founder & CEO",
        minecraftSkin: "PrinceOfTheLand",
        badge: "Leadership",
        badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        icon: RiVipCrown2Fill,
      },
      {
        name: "Ray",
        role: "Co-Founder & CTO",
        minecraftSkin: "livewray",
        badge: "Leadership",
        badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        icon: RiVipCrown2Fill,
      },
    ],
  },
  {
    title: "Development",
    description: "The technical minds building the future of Minecraft clients",
    members: [
      {
        name: "Evelyn",
        role: "Launcher & Socket Developer",
        minecraftSkin: "softfurrypaws",
        badge: "Launcher Developer",
        badgeColor: "bg-[#fecdd3]/20 text-[#fdf2f8] border-[#fbcfe8]/30",
        icon: RiGamepadFill,
      },
      {
        name: "Syxles",
        role: "Web Developer",
        minecraftSkin: "Syxles",
        badge: "Developer",
        badgeColor: "bg-[#e2e8f0]/20 text-[#e2e8f0] border-[#e2e8f0]/30",
        icon: RiGlobeFill,
      },
      {
        name: "Asicalug",
        role: "Bot Development",
        minecraftSkin: "Asicalug",
        badge: "Bot Development",
        badgeColor: "bg-[#fed7aa]/20 text-[#fffbeb] border-[#fdba74]/30",
        icon: RiRobot3Fill,
      },
      {
        name: "Jonnite",
        role: "Lead Client & Mod Developer",
        minecraftSkin: "Jonnite",
        badge: "Lead Client Developer",
        badgeColor: "bg-[#99f6e4]/20 text-[#e0f2fe] border-[#bfdbfe]/30",
        icon: RiFolder4Fill,
      },
      {
        name: "Skull Emoji",
        role: "Sometimes a Developer ??",
        minecraftSkin: "TBHGodPro",
        badge: "Sometimes a Developer",
        badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
        icon: RiScan2Fill,
      },
      {
        name: "Qualk",
        role: "Web Developer",
        minecraftSkin: "Qualk",
        badge: "Web Co-Developer",
        badgeColor: "bg-[#f87171]/20 text-[#fee2e2] border-[#dc2626]/30",
        icon: RiShakeHandsFill,
      }
    ],
  },
  {
    title: "Design & User Experience",
    description: "Creating beautiful, intuitive experiences",
    members: [
      {
        name: "Ray",
        role: "Head of Design & UI/UX Designer",
        minecraftSkin: "livewray",
        badge: "Design",
        badgeColor: "bg-[#86efac]/20 text-[#d1fae5] border-[#2dd4bf]/30",
        icon: RiArtboardFill,
      },
      {
        name: "Benji",
        role: "Head of UI/UX",
        minecraftSkin: "PrinceOfTheLand",
        badge: "Design",
        badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
        icon: RiBardFill,
      },
    ],
  },
  {
    title: "Community & Quality",
    description: "Ensuring excellence and fostering our community",
    members: [
      {
        name: "Coming Soon",
        role: "Work In Progress",
        minecraftSkin: "Herobrine",
        badge: "Quality",
        badgeColor: "bg-[#93c5fd]/20 text-[#dbeafe] border-[#38bdf8]/30",
        icon: RiPencilRuler2Fill,
      },
      {
        name: "Coming Soon",
        role: "Work In Progress",
        minecraftSkin: "Herobrine",
        badge: "Quality",
        badgeColor: "bg-[#93c5fd]/20 text-[#dbeafe] border-[#38bdf8]/30",
        icon: RiPencilRuler2Fill,
      },
      {
        name: "Coming Soon",
        role: "Work In Progress",
        minecraftSkin: "Herobrine",
        badge: "Quality",
        badgeColor: "bg-[#93c5fd]/20 text-[#dbeafe] border-[#38bdf8]/30",
        icon: RiPencilRuler2Fill,
      },
      {
        name: "Coming Soon",
        role: "Work In Progress",
        minecraftSkin: "Herobrine",
        badge: "Quality",
        badgeColor: "bg-[#93c5fd]/20 text-[#dbeafe] border-[#38bdf8]/30",
        icon: RiPencilRuler2Fill,
      },
    ],
  },
]
