"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type MotionValue,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import AnimatedVideoBackground from "./AnimatedVideoBackground";
import {
  SPRING_SOFT,
  SPRING_DEFAULT,
  EASE_EXPO,
  EASE_SMOOTH,
  EASE_IN_OUT,
  EASE_LINEAR,
  DURATION,
  DELAY,
  TRANSITION_PULSE,
} from "@/animation-timing";

const fadeInUpInitial = { opacity: 0, y: 20 };
const fadeInUpAnimate = { opacity: 1, y: 0 };

const getParticleColor = (index: number): string => {
  if (index % 3 === 0) return "bg-emerald-400/20";
  if (index % 3 === 1) return "bg-gold-400/20";
  return "bg-emerald-300/20";
};

const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  colorClass: getParticleColor(i),
  size: 3 + (i % 2),
  left: (i * 6) % 100,
  top: (i * 5) % 100,
  delay: i * 0.3,
  duration: 5 + (i % 3) * 1.5,
  xOffset: (i % 2 === 0 ? 1 : -1) * 20,
}));

type ParticleConfig = (typeof PARTICLES)[number];

const Particle = memo(({ config }: { config: ParticleConfig }) => (
  <motion.div
    className={`absolute rounded-full ${config.colorClass}`}
    style={{
      width: config.size,
      height: config.size,
      left: `${config.left}%`,
      top: `${config.top}%`,
      willChange: "transform, opacity",
    }}
    animate={{
      y: [0, -100, 0],
      x: [0, config.xOffset, 0],
      opacity: [0.1, 0.4, 0.1],
    }}
    transition={{
      duration: config.duration,
      repeat: Infinity,
      ease: EASE_SMOOTH,
      delay: config.delay,
    }}
  />
));
Particle.displayName = "Particle";

const ParticlesBackground = memo(() => {
  const particles = useMemo(
    () =>
      PARTICLES.map((config) => <Particle key={config.id} config={config} />),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
});
ParticlesBackground.displayName = "ParticlesBackground";

const LogoGlow = memo(() => (
  <motion.div
    className="absolute inset-0 blur-3xl bg-emerald-500/30 rounded-full"
    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: DURATION.LOOP_SLOW, repeat: Infinity, ease: EASE_IN_OUT }}
  />
));
LogoGlow.displayName = "LogoGlow";

const HeroLogo = memo(() => (
  <motion.div
    className="relative z-10 mb-8"
    style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
    transition={{
      duration: DURATION.SLOW,
      delay: DELAY.SHORT,
      ease: EASE_EXPO,
      y: { duration: DURATION.LOOP_FLOAT, repeat: Infinity, ease: EASE_SMOOTH },
    }}
  >
    <LogoGlow />
    <motion.div
      className="relative z-10"
      whileHover={{ scale: 1.1 }}
      transition={SPRING_DEFAULT}
    >
      <Image
        src="/logos/rivio-user-light.png"
        alt="RIVIO Logo"
        width={200}
        height={200}
        className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl brightness-110"
        priority
      />
    </motion.div>
  </motion.div>
));
HeroLogo.displayName = "HeroLogo";

const HeroHeading = memo(() => (
  <motion.h1
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
    style={{
      textShadow:
        "0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.2)",
    }}
    initial={fadeInUpInitial}
    animate={fadeInUpAnimate}
    transition={{ duration: DURATION.MEDIUM, delay: DELAY.MEDIUM, ease: EASE_EXPO }}
  >
    <motion.span
      className="block"
      initial={fadeInUpInitial}
      animate={fadeInUpAnimate}
      transition={{ duration: DURATION.MEDIUM, delay: DELAY.MEDIUM, ease: EASE_EXPO }}
    >
      Revolutionizing Fitness
    </motion.span>
    <motion.span
      className="block mt-2 bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 bg-clip-text text-transparent bg-[length:300%_auto] animate-[gradient_4s_ease_infinite]"
      style={{
        textShadow:
          "0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(212, 175, 55, 0.2)",
        WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.1)",
      }}
      initial={fadeInUpInitial}
      animate={fadeInUpAnimate}
      transition={{ duration: DURATION.MEDIUM, delay: DELAY.MEDIUM_LONG, ease: EASE_EXPO }}
    >
      Access for Everyone
    </motion.span>
  </motion.h1>
));
HeroHeading.displayName = "HeroHeading";

