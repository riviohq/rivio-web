'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { getStaggerDelay } from '@/animation-timing'

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  const navLinks = [
    { name: 'Home', href: '/', sectionId: null },
    { name: 'About', href: '/', sectionId: 'about' },
    { name: 'Apps', href: '/', sectionId: 'apps' },
    { name: 'Features', href: '/features', sectionId: null },
    { name: 'Rivio Network', href: '/', sectionId: 'cities' },
    { name: 'Contact', href: '/', sectionId: 'contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false)
    
    if (link.sectionId) {
      // If it has a section, navigate to home first, then scroll
      if (isHomePage) {
        scrollToSection(link.sectionId)
      } else {
        router.push('/')
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(link.sectionId!)
        }, 300)
      }
    } else {
      // Regular route navigation
      router.push(link.href)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-2xl shadow-2xl border-b border-emerald-500/30'
          : 'bg-black/40 backdrop-blur-lg'
      }`}
      style={{
        boxShadow: isScrolled 
          ? '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(16, 185, 129, 0.1)' 
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/">
              <Image
                src="/logos/rivio-user-light.png"
                alt="RIVIO Logo"
                width={120}
                height={120}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: getStaggerDelay(index) }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium transition-colors text-gray-300 hover:text-emerald-400"
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-emerald-500/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-emerald-400 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

