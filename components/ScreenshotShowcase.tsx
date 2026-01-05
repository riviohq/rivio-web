'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Smartphone, Building2, TrendingUp, Users, Wallet, Activity, MapPin, Star, Zap, Award } from 'lucide-react'

// Custom hook for count up animation - must be defined before components that use it
function useCountUp(end: number, duration: number = 2, start: number = 0) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const [hasStarted, setHasStarted] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!hasStarted && end > start) {
      setHasStarted(true)
      const increment = (end - start) / (duration * 60)
      timerRef.current = setInterval(() => {
        countRef.current += increment
        if (countRef.current >= end) {
          setCount(end)
          if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
          }
        } else {
          setCount(Math.floor(countRef.current))
        }
      }, 1000 / 60)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [hasStarted, end, duration, start])

  return count
}

// Animated Home Screen Component
function AnimatedHomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const venues = [
    { name: 'Elite Fitness Center', price: '₹200/day', distance: '0.5 km', type: 'Gym' },
    { name: 'Zen Yoga Studio', price: '₹150/day', distance: '1.2 km', type: 'Yoga' },
    { name: 'Wellness Hub', price: '₹250/day', distance: '2.1 km', type: 'Wellness' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % venues.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [venues.length])

  return (
    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-4 rounded-lg h-full flex flex-col relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      <div className="flex items-center justify-between mb-4 relative z-10">
        <motion.div 
          className="text-lg font-bold"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          RIVIO
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <MapPin className="w-5 h-5" />
        </motion.div>
      </div>
      {venues.map((venue, index) => (
        <motion.div
          key={index}
          className="bg-white/20 rounded-lg p-3 mb-2 backdrop-blur-sm relative z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0.6,
            x: 0,
            scale: index === currentIndex ? 1.02 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs opacity-80 mb-1">{venue.type}</div>
          <div className="text-sm font-semibold">{venue.name}</div>
          <div className="text-xs opacity-80">{venue.price} • {venue.distance}</div>
        </motion.div>
      ))}
    </div>
  )
}

// Animated Dashboard Component
function AnimatedDashboard() {
  const streakCount = useCountUp(12)
  const rankCount = useCountUp(45)
  const visitsCount = useCountUp(18)

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-4 rounded-lg h-full flex flex-col">
      <motion.div 
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Dashboard
      </motion.div>
      <motion.div
        className="bg-emerald-500/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Current Streak</div>
        <motion.div 
          className="text-2xl font-bold text-emerald-400"
          key={streakCount}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          {streakCount} Days 🔥
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-emerald-500/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Leaderboard Rank</div>
        <motion.div 
          className="text-xl font-bold text-emerald-400"
          key={rankCount}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          #{rankCount}
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-emerald-500/20 rounded-lg p-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">This Month</div>
        <motion.div 
          className="text-lg font-semibold"
          key={visitsCount}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          {visitsCount} Visits
        </motion.div>
      </motion.div>
    </div>
  )
}

