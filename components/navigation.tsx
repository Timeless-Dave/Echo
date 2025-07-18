"use client"

import { Shield, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white dark:bg-black text-gray-900 dark:text-white shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">ECHO</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-700 dark:text-white hover:text-echo-trust dark:hover:text-gray-300 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/safety"
              className="text-gray-700 dark:text-white hover:text-echo-trust dark:hover:text-gray-300 transition-colors font-medium"
            >
              Safety
            </Link>
            <Link
              href="/reports"
              className="text-gray-700 dark:text-white hover:text-echo-trust dark:hover:text-gray-300 transition-colors font-medium"
            >
              Reports
            </Link>
              <Link
              href="/contact"
              className="text-gray-700 dark:text-white hover:text-echo-trust dark:hover:text-gray-300 transition-colors font-medium"
              >
              Contact us
              </Link>
          </div>

          {/* Right Side - Theme Toggle and Blow Whistle CTA */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/submit">
              <Button 
                className="bg-echo-alert hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md transition-colors flex items-center gap-2 shadow-lg"
              >
                <Volume2 className="h-4 w-4" />
                <span className="hidden sm:inline">Speak Out</span>
                        </Button>
                      </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
