'use client'

import { Eye, Target, Trophy, Users, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function UserAboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-emerald-800/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center mb-8">
              <Image
                src="/logos/rivio-user-light.png"
                alt="RIVIO Logo"
                width={200}
                height={80}
                className="h-24 w-auto"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              RIVIO
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-400 mb-4 font-semibold">
              Gym Finder &amp; Workout Tracker for India
            </p>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
              RIVIO is a gym finder and workout tracker with pay-per-day access. Discover venues, log training in My Progress, and pay only for the days you use.
            </p>
            <p className="text-lg text-gray-400 mb-8 italic">
              "Your route to movement."
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
              <Trophy className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">
                Find gyms near you with pay-per-day access and My Progress workout tracking
              </span>
            </div>
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
                RIVIO pairs flexible pay-per-day access with tools to track your training. Pay only for the days you visit, while My Progress helps you log workouts, body measurements, and trends over time.
              </p>
              <p>
                Why commit to one gym when you want yoga today, a studio tomorrow, and a different gym next week? Our vision is a fitness ecosystem in India where discovery, access, and progress live in one place. Members explore freely, partners run smooth operations, and everyone builds sustainable habits without rigid contracts.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our mission is to make fitness flexible in India through gym discovery, pay-per-day access, and My Progress workout tracking. We connect members, venues, and coaches in one trusted app.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Gym finder for gyms, yoga studios, and wellness venues across India",
                "My Progress workout tracking for sessions, measurements, insights, and personal records",
                "Pay-per-day access and an in-app wallet so members pay only for days they train",
                "QR check-in at partner venues, plus passes for longer access",
                "Studio Team profiles for coaches and staff at each venue",
                "Streaks, leaderboards, and achievements tied to venue check-ins",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-300 flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Progress */}
        <section className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">My Progress</h2>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My Progress is Rivio&apos;s built-in workout tracker: a personal training diary for logged workouts, separate from gym streaks that come from venue check-ins.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Workout logging", text: "Exercises with sets, weight, reps, duration, or distance, plus bodyweight, how you felt, and notes for each session." },
                { title: "Workout history", text: "Recent sessions and a full calendar of past training so your history stays easy to review." },
                { title: "Insights and records", text: "Period-based overview, measurements, and personal records that reflect the date range you care about." },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-gray-800/50 rounded-2xl border border-gray-700">
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why RIVIO */}
        <section className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why RIVIO?</h2>
            </div>
            <p className="text-xl text-gray-300 mb-10 text-center font-semibold">
              Flexible gym access and a real workout tracker in one app
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "💵", title: "Pay-Per-Day Access", desc: "Pay only for the days you use. Try a gym today, yoga tomorrow, or a wellness center next week without locking into one membership." },
                { icon: "⚡", title: "QR Check-In", desc: "Partner venues support fast QR check-in with wallet or pass coverage, so access stays simple on the floor." },
                { icon: "🏋️", title: "My Progress", desc: "A personal training diary for workouts, measurements, insights, and personal records alongside flexible gym access." },
                { icon: "🏆", title: "Streaks & Leaderboards", desc: "Venue check-ins build streaks and rankings so consistency stays visible and motivating." },
                { icon: "🗺️", title: "Venue Network", desc: "Gyms, studios, and wellness centers across cities, with pricing, amenities, and Team profiles for each partner." },
                { icon: "💳", title: "Wallet & Passes", desc: "In-app wallet for pay-per-day visits and passes for longer access, with clear pricing from each venue." },
                { icon: "🛡️", title: "Secure Platform", desc: "Strong security practices for payments and training data, with clear pricing and transparent history." }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-emerald-500/30 transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Vision */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-500/20 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">The Founder Team's Vision</h2>
                <p className="text-emerald-400 text-sm italic mt-1">(Amandeep Bishnoi)</p>
              </div>
            </div>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="font-bold text-emerald-400 italic text-xl">From the Founder Team,</p>
              <p>Imagine a world where fitness isn't locked behind expensive memberships or complicated contracts. Where you can walk into any gym, yoga studio, or fitness center, anywhere and anytime, and simply start your workout. No commitments, no restrictions, no barriers. That's the world we're building at RIVIO.</p>
              <p>We saw the frustration in people's eyes when they couldn't access fitness because of long-term contracts they couldn't afford, or because they were tied to a single location. We watched amazing fitness enthusiasts give up on their goals simply because the system wasn't designed for their lifestyle. That didn't sit right with us.</p>
              <p>So we built something different. RIVIO isn't just an app. It's your passport to fitness freedom. Pay for what you use, or choose a pass that fits your schedule. Build streaks, compete on leaderboards, and turn your fitness journey into an adventure. Every visit counts, every milestone matters, and every step forward is a victory worth celebrating.</p>
              <p>Our vision is simple: make fitness accessible without locking people into long memberships. Whether you train daily or a few times a month, Rivio is built around how you actually show up: find a gym near you, check in with QR, pay for the day, and log work in My Progress when you want the history.</p>
              <p className="font-semibold text-emerald-400 italic text-xl">Welcome to RIVIO, where your fitness journey begins, your goals become reality, and every workout brings you one step closer to the best version of yourself. Let's make fitness fun, accessible, and inspiring together! 😊</p>
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
              Have questions, feedback, or want to partner with us? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@rivioapp.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/20"
              >
                <Mail className="w-5 h-5" />
                support@rivioapp.com
              </a>
              <a
                href="mailto:partners@rivioapp.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 rounded-xl text-white font-semibold hover:bg-gray-700 transition-all border border-gray-700"
              >
                <Users className="w-5 h-5" />
                partners@rivioapp.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
