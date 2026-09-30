'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ScreenshotShowcase from '@/components/ScreenshotShowcase'
import ProgressShowcase from '@/components/ProgressShowcase'

export default function FeaturesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="bg-white/80 backdrop-blur-xl backdrop-saturate-[180%] border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] text-center tracking-[-0.02em]"
          >
            App <span className="text-emerald-500">Features</span>
          </motion.h1>
          <p className="text-center text-[#86868b] mt-2 text-lg max-w-3xl mx-auto">
            Gym finder, workout tracker, pay per day, partner Team tools, and everything else in the
            Rivio member and business apps.
          </p>
        </div>
      </div>

      <ProgressShowcase />
      <ScreenshotShowcase showUser={true} showPartner={true} />
    </div>
  )
}
