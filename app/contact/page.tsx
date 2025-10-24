import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { HubSpotForm } from "@/components/hubspot-form"

export const metadata: Metadata = {
  title: "Contact Us - Basiq360",
  description:
    "Get in touch with Basiq360. Book a demo, request support, or learn how our loyalty marketing solutions can help grow your business.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#004bab]/10 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Get in Touch with Our Team
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Have questions about the Basiq360 platform? Need support or want to explore how our CRM and loyalty
              marketing solutions can help grow your business? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-slate-600 leading-relaxed">
                  Reach out to us through any of the following channels. Our team is ready to help you transform your
                  loyalty program into a growth engine.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#004bab]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#004bab]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-slate-600 mb-1">India</p>
                      <a href="tel:+919350059390" className="text-[#004bab] font-medium hover:underline">
                        +91 935 005 9390
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#004bab]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#004bab]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                      <p className="text-slate-600 mb-2">For support, please email us at:</p>
                      <a href="mailto:connect@basiq360.com" className="text-[#004bab] font-medium hover:underline">
                        connect@basiq360.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#004bab]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#004bab]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                      <p className="text-slate-600 leading-relaxed">
                        G1-G3, SSR Corporate Park,
                        <br />
                        13/6, NH-19,
                        <br />
                        Faridabad, Haryana 121003
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="rounded-2xl bg-gradient-to-br from-[#004bab] to-[#0f6ad1] p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Schedule a Demo</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Product questions? Book a demo with our team and see how Basiq360 can transform your loyalty program.
                </p>
                <Link
                  href="#contact-form"
                  className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-[#004bab] hover:bg-slate-100 transition-colors"
                >
                  Book Your Demo
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="rounded-3xl border border-slate-200 p-8 shadow-lg bg-white">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <HubSpotForm portalId="242830238" formId="8597f18e-a55f-4eb9-8e02-76699be2124a" region="na2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
