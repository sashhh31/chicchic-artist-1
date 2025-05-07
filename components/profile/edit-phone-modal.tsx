"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface EditPhoneModalProps {
  onClose: () => void
}

export default function EditPhoneModal({ onClose }: EditPhoneModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="font-medium">Change Phone</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <div className="flex mb-4">
            <div className="flex items-center border rounded-l-md px-3 bg-gray-700 border-gray-600">
              <span className="text-sm">🇺🇸</span>
              <span className="ml-1 text-sm">+1</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <Input
              type="tel"
              className="rounded-l-none bg-gray-700 border-gray-600 text-white"
              placeholder="(000) 000-0000"
              defaultValue="7876756543"
            />
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 flex justify-end">
          <Button variant="outline" className="mr-2" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
        </div>
      </div>
    </div>
  )
}
