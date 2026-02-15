"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/strata-pm-logo.jpg"
            alt="The Strata PM - Remediation Project Management"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Contact
          </Link>
          <Link href="/contact">
            <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-gray-900">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
