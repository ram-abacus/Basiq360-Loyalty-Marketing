import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Basiq360",
  description:
    "Learn about how Basiq360 collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#004bab]/10 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">Privacy Policy</h1>
          <p className="mt-4 text-lg text-slate-600 text-center">Last updated: May 31, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50 mb-8">
              <h2 className="text-2xl font-bold mb-4">Privacy Notice for Basiq360</h2>
              <p className="text-slate-700 leading-relaxed">
                This privacy notice for Basiq360 ("we," "us," or "our") describes how and why we might collect, store,
                use, and/or share ("process") your information when you use our services ("Services"), such as when you:
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>
                  Visit our website at https://basiq360.com/, or any website of ours that links to this privacy notice
                </li>
                <li>
                  Download and use our mobile application (Basiq360), or any other application of ours that links to
                  this privacy notice
                </li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p className="mt-4 text-slate-700 leading-relaxed">
                <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our policies and practices, please do not use our
                Services. If you still have any questions or concerns, please contact us at{" "}
                <a href="mailto:connect@basiq360.com" className="text-[#004bab] hover:underline">
                  connect@basiq360.com
                </a>
                .
              </p>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Summary of Key Points</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    <strong>What personal information do we process?</strong> When you visit, use, or navigate our
                    Services, we may process personal information depending on how you interact with us and the
                    Services, the choices you make, and the products and features you use.
                  </p>
                  <p>
                    <strong>Do we process any sensitive personal information?</strong> We may process sensitive personal
                    information when necessary with your consent or as otherwise permitted by applicable law.
                  </p>
                  <p>
                    <strong>How do we process your information?</strong> We process your information to provide,
                    improve, and administer our Services, communicate with you, for security and fraud prevention, and
                    to comply with law. We may also process your information for other purposes with your consent.
                  </p>
                  <p>
                    <strong>In what situations and with which parties do we share personal information?</strong> We may
                    share information in specific situations and with specific third parties.
                  </p>
                  <p>
                    <strong>What are your rights?</strong> Depending on where you are located geographically, the
                    applicable privacy law may mean you have certain rights regarding your personal information.
                  </p>
                  <p>
                    <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by
                    submitting a data subject access request, or by contacting us. We will consider and act upon any
                    request in accordance with applicable data protection laws.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">1. What Information Do We Collect?</h2>

                <h3 className="text-xl font-semibold mb-3 text-slate-900">Personal Information You Disclose to Us</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>In Short:</strong> We collect personal information that you provide to us.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide to us when you register on the Services,
                  express an interest in obtaining information about us or our products and Services, when you
                  participate in activities on the Services, or otherwise when you contact us.
                </p>

                <h4 className="text-lg font-semibold mb-2 text-slate-900">Personal Information Provided by You</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  The personal information that we collect depends on the context of your interactions with us and the
                  Services, the choices you make, and the products and features you use. The personal information we
                  collect may include the following:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 mb-4">
                  <li>Names</li>
                  <li>Phone numbers</li>
                  <li>Email addresses</li>
                  <li>Contact preferences</li>
                  <li>Contact or authentication data</li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 text-slate-900">Sensitive Information</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When necessary, with your consent or as otherwise permitted by applicable law, we process sensitive
                  information as required for our services.
                </p>

                <h4 className="text-lg font-semibold mb-2 text-slate-900">Application Data</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  If you use our application(s), we also may collect the following information if you choose to provide
                  us with access or permission:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>
                    <strong>Geolocation Information:</strong> We may request access or permission to track
                    location-based information from your mobile device, either continuously or while you are using our
                    mobile application(s), to provide certain location-based services. If you wish to change our access
                    or permissions, you may do so in your device's settings.
                  </li>
                  <li>
                    <strong>Mobile Device Data:</strong> We automatically collect device information (such as your
                    mobile device ID, model, and manufacturer), operating system, version information and system
                    configuration information, hardware model Internet service provider and/or mobile carrier, and
                    Internet Protocol (IP) address (or proxy server).
                  </li>
                  <li>
                    <strong>Push Notifications:</strong> We may request to send you push notifications regarding your
                    account or certain features of the application(s). If you wish to opt-out from receiving these types
                    of communications, you may turn them off in your device's settings.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">2. How Do We Process Your Information?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>In Short:</strong> We process your information to provide, improve, and administer our
                  Services, communicate with you, for security and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We process your personal information for a variety of reasons, depending on how you interact with our
                  Services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
                  <li>To facilitate account creation and authentication</li>
                  <li>To deliver and facilitate delivery of services to the user</li>
                  <li>To respond to user inquiries and offer support</li>
                  <li>To send administrative information to you</li>
                  <li>To fulfill and manage your orders</li>
                  <li>To enable user-to-user communications</li>
                  <li>To request feedback</li>
                  <li>To send you marketing and promotional communications</li>
                  <li>To protect our Services</li>
                  <li>To identify usage trends</li>
                  <li>To save or protect an individual's vital interest</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">
                  3. When and With Whom Do We Share Your Personal Information?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>In Short:</strong> We may share information in specific situations described in this section
                  and/or with the following third parties.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We may need to share your personal information in the following situations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
                  <li>
                    <strong>Business Transfers:</strong> We may share or transfer your information in connection with,
                    or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                    portion of our business to another company.
                  </li>
                  <li>
                    <strong>Affiliates:</strong> We may share your information with our affiliates, in which case we
                    will require those affiliates to honor this privacy notice.
                  </li>
                  <li>
                    <strong>Business Partners:</strong> We may share your information with our business partners to
                    offer you certain products, services, or promotions.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">4. How Long Do We Keep Your Information?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes
                  outlined in this privacy notice unless otherwise required by law.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We will only keep your personal information for as long as it is necessary for the purposes set out in
                  this privacy notice, unless a longer retention period is required or permitted by law (such as tax,
                  accounting, or other legal requirements).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Do We Collect Information From Minors?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years
                  of age.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We do not knowingly solicit data from or market to children under 18 years of age. By using the
                  Services, you represent that you are at least 18 or that you are the parent or guardian of such a
                  minor and consent to such minor dependent's use of the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">6. What Are Your Privacy Rights?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>In Short:</strong> You may review, change, or terminate your account at any time.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you are located in the EEA or UK and you believe we are unlawfully processing your personal
                  information, you also have the right to complain to your local data protection supervisory authority.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  If you have questions or comments about your privacy rights, you may email us at{" "}
                  <a href="mailto:connect@basiq360.com" className="text-[#004bab] hover:underline">
                    connect@basiq360.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">7. Controls for Do-Not-Track Features</h2>
                <p className="text-slate-700 leading-relaxed">
                  Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
                  ("DNT") feature or setting you can activate to signal your privacy preference not to have data about
                  your online browsing activities monitored and collected.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">8. Do We Make Updates to This Notice?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with
                  relevant laws.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We may update this privacy notice from time to time. The updated version will be indicated by an
                  updated "Revised" date and the updated version will be effective as soon as it is accessible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">9. How Can You Contact Us About This Notice?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have questions or comments about this notice, you may email us at{" "}
                  <a href="mailto:connect@basiq360.com" className="text-[#004bab] hover:underline font-medium">
                    connect@basiq360.com
                  </a>{" "}
                  or contact us by post at:
                </p>
                <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Basiq360</strong>
                    <br />
                    G1-G3, SSR Corporate Park
                    <br />
                    13/6, NH-19
                    <br />
                    Faridabad, Haryana 121003
                    <br />
                    India
                    <br />
                    <br />
                    Phone:{" "}
                    <a href="tel:+919350059390" className="text-[#004bab] hover:underline">
                      +91 935 005 9390
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
