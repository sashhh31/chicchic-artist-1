"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import DashboardSidebar from "@/components/dashboard/sidebar"

// Sample data - replace with your actual data source
const sampleStaff = [
  { id: 1, name: "Emma Wilson", role: "Senior Stylist", image: "/avatar1.jpg", rating: 4.8 },
  { id: 2, name: "Michael Chen", role: "Colorist", image: "/avatar2.jpg", rating: 4.5 },
  { id: 3, name: "Sophia Rodriguez", role: "Esthetician", image: "/avatar3.jpg", rating: 4.7 },
  { id: 4, name: "James Kim", role: "Barber", image: "/avatar4.jpg", rating: 4.9 }
]

const sampleServices = [
  {
    id: "service-1",
    name: "Lash Tinting",
    duration: 34,
    price: 12.99,
    originalPrice: 18.24,
    description: "Literally tinting your eyelashes is so fast—the dye is painted on, then sits on your lashes for just 10 minutes. From start to finish, the whole thing takes just 30 minutes, though, of course, can vary depending on where you go, how fast the lash tech is, etc.",
    category: "Face",
    staff: [sampleStaff[0], sampleStaff[2]]
  },
  {
    id: "service-2",
    name: "Facial",
    duration: 34,
    price: 12.99,
    originalPrice: 18.24,
    description: "Literally tinting your eyelashes is so fast—the dye is painted on, then sits on your lashes for just 10 minutes. From start to finish, the whole thing takes just 30 minutes, though, of course, can vary depending on where you go, how fast the lash tech is, etc.",
    category: "Face",
    staff: []
  },
  {
    id: "service-3",
    name: "Hollywood Wax",
    duration: 34,
    price: 12.99,
    originalPrice: 18.24,
    description: "Literally tinting your eyelashes is so fast—the dye is painted on, then sits on your lashes for just 10 minutes. From start to finish, the whole thing takes just 30 minutes, though, of course, can vary depending on where you go, how fast the lash tech is, etc.",
    category: "Nails",
    staff: [sampleStaff[1], sampleStaff[3]]
  },
  {
    id: "service-4",
    name: "Lash Tinting",
    duration: 34,
    price: 12.99,
    originalPrice: 18.24,
    description: "Literally tinting your eyelashes is so fast—the dye is painted on, then sits on your lashes for just 10 minutes. From start to finish, the whole thing takes just 30 minutes, though, of course, can vary depending on where you go, how fast the lash tech is, etc.",
    category: "Hair",
    staff: [sampleStaff[0], sampleStaff[2], sampleStaff[3]]
  }
]

const categories = ["Face", "Nails", "Hair", "Hair Remover", "Body", "Wellness"]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("Face")
  const [searchQuery, setSearchQuery] = useState("")
  
  // Filter services by active tab and search query
  const filteredServices = sampleServices.filter(service => {
    const matchesCategory = activeTab === service.category
    const matchesSearch = searchQuery === "" || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  const handleEditService = (service) => {
    console.log("Edit service:", service)
    // Implement your edit logic here
  }

  const handleDeleteService = (service) => {
    console.log("Delete service:", service)
    // Implement your delete logic here
  }

  const handleDuplicateService = (service) => {
    console.log("Duplicate service:", service)
    // Implement your duplicate logic here
  }

  const handleAssignStaff = (service) => {
    console.log("Assign staff to service:", service)
    // Implement your staff assignment logic here
  }

  const handleAddService = () => {
    console.log("Add new service")
    // Implement your add service logic here
  }

  const handleAddCollection = () => {
    console.log("Add new collection")
    // Implement your add collection logic here
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-zinc-950">

      <DashboardSidebar/>
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Services</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white"
            >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </div>
      </header>

      <div className="p-4">
        <div className="mb-6">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-800 border border-gray-700">
              {categories.map((category) => (
                <TabsTrigger 
                key={category}
                value={category}
                className="data-[state=active]:bg-gray-700"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium mb-4">{activeTab}</h2>
            <Button 
              variant="outline" 
              className="text-sm text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white"
              onClick={handleAddCollection}
              >
              Add a collection
            </Button>
          </div>
          
          <div className="space-y-4">
            {filteredServices.map((service) => (
              <ServiceCard
              key={service.id}
              service={service}
              onEdit={handleEditService}
              onDelete={handleDeleteService}
              onDuplicate={handleDuplicateService}
              onAssignStaff={handleAssignStaff}
              />
            ))}
            
         
          </div>
        </div>
      </div>
    </div>
              </div>
  )
}