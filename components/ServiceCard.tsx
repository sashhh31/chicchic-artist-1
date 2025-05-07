"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  MoreVertical, 
  Clock,
  Users
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import ServiceDetailsSheet from "./ServiceDetails"

type Service = {
  id: string
  name: string
  duration: number
  price: number
  originalPrice?: number
  description: string
  category: string
  staff: StaffMember[]
}

type StaffMember = {
  id: number
  name: string
  role: string
  image: string
  rating: number
}

interface ServiceCardProps {
  service: Service
  onEdit: (service: Service) => void
  onDelete: (service: Service) => void
  onDuplicate: (service: Service) => void
  onAssignStaff: (service: Service) => void
}

export default function ServiceCard({ 
  service,
  onEdit,
  onDelete,
  onDuplicate,
  onAssignStaff
}: ServiceCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const isDiscounted = service.originalPrice && service.originalPrice > service.price
  
  const handleCardClick = () => {
    setDetailsOpen(true)
  }

  return (
    <>
      <div 
        className="bg-gray-800 rounded-md overflow-hidden mb-4 cursor-pointer hover:bg-gray-750"
        onClick={handleCardClick}
      >
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium mb-1">{service.name}</h3>
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <Clock className="h-4 w-4 mr-1" />
                <span>{service.duration} min</span>
                <span className="mx-2">•</span>
                <span>{service.category}</span>
              </div>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                <DropdownMenuItem 
                  className="text-gray-200 hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(service);
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-gray-200 hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDuplicate(service);
                  }}
                >
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-red-500 hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(service);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <p className="text-sm text-gray-400 line-clamp-2 mb-4">{service.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {service.staff && service.staff.length > 0 ? (
                <div className="flex -space-x-2">
                  {service.staff.slice(0, 3).map((staff) => (
                    <div key={staff.id} className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-gray-800 bg-gray-700">
                      <Image
                        src={staff.image}
                        alt={staff.name}
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {service.staff.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs ring-2 ring-gray-800">
                      +{service.staff.length - 3}
                    </div>
                  )}
                </div>
              ) : (
                <div 
                  className="text-sm text-orange-500 flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAssignStaff(service);
                  }}
                >
                  <Users className="h-4 w-4 mr-1" />
                  No Staff Added
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {isDiscounted && (
                <span className="text-sm text-gray-400 line-through">£{service.originalPrice?.toFixed(2)}</span>
              )}
              <span className="font-medium">£{service.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <ServiceDetailsSheet
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        service={service}
        onEdit={() => onEdit(service)}
        onDelete={() => onDelete(service)}
        onDuplicate={() => onDuplicate(service)}
        onAssignStaff={() => onAssignStaff(service)}
      />
    </>
  )
}