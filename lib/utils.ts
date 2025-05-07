import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Array of professional avatar URLs from Unsplash
const avatarUrls = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9"
];

export function getRandomAvatar(): string {
  return avatarUrls[Math.floor(Math.random() * avatarUrls.length)];
}

export function sortAppointmentsByDate(appointments: any[], ascending: boolean = false) {
  return [...appointments].sort((a, b) => {
    const [dateA] = a.time.split(" - ");
    const [dateB] = b.time.split(" - ");
    const timeA = new Date(dateA + " 2024").getTime();
    const timeB = new Date(dateB + " 2024").getTime();
    return ascending ? timeA - timeB : timeB - timeA;
  });
}