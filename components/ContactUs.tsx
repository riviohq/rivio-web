'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MessageSquare, Send, Sparkles, Building2, TrendingUp, Users, ExternalLink } from 'lucide-react'

export default function ContactUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-6 gpu-accelerated"
            style={{
              width: `${500 + i * 120}px`,
              height: `${500 + i * 120}px`,
              background: i % 2 === 0 ? '#10b981' : '#d4af37',
              left: `${i * 25}%`,
              top: `${i * 20}%`,
              willChange: 'transform',
            }}
            animate={{
              x: [0, 60, -30, 0],
              y: [0, 50, -25, 0],
              scale: [1, 1.3, 0.95, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: i * 2,
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
            Partner With <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">Us</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Join us in transforming India's fitness landscape. Investors, partners, and venues—let's build the future together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Google Form Embedded - Most Reliable Method */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 rounded-3xl p-8 md:p-10 border-2 border-emerald-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-gold-500/5 opacity-50" />
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center border-2 border-emerald-400/40">
                    <Sparkles className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Get In Touch</h3>
                </div>
                <p className="text-gray-300 mb-6 font-medium">
                  Fill out the form below and we'll get back to you as soon as possible. Join us in transforming India's fitness landscape.
                </p>
                
                {/* Direct Link to Google Form - No Entry IDs Needed */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-500/10 to-gold-500/10 rounded-2xl p-6 border-2 border-emerald-500/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center border-2 border-emerald-400/40">
                        <Send className="w-7 h-7 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Ready to Partner With Us?</h4>
                        <p className="text-gray-300 font-medium text-sm">
                          Click the button below to fill out our partnership form
                        </p>
                      </div>
                    </div>
                    
                    <motion.a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeRYNKypv9jMJaT3Ws-0OesfYEaBnM_5oP5a3z27LlRw1ps2Q/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30"
                    >
                      <Send className="w-5 h-5" />
                      <span>Open Partnership Form</span>
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    
                    <p className="text-xs text-gray-400 mt-4 text-center font-medium">
                      ✓ Opens in a new tab • All submissions stored directly in Google Forms
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-emerald-500/20">
                    <p className="text-sm text-gray-300 font-medium text-center">
                      Or contact us directly at{' '}
                      <a href="mailto:partnerships@rivio.com" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                        partnerships@rivio.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Benefits - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 p-10 rounded-3xl border-2 border-emerald-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-gold-500/5" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-emerald-400" />
                  Why Partner With Us?
                </h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                      <TrendingUp className="w-7 h-7 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Maximize Revenue</h4>
                      <p className="text-gray-300 font-medium leading-relaxed">
                        Fill unused capacity with pay-per-day users and increase facility utilization by up to 45%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-gold-500/30">
                      <Users className="w-7 h-7 text-gold-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Access New Customers</h4>
                      <p className="text-gray-300 font-medium leading-relaxed">
                        Reach thousands of fitness enthusiasts actively seeking flexible access to premium facilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                      <Sparkles className="w-7 h-7 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Complete Business Tools</h4>
                      <p className="text-gray-300 font-medium leading-relaxed">
                        Manage operations, track analytics, and scale your business with our comprehensive platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 p-10 rounded-3xl border-2 border-emerald-500/30 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-emerald-400" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <a href="mailto:support@rivio.com" className="text-emerald-400 hover:text-emerald-300 font-medium block mb-1 transition-colors">
                      support@rivio.com
                    </a>
                    <a href="mailto:partnerships@rivio.com" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                      partnerships@rivio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                    <MessageSquare className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Business Inquiries</h4>
                    <p className="text-gray-300 font-medium leading-relaxed">
                      Interested in partnering with RIVIO? Fill out the form or contact us directly for business opportunities, investments, or venue partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

