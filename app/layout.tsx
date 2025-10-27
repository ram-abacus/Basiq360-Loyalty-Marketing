import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import CookieConsent from "@/components/CookieConsent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Basiq360 - Loyalty Program Marketing Solutions",
  description:
    "Grow your loyalty network faster with 360° marketing. From app downloads to dealer onboarding—turn your loyalty program into a growth engine with data-driven campaigns.",
  keywords: "loyalty program, marketing automation, dealer onboarding, CRM, app promotion, customer retention",
  openGraph: {
    title: "Basiq360 - Loyalty Program Marketing Solutions",
    description: "Grow your loyalty network faster with 360° marketing solutions",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
        />
        <link rel="icon" type="image/webp" href="fevicon.webp" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  )
}
