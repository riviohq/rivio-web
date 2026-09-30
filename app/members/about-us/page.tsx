"use client";

import { Eye, Target, Trophy, Users, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
              About RIVIO
            </h1>
            <p className="text-xl md:text-3xl text-emerald-400 mb-2 md:mb-4 font-semibold">
              Gym Finder &amp; Workout Tracker for India
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto">
              Founded by{" "}
              <Link href="/founder/" className="text-emerald-400 font-semibold hover:underline">
                Amandeep Bishnoi
              </Link>
              . RIVIO is a gym finder and workout tracker with pay-per-day access. Discover venues, log training in My Progress, and pay only for the days you use.
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-8 italic">
              "Your route to movement."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
                <Trophy className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-300 text-xs md:text-sm font-medium">
                  Stable production live on App Store &amp; Google Play
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-amber-500/15 backdrop-blur-sm rounded-full border border-amber-500/30">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-200 text-xs md:text-sm font-medium">
                  10 partner venues live across India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-20">
        {/* RIVIO Today */}
        <section className="mb-6 md:mb-20 mt-8 md:mt-12">
          <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12 border border-emerald-500/20 shadow-2xl">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              RIVIO today
            </h2>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">What is RIVIO?</strong> RIVIO is a gym finder and workout tracker with pay-per-day access in India. One app to discover gyms and studios, check in with QR, top up your wallet, and track workouts in My Progress.
              </p>
              <p>
                RIVIO is live in production with stable member and partner apps on{" "}
                <strong className="text-white">App Store</strong> and{" "}
                <strong className="text-white">Google Play</strong>. Members can top up a wallet,
                discover venues, scan QR codes, log training, and pay per day, with no long-term gym subscription
                required.
              </p>
              <p>
                We are proud to celebrate our first{" "}
                <strong className="text-emerald-400">10 partner venues in India</strong>. These are
                gyms, studios, and wellness spaces running live check-ins, passes, and settlements on RIVIO
                Partner. That network is what makes pay-per-day fitness real for members on the ground.
              </p>
              <p>
                Read the full milestone on{" "}
                <Link href="/pulse/" className="text-emerald-400 font-semibold hover:underline">
                  Rivio Pulse
                </Link>
                , meet the founder on{" "}
                <Link href="/founder/" className="text-emerald-400 font-semibold hover:underline">
                  Amandeep Bishnoi&apos;s page
                </Link>
                , or{" "}
                <Link href="/download/" className="text-emerald-400 font-semibold hover:underline">
                  download the apps
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

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
                RIVIO pairs flexible pay-per-day access with tools to track your training. Pay only for the days you visit, while My Progress helps you log workouts, body measurements, and trends over time.
              </p>
              <p>
                Why commit to one gym when you want yoga today, a studio tomorrow, and a different gym next week? Our vision is a fitness ecosystem in India where discovery, access, and progress live in one place. Members explore freely, partners run smooth operations, and everyone builds sustainable habits without rigid contracts.
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
              Our mission is to make fitness flexible in India through gym discovery, pay-per-day access, and My Progress workout tracking. We connect members, venues, and coaches in one trusted app.
            </p>
            <div className="grid md:grid-cols-2 gap-2 md:gap-4">
              {[
                "Gym finder for gyms, yoga studios, and wellness venues across India",
                "My Progress workout tracking for sessions, measurements, insights, and personal records",
                "Pay-per-day access and an in-app wallet so members pay only for days they train",
                "QR check-in at partner venues, plus passes for longer access",
                "Studio Team profiles for coaches and staff at each venue",
                "Streaks, leaderboards, and achievements tied to venue check-ins",
                "Keep check-ins and payments simple at every partner venue",
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

        {/* My Progress */}
        <section className="mb-6 md:mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h2 className="text-xl md:text-4xl font-bold text-white">
                My Progress
              </h2>
            </div>
            <p className="text-sm md:text-lg text-gray-300 mb-4 md:mb-8 leading-relaxed">
              My Progress is Rivio&apos;s built-in workout tracker: a personal training diary for logged workouts, separate from gym streaks that come from venue check-ins.
            </p>
            <div className="grid md:grid-cols-3 gap-3 md:gap-4">
              {[
                { title: "Workout logging", text: "Exercises with sets, weight, reps, duration, or distance, plus bodyweight, how you felt, and notes for each session." },
                { title: "Workout history", text: "Recent sessions and a full calendar of past training so your history stays easy to review." },
                { title: "Insights and records", text: "Period-based overview, measurements, and personal records that reflect the date range you care about." },
              ].map((item) => (
                <div key={item.title} className="p-4 md:p-5 bg-gray-800/50 rounded-xl md:rounded-2xl border border-gray-700">
                  <h3 className="font-bold text-white text-base md:text-lg mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.text}</p>
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
                  desc: "No more multiple subscriptions! Pay only for the days you use. Try a gym today, yoga tomorrow, wellness center next week, all without committing to expensive memberships.",
                },
                {
                  icon: "⚡",
                  title: "Instant Access, Zero Hassle",
                  desc: "Walk into any partner venue and start working out immediately. No waiting, no paperwork, no long-term commitments. Scan, pay, and go. Fitness on your terms.",
                },
                {
                  icon: "🏆",
                  title: "Gamified Motivation",
                  desc: "Turn fitness into an exciting game! Build impressive streaks, compete on global leaderboards, unlock achievements, and watch your progress grow.",
                },
                {
                  icon: "🗺️",
                  title: "Nationwide Network",
                  desc: "Access gyms, studios, and wellness centers across cities and villages. Your fitness journey isn't limited to one location, so explore, experience, and enjoy diverse workout options wherever you go.",
                },
                {
                  icon: "💳",
                  title: "Complete Financial Freedom",
                  desc: "Choose pay-per-day for ultimate flexibility or purchase passes for your favorite venues. All payments are secure, transparent, and tracked. Clear pricing from each venue, with no surprises.",
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
                  Amandeep Bishnoi, Founder of RIVIO
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
                any gym, yoga studio, or fitness center, anywhere and anytime, and
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
                So we built Rivio around how people actually train: find a gym near you, check in with QR, pay for the day or pick a pass, and log sets in My Progress when you want the history. Streaks and leaderboards are there when you want the extra push.
              </p>
              <p>
                Our vision is simple: make fitness accessible without locking people into long memberships. Whether you train daily or a few times a month, Rivio is built around how you show up, not around a fixed plan you forget to cancel.
              </p>
              <p className="font-semibold text-emerald-400 italic text-base md:text-xl">
                Welcome to RIVIO, where your fitness journey begins, your goals
                become reality, and every workout brings you one step closer to
                the best version of yourself.
              </p>
              <p>
                <Link href="/founder/" className="text-emerald-400 font-semibold hover:underline">
                  Read the full founder story →
                </Link>
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
