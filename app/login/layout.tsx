import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login - ChicChic Artist",
  description: "Login to your ChicChic Artist account",
}

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen">{children}</div>
}
