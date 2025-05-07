"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { AppointmentCard } from "@/components/scheduler/appointment-card";
import { Calendar as CalendarIcon, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppointments } from "@/contexts/AppointmentContext";
import { getRandomAvatar, sortAppointmentsByDate } from "@/lib/utils";
import DashboardSidebar from "@/components/dashboard/sidebar";
const timeSlots = [
  "9:00 AM",
  "9:05 AM",
  "9:10 AM",
  "9:15 AM",
  "9:20 AM",
  "9:25 AM",
  "9:30 AM",
  "9:35 AM",
  "9:40 AM",
  "9:45 AM",
  "9:50 AM",
  "9:55 AM",
  "10:00 AM",
  "10:05 AM",
  "10:10 AM",
  "10:15 AM",
  "10:20 AM",
  "10:25 AM",
  "10:30 AM",
  "10:35 AM",
  "10:40 AM",
  "10:45 AM",
  "10:50 AM",
  "10:55 AM",
  "11:00 AM",
  "11:05 AM",
  "11:10 AM",
  "11:15 AM",
  "11:20 AM",
  "11:25 AM",
  "11:30 AM",
  "11:35 AM",
  "11:40 AM",
  "11:45 AM",
  "11:50 AM",
  "11:55 AM",
  "12:00 PM",
  "12:05 PM",
  "12:10 PM",
  "12:15 PM",
  "12:20 PM",
  "12:25 PM",
  "12:30 PM",
  "12:35 PM",
  "12:40 PM",
  "12:45 PM",
  "12:50 PM",
  "12:55 PM",
  "1:00 PM",
  "1:05 PM",
  "1:10 PM",
  "1:15 PM",
  "1:20 PM",
  "1:25 PM",
  "1:30 PM",
  "1:35 PM",
  "1:40 PM",
  "1:45 PM",
  "1:50 PM",
  "1:55 PM",
  "2:00 PM",
];

const displayTimeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
];

type AppointmentStatus = "all" | "completed" | "booked" | "cancelled";

const timeToMinutes = (time: string) => {
  const [hourStr, minuteStr] = time.split(":");
  const [hour, period] = hourStr.split(" ");
  let minutes = parseInt(minuteStr);
  let hourNum = parseInt(hour);
  
  if (period === "PM" && hourNum !== 12) {
    hourNum += 12;
  } else if (period === "AM" && hourNum === 12) {
    hourNum = 0;
  }
  
  return hourNum * 60 + minutes;
};

const isPastDate = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

