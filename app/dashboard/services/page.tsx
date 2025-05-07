"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import DashboardSidebar from '@/components/dashboard/sidebar'
export default function ServicesPage() {
  const [addServiceModalOpen, setAddServiceModalOpen] = useState(false)
  const [assignServiceModalOpen, setAssignServiceModalOpen] = useState(false)
  const [editServiceModalOpen, setEditServiceModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [activeTab, setActiveTab] = useState("face")
  
  type ServiceType = {
    id: number
    title: string
    duration: string
    price: string
    description: string
    category: string
    staff: {
      id: number
      name: string
      image: string
    }[]
  }
  
  const services: ServiceType[] = [
    {
      id: 1,
      title: "Lash Tinting",
      duration: "25 min",
      price: "$35.00",
      description: "A lash tint is a cosmetic dye that is painted onto your eyelashes to make them look darker, and can be the perfect solution for people who want to amp up their lash look without bothering with the daily mess of mascara application.",
      category: "face",
      staff: [
        { id: 1, name: "Jessica Waltz", image: "/placeholder.svg?height=32&width=32" },
        { id: 2, name: "Jack White", image: "/placeholder.svg?height=32&width=32" },
        { id: 3, name: "Brian Adams", image: "/placeholder.svg?height=32&width=32" }
      ]
    },
    {
      id: 2,
      title: "Facial",
      duration: "45 min",
      price: "$75.00",
      description: "A facial is a beauty treatment that cleanses, exfoliates, and nourishes the skin, promoting a clear, well-hydrated complexion and can help your skin look younger.",
      category: "face",
      staff: [
            { id: 1, name: "Jessica Waltz", image: "/placeholder.svg?height=32&width=32" },
        { id: 2, name: "Jack White", image: "/placeholder.svg?height=32&width=32" }
      ]
    },
    {
      id: 3,
      title: "Haircut Men",
      duration: "30 min",
      price: "$45.00",
      description: "Professional haircut service for men, including consultation, wash, cut, and styling to achieve your desired look.",
      category: "hair",
      staff: [
        { id: 2, name: "Jack White", image: "/staff/jack.jpg" },
        { id: 3, name: "Brian Adams", image: "/staff/brian.jpg" },
        { id: 4, name: "Joana Midd", image: "/staff/joana.jpg" }
      ]
    },
    {
      id: 4,
      title: "Manicure",
      duration: "40 min",
      price: "$35.00",
      description: "A manicure is a beauty treatment for your hands and nails, including filing, shaping, and often painting of the nails, as well as softening and conditioning of the hands.",
      category: "nails",
      staff: [
        { id: 5, name: "Luna Gray", image: "/staff/luna.jpg" }
      ]
    }
  ]
  
  const filteredServices = services.filter((service) => service.category === activeTab)
  
  const handleAddService = () => {
    setAddServiceModalOpen(true)
  }
  
  const handleEditService = (service: ServiceType) => {
    setSelectedService(service)
    setEditServiceModalOpen(true)
  }
  
  const handleAssignService = () => {
    setAssignServiceModalOpen(true)
  }

  return (
    <div className="flex min-h-screen bg-[#1C1E27]">
      {/* Left sidebar */}
      <DashboardSidebar />
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Services</h1>
          <div>
            <div className="relative">
              <button className="flex items-center justify-center rounded-full bg-red-500 text-white h-10 w-10">
                <span className="absolute top-0 right-0 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <Tabs defaultValue="face" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-[#252836] mb-4">
              <TabsTrigger value="face" className="data-[state=active]:bg-blue-600">Face</TabsTrigger>
              <TabsTrigger value="hair" className="data-[state=active]:bg-blue-600">Hair</TabsTrigger>
              <TabsTrigger value="facial" className="data-[state=active]:bg-blue-600">Facial Therapy</TabsTrigger>
              <TabsTrigger value="body" className="data-[state=active]:bg-blue-600">Body</TabsTrigger>
              <TabsTrigger value="nails" className="data-[state=active]:bg-blue-600">Nails</TabsTrigger>
            </TabsList>
            
            <div className="flex justify-between items-center mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <Input 
                  placeholder="Search" 
                  className="bg-[#252836] border-none text-white pl-10 h-10 w-48"
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleAddService}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm flex items-center gap-1"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  Add a Service
                </Button>
                <Button 
                  onClick={handleAssignService}
                  className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white text-sm flex items-center gap-1"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Assign Services
                </Button>
              </div>
            </div>
            
            <TabsContent value={activeTab} className="p-0 border-none">
              <ScrollArea className="h-[calc(100vh-240px)]">
                <div className="space-y-4">
                  {filteredServices.map((service) => (
                    <div key={service.id} className="bg-[#252836] rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="text-white font-medium">{service.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span>{service.duration}</span>
                              <span>{service.price}</span>
                            </div>
                          </div>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button className="text-gray-400 hover:text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="bg-[#252836] border-gray-700 w-48 p-0">
                              <div className="py-1">
                                <button 
                                  onClick={() => handleEditService(service)} 
                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                >
                                  Edit Service
                                </button>
                                <button 
                                  className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                                >
                                  Delete Service
                                </button>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <p className="text-sm text-gray-400 line-clamp-2 mb-3">{service.description}</p>
                        
                        <div className="flex items-center justify-end gap-1">
                          {service.staff.map((staff) => (
                            <div key={staff.id} className="h-8 w-8 rounded-full overflow-hidden">
                              <img src={staff.image} alt={staff.name} className="h-full w-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Add Service Modal */}
      <Dialog open={addServiceModalOpen} onOpenChange={setAddServiceModalOpen}>
        <DialogContent className="bg-[#252836] text-white border-gray-700 max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Add Service</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                <Select defaultValue="face">
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    <SelectItem value="face">Face</SelectItem>
                    <SelectItem value="hair">Hair</SelectItem>
                    <SelectItem value="facial">Facial Therapy</SelectItem>
                    <SelectItem value="body">Body</SelectItem>
                    <SelectItem value="nails">Nails</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Service Name</label>
                <Input className="bg-gray-700 border-gray-600 text-white" placeholder="e.g. Lash Tinting" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Duration</label>
                <Select defaultValue="30min">
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    <SelectItem value="15min">15 minutes</SelectItem>
                    <SelectItem value="30min">30 minutes</SelectItem>
                    <SelectItem value="45min">45 minutes</SelectItem>
                    <SelectItem value="60min">60 minutes</SelectItem>
                    <SelectItem value="90min">90 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Price</label>
                <Input className="bg-gray-700 border-gray-600 text-white" placeholder="$0.00" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <Textarea 
                className="bg-gray-700 border-gray-600 text-white h-24" 
                placeholder="Enter service description..." 
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Assign Staff</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 1, name: 'Jessica Waltz', image: '/staff/jessica.jpg' },
                  { id: 2, name: 'Jack White', image: '/staff/jack.jpg' },
                  { id: 3, name: 'Brian Adams', image: '/staff/brian.jpg' }
                ].map((staff) => (
                  <div 
                    key={staff.id} 
                    className="bg-gray-700 rounded-md p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-600"
                  >
                    <div className="h-10 w-10 rounded-md overflow-hidden">
                      <img src={staff.image} alt={staff.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium truncate">{staff.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Edit Service Modal */}
      {selectedService && (
        <Dialog open={editServiceModalOpen} onOpenChange={setEditServiceModalOpen}>
          <DialogContent className="bg-[#252836] text-white border-gray-700 max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Edit Service</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                  <Select defaultValue={selectedService.category}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600 text-white">
                      <SelectItem value="face">Face</SelectItem>
                      <SelectItem value="hair">Hair</SelectItem>
                      <SelectItem value="facial">Facial Therapy</SelectItem>
                      <SelectItem value="body">Body</SelectItem>
                      <SelectItem value="nails">Nails</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Service Name</label>
                  <Input 
                    className="bg-gray-700 border-gray-600 text-white" 
                    defaultValue={selectedService.title}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Duration</label>
                  <Input 
                    className="bg-gray-700 border-gray-600 text-white" 
                    defaultValue={selectedService.duration}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Price</label>
                  <Input 
                    className="bg-gray-700 border-gray-600 text-white" 
                    defaultValue={selectedService.price}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <Textarea 
                  className="bg-gray-700 border-gray-600 text-white h-24" 
                  defaultValue={selectedService.description}
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3">Assigned Staff</h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedService.staff.map((staff) => (
                    <div 
                      key={staff.id} 
                      className="bg-gray-700 rounded-md p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-600"
                    >
                      <div className="h-10 w-10 rounded-md overflow-hidden">
                        <img src={staff.image} alt={staff.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm text-white font-medium truncate">{staff.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Assign Services Modal */}
      <Dialog open={assignServiceModalOpen} onOpenChange={setAssignServiceModalOpen}>
        <DialogContent className="bg-[#252836] text-white border-gray-700 max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Assign Services</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Select Staff</label>
                <Select defaultValue="1">
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    <SelectItem value="1">Jessica Waltz</SelectItem>
                    <SelectItem value="2">Jack White</SelectItem>
                    <SelectItem value="3">Brian Adams</SelectItem>
                    <SelectItem value="4">Joana Midd</SelectItem>
                    <SelectItem value="5">Luna Gray</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                <Select defaultValue="face">
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    <SelectItem value="face">Face</SelectItem>
                    <SelectItem value="hair">Hair</SelectItem>
                    <SelectItem value="facial">Facial Therapy</SelectItem>
                    <SelectItem value="body">Body</SelectItem>
                    <SelectItem value="nails">Nails</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-3">
              {services.filter(s => s.category === 'face').map((service) => (
                <div key={service.id} className="flex items-center justify-between p-3 rounded-md bg-gray-700">
                  <div>
                    <h4 className="text-white text-sm font-medium">{service.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{service.duration}</span>
                      <span>{service.price}</span>
                    </div>
                  </div>
                  <Switch className="data-[state=checked]:bg-blue-600" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
