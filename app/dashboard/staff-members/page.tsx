"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DashboardSidebar from '@/components/dashboard/sidebar'

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
}

export default function StaffMembers() {
  const [addMemberOpen, setAddMemberOpen] = useState(false)
  const [editMemberOpen, setEditMemberOpen] = useState(false)
  const [updateHoursOpen, setUpdateHoursOpen] = useState(false)
  const [assignServicesOpen, setAssignServicesOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null)
  const [selectedTab, setSelectedTab] = useState("all")
  const [activeSheet, setActiveSheet] = useState("")
  
  const staffMembers: StaffMember[] = [
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
  
  const handleStaffClick = (member: StaffMember) => {
    setSelectedMember(member)
    setActiveSheet("details")
  }
  
  const handleAddMember = () => {
    setAddMemberOpen(true)
  }
  
  const handleEditMember = (member: StaffMember) => {
    setSelectedMember(member)
    setEditMemberOpen(true)
  }
  
  const handleUpdateHours = (member: StaffMember) => {
    setSelectedMember(member)
    setUpdateHoursOpen(true)
  }
  
  const handleAssignServices = (member: StaffMember) => {
    setSelectedMember(member)
    setAssignServicesOpen(true)
  }

  const handleTabChange = (value: string) => {
    setSelectedTab(value)
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
          <Tabs defaultValue="all" value={selectedTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="bg-[#252836] mb-6">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">All Staff</TabsTrigger>
              <TabsTrigger value="stylists" className="data-[state=active]:bg-blue-600">Stylists</TabsTrigger>
              <TabsTrigger value="colorists" className="data-[state=active]:bg-blue-600">Colorists</TabsTrigger>
              <TabsTrigger value="cutters" className="data-[state=active]:bg-blue-600">Hair Cutters</TabsTrigger>
            </TabsList>
            
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
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {staffMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className="bg-[#252836] rounded-lg p-4 relative cursor-pointer hover:bg-[#2a2e3d] transition-colors"
                    onClick={() => handleStaffClick(member)}
                  >
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
                          <button 
                            className="text-gray-400 hover:text-white" 
                            onClick={(e) => e.stopPropagation()}
                          >
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
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditMember(member);
                              }} 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                            >
                              Edit Info
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleUpdateHours(member);
                              }} 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                            >
                              Edit Working Hours
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAssignServices(member);
                              }} 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                            >
                              Assign Services
                            </button>
                            <button 
                              onClick={(e) => e.stopPropagation()}
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
            </TabsContent>
            
            <TabsContent value="stylists" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {staffMembers
                  .filter(member => member.role.includes('Stylist'))
                  .map((member) => (
                    <div 
                      key={member.id} 
                      className="bg-[#252836] rounded-lg p-4 relative cursor-pointer hover:bg-[#2a2e3d] transition-colors"
                      onClick={() => handleStaffClick(member)}
                    >
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
                            <button 
                              className="text-gray-400 hover:text-white" 
                              onClick={(e) => e.stopPropagation()}
                            >
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
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditMember(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Edit Info
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUpdateHours(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Edit Working Hours
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAssignServices(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Assign Services
                              </button>
                              <button 
                                onClick={(e) => e.stopPropagation()}
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
            </TabsContent>
            
            <TabsContent value="colorists" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {staffMembers
                  .filter(member => member.role.includes('Colorist'))
                  .map((member) => (
                    <div 
                      key={member.id} 
                      className="bg-[#252836] rounded-lg p-4 relative cursor-pointer hover:bg-[#2a2e3d] transition-colors"
                      onClick={() => handleStaffClick(member)}
                    >
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
                            <button 
                              className="text-gray-400 hover:text-white" 
                              onClick={(e) => e.stopPropagation()}
                            >
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
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditMember(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Edit Info
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUpdateHours(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Edit Working Hours
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAssignServices(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Assign Services
                              </button>
                              <button 
                                onClick={(e) => e.stopPropagation()}
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
            </TabsContent>
            
            <TabsContent value="cutters" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {staffMembers
                  .filter(member => member.role.includes('Cutter'))
                  .map((member) => (
                    <div 
                      key={member.id} 
                      className="bg-[#252836] rounded-lg p-4 relative cursor-pointer hover:bg-[#2a2e3d] transition-colors"
                      onClick={() => handleStaffClick(member)}
                    >
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
                            <button 
                              className="text-gray-400 hover:text-white" 
                              onClick={(e) => e.stopPropagation()}
                            >
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
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditMember(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Edit Info
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUpdateHours(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Edit Working Hours
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAssignServices(member);
                                }} 
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                              >
                                Assign Services
                              </button>
                              <button 
                                onClick={(e) => e.stopPropagation()}
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Staff Details Sheet */}
      {selectedMember && (
        <Sheet open={activeSheet === "details"} onOpenChange={() => setActiveSheet("")}>
          <SheetContent className="bg-[#252836] text-white border-gray-700 w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold text-white">Staff Details</SheetTitle>
            </SheetHeader>
            <div className="space-y-6 py-6">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-lg overflow-hidden">
                  <img src={selectedMember.image} alt={selectedMember.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium">{selectedMember.name}</h3>
                  <p className="text-gray-400">{selectedMember.role}</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`w-4 h-4 ${star <= Math.floor(selectedMember.rating) ? "text-yellow-400" : "text-gray-600"}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-gray-400 text-xs">{selectedMember.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-400 text-sm mb-2">Contact Information</h4>
                  <div className="bg-[#1C1E27] p-4 rounded-md">
                    <div className="flex items-center gap-3 mb-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span className="text-gray-300">jessica.waltz@example.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 text-sm mb-2">Working Hours</h4>
                  <div className="bg-[#1C1E27] p-4 rounded-md">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm">Monday - Friday</p>
                        <p className="text-gray-300">9:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Saturday</p>
                        <p className="text-gray-300">10:00 AM - 4:00 PM</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Sunday</p>
                        <p className="text-gray-300">Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 text-sm mb-2">Assigned Services</h4>
                  <div className="bg-[#1C1E27] p-4 rounded-md">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Haircut</span>
                        <span className="text-gray-400">$45</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Hair Coloring</span>
                        <span className="text-gray-400">$85</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Hair Styling</span>
                        <span className="text-gray-400">$35</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  )
}