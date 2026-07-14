import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Awin Jomon — Video Editor, Filmmaker & Cloud Computing Student",
  description:
    "Portfolio of Awin Jomon, a BCA Cloud Computing student at Kristu Jayanti University, Bangalore. Video editor, filmmaker, and content creator blending technology with cinematic storytelling.",
  keywords: [
    "Awin Jomon",
    "Video Editor",
    "Filmmaker",
    "Cloud Computing",
    "Final Cut Pro",
    "Cinematography",
    "Portfolio",
    "Kristu Jayanti University",
  ],
  authors: [{ name: "Awin Jomon" }],
  openGraph: {
    title: "Awin Jomon — Video Editor & Filmmaker",
    description:
      "Cinematic storytelling meets cloud technology. Explore the portfolio of Awin Jomon.",
    type: "website",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
