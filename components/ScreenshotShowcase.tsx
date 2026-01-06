'use client'

import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Smartphone, Building2, TrendingUp, Users, Wallet, Activity, MapPin, Star, Zap, Award, QrCode, CheckCircle, Calendar, Clock, BarChart3, Settings, UserCheck } from 'lucide-react'

// Custom hook for count up animation - must be defined before components that use it
function useCountUp(end: number, duration: number = 2, start: number = 0, autoStart: boolean = true) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const [hasStarted, setHasStarted] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (autoStart && !hasStarted && end > start) {
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
  }, [hasStarted, end, duration, start, autoStart])

  const reset = () => {
    setCount(start)
    countRef.current = start
    setHasStarted(false)
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  return { count, reset }
}

// Animated Check-in Component with Live QR Scanning
function AnimatedCheckIn() {
  const [isScanning, setIsScanning] = useState(false)
  const [isCheckedIn, setIsCheckedIn] = useState(false)
  const [checkInCount, setCheckInCount] = useState(0)

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsScanning(true)
      setTimeout(() => {
        setIsScanning(false)
        setIsCheckedIn(true)
        setCheckInCount(prev => prev + 1)
        setTimeout(() => {
          setIsCheckedIn(false)
        }, 2000)
      }, 2000)
    }, 5000)

    return () => clearInterval(cycle)
  }, [])

  return (
    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-4 rounded-lg h-full flex flex-col relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="text-lg font-bold">Check-In</div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <QrCode className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          {!isScanning && !isCheckedIn && (
            <motion.div
              key="ready"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <QrCode className="w-20 h-20 mx-auto mb-4 opacity-80" />
              <div className="text-sm">Point camera at QR code</div>
            </motion.div>
          )}

          {isScanning && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <motion.div
                className="w-48 h-48 border-4 border-white rounded-lg mx-auto mb-4 relative"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="absolute w-full h-1 bg-white"
                  animate={{
                    y: [0, 192, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
              <div className="text-sm font-semibold">Scanning...</div>
            </motion.div>
          )}

          {isCheckedIn && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [0, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              >
                <CheckCircle className="w-24 h-24 mx-auto mb-4 text-white" />
              </motion.div>
              <motion.div
                className="text-2xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Checked In! ✅
              </motion.div>
              <div className="text-sm opacity-90">Total Check-ins: {checkInCount}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Animated Booking Component
function AnimatedBooking() {
  const [selectedVenue, setSelectedVenue] = useState(0)
  const [isBooking, setIsBooking] = useState(false)
  const [isBooked, setIsBooked] = useState(false)
  const venues = [
    { name: 'Elite Fitness', price: '₹200', time: '10:00 AM', type: 'Gym' },
    { name: 'Zen Yoga Studio', price: '₹150', time: '11:00 AM', type: 'Yoga' },
    { name: 'Swim Center', price: '₹250', time: '2:00 PM', type: 'Swim' },
  ]

  useEffect(() => {
    const cycle = setInterval(() => {
      setSelectedVenue(prev => (prev + 1) % venues.length)
      setIsBooking(true)
      setTimeout(() => {
        setIsBooking(false)
        setIsBooked(true)
        setTimeout(() => {
          setIsBooked(false)
        }, 2000)
      }, 1500)
    }, 5000)

    return () => clearInterval(cycle)
  }, [venues.length])

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-4 rounded-lg h-full flex flex-col relative overflow-hidden">
      <div className="text-lg font-bold mb-4">Book Venue</div>
      
      <div className="space-y-3 flex-1">
        {venues.map((venue, index) => (
          <motion.div
            key={index}
            className={`rounded-lg p-3 backdrop-blur-sm ${
              index === selectedVenue
                ? 'bg-emerald-500/30 border-2 border-emerald-400'
                : 'bg-white/10 border border-white/20'
            }`}
            animate={{
              scale: index === selectedVenue ? 1.05 : 1,
              opacity: index === selectedVenue ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-sm font-semibold">{venue.name}</div>
                <div className="text-xs opacity-80">{venue.type}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-emerald-400">{venue.price}</div>
                <div className="text-xs opacity-80 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {venue.time}
                </div>
              </div>
            </div>
            {index === selectedVenue && (
              <AnimatePresence>
                {isBooking && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-emerald-300 flex items-center gap-2 mt-2"
                  >
                    <motion.div
                      className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Booking...
                  </motion.div>
                )}
                {isBooked && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-emerald-400 flex items-center gap-2 mt-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Booked Successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Enhanced Wallet with Live Balance Increase
function AnimatedWallet() {
  const { count: balance, reset } = useCountUp(1250, 3, 500, true)
  const [transactions, setTransactions] = useState([
    { type: 'Top Up', amount: 500, time: 'Just now', id: 1 },
    { type: 'Gym Visit', amount: -200, time: 'Today, 10:30 AM', id: 2 },
  ])
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAdding(true)
      setTimeout(() => {
        const newAmount = Math.floor(Math.random() * 500) + 200
        setTransactions(prev => [
          { type: 'Top Up', amount: newAmount, time: 'Just now', id: Date.now() },
          ...prev.slice(0, 2)
        ])
        reset()
        setTimeout(() => {
          setIsAdding(false)
        }, 500)
      }, 1000)
    }, 6000)

    return () => clearInterval(interval)
  }, [reset])

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
        className="bg-white/20 rounded-lg p-4 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-2">Available Balance</div>
        <motion.div 
          className="text-3xl font-bold flex items-center gap-2"
          key={balance}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          ₹{balance.toLocaleString()}
          {isAdding && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg text-emerald-200"
            >
              +₹{transactions[0]?.amount || 0}
            </motion.span>
          )}
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/20 rounded-full blur-2xl"
          animate={{
            scale: isAdding ? [1, 1.5, 1] : 1,
            opacity: isAdding ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <div className="space-y-2 flex-1 overflow-y-auto">
        <AnimatePresence>
          {transactions.map((tx, index) => (
            <motion.div
              key={tx.id}
              className="bg-white/10 rounded p-2 text-sm backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="flex justify-between">
                <span>{tx.type}</span>
                <span className={tx.amount > 0 ? 'text-emerald-200 font-semibold' : ''}>
                  {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount)}
                </span>
              </div>
              <div className="text-xs opacity-80">{tx.time}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Enhanced Dashboard with Live Streak Increase
function AnimatedDashboard() {
  const { count: streakCount } = useCountUp(12, 2, 0, true)
  const { count: rankCount } = useCountUp(45, 2, 50, true)
  const { count: visitsCount } = useCountUp(18, 2, 0, true)
  const [streakIncreasing, setStreakIncreasing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setStreakIncreasing(true)
      setTimeout(() => {
        setStreakIncreasing(false)
      }, 1500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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
        className="bg-emerald-500/20 rounded-lg p-3 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Current Streak</div>
        <motion.div 
          className="text-2xl font-bold text-emerald-400 flex items-center gap-2"
          key={streakCount}
          initial={{ scale: 1.2 }}
          animate={{ scale: streakIncreasing ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {streakCount} Days 🔥
          {streakIncreasing && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="text-sm text-emerald-300"
            >
              +1
            </motion.span>
          )}
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 bg-emerald-400/30 rounded-full blur-xl"
          animate={{
            scale: streakIncreasing ? [1, 1.5, 1] : 1,
            opacity: streakIncreasing ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{ duration: 1 }}
        />
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

// Animated Home Screen Component
function AnimatedHomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const venues = [
    { name: 'Elite Fitness Center', price: '₹200/day', distance: '0.5 km', type: 'Gym' },
    { name: 'Zen Yoga Studio', price: '₹150/day', distance: '1.2 km', type: 'Yoga' },
    { name: 'Swim Center', price: '₹250/day', distance: '2.1 km', type: 'Swim' },
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

// Animated Partner Dashboard with Live Earnings and Check-ins
function AnimatedPartnerDashboard() {
  const { count: earnings, reset: resetEarnings } = useCountUp(12450, 3, 10000, true)
  const { count: visits, reset: resetVisits } = useCountUp(1247, 2, 1200, true)
  const { count: monthly } = useCountUp(245600, 3, 240000, true)
  const { count: checkIns, reset: resetCheckIns } = useCountUp(45, 2, 40, true)
  const [isEarning, setIsEarning] = useState(false)
  const [isCheckIn, setIsCheckIn] = useState(false)

  useEffect(() => {
    // Earnings increase
    const earningsInterval = setInterval(() => {
      setIsEarning(true)
      setTimeout(() => {
        resetEarnings()
        setTimeout(() => {
          setIsEarning(false)
        }, 500)
      }, 1000)
    }, 6000)

    // Check-in increase
    const checkInInterval = setInterval(() => {
      setIsCheckIn(true)
      setTimeout(() => {
        resetCheckIns()
        resetVisits()
        setTimeout(() => {
          setIsCheckIn(false)
        }, 500)
      }, 1000)
    }, 5000)

    return () => {
      clearInterval(earningsInterval)
      clearInterval(checkInInterval)
    }
  }, [resetEarnings, resetCheckIns, resetVisits])

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
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Today's Earnings</div>
        <motion.div 
          className="text-2xl font-bold flex items-center gap-2"
          key={earnings}
          initial={{ scale: 1.2 }}
          animate={{ scale: isEarning ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
        >
          ₹{earnings.toLocaleString()}
          {isEarning && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-gold-200"
            >
              +₹200
            </motion.span>
          )}
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 bg-gold-400/30 rounded-full blur-xl"
          animate={{
            scale: isEarning ? [1, 1.5, 1] : 1,
            opacity: isEarning ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Today's Check-ins</div>
        <motion.div 
          className="text-xl font-bold flex items-center gap-2"
          key={checkIns}
          initial={{ scale: 1.2 }}
          animate={{ scale: isCheckIn ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {checkIns}
          {isCheckIn && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [0, 1.5, 1] }}
              exit={{ opacity: 0, scale: 0 }}
              className="text-sm text-gold-200 flex items-center gap-1"
            >
              <CheckCircle className="w-4 h-4" />
              +1
            </motion.span>
          )}
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-12 h-12 bg-gold-400/30 rounded-full blur-xl"
          animate={{
            scale: isCheckIn ? [1, 1.5, 1] : 1,
            opacity: isCheckIn ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Total Visits</div>
        <motion.div 
          className="text-lg font-semibold"
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
        transition={{ delay: 0.6 }}
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

// Animated Partner Wallet with Live Balance Increases
function AnimatedPartnerWallet() {
  const { count: balance, reset } = useCountUp(185250, 3, 180000, true)
  const [transactions, setTransactions] = useState([
    { type: 'Check-in Payment', amount: 200, time: 'Just now', id: 1 },
    { type: 'Subscription Payment', amount: 2000, time: '2 min ago', id: 2 },
    { type: 'Daily Pass', amount: 200, time: '5 min ago', id: 3 },
  ])
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAdding(true)
      setTimeout(() => {
        const amounts = [200, 500, 1000, 2000]
        const types = ['Check-in Payment', 'Daily Pass', 'Weekly Pass', 'Subscription Payment']
        const randomAmount = amounts[Math.floor(Math.random() * amounts.length)]
        const randomType = types[Math.floor(Math.random() * types.length)]
        
        setTransactions(prev => [
          { type: randomType, amount: randomAmount, time: 'Just now', id: Date.now() },
          ...prev.slice(0, 2)
        ])
        reset()
        setTimeout(() => {
          setIsAdding(false)
        }, 500)
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [reset])

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
        className="bg-gold-500/20 rounded-lg p-4 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-2">Available Balance</div>
        <motion.div 
          className="text-3xl font-bold text-gold-300 flex items-center gap-2"
          key={balance}
          initial={{ scale: 1.2 }}
          animate={{ scale: isAdding ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
        >
          ₹{balance.toLocaleString()}
          {isAdding && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-gold-200"
            >
              +₹{transactions[0]?.amount || 0}
            </motion.span>
          )}
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gold-400/20 rounded-full blur-2xl"
          animate={{
            scale: isAdding ? [1, 1.5, 1] : 1,
            opacity: isAdding ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <div className="space-y-2 flex-1 overflow-y-auto mb-3">
        <div className="text-xs opacity-80 mb-2">Recent Transactions</div>
        <AnimatePresence>
          {transactions.map((tx, index) => (
            <motion.div
              key={tx.id}
              className="bg-gold-500/10 rounded p-2 text-sm backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="flex justify-between">
                <span className="text-xs">{tx.type}</span>
                <span className="text-gold-300 font-semibold text-xs">
                  +₹{tx.amount}
                </span>
              </div>
              <div className="text-xs opacity-60">{tx.time}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
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

// Enhanced Activities with Live Check-ins and Subscriptions
function AnimatedActivities() {
  const [activities, setActivities] = useState([
    { type: 'Check-in', user: 'John Doe', time: 'Just now', id: 1, icon: CheckCircle },
    { type: 'Check-in', user: 'Jane Smith', time: '2 min ago', id: 2, icon: CheckCircle },
    { type: 'Subscription', user: 'Monthly Pass', time: '5 min ago', amount: '₹2,000', id: 3, icon: Star },
  ])
  const [newActivity, setNewActivity] = useState(false)

  useEffect(() => {
    const users = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'David Brown', 'Emma Davis']
    const types = [
      { type: 'Check-in', icon: CheckCircle, amount: null },
      { type: 'Subscription', icon: Star, amount: '₹2,000' },
      { type: 'Daily Pass', icon: Calendar, amount: '₹200' },
    ]

    const interval = setInterval(() => {
      setNewActivity(true)
      const randomUser = users[Math.floor(Math.random() * users.length)]
      const randomType = types[Math.floor(Math.random() * types.length)]
      
      const newAct = {
        type: randomType.type,
        user: randomUser,
        time: 'Just now',
        id: Date.now(),
        icon: randomType.icon,
        amount: randomType.amount,
      }

      setActivities(prev => [newAct, ...prev.slice(0, 2)])
      setTimeout(() => {
        setNewActivity(false)
      }, 1500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-lg h-full flex flex-col border-2 border-gold-500/30">
      <motion.div 
        className="text-lg font-bold text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Recent Activities
      </motion.div>
      <div className="space-y-2 flex-1 overflow-y-auto">
        <AnimatePresence>
          {activities.map((activity, index) => {
            const IconComponent = activity.icon
            return (
              <motion.div
                key={activity.id}
                className="bg-gold-500/20 rounded-lg p-3 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{
                  opacity: index === 0 ? 1 : 0.7,
                  x: 0,
                  scale: index === 0 ? 1.02 : 1,
                }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-gold-400" />
                    {activity.type}
                    {index === 0 && newActivity && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.5, 1] }}
                        className="w-2 h-2 bg-gold-400 rounded-full"
                      />
                    )}
                  </span>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
                <div className="text-xs text-gray-400">
                  {activity.user}
                  {activity.amount && ` - ${activity.amount}`}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Animated QR Code Management
function AnimatedQRManagement() {
  const [qrCodes, setQrCodes] = useState([
    { location: 'Main Entrance', status: 'Active', id: 1 },
    { location: 'Reception', status: 'Active', id: 2 },
    { location: 'Yoga Studio', status: 'Inactive', id: 3 },
  ])
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGenerating(true)
      setTimeout(() => {
        setQrCodes(prev => [
          { location: 'Gym Floor', status: 'Active', id: Date.now() },
          ...prev.slice(0, 2)
        ])
        setIsGenerating(false)
      }, 1500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-4 rounded-lg h-full flex flex-col border-2 border-gold-500/30">
      <motion.div 
        className="text-lg font-bold text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        QR Code Management
      </motion.div>
      <div className="space-y-3 flex-1 overflow-y-auto">
        <AnimatePresence>
          {qrCodes.map((qr, index) => (
            <motion.div
              key={qr.id}
              className="bg-gold-500/20 rounded-lg p-3 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-gold-400" />
                  <span className="text-sm font-semibold">{qr.location}</span>
                </div>
                <motion.span
                  className={`text-xs px-2 py-1 rounded ${
                    qr.status === 'Active' ? 'bg-emerald-500/30 text-emerald-300' : 'bg-gray-500/30 text-gray-400'
                  }`}
                  animate={qr.status === 'Active' ? { opacity: [1, 0.7, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {qr.status}
                </motion.span>
              </div>
              {index === 0 && isGenerating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-gold-300 flex items-center gap-2"
                >
                  <motion.div
                    className="w-3 h-3 border-2 border-gold-400 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  Generating...
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.button
        className="bg-gold-500 text-white text-center py-2 rounded-lg text-sm font-semibold w-full mt-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: ['0 0 0px rgba(212, 175, 55, 0)', '0 0 20px rgba(212, 175, 55, 0.5)', '0 0 0px rgba(212, 175, 55, 0)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Generate New QR
      </motion.button>
    </div>
  )
}

// Animated Venue Management
function AnimatedVenueManagement() {
  const [venues, setVenues] = useState([
    { name: 'Elite Fitness', status: 'Open', visitors: 45, id: 1 },
    { name: 'Yoga Studio', status: 'Open', visitors: 23, id: 2 },
    { name: 'Swim Center', status: 'Closed', visitors: 0, id: 3 },
  ])
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true)
      setTimeout(() => {
        setVenues(prev => prev.map(v => ({
          ...v,
          visitors: v.status === 'Open' ? v.visitors + Math.floor(Math.random() * 3) : v.visitors
        })))
        setIsUpdating(false)
      }, 1000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gold-500 to-gold-600 text-white p-4 rounded-lg h-full flex flex-col">
      <motion.div 
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Venue Management
      </motion.div>
      <div className="space-y-3 flex-1 overflow-y-auto">
        {venues.map((venue, index) => (
          <motion.div
            key={venue.id}
            className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-sm font-semibold">{venue.name}</div>
                <div className="text-xs opacity-80 flex items-center gap-2 mt-1">
                  <motion.span
                    className={`w-2 h-2 rounded-full ${
                      venue.status === 'Open' ? 'bg-emerald-400' : 'bg-gray-400'
                    }`}
                    animate={venue.status === 'Open' ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {venue.status}
                </div>
              </div>
              <motion.div
                className="text-right"
                animate={isUpdating && venue.status === 'Open' ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xs opacity-80">Current Visitors</div>
                <div className="text-lg font-bold">{venue.visitors}</div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Animated Analytics/Reports
function AnimatedAnalytics() {
  const { count: totalRevenue } = useCountUp(245600, 3, 240000, true)
  const { count: avgDaily } = useCountUp(12450, 2, 12000, true)
  const { count: peakHours } = useCountUp(18, 2, 15, true)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true)
      setTimeout(() => {
        setIsUpdating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-lg h-full flex flex-col border-2 border-gold-500/30">
      <motion.div 
        className="text-lg font-bold text-white mb-4 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <BarChart3 className="w-5 h-5 text-gold-400" />
        Analytics & Reports
      </motion.div>
      <motion.div
        className="bg-gold-500/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Total Revenue (Month)</div>
        <motion.div 
          className="text-2xl font-bold text-gold-300"
          key={totalRevenue}
          initial={{ scale: 1.2 }}
          animate={{ scale: isUpdating ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
        >
          ₹{totalRevenue.toLocaleString()}
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-gold-500/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Avg Daily Earnings</div>
        <motion.div 
          className="text-xl font-bold text-gold-300"
          key={avgDaily}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          ₹{avgDaily.toLocaleString()}
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-gold-500/20 rounded-lg p-3 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Peak Hours Visitors</div>
        <motion.div 
          className="text-lg font-semibold text-gold-300"
          key={peakHours}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          {peakHours} visitors/hr
        </motion.div>
      </motion.div>
    </div>
  )
}

// Animated Customer Management
function AnimatedCustomerManagement() {
  const [customers, setCustomers] = useState([
    { name: 'John Doe', visits: 12, status: 'Active', id: 1 },
    { name: 'Jane Smith', visits: 8, status: 'Active', id: 2 },
    { name: 'Mike Johnson', visits: 5, status: 'Regular', id: 3 },
  ])
  const [isNewCustomer, setIsNewCustomer] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNewCustomer(true)
      setTimeout(() => {
        setCustomers(prev => [
          { name: 'Sarah Williams', visits: 1, status: 'New', id: Date.now() },
          ...prev.slice(0, 2)
        ])
        setTimeout(() => {
          setIsNewCustomer(false)
        }, 1500)
      }, 1000)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gold-500 to-gold-600 text-white p-4 rounded-lg h-full flex flex-col">
      <motion.div 
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Customer Management
      </motion.div>
      <div className="space-y-3 flex-1 overflow-y-auto">
        <AnimatePresence>
          {customers.map((customer, index) => (
            <motion.div
              key={customer.id}
              className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-gold-200" />
                  <span className="text-sm font-semibold">{customer.name}</span>
                  {index === 0 && isNewCustomer && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.5, 1] }}
                      className="text-xs bg-emerald-500/50 px-2 py-0.5 rounded"
                    >
                      New
                    </motion.span>
                  )}
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  customer.status === 'Active' ? 'bg-emerald-500/30' : 
                  customer.status === 'New' ? 'bg-blue-500/30' : 'bg-gray-500/30'
                }`}>
                  {customer.status}
                </span>
              </div>
              <div className="text-xs opacity-80">Total Visits: {customer.visits}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Animated Subscriptions Management
function AnimatedSubscriptionsManagement() {
  const [subscriptions, setSubscriptions] = useState([
    { user: 'John Doe', plan: 'Monthly', daysLeft: 15, amount: '₹2,000', id: 1 },
    { user: 'Jane Smith', plan: 'Weekly', daysLeft: 3, amount: '₹500', id: 2 },
    { user: 'Mike Johnson', plan: 'Monthly', daysLeft: 28, amount: '₹2,000', id: 3 },
  ])
  const [isNewSubscription, setIsNewSubscription] = useState(false)

  useEffect(() => {
    const users = ['Sarah Williams', 'David Brown', 'Emma Davis', 'Robert Lee']
    const plans = ['Monthly', 'Weekly', 'Quarterly']
    const amounts = { 'Monthly': '₹2,000', 'Weekly': '₹500', 'Quarterly': '₹5,000' }

    const interval = setInterval(() => {
      setIsNewSubscription(true)
      setTimeout(() => {
        const randomPlan = plans[Math.floor(Math.random() * plans.length)]
        setSubscriptions(prev => [
          { 
            user: users[Math.floor(Math.random() * users.length)], 
            plan: randomPlan, 
            daysLeft: randomPlan === 'Monthly' ? 30 : randomPlan === 'Weekly' ? 7 : 90,
            amount: amounts[randomPlan as keyof typeof amounts],
            id: Date.now() 
          },
          ...prev.slice(0, 2)
        ])
        setTimeout(() => {
          setIsNewSubscription(false)
        }, 1500)
      }, 1000)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-lg h-full flex flex-col border-2 border-gold-500/30">
      <motion.div 
        className="text-lg font-bold text-white mb-4 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Star className="w-5 h-5 text-gold-400" />
        Subscriptions
      </motion.div>
      <div className="space-y-3 flex-1 overflow-y-auto">
        <AnimatePresence>
          {subscriptions.map((sub, index) => (
            <motion.div
              key={sub.id}
              className={`rounded-lg p-3 backdrop-blur-sm ${
                sub.daysLeft <= 7 ? 'bg-orange-500/20 border border-orange-400/40' : 'bg-gold-500/20 border border-gold-400/30'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    {sub.user}
                    {index === 0 && isNewSubscription && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.5, 1] }}
                        className="text-xs bg-emerald-500/50 px-2 py-0.5 rounded"
                      >
                        New
                      </motion.span>
                    )}
                  </div>
                  <div className="text-xs opacity-80 mt-1">{sub.plan} Plan</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gold-300">{sub.amount}</div>
                  <div className={`text-xs ${sub.daysLeft <= 7 ? 'text-orange-300' : 'text-gray-400'}`}>
                    {sub.daysLeft} days left
                  </div>
                </div>
              </div>
              {sub.daysLeft <= 7 && (
                <motion.div
                  className="text-xs text-orange-300 flex items-center gap-1 mt-2"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Clock className="w-3 h-3" />
                  Expiring soon
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.div
        className="bg-gold-500/20 rounded-lg p-2 mt-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="text-xs opacity-80 text-center">
          Total Active: {subscriptions.length}
        </div>
      </motion.div>
    </div>
  )
}

// Animated Business with Active Subscriptions and Expiring Passes
function AnimatedBusiness() {
  const { count: activeSubscriptions, reset: resetSubs } = useCountUp(127, 2, 120, true)
  const { count: expiringPasses, reset: resetExpiring } = useCountUp(8, 2, 5, true)
  const [isNewSubscription, setIsNewSubscription] = useState(false)
  const [isPassExpiring, setIsPassExpiring] = useState(false)

  useEffect(() => {
    // New subscription
    const subInterval = setInterval(() => {
      setIsNewSubscription(true)
      setTimeout(() => {
        resetSubs()
        setTimeout(() => {
          setIsNewSubscription(false)
        }, 500)
      }, 1000)
    }, 6000)

    // Expiring passes update
    const expiringInterval = setInterval(() => {
      setIsPassExpiring(true)
      setTimeout(() => {
        resetExpiring()
        setTimeout(() => {
          setIsPassExpiring(false)
        }, 500)
      }, 1000)
    }, 8000)

    return () => {
      clearInterval(subInterval)
      clearInterval(expiringInterval)
    }
  }, [resetSubs, resetExpiring])

  return (
    <div className="bg-gradient-to-br from-gold-500 to-gold-600 text-white p-4 rounded-lg h-full flex flex-col">
      <motion.div 
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Business Overview
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1 flex items-center gap-2">
          <Star className="w-3 h-3" />
          Active Subscriptions
        </div>
        <motion.div 
          className="text-2xl font-bold flex items-center gap-2"
          key={activeSubscriptions}
          initial={{ scale: 1.2 }}
          animate={{ scale: isNewSubscription ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeSubscriptions}
          {isNewSubscription && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [0, 1.5, 1] }}
              exit={{ opacity: 0, scale: 0 }}
              className="text-sm text-gold-200 flex items-center gap-1"
            >
              <Star className="w-3 h-3" />
              +1
            </motion.span>
          )}
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-12 h-12 bg-gold-400/30 rounded-full blur-xl"
          animate={{
            scale: isNewSubscription ? [1, 1.5, 1] : 1,
            opacity: isNewSubscription ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1 flex items-center gap-2">
          <Calendar className="w-3 h-3" />
          Passes Expiring (2-4 days)
        </div>
        <motion.div 
          className="text-xl font-bold flex items-center gap-2"
          key={expiringPasses}
          initial={{ scale: 1.2 }}
          animate={{ scale: isPassExpiring ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {expiringPasses}
          {isPassExpiring && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              className="text-xs text-gold-200"
            >
              ⚠️
            </motion.span>
          )}
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-12 h-12 bg-orange-400/30 rounded-full blur-xl"
          animate={{
            scale: isPassExpiring ? [1, 1.5, 1] : 1,
            opacity: isPassExpiring ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Location</div>
        <div className="text-sm font-semibold">Elite Fitness Center</div>
        <div className="text-xs opacity-80">Delhi, India</div>
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
      title: 'Check-In',
      description: 'Scan QR code and check-in instantly with live animations',
      icon: QrCode,
      color: 'emerald',
      mockup: (
        <AnimatedCheckIn />
      ),
    },
    {
      title: 'Dashboard',
      description: 'Track your workouts, streaks increasing live, and achievements',
      icon: TrendingUp,
      color: 'emerald',
      mockup: (
        <AnimatedDashboard />
      ),
    },
    {
      title: 'Wallet',
      description: 'Watch your balance increase live with real-time transactions',
      icon: Wallet,
      color: 'emerald',
      mockup: (
        <AnimatedWallet />
      ),
    },
    {
      title: 'Booking',
      description: 'Book venues with live booking status and confirmations',
      icon: Calendar,
      color: 'emerald',
      mockup: (
        <AnimatedBooking />
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
  ]

  const partnerScreens = [
    {
      title: 'Dashboard',
      description: 'View earnings increasing live, check-ins, visits, and analytics in real-time',
      icon: Building2,
      color: 'gold',
      mockup: (
        <AnimatedPartnerDashboard />
      ),
    },
    {
      title: 'Wallet',
      description: 'Track earnings increasing live with transaction history and settlements',
      icon: Wallet,
      color: 'gold',
      mockup: (
        <AnimatedPartnerWallet />
      ),
    },
    {
      title: 'Activities',
      description: 'Monitor all customer check-ins and subscriptions happening live in real-time',
      icon: Activity,
      color: 'gold',
      mockup: (
        <AnimatedActivities />
      ),
    },
    {
      title: 'QR Management',
      description: 'Generate and manage QR codes for all your venue locations',
      icon: QrCode,
      color: 'gold',
      mockup: (
        <AnimatedQRManagement />
      ),
    },
    {
      title: 'Venue Management',
      description: 'Manage multiple venues, track visitors, and control status',
      icon: MapPin,
      color: 'gold',
      mockup: (
        <AnimatedVenueManagement />
      ),
    },
    {
      title: 'Analytics',
      description: 'View detailed revenue reports, peak hours, and performance metrics',
      icon: BarChart3,
      color: 'gold',
      mockup: (
        <AnimatedAnalytics />
      ),
    },
    {
      title: 'Customers',
      description: 'Manage customer database, track visits, and view customer status',
      icon: UserCheck,
      color: 'gold',
      mockup: (
        <AnimatedCustomerManagement />
      ),
    },
    {
      title: 'Subscriptions',
      description: 'Manage all active subscriptions, track expiring passes, and renewals',
      icon: Star,
      color: 'gold',
      mockup: (
        <AnimatedSubscriptionsManagement />
      ),
    },
    {
      title: 'Business',
      description: 'Active subscriptions, expiring passes, pricing, and location info',
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
            See what makes RIVIO special - Live animated app previews
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
