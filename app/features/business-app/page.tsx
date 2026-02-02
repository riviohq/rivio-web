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
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl backdrop-saturate-[180%] border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] text-center tracking-[-0.02em]"
          >
            Business <span className="text-amber-500">App Features</span>
          </motion.h1>
          <p className="text-center text-[#86868b] mt-2 text-lg">
            Explore the enterprise-grade tools built for fitness businesses
          </p>
        </div>
      </div>

      {/* Feature Cards Section - Show only partner/business cards */}
      <ScreenshotShowcase showUser={false} showPartner={true} />
    </div>
  )
}

