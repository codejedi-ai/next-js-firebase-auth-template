"use client"

import { useAuth } from "@/components/firebase-auth-provider"
import { SignInWithGoogleButton } from "@/components/auth-components"
import { User, Shield, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SignInPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  // Redirect to dashboard if user is already signed in
  useEffect(() => {
    if (user && !loading) {
      router.push("/dashboard")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-transparent border-teal-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render sign-in page if user is authenticated (will redirect)
  if (user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Main Sign-In Card */}
        <div className="auth-card rounded-2xl p-8 shadow-2xl">
          {/* Logo/Brand Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to access your account</p>
          </div>

          {/* Sign-In Button */}
          <div className="space-y-4">
            <SignInWithGoogleButton />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">Secure Authentication</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-3 mt-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <User className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Secure user authentication</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Shield className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Protected with Firebase</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Zap className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Fast and reliable</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">By signing in, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 text-center">
          <div className="glass-effect rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              New to our platform? Your account will be created automatically upon first sign-in.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
