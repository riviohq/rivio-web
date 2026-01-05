'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Users, Globe, Shield } from 'lucide-react'

export default function Introduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const features = [
    {
      icon: Zap,
      title: 'Pay-Per-Day Revolution',
      description: 'No more multiple subscriptions! Pay only for the days you use. Try a gym today, yoga tomorrow, wellness center next week.',
    },
    {
      icon: Users,
      title: 'Nationwide Network',
      description: 'Access gyms, studios, and wellness centers across cities and villages. Your fitness journey isn\'t limited to one location.',
    },
    {
      icon: Globe,
      title: 'Instant Access',
      description: 'Walk into any partner venue and start working out immediately. No waiting, no paperwork, no long-term commitments.',
    },
    {
      icon: Shield,
      title: 'Secure & Transparent',
      description: 'Bank-level security for all transactions. Complete transparency in pricing, payments, and progress tracking.',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Optimized floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-8 gpu-accelerated"
            style={{
              width: `${400 + i * 120}px`,
              height: `${400 + i * 120}px`,
              background: i % 2 === 0 ? '#10b981' : '#d4af37',
              left: `${25 + i * 30}%`,
              top: `${15 + i * 20}%`,
              willChange: 'transform',
            }}
            animate={{
              x: [0, 40, -40, 0],
              y: [0, 25, -25, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 gpu-accelerated"
          style={{ willChange: 'transform, opacity' }}
        >
            <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 gpu-accelerated"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            Why <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">RIVIO</span>?
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium">
            The fitness platform that solves real problems and delivers real value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 400, damping: 25 }
              }}
              className="bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black/90 p-10 rounded-3xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all border border-emerald-500/30 backdrop-blur-xl relative overflow-hidden group gpu-accelerated"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Optimized background gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 rounded-3xl flex items-center justify-center mb-8 relative mx-auto group-hover:scale-105 transition-transform duration-300 gpu-accelerated"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                style={{ willChange: 'transform' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-emerald-500/40 rounded-3xl blur-2xl gpu-accelerated"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.6, 1],
                  }}
                  style={{ willChange: 'transform, opacity' }}
                />
                <feature.icon className="w-10 h-10 text-emerald-400 relative z-10 drop-shadow-lg" />
              </motion.div>
              
              <h3 className="text-2xl font-extrabold text-white mb-4 relative z-10 group-hover:text-emerald-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-200 leading-relaxed relative z-10 text-base font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 bg-gradient-to-r from-emerald-600/90 to-emerald-700/90 rounded-3xl p-10 md:p-16 text-white border border-emerald-400/30 backdrop-blur-xl relative overflow-hidden gpu-accelerated"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              The Problem We Solved
            </h3>
            <p className="text-lg md:text-xl mb-6 text-white leading-relaxed font-medium">
              The fitness industry has long been constrained by rigid membership models that force consumers to commit to single venues with long-term subscriptions. Why buy a gym membership when you want yoga today, a wellness center tomorrow, and a different gym next week?
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
              RIVIO solves this fundamental problem with our pay-per-day concept. Instead of multiple subscriptions, users can access any gym, yoga studio, or wellness center for just the days they need—no long-term commitments, no wasted money.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

