import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Scissors, Users, User } from "lucide-react"
import { usePathname } from "next/navigation"

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[240px] bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <Link href="/dashboard/appointments" className="flex items-center gap-2">
          <div className="relative ">
            <Image
              src="/logo.png"
              alt="ChicChic Logo"
              width={140}
              height={140}
              className="object-contain ml-5"
            />
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <Link
          href="/dashboard/"
          className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${
            pathname?.includes("/dashboard/") 
              ? "bg-gray-800 text-white" 
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span>Schedules</span>
        </Link>
        <Link
          href="/dashboard/appointments"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            pathname?.includes("/dashboard/appointments") 
              ? "bg-gray-800 text-white" 
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Clock className="w-5 h-5" />
          <span>Appointments</span>
        </Link>
        <Link
          href="/dashboard/services"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            pathname?.includes("/dashboard/services") 
              ? "bg-gray-800 text-white" 
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Scissors className="w-5 h-5" />
          <span>Services</span>
        </Link>
        <Link
          href="/dashboard/staff-members"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            pathname?.includes("/dashboard/staff-members") 
              ? "bg-gray-800 text-white" 
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Staff Members</span>
        </Link>
        <Link
          href="/dashboard/profile"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            pathname?.includes("/dashboard/profile") 
              ? "bg-gray-800 text-white" 
              : "text-gray-400 hover:text-white"
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-md">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700">
            <span className="text-sm font-medium">RS</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Royal Salons</div>
            <div className="text-xs text-gray-400 truncate">royalsalons@gmail.com</div>
          </div>
          <button className="text-gray-400 hover:text-white">
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
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}
