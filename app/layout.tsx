import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galatea AI - Where AI Becomes Your Perfect Companion",
  description: "Galatea AI brings your ideal companion to life, just like the mythical sculpture that became real.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
