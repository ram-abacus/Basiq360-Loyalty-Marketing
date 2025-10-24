import Link from "next/link"
import { CheckCircle2, Home } from "lucide-react"

export const metadata = {
  title: "Thank You - Basiq360",
  description: "Thank you for your inquiry. We will get in touch with you soon.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6 animate-scale-in">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-slide-up">Thank You!</h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 animate-slide-up animation-delay-100">
              Your inquiry has been sent
            </h2>

            {/* Message */}
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto animate-slide-up animation-delay-200">
              Thanks for your inquiry! We'll get in touch with you soon.
            </p>

            {/* Return Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-up animation-delay-300"
            >
              <Home className="w-5 h-5" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
