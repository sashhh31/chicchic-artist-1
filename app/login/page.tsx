import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  return (
    <div className="max-h-screen bg-[#111827] flex flex-col md:flex-row justify-center items-center mr-40 overflow-y-hidden">
      {/* Image section - left side on desktop, top on mobile */}
      <div className=" md:h-auto md:flex-1 relative overflow-hidden">
        <Image
          src="/Frame 289323.png"
          alt="Hairstylist working"
          width={1000}
          height={100}
          
          className="  mr-10 flex justify-end items-end md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        
        {/* Floating card */}
        <div className="absolute bottom-8 md:bottom-40 right-4 md:right-20  bg-white/10 rounded-lg p-3 max-w-xs ml-40 transform hover:scale-105 transition-all duration-300 shadow-xl">
          <div className="flex items-center gap-3">
              <Image
                src="/Group 9183.png"
                alt="Service thumbnail"
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            <div className="text-white">
              <p className="font-medium text-base">Hair Styling</p>
              <p className="text-xs opacity-80">45 minutes • $35</p>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${i < 4 ? "text-yellow-400" : "text-gray-400"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login form section - right side on desktop, bottom on mobile */}
      <div className="w-full md:w-[550px] bg-[#111827] px-6 py-8 md:py-0 md:flex md:flex-col md:justify-center mr-80 md:p-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Login</h1>
          <p className="text-gray-400">Welcome back! Please enter your details.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                  <polyline points="15,9 18,9 18,11"></polyline>
                  <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                  <line x1="6" y1="10" x2="7" y2="10"></line>
                </svg>
              </div>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10 bg-gray-900 border-gray-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 bg-gray-900 border-gray-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-gray-600 data-[state=checked]:bg-blue-600" />
              <label htmlFor="remember" className="text-sm text-gray-400">
                Remember for 30 days
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-400 transition-colors">
              Forgot password?
            </Link>
          </div>
<Link href="/dashboard">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-5">Sign in</Button>
</Link>

          <div className="text-center text-sm text-gray-400 mt-2">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:text-blue-400 transition-colors font-medium">
              Sign up
            </Link>
          </div>
        </form>

        <div className="mt-8">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#111827] px-4 text-sm text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <Link
              href="#"
              className="w-full h-11 rounded-md bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="w-full h-11 rounded-md bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="w-full h-11 rounded-md bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
