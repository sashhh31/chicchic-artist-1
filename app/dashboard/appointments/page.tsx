"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Bell, ChevronDown } from "lucide-react"
import DashboardSidebar from "@/components/dashboard/sidebar"
import AppointmentDetails from "@/components/dashboard/appointment-details"

type Appointment = {
  id: string
  client: {
    name: string
    avatar: string
    id: string
  }
  service: string
  status: "booked" | "cancelled" | "completed"
  cost: string
  date: string
  time: string
}

export default function AppointmentsPage() {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const appointments: Appointment[] = [
    {
      id: "1",
      client: {
        name: "Jerry Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        id: "jerry123",
      },
      service: "Daily Parlor",
      status: "booked",
      cost: "£ 23.54",
      date: "10:45 AM, 9th November",
      time: "10:45 AM",
    },
    {
      id: "2",
      client: {
        name: "Jerry Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        id: "jerry123",
      },
      service: "Lash/May",
      status: "cancelled",
      cost: "£ 29.54",
      date: "10:45 AM, 9th November",
      time: "10:45 AM",
    },
    {
      id: "3",
      client: {
        name: "Erika Mathew",
        avatar: "/placeholder.svg?height=40&width=40",
        id: "erika456",
      },
      service: "Daily Parlor",
      status: "completed",
      cost: "£ 21.04",
      date: "10:45 AM, 9th November",
      time: "10:45 AM",
    },
    {
      id: "4",
      client: {
        name: "Samuel Tait",
        avatar: "/placeholder.svg?height=40&width=40",
        id: "samuel789",
      },
      service: "Daily Parlor",
      status: "booked",
      cost: "£ 43.54",
      date: "10:45 AM, 9th November",
      time: "10:45 AM",
    },
    {
      id: "5",
      client: {
        name: "Jerry Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        id: "jerry123",
      },
      service: "Daily Parlor",
      status: "booked",
      cost: "£ 64.54",
      date: "10:45 AM, 9th November",
      time: "10:45 AM",
    },
    {
      id: "6",
      client: {
        name: "Jerry Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        id: "jerry123",
      },
      service: "Daily Parlor",
      status: "booked",
      cost: "£ 43.54",
      date: "10:45 AM, 9th November",
      time: "10:45 AM",
    },
  ]

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setShowDetails(true)
  }

  const handleCloseDetails = () => {
    setShowDetails(false)
  }

  return (
    <div className="flex h-screen bg-[#111827] text-white">
      <DashboardSidebar />

      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
                All Appointments <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Filter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="bg-gray-800 border-gray-700 mb-6">
              <TabsTrigger value="all" className="data-[state=active]:bg-gray-700">
                All
              </TabsTrigger>
              <TabsTrigger value="booked" className="data-[state=active]:bg-gray-700">
                Booked
              </TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-gray-700">
                Completed
              </TabsTrigger>
              <TabsTrigger value="cancelled" className="data-[state=active]:bg-gray-700">
                Cancelled
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 p-4 border-b border-gray-700 text-gray-400 text-sm">
                  <div>Client</div>
                  <div>Service</div>
                  <div>Status</div>
                  <div>Cost</div>
                  <div>Date / Time</div>
                </div>
                <div className="divide-y divide-gray-700">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="grid grid-cols-5 p-4 hover:bg-gray-700 cursor-pointer transition-colors"
                      onClick={() => handleAppointmentClick(appointment)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-600">
                          <Image
                            src={appointment.client.avatar || "/placeholder.svg"}
                            alt={appointment.client.name}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{appointment.client.name}</div>
                          <div className="text-xs text-gray-400">#{appointment.client.id}</div>
                        </div>
                      </div>
                      <div className="flex items-center">{appointment.service}</div>
                      <div className="flex items-center">
                        <Badge
                          className={`
                            ${appointment.status === "booked" ? "bg-blue-900 text-blue-300 hover:bg-blue-900" : ""}
                            ${appointment.status === "cancelled" ? "bg-red-900 text-red-300 hover:bg-red-900" : ""}
                            ${appointment.status === "completed" ? "bg-green-900 text-green-300 hover:bg-green-900" : ""}
                          `}
                        >
                          • {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center">{appointment.cost}</div>
                      <div className="flex items-center text-sm">{appointment.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="booked" className="mt-0">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 p-4 border-b border-gray-700 text-gray-400 text-sm">
                  <div>Client</div>
                  <div>Service</div>
                  <div>Status</div>
                  <div>Cost</div>
                  <div>Date / Time</div>
                </div>
                <div className="divide-y divide-gray-700">
                  {appointments
                    .filter((a) => a.status === "booked")
                    .map((appointment) => (
                      <div
                        key={appointment.id}
                        className="grid grid-cols-5 p-4 hover:bg-gray-700 cursor-pointer transition-colors"
                        onClick={() => handleAppointmentClick(appointment)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-600">
                            <Image
                              src={appointment.client.avatar || "/placeholder.svg"}
                              alt={appointment.client.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{appointment.client.name}</div>
                            <div className="text-xs text-gray-400">#{appointment.client.id}</div>
                          </div>
                        </div>
                        <div className="flex items-center">{appointment.service}</div>
                        <div className="flex items-center">
                          <Badge className="bg-blue-900 text-blue-300 hover:bg-blue-900">• Booked</Badge>
                        </div>
                        <div className="flex items-center">{appointment.cost}</div>
                        <div className="flex items-center text-sm">{appointment.date}</div>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 p-4 border-b border-gray-700 text-gray-400 text-sm">
                  <div>Client</div>
                  <div>Service</div>
                  <div>Status</div>
                  <div>Cost</div>
                  <div>Date / Time</div>
                </div>
                <div className="divide-y divide-gray-700">
                  {appointments
                    .filter((a) => a.status === "completed")
                    .map((appointment) => (
                      <div
                        key={appointment.id}
                        className="grid grid-cols-5 p-4 hover:bg-gray-700 cursor-pointer transition-colors"
                        onClick={() => handleAppointmentClick(appointment)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-600">
                            <Image
                              src={appointment.client.avatar || "/placeholder.svg"}
                              alt={appointment.client.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{appointment.client.name}</div>
                            <div className="text-xs text-gray-400">#{appointment.client.id}</div>
                          </div>
                        </div>
                        <div className="flex items-center">{appointment.service}</div>
                        <div className="flex items-center">
                          <Badge className="bg-green-900 text-green-300 hover:bg-green-900">• Completed</Badge>
                        </div>
                        <div className="flex items-center">{appointment.cost}</div>
                        <div className="flex items-center text-sm">{appointment.date}</div>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cancelled" className="mt-0">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 p-4 border-b border-gray-700 text-gray-400 text-sm">
                  <div>Client</div>
                  <div>Service</div>
                  <div>Status</div>
                  <div>Cost</div>
                  <div>Date / Time</div>
                </div>
                <div className="divide-y divide-gray-700">
                  {appointments
                    .filter((a) => a.status === "cancelled")
                    .map((appointment) => (
                      <div
                        key={appointment.id}
                        className="grid grid-cols-5 p-4 hover:bg-gray-700 cursor-pointer transition-colors"
                        onClick={() => handleAppointmentClick(appointment)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-600">
                            <Image
                              src={appointment.client.avatar || "/placeholder.svg"}
                              alt={appointment.client.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{appointment.client.name}</div>
                            <div className="text-xs text-gray-400">#{appointment.client.id}</div>
                          </div>
                        </div>
                        <div className="flex items-center">{appointment.service}</div>
                        <div className="flex items-center">
                          <Badge className="bg-red-900 text-red-300 hover:bg-red-900">• Cancelled</Badge>
                        </div>
                        <div className="flex items-center">{appointment.cost}</div>
                        <div className="flex items-center text-sm">{appointment.date}</div>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {showDetails && selectedAppointment && (
        <AppointmentDetails appointment={selectedAppointment} onClose={handleCloseDetails} />
      )}
    </div>
  )
}
