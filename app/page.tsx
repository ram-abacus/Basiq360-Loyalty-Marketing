import Link from "next/link"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Feature } from "@/components/feature"
import { Step } from "@/components/step"
import { GrowthGraph } from "@/components/growth-graph"
import { Icon } from "@/components/icon"
import { KPI } from "@/components/kpi"
import { FAQ } from "@/components/faq"
import { HubSpotForm } from "@/components/hubspot-form"
import { AnimatedNumber } from "@/components/animated-number"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#004bab]/10 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              Grow Your <span className="text-[#004bab]">Loyalty Network</span> Faster with 360° Marketing
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              From app downloads to dealer onboarding—Basiq360 turns your loyalty program into a growth engine with
              data-driven campaigns, integrated CRM journeys, and content that converts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-[#004bab] px-8 py-4 text-white font-semibold hover:bg-[#003580] transition-colors shadow-lg"
              >
                Start Your Loyalty Growth
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border-2 border-slate-300 px-8 py-4 font-semibold hover:bg-slate-50 transition-colors"
              >
                Get a Free Plan
              </Link>
            </div>
            {/* RTB Badges */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { k: "200%", v: "More Active App Users" },
                { k: "3x", v: "Faster Dealer Onboarding" },
                { k: "+40%", v: "Repeat Transactions" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
                  <div className="text-3xl font-bold text-[#004bab]">
                    <AnimatedNumber value={s.k} />
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 shadow-xl p-4 sm:p-6 bg-white">
              <div className="rounded-2xl bg-gradient-to-br from-[#004bab] to-[#0f6ad1] p-6 sm:p-8 text-white">
                <div className="text-xs sm:text-sm opacity-90 font-medium">Live Overview</div>
                <div className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold">Loyalty Growth Dashboard</div>
                <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div className="rounded-xl bg-white/10 backdrop-blur p-3 sm:p-5">
                    <div className="text-lg sm:text-2xl font-bold">
                      <AnimatedNumber value="184k" />
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-80 mt-1">New Users Acquired</div>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur p-3 sm:p-5">
                    <div className="text-lg sm:text-2xl font-bold">
                      <AnimatedNumber value="4.5" className="relative after:content-['★'] after:ml-1 after:text-white-500 after:text-m" />
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-80 mt-1">Average Rating</div>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur p-3 sm:p-5">
                    <div className="text-lg sm:text-2xl font-bold">
                      <AnimatedNumber value="321k" />
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-80 mt-1">Engagement</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <Card kpi="-28%" label="Lower CAC" />
                <Card kpi="+3.1x" label="ROAS on Meta" />
                <Card kpi="+54%" label="Install→Signup" />
                <Card kpi="95%" label="Verified Dealers" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 flex-1">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#004bab]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#004bab]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-sm font-medium">
                  <span className="font-semibold">AI-driven Targeting</span> for CAC ↓
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#004bab]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#004bab]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-medium">
                  <span className="font-semibold">Attribution Dashboards</span> (CAC, ROAS, LTV)
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#004bab]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#004bab]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-medium">
                  <span className="font-semibold">Verified Onboarding</span> for dealers/retailers
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="rounded-2xl bg-[#FFA500] px-8 py-3 font-semibold text-slate-900 hover:bg-[#e69500] transition-colors shadow-lg whitespace-nowrap"
            >
              Get My Plan & Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">360° Loyalty Marketing Solutions</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl leading-relaxed">
          Everything you need to drive awareness, activation, and retention across your loyalty ecosystem.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon="megaphone"
            title="App Promotion Campaigns"
            desc="High-intent Google, Meta, and LinkedIn ads to drive quality installs and DAUs."
            bullets={["Granular audience & lookalikes", "Store listing optimization", "Post-install engagement"]}
          />
          <Feature
            icon="users"
            title="Dealer / Retailer Onboarding"
            desc="Funnels that attract, verify, and activate your partners at scale."
            bullets={["Lead gen & qualification", "KYC & verification handoff", "Onboarding drip journeys"]}
          />
          <Feature
            icon="automation"
            title="CRM & Automation"
            desc="Lifecycle messaging that nudges users from signup to repeat transactions."
            bullets={["Email/SMS/WhatsApp flows", "Win-back & churn prevention", "Offer & points nudges"]}
          />
          <Feature
            icon="palette"
            title="Content & Creatives"
            desc="Ad creatives, reels, landing pages, and explainers tailored to your ICPs."
            bullets={["UGC-style videos", "Localized multi-language", "Offer & RTB playbooks"]}
          />
          <Feature
            icon="chart"
            title="Analytics & Attribution"
            desc="Dashboards tying spend to outcomes: CAC, ROAS, LTV, and cohort health."
            bullets={["Event & funnel tracking", "MMP/GA4 integrations", "Cohort & LTV views"]}
          />
          <Feature
            icon="store"
            title="Field & Channel Enablement"
            desc="Dealer toolkits, POS assets, and territory-wise launch programs."
            bullets={["Territory micro-campaigns", "POS & retail kits", "Partner webinars"]}
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-2xl bg-[#FFA500] px-8 py-4 font-semibold text-slate-900 hover:bg-[#e69500] transition-colors shadow-lg"
          >
            Get My Loyalty Plan
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border-2 border-slate-300 px-8 py-4 font-semibold hover:bg-slate-50 transition-colors"
          >
            See Sample Creatives
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Proven Growth Approach</h2>
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Step
                n="01"
                title="Discovery & ICP"
                desc="Identify customer, dealer, and retailer personas with market sizing & RTB mapping."
              />
              <Step
                n="02"
                title="Launch & Learn"
                desc="Spin up multi-channel ads, creatives, and landing pages with rapid A/Bs."
              />
              <Step
                n="03"
                title="Automate & Amplify"
                desc="Activate CRM journeys, partner onboarding, and offer logic tied to behavior."
              />
              <Step
                n="04"
                title="Scale with Insights"
                desc="Optimize CAC→LTV, expand territories, and double down on winning segments."
              />
            </div>
            <div className="rounded-3xl">
              <GrowthGraph />
              {/* <div className="flex items-center justify-between mb-6">
                <div className="text-base font-semibold">Growth Projection</div>
                <div className="text-xs text-slate-500">Installs • Signups • Repeat Txn</div>
              </div>
              
              <div className="mt-6 text-xs text-slate-500">
                Illustrative chart showing typical growth trajectory with our 360° approach.
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Built for Your Industry</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl leading-relaxed">
            Manufacturing, FMCG, Retail, Building Materials, Automotive—our playbooks adapt to your channels and sales
            motions.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Manufacturing", icon: "factory" },
              { name: "FMCG", icon: "cart" },
              { name: "Retail", icon: "tag" },
              { name: "Building Materials", icon: "home" },
              { name: "Automotive", icon: "car" },
            ].map((i) => (
              <div
                key={i.name}
                className="rounded-2xl border border-slate-200 p-8 text-center hover:shadow-lg hover:border-[#004bab] transition-all bg-white"
              >
                <Icon name={i.icon as any} className="mx-auto mb-4 h-12 w-12 text-[#004bab]" />
                <div className="text-sm font-semibold">{i.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {/* <section id="case" className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28"> */}
      <section id="case" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-12 bg-white shadow-xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="text-xs font-bold tracking-wider text-[#004bab] uppercase mb-3">Case Study</div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">2,500+ New Dealer Signups in 45 Days</h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                For a leading FMCG brand, we launched territory-wise dealer campaigns, streamlined KYC handoffs, and
                activated onboarding drips—cutting CAC and accelerating time-to-first-order.
              </p>
              <ul className="mt-6 space-y-3 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#004bab] font-bold">✓</span>
                  <span>Install → Signup rate up by 54%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004bab] font-bold">✓</span>
                  <span>3x faster dealer verification and activation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#004bab] font-bold">✓</span>
                  <span>+40% repeat transactions in 90 days</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-[#004bab] px-8 py-4 text-white font-semibold hover:bg-[#003580] transition-colors shadow-lg text-center"
                >
                  Book a Walkthrough
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl border-2 border-slate-300 px-8 py-4 font-semibold hover:bg-slate-50 transition-colors text-center"
                >
                  Request Full Case Study
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-white">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                <KPI label="Dealer Signups" value="+2,500" note="in 45 days" />
                <KPI label="CAC" value="-28%" note="vs. baseline" />
                <KPI label="ROAS" value="3.1x" note="Meta + Search" />
                <KPI label="Repeat Txn" value="+40%" note="90 days" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Now with Carousel */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">What Partners Say</h2>
            </div>
            <Link
              href="/contact"
              className="rounded-2xl bg-[#FFA500] px-8 py-4 font-semibold text-slate-900 hover:bg-[#e69500] transition-colors shadow-lg whitespace-nowrap"
            >
              Book a Discovery Call
            </Link>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FAQ
              id="faq-1"
              q="How quickly can we launch?"
              a="Most pilots go live in 10–14 days with initial creatives, funnels, and tracking in place."
            />
            <FAQ
              id="faq-2"
              q="Do you integrate with our loyalty system?"
              a="Yes. We integrate with Basiq360 LMS and popular CRMs, MMPs, and analytics tools."
            />
            <FAQ
              id="faq-3"
              q="What KPIs do you optimize?"
              a="CAC, ROAS, LTV, activation rate, repeat transactions, verified dealer % and churn."
            />
            <FAQ
              id="faq-4"
              q="Can you support multilingual campaigns?"
              a="Absolutely—Hindi + key regional languages for ads, landing pages, and drips."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="text-xs font-bold tracking-wider text-[#004bab] uppercase mb-3">GET STARTED</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Let's Build Your Loyalty Growth Plan
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Share a few details and we'll send a tailored plan to boost app installs, partner onboarding, and repeat
                transactions.
              </p>

              <ul className="space-y-3 text-sm text-slate-700 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#004bab]">•</span>
                  <span>Custom media plan with projected installs & signups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004bab]">•</span>
                  <span>Creative & offer ideas aligned to your ICPs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#004bab]">•</span>
                  <span>Measurement framework (CAC, ROAS, LTV)</span>
                </li>
              </ul>

              {/* RTB Highlights Box */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900 mb-4">RTB Highlights</div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-4xl font-bold text-[#004bab]">
                      <AnimatedNumber value="200%" />
                    </div>
                    <div className="text-xs text-slate-600 mt-1">Active Users</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#004bab]">
                      <AnimatedNumber value="3x" />
                    </div>
                    <div className="text-xs text-slate-600 mt-1">Onboarding Speed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#004bab]">
                      <AnimatedNumber value="+40%" />
                    </div>
                    <div className="text-xs text-slate-600 mt-1">Repeat Txn</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - HubSpot Form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <HubSpotForm portalId="242830238" formId="8597f18e-a55f-4eb9-8e02-76699be2124a" region="na2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Card({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white">
      <div className="text-2xl font-bold text-[#004bab]">
        <AnimatedNumber value={kpi} />
      </div>
      <div className="text-sm text-slate-600 mt-1">{label}</div>
    </div>
  )
}
