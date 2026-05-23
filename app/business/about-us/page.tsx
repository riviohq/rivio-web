'use client'

import { Eye, Target, QrCode, TrendingUp, Users, Mail, Building2 } from 'lucide-react'
import Image from 'next/image'
import LegalEntityNotice from '@/components/LegalEntityNotice'

export default function PartnerAboutPage() {
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
              RIVIO Partner
            </h1>
            <p className="text-2xl md:text-3xl text-amber-400 mb-4 font-semibold">
              Business Management Platform
            </p>
            <p className="text-lg text-gray-400 mb-8 italic">
              "Your route to movement."
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Vision Section */}
        <section className="mb-20 mt-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                To become the trusted technology partner for gyms, fitness centers, and wellness studios worldwide. We envision a future where every facility owner can effortlessly manage their business, maximize revenue through intelligent systems, and build thriving communities that transform lives.
              </p>
              <p>
                Our vision is built on empowering business owners with real-time insights, automated operations, and flexible revenue models that eliminate complexity and drive sustainable growth. We believe that when technology works seamlessly in the background, you can focus on what truly matters—helping people achieve their health and wellness goals.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our mission is to empower gym owners, fitness center managers, and wellness studio operators with intelligent technology that simplifies operations, maximizes revenue, and enables them to focus on what truly matters—creating transformative experiences for their members.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We are committed to eliminating the complexity of business management through automated systems, real-time insights, and seamless payment solutions. Every feature we build, every update we release, and every interaction we have is driven by one core purpose: to make your business more successful, more profitable, and more enjoyable to run.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { bold: "Empower Business Owners:", text: "Provide tools that give you complete control and visibility over your operations, earnings, and growth metrics." },
                { bold: "Simplify Operations:", text: "Automate check-ins, payments, and administrative tasks so you can dedicate time to member engagement and business development." },
                { bold: "Maximize Revenue:", text: "Enable flexible pricing models, instant settlements, and data-driven insights that help you optimize earnings and grow sustainably." },
                { bold: "Build Thriving Communities:", text: "Connect you with members, facilitate engagement through reviews and feedback, and help you create spaces where people achieve their health and wellness goals." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-6 h-6 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-300 flex-1">
                    <span className="font-semibold text-white">{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-8 italic text-amber-400 text-lg font-semibold text-center">
              When you succeed, we succeed. Your growth is our greatest achievement.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <QrCode className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Register & Setup Your Business", desc: "Sign up, verify with OTP, and add your business details, location, category, and pricing." },
                { step: "2", title: "Get Your QR Code", desc: "Each location gets a unique QR code. Display it at your reception for users to scan and check in." },
                { step: "3", title: "Users Check In & You Earn", desc: "Earn from per-visit payments (credited instantly) or pass purchases (full payment upfront)." },
                { step: "4", title: "Track Everything in Real-Time", desc: "Dashboard shows visits, earnings, reviews, and analytics. Monitor all locations from one place." },
                { step: "5", title: "Setup Payment Details", desc: "Configure bank account, PAN, and GSTIN in Settings (one-time setup for settlements)." },
                { step: "6", title: "Settle Earnings to Bank", desc: "Request settlement anytime to transfer wallet funds to your bank account (processed in 2-3 days)." },
                { step: "7", title: "Manage Multiple Locations", desc: "Add unlimited locations. Each has its own QR code and analytics. Manage all from one dashboard." },
                { step: "8", title: "Create Pass Groups (Optional)", desc: "Group locations so users can use passes across all locations in the group." },
                { step: "9", title: "Engage with Reviews", desc: "Respond to reviews to build trust and attract more customers. Positive reviews improve your ranking." },
                { step: "10", title: "Grow & Scale Your Business", desc: "Use insights to optimize pricing, track performance, and make data-driven decisions to grow your business." }
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

        {/* Founder's Vision */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-500/20 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">The Founder Team's Vision</h2>
                <p className="text-amber-400 text-sm italic mt-1">(Amandeep Bishnoi)</p>
              </div>
            </div>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="font-bold text-amber-400 italic text-xl">From the Founder Team,</p>
              <p>The fitness and wellness industry is built on passion, dedication, and the transformative power of community. Yet, we observed that business owners—the very people creating these life-changing experiences—were being held back by technology that was supposed to help them.</p>
              <p>Complex systems, fragmented tools, and outdated processes were consuming valuable time that should be spent on what matters most: serving members, building communities, and growing businesses. This fundamental disconnect between technology and real-world needs inspired us to create RIVIO.</p>
              <p>RIVIO Partner represents a new paradigm in business management software—one where technology truly serves the business owner. Every feature we've built, from real-time earnings tracking to automated check-ins, from flexible pass management to seamless settlements, is designed with a single purpose: to give you back your time and amplify your success.</p>
              <p>Our commitment goes beyond software. We measure our success not by features or downloads, but by your growth, your profitability, and your ability to focus on what you do best. When you thrive, we've achieved our goal. When your business scales, we've fulfilled our vision.</p>
              <p className="font-semibold text-amber-400 italic text-xl">Welcome to RIVIO—where your success is our mission, and your growth is our greatest achievement.</p>
            </div>
          </div>
        </section>

        {/* Legal entity — visible for DLT / regulatory verification */}
        <section className="mb-20">
          <LegalEntityNotice variant="section" accent="amber" />
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Questions? Feedback? We're here for you!
            </p>
            <a
              href="mailto:support@rivioapp.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-white font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/20"
            >
              <Mail className="w-5 h-5" />
              support@rivioapp.com
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
