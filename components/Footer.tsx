'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    user: [
      { name: 'About Us', href: '/user/about' },
      { name: 'Privacy Policy', href: '/user/privacy' },
      { name: 'Terms & Conditions', href: '/user/terms' },
      { name: 'Help & Support', href: '/user/help' },
    ],
    partner: [
      { name: 'About Us', href: '/partner/about' },
      { name: 'Privacy Policy', href: '/partner/privacy' },
      { name: 'Terms & Conditions', href: '/partner/terms' },
      { name: 'Help & Support', href: '/partner/help' },
      { name: 'Partner Program', href: '/partners' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/rivioapp', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/Rivioapp', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/rivioapp/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/rivioapp', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-500 mb-2">RIVIO</h3>
            <p className="text-sm text-gray-500 mb-3">Gym, Yoga & Sports Activities</p>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Your route to movement. RIVIO is a universal fitness access platform that eliminates the need for multiple subscriptions. Pay-per-day for instant access to any gym, yoga studio, or wellness center. Build streaks, compete on leaderboards, and unlock achievements—fitness made fun and motivating.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:support@rivio.com" className="hover:text-emerald-500 transition-colors">
                support@rivio.com
              </a>
            </div>
          </div>

          {/* User App Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">User App</h4>
            <ul className="space-y-2">
              {footerLinks.user.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner App Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Partner App</h4>
            <ul className="space-y-2">
              {footerLinks.partner.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <p className="mb-2">Need help?</p>
              <a href="mailto:support@rivio.com" className="text-emerald-500 hover:text-emerald-400">
                Contact Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} RIVIO. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for fitness enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

