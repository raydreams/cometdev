export interface AnnouncementItem {
  announcement: string
  href: boolean
  link?: string
}

const announcements: AnnouncementItem[] = [
  {
    announcement: "Comet 2.0 website is live! Check it out now!",
    href: true,
    link: "https://cometmc.vercel.app",
  },
  {
    announcement: "Looking for beta testers — join our Discord",
    href: true,
    link: "https://discord.gg/7dHRfxqQ",
  },
  {
    announcement: "theo and evelyn were here lols xD omg owo",
    href: false,
  },
]

export function getRandomAnnouncement(): AnnouncementItem {
  const index = Math.floor(Math.random() * announcements.length)
  return announcements[index]
}

export default announcements

