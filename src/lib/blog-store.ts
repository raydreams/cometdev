export interface BlogPost {
  id: string
  title: string
  author: string
  minecraftSkin: string
  headerImage: string
  content: string
  createdAt: Date
  updatedAt: Date
}

// Simple in-memory store (in production, use a database)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Comet's Current Phase!",
    author: "livewray",
    minecraftSkin: "livewray",
    headerImage: "/news/news3.png",
    content: `:emojicomet: Comet Updates & News:

We’re excited to share the latest phase of Comet! With a redesigned website, faster performance, and a stronger focus on our community, things are moving quickly.

### Website Revamp

Our website has been completely refreshed:
 * Minimal, modern design
 * Smoother navigation
 * Faster load times across all devices
 
### Blog & News

 The new **blog** is live! Here, we share updates, news, and insights from the Comet community. It’s the best way to stay connected and informed.

### Launcher Development

The **Comet Launcher** is in active development:
 * Demo images and videos coming soon
 * Currently in a barebones state, but evolving quickly

### New Bot Experience

 Our Discord bot has been rebuilt with **Discord Components v2**, making it faster, more reliable, and more interactive.

### What’s Next?

 Stay tuned for early previews of the launcher, more website updates, and exciting new features before the beta release. Thank you for being part of the Comet Client community!`,
    createdAt: new Date("2025-09-16T12:00:00"),
    updatedAt: new Date("2025-09-16T12:00:00"),
  },
  {
    id: "2",
    title: "Welcome to our blog!",
    author: "PrinceofTheLand",
    minecraftSkin: "PrinceofTheLand",
    headerImage: "/news/news1.png",
    content: `We're excited to announce the release of our blog, featuring unprecedented performance improvements and a completely redesigned interface.

## What's New

- **Site refreshed** - We've refreshed the site to make it more user-friendly and informative.
- **Blog added** - We've added a blog to the site to share updates and news with our community.
- **Stability improvements** - We've made the site more stable and reliable for all devices.

## Performance Improvements

Our new site is loaded with information about the client, and features, and is a great way to stay informed about the latest updates and news.
It also has a blog, where you can find the latest updates and news about the client and the community. We hope you enjoy it!

Thank you for being part of the Comet Client community!`,
    createdAt: new Date("2025-09-10T12:00:00"),
    updatedAt: new Date("2025-09-10T12:00:00"),
  },
  {
    id: "3",
    title: "Comet Client Development",
    author: "livewray",
    minecraftSkin: "livewray",
    headerImage: "/news/news2.png",
    content: `:emojicomet: Comet's Current Standing:

> Hello everyone, so I've decided to fully be transparent in this message and address Comet's current standing as of **July 24th, 2025.** This is something new I'm trying out, to honour full transparency to all our users, and so everyone is on the same page.

> Since the beginning of Phase 2 (**officially marked**) on July 17th, 2025, very minimal work has been done to Comet, and before you get angry & leave, let me explain why. I do understand it's summer break, I do understand we've delayed Comet by months but we'd rather spend time and give you something me and the rest of the team would enjoy using rather than pure things just mashed together like most clients have done, and it's not gone well at all. So, even though it is summer break for most of us, people are still travelling, have schedules, take breaks from their social presence, and many more reasons. I for 1 can speak heavily on this as if you see the screenshot attached how busy I have been this past week already barely having time to myself.

> This leads me to my 2nd point, Comet is **not dead** and never will be. Although theres been less and less work, that happens with everything and Comet is not an exception here. We've lasted longer than most small clients do, by pushing thru. That being said, brand new designs are being made, new ideas are being discovered and tons are still left. If you have **any** suggestions, things, even if it's the tiniest thing or the most stupidest thing, please suggest it to us on our discord server and we'll be happy to help you and everyone else out, which shows we truly pay attention to feedback and apply it well to our brand.

> So, I will not **tldr this, but theres alot to come.** Thank you for your support and understanding. We'll be back soon!

Signed,
**ray**`,
    createdAt: new Date("2025-09-10T12:00:00"),
    updatedAt: new Date("2025-09-10T12:00:00"),
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function createBlogPost(post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): BlogPost {
  // Create date at noon to avoid timezone issues
  const now = new Date()
  const noonDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0)

  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
    createdAt: noonDate,
    updatedAt: noonDate,
  }
  blogPosts.unshift(newPost)
  return newPost
}

export function updateBlogPost(id: string, updates: Partial<BlogPost>): BlogPost | null {
  const index = blogPosts.findIndex((post) => post.id === id)
  if (index === -1) return null

  // Create date at noon to avoid timezone issues
  const now = new Date()
  const noonDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0)

  blogPosts[index] = {
    ...blogPosts[index],
    ...updates,
    updatedAt: noonDate,
  }
  return blogPosts[index]
}

export function deleteBlogPost(id: string): boolean {
  const index = blogPosts.findIndex((post) => post.id === id)
  if (index === -1) return false

  blogPosts.splice(index, 1)
  return true
}
