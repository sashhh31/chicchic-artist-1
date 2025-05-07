"use client";

import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "appointment" | "reminder" | "system";
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Appointment Confirmed",
    message: "Your appointment for Hair curl & color has been confirmed for tomorrow at 9:30 AM",
    time: "2 hours ago",
    type: "appointment",
    read: false,
  },
  {
    id: "2",
    title: "Appointment Reminder",
    message: "Don't forget your appointment with Esther Howard tomorrow",
    time: "5 hours ago",
    type: "reminder",
    read: false,
  },
  {
    id: "3",
    title: "System Update",
    message: "We've updated our booking system with new features",
    time: "1 day ago",
    type: "system",
    read: true,
  },
];

export default function Notifications() {
  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <div className="flex h-16 items-center justify-between border-b border-zinc-800 px-6">
          <h1 className="text-xl font-semibold text-white">Notifications</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid gap-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-xl border ${
                  notification.read
                    ? "border-zinc-800 bg-white/5"
                    : "border-purple-500/20 bg-purple-500/5"
                } p-4`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[15px] font-medium text-white">
                      {notification.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-zinc-400">
                      {notification.message}
                    </p>
                    <p className="mt-2 text-[13px] text-zinc-500">
                      {notification.time}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}