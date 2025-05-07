"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface EditProfileImageModalProps {
  onClose: () => void
}

export default function EditProfileImageModal({ onClose }: EditProfileImageModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="font-medium">Select Image</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-700">
              <Image
                src={selectedImage || "/placeholder.svg?height=160&width=160"}
                alt="Profile"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Button className="bg-blue-600 hover:bg-blue-700">Upload</Button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer ${
                  selectedImage === `/placeholder.svg?height=80&width=80&index=${item}` ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(`/placeholder.svg?height=80&width=80&index=${item}`)}
              >
                <Image
                  src={`/placeholder.svg?height=80&width=80&index=${item}`}
                  alt={`Option ${item}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
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
