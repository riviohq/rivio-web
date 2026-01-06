'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Building2, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function AppTabs() {
  const [activeTab, setActiveTab] = useState<'user' | 'partner'>('user')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const userFeatures = [
    'Pay-per-day access to premium venues nationwide',
    'Flexible pass options: daily, weekly, monthly, or annual',
    'Gamified experience with streaks, leaderboards, and achievements',
    'Comprehensive progress tracking and analytics',
    'Community-driven reviews and ratings system',
    'Access to diverse fitness modalities: gyms, yoga, sports, wellness',
  ]

  const partnerFeatures = [
    'Unique QR code system for seamless check-ins',
    'Multiple revenue streams: pay-per-day and pass sales',
    'Real-time analytics dashboard with actionable insights',
    'Multi-location management from a single platform',
    'Advanced pass group management for venue networks',
    'Customer engagement tools and review management',
  ]

  return (
    <section
      id="apps"
      ref={ref}
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Optimized floating background clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-4 gpu-accelerated"
            style={{
              width: `${500 + i * 100}px`,
              height: `${500 + i * 100}px`,
              background: i % 2 === 0 ? '#10b981' : '#d4af37',
              left: `${i * 33}%`,
              top: `${i * 30}%`,
              willChange: 'transform',
            }}
            animate={{
              x: [0, 60, -30, 0],
              y: [0, 50, -25, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: i * 2,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 gpu-accelerated"
          style={{ willChange: 'transform, opacity' }}
        >
            <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 gpu-accelerated"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Our <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">Apps</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Two powerful platforms. One unified ecosystem.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-black/50 rounded-full p-2 shadow-2xl border border-emerald-500/30 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('user')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'user'
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/50'
                  : 'text-gray-400 hover:text-emerald-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                <span>User App</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'partner'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-500/50'
                  : 'text-gray-400 hover:text-gold-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Partner App</span>
              </div>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-700 gpu-accelerated"
            style={{ willChange: 'transform, opacity' }}
          >
            {activeTab === 'user' ? (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Image
                      src="/logos/rivio-user-light.png"
                      alt="RIVIO User App Logo"
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                    <div>
                      <h3 className="text-3xl font-bold text-white">RIVIO User App</h3>
                      <p className="text-gray-200 font-medium">Your Fitness Journey, Your Way</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-200 mb-6 font-medium leading-relaxed">
                    Experience unprecedented freedom in fitness. Access premium gyms, yoga studios, sports facilities, and wellness centers across India with our revolutionary pay-per-day model. No subscriptions, no commitments—just pure flexibility. Build streaks, compete globally, and unlock achievements as you transform your fitness journey.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {userFeatures.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-200 font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download for iOS
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download for Android
                    </motion.a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white"
                  >
                    <div className="space-y-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-semibold">Fitness Activities</p>
                        <p className="text-sm opacity-90">Gyms, Yoga, Sports, Wellness</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-semibold">Flexible Access</p>
                        <p className="text-sm opacity-90">Pay-per-day or passes</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-semibold">Gamification</p>
                        <p className="text-sm opacity-90">Streaks, leaderboards, achievements</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Image
                      src="/logos/rivio-partner-gold-lighttext.png"
                      alt="RIVIO Partners Logo"
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                    <div>
                      <h3 className="text-3xl font-bold text-white">RIVIO Partners</h3>
                      <p className="text-gray-200 font-medium">Grow Your Fitness Business</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-200 mb-6 font-medium leading-relaxed">
                    Join India's fastest-growing fitness network and unlock new revenue streams. Our platform helps you maximize facility utilization, reduce customer acquisition costs, and increase revenue through pay-per-day users and flexible pass sales. Manage multiple locations, track performance in real-time, and scale your business with data-driven insights.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {partnerFeatures.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-200 font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-white rounded-full font-semibold hover:bg-gold-600 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download for iOS
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download for Android
                    </motion.a>
                  </div>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gold-500 text-gold-400 rounded-full font-semibold hover:bg-gold-500/10 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Join as Partner
                  </motion.a>
                </div>
                <div className="hidden md:block">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-white"
                  >
                    <div className="space-y-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-semibold">Business Management</p>
                        <p className="text-sm opacity-90">Dashboard, analytics, earnings</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-semibold">Multiple Locations</p>
                        <p className="text-sm opacity-90">Manage all venues from one place</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-semibold">Revenue Growth</p>
                        <p className="text-sm opacity-90">Maximize facility utilization</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

