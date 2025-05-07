import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#14161D] text-white overflow-hidden">
      {/* Header/Navigation */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center gap-2">
             <Image src="/logo.png" alt="ChicChic Artist" width={180} height={180} />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition">Home</Link>
            <Link href="/q-and-a" className="text-white hover:text-blue-400 transition">Q&A</Link>
            <Link href="/about-us" className="text-white hover:text-blue-400 transition">About Us</Link>
            <Link href="/for-business" className="text-blue-400 border-b-2 border-blue-400 pb-1">For Business</Link>
            <Link href="/contact-us" className="text-white hover:text-blue-400 transition">Contact Us</Link>
            <Link href="/faqs" className="text-white hover:text-blue-400 transition">FAQs</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Share Your <span className="text-blue-400">Work</span>,<br />
              Attract <span className="text-gray-300">New</span><br />
              <span className="text-blue-400">Clients</span>, Grow<br />
              Your <span className="text-blue-400">Sales</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-10 animate-slideUp">
              <Link href="/login">
                
              <div className="flex flex-row gap-4">
      <div className="flex items-center justify-center rounded-full bg-black  border-white border-2 px-6 py-3">
        <span className="text-white font-medium text-2xl">Get The App</span>
        <div className="flex ml-5">
         <Image src="/Frame 67.png" alt="ChicChic Artist" width={60} height={60} />
        </div>
      </div>

      {/* Sign In Button */}
      <Link href="/signin">
        <div className="flex items-center justify-center rounded-full bg-transparent border border-gray-600 px-6 py-3">
          <span className="text-white text-2xl font-medium">Sign In</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Link>
    </div>
                </Link>
            </div>
          </div>
          
          <div className="md:w-1/2">
            {/* Image area - will be added by user */}
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center animate-float">
             <Image src="/graphic.png" alt="ChicChic Artist" width={500} height={500} />
              <div className="absolute w-[150px] h-[150px] top-0 right-0 md:w-[200px] md:h-[200px] rounded-full border-2 border-blue-400/20 animate-float-delay">
                {/* Secondary circle */}
              </div>
              <div className="absolute w-[100px] h-[100px] bottom-10 left-10 md:w-[150px] md:h-[150px] rounded-full border-2 border-blue-400/20 animate-float-reverse">
                {/* Third circle */}
              </div>
              
              {/* Animation stars */}
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-10 left-10 animate-twinkle"></div>
              <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-20 right-20 animate-twinkle-delay"></div>
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full right-10 top-1/3 animate-twinkle-slow"></div>
              
              {/* User will add images here */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
