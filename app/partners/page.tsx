'use client'

import { Building2, TrendingUp, Users, DollarSign, QrCode, BarChart3, Shield, Mail, CheckCircle, Star, Zap, Target } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-amber-800/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center mb-8">
              <Image
                src="/logos/rivio-partner-gold-lighttext.png"
                alt="RIVIO Partner Logo"
                width={200}
                height={80}
                className="h-24 w-auto"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Partner Program
            </h1>
            <p className="text-2xl md:text-3xl text-amber-400 mb-4 font-semibold">
              Grow Your Fitness Business with RIVIO
            </p>
            <p className="text-lg text-gray-400 mb-8 italic">
              Join thousands of gyms, yoga studios, and wellness centers maximizing revenue through our innovative platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partners@rivioapp.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-white font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/20"
              >
                <Mail className="w-5 h-5" />
                Join as Partner
              </a>
              <Link
                href="/partner/about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 rounded-xl text-white font-semibold hover:bg-gray-700 transition-all border border-gray-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Why Partner with RIVIO */}
        <section className="mb-20 mt-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Partner with RIVIO?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Maximize Revenue",
                  desc: "Earn from both per-visit payments and subscription passes. Multiple revenue streams mean more income for your business."
                },
                {
                  icon: Users,
                  title: "Reach More Customers",
                  desc: "Get discovered by thousands of fitness enthusiasts actively searching for gyms and wellness centers in your area."
                },
                {
                  icon: Zap,
                  title: "Instant Settlements",
                  desc: "Get paid quickly with instant per-visit payments and upfront pass purchases. Request settlements anytime to your bank account."
                },
                {
                  icon: QrCode,
                  title: "Easy Check-In System",
                  desc: "Simple QR code system eliminates manual check-ins. Users scan and go, with no paperwork, no hassle, and no delays."
                },
                {
                  icon: BarChart3,
                  title: "Real-Time Analytics",
                  desc: "Track visits, earnings, reviews, and performance across all locations. Make data-driven decisions to grow your business."
                },
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  desc: "Bank-level security for all transactions. Your financial data and business information are always protected."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-amber-500/30 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Sign Up & Register", desc: "Download the RIVIO Partner app, create your account, and verify with OTP. Complete your business profile with all necessary details." },
                { step: "2", title: "Add Your Business", desc: "Add your business information: name, category, location, pricing, amenities, and operating hours. Add multiple locations if you have them." },
                { step: "3", title: "Get Your QR Code", desc: "Each location gets a unique QR code. Download and display it at your reception for users to scan and check in." },
                { step: "4", title: "Start Earning", desc: "Users discover your facility, check in via QR code, and you earn instantly. Track all earnings in real-time through your dashboard." },
                { step: "5", title: "Manage & Grow", desc: "Use analytics to optimize pricing, respond to reviews, manage multiple locations, and grow your business with data-driven insights." },
                { step: "6", title: "Settle Earnings", desc: "Request settlements anytime to transfer your wallet balance to your bank account. Settlements are processed within 2-3 business days." }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-amber-500/30 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center font-bold text-white text-xl flex-shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Partner Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Instant per-visit payments credited to your wallet",
                "Full payment upfront for all pass purchases",
                "Real-time earnings tracking and analytics",
                "Manage unlimited business locations from one dashboard",
                "Create pass groups for multi-location businesses",
                "Automated check-in system with QR codes",
                "Free marketing through our user discovery platform",
                "Access to customer reviews and feedback",
                "Monthly statements and financial reports",
                "Secure payment processing with bank-level encryption",
                "Dedicated partner support team"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-6 h-6 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 flex-1">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-500/20 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Revenue Model</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Per-Visit Payments
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Users pay per visit based on your set day pass pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Earnings credited instantly to your wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>No waiting period or delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Real-time tracking in your dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Pass Purchases
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Users buy weekly, monthly, quarterly, semiannual, or yearly passes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Full payment received upfront</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Passes give users unlimited access to your facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Auto-attendance marked daily for pass holders</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">Commission Structure:</span> RIVIO charges a transparent commission on transactions to maintain and improve the platform. Commission rates are agreed upon during onboarding and are clearly displayed in your earnings breakdown. All earnings shown in your wallet are net amounts after commission.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Requirements to Join</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Valid business registration and license",
                "Physical location (gym, yoga studio, wellness center, etc.)",
                "Bank account for settlements",
                "PAN card number (for tax compliance)",
                "GSTIN (if applicable)",
                "Business contact information",
                "Operating hours and pricing details",
                "Amenities and facility information"
              ].map((req, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 flex-1">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-3xl p-8 md:p-12 border border-amber-500/20 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the RIVIO Partner Program today and start maximizing your revenue while reaching more customers. Our team is here to help you get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:partners@rivioapp.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-white font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Contact Partnerships Team
                </a>
                <a
                  href="mailto:support@rivioapp.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 rounded-xl text-white font-semibold hover:bg-gray-700 transition-all border border-gray-700"
                >
                  <Mail className="w-5 h-5" />
                  General Support
                </a>
              </div>
              <p className="text-gray-400 mt-8 text-sm">
                Questions? Email us at <a href="mailto:partners@rivioapp.com" className="text-amber-400 hover:text-amber-300 underline">partners@rivioapp.com</a> or call our partner support line.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

