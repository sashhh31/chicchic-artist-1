"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface EditUsernameModalProps {
  onClose: () => void
}

export default function EditUsernameModal({ onClose }: EditUsernameModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="font-medium">Change Username</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-1">
              Username
            </label>
            <Input
              id="username"
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Enter username"
              defaultValue="royalsaons"
            />
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 flex justify-end">
          <Button variant="outline" className="mr-2" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Update</Button>
        </div>
      </div>
    </div>
  )
}
