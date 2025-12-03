"use client";

import { useAuth } from "@/components/auth-provider";
import { SignOutButton } from "@/components/auth-buttons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Calendar, Mail, Shield, User } from "lucide-react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect to sign-in if user is not authenticated
  useEffect(() => {
    if (!user && !loading) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-transparent border-teal-400 rounded-full animate-spin mx-auto mb-4">
          </div>
          <p className="text-white text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard if user is not authenticated (will redirect)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Dashboard</h1>
            </div>
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mt-8">
          <div className="glass-effect rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome to your Dashboard! 🎉
            </h2>
            <p className="text-gray-300">
              You have successfully signed in with Firebase Authentication. This
              is where your main application content would go.
            </p>
          </div>
        </div>
       {/* User Profile Card */}
          <div className="lg:col-span-1">
            <div className="auth-card rounded-xl p-6">
              <div className="text-center">
                {user.photoURL && (
                  <img
                    src={user.photoURL || "/placeholder.svg"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-400"
                  />
                )}
                <h2 className="text-xl font-bold text-white mb-2">
                  {user.displayName || "User"}
                </h2>
                <p className="text-gray-400 mb-4">{user.email}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      User ID
                    </span>
                    <span className="text-gray-300 font-mono text-xs">
                      {user.uid}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Verified
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        user.emailVerified
                          ? "bg-green-900 text-green-300"
                          : "bg-yellow-900 text-yellow-300"
                      }`}
                    >
                      {user.emailVerified ? "Verified" : "Pending"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Last Sign In
                    </span>
                    <span className="text-gray-300 text-xs">
                      {user.metadata.lastSignInTime
                        ? new Date(user.metadata.lastSignInTime)
                          .toLocaleDateString()
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Details JSON */}
          <div className="lg:col-span-2">
            <div className="auth-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-300 mb-4">
                Complete User Details (JSON)
              </h3>
              <div className="bg-gray-900/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-200 whitespace-pre-wrap break-all">
                  {JSON.stringify(user.toJSON(), null, 2)}
                </pre>
              </div>
            </div>
          </div>
 
      </main>
    </div>
  );
}
