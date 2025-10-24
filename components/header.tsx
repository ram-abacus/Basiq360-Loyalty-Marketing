"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basiq360-logo-5H2ZyKb4cymhSD7ncw40EqIBkGe0ht.png"
              alt="Basiq360 Logo"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/#solutions" className="text-slate-700 hover:text-[#004bab] transition-colors">
              Solutions
            </Link>
            <Link href="/#approach" className="text-slate-700 hover:text-[#004bab] transition-colors">
              Approach
            </Link>
            <Link href="/#industries" className="text-slate-700 hover:text-[#004bab] transition-colors">
              Industries
            </Link>
            <Link href="/#case" className="text-slate-700 hover:text-[#004bab] transition-colors">
              Case Study
            </Link>
            <Link href="/#faq" className="text-slate-700 hover:text-[#004bab] transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-[#004bab] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              Talk to Us
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-[#FFA500] px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-[#e69500] transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              <Link
                href="/#solutions"
                className="text-slate-700 hover:text-[#004bab] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/#approach"
                className="text-slate-700 hover:text-[#004bab] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Approach
              </Link>
              <Link
                href="/#industries"
                className="text-slate-700 hover:text-[#004bab] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/#case"
                className="text-slate-700 hover:text-[#004bab] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Study
              </Link>
              <Link
                href="/#faq"
                className="text-slate-700 hover:text-[#004bab] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-[#004bab] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/contact"
                  className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-center hover:bg-slate-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Talk to Us
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#FFA500] px-4 py-2 text-sm font-semibold text-slate-900 text-center hover:bg-[#e69500] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
