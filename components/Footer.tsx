'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    user: [
      { name: 'About Us', href: '/about' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Help & Support', href: '/help' },
      { name: 'FAQ', href: '/faq' },
    ],
    partner: [
      { name: 'Partner Program', href: '/partners' },
      { name: 'Business Solutions', href: '/business' },
      { name: 'Pricing', href: '/pricing' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/rivio', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/rivio', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/rivio', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/rivio', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-emerald-500 mb-4">RIVIO</h3>
            <p className="text-gray-400 mb-4">
              Universal Fitness Access Platform. Pay-per-day fitness access without multiple subscriptions.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
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
                    className="text-gray-400 hover:text-emerald-500 transition-colors"
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
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
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

