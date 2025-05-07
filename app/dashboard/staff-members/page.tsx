"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import DashboardSidebar from '@/components/dashboard/sidebar'
export default function StaffMembers() {
  const [memberModalOpen, setMemberModalOpen] = useState(false)
  const [editMemberModalOpen, setEditMemberModalOpen] = useState(false)
  const [updateHoursModalOpen, setUpdateHoursModalOpen] = useState(false)
  const [assignServicesModalOpen, setAssignServicesModalOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState<any>(null)
  
  const staffMembers = [
    {
      id: 1,
      name: 'Jessica Waltz',
      role: 'General Stylist',
      image: '/placeholder.svg?height=32&width=32',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Jack White',
      role: 'Senior Stylist',
      image: '/placeholder.svg?height=32&width=32',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Brian Adams',
      role: 'Colorist',
      image: '/placeholder.svg?height=32&width=32',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Joana Midd',
      role: 'Hair Cutter',
      image: '/placeholder.svg?height=32&width=32',
      rating: 4.8
    },
    {
      id: 5,
      name: 'Luna Gray',
      role: 'Junior Stylist',
      image: '/placeholder.svg?height=32&width=32',
      rating: 4.6
    }
  ]
  
  const handleStaffClick = (member:any) => {
    setSelectedMember(member)
  }
  
  const handleAddMember = () => {
    setMemberModalOpen(true)
  }
  
  const handleEditMember = (member:any) => {
    setSelectedMember(member)
    setEditMemberModalOpen(true)
  }
  
  const handleUpdateHours = (member:any) => {
    setSelectedMember(member)
    setUpdateHoursModalOpen(true)
  }
  
  const handleAssignServices = (member:any) => {
    setSelectedMember(member)
    setAssignServicesModalOpen(true)
  }

  return (
    <div className="flex min-h-screen bg-[#1C1E27]">
      {/* Left sidebar */}
      <DashboardSidebar />
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Staff Management</h1>
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
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-sm font-medium">{staffMembers.length} Members</h2>
          <Button onClick={handleAddMember} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Member
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {staffMembers.map((member) => (
            <div key={member.id} className="bg-[#252836] rounded-lg p-4 relative">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`w-4 h-4 ${star <= Math.floor(member.rating) ? "text-yellow-400" : "text-gray-600"}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-gray-400 text-xs">{member.rating}</span>
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
                        onClick={() => handleEditMember(member)} 
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                      >
                        Edit Info
                      </button>
                      <button 
                        onClick={() => handleUpdateHours(member)} 
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                      >
                        Edit Working Hours
                      </button>
                      <button 
                        onClick={() => handleAssignServices(member)} 
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                      >
                        Assign Services
                      </button>
                      <button 
                        className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                      >
                        Delete
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add Member Modal */}
      <Dialog open={memberModalOpen} onOpenChange={setMemberModalOpen}>
        <DialogContent className="bg-[#252836] text-white border-gray-700 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Add Member</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24 rounded-md bg-gray-700 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                <Input className="bg-gray-700 border-gray-600 text-white" placeholder="Enter staff name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Role/Position</label>
                <Input className="bg-gray-700 border-gray-600 text-white" placeholder="e.g. Hair Stylist" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                <Input className="bg-gray-700 border-gray-600 text-white" placeholder="(000) 000-0000" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <Input className="bg-gray-700 border-gray-600 text-white" placeholder="email@example.com" />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Working Hours</h3>
              
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{day}</span>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="09:00 AM">
                        <SelectTrigger className="w-24 h-8 bg-gray-700 border-gray-600 text-white text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600 text-white">
                          <SelectItem value="09:00 AM">09:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="Off">Off</SelectItem>
                        </SelectContent>
                      </Select>
                      <span className="text-xs text-gray-400">to</span>
                      <Select defaultValue="05:00 PM">
                        <SelectTrigger className="w-24 h-8 bg-gray-700 border-gray-600 text-white text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600 text-white">
                          <SelectItem value="05:00 PM">05:00 PM</SelectItem>
                          <SelectItem value="06:00 PM">06:00 PM</SelectItem>
                          <SelectItem value="Off">Off</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Save</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Edit Member Modal */}
      {selectedMember && (
        <Dialog open={editMemberModalOpen} onOpenChange={setEditMemberModalOpen}>
          <DialogContent className="bg-[#252836] text-white border-gray-700 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Edit Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <Input className="bg-gray-700 border-gray-600 text-white" defaultValue={selectedMember.name} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Role/Position</label>
                  <Input className="bg-gray-700 border-gray-600 text-white" defaultValue={selectedMember.role} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                  <Input className="bg-gray-700 border-gray-600 text-white" placeholder="(000) 000-0000" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <Input className="bg-gray-700 border-gray-600 text-white" placeholder="email@example.com" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Update Hours Modal */}
      {selectedMember && (
        <Dialog open={updateHoursModalOpen} onOpenChange={setUpdateHoursModalOpen}>
          <DialogContent className="bg-[#252836] text-white border-gray-700 max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Update Days/Hours for your Member</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg overflow-hidden">
                  <img src={selectedMember.image} alt={selectedMember.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{selectedMember.name}</h3>
                  <p className="text-gray-400 text-sm">{selectedMember.role}</p>
                </div>
              </div>
              
              <div className="space-y-5">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-white">{day}</span>
                      <Switch defaultChecked={day !== 'Sunday'} className="data-[state=checked]:bg-blue-600" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Select defaultValue="09:00 AM">
                        <SelectTrigger className="w-24 h-8 bg-gray-700 border-gray-600 text-white text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600 text-white">
                          <SelectItem value="09:00 AM">09:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                      <span className="text-xs text-gray-400">to</span>
                      <Select defaultValue="05:00 PM">
                        <SelectTrigger className="w-24 h-8 bg-gray-700 border-gray-600 text-white text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600 text-white">
                          <SelectItem value="05:00 PM">05:00 PM</SelectItem>
                          <SelectItem value="06:00 PM">06:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Assign Services Modal */}
      {selectedMember && (
        <Dialog open={assignServicesModalOpen} onOpenChange={setAssignServicesModalOpen}>
          <DialogContent className="bg-[#252836] text-white border-gray-700 max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Assign Services</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg overflow-hidden">
                  <img src={selectedMember.image} alt={selectedMember.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{selectedMember.name}</h3>
                  <p className="text-gray-400 text-sm">{selectedMember.role}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {['Face', 'Facial', 'Body', 'Hair', 'Massage', 'Nail Care', 'Makeup', 'Teeth Whitening'].map((service) => (
                  <div key={service} className="flex items-center gap-3 p-3 border border-gray-700 rounded-md">
                    <Checkbox id={`service-${service}`} className="data-[state=checked]:bg-blue-600 border-gray-600" />
                    <label htmlFor={`service-${service}`} className="text-sm text-white font-medium">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
