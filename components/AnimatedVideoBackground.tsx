'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Activity, QrCode, Smartphone, CheckCircle, Zap, CreditCard, MapPin, TrendingUp, Star, Waves, Target, Leaf } from 'lucide-react'
import { useEffect, useState } from 'react'

const scenes = [
  { icon: Smartphone, text: 'Open RIVIO App', color: 'emerald', description: 'Launch the app on your phone' },
  { icon: MapPin, text: 'Find Nearby Venues', color: 'emerald', description: 'Search gyms within 100m radius' },
  { icon: Activity, text: 'Select Activity', color: 'emerald', description: 'Choose Gym, Yoga, Sports, or Swim' },
  { icon: QrCode, text: 'Scan QR Code', color: 'emerald', description: 'Point camera at venue QR code' },
  { icon: Star, text: 'Select Amenities', color: 'gold', description: 'Mark preferred amenities' },
  { icon: CheckCircle, text: 'Check-in Success', color: 'emerald', description: 'You\'re checked in!' },
  { icon: CreditCard, text: 'Pay Per Day', color: 'gold', description: 'Pay only ₹99 for today' },
  { icon: TrendingUp, text: 'Increase Streak', color: 'emerald', description: 'Build your workout streak' },
  { icon: Activity, text: 'Start Workout', color: 'emerald', description: 'Time to work out!' },
  { icon: Zap, text: 'Access Any Venue', color: 'gold', description: 'Gym, Yoga, Sports, Swim - All!' },
]

