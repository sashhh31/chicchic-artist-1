import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { AppointmentProvider } from '@/contexts/AppointmentContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Royal Salons - Scheduler',
  description: 'Salon appointment scheduling system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <AppointmentProvider>
            {children}
          </AppointmentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}