"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { getRandomAvatar } from "@/lib/utils";
import { addDays, format } from "date-fns";

interface Customer {
  name: string;
  handle: string;
  imageUrl: string;
}

export interface Appointment {
  id: string;
  customer: Customer;
  service: string;
  time: string;
  status: "completed" | "booked" | "cancelled";
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  cancelAppointment: (appointmentId: string) => void;
  completeAppointment: (appointmentId: string) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

// Helper function to format date and time
const formatDateTime = (date: Date, time: string) => {
  return `${format(date, "dd MMMM")} - ${time}`;
};

// Get current date at midnight for comparison
const today = new Date();
today.setHours(0, 0, 0, 0);

// Generate initial appointments across multiple days
const initialAppointments: Appointment[] = [
  // Past appointments (yesterday)
  {
    id: "1",
    customer: {
      name: "Jerry Brown",
      handle: "jerryb",
      imageUrl: getRandomAvatar(),
    },
    service: "Hair curl & color",
    time: formatDateTime(addDays(today, -1), "9:30 AM"),
    status: "completed",
  },
  {
    id: "2",
    customer: {
      name: "Sarah Wilson",
      handle: "sarahw",
      imageUrl: getRandomAvatar(),
    },
    service: "Hair styling",
    time: formatDateTime(addDays(today, -1), "10:15 AM"),
    status: "cancelled",
  },
  
  // Today's appointments
  {
    id: "3",
    customer: {
      name: "Michael Chen",
      handle: "michaelc",
      imageUrl: getRandomAvatar(),
    },
    service: "Haircut & Beard Trim",
    time: formatDateTime(today, "11:00 AM"),
    status: "booked",
  },
  {
    id: "4",
    customer: {
      name: "Emma Davis",
      handle: "emmad",
      imageUrl: getRandomAvatar(),
    },
    service: "Hair Treatment",
    time: formatDateTime(today, "2:00 PM"),
    status: "booked",
  },
  
  // Tomorrow's appointments
  {
    id: "5",
    customer: {
      name: "Alex Thompson",
      handle: "alext",
      imageUrl: getRandomAvatar(),
    },
    service: "Color Touch-up",
    time: formatDateTime(addDays(today, 1), "10:00 AM"),
    status: "booked",
  },
  {
    id: "6",
    customer: {
      name: "Lisa Wang",
      handle: "lisaw",
      imageUrl: getRandomAvatar(),
    },
    service: "Full Highlights",
    time: formatDateTime(addDays(today, 1), "1:30 PM"),
    status: "booked",
  },
  
  // Day after tomorrow
  {
    id: "7",
    customer: {
      name: "David Miller",
      handle: "davidm",
      imageUrl: getRandomAvatar(),
    },
    service: "Haircut & Styling",
    time: formatDateTime(addDays(today, 2), "9:00 AM"),
    status: "booked",
  },
  {
    id: "8",
    customer: {
      name: "Sophie Martinez",
      handle: "sophiem",
      imageUrl: getRandomAvatar(),
    },
    service: "Hair Extensions",
    time: formatDateTime(addDays(today, 2), "11:30 AM"),
    status: "booked",
  },
  
  // Next week
  {
    id: "9",
    customer: {
      name: "James Wilson",
      handle: "jamesw",
      imageUrl: getRandomAvatar(),
    },
    service: "Premium Haircut",
    time: formatDateTime(addDays(today, 7), "10:00 AM"),
    status: "booked",
  },
];

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  const addAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  const cancelAppointment = (appointmentId: string) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: "cancelled" as const }
          : appointment
      )
    );
  };

  const completeAppointment = (appointmentId: string) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: "completed" as const }
          : appointment
      )
    );
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        cancelAppointment,
        completeAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointments must be used within an AppointmentProvider");
  }
  return context;
}