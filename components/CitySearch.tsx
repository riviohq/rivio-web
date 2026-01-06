'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, MapPin, AlertCircle, TrendingUp, Users, Building2, Sparkles } from 'lucide-react'

export default function CitySearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setShowMessage(true)
      // In the future, this will search the database and show partners
    }
  }

  const popularCities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']

  return (
    <section
      id="cities"
      ref={ref}
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Optimized floating clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-4 gpu-accelerated"
            style={{
              width: `${600 + i * 150}px`,
              height: `${600 + i * 150}px`,
              background: '#10b981',
              left: `${i * 50}%`,
              top: `${i * 40}%`,
              willChange: 'transform',
            }}
            animate={{
              x: [0, 50, -25, 0],
              y: [0, 40, -20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 30 + i * 5,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: i * 3,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expanding Across <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">India</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium mb-4">
            We're actively onboarding partners across India to build the largest pay-per-day fitness network
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm md:text-base"
          >
            <div className="flex items-center gap-2 text-emerald-300">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Rapid Network Growth</span>
            </div>
            <div className="flex items-center gap-2 text-gold-300">
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Partner Onboarding Active</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-300">
              <Users className="w-5 h-5" />
              <span className="font-medium">Expanding City by City</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowMessage(false)
                }}
                placeholder="Search for a city (e.g., Hisar, Adampur, Delhi)"
                className="w-full pl-12 pr-4 py-4 text-lg bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500 rounded-full focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Onboarding Partners Message */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 relative overflow-hidden"
            >
              <div className="bg-gradient-to-br from-emerald-600/20 via-emerald-700/15 to-gold-600/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/20">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-gold-500/10 opacity-50" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center border-2 border-emerald-400/40 flex-shrink-0">
                      <Sparkles className="w-7 h-7 text-emerald-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <span className="bg-gradient-to-r from-emerald-300 to-gold-300 bg-clip-text text-transparent">
                          We're Onboarding Partners in {searchQuery}
                        </span>
                      </h4>
                      <p className="text-gray-200 font-medium leading-relaxed mb-4">
                        We're actively building our network in <strong className="text-emerald-300">{searchQuery}</strong> and onboarding premium fitness partners. This feature will be available soon once we've onboarded enough partners to provide comprehensive coverage in your city.
                      </p>
                      <div className="bg-black/30 rounded-xl p-4 border border-emerald-500/20">
                        <p className="text-sm text-gray-300 font-medium mb-2">
                          <strong className="text-emerald-300">What's Coming:</strong>
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>Complete list of gyms, yoga studios, sports facilities, and wellness centers in {searchQuery}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>Real-time pricing, availability, and amenities for each venue</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>Ratings, reviews, and photos from the RIVIO community</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>Instant booking and pay-per-day access</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-emerald-300 font-medium">
                        <TrendingUp className="w-4 h-4" />
                        <span>Our network is growing rapidly. Check back soon!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Popular Cities */}
          <div className="mt-8">
            <p className="text-gray-200 mb-4 text-center font-medium">Popular Cities:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularCities.map((city, index) => (
                <motion.button
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchQuery(city)
                    setShowMessage(true)
                  }}
                  className="px-4 py-2 bg-gray-800 border-2 border-gray-700 rounded-full text-gray-200 hover:border-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-2 font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  {city}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expansion Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-emerald-500/30 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Building India's Largest <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">Pay-Per-Day</span> Fitness Network
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl p-6 border border-emerald-500/20 text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <Building2 className="w-8 h-8 text-emerald-300" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Active Onboarding</h4>
                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                  We're continuously adding premium fitness partners across major cities and emerging markets
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-2xl p-6 border border-gold-500/20 text-center"
              >
                <div className="w-16 h-16 bg-gold-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                  <MapPin className="w-8 h-8 text-gold-300" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">City Coverage</h4>
                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                  Expanding from metros to tier-2 and tier-3 cities, ensuring fitness access for everyone
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl p-6 border border-emerald-500/20 text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <Users className="w-8 h-8 text-emerald-300" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Community Growth</h4>
                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                  Thousands of users joining daily, creating a vibrant fitness community across India
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 }}
                className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-2xl p-6 border border-gold-500/20 text-center"
              >
                <div className="w-16 h-16 bg-gold-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                  <TrendingUp className="w-8 h-8 text-gold-300" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Rapid Expansion</h4>
                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                  Our network is growing exponentially as more partners recognize the pay-per-day opportunity
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
              className="bg-gradient-to-r from-emerald-600/20 to-gold-600/20 rounded-2xl p-8 border-2 border-emerald-500/30 text-center"
            >
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                <strong className="text-emerald-300">Search functionality will be live soon!</strong> We're working tirelessly to onboard partners in every major city. Once we have sufficient coverage in a city, you'll be able to search, compare, and book venues instantly. <strong className="text-gold-300">Stay tuned for updates as we expand our network.</strong>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

