# Royal Salons - Appointment Scheduler

A modern, responsive appointment scheduling system built with Next.js 13, TypeScript, and Tailwind CSS. This application helps salon businesses manage their appointments efficiently with a beautiful and intuitive user interface.

![Royal Salons Screenshot](https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&h=630&fit=crop)

## Features

- 📅 Real-time appointment scheduling and management
- 🎨 Beautiful, responsive dark mode UI
- 📱 Mobile-first design with collapsible sidebar
- 👥 Team member management
- 🔔 Notification system
- 📊 Appointment status tracking (Booked, Completed, Cancelled)
- 🗓️ Calendar integration with date picker
- ⏰ Flexible time slot management
- 📱 Responsive layout supporting all screen sizes

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Theme**: next-themes
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/royal-salons.git
cd royal-salons
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
royal-salons/
├── app/                    # Next.js 13 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (Scheduler)
│   ├── notifications/     # Notifications page
│   ├── previous-bookings/ # Previous bookings page
│   └── profile/          # Profile page
├── components/            # React components
│   ├── scheduler/        # Scheduler-specific components
│   ├── ui/              # UI components (shadcn/ui)
│   └── sidebar.tsx      # Sidebar component
├── contexts/             # React contexts
│   └── AppointmentContext.tsx # Appointment state management
├── lib/                  # Utility functions
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## Features in Detail

### Appointment Management
- Create new appointments with customer details
- View appointments by date
- Cancel or complete existing appointments
- Filter appointments by status

### Time Slot Management
- 5-minute interval time slots
- Visual indication of booked slots
- Prevents double booking
- Supports multiple appointments per time slot

### Responsive Design
- Mobile-first approach
- Collapsible sidebar
- Adaptive layout for different screen sizes
- Touch-friendly interface

### Team Management
- View team members
- Role-based display
- Quick access to team information

## Customization

### Theme
The application uses CSS variables for theming. You can customize the colors by modifying the variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... other variables */
}
```

### Time Slots
Modify the time slots in `app/page.tsx`:

```typescript
const timeSlots = [
  "9:00 AM",
  "9:05 AM",
  // ... add or remove time slots
];
```

## Best Practices

- **TypeScript**: Strict type checking enabled
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized images and lazy loading
- **State Management**: Centralized appointment state
- **Code Organization**: Modular component structure
- **Responsive Design**: Mobile-first approach
- **Error Handling**: Graceful error states

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
