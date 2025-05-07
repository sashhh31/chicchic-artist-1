"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  X, 
  MoreVertical, 
  Clock, 
  Calendar, 
  Users,
  Edit2,
  Trash2,
  Copy
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

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

interface ServiceDetailsSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  service?: Service
  onEdit?: () => void
  onDelete?: () => void
  onDuplicate?: () => void
  onAssignStaff?: () => void
}

export default function ServiceDetailsSheet({ 
  open, 
  onOpenChange, 
  service, 
  onEdit, 
  onDelete, 
  onDuplicate,
  onAssignStaff
}: ServiceDetailsSheetProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'staff'>('details')

  if (!service) return null

  const isDiscounted = service.originalPrice && service.originalPrice > service.price

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-80 sm:w-96 p-0 bg-gray-800 border-l border-gray-700 overflow-y-auto">
        <SheetHeader className="p-4 border-b border-gray-700 flex flex-row items-center justify-between">
          <SheetTitle className="font-medium text-white">Service Details</SheetTitle>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                <DropdownMenuItem 
                  className="text-gray-200 hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit?.();
                  }}
                >
                  <Edit2 className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-gray-200 hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDuplicate?.();
                  }}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-red-500 hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.();
                  }}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">{service.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-gray-400">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{service.duration} min</span>
              </div>
              <div className="h-4 w-px bg-gray-700"></div>
              <span className="text-sm text-gray-400">{service.category}</span>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <Button 
              variant={activeTab === 'details' ? "default" : "outline"} 
              className={activeTab === 'details' 
                ? "flex-1 bg-blue-600 hover:bg-blue-700" 
                : "flex-1 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white"
              }
              onClick={() => setActiveTab('details')}
            >
              Details
            </Button>
            <Button 
              variant={activeTab === 'staff' ? "default" : "outline"} 
              className={activeTab === 'staff' 
                ? "flex-1 bg-blue-600 hover:bg-blue-700" 
                : "flex-1 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white"
              }
              onClick={() => setActiveTab('staff')}
            >
              Staff
            </Button>
          </div>

          {activeTab === 'details' ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
                <div>
                  <p className="text-sm text-gray-400">Price</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium">£{service.price.toFixed(2)}</span>
                    {isDiscounted && (
                      <span className="text-sm text-gray-400 line-through">£{service.originalPrice?.toFixed(2)}</span>
                    )}
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={onEdit}
                >
                  Edit Price
                </Button>
              </div>

              <div>
                <h4 className="text-sm text-gray-400 mb-2">Description</h4>
                <p className="text-sm">{service.description}</p>
              </div>

              <div>
                <h4 className="text-sm text-gray-400 mb-2">Duration</h4>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{service.duration} minutes</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h4 className="text-sm text-gray-400">Assigned Staff</h4>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-gray-200 border-gray-700 hover:bg-gray-700"
                  onClick={onAssignStaff}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Assign Staff
                </Button>
              </div>

              {service.staff && service.staff.length > 0 ? (
                <div className="space-y-3">
                  {service.staff.map((member) => (
                    <div 
                      key={member.id} 
                      className="flex items-center p-3 bg-gray-700 rounded-md"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-gray-600 mr-3">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-gray-400">{member.role}</p>
                      </div>
                      <div className="flex items-center ml-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-3 h-3 ${star <= Math.floor(member.rating) ? "text-yellow-400" : "text-gray-600"}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-400 mb-4">No staff assigned to this service</p>
                  <Button 
                    onClick={onAssignStaff}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Assign Staff
                  </Button>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-gray-700">
            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={onEdit}
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button 
                className="flex-1 bg-red-600 hover:bg-red-700"
                onClick={onDelete}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}