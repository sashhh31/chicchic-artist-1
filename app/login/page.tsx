import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#111827] flex ">
      {/* Left side with image and floating cards */}
      <div className="flex-1 ml-40 relative overflow-hidden">
        <Image
          src="/Frame 289323.png"
          alt="Hairstylist working"
          width={490}
          height={500}
          className=" object-contain"
        />
        
        {/* Overlay gradient */}
        
        {/* Logo in top-left corner */}
      
        
        {/* Floating cards */}
       
      </div>

      {/* Right side with login form */}
      <div className="w-[500px] mr-40 flex items-center justify-center px-10 bg-[#111827]">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold text-white mb-6">Login</h1>
          
          <form className="space-y-4">
            {/* Email input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-100">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                  </svg>
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="pl-10 py-5 bg-gray-700 border-gray-700 text-white rounded-2xl w-full"
                />
              </div>
            </div>
            
            {/* Password input */}
            <div className="space-y-2 items-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-100">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="pl-10 py-5 bg-gray-700 border-gray-700 text-white rounded-2xl w-full"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>
            </div>

            {/* Sign in button */}
            <Link href="/dashboard">
              <div className="flex justify-center">

            <Button className="w-1/2 self-center bg-blue-500 hover:bg-blue-600 py-5 text-white font-medium rounded-full mt-4">
              Sign In
            </Button>
            </div>
            </Link>
            
            {/* Social logins */}
            <div className="mt-6 space-y-4">
              <button
                type="button"
                className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-center rounded-lg"
              >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" strokeWidth="0" className="mr-2">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.883-1.459 2.33-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
                </svg>
                <span className="text-white">Continue with Apple</span>
              </button>
              
              <button
                type="button"
                className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-center rounded-lg"
              >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-white">Continue with Google</span>
              </button>
            </div>
            
            {/* Create account link */}
            <div className="text-center text-gray-400 mt-6">
              Don't have an account? 
              <Link href="/signup" className="text-blue-500 hover:text-blue-400 ml-1">
                Create New
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}