"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-violet-600 rounded-md mr-2 flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="text-xl font-bold text-gray-900">WinDeck</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/product"
              className={`text-sm font-medium ${isActive("/product") ? "text-violet-600" : "text-gray-700 hover:text-violet-600"}`}
            >
              Product
            </Link>
            <Link
              href="/features"
              className={`text-sm font-medium ${isActive("/features") ? "text-violet-600" : "text-gray-700 hover:text-violet-600"}`}
            >
              Features
            </Link>
            <Link
              href="/solutions"
              className={`text-sm font-medium ${isActive("/solutions") ? "text-violet-600" : "text-gray-700 hover:text-violet-600"}`}
            >
              Solutions
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium ${isActive("/blog") || pathname.startsWith("/blog/") ? "text-violet-600" : "text-gray-700 hover:text-violet-600"}`}
            >
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/waitlist">
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">Join the waitlist</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-violet-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/product"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/product") ? "text-violet-600 bg-violet-50" : "text-gray-700 hover:text-violet-600 hover:bg-violet-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/features"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/features") ? "text-violet-600 bg-violet-50" : "text-gray-700 hover:text-violet-600 hover:bg-violet-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/solutions"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/solutions") ? "text-violet-600 bg-violet-50" : "text-gray-700 hover:text-violet-600 hover:bg-violet-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/blog") || pathname.startsWith("/blog/") ? "text-violet-600 bg-violet-50" : "text-gray-700 hover:text-violet-600 hover:bg-violet-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-4">
              <Link href="/waitlist" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Join the waitlist</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