const HeroDescription = memo(() => (
  <motion.p
    className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed font-medium px-4"
    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
    initial={fadeInUpInitial}
    animate={fadeInUpAnimate}
    transition={{ duration: DURATION.MEDIUM, delay: DELAY.LONG, ease: EASE_EXPO }}
  >
    The world's first pay-per-day fitness platform revolutionizing how people
    access gyms, yoga studios, wellness centers, swimming pools, and sports
    facilities. No subscriptions, no long-term commitments—just pay for the days
    you use. Our innovative model eliminates waste for users while maximizing
    revenue for partners, creating a sustainable ecosystem that transforms the
    fitness industry.
  </motion.p>
));
HeroDescription.displayName = "HeroDescription";

const ShimmerEffect = memo(() => (
  <motion.span
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
    animate={{ x: ["-100%", "200%"] }}
    transition={{ duration: DURATION.LOOP_MEDIUM, repeat: Infinity, ease: EASE_LINEAR }}
  />
));
ShimmerEffect.displayName = "ShimmerEffect";

const PrimaryButton = memo(
  ({ href, children }: { href: string; children: React.ReactNode }) => (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 text-white font-bold rounded-full shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/80 transition-shadow text-sm sm:text-base relative overflow-hidden border-2 border-emerald-400/30 w-full sm:w-auto"
    >
      <ShimmerEffect />
      <span className="relative z-10">{children}</span>
    </motion.a>
  )
);
PrimaryButton.displayName = "PrimaryButton";

const SecondaryButton = memo(
  ({ href, children }: { href: string; children: React.ReactNode }) => (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-black/40 border-2 border-emerald-500/60 text-emerald-400 font-bold rounded-full hover:bg-emerald-500/10 hover:border-emerald-400 transition-colors text-sm sm:text-base backdrop-blur-xl shadow-lg shadow-emerald-500/20 w-full sm:w-auto"
    >
      {children}
    </motion.a>
  )
);
SecondaryButton.displayName = "SecondaryButton";

const HeroCTAButtons = memo(() => (
  <motion.div
    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    initial={fadeInUpInitial}
    animate={fadeInUpAnimate}
    transition={{ duration: DURATION.MEDIUM, delay: DELAY.VERY_LONG, ease: EASE_EXPO }}
  >
    <PrimaryButton href="#apps">Explore Platform</PrimaryButton>
    <SecondaryButton href="#contact">Partner With Us</SecondaryButton>
  </motion.div>
));
HeroCTAButtons.displayName = "HeroCTAButtons";

const HeroContent = memo(() => (
  <motion.div
    className="flex flex-col items-center"
    style={{ transformStyle: "preserve-3d" }}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: DURATION.SLOW, ease: EASE_EXPO }}
  >
    <HeroLogo />
    <HeroHeading />
    <HeroDescription />
    <HeroCTAButtons />
  </motion.div>
));
HeroContent.displayName = "HeroContent";

interface LeftPanelProps {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  contentY: MotionValue<number>;
  leftRef: React.RefObject<HTMLDivElement>;
}

const HeroLeftPanel = memo(
  ({ rotateX, rotateY, contentY, leftRef }: LeftPanelProps) => (
    <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black min-h-[50vh] lg:min-h-screen py-24 pb-8 lg:py-32 h-full">
      <ParticlesBackground />
      <motion.div
        ref={leftRef}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0"
        style={{
          rotateX,
          rotateY,
          y: contentY,
          transformStyle: "preserve-3d",
          perspective: 1000,
          willChange: "transform",
        }}
      >
        <HeroContent />
      </motion.div>
    </div>
  )
);
HeroLeftPanel.displayName = "HeroLeftPanel";

const HeroRightPanel = memo(() => (
  <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden bg-black min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen">
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <AnimatedVideoBackground />
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none" />
  </div>
));
HeroRightPanel.displayName = "HeroRightPanel";

interface ScrollIndicatorProps {
  onClick: () => void;
}

const ScrollIndicator = memo(({ onClick }: ScrollIndicatorProps) => (
  <motion.button
    onClick={onClick}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-emerald-400 z-30"
    animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
    transition={TRANSITION_PULSE}
    whileHover={{ scale: 1.2 }}
    aria-label="Scroll to next section"
  >
    <ChevronDown className="w-8 h-8" />
  </motion.button>
));
ScrollIndicator.displayName = "ScrollIndicator";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    SPRING_SOFT
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    SPRING_SOFT
  );

  const scrollToNext = useCallback(() => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    globalThis.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = leftRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
      }
    };

    globalThis.addEventListener("mousemove", handleMouseMove);
    return () => globalThis.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-black"
    >
      <HeroLeftPanel
        rotateX={rotateX}
        rotateY={rotateY}
        contentY={contentY}
        leftRef={leftRef}
      />
      <HeroRightPanel />
      <ScrollIndicator onClick={scrollToNext} />
    </section>
  );
}
