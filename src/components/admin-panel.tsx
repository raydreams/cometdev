"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authenticateAdmin } from "@/app/actions/blog-actions"
import { BlogEditor } from "@/components/blog-editor"

export function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (formData: FormData) => {
    setIsLoading(true)
    setError("")

    try {
      const result = await authenticateAdmin(formData)
      if (result.success) {
        setIsAuthenticated(true)
      } else {
        setError(result.error || "Authentication failed")
      }
    } catch (err) {
      setError("Authentication failed")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-black font-bold text-2xl">C</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
            <p className="text-gray-400">Access the Comet Client admin panel</p>
          </div>

          <form action={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <Input
                id="username"
                name="username"
                required
                className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400"
                placeholder="Enter password"
              />
            </div>

            {error && <div className="text-red-400 text-sm text-center">{error}</div>}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black hover:bg-gray-200 rounded-2xl py-3 font-semibold"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return <BlogEditor onLogout={() => setIsAuthenticated(false)} />
}
