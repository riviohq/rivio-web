'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Building2, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function AppTabs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const userProcess = [
    {
      step: '1',
      title: 'Discover Nearby Venues',
      description: 'Open the app and instantly see all fitness venues within 100m of your location. Filter by activity type (gym, yoga, sports, swimming), view real-time availability, compare pricing, and read authentic reviews from the community.',
    },
    {
      step: '2',
      title: 'Select Activity & Venue',
      description: 'Choose your preferred activity and venue. Browse detailed amenities, check-in photos, operating hours, and current capacity. Make an informed decision based on your fitness goals and preferences.',
    },
    {
      step: '3',
      title: 'Scan QR Code & Check-In',
      description: 'Arrive at the venue and scan the unique QR code displayed at the entrance. Instant verification grants you immediate access. No waiting, no paperwork—just seamless entry to start your workout.',
    },
    {
      step: '4',
      title: 'Select Amenities & Start',
      description: 'Choose your preferred amenities (locker, towel service, equipment access) and begin your session. The app tracks your workout duration and automatically calculates your pay-per-day charge.',
    },
    {
      step: '5',
      title: 'Build Streaks & Achievements',
      description: 'Every check-in increases your streak counter. Compete on global leaderboards, unlock achievements, and earn rewards. Track your fitness journey with comprehensive analytics showing your progress over time.',
    },
    {
      step: '6',
      title: 'Flexible Payment & Access',
      description: 'Pay only for the days you use—no subscriptions, no commitments. Your wallet balance updates in real-time. Access any venue, any time, anywhere across India. Complete freedom to work out on your terms.',
    },
  ]

  const partnerProcess = [
    {
      step: '1',
      title: 'Onboard Your Venue',
      description: 'Register your fitness business and create your venue profile. Add multiple locations, set operating hours, upload photos, list amenities, and configure pricing for pay-per-day and subscription passes.',
    },
    {
      step: '2',
      title: 'Generate QR Codes',
      description: 'Receive unique QR codes for each location and activity type. Display them at entrances for instant check-ins. The system automatically tracks all customer entries and manages access control.',
    },
    {
      step: '3',
      title: 'Real-Time Check-Ins',
      description: 'Monitor live check-ins as customers scan QR codes. View active sessions, track facility utilization in real-time, and receive instant notifications for new check-ins and customer activities.',
    },
    {
      step: '4',
      title: 'Dual Revenue Streams',
      description: 'Maximize earnings through pay-per-day users and subscription pass sales. Track both revenue channels separately, view earnings breakdown, and optimize pricing strategies to fill unused capacity.',
    },
    {
      step: '5',
      title: 'Advanced Analytics Dashboard',
      description: 'Access comprehensive business intelligence: peak hours, customer demographics, revenue trends, facility utilization rates, subscription lifecycle, expiring passes, and predictive analytics for growth.',
    },
    {
      step: '6',
      title: 'Multi-Location Management',
      description: 'Manage all your venues from one unified platform. Coordinate operations across multiple locations, track performance individually, manage pass groups, handle customer relationships, and scale your business efficiently.',
    },
  ]

  return (
    <section
      id="apps"
      ref={ref}
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Enhanced floating background with gradient layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-6 gpu-accelerated"
            style={{
              width: `${600 + i * 120}px`,
              height: `${600 + i * 120}px`,
              background: i % 2 === 0 ? '#10b981' : '#d4af37',
              left: `${i * 25}%`,
              top: `${i * 20}%`,
              willChange: 'transform',
            }}
            animate={{
              x: [0, 80, -40, 0],
              y: [0, 60, -30, 0],
              scale: [1, 1.3, 0.95, 1],
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />
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

        {/* Both Apps Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* User App */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-emerald-500/30 backdrop-blur-xl gpu-accelerated"
            style={{ willChange: 'transform, opacity' }}
          >
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
              Experience unprecedented freedom in fitness. Access premium gyms, yoga studios, sports facilities, and wellness centers across India with our revolutionary pay-per-day model.
            </p>
            <div className="space-y-4 mb-8">
              {userProcess.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent rounded-xl p-5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30 flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                      <span className="text-emerald-300 font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-medium text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
          </motion.div>

          {/* Partner App */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-gold-500/30 backdrop-blur-xl gpu-accelerated"
            style={{ willChange: 'transform, opacity' }}
          >
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
              Join India's fastest-growing fitness network and unlock new revenue streams. Maximize facility utilization, reduce costs, and scale your business with data-driven insights.
            </p>
            <div className="space-y-4 mb-8">
              {partnerProcess.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-transparent rounded-xl p-5 border border-gold-500/20 hover:border-gold-500/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center border border-gold-500/30 flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                      <span className="text-gold-300 font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-medium text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