export default function AnimatedVideoBackground() {
  const [currentScene, setCurrentScene] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length)
    }, 3500) // Change scene every 3.5 seconds for better visibility

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Animated Background Gradient - More Visible */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%), #000000',
            'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%), radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%), #000000',
            'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%), #000000',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Animation Scene */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-8"
          >
            {/* Phone Mockup - Larger and More Visible */}
            <motion.div
              className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-5 shadow-2xl border-4 border-gray-700"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.3)',
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
                  {/* Current Scene Icon - Larger and More Visible */}
                  <motion.div
                    className={`w-40 h-40 rounded-3xl flex items-center justify-center ${
                      scenes[currentScene].color === 'emerald'
                        ? 'bg-emerald-500/30 border-4 border-emerald-400/60 shadow-2xl'
                        : 'bg-gold-500/30 border-4 border-gold-400/60 shadow-2xl'
                    }`}
                    animate={{
                      scale: [1, 1.15, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      boxShadow: scenes[currentScene].color === 'emerald'
                        ? '0 0 40px rgba(16, 185, 129, 0.6), 0 0 80px rgba(16, 185, 129, 0.3)'
                        : '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {(() => {
                        const IconComponent = scenes[currentScene].icon
                        return (
                          <IconComponent
                            className={`w-20 h-20 ${
                              scenes[currentScene].color === 'emerald'
                                ? 'text-emerald-300'
                                : 'text-gold-300'
                            }`}
                            style={{
                              filter: 'drop-shadow(0 0 10px currentColor)',
                            }}
                          />
                        )
                      })()}
                    </motion.div>
                  </motion.div>

                  {/* Scene Text - Larger and More Visible */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3
                      className={`text-3xl font-bold mb-3 ${
                        scenes[currentScene].color === 'emerald'
                          ? 'text-emerald-300'
                          : 'text-gold-300'
                      }`}
                      style={{
                        textShadow: '0 0 20px currentColor, 0 0 40px currentColor',
                      }}
                    >
                      {scenes[currentScene].text}
                    </h3>
                    <p className="text-gray-300 text-base font-medium">
                      {scenes[currentScene].description}
                    </p>
                  </motion.div>

                  {/* Progress Indicators */}
                  <div className="flex gap-2 mt-4">
                    {scenes.map((scene, index) => {
                      const isActive = index === currentScene
                      return (
                        <motion.div
                          key={index}
                          className={`h-2 rounded-full ${
                            isActive
                              ? scene.color === 'emerald'
                                ? 'bg-emerald-400'
                                : 'bg-gold-400'
                              : 'bg-gray-700'
                          }`}
                          animate={{
                            width: isActive ? 32 : 8,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Find Nearby Venues (Search Interface) Animation */}
      <AnimatePresence>
        {currentScene === 1 && (
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black/80 rounded-2xl p-6 backdrop-blur-xl border-2 border-emerald-400/40 max-w-md w-full mx-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-emerald-400" />
                <h4 className="text-xl font-bold text-emerald-300">Search Nearby Venues</h4>
              </div>
              
              {/* Search Bar */}
              <motion.div
                className="bg-gray-800/50 rounded-lg p-3 mb-4 flex items-center gap-2"
                animate={{
                  borderColor: ['rgba(16, 185, 129, 0.3)', 'rgba(16, 185, 129, 0.6)', 'rgba(16, 185, 129, 0.3)'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ border: '2px solid' }}
              >
                <motion.div
                  className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <span className="text-gray-400 text-sm">Searching within 100m...</span>
              </motion.div>

              {/* Nearby Venues List */}
              <div className="space-y-2">
                {[
                  { name: 'Elite Fitness', distance: '45m', price: '₹200/day', status: 'Open' },
                  { name: 'Zen Yoga Studio', distance: '78m', price: '₹150/day', status: 'Open' },
                  { name: 'Swim Center', distance: '95m', price: '₹250/day', status: 'Open' },
                ].map((venue, index) => (
                  <motion.div
                    key={venue.name}
                    className="bg-emerald-500/20 rounded-lg p-3 border border-emerald-400/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <div className="text-sm font-semibold text-white">{venue.name}</div>
                        <div className="text-xs text-emerald-300 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {venue.distance} away
                        </div>
                      </div>
                      <motion.span
                        className="text-xs px-2 py-1 rounded bg-emerald-500/30 text-emerald-300"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {venue.status}
                      </motion.span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{venue.price}</div>
                  </motion.div>
                ))}
              </div>

              {/* 100m Radius Indicator */}
              <motion.div
                className="mt-4 text-center"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs text-emerald-400 flex items-center justify-center gap-1">
                  <motion.div
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Showing venues within 100m radius
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Activity Selection (Gym, Yoga, Sports, Swim) */}
      <AnimatePresence>
        {currentScene === 2 && (
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[
              { Icon: Activity, label: 'Gym', color: 'emerald' },
              { Icon: Leaf, label: 'Yoga', color: 'emerald' },
              { Icon: Target, label: 'Sports', color: 'gold' },
              { Icon: Waves, label: 'Swim', color: 'emerald' },
            ].map(({ Icon, label, color }, index) => (
              <motion.div
                key={label}
                className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 ${
                  color === 'emerald'
                    ? 'bg-emerald-500/30 border-2 border-emerald-400/60'
                    : 'bg-gold-500/30 border-2 border-gold-400/60'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                }}
                style={{
                  boxShadow: color === 'emerald'
                    ? '0 0 30px rgba(16, 185, 129, 0.6)'
                    : '0 0 30px rgba(212, 175, 55, 0.6)',
                }}
              >
                <Icon className={`w-12 h-12 ${
                  color === 'emerald' ? 'text-emerald-300' : 'text-gold-300'
                }`} />
                <span className={`text-sm font-semibold ${
                  color === 'emerald' ? 'text-emerald-300' : 'text-gold-300'
                }`}>
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scanning Lines Animation (for QR code scene) */}
      <AnimatePresence>
        {currentScene === 3 && (
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Scanning Lines - More Visible */}
            <motion.div
              className="absolute w-80 h-80 border-4 border-emerald-400 rounded-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                boxShadow: '0 0 40px rgba(16, 185, 129, 0.8), 0 0 80px rgba(16, 185, 129, 0.4)',
              }}
            />
            <motion.div
              className="absolute w-80 h-2 bg-emerald-400"
              animate={{
                y: [-160, 160, -160],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                boxShadow: '0 0 20px rgba(16, 185, 129, 1)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Amenities Selection Animation */}
      <AnimatePresence>
        {currentScene === 4 && (
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {['AC', 'WiFi', 'Parking', 'Shower'].map((amenity, index) => (
              <motion.div
                key={amenity}
                className="px-6 py-3 bg-gold-500/30 border-2 border-gold-400/60 rounded-lg text-gold-300 font-bold text-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 200,
                }}
                style={{
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
                }}
              >
                {amenity}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Animation (for payment scene) - More Visible */}
      <AnimatePresence>
        {currentScene === 6 && (
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-7xl font-bold text-gold-300"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                textShadow: '0 0 40px rgba(212, 175, 55, 0.8), 0 0 80px rgba(212, 175, 55, 0.4)',
              }}
            >
              ₹99
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Streak Animation */}
      <AnimatePresence>
        {currentScene === 7 && (
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="text-6xl font-bold text-emerald-300 mb-3" style={{
                textShadow: '0 0 30px rgba(16, 185, 129, 0.8)',
              }}>
                🔥 7 Day Streak
              </div>
              <div className="text-2xl text-emerald-400 font-semibold">
                Keep it going!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
