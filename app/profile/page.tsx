"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Upload } from "lucide-react";
import { useAppointments } from "@/contexts/AppointmentContext";
import { getRandomAvatar } from "@/lib/utils";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Royal Salons",
    handle: "royalsalons",
    email: "contact@royalsalons.com",
    phone: "+1 234 567 890",
    avatar: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
    language: "English",
    notifications: "Email, SMS",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
    // For now, we just update the local state
  };

  const handleChangeAvatar = () => {
    const newAvatar = getRandomAvatar();
    setProfile(prev => ({ ...prev, avatar: newAvatar }));
  };

  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <div className="flex h-16 items-center justify-between border-b border-zinc-800 px-6">
          <h1 className="text-xl font-semibold text-white">Profile</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-6 rounded-xl border border-zinc-800 bg-white/5 p-6">
              <div className="relative">
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover"
                />
                {isEditing && (
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700"
                    onClick={handleChangeAvatar}
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">{profile.name}</h2>
                <p className="text-[15px] text-zinc-400">@{profile.handle}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6">
              <div className="rounded-xl border border-zinc-800 bg-white/5 p-6">
                <h3 className="mb-4 text-lg font-medium text-white">
                  Business Information
                </h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Business Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="bg-zinc-900"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="handle">Handle</Label>
                    <Input
                      id="handle"
                      value={profile.handle}
                      onChange={(e) => setProfile({ ...profile, handle: e.target.value })}
                      className="bg-zinc-900"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="bg-zinc-900"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="bg-zinc-900"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-white/5 p-6">
                <h3 className="mb-4 text-lg font-medium text-white">
                  Preferences
                </h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <Input
                      id="language"
                      value={profile.language}
                      onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                      className="bg-zinc-900"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notifications">Notification Preferences</Label>
                    <Input
                      id="notifications"
                      value={profile.notifications}
                      onChange={(e) => setProfile({ ...profile, notifications: e.target.value })}
                      className="bg-zinc-900"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              {isEditing && (
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}