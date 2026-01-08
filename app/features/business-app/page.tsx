'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import ScreenshotShowcase from '@/components/ScreenshotShowcase'

export default function BusinessAppFeaturesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Business <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">App Features</span>
          </motion.h1>
          <p className="text-center text-gray-400 mt-2 text-lg">
            Explore the enterprise-grade tools built for fitness businesses
          </p>
        </div>
      </div>

      {/* Feature Cards Section - Show only partner/business cards */}
      <ScreenshotShowcase showUser={false} showPartner={true} />
    </div>
  )
}

