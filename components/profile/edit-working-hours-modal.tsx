"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

interface EditWorkingHoursModalProps {
  onClose: () => void
}

interface DaySchedule {
  day: string
  working: boolean
  from: string
  to: string
}

export default function EditWorkingHoursModal({ onClose }: EditWorkingHoursModalProps) {
  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: "MONDAY", working: true, from: "09:00 AM", to: "09:00 AM" },
    { day: "TUESDAY", working: false, from: "09:00 AM", to: "09:00 AM" },
    { day: "WEDNESDAY", working: true, from: "09:00 AM", to: "09:00 AM" },
    { day: "THURSDAY", working: true, from: "09:00 AM", to: "09:00 AM" },
    { day: "FRIDAY", working: true, from: "09:00 AM", to: "09:00 AM" },
    { day: "SATURDAY", working: true, from: "09:00 AM", to: "09:00 AM" },
    { day: "SUNDAY", working: false, from: "09:00 AM", to: "09:00 AM" },
  ])

  const updateSchedule = (index: number, field: keyof DaySchedule, value: any) => {
    const newSchedule = [...schedule]
    newSchedule[index] = { ...newSchedule[index], [field]: value }
    setSchedule(newSchedule)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="font-medium">Edit Working Hours</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium mb-4">Update Days/Hours for your business</h3>

          <div className="space-y-6">
            {schedule.map((day, index) => (
              <div key={day.day} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{day.day}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{day.working ? "Working" : "Off"}</span>
                    <Switch
                      checked={day.working}
                      onCheckedChange={(checked) => updateSchedule(index, "working", checked)}
                    />
                  </div>
                </div>

                {day.working && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">From</label>
                      <Select value={day.from} onValueChange={(value) => updateSchedule(index, "from", value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"].map(
                            (time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">To</label>
                      <Select value={day.to} onValueChange={(value) => updateSchedule(index, "to", value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "05:00 PM",
                            "05:30 PM",
                            "06:00 PM",
                            "06:30 PM",
                            "07:00 PM",
                            "07:30 PM",
                            "08:00 PM",
                            "08:30 PM",
                            "09:00 PM",
                          ].map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 flex justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 w-full">Update</Button>
        </div>
      </div>
    </div>
  )
}
