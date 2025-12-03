import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { AuthProvider } from "@/components/auth-provider" // Import AuthProvider

export const metadata: Metadata = {
  title: "Next.js Firebase Auth Demo",
  description: "Demonstrating authentication with Firebase.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <AuthProvider>
          {" "}
          {/* Wrap children with AuthProvider */}
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
