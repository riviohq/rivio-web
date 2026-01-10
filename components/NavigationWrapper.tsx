'use client'

import { useState, useEffect } from 'react'
import Navigation from './Navigation'

export default function NavigationWrapper() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <Navigation isScrolled={isScrolled} />
}

