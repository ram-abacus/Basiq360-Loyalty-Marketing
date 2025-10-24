import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basiq360-logo-5H2ZyKb4cymhSD7ncw40EqIBkGe0ht.png"
              alt="Basiq360 Logo"
              width={160}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-slate-600 mb-4">Digitize. Automate. Grow.</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/basiq360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#004bab] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/basiq_360/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#004bab] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/basiq360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#004bab] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/basiq360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#004bab] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCPckcbBKOgoUcyV33FQbg1A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#004bab] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-[#004bab] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.basiq360.com/about"
                  className="text-slate-600 hover:text-[#004bab] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#004bab] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <strong>India</strong>
                <br />
                +91 935 005 9390
              </li>
              <li>
                G1-G3, SSR Corporate Park,
                <br />
                13/6, NH-19,
                <br />
                Faridabad, Haryana 121003
              </li>
              <li>
                <a href="mailto:connect@basiq360.com" className="text-[#004bab] hover:underline">
                  connect@basiq360.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Basiq360. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.basiq360.com/terms-conditions" className="hover:text-[#004bab] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#004bab] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
