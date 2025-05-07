import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - ChicChic Artist",
  description: "Manage your appointments and services",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="h-screen overflow-hidden">{children}</div>
}
