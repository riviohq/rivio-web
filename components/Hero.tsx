"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { memo, useCallback, useEffect, useRef } from "react";
import AnimatedVideoBackground from "./AnimatedVideoBackground";

const HeroLogo = memo(() => (
  <motion.div
    className="relative z-10 mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <Image
      src="https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png"
      alt="RIVIO Logo"
      width={120}
      height={120}
      className="w-24 h-24 md:w-28 md:h-28"
      priority
    />
  </motion.div>
));
HeroLogo.displayName = "HeroLogo";

const HeroHeading = memo(() => (
  <motion.h1
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1d1d1f] mb-6 leading-[1.05] tracking-[-0.03em]"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <span className="block">Fitness.</span>
    <span className="block text-emerald-500">Redefined.</span>
  </motion.h1>
));
HeroHeading.displayName = "HeroHeading";

const HeroDescription = memo(() => (
  <motion.p
    className="text-lg sm:text-xl md:text-2xl text-[#86868b] mb-8 max-w-2xl mx-auto leading-relaxed font-normal"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
  >
    Pay only for the days you use. Access any gym, studio, or wellness center. 
    No subscriptions. No commitments.
  </motion.p>
));
HeroDescription.displayName = "HeroDescription";

// Ultra smooth transition - very gentle fade
const smoothTransition = (scrollTo: number) => {
  const main = document.querySelector('main')
  if (main) {
    // Gentle fade out
    main.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    main.style.opacity = '0.7'
    
    // Wait for fade, then jump and fade back
    setTimeout(() => {
      window.scrollTo({ top: scrollTo, behavior: 'instant' as ScrollBehavior })
      
      // Smooth fade back in
      setTimeout(() => {
        main.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        main.style.opacity = '1'
      }, 50)
    }, 200)
  } else {
    window.scrollTo({ top: scrollTo, behavior: 'instant' as ScrollBehavior })
  }
}

const scrollToElement = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 60
    const scrollPosition = element.offsetTop - headerOffset
    smoothTransition(scrollPosition)
  }
}

const PrimaryButton = memo(
  ({ href, children }: { href: string; children: React.ReactNode }) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault()
      const sectionId = href.replace('#', '')
      scrollToElement(sectionId)
    }

    return (
      <motion.a
        href={href}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center justify-center px-8 py-4 bg-[#1d1d1f] text-white font-medium rounded-full text-lg transition-all duration-200 hover:bg-[#000] min-w-[180px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.a>
    )
  }
);
PrimaryButton.displayName = "PrimaryButton";

const SecondaryButton = memo(
  ({ href, children }: { href: string; children: React.ReactNode }) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault()
      const sectionId = href.replace('#', '')
      scrollToElement(sectionId)
    }

    return (
      <motion.a
        href={href}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-emerald-600 font-medium rounded-full text-lg transition-all duration-200 hover:bg-emerald-50 min-w-[180px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.a>
    )
  }
);
SecondaryButton.displayName = "SecondaryButton";

const HeroCTAButtons = memo(() => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <PrimaryButton href="#apps">Get Started</PrimaryButton>
    <SecondaryButton href="#about">Learn More</SecondaryButton>
  </div>
));
HeroCTAButtons.displayName = "HeroCTAButtons";

const HeroContent = memo(() => (
  <div className="flex flex-col items-center text-center">
    <HeroLogo />
    <HeroHeading />
    <HeroDescription />
    <HeroCTAButtons />
  </div>
));
HeroContent.displayName = "HeroContent";

interface LeftPanelProps {
  leftRef: React.RefObject<HTMLDivElement>;
}

const HeroLeftPanel = memo(
  ({ leftRef }: LeftPanelProps) => (
    <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden min-h-[60vh] lg:min-h-screen pt-32 pb-12 lg:pt-40 lg:pb-20">
      {/* Clean white background */}
      <div className="absolute inset-0 bg-white" />
      
      <div
        ref={leftRef}
        className="relative z-20 px-6 sm:px-8 lg:px-12"
      >
        <HeroContent />
      </div>
    </div>
  )
);
HeroLeftPanel.displayName = "HeroLeftPanel";

const HeroRightPanel = memo(() => (
  <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden min-h-[60vh] lg:min-h-screen bg-[#f5f5f7]">
    {/* Subtle gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-[#fafafa] to-[#f5f5f7]" />
    
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <AnimatedVideoBackground />
      </div>
    </div>
  </div>
));
HeroRightPanel.displayName = "HeroRightPanel";

interface ScrollIndicatorProps {
  onClick: () => void;
}

const ScrollIndicator = memo(({ onClick }: ScrollIndicatorProps) => (
  <motion.button
    onClick={onClick}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#86868b] z-30 hover:text-[#1d1d1f] transition-colors"
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    aria-label="Scroll to next section"
  >
    <ChevronDown className="w-6 h-6" />
  </motion.button>
));
ScrollIndicator.displayName = "ScrollIndicator";

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);

  const scrollToNext = useCallback(() => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    globalThis.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-white"
    >
      <HeroLeftPanel leftRef={leftRef} />
      <HeroRightPanel />
      <ScrollIndicator onClick={scrollToNext} />
    </section>
  );
}
