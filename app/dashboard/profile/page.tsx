"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Pencil, MapPin, Phone, Globe, Clock } from "lucide-react"
import DashboardSidebar from "@/components/dashboard/sidebar"
import EditProfileImageModal from "@/components/profile/edit-profile-image-modal"
import EditPhoneModal from "@/components/profile/edit-phone-modal"
import EditUsernameModal from "@/components/profile/edit-username-modal"
import EditAddressModal from "@/components/profile/edit-address-modal"
import EditWorkingHoursModal from "@/components/profile/edit-working-hours-modal"

export default function ProfilePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const closeModal = () => {
    setActiveModal(null)
  }

  const openModal = (modalName: string) => {
    setActiveModal(modalName)
  }

  return (
    <div className="flex h-screen bg-[#111827] text-white">
      <DashboardSidebar />

      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Profile</h1>

          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold">Royal Salons</h2>
                  <Button variant="ghost" size="icon" className="rounded-full" onClick={() => openModal("username")}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-gray-400 mb-1">royalsaons</p>
                <p className="text-gray-400 mb-4">hello@royalsalons.com</p>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Posts</p>
                    <p className="text-xl font-bold">87</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Following</p>
                    <p className="text-xl font-bold">233k</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Followers</p>
                    <p className="text-xl font-bold">233k</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Ratings</p>
                    <p className="text-xl font-bold text-amber-500">4.2</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="flex justify-between w-full">
                    <p className="text-gray-300">A-435, North cartel street, Queens Road, AED ED3 United Kingdom</p>
                    <Button variant="ghost" size="icon" className="rounded-full" onClick={() => openModal("address")}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Profile"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                    onClick={() => openModal("profileImage")}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium mb-3">About</h3>
            <p className="text-gray-300 mb-6">
              The platform includes a profile page for designers that starts with a cover image and navigation tools at
              the top. Below, you'll find essential information about the designer, such as their avatar, name, brief
              description, and stats on followers, following, and likes. Further down, the designer's works are
              prominently displayed, offering a comprehensive view of their portfolio.
              <br />
              <br />
              The color palette embraces a classic black-and-white scheme, integrating bright elements to spotlight key
              clickable features. Each type of award is also given a distinct color, adding a touch of vibrancy and
              making the interface engaging while maintaining a clean aesthetic.
            </p>

            <div className="flex items-start gap-2 mb-4">
              <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex justify-between w-full">
                <p className="text-gray-300">+91 7876756543</p>
                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => openModal("phone")}>
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-4">
              <Globe className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">www.royalchallengers.com</p>
            </div>

            <div className="flex items-start gap-2">
              <Clock className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex justify-between w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                  <div className="bg-gray-700 rounded-md p-2 text-center">
                    <p className="text-xs text-gray-400">Mon</p>
                    <p className="text-sm">09:30 AM - 08:00 PM</p>
                  </div>
                  <div className="bg-gray-700 rounded-md p-2 text-center">
                    <p className="text-xs text-gray-400">Tue</p>
                    <p className="text-sm">09:30 AM - 08:00 PM</p>
                  </div>
                  <div className="bg-gray-700 rounded-md p-2 text-center">
                    <p className="text-xs text-gray-400">Wed</p>
                    <p className="text-sm">09:30 AM - 08:00 PM</p>
                  </div>
                  <div className="bg-gray-700 rounded-md p-2 text-center">
                    <p className="text-xs text-gray-400">Thu</p>
                    <p className="text-sm">09:30 AM - 08:00 PM</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full ml-2"
                  onClick={() => openModal("workingHours")}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Portfolio</h3>
              <Button variant="outline" className="text-sm">
                Add New
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tHdYvFZ6aWdHEZ9QLVmW7EGaVYuWXZ.png"
                  alt="Portfolio item"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3JeJUq5CY7PgxrSt5cqPUBh3tE1ohR.png"
                  alt="Portfolio item"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JEaFeIeDV549cbh3MEug1xprX8UpKj.png"
                  alt="Portfolio item"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tHdYvFZ6aWdHEZ9QLVmW7EGaVYuWXZ.png"
                  alt="Portfolio item"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg bg-gray-700 flex items-center justify-center">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </Button>
              </div>
              <div className="aspect-square rounded-lg bg-gray-700 flex items-center justify-center">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {activeModal === "profileImage" && <EditProfileImageModal onClose={closeModal} />}
      {activeModal === "phone" && <EditPhoneModal onClose={closeModal} />}
      {activeModal === "username" && <EditUsernameModal onClose={closeModal} />}
      {activeModal === "address" && <EditAddressModal onClose={closeModal} />}
      {activeModal === "workingHours" && <EditWorkingHoursModal onClose={closeModal} />}
    </div>
  )
}
