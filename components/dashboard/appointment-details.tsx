"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, X } from "lucide-react"

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

interface AppointmentDetailsProps {
  appointment: Appointment
  onClose: () => void
}

export default function AppointmentDetails({ appointment, onClose }: AppointmentDetailsProps) {
  return (
    <div className="w-[520px] z-50  bg-gray-800 border-l border-gray-700 overflow-y-auto">
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <h2 className="font-medium">Appointment Details</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-4">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
            <Image
              src="/sarah.png"
              alt={appointment.client.name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-center mb-1">{appointment.client.name}</h3>
        <h1 className="text-base text-gray-400 text-center m-5">@jeremy</h1>
        <div className="flex justify-center gap-5 mb-6">
        <div className="w-7 h-7 rounded-full p-1 bg-orange-500 flex items-center justify-center text-xs font-medium">
            <Phone className="h-5 w-5"/>
          </div>          
          <div className="w-7 h-7 rounded-full p-1 bg-orange-500 flex items-center justify-center text-xs font-medium">
            <Mail className="h-5 w-5"/>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex justify-between">
            <h4 className="text-sm text-gray-400 mb-1">Service</h4>
            <p className="font-medium">Hair Curls</p>
          </div>

          <div className="flex justify-between">
            <h4 className="text-sm text-gray-400 mb-1">Duration</h4>
            <p className="font-medium">1 hr 30 min</p>
          </div>

          <div className="flex justify-between">
            <h4 className="text-sm text-gray-400 mb-1">Date</h4>
            <p className="font-medium">9th November, Tuesday</p>
          </div>

          <div className="flex justify-between">
            <h4 className="text-sm text-gray-400 mb-1">Time</h4>
            <p className="font-medium">10:45 PM Onwards</p>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <h4 className="text-sm text-gray-400 mb-1">COST</h4>
            <p className="font-medium">{appointment.cost}</p>
          </div>

          <div>
            <h4 className="text-sm text-gray-400 mb-1">Item Discount</h4>
            <p className="font-medium text-green-500">£ 5.00</p>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <h4 className="font-semibold mb-1">Total</h4>
            <p className="font-medium text-lg">£ 23.54</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-32 h-32 bg-white p-2 rounded-md">
            <Image src="/qr 1.png" alt="QR Code" width={128} height={128} className="w-full h-full" />
          </div>
        </div>

        <p className="text-xs text-center text-gray-400 mt-2">SCAN FOR MORE DETAILS</p>

        {appointment.status === "booked" && (
          <div className="mt-6">
            <Button className="w-full bg-green-600 hover:bg-green-700">Complete</Button>
          </div>
        )}
      </div>
    </div>
  )
}
