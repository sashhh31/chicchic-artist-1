"use client";

import React from "react";
import { User, History, Bell, ShoppingBag, DivideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType<{ className?: string }>;
}

const navigation: NavigationItem[] = [
  { 
    name: "Scheduler", 
    href: "/",
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  { 
    name: "Previous Bookings", 
    href: "/previous-bookings",
    icon: History,
  },
  { 
    name: "Profile", 
    href: "/profile",
    icon: User,
  },
  { 
    name: "Notification", 
    href: "/notifications",
    icon: Bell,
  },
];

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Esther Howard",
    role: "COORDINATOR",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Jacob Jones",
    role: "MANAGER",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
  },
  {
    name: "Cody Fisher",
    role: "TEAM LEAD",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-3 left-3 h-10 w-10 rounded-full bg-zinc-800 lg:hidden z-50"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "transition-transform duration-300",
            mobileOpen && "rotate-180"
          )}
        >
          <path
            d={mobileOpen ? "M6 6L14 14M6 14L14 6" : "M4 5h12M4 10h12M4 15h12"}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

      {/* Mobile Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar Container */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 bg-[#201F1F] transition-all duration-300 ease-in-out z-40 lg:sticky lg:top-0 lg:translate-x-0 flex flex-col",
          collapsed ? "w-20" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Content */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Header */}
          <div className="flex h-16 items-center gap-3 px-4 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-7 w-7 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
                  alt="Royal Salons"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={cn(
                "flex items-center gap-2 transition-opacity duration-200",
                collapsed ? "opacity-0 w-0" : "opacity-100"
              )}>
                <div>
                  <h2 className="text-[13px] font-medium text-white whitespace-nowrap">Royal Salons</h2>
                  <p className="text-[10px] font-medium text-zinc-500 whitespace-nowrap">HAIR & MAKEUP</p>
                </div>
                <ShoppingBag className="h-4 w-4 text-zinc-400" />
              </div>
            </Link>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 flex flex-col gap-y-8 px-3 py-6 overflow-y-auto">
            <div>
              <div className="horizontal-separator" />
              <p className={cn(
                "mb-6 px-3 text-[11px] font-medium text-zinc-500 transition-opacity duration-200",
                collapsed ? "opacity-0" : "opacity-100"
              )}>
                MAIN
              </p>
              <nav className="flex flex-col gap-4 mb-16">
              {navigation.map((item) => {
  const Icon = item.icon;

  const isActive = pathname === item.href;

  return (
    <Link
      key={item.name}
      href={item.href}
      className={cn(
        "group flex items-center gap-x-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors overflow-hidden",
        isActive
          ? "bg-zinc-800/70 text-white"
          : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white",
        collapsed && "justify-center"
      )}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span
        className={cn(
          "transition-opacity duration-200 whitespace-nowrap",
          collapsed ? "opacity-0 w-0" : "opacity-100"
        )}
      >
        {item.name}
      </span>
    </Link>
  );
})}


              </nav>
            </div>

            <div className={cn(
              "transition-opacity duration-200",
              collapsed ? "opacity-0 hidden" : "opacity-100"
            )}>
              <div className="horizontal-separator" />
              <div>
                <p className="mb-6 px-3 text-[11px] font-medium text-zinc-500">
                  TEAM MEMBERS
                </p>
                <ul role="list" className="flex flex-col gap-4">
                  {teamMembers.map((person) => (
                    <li key={person.name}>
                      <button
                        className="group flex w-full items-center gap-x-3 rounded-lg px-3 py-2 text-[13px] font-medium text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-white"
                      >
                        <div className="h-5 w-5 overflow-hidden rounded-full shrink-0">
                          <img
                            src={person.imageUrl}
                            alt={person.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <p className="text-[13px] leading-none whitespace-nowrap">{person.name}</p>
                          <p className="mt-1 text-[10px] font-medium text-zinc-500 whitespace-nowrap">{person.role}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Right Border */}
        <div className="sidebar-right-separator absolute right-0 top-0 bottom-0" />

        {/* Collapse Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-6 h-8 w-8 rounded-full bg-zinc-800"
          onClick={() => setCollapsed(!collapsed)}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={cn(
              "transition-transform duration-300",
              collapsed && "rotate-180"
            )}
          >
            <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </>
  );
}