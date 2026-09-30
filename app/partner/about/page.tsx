'use client'

import { Eye, Target, Users, Mail } from 'lucide-react'
import Image from 'next/image'

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
              Run Your Venue &amp; Showcase Your Team
            </p>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
              RIVIO Partner helps gyms and studios manage QR check-ins, earnings, and settlements, and showcase coaches on the Team tab for members.
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
                RIVIO Partner is the trusted app for gyms, studios, and wellness venues in India to run daily operations and showcase their professionals. Manage check-ins, passes, and payouts while presenting your Team on the member app.
              </p>
              <p>
                Our vision is simple: technology stays in the background so you can focus on members. Real-time insights, automated operations, and flexible pay-per-day revenue help you grow, while coach photos and roles on the Team tab build trust before someone walks in.
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
              Rivio Partner gives gym owners and studio operators the tools to run day-to-day operations without the usual admin drag: check-ins, passes, Team profiles, and payouts in one place so you can stay focused on members.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We keep building for clarity and speed on the floor. Every feature should help you earn more from pay-per-day and passes, keep staff and coaches visible to members, and make settlements simple to request and track.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { bold: "Venue operations:", text: "Earnings, visits, and activity in one place." },
                { bold: "Check-ins and payments:", text: "QR access, passes, and admin tools without juggling separate systems." },
                { bold: "Team profiles:", text: "Coaches and staff with photos, roles, and bios for members to discover." },
                { bold: "Staff access:", text: "Optional complimentary staff passes tied to team mobile numbers." },
                { bold: "Revenue:", text: "Flexible pricing, settlement requests, and clear history for pay-per-day and pass earnings." },
                { bold: "Brand presence:", text: "Reviews, feedback, and a venue profile that matches how you present your studio." }
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
              <p>The fitness and wellness industry is built on passion, dedication, and the transformative power of community. Yet we saw that business owners, the very people creating these experiences, were being held back by technology that was supposed to help them.</p>
              <p>Complex systems, fragmented tools, and outdated processes were consuming valuable time that should be spent on what matters most: serving members, building communities, and growing businesses. This fundamental disconnect between technology and real-world needs inspired us to create RIVIO.</p>
              <p>RIVIO Partner is a new kind of business management software, one where the technology truly serves the business owner. Every feature we've built, from real-time earnings tracking to automated check-ins, from flexible pass management to smooth settlements, is designed with a single purpose: to give you back your time and grow your business.</p>
              <p>Our commitment goes beyond software. We measure our success not by features or downloads, but by your growth, your profitability, and your ability to focus on what you do best. When you thrive, we've achieved our goal. When your business scales, we've fulfilled our vision.</p>
              <p className="font-semibold text-amber-400 italic text-xl">Welcome to RIVIO, where your success is our mission, and your growth is our greatest achievement.</p>
            </div>
          </div>
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