export default function Home() {
  const { appointments, addAppointment, cancelAppointment, completeAppointment } = useAppointments();
  const [date, setDate] = useState<Date>(new Date());
  const [selectedStatus, setSelectedStatus] = useState<AppointmentStatus>("all");
  const [newAppointment, setNewAppointment] = useState({
    customerName: "",
    customerHandle: "",
    service: "",
    time: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookAppointment = () => {
    const appointment = {
      id: Math.random().toString(36).substr(2, 9),
      customer: {
        name: newAppointment.customerName,
        handle: newAppointment.customerHandle,
        imageUrl: getRandomAvatar(),
      },
      service: newAppointment.service,
      time: `${format(date, "dd MMMM")} - ${newAppointment.time}`,
      status: "booked" as const,
    };

    addAppointment(appointment);
    setNewAppointment({
      customerName: "",
      customerHandle: "",
      service: "",
      time: "",
    });
    setIsDialogOpen(false);
  };

  const filteredAppointments = appointments.filter((appointment) =>
    selectedStatus === "all" ? true : appointment.status === selectedStatus
  );

  const bookedTimeSlots = appointments
    .filter(appointment => {
      const [appointmentDate] = appointment.time.split(" - ");
      return appointmentDate === format(date, "dd MMMM") && appointment.status === "booked";
    })
    .map(appointment => {
      const [, time] = appointment.time.split(" - ");
      return time;
    });

  const groupAppointmentsByTimeSlot = (appointments: any[]) => {
    const grouped = {} as Record<string, any[]>;
    appointments.forEach(appointment => {
      const [, time] = appointment.time.split(" - ");
      const timeComponents = time.split(":");
      const hour = parseInt(timeComponents[0]);
      const isPM = time.includes("PM");
      const normalizedHour = (isPM && hour !== 12 ? hour + 12 : hour).toString();
      const slotKey = `${normalizedHour}:00`;
      if (!grouped[slotKey]) {
        grouped[slotKey] = [];
      }
      grouped[slotKey].push(appointment);
    });
    return grouped;
  };

  const getTimeSlotHeight = (appointments: any[]) => {
    if (!appointments || appointments.length === 0) return 180;
    const rows = Math.ceil(appointments.length / 5);
    return rows * 180;
  };

  const groupedAppointments = groupAppointmentsByTimeSlot(filteredAppointments);

  return (
    <>
      <div className="flex min-h-screen flex-col lg:flex-row bg-zinc-950">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex h-16 items-center justify-between border-b border-zinc-800 px-3 sm:px-4 lg:px-6">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-700 text-[16px] font-semibold text-white px-5 py-2 shadow-sm hover:bg-zinc-800 focus:ring-2 focus:ring-purple-500 min-w-[220px]"
                  >
                    <CalendarIcon className="h-5 w-5 mr-2 text-purple-400" />
                    <span>{format(date, "EEE, MMMM dd")}</span>
                    <svg className="ml-2 h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" sideOffset={8} className="w-[340px] p-0 rounded-xl bg-[#18181c] border border-zinc-700 shadow-2xl mt-2">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    disabled={isPastDate}
                    initialFocus
                    className="rounded-xl bg-transparent px-4 pb-4 pt-2 text-white"
                    classNames={{
                      months: "space-y-4",
                      month: "space-y-4",
                      caption: "flex justify-center pt-1 relative items-center text-lg font-semibold text-white mb-2",
                      caption_label: "text-base font-semibold text-white",
                      nav: "space-x-1 flex items-center absolute right-4 top-2",
                      nav_button: "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100",
                      nav_button_previous: "",
                      nav_button_next: "",
                      table: "w-full border-collapse space-y-1",
                      head_row: "flex text-purple-500",
                      head_cell: "text-zinc-500 rounded-md w-9 font-normal text-[0.9rem]",
                      row: "flex w-full mt-2",
                      cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-transparent",
                      day: "h-9 w-9 p-0 font-normal rounded-full hover:bg-zinc-800/50 aria-selected:opacity-100",
                      day_selected:
                        "bg-purple-600 text-white hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white before:absolute before:inset-0 before:rounded-full before:bg-purple-600/20 before:-m-1",
                      day_today: "bg-zinc-800/50 text-white rounded-full",
                      day_outside: "text-zinc-500 opacity-50",
                      day_range_middle: "aria-selected:bg-zinc-800/50 aria-selected:text-white",
                    }}
                  />
                </PopoverContent>
              </Popover>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-full bg-white text-black hover:bg-gray-100 whitespace-nowrap">
                    <Plus className="h-4 w-4 lg:h-5 lg:w-5 sm:mr-2" />
                    <span className="hidden sm:inline">Book Appointment</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Book New Appointment</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Customer Name</Label>
                      <Input
                        id="name"
                        value={newAppointment.customerName}
                        onChange={(e) =>
                          setNewAppointment({
                            ...newAppointment,
                            customerName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="handle">Customer Handle</Label>
                      <Input
                        id="handle"
                        value={newAppointment.customerHandle}
                        onChange={(e) =>
                          setNewAppointment({
                            ...newAppointment,
                            customerHandle: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="service">Service</Label>
                      <Input
                        id="service"
                        value={newAppointment.service}
                        onChange={(e) =>
                          setNewAppointment({
                            ...newAppointment,
                            service: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Select
                        value={newAppointment.time}
                        onValueChange={(value) =>
                          setNewAppointment({ ...newAppointment, time: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem 
                              key={time} 
                              value={time}
                              disabled={bookedTimeSlots.includes(time)}
                            >
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={handleBookAppointment}>Book</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <Select
                value={selectedStatus}
                onValueChange={(value) => setSelectedStatus(value as AppointmentStatus)}
              >
                <SelectTrigger className="w-[120px] sm:w-[140px] lg:w-[200px] rounded-full bg-zinc-900 text-[13px] lg:text-[15px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Appointments</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="booked">Booked</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Settings className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-white/5">
            <div className="min-h-full p-2 sm:p-4 lg:p-6">
              <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-1.5 sm:gap-2 lg:gap-3">
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-1.5">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-emerald-500">Completed</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-1.5">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-blue-500">Booked</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-1.5">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-red-500">Cancelled</span>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-4 lg:gap-6">
                <div className="w-12 sm:w-16 lg:w-24 shrink-0">
                  {displayTimeSlots.map((time) => (
                    <div 
                      key={time} 
                      className="text-[10px] sm:text-xs lg:text-sm font-medium text-zinc-400"
                      style={{
                        height: getTimeSlotHeight(groupedAppointments[time.split(":")[0] + ":00"] || [])
                      }}
                    >
                      {time}
                    </div>
                  ))}
                </div>
                
                <div className="flex-1 min-w-0">
                  {displayTimeSlots.map((timeSlot) => {
                    const hour = timeSlot.split(":")[0];
                    const isPM = timeSlot.includes("PM");
                    const normalizedHour = (isPM && hour !== "12" ? parseInt(hour) + 12 : hour).toString();
                    const slotKey = `${normalizedHour}:00`;
                    const appointments = groupedAppointments[slotKey] || [];
                    
                    return (
                      <div 
                        key={timeSlot} 
                        className="relative"
                        style={{
                          height: getTimeSlotHeight(appointments)
                        }}
                      >
                        <div className="absolute inset-x-0 top-0 border-t border-dashed border-white/20" />
                        <div className="absolute inset-x-0 top-4 bottom-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1">
                            {appointments.map((appointment, index) => (
                              <div key={index} className="px-0.5">
                                <AppointmentCard 
                                  {...appointment} 
                                  onCancel={
                                    appointment.status === "booked" 
                                      ? () => cancelAppointment(appointment.id)
                                      : undefined
                                  }
                                  onComplete={
                                    appointment.status === "booked"
                                      ? () => completeAppointment(appointment.id)
                                      : undefined
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}