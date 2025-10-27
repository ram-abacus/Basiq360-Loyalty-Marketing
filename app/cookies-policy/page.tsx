"use client"
import Link from "next/link"
import { Cookie, Shield, BarChart3, Settings, Sparkles, Mail, Calendar, ArrowRight } from 'lucide-react';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-2xl shadow-lg">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900">Cookie Policy</h1>
              <p className="text-gray-600 mt-2 text-lg">Last Updated: October 27, 2025</p>
            </div>
          </div>
          <p className="text-gray-700 text-xl mt-6 max-w-3xl leading-relaxed">
            This Cookie Policy explains how Basiq360 uses cookies and similar technologies when you visit our website. We believe in transparency and your right to control your data.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">What Are Cookies?</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and improving our services.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Cookies typically contain the name of the website they come from, their storage time on your device, and a unique identifier. At Basiq360, we are committed to transparency about how we use these technologies.
            </p>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Types of Cookies We Use</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Necessary Cookies */}
            <div className="bg-white border-2 border-green-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 bg-green-100 rounded-2xl">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Necessary Cookies</h3>
                  <span className="text-xs text-green-700 font-semibold px-3 py-1 bg-green-100 rounded-full">
                    Always Active
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies as they are necessary for the website to work.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 bg-blue-100 rounded-2xl">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                  <span className="text-xs text-blue-700 font-semibold px-3 py-1 bg-blue-100 rounded-full">
                    Optional
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website's functionality and user experience.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 bg-purple-100 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                  <span className="text-xs text-purple-700 font-semibold px-3 py-1 bg-purple-100 rounded-full">
                    Optional
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                These cookies are used to track visitors across websites to display relevant and engaging advertisements tailored to your interests. They help us measure the effectiveness of our advertising campaigns.
              </p>
            </div>

            {/* Preference Cookies */}
            <div className="bg-white border-2 border-indigo-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 bg-indigo-100 rounded-2xl">
                  <Settings className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Preference Cookies</h3>
                  <span className="text-xs text-indigo-700 font-semibold px-3 py-1 bg-indigo-100 rounded-full">
                    Optional
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                These cookies enable our website to remember your preferences and settings, such as your language preference, region, and other customization options for a personalized experience.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-8">How We Use Cookies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Provide Our Services</h4>
                  <p className="text-blue-50">Enable core functionality and security features of our website and mobile application.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Improve Experience</h4>
                  <p className="text-blue-50">Remember your preferences and settings for a seamless experience across sessions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Analyze Performance</h4>
                  <p className="text-blue-50">Track website usage patterns to understand what works well and identify improvements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Security</h4>
                  <p className="text-blue-50">Detect and prevent fraudulent activity, abuse, and security threats on our platform.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Marketing</h4>
                  <p className="text-blue-50">Deliver personalized content and advertisements relevant to your interests.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Optimize Campaigns</h4>
                  <p className="text-blue-50">Measure campaign effectiveness and ROI across multiple channels.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Managing Your Cookie Preferences</h2>
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-10 shadow-lg">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              You have the right to decide whether to accept or reject cookies. When you first visit our website, you'll see a cookie consent banner that allows you to choose which types of cookies you want to accept.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You can also control cookies through your web browser settings. Most browsers allow you to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">View and delete cookies stored on your device</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Block third-party cookies</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Block cookies from specific websites</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Delete all cookies when you close your browser</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-gray-900 mb-2 text-lg">Google Chrome</p>
                <p className="text-gray-600 text-sm">Settings → Privacy and Security → Cookies and other site data</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-gray-900 mb-2 text-lg">Mozilla Firefox</p>
                <p className="text-gray-600 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-gray-900 mb-2 text-lg">Safari</p>
                <p className="text-gray-600 text-sm">Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-gray-900 mb-2 text-lg">Microsoft Edge</p>
                <p className="text-gray-600 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
              <p className="text-gray-700 text-sm italic">
                <strong>Please note:</strong> If you disable cookies, some features of our website may not function properly, and you may not be able to access certain sections of the site.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-10 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              In addition to our own cookies, we may use third-party cookies from trusted partners to help us analyze website usage and deliver targeted advertising. These third parties may collect information about your online activities over time and across different websites.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We work with reputable third-party service providers who comply with applicable data protection laws. However, we do not control the cookies placed by these third parties, and you should review their privacy policies to understand how they use your information.
            </p>
          </div>
        </section>

        {/* Updates to Policy */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border-2 border-blue-100">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-blue-600 rounded-2xl flex-shrink-0">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. When we make significant changes, we will update the "Last Updated" date at the top of this policy. We encourage you to review this policy periodically to stay informed about how we use cookies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm flex-shrink-0">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4">Have Questions?</h2>
                <p className="text-blue-50 leading-relaxed text-lg mb-6">
                  If you have any questions or concerns about our use of cookies or this Cookie Policy, we're here to help.
                </p>
                <div className="space-y-3 text-blue-50 text-lg">
                  <p><strong className="text-white">Email:</strong> connect@basiq360.com</p>
                  <p><strong className="text-white">Website:</strong> www.basiq360.com</p>
                </div>
              </div>
            </div>
            <a 
              href="/loyalty-marketing/contact/" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all mt-4"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Related Links */}
        <div className="pt-8 border-t-2 border-gray-200">
          <p className="text-gray-600 text-center text-lg">
            Related Policies:{' '}
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Privacy Policy
            </Link>
            {/* {' • '}
            <a href="/terms" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Terms of Service
            </a> */}
          </p>
        </div>
      </div>

      {/* Footer Gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
    </div>
  );
}