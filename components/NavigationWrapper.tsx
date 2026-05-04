'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Navigation from './Navigation'

function isMarketingHome(pathname: string | null) {
  if (!pathname) return false
  const p = pathname.replace(/\/$/, '') || '/'
  return p === '/'
}

export default function NavigationWrapper() {
  const [scrollPastHero, setScrollPastHero] = useState(false)
  const pathname = usePathname()
  const onHome = isMarketingHome(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPastHero(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Announcement bar + “solid” nav: on home only until user scrolls; on every other route
  // always treat as scrolled (scroll resets to 0 after navigation, which left the bar visible).
  const isScrolled = !onHome || scrollPastHero

  return <Navigation isScrolled={isScrolled} />
}

