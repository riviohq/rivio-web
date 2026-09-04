'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, X, Instagram, Linkedin, Mail } from 'lucide-react'
import { LEGAL_ENTITY } from '@/lib/legalEntity'

export default function Footer() {
  const footerLinks = {
    user: [
      { name: 'App Features', href: '/features/member-app' },
      { name: 'About Us', href: '/members/about-us' },
      { name: 'Privacy Policy', href: '/members/privacy-policy' },
      { name: 'Terms & Conditions', href: '/members/terms-conditions' },
      { name: 'Help & Support', href: '/members/support' },
    ],
    partner: [
      { name: 'Partner with Rivio', href: '/partner-with-rivio/' },
      { name: 'App Features', href: '/features/business-app' },
      { name: 'About Us', href: '/business/about-us' },
      { name: 'Partner Program', href: '/business/partner-program' },
      { name: 'Privacy Policy', href: '/business/privacy-policy' },
      { name: 'Terms & Conditions', href: '/business/terms-conditions' },
    ],
    company: [
      { name: 'Rivio Pulse', href: '/pulse/' },
      { name: 'Founder & Vision', href: '/founder/' },
      { name: 'Get the App', href: '/download/' },
      { name: 'Contact Support', href: 'mailto:support@rivioapp.com' },
    ],
  }

  const emails = [
    { label: 'General', email: 'hi@rivioapp.com' },
    { label: 'Support', email: 'support@rivioapp.com' },
    { label: 'Help desk', email: 'help-desk@rivioapp.com' },
    { label: 'Partners', email: 'partner@rivioapp.com' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/rivioapp', label: 'Facebook' },
    { icon: X, href: 'https://x.com/Rivioapp', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/rivioapp/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/rivioapp', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative text-white border-t border-emerald-900/40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <h3 className="text-2xl font-bold text-emerald-400">RIVIO</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-xs">
              One app for any gym, yoga, or studio. Pay only when you go, with no subscriptions.
            </p>
            <ul className="mt-4 space-y-1.5">
              {emails.map((item) => (
                <li key={item.email} className="flex items-center gap-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4 shrink-0 text-gray-500" />
                  <span className="text-gray-500">{item.label}:</span>
                  <a href={`mailto:${item.email}`} className="hover:text-emerald-400 transition-colors">
                    {item.email}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* User App */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">User App</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.user.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner App */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Partner App</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.partner.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-500">© 2026 RIVIO. All rights reserved.</p>
            <div className="flex items-center gap-5 text-xs text-gray-500">
              <Link href="/members/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</Link>
              <Link href="/members/terms-conditions" className="hover:text-gray-300 transition-colors">Terms</Link>
              <a href={`mailto:${LEGAL_ENTITY.entityEmail}`} className="hover:text-gray-300 transition-colors">Legal</a>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-600 leading-relaxed">
            {LEGAL_ENTITY.brandName} is operated by {LEGAL_ENTITY.legalName}
            {' · '}GSTIN {LEGAL_ENTITY.gstin}
            {' · '}{LEGAL_ENTITY.registeredOffice}
          </p>
        </div>
      </div>
    </footer>
  )
}
