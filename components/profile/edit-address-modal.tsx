"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface EditAddressModalProps {
  onClose: () => void
}

export default function EditAddressModal({ onClose }: EditAddressModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="font-medium">Change Address</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-400 mb-1">
                Street
              </label>
              <Input
                id="street"
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="Enter street address"
                defaultValue="A-435, North cartel street"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-1">
                City
              </label>
              <Input
                id="city"
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="Enter city"
                defaultValue="Queens Road"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-400 mb-1">
                  State
                </label>
                <Input
                  id="state"
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Enter state"
                  defaultValue="AED ED3"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-400 mb-1">
                  Country
                </label>
                <Input
                  id="country"
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Enter country"
                  defaultValue="United Kingdom"
                />
              </div>
            </div>
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