// Animated Profile Component
function AnimatedProfile() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-lg h-full flex flex-col border-2 border-emerald-500/30">
      <motion.div
        className="w-20 h-20 bg-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold relative"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="absolute inset-0 bg-emerald-400 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative z-10">AB</span>
      </motion.div>
      <motion.div 
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="font-bold text-white mb-1">Your Profile</div>
        <div className="text-xs text-gray-400">Fitness Enthusiast</div>
      </motion.div>
      <div className="space-y-2">
        <motion.div
          className="bg-emerald-500/20 rounded-lg p-2 text-center backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-xs text-gray-400">Total Visits</div>
          <motion.div 
            className="font-bold text-emerald-400"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            127
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-emerald-500/20 rounded-lg p-2 text-center backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-xs text-gray-400">Achievements</div>
          <motion.div 
            className="font-bold text-emerald-400"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            8 Unlocked
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Animated Wallet Component
function AnimatedWallet() {
  const balance = useCountUp(1250)
  const [transactions] = useState([
    { type: 'Gym Visit', amount: -200, time: 'Today, 10:30 AM' },
    { type: 'Top Up', amount: 500, time: 'Yesterday' },
  ])

  return (
    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-4 rounded-lg h-full flex flex-col">
      <motion.div 
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Wallet
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-4 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-2">Available Balance</div>
        <motion.div 
          className="text-3xl font-bold"
          key={balance}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          ₹{balance}
        </motion.div>
      </motion.div>
      <div className="space-y-2 flex-1">
        {transactions.map((tx, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded p-2 text-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <div className="flex justify-between">
              <span>{tx.type}</span>
              <span className={tx.amount > 0 ? 'text-emerald-200' : ''}>
                {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount)}
              </span>
            </div>
            <div className="text-xs opacity-80">{tx.time}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Animated Partner Dashboard
function AnimatedPartnerDashboard() {
  const earnings = useCountUp(12450)
  const visits = useCountUp(1247)
  const monthly = useCountUp(245600)

  return (
    <div className="bg-gradient-to-br from-gold-500 to-gold-600 text-white p-4 rounded-lg h-full flex flex-col">
      <motion.div 
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Business Dashboard
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Today's Earnings</div>
        <motion.div 
          className="text-2xl font-bold"
          key={earnings}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          ₹{earnings.toLocaleString()}
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Total Visits</div>
        <motion.div 
          className="text-xl font-bold"
          key={visits}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          {visits.toLocaleString()}
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">This Month</div>
        <motion.div 
          className="text-lg font-semibold"
          key={monthly}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          ₹{monthly.toLocaleString()}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Animated Partner Wallet
function AnimatedPartnerWallet() {
  const balance = useCountUp(185250)

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-4 rounded-lg h-full flex flex-col">
      <motion.div 
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Partner Wallet
      </motion.div>
      <motion.div
        className="bg-gold-500/20 rounded-lg p-4 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-2">Available Balance</div>
        <motion.div 
          className="text-3xl font-bold text-gold-300"
          key={balance}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          ₹{balance.toLocaleString()}
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-gold-500/20 rounded-lg p-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="text-sm font-semibold mb-2">Settle to Bank</div>
        <motion.button
          className="bg-gold-500 text-white text-center py-2 rounded-lg text-sm font-semibold w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ['0 0 0px rgba(212, 175, 55, 0)', '0 0 20px rgba(212, 175, 55, 0.5)', '0 0 0px rgba(212, 175, 55, 0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Request Settlement
        </motion.button>
      </motion.div>
    </div>
  )
}

// Animated Activities
function AnimatedActivities() {
  const activities = [
    { type: 'Check-in', user: 'John Doe', time: '10:30 AM' },
    { type: 'Check-in', user: 'Jane Smith', time: '9:15 AM' },
    { type: 'Pass Purchase', user: 'Monthly Pass', time: 'Yesterday', amount: '₹2,000' },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [activities.length])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-lg h-full flex flex-col border-2 border-emerald-500/30">
      <motion.div 
        className="text-lg font-bold text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Recent Activities
      </motion.div>
      <div className="space-y-2 flex-1">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-gold-500/20 rounded-lg p-3 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0.7,
              x: 0,
              scale: index === currentIndex ? 1.02 : 1,
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-semibold text-white">{activity.type}</span>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
            <div className="text-xs text-gray-400">
              {activity.user}
              {activity.amount && ` - ${activity.amount}`}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Animated Business
function AnimatedBusiness() {
  return (
    <div className="bg-gradient-to-br from-gold-500 to-gold-600 text-white p-4 rounded-lg h-full flex flex-col">
      <motion.div 
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Business Info
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Location</div>
        <div className="text-sm font-semibold">Elite Fitness Center</div>
        <div className="text-xs opacity-80">Delhi, India</div>
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Per-Visit Price</div>
        <motion.div 
          className="text-xl font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ₹200
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Amenities</div>
        <motion.div 
          className="text-sm"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Gym • Yoga • Pool
        </motion.div>
      </motion.div>
    </div>
  )
}

// Screen Card Component with enhanced animations
function ScreenCard({ screen, index, isInView, delay }: any) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: false, margin: '0px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={cardInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
      } : {}}
        transition={{ 
        duration: 0.5, 
        delay: delay * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      }}
      style={{ willChange: 'transform, opacity' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-gradient-to-br from-gray-900/95 via-gray-800/60 to-black/95 p-10 rounded-3xl shadow-2xl border border-emerald-500/30 backdrop-blur-xl relative overflow-hidden group gpu-accelerated"
    >
      {/* Enhanced animated background glow */}
      <motion.div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          screen.color === 'emerald' ? 'bg-emerald-500/15' : 'bg-gold-500/15'
        }`}
        animate={isHovered ? {
          scale: [1, 1.3, 1],
        } : {}}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
        animate={isHovered ? { x: ['-100%', '200%'] } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${
        screen.color === 'emerald' ? 'bg-emerald-500/10' : 'bg-gold-500/10'
      } rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Enhanced Icon with premium animation */}
      <motion.div 
        className={`w-28 h-28 ${
          screen.color === 'emerald' 
            ? 'bg-gradient-to-br from-emerald-500/30 to-emerald-600/20' 
            : 'bg-gradient-to-br from-gold-500/30 to-gold-600/20'
        } rounded-3xl flex items-center justify-center mb-8 relative mx-auto border ${
          screen.color === 'emerald' ? 'border-emerald-500/30' : 'border-gold-500/30'
        } group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: [0, 360], scale: 1.25 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <motion.div 
          className={`absolute inset-0 ${
            screen.color === 'emerald' ? 'bg-emerald-500/50' : 'bg-gold-500/50'
          } rounded-3xl blur-2xl`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute inset-0 ${
            screen.color === 'emerald' ? 'bg-emerald-400/20' : 'bg-gold-400/20'
          } rounded-3xl blur-xl`}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <screen.icon className={`w-14 h-14 ${
          screen.color === 'emerald' ? 'text-emerald-300' : 'text-gold-300'
        } relative z-10 drop-shadow-2xl filter brightness-110`} />
      </motion.div>

      <motion.h4 
        className={`text-2xl font-extrabold mb-4 text-center relative z-10 group-hover:scale-105 transition-transform ${
          screen.color === 'emerald' ? 'text-white group-hover:text-emerald-300' : 'text-white group-hover:text-gold-300'
        }`}
        initial={{ opacity: 0 }}
        animate={cardInView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.1 }}
      >
        {screen.title}
      </motion.h4>
      <motion.p 
        className="text-gray-300 mb-8 leading-relaxed text-center relative z-10 text-base"
        initial={{ opacity: 0 }}
        animate={cardInView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.15 }}
      >
        {screen.description}
      </motion.p>

      {/* Enhanced animated mockup container */}
      <motion.div
        className={`bg-black/70 rounded-2xl p-6 border-2 ${
          screen.color === 'emerald' ? 'border-emerald-500/40' : 'border-gold-500/40'
        } backdrop-blur-xl relative overflow-hidden group-hover:border-opacity-60 transition-all`}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {/* Glow effect */}
        <motion.div
          className={`absolute -inset-1 ${
            screen.color === 'emerald' ? 'bg-emerald-500/20' : 'bg-gold-500/20'
          } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
        
        <motion.div
          className="aspect-[9/16] rounded-xl overflow-hidden relative z-10"
          animate={isHovered ? {
            y: [0, -8, 0],
          } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Subtle shine overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {screen.mockup}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function ScreenshotShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '0px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8])


  const userScreens = [
    {
      title: 'Home Screen',
      description: 'Discover nearby gyms, yoga studios, and wellness centers',
      icon: Smartphone,
      color: 'emerald',
      mockup: (
        <AnimatedHomeScreen />
      ),
    },
    {
      title: 'Dashboard',
      description: 'Track your workouts, streaks, and achievements',
      icon: TrendingUp,
      color: 'emerald',
      mockup: (
        <AnimatedDashboard />
      ),
    },
    {
      title: 'Profile',
      description: 'View your fitness journey, stats, and leaderboard rank',
      icon: Users,
      color: 'emerald',
      mockup: (
        <AnimatedProfile />
      ),
    },
    {
      title: 'Wallet',
      description: 'Manage your balance and transaction history',
      icon: Wallet,
      color: 'emerald',
      mockup: (
        <AnimatedWallet />
      ),
    },
  ]

  const partnerScreens = [
    {
      title: 'Dashboard',
      description: 'View earnings, visits, and analytics in real-time',
      icon: Building2,
      color: 'gold',
      mockup: (
        <AnimatedPartnerDashboard />
      ),
    },
    {
      title: 'Wallet',
      description: 'Track earnings and request settlements',
      icon: Wallet,
      color: 'gold',
      mockup: (
        <AnimatedPartnerWallet />
      ),
    },
    {
      title: 'Activities',
      description: 'Monitor all customer visits and check-ins',
      icon: Activity,
      color: 'gold',
      mockup: (
        <AnimatedActivities />
      ),
    },
    {
      title: 'Business',
      description: 'Manage locations, pricing, and amenities',
      icon: Building2,
      color: 'gold',
      mockup: (
        <AnimatedBusiness />
      ),
    },
  ]

  return (
    <section
      id="features"
      ref={ref}
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Optimized floating cloud background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-[0.04] gpu-accelerated"
            style={{
              width: `${500 + i * 100}px`,
              height: `${500 + i * 100}px`,
              background: i % 2 === 0 ? '#10b981' : '#d4af37',
              left: `${15 + i * 25}%`,
              top: `${10 + i * 20}%`,
              willChange: 'transform',
            }}
            animate={{
              x: [0, 80, -40, 0],
              y: [0, 60, -30, 0],
              scale: [1, 1.3, 0.9, 1],
            }}
            transition={{
              duration: 30 + i * 5,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 gpu-accelerated"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 gpu-accelerated"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Explore Our{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              Apps
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See what makes RIVIO special - Interactive app previews
          </motion.p>
        </motion.div>

        {/* User App Screenshots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            User App Features
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userScreens.map((screen, index) => (
              <ScreenCard
                key={screen.title}
                screen={screen}
                index={index}
                isInView={isInView}
                delay={0.3 + index * 0.08}
              />
            ))}
          </div>
        </motion.div>

        {/* Partner App Screenshots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Partner App Features
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerScreens.map((screen, index) => (
              <ScreenCard
                key={screen.title}
                screen={screen}
                index={index}
                isInView={isInView}
                delay={0.8 + index * 0.08}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
