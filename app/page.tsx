'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import AppTabs from '@/components/AppTabs'
import ScreenshotShowcase from '@/components/ScreenshotShowcase'
import CitySearch from '@/components/CitySearch'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden relative bg-black">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Introduction />
      <AppTabs />
      <ScreenshotShowcase />
      <CitySearch />
      <ContactUs />
      <Footer />
    </main>
  )
}

