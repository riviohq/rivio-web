'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { MapPin, Activity, QrCode, Star, TrendingUp, CreditCard, Download } from 'lucide-react'
import Image from 'next/image'

const userSteps = [
  { icon: MapPin, text: 'Discover Nearby Venues', description: 'Find gyms within 100m radius' },
  { icon: Activity, text: 'Select Activity & Venue', description: 'Choose your preferred workout' },
  { icon: QrCode, text: 'Scan QR Code & Check-In', description: 'Instant access, no waiting' },
  { icon: Star, text: 'Select Amenities & Start', description: 'Customize your experience' },
  { icon: TrendingUp, text: 'Build Streaks & Achievements', description: 'Track your fitness journey' },
  { icon: CreditCard, text: 'Flexible Payment & Access', description: 'Pay only for days you use' },
]

const userFeatures = [
  { title: 'Intelligent Discovery', description: 'AI-powered venue discovery with real-time availability and proximity-based recommendations.' },
  { title: 'Seamless Check-In', description: 'One-tap QR code scanning with instant verification and automated attendance tracking.' },
  { title: 'Gamified Engagement', description: 'Streaks, leaderboards, and achievements to keep you motivated.' },
  { title: 'Smart Wallet', description: 'Instant top-ups, transparent history, and automated pay-per-day deductions.' },
  { title: 'Advanced Booking', description: 'Reserve slots with live availability and instant confirmations.' },
  { title: 'Personalized Analytics', description: 'Progress metrics, insights, and social rankings in one view.' },
]

export default function UserFeaturesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const id = setInterval(() => setStep((prev) => (prev + 1) % userSteps.length), 3000)
    return () => clearInterval(id)
  }, [isInView])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            RIVIO User App <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Features</span>
          </motion.h1>
          <p className="text-center text-gray-400 mt-2 text-lg">
            Explore the key experiences of the RIVIO User app
          </p>
        </div>
      </div>

      <section ref={ref} className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-10"
              style={{
                width: `${520 + i * 100}px`,
                height: `${520 + i * 100}px`,
                background: '#10b981',
                left: `${i * 25}%`,
                top: `${i * 20}%`,
              }}
              animate={{ x: [0, 60, -40, 0], y: [0, 40, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 18 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Feature cards with subtle animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-emerald-500/20 rounded-2xl p-6 shadow-xl"
              >
                <div className="text-lg font-bold text-white mb-2">{feature.title}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

