"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  DURATION, 
  DELAY, 
  EASE_EXPO, 
  EASE_SMOOTH, 
  EASE_LINEAR,
  TRANSITION_REVEAL,
  TRANSITION_ROTATE
} from "@/animation-timing";
import {
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  Building2,
  TrendingUp,
  Users,
  ExternalLink,
} from "lucide-react";

export default function ContactUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-8 md:py-12 bg-black relative overflow-hidden"
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
              background: i % 2 === 0 ? "#10b981" : "#d4af37",
              left: `${i * 25}%`,
              top: `${i * 20}%`,
              willChange: "transform",
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
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={TRANSITION_REVEAL}
          className="text-center mb-4 md:mb-6"
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: DURATION.SLOW, delay: DELAY.SHORT, ease: EASE_EXPO }}
          >
            Partner With{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>
          <p className="text-base md:text-xl lg:text-2xl text-gray-200 font-medium">
            Join us in transforming India's fitness landscape. Investors,
            partners, and venues—let's build the future together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          {/* Google Form Embedded - Most Reliable Method */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: DURATION.SLOW, delay: DELAY.SHORT, ease: EASE_EXPO }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6 border-2 border-emerald-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden h-full">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-gold-500/5 opacity-50" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={TRANSITION_ROTATE}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-5">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-emerald-500/20 rounded-lg md:rounded-xl flex items-center justify-center border-2 border-emerald-400/40">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Get In Touch
                  </h3>
                </div>
                <p className="text-gray-300 mb-3 md:mb-5 font-medium text-xs md:text-sm">
                  Fill out the form and we'll get back to you soon. Join us in
                  transforming India's fitness landscape.
                </p>

                <div className="space-y-3 md:space-y-4">
                  <div className="bg-gradient-to-r from-emerald-500/10 to-gold-500/10 rounded-lg md:rounded-xl p-4 md:p-5 border-2 border-emerald-500/30">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="w-9 h-9 md:w-11 md:h-11 bg-emerald-500/20 rounded-lg md:rounded-xl flex items-center justify-center border-2 border-emerald-400/40">
                        <Send className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-white">
                          Ready to Partner?
                        </h4>
                        <p className="text-gray-300 font-medium text-xs">
                          Click below to fill out our form
                        </p>
                      </div>
                    </div>

                    <motion.a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeRYNKypv9jMJaT3Ws-0OesfYEaBnM_5oP5a3z27LlRw1ps2Q/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg md:rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 text-sm md:text-base"
                    >
                      <Send className="w-4 h-4" />
                      <span>Partnership Form</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>

                    <p className="text-xs text-gray-400 mt-3 text-center font-medium">
                      ✓ Opens in a new tab
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 border border-emerald-500/20">
                    <p className="text-sm text-gray-300 font-medium text-center">
                      Or email{" "}
                      <a
                        href="mailto:partnerships@rivio.com"
                        className="text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        partnerships@rivio.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why Partner With Us? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: DURATION.SLOW, delay: DELAY.MEDIUM_SHORT, ease: EASE_EXPO }}
          >
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border-2 border-emerald-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-gold-500/5" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  <Building2 className="w-5 h-5 md:w-7 md:h-7 text-emerald-400" />
                  Why Partner With Us?
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-emerald-500/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5 md:mb-1 text-sm md:text-base">
                        Maximize Revenue
                      </h4>
                      <p className="text-gray-300 font-medium text-xs md:text-sm leading-relaxed">
                        Fill unused capacity with pay-per-day users and increase
                        utilization by up to 45%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-gold-500/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 border border-gold-500/30">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-gold-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5 md:mb-1 text-sm md:text-base">
                        Access New Customers
                      </h4>
                      <p className="text-gray-300 font-medium text-xs md:text-sm leading-relaxed">
                        Reach thousands of fitness enthusiasts seeking flexible
                        access
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-emerald-500/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5 md:mb-1 text-sm md:text-base">
                        Complete Business Tools
                      </h4>
                      <p className="text-gray-300 font-medium text-xs md:text-sm leading-relaxed">
                        Manage operations, track analytics, and scale your
                        business
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: DURATION.SLOW, delay: DELAY.MEDIUM, ease: EASE_EXPO }}
          >
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl border-2 border-emerald-500/30 backdrop-blur-xl shadow-2xl h-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                Contact Information
              </h3>
              <div className="space-y-3 md:space-y-5">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-emerald-500/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5 md:mb-1 text-sm md:text-base">Email</h4>
                    <a
                      href="mailto:support@rivio.com"
                      className="text-emerald-400 hover:text-emerald-300 font-medium block text-sm transition-colors"
                    >
                      support@rivio.com
                    </a>
                    <a
                      href="mailto:partnerships@rivio.com"
                      className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors"
                    >
                      partnerships@rivio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-emerald-500/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5 md:mb-1 text-sm md:text-base">
                      Business Inquiries
                    </h4>
                    <p className="text-gray-300 font-medium text-xs md:text-sm leading-relaxed">
                      Interested in partnering with RIVIO? Fill out the form or
                      contact us directly for opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
