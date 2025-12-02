"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { onAuthStateChanged, type User } from "firebase/auth"
import { auth } from "@/lib/firebase"

// Create Auth Context
const AuthContext = createContext<{ user: User | null; loading: boolean }>({
  user: null,
  loading: true,
})

// Auth Provider Component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe() // Cleanup subscription on unmount
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext)
