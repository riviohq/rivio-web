'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, MapPin, AlertCircle } from 'lucide-react'

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
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Our network spans major metros and emerging cities, bringing premium fitness access to millions
          </p>
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

          {/* Future DB Integration Message */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-2">
                    Database Integration Coming Soon
                  </h4>
                  <p className="text-gray-200 font-medium">
                    We're currently working on integrating our database. Once complete, searching for "{searchQuery}" will show all available partners in that city with their pricing, amenities, and ratings. Stay tuned!
                  </p>
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

        {/* Future Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl p-10 md:p-16 shadow-2xl border border-emerald-500/20 backdrop-blur-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            What You'll See When Searching
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">All Partners</h4>
              <p className="text-gray-200 text-sm font-medium">
                View all gyms, yoga studios, and wellness centers in the selected city
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">₹</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Pricing</h4>
              <p className="text-gray-200 text-sm font-medium">
                See per-visit prices and pass options for each venue
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Ratings & Reviews</h4>
              <p className="text-gray-200 text-sm font-medium">
                Check ratings, read reviews, and see amenities before visiting
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

