'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Download, MapPin, QrCode, Star, CheckCircle, TrendingUp, CreditCard, Activity, BarChart3, Settings, Building2, DollarSign } from 'lucide-react'
import Image from 'next/image'

export default function AppTabs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const userSteps = [
    { icon: MapPin, text: 'Discover Nearby Venues', description: 'Find gyms within 100m radius' },
    { icon: Activity, text: 'Select Activity & Venue', description: 'Choose your preferred workout' },
    { icon: QrCode, text: 'Scan QR Code & Check-In', description: 'Instant access, no waiting' },
    { icon: Star, text: 'Select Amenities & Start', description: 'Customize your experience' },
    { icon: TrendingUp, text: 'Build Streaks & Achievements', description: 'Track your fitness journey' },
    { icon: CreditCard, text: 'Flexible Payment & Access', description: 'Pay only for days you use' },
  ]

  const partnerSteps = [
    { icon: Building2, text: 'Onboard Your Venue', description: 'Register your fitness business' },
    { icon: QrCode, text: 'Generate QR Codes', description: 'Get unique codes for each location' },
    { icon: CheckCircle, text: 'Real-Time Check-Ins', description: 'Monitor live customer entries' },
    { icon: DollarSign, text: 'Dual Revenue Streams', description: 'Maximize earnings potential' },
    { icon: BarChart3, text: 'Advanced Analytics', description: 'Data-driven business insights' },
    { icon: Settings, text: 'Multi-Location Management', description: 'Manage all venues from one platform' },
  ]

  const [userStep, setUserStep] = useState(0)
  const [partnerStep, setPartnerStep] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const userInterval = setInterval(() => {
      setUserStep((prev) => (prev + 1) % userSteps.length)
    }, 3000)

    const partnerInterval = setInterval(() => {
      setPartnerStep((prev) => (prev + 1) % partnerSteps.length)
    }, 3200)

    return () => {
      clearInterval(userInterval)
      clearInterval(partnerInterval)
    }
  }, [isInView, userSteps.length, partnerSteps.length])

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
          className="text-center mb-16 gpu-accelerated"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 gpu-accelerated"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Explore Our <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Apps</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Two powerful platforms. One unified ecosystem.
          </p>
        </motion.div>

        {/* Both Apps Side by Side with Animations */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* User App Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-emerald-500/30 backdrop-blur-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/logos/rivio-user-light.png"
                  alt="RIVIO User App Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-3xl font-bold text-white">RIVIO User App</h3>
                  <p className="text-emerald-400 font-medium">Your Fitness Journey, Your Way</p>
                </div>
              </div>

              {/* Animated Phone Mockup */}
              <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                <motion.div
                  className="relative w-64 h-[480px] md:w-72 md:h-[540px] bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 shadow-2xl border-2 md:border-4 border-emerald-500/50"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)',
                  }}
                >
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 flex items-center justify-between px-6 z-10">
                      <div className="text-white text-xs font-semibold">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="pt-12 h-full flex flex-col items-center justify-center gap-6 px-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={userStep}
                          initial={{ opacity: 0, scale: 0.8, y: 50 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: -50 }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                          className="flex flex-col items-center gap-6 w-full"
                        >
                          {/* Icon */}
                          <motion.div
                            className="w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center bg-emerald-500/30 border-4 border-emerald-400/60 shadow-2xl"
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            style={{
                              boxShadow: '0 0 40px rgba(16, 185, 129, 0.6), 0 0 80px rgba(16, 185, 129, 0.3)',
                            }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            >
                              {(() => {
                                const IconComponent = userSteps[userStep].icon
                                return (
                                  <IconComponent
                                    className="w-16 h-16 md:w-20 md:h-20 text-emerald-300"
                                    style={{ filter: 'drop-shadow(0 0 10px currentColor)' }}
                                  />
                                )
                              })()}
                            </motion.div>
                          </motion.div>

                          {/* Text */}
                          <div className="text-center">
                            <h3
                              className="text-2xl md:text-3xl font-bold mb-2 text-emerald-300"
                              style={{
                                textShadow: '0 0 20px currentColor, 0 0 40px currentColor',
                              }}
                            >
                              {userSteps[userStep].text}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base font-medium">
                              {userSteps[userStep].description}
                            </p>
                          </div>

                          {/* Progress Indicators */}
                          <div className="flex gap-2 mt-4">
                            {userSteps.map((_, index) => {
                              const isActive = index === userStep
                              return (
                                <motion.div
                                  key={index}
                                  className={`h-2 rounded-full ${
                                    isActive ? 'bg-emerald-400' : 'bg-gray-700'
                                  }`}
                                  animate={{
                                    width: isActive ? 32 : 8,
                                  }}
                                  transition={{ duration: 0.3 }}
                                />
                              )
                            })}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors border border-gray-700"
                >
                  <Download className="w-5 h-5" />
                  Download for Android
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Partner App Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-amber-500/30 backdrop-blur-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/logos/rivio-partner-gold-lighttext.png"
                  alt="RIVIO Partners Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-3xl font-bold text-white">RIVIO Partners</h3>
                  <p className="text-amber-400 font-medium">Grow Your Fitness Business</p>
                </div>
              </div>

              {/* Animated Phone Mockup */}
              <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                <motion.div
                  className="relative w-64 h-[480px] md:w-72 md:h-[540px] bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 shadow-2xl border-2 md:border-4 border-amber-500/50"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.4)',
                  }}
                >
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 flex items-center justify-between px-6 z-10">
                      <div className="text-white text-xs font-semibold">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="pt-12 h-full flex flex-col items-center justify-center gap-6 px-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={partnerStep}
                          initial={{ opacity: 0, scale: 0.8, y: 50 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: -50 }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                          className="flex flex-col items-center gap-6 w-full"
                        >
                          {/* Icon */}
                          <motion.div
                            className="w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center bg-amber-500/30 border-4 border-amber-400/60 shadow-2xl"
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            style={{
                              boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)',
                            }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            >
                              {(() => {
                                const IconComponent = partnerSteps[partnerStep].icon
                                return (
                                  <IconComponent
                                    className="w-16 h-16 md:w-20 md:h-20 text-amber-300"
                                    style={{ filter: 'drop-shadow(0 0 10px currentColor)' }}
                                  />
                                )
                              })()}
                            </motion.div>
                          </motion.div>

                          {/* Text */}
                          <div className="text-center">
                            <h3
                              className="text-2xl md:text-3xl font-bold mb-2 text-amber-300"
                              style={{
                                textShadow: '0 0 20px currentColor, 0 0 40px currentColor',
                              }}
                            >
                              {partnerSteps[partnerStep].text}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base font-medium">
                              {partnerSteps[partnerStep].description}
                            </p>
                          </div>

                          {/* Progress Indicators */}
                          <div className="flex gap-2 mt-4">
                            {partnerSteps.map((_, index) => {
                              const isActive = index === partnerStep
                              return (
                                <motion.div
                                  key={index}
                                  className={`h-2 rounded-full ${
                                    isActive ? 'bg-amber-400' : 'bg-gray-700'
                                  }`}
                                  animate={{
                                    width: isActive ? 32 : 8,
                                  }}
                                  transition={{ duration: 0.3 }}
                                />
                              )
                            })}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download for iOS
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors border border-gray-700"
                >
                  <Download className="w-5 h-5" />
                  Download for Android
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
