import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MaintenanceProvider } from "@/components/maintenance-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Comet Client",
    default: "Comet Client - The Future of Minecraft Clients",
  },
  description:
    "Experience Minecraft like never before with Comet Client. Minimal design, maximum performance, and zero distractions.",
  metadataBase: new URL("https://cometclient.com"),
  openGraph: {
    type: "website",
    siteName: "Comet Client",
    title: "Comet Client - The Future of Minecraft Clients",
    description:
      "Experience Minecraft like never before with Comet Client. Minimal design, maximum performance, and zero distractions.",
    images: [
      {
        url: "/welcometosite.png",
        width: 1200,
        height: 630,
        alt: "Comet Client",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comet Client - The Future of Minecraft Clients",
    description:
      "Experience Minecraft like never before with Comet Client. Minimal design, maximum performance, and zero distractions.",
    images: ["/welcometosite.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MaintenanceProvider>
            {children}
            <ScrollToTop />
            <Toaster />
          </MaintenanceProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
