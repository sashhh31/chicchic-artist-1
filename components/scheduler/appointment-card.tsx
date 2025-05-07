"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { X, Check } from "lucide-react";

type AppointmentStatus = "completed" | "booked" | "cancelled";

interface AppointmentCardProps {
  customer: {
    name: string;
    handle: string;
    imageUrl: string;
  };
  service: string;
  time: string;
  status: AppointmentStatus;
  onCancel?: () => void;
  onComplete?: () => void;
}

export function AppointmentCard({
  customer,
  service,
  time,
  status,
  onCancel,
  onComplete,
}: AppointmentCardProps) {
  const statusStyles: Record<AppointmentStatus, string> = {
    completed: "border-emerald-500",
    booked: "border-blue-500",
    cancelled: "border-red-500",
  };

  const badgeStyles: Record<AppointmentStatus, string> = {
    completed: "bg-emerald-500 text-white",
    booked: "bg-blue-500 text-white",
    cancelled: "bg-red-500 text-white",
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-xl bg-white p-3 sm:p-4 shadow-sm overflow-hidden",
        "border-2",
        statusStyles[status]
      )}
    >
      <div
        className={cn(
          "absolute top-0 right-0 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium",
          badgeStyles[status]
        )}
        style={{
          borderRadius: "0 0 0 20px",
          top: "0",
          right: "0",
          zIndex: "1",
        }}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-6 w-6 sm:h-8 sm:w-8 overflow-hidden rounded-full">
            <img
              src={customer.imageUrl}
              alt={customer.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-[13px] sm:text-[15px] font-medium text-zinc-900">{customer.name}</h3>
            <p className="text-[11px] sm:text-[13px] text-zinc-500">@{customer.handle}</p>
          </div>
        </div>
      </div>
      <div className="mt-2 sm:mt-3">
        <p className="text-[13px] sm:text-[15px] font-medium text-zinc-900">{service}</p>
        <div className="mt-1 flex items-center gap-2 text-[11px] sm:text-[13px] text-zinc-500">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-4 sm:h-4"
          >
            <path
              d="M5.33334 1.33334V3.33334"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6667 1.33334V3.33334"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.33334 6.06H13.6667"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 5.66666V11.3333C14 13.3333 13 14.6667 10.6667 14.6667H5.33333C3 14.6667 2 13.3333 2 11.3333V5.66666C2 3.66666 3 2.33334 5.33333 2.33334H10.6667C13 2.33334 14 3.66666 14 5.66666Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            {time}
          </span>
        </div>
      </div>

      {status === "booked" && (
        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex items-center gap-1 sm:gap-2">
          <button
            onClick={onComplete}
            className="rounded-full bg-emerald-50/80 p-1 sm:p-1.5 text-emerald-500 transition-colors hover:bg-emerald-100"
          >
            <Check className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
          <button
            onClick={onCancel}
            className="rounded-full bg-red-50/80 p-1 sm:p-1.5 text-red-500 transition-colors hover:bg-red-100"
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      )}
    </div>
  );
}