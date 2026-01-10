'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Building2, QrCode, CheckCircle, DollarSign, BarChart3, Settings, MapPin, Activity, Wallet, Calendar, Star, Download } from 'lucide-react'
import Image from 'next/image'
import { DURATION, DELAY, EASE_IN_OUT, getStaggerDelay, getOrbDuration } from '@/animation-timing'

const partnerSteps = [
  { icon: Building2, text: 'Onboard Your Venue', description: 'Register your fitness business' },
  { icon: QrCode, text: 'Generate QR Codes', description: 'Get unique codes for each location' },
  { icon: CheckCircle, text: 'Real-Time Check-Ins', description: 'Monitor live customer entries' },
  { icon: DollarSign, text: 'Dual Revenue Streams', description: 'Maximize earnings potential' },
  { icon: BarChart3, text: 'Advanced Analytics', description: 'Data-driven business insights' },
  { icon: Settings, text: 'Multi-Location Management', description: 'Manage all venues from one platform' },
]

const partnerFeatures = [
  { title: 'Executive Dashboard', description: 'Real-time revenue tracking, visitor analytics, and performance metrics.' },
  { title: 'Revenue Management', description: 'Instant settlements, secure history, and bank-level protection.' },
  { title: 'Live Activity Monitor', description: 'Customer interactions: check-ins, subscriptions, and pass purchases.' },
  { title: 'QR Code Infrastructure', description: 'Enterprise-grade QR generation and management across locations.' },
  { title: 'Multi-Location Control', description: 'Centralized platform for multiple venues with capacity monitoring.' },
  { title: 'Business Intelligence', description: 'Forecasting, peak hour analysis, and growth insights.' },
  { title: 'Customer Management', description: 'Visit history, engagement metrics, and retention tools.' },
  { title: 'Subscription Lifecycle', description: 'End-to-end subscription management with alerts and renewals.' },
  { title: 'Business Operations', description: 'Active subscriptions, expiring passes, pricing, and location management.' },
]

export default function PartnerFeaturesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const id = setInterval(() => setStep((prev) => (prev + 1) % partnerSteps.length), 3200)
    return () => clearInterval(id)
  }, [isInView])

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.MEDIUM }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            RIVIO Partner <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Features</span>
          </motion.h1>
          <p className="text-center text-gray-400 mt-2 text-lg">
            Explore the powerful tools built for partners
          </p>
        </div>
      </div>

      <section ref={ref} className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-10"
              style={{
                width: `${520 + i * 100}px`,
                height: `${520 + i * 100}px`,
                background: '#d4af37',
                left: `${i * 25}%`,
                top: `${i * 20}%`,
              }}
              animate={{ x: [0, 60, -40, 0], y: [0, 40, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: getOrbDuration(i, 18), repeat: Infinity, ease: EASE_IN_OUT, delay: i }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Feature cards (9) with subtle animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: DURATION.MEDIUM_FAST, delay: getStaggerDelay(index, DELAY.VERY_SHORT, DELAY.STAGGER_SMALL) }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-amber-500/20 rounded-2xl p-6 shadow-xl"
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

