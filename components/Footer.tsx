'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, X, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {

  const footerLinks = {
    user: [
      { name: 'App Features', href: '/features/member-app' },
      { name: 'About Us', href: '/members/about-us' },
      { name: 'Privacy Policy', href: '/members/privacy-policy' },
      { name: 'Terms & Conditions', href: '/members/terms-conditions' },
      { name: 'Help & Support', href: '/members/support' },
      { name: 'Get the App', href: '/download/' },
    ],
    partner: [
      { name: 'App Features', href: '/features/business-app' },
      { name: 'About Us', href: '/business/about-us' },
      { name: 'Privacy Policy', href: '/business/privacy-policy' },
      { name: 'Terms & Conditions', href: '/business/terms-conditions' },
      { name: 'Help & Support', href: '/business/support' },
      { name: 'Partner Program', href: '/business/partner-program' },
      { name: 'Get the App', href: '/download/' },
    ],
  }

  const appDescriptions = {
    user: 'For people who work out. Pay per day at any gym, yoga, or studio—no subscription.',
    partner: 'For gyms, studios & wellness centers. Offer pay-per-day access and grow revenue.',
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/rivioapp', label: 'Facebook' },
    { icon: X, href: 'https://x.com/Rivioapp', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/rivioapp/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/rivioapp', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative text-white border-t border-emerald-900/50 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      {/* Subtle emerald glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">RIVIO</h3>
            <p className="text-sm font-medium text-white/90 mb-2">Your route to movement.</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              One app. Any gym, yoga, or studio. Pay only when you go—no subscriptions, no commitments.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <a href="mailto:hi@rivioapp.com" className="hover:text-emerald-400 transition-colors truncate">
                hi@rivioapp.com
              </a>
            </div>
            <Link
              href="/founder/"
              className="inline-block mt-3 text-sm text-emerald-400/90 hover:text-emerald-400 font-medium"
            >
              Founder
            </Link>
          </div>

          {/* User App */}
          <div>
            <h4 className="font-semibold text-white mb-1">User App</h4>
            <p className="text-gray-400 text-sm mb-4 leading-snug">{appDescriptions.user}</p>
            <ul className="space-y-2">
              {footerLinks.user.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner App */}
          <div>
            <h4 className="font-semibold text-white mb-1">Partner App</h4>
            <p className="text-gray-400 text-sm mb-4 leading-snug">{appDescriptions.partner}</p>
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
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 text-gray-300 hover:text-emerald-400"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <p className="mb-2">Need help?</p>
              <a href="mailto:support@rivioapp.com" className="text-emerald-400 hover:text-emerald-300">
                Contact Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 RIVIO. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/members/privacy-policy" className="hover:text-gray-300 transition-colors">
                Privacy
              </Link>
              <Link href="/members/terms-conditions" className="hover:text-gray-300 transition-colors">
                Terms
              </Link>
              <a href="mailto:support@rivioapp.com" className="hover:text-gray-300 transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

