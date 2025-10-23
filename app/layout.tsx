import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Raedan Stephens | CEO, Engineer, Communicator",
  description:
    "Personal portfolio of Raedan Stephens - CEO/CTO of Smartective, LSU Distinguished Communicator, and dual-degree student in Biological Engineering and Computer Science.",
  generator: "v0.app",
  keywords: [
    "Raedan Stephens",
    "Smartective",
    "AI",
    "LSU",
    "Distinguished Communicator",
    "Biological Engineering",
    "Computer Science",
  ],
  authors: [{ name: "Raedan Stephens" }],
  creator: "Raedan Stephens",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${sourceSans.style.fontFamily};
  --font-playfair: ${playfair.variable};
  --font-source-sans: ${sourceSans.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
