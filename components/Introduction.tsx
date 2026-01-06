'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Users, Globe, Shield, X, Check, Star, Circle, Lightbulb } from 'lucide-react'

export default function Introduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const userVision = [
    {
      icon: Zap,
      title: 'Universal Access',
      description: 'Access any gym, yoga studio, wellness center, swimming pool, or sports facility across India. No geographical limitations, no venue restrictions—your fitness journey isn\'t bound to one location.',
    },
    {
      icon: Users,
      title: 'Easy Access Priority',
      description: 'Priority access to premium facilities with instant check-ins. Walk in, scan QR code, start working out—no waiting, no paperwork, no long approval processes. Fitness should be this simple.',
    },
    {
      icon: Globe,
      title: 'Pay-Per-Day Freedom',
      description: 'The world\'s first pay-per-day model eliminates subscription waste. Pay only for days you actually use—try different venues, explore various activities, and never commit to long-term memberships you won\'t use.',
    },
    {
      icon: Shield,
      title: 'Transparent & Secure',
      description: 'Complete transparency in pricing, payments, and progress tracking. Bank-level security ensures your data and transactions are protected. Trust and transparency are at the core of everything we do.',
    },
  ]

  const partnerVision = [
    {
      icon: Zap,
      title: 'Complete Business Management',
      description: 'Manage your entire fitness business from one unified platform: active subscriptions, expired passes tracking, pay-per-day access, subscription renewals, active members, revenue streams, and multi-location operations—all synchronized in real-time.',
    },
    {
      icon: Users,
      title: 'Dual Revenue Model',
      description: 'Maximize earnings through two powerful revenue streams: pay-per-day access for flexible users and subscription models for committed members. Track both revenue channels, manage pass expirations, and optimize pricing strategies to fill unused capacity.',
    },
    {
      icon: Globe,
      title: 'Advanced Analytics & Insights',
      description: 'Comprehensive business intelligence dashboard with real-time analytics, subscription lifecycle tracking, expiration alerts, peak hour identification, customer behavior insights, and revenue forecasting. Make data-driven decisions to scale your business.',
    },
    {
      icon: Shield,
      title: 'Automated Operations',
      description: 'Fully automated business operations: QR code check-ins, instant payment processing, subscription management, expiration tracking and alerts, customer engagement, and multi-venue coordination. Eliminate manual work and focus on growth.',
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
            Fitness is <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">Evolving</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium">
            Access. Easy access. Priority. These things matter more than ever. We're building the future of fitness—one that prioritizes flexibility, transparency, and sustainable growth for everyone.
          </p>
        </motion.div>

        {/* User Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Vision for <span className="text-emerald-400">Users</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {userVision.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400, damping: 25 }
                }}
                className="bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black/90 p-8 lg:p-10 rounded-3xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all border border-emerald-500/30 backdrop-blur-xl relative overflow-hidden group gpu-accelerated"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Optimized background gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 rounded-3xl flex items-center justify-center mb-6 relative mx-auto group-hover:scale-105 transition-transform duration-300 gpu-accelerated"
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
                
                <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-4 relative z-10 group-hover:text-emerald-300 transition-colors">
                {feature.title}
              </h3>
                <p className="text-gray-200 leading-relaxed relative z-10 text-sm lg:text-base font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        </motion.div>

        {/* Partner Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Vision for <span className="text-gold-400">Partners</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {partnerVision.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400, damping: 25 }
                }}
                className="bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black/90 p-8 lg:p-10 rounded-3xl hover:shadow-2xl hover:shadow-gold-500/30 transition-all border border-gold-500/30 backdrop-blur-xl relative overflow-hidden group gpu-accelerated"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Optimized background gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-gold-500/30 to-gold-600/20 rounded-3xl flex items-center justify-center mb-6 relative mx-auto group-hover:scale-105 transition-transform duration-300 gpu-accelerated"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{ willChange: 'transform' }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gold-500/40 rounded-3xl blur-2xl gpu-accelerated"
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
                  <feature.icon className="w-10 h-10 text-gold-400 relative z-10 drop-shadow-lg" />
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-4 relative z-10 group-hover:text-gold-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed relative z-10 text-sm lg:text-base font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Problem Statement - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative"
        >
          {/* Enhanced Background with Multiple Gradient Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-emerald-700/90 to-emerald-800/90 rounded-3xl blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-600/20 via-transparent to-emerald-600/20 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-emerald-600/95 via-emerald-700/95 to-emerald-800/95 rounded-3xl p-10 md:p-16 text-white border-2 border-emerald-400/50 backdrop-blur-xl overflow-hidden gpu-accelerated shadow-2xl shadow-emerald-500/30">
            {/* Animated background pattern - Enhanced */}
            <div className="absolute inset-0 opacity-25">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
            </div>
            
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
                style={{ left: '-10%', top: '-10%' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute w-96 h-96 bg-gold-500/15 rounded-full blur-3xl"
                style={{ right: '-10%', bottom: '-10%' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, -40, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
            
            {/* Floating particles - Enhanced */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                  style={{
                    left: `${(i * 5) % 100}%`,
                    top: `${(i * 7) % 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 2, 1],
                  }}
                  transition={{
                    duration: 4 + i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} />

            <div className="relative z-10">
              {/* Main Heading - Enhanced */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="mb-12 text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="inline-block mb-4"
                >
                  <span className="text-sm md:text-base font-semibold text-emerald-300 uppercase tracking-wider bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-400/30">
                    Industry Analysis
                  </span>
                </motion.div>
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  The <span className="bg-gradient-to-r from-emerald-300 via-gold-300 to-emerald-300 bg-clip-text text-transparent animate-gradient">$50 Billion</span> Problem
                  <br />
                  <span className="text-emerald-200">We're Solving</span>
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '120px' } : {}}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="h-1.5 bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 rounded-full mx-auto shadow-lg shadow-emerald-500/50"
                />
              </motion.div>

              {/* Statistics Grid - Enhanced */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-emerald-600/30 via-emerald-700/20 to-emerald-800/30 backdrop-blur-xl rounded-2xl p-8 border-2 border-emerald-400/40 hover:border-emerald-300/60 transition-all shadow-xl shadow-emerald-500/20 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent mb-3">67%</div>
                    <div className="text-sm md:text-base text-white/95 leading-relaxed font-medium">
                      of gym memberships go completely unused, representing billions in wasted consumer spending annually
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gold-600/30 via-gold-700/20 to-gold-800/30 backdrop-blur-xl rounded-2xl p-8 border-2 border-gold-400/40 hover:border-gold-300/60 transition-all shadow-xl shadow-gold-500/20 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gold-300 to-gold-100 bg-clip-text text-transparent mb-3">$50B+</div>
                    <div className="text-sm md:text-base text-white/95 leading-relaxed font-medium">
                      wasted globally each year on unused fitness memberships and underutilized facilities
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-emerald-600/30 via-emerald-700/20 to-emerald-800/30 backdrop-blur-xl rounded-2xl p-8 border-2 border-emerald-400/40 hover:border-emerald-300/60 transition-all shadow-xl shadow-emerald-500/20 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent mb-3">45%</div>
                    <div className="text-sm md:text-base text-white/95 leading-relaxed font-medium">
                      average facility utilization rate, leaving massive revenue potential untapped
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Problem Description - Enhanced */}
              <div className="space-y-6 mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  className="text-lg md:text-xl text-white leading-relaxed font-medium"
                >
                  After years of research, monitoring industry trends, and analyzing consumer behavior, we've identified a fundamental flaw in the fitness ecosystem. <strong className="text-emerald-300 font-bold bg-emerald-500/20 px-2 py-1 rounded">The traditional subscription model forces people into commitments they can't keep.</strong> Life happens—work schedules change, priorities shift, motivation fluctuates. Yet millions are locked into expensive memberships they signed with good intentions but can't maintain.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="text-lg md:text-xl text-white leading-relaxed font-medium"
                >
                  Meanwhile, fitness venues face their own crisis. They invest millions in premium equipment, spacious facilities, and expert trainers, only to see 55% of their capacity sit empty. High customer acquisition costs, low retention rates, and unpredictable revenue streams make it nearly impossible to sustain growth. <strong className="text-gold-300 font-bold bg-gold-500/20 px-2 py-1 rounded">The industry is stuck in a cycle of waste—consumers waste money, venues waste capacity.</strong>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  className="text-lg md:text-xl text-white leading-relaxed font-medium"
                >
                  We've studied every step of this journey. We've analyzed why people abandon gyms, why venues struggle to fill slots, and what truly matters to both sides. <strong className="text-emerald-300 font-bold bg-gradient-to-r from-emerald-500/20 to-gold-500/20 px-2 py-1 rounded">The answer is simple: flexibility, transparency, and mutual value.</strong> People want to work out on their terms, and venues want to maximize their potential. Our pay-per-day model bridges this gap, creating a sustainable ecosystem where every visit matters, every payment is fair, and every facility reaches its full potential.
                </motion.p>
              </div>

              {/* Solution Highlight - Enhanced */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="relative bg-gradient-to-r from-emerald-500/40 via-gold-500/30 to-emerald-500/40 rounded-3xl p-8 md:p-10 border-2 border-emerald-300/50 backdrop-blur-xl shadow-2xl shadow-emerald-500/30 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-gold-500/20 opacity-50" />
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
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2.1 }}
                    className="text-3xl md:text-4xl font-extrabold text-white mb-6 flex items-center gap-4"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm">
                      <Lightbulb className="w-8 h-8 text-emerald-200" />
                    </div>
                    <span>Our Solution: A Win-Win Revolution</span>
                  </motion.h4>
                  <div className="space-y-4">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 2.2 }}
                      className="text-lg md:text-xl text-white/95 leading-relaxed font-medium"
                    >
                      <strong className="text-emerald-200 font-bold">RIVIO disrupts this broken model entirely.</strong> Our world's first pay-per-day platform eliminates waste for users while maximizing revenue for partners. Users access premium facilities only when needed—no guilt, no waste, no commitments. Partners fill capacity that would otherwise sit empty, turning idle time into revenue.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 2.3 }}
                      className="text-lg md:text-xl text-white/95 leading-relaxed font-medium"
                    >
                      We're not just another fitness app. <strong className="text-emerald-200 font-bold">We're redefining an industry.</strong> With our proven model, comprehensive research, and deep understanding of both user and partner needs, we're positioned to transform how India—and eventually the world—accesses fitness. This is more than a platform; it's a movement toward sustainable, accessible, and mutually beneficial fitness for everyone.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Why RIVIO is Different - IMPORTANT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative"
        >
          {/* Background with gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 rounded-3xl p-10 md:p-16 text-white border-2 border-emerald-500/30 backdrop-blur-xl overflow-hidden gpu-accelerated shadow-2xl shadow-emerald-500/10">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]" />
            </div>

            <div className="relative z-10">
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Why <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">RIVIO</span> is Different
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                  We're not just another fitness app. Here's what makes us fundamentally different.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-gold-400 rounded-full mx-auto mt-4" />
              </motion.div>

              {/* Three Key Differentiators */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* 1. Physical Space Access Platform */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 p-8 rounded-3xl border-2 border-emerald-500/40 hover:border-emerald-400/60 transition-all backdrop-blur-xl relative overflow-hidden group flex flex-col h-full"
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-6 min-h-[4rem]">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center font-bold text-emerald-400 border border-emerald-500/40 flex-shrink-0">
                        <span className="text-xl">1</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Physical Space Access Platform
                      </h4>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <p className="text-sm text-red-300 font-semibold">Traditional Approach:</p>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Focus on virtual coaching, online workouts, and digital content delivery
                        </p>
                      </div>
                      
                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <p className="text-sm text-emerald-300 font-semibold">RIVIO's Approach:</p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
                          <li className="flex items-start gap-2">
                            <Circle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                            <span><strong>Physical space access</strong> to real gyms, studios, and pools</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Circle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                            <span><strong>Real-world facilities</strong> - premium equipment and expert trainers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Circle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                            <span><strong>Daily flexibility</strong> - choose your venue and time</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 2. Flexible Payment Model */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 p-8 rounded-3xl border-2 border-emerald-500/40 hover:border-emerald-400/60 transition-all backdrop-blur-xl relative overflow-hidden group flex flex-col h-full"
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-6 min-h-[4rem]">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center font-bold text-emerald-400 border border-emerald-500/40 flex-shrink-0">
                        <span className="text-xl">2</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Flexible Payment Model
                      </h4>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <p className="text-sm text-red-300 font-semibold">Traditional Approach:</p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                          <li className="flex items-start gap-2">
                            <Circle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                            <span>Mandatory monthly/annual subscription plans</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Circle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                            <span>Locked into single-venue ecosystems</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <p className="text-sm text-emerald-300 font-semibold">RIVIO's Approach:</p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
                          <li className="flex items-start gap-2">
                            <Circle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                            <span><strong>Zero commitment</strong> - no long-term contracts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Circle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                            <span><strong>Pay-per-day</strong> - only pay for days you use</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3. Multi-Venue Marketplace Platform */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-gold-500/20 via-gold-600/15 to-gold-500/20 p-8 rounded-3xl border-2 border-gold-500/50 hover:border-gold-400/70 transition-all backdrop-blur-xl relative overflow-hidden group flex flex-col h-full"
                >
                  {/* Special glow for marketplace */}
                  <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-6 min-h-[4rem]">
                      <div className="w-12 h-12 bg-gold-500/30 rounded-xl flex items-center justify-center font-bold text-gold-300 border-2 border-gold-500/50 flex-shrink-0">
                        <span className="text-xl">3</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Multi-Venue Marketplace
                      </h4>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-gold-500/20 border-2 border-gold-500/40 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <Star className="w-5 h-5 text-gold-300 fill-gold-300 flex-shrink-0" />
                          <p className="text-base text-gold-200 font-bold text-center">
                            Our Core Differentiator
                          </p>
                          <Star className="w-5 h-5 text-gold-300 fill-gold-300 flex-shrink-0" />
                        </div>
                        <p className="text-sm text-white leading-relaxed font-medium text-center">
                          RIVIO operates as a true marketplace, connecting users with multiple venues across the entire fitness ecosystem. Access any gym, yoga studio, pool, or sports facility—all from one unified platform.
                        </p>
                      </div>
                      
                      <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <p className="text-sm text-gold-300 font-semibold">Marketplace Capabilities:</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-white">
                            <Circle className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" />
                            <span className="text-sm">Multi-venue access across all fitness categories</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <Circle className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" />
                            <span className="text-sm">Compare pricing, amenities, and locations</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <Circle className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" />
                            <span className="text-sm">Unrestricted marketplace freedom</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="text-center bg-gradient-to-r from-emerald-600/20 to-gold-600/20 rounded-2xl p-8 border border-emerald-500/30 backdrop-blur-sm"
              >
                <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                  <strong className="text-emerald-300">RIVIO isn't trying to be everything to everyone.</strong> We're focused on one thing: <strong className="text-gold-300">making physical fitness spaces accessible through a true marketplace model.</strong> No coaching apps. No subscription locks. Just access, choice, and freedom.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

