'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MessageSquare, Send, AlertCircle } from 'lucide-react'
import { sanitizeContactForm, type ContactFormData } from '@/lib/security'

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors([])
    setSubmitSuccess(false)
    setIsSubmitting(true)

    // Validate and sanitize input
    const sanitized = sanitizeContactForm(formData)

    if (sanitized.errors.length > 0) {
      setErrors(sanitized.errors)
      setIsSubmitting(false)
      return
    }

    // In the future, this will send to an API with sanitized data
    // The API will receive: sanitized.name, sanitized.email, sanitized.message
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Optimized floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-4 gpu-accelerated"
            style={{
              width: `${400 + i * 100}px`,
              height: `${400 + i * 100}px`,
              background: '#10b981',
              left: `${40 + i * 30}%`,
              top: `${30 + i * 25}%`,
              willChange: 'transform',
            }}
            animate={{
              x: [0, 40, -20, 0],
              y: [0, 30, -15, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: i * 2.5,
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
            Get in <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Have questions? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Messages */}
              {errors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border-2 border-red-500/30 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-400 mb-2">Please fix the following errors:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-red-300">
                        {errors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-emerald-400 font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    setErrors([])
                  }}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-emerald-500/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    setErrors([])
                  }}
                  required
                  maxLength={254}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-emerald-500/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value })
                    setErrors([])
                  }}
                  required
                  rows={6}
                  maxLength={5000}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-emerald-500/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 resize-none backdrop-blur-sm"
                  placeholder="Your message..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.message.length}/5000 characters
                </p>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 p-10 rounded-3xl border border-emerald-500/20 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:support@rivio.com" className="text-emerald-400 hover:text-emerald-300">
                      support@rivio.com
                    </a>
                    <br />
                    <a href="mailto:partnerships@rivio.com" className="text-emerald-400 hover:text-emerald-300">
                      partnerships@rivio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Inquiries</h4>
                    <p className="text-gray-200 font-medium">
                      Interested in partnering with RIVIO? Contact us for business opportunities.
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

