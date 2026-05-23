"use client";

import { Eye, Target, QrCode, Trophy, Users, Mail } from "lucide-react";
import Image from "next/image";
import LegalEntityNotice from "@/components/LegalEntityNotice";

export default function UserAboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-emerald-800/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center mb-4 md:mb-8">
              <Image
                src="/logos/rivio-user-light.png"
                alt="RIVIO Logo"
                width={200}
                height={80}
                className="h-16 md:h-24 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-3 md:mb-6 tracking-tight">
              RIVIO
            </h1>
            <p className="text-xl md:text-3xl text-emerald-400 mb-2 md:mb-4 font-semibold">
              Universal Fitness Access Platform
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-8 italic">
              "Your route to movement."
            </p>
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-300 text-xs md:text-sm font-medium">
                Build streaks, compete on leaderboards, and unlock achievements
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-20">
        {/* Vision Section */}
        <section className="mb-6 md:mb-20 mt-8 md:mt-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <Eye className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="text-xl md:text-4xl font-bold text-white">
                Our Vision
              </h2>
            </div>
            <div className="space-y-3 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                RIVIO introduces the pay-per-day concept—a revolutionary
                approach to fitness access that eliminates the need for multiple
                subscriptions. Why commit to a gym membership when you want yoga
                today, a wellness center tomorrow, and a different gym next
                week? With RIVIO, you pay only for the days you use, accessing
                any gym, yoga studio, or wellness center instantly, without
                long-term commitments or wasted money.
              </p>
              <p>
                This flexible, on-demand model addresses a fundamental problem
                in the fitness industry: traditional membership models force
                consumers into rigid, single-venue commitments that limit choice
                and create financial barriers. Our vision is to transform
                fitness accessibility, enabling users to diversify their fitness
                journey while empowering venue owners to maximize utilization
                and revenue through our innovative pass-based platform.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-6 md:mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="text-xl md:text-4xl font-bold text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-8 leading-relaxed">
              Our mission is to eliminate the need for multiple fitness
              subscriptions by providing pay-per-day access to any gym, yoga
              studio, or wellness center. We're committed to making fitness
              truly flexible, affordable, and accessible.
            </p>
            <div className="grid md:grid-cols-2 gap-2 md:gap-4">
              {[
                "Deliver pay-per-day access that eliminates long-term commitments and multiple subscription costs",
                "Enable instant venue access through QR code technology, allowing users to work out anywhere, anytime",
                "Provide flexible payment options—pay for a single day or purchase passes that suit your fitness journey",
                "Automate check-ins and payments for a seamless, hassle-free experience at every venue",
                "Empower venue owners to maximize facility utilization and revenue through our innovative platform",
                "Build a transparent, accessible fitness ecosystem where everyone can explore diverse workout options",
                "Motivate users through gamification—streaks, leaderboards, and achievements that make fitness engaging",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-500 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs md:text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <p className="text-gray-300 flex-1 text-sm md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-6 md:mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <QrCode className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="text-xl md:text-4xl font-bold text-white">
                How RIVIO Works
              </h2>
            </div>
            <div className="space-y-3 md:space-y-6">
              {[
                {
                  step: "1",
                  title: "Sign Up & Create Account",
                  desc: "Download the app, sign up with your phone number, verify with OTP, and complete your profile.",
                },
                {
                  step: "2",
                  title: "Discover Gyms & Venues",
                  desc: "Browse nearby gyms, yoga studios, and wellness centers. See pricing, ratings, amenities, and opening hours.",
                },
                {
                  step: "3",
                  title: "Choose Your Access Method",
                  desc: "Pay-per-day for instant access or purchase passes (weekly, monthly, quarterly, semiannual, or yearly) for your favorite venues.",
                },
                {
                  step: "4",
                  title: "Add Wallet Balance or Buy Pass",
                  desc: "For pay-per-day, add money to your wallet. For passes, purchase directly and enjoy auto-attendance daily.",
                },
                {
                  step: "5",
                  title: "Visit & Scan QR Code",
                  desc: "Walk into the venue and scan their QR code. Payment is deducted automatically or covered by your active pass.",
                },
                {
                  step: "6",
                  title: "Track Your Progress",
                  desc: "Build streaks, climb leaderboards, earn achievements, and watch your fitness journey unfold.",
                },
                {
                  step: "7",
                  title: "Manage Your Passes",
                  desc: "View active passes, check remaining days, and renew or purchase new passes anytime from your dashboard.",
                },
                {
                  step: "8",
                  title: "Review & Rate Venues",
                  desc: "Share your experience by rating and reviewing venues. Help others make informed choices.",
                },
                {
                  step: "9",
                  title: "Explore Different Venues",
                  desc: "Try different gyms, yoga studios, or wellness centers without multiple subscriptions. Pay only for the days you use.",
                },
                {
                  step: "10",
                  title: "Build Your Fitness Journey",
                  desc: "Maintain consistency, compete with others, unlock achievements, and achieve your fitness goals with flexibility and motivation.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 md:gap-6 p-4 md:p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-emerald-500/30 transition-all"
                >
                  <div className="hidden md:flex w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl items-center justify-center font-bold text-white text-xl flex-shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-base md:text-xl mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why RIVIO */}
        <section className="mb-6 md:mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="text-xl md:text-4xl font-bold text-white">
                Why RIVIO?
              </h2>
            </div>
            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-10 text-center font-semibold">
              The fitness platform that solves real problems and delivers real
              value
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {[
                {
                  icon: "💵",
                  title: "Pay-Per-Day Revolution",
                  desc: "No more multiple subscriptions! Pay only for the days you use. Try a gym today, yoga tomorrow, wellness center next week—all without committing to expensive memberships.",
                },
                {
                  icon: "⚡",
                  title: "Instant Access, Zero Hassle",
                  desc: "Walk into any partner venue and start working out immediately. No waiting, no paperwork, no long-term commitments. Scan, pay, and go—fitness on your terms.",
                },
                {
                  icon: "🏆",
                  title: "Gamified Motivation",
                  desc: "Turn fitness into an exciting game! Build impressive streaks, compete on global leaderboards, unlock achievements, and watch your progress grow.",
                },
                {
                  icon: "🗺️",
                  title: "Nationwide Network",
                  desc: "Access gyms, studios, and wellness centers across cities and villages. Your fitness journey isn't limited to one location—explore, experience, and enjoy diverse workout options wherever you go.",
                },
                {
                  icon: "💳",
                  title: "Complete Financial Freedom",
                  desc: "Choose pay-per-day for ultimate flexibility or purchase passes for your favorite venues. All payments are secure, transparent, and tracked. Clear pricing from each venue—no surprises.",
                },
                {
                  icon: "🛡️",
                  title: "Trusted & Secure Platform",
                  desc: "Bank-level security for all transactions. Complete transparency in pricing, payments, and progress tracking. Your data and money are always protected.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 bg-gray-800/50 rounded-xl md:rounded-2xl border border-gray-700 hover:border-emerald-500/30 transition-all"
                >
                  <div className="text-2xl md:text-4xl mb-2 md:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Vision */}
        <section className="mb-6 md:mb-20">
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12 border border-emerald-500/20 shadow-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-4xl font-bold text-white">
                  The Founder Team's Vision
                </h2>
                <p className="text-emerald-400 text-sm italic mt-1">
                  (Amandeep Bishnoi)
                </p>
              </div>
            </div>
            <div className="space-y-3 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
              <p className="font-bold text-emerald-400 italic text-base md:text-xl">
                From the Founder Team,
              </p>
              <p>
                Imagine a world where fitness isn't locked behind expensive
                memberships or complicated contracts. Where you can walk into
                any gym, yoga studio, or fitness center—anywhere, anytime—and
                simply start your workout. No commitments, no restrictions, no
                barriers. That's the world we're building at RIVIO.
              </p>
              <p>
                We saw the frustration in people's eyes when they couldn't
                access fitness because of long-term contracts they couldn't
                afford, or because they were tied to a single location. We
                watched amazing fitness enthusiasts give up on their goals
                simply because the system wasn't designed for their lifestyle.
                That didn't sit right with us.
              </p>
              <p>
                So we built something different. RIVIO isn't just an app—it's
                your passport to fitness freedom. Pay for what you use, or
                choose a pass that fits your schedule. Build streaks, compete on
                leaderboards, and turn your fitness journey into an adventure.
                Every visit counts, every milestone matters, and every step
                forward is a victory worth celebrating.
              </p>
              <p>
                Our vision is simple: make fitness accessible to everyone,
                everywhere. Whether you're a fitness enthusiast or just starting
                your journey, whether you work out daily or occasionally, RIVIO
                adapts to you—not the other way around. We're not just building
                a platform; we're building a movement that empowers people to
                take control of their health and wellness on their own terms.
              </p>
              <p className="font-semibold text-emerald-400 italic text-base md:text-xl">
                Welcome to RIVIO—where your fitness journey begins, your goals
                become reality, and every workout brings you one step closer to
                the best version of yourself. Let's make fitness fun,
                accessible, and inspiring together! 😊
              </p>
            </div>
          </div>
        </section>

        {/* Legal entity — visible for DLT / regulatory verification */}
        <section className="mb-6 md:mb-20">
          <LegalEntityNotice variant="section" accent="emerald" />
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="text-xl md:text-4xl font-bold text-white">
                Get in Touch
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-8 leading-relaxed">
              Have questions, feedback, or want to partner with us? We'd love to
              hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="mailto:support@rivioapp.com"
                className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/20 text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                support@rivioapp.com
              </a>
              <a
                href="mailto:partners@rivioapp.com"
                className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 bg-gray-800 rounded-xl text-white font-semibold hover:bg-gray-700 transition-all border border-gray-700 text-sm md:text-base"
              >
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                partners@rivioapp.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
