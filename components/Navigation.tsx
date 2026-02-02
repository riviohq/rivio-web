'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { getStaggerDelay } from '@/animation-timing'
import { Menu, X, Sparkles, MapPin, Download, Star, Zap } from 'lucide-react'

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [announcementIndex, setAnnouncementIndex] = useState(0)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  const announcements = [
    { icon: MapPin, text: "Now live in 10+ cities across India" },
    { icon: Star, text: "Rated 4.8★ by 10,000+ users" },
    { icon: Zap, text: "Pay per day • No contracts • No commitments" },
  ]

  // Navigation links in order of page content flow
  const navLinks = [
    { name: 'Home', href: '/', sectionId: null },
    { name: 'About', href: '/', sectionId: 'about' },
    { name: 'Apps', href: '/', sectionId: 'apps' },
    { name: 'Network', href: '/', sectionId: 'cities' },
    { name: 'Contact', href: '/', sectionId: 'contact' },
  ]

  // Announcement rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [announcements.length])

  // Scroll spy - track which section is in view
  useEffect(() => {
    if (!isHomePage) return

    const sectionIds = ['about', 'apps', 'cities', 'contact']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Offset for header

      // Check if at top of page
      if (scrollPosition < 300) {
        setActiveSection(null) // Home
        return
      }

      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (element) {
          const offsetTop = element.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionIds[i])
            return
          }
        }
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Simple crossfade - no black screen
  const crossfadeTransition = (scrollTo: number) => {
    const main = document.querySelector('main')
    if (main) {
      main.style.transition = 'opacity 0.25s ease'
      main.style.opacity = '0.3'
      window.scrollTo({ top: scrollTo, behavior: 'instant' as ScrollBehavior })
      
      requestAnimationFrame(() => {
        main.style.opacity = '1'
      })
    } else {
      window.scrollTo({ top: scrollTo, behavior: 'instant' as ScrollBehavior })
    }
  }

  const scrollToTop = () => {
    crossfadeTransition(0)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 60
      const scrollPosition = element.offsetTop - headerOffset
      crossfadeTransition(scrollPosition)
    }
  }

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false)
    
    // Home button - scroll to top
    if (link.name === 'Home') {
      if (isHomePage) {
        scrollToTop()
      } else {
        router.push('/')
      }
      return
    }
    
    if (link.sectionId) {
      // Has a section to scroll to
      if (isHomePage) {
        scrollToSection(link.sectionId)
      } else {
        // Navigate to home first, then scroll
        router.push('/')
        setTimeout(() => {
          scrollToSection(link.sectionId!)
        }, 600)
      }
    } else {
      // Regular page navigation
      router.push(link.href)
    }
  }

  const CurrentIcon = announcements[announcementIndex].icon

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Announcement Bar - Hidden when scrolled */}
        <div 
          className={`bg-[#1d1d1f] text-white overflow-hidden transition-all duration-300 ${
            isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center">
            <div className="flex items-center gap-2 text-sm">
              <CurrentIcon className="w-4 h-4 text-emerald-400" />
              <span className="font-medium">{announcements[announcementIndex].text}</span>
            </div>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center gap-1.5 pb-2">
            {announcements.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === announcementIndex ? 'w-6 bg-emerald-400' : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-gray-100'
            : 'bg-white/95 backdrop-blur-xl'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-[72px]">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center"
              >
                <Link href="/" className="flex items-center gap-2.5">
                  <div className="relative">
                    <Image
                      src="https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png"
                      alt="RIVIO Logo"
                      width={44}
                      height={44}
                      className="h-10 w-10 md:h-11 md:w-11"
                      priority
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full -z-10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1d1d1f]">
                      RIVIO
                    </span>
                    <span className="text-[10px] text-emerald-500 font-medium -mt-1 hidden sm:block">
                      Your Route to Movement
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop Navigation - Center */}
              <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-gray-100/80 backdrop-blur-sm">
                  {navLinks.map((link, index) => {
                    // Determine if this nav item is active
                    const isActive = isHomePage && (
                      (link.name === 'Home' && activeSection === null) ||
                      (link.sectionId && activeSection === link.sectionId)
                    )
                    
                    return (
                      <motion.button
                        key={link.name}
                        type="button"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: getStaggerDelay(index, 0.1, 0.05) }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavClick(link)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-[#1d1d1f] text-white shadow-md'
                            : 'text-[#1d1d1f] hover:bg-white hover:shadow-sm'
                        }`}
                      >
                        {link.name}
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* CTA Buttons - Desktop */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex items-center gap-3"
              >
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    if (isHomePage) {
                      scrollToSection('contact')
                    } else {
                      router.push('/')
                      setTimeout(() => scrollToSection('contact'), 500)
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2.5 text-sm font-medium text-[#1d1d1f] hover:text-emerald-600 transition-colors"
                >
                  Partner with us
                </motion.a>
                <motion.a
                  href="#apps"
                  onClick={(e) => {
                    e.preventDefault()
                    if (isHomePage) {
                      scrollToSection('apps')
                    } else {
                      router.push('/')
                      setTimeout(() => scrollToSection('apps'), 500)
                    }
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/25"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Get the App
                </motion.a>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden relative p-2.5 rounded-xl transition-all overflow-hidden ${
                  isMobileMenuOpen 
                    ? 'bg-[#1d1d1f] text-white' 
                    : 'bg-gray-100 text-[#1d1d1f] hover:bg-gray-200'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png"
                    alt="RIVIO Logo"
                    width={36}
                    height={36}
                    className="h-9 w-9"
                  />
                  <div>
                    <span className="text-lg font-bold text-[#1d1d1f]">RIVIO</span>
                    <p className="text-[10px] text-emerald-500 font-medium -mt-0.5">Your Route to Movement</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-gray-100 text-[#1d1d1f] hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex-1 overflow-y-auto p-5">
                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = isHomePage && (
                      (link.name === 'Home' && activeSection === null) ||
                      (link.sectionId && activeSection === link.sectionId)
                    )
                    
                    return (
                      <motion.button
                        key={link.name}
                        type="button"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => handleNavClick(link)}
                        className={`flex items-center justify-between w-full px-4 py-4 rounded-xl transition-all duration-200 text-left group ${
                          isActive 
                            ? 'bg-emerald-50 text-emerald-600' 
                            : 'text-[#1d1d1f] hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-medium text-base">{link.name}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isActive 
                            ? 'bg-emerald-500' 
                            : 'bg-gray-100 group-hover:bg-emerald-100'
                        }`}>
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              isActive 
                                ? 'bg-white' 
                                : 'bg-gray-400 group-hover:bg-emerald-500'
                            }`}
                          />
                        </div>
                      </motion.button>
                    )
                  })}
                </div>

                {/* Features highlight */}
                <div className="mt-8 p-4 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border border-emerald-100">
                  <h4 className="font-semibold text-[#1d1d1f] mb-3">Why RIVIO?</h4>
                  <div className="space-y-2">
                    {[
                      { icon: Zap, text: "Pay per day" },
                      { icon: MapPin, text: "500+ venues" },
                      { icon: Star, text: "No contracts" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-[#86868b]">
                        <item.icon className="w-4 h-4 text-emerald-500" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-gray-100 bg-gray-50/80 space-y-3">
                <motion.a
                  href="#apps"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    if (isHomePage) {
                      setTimeout(() => scrollToSection('apps'), 300)
                    } else {
                      router.push('/')
                      setTimeout(() => scrollToSection('apps'), 600)
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  <Sparkles className="w-5 h-5" />
                  Download Free
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    if (isHomePage) {
                      setTimeout(() => scrollToSection('contact'), 300)
                    } else {
                      router.push('/')
                      setTimeout(() => scrollToSection('contact'), 600)
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-[#1d1d1f] font-medium rounded-xl transition-all duration-200 border border-gray-200"
                >
                  Partner with us
                </motion.a>
                <p className="text-center text-xs text-[#86868b]">
                  Available on iOS & Android
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
