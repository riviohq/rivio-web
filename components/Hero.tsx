'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronDown, Activity, Leaf, Target, Zap, Droplet, Trophy } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 20)
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 20)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 15 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 15 })

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden py-20"
      ref={ref}
    >
      {/* Optimized Animated Cloud-like Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced floating orbs for better performance */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl gpu-accelerated ${
              i % 3 === 0 ? 'bg-emerald-500' : i % 3 === 1 ? 'bg-gold-500' : 'bg-emerald-400'
            }`}
            style={{
              width: `${400 + i * 100}px`,
              height: `${400 + i * 100}px`,
              left: `${10 + i * 25}%`,
              top: `${10 + i * 20}%`,
              opacity: 0.12 + (i % 3) * 0.03,
              willChange: 'transform',
            }}
            animate={{
              x: [0, 120, -60, 0],
              y: [0, 80, -40, 0],
              scale: [1, 1.3, 0.9, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: i * 1.2,
            }}
          />
        ))}
        
        {/* Reduced particles for smoother performance */}
        {[...Array(12)].map((_, i) => {
          const delay = i * 0.3
          const duration = 5 + (i % 3) * 1.5
          return (
            <motion.div
              key={`particle-${i}`}
              className={`absolute rounded-full gpu-accelerated ${
                i % 3 === 0 ? 'bg-emerald-400' : i % 3 === 1 ? 'bg-gold-400' : 'bg-emerald-300'
              }`}
              style={{
                width: `${4 + (i % 2)}px`,
                height: `${4 + (i % 2)}px`,
                left: `${(i * 8.33) % 100}%`,
                top: `${(i * 7.5) % 100}%`,
                boxShadow: `0 0 ${8 + (i % 3) * 2}px ${i % 3 === 0 ? 'rgba(16, 185, 129, 0.5)' : 'rgba(212, 175, 55, 0.5)'}`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, (i % 2 === 0 ? 1 : -1) * 30, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
                delay,
              }}
            />
          )
        })}

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Revolving Sports Icons Around Logo - Continuous Fast Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main orbit container - rotates continuously around center - FASTER */}
          <motion.div
            className="absolute"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20, // Slower: 20 seconds
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Sports activity icons positioned in circle, revolving around center */}
            {[
              { Icon: Activity, label: 'Gym', color: 'emerald', initialAngle: 0 },
              { Icon: Leaf, label: 'Yoga', color: 'emerald', initialAngle: 60 },
              { Icon: Target, label: 'Cricket', color: 'gold', initialAngle: 120 },
              { Icon: Zap, label: 'Tennis', color: 'emerald', initialAngle: 180 },
              { Icon: Droplet, label: 'Swim', color: 'emerald', initialAngle: 240 },
              { Icon: Trophy, label: 'Sports', color: 'gold', initialAngle: 300 },
            ].map(({ Icon, label, color, initialAngle }, index) => {
              const radius = 380 // Increased radius more to avoid overlapping with logo
              
              return (
                <motion.div
                  key={label}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl border-2 ${
                    color === 'emerald'
                      ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                      : 'bg-gold-500/20 border-gold-400/40 text-gold-300'
                  } shadow-2xl gpu-accelerated`}
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-32px',
                    marginTop: '-32px',
                    transformOrigin: 'center center',
                    willChange: 'transform',
                    boxShadow: `0 0 30px ${color === 'emerald' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(212, 175, 55, 0.4)'}`,
                  }}
                  animate={{
                    x: [
                      Math.cos((initialAngle * Math.PI) / 180) * radius,
                      Math.cos(((initialAngle + 360) * Math.PI) / 180) * radius,
                    ],
                    y: [
                      Math.sin((initialAngle * Math.PI) / 180) * radius,
                      Math.sin(((initialAngle + 360) * Math.PI) / 180) * radius,
                    ],
                    scale: [1, 1.15, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    x: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    y: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    scale: {
                      duration: 2.5 + index * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    opacity: {
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <Icon className="w-8 h-8 relative z-10" />
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full blur-xl ${
                      color === 'emerald' ? 'bg-emerald-400' : 'bg-gold-400'
                    }`}
                    animate={{
                      opacity: [0, 0.6, 0],
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 2.5 + index * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              )
            })}
          </motion.div>
          
          {/* Secondary orbit - smaller icons, reverse direction - FASTER */}
          <motion.div
            className="absolute"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25, // Slower: 25 seconds
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[
              { Icon: Activity, color: 'emerald', initialAngle: 30, radius: 420 },
              { Icon: Leaf, color: 'emerald', initialAngle: 90, radius: 420 },
              { Icon: Trophy, color: 'gold', initialAngle: 210, radius: 420 },
              { Icon: Droplet, color: 'emerald', initialAngle: 270, radius: 420 },
            ].map(({ Icon, color, initialAngle, radius }, index) => {
              return (
                <motion.div
                  key={`secondary-${initialAngle}`}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl border ${
                    color === 'emerald'
                      ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300/70'
                      : 'bg-gold-500/15 border-gold-400/30 text-gold-300/70'
                  } shadow-xl gpu-accelerated`}
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-24px',
                    marginTop: '-24px',
                    transformOrigin: 'center center',
                    willChange: 'transform',
                    boxShadow: `0 0 20px ${color === 'emerald' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(212, 175, 55, 0.3)'}`,
                  }}
                  animate={{
                    x: [
                      Math.cos((initialAngle * Math.PI) / 180) * radius,
                      Math.cos(((initialAngle - 360) * Math.PI) / 180) * radius,
                    ],
                    y: [
                      Math.sin((initialAngle * Math.PI) / 180) * radius,
                      Math.sin(((initialAngle - 360) * Math.PI) / 180) * radius,
                    ],
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    x: {
                      duration: 25,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    y: {
                      duration: 25,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    scale: {
                      duration: 2.5 + index * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    opacity: {
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <Icon className="w-6 h-6 relative z-10" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Content with optimized 3D effect */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto perspective-1000 gpu-accelerated"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center transform-3d gpu-accelerated"
        >
          {/* Enhanced Logo with 3D floating effect and glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
              y: {
                duration: 5,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
              }
            }}
            className="mb-8 relative gpu-accelerated"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 blur-3xl bg-emerald-500/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative z-10 gpu-accelerated"
            >
              <Image
                src="/logos/rivio-user-light.png"
                alt="RIVIO Logo"
                width={200}
                height={200}
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl filter brightness-110"
                priority
              />
            </motion.div>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              textShadow: `
                0 0 20px rgba(16, 185, 129, 0.5),
                0 0 40px rgba(16, 185, 129, 0.3),
                0 0 60px rgba(16, 185, 129, 0.2),
                0 0 80px rgba(16, 185, 129, 0.1)
              `,
              letterSpacing: '-0.02em',
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block gpu-accelerated"
            >
              Universal Fitness
            </motion.span>
            <br />
            <motion.span 
              className="block bg-gradient-to-r from-emerald-400 via-gold-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent bg-[length:300%_auto] animate-[gradient_4s_ease_infinite] relative z-20 gpu-accelerated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                textShadow: '0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(212, 175, 55, 0.2)',
                WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.1)',
                willChange: 'transform, opacity',
              }}
            >
              Access Platform
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-medium gpu-accelerated"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              willChange: 'transform, opacity',
            }}
          >
            Pay-per-day fitness access. No multiple subscriptions. Access any gym, yoga studio, or wellness center instantly.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center gpu-accelerated"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.a
              href="#apps"
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 text-white font-bold rounded-full shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/80 transition-all text-lg relative overflow-hidden group border-2 border-emerald-400/30"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.span
                className="absolute inset-0 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10">
                Explore Apps
              </span>
            </motion.a>
            <motion.a
              href="#cities"
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-black/40 border-2 border-emerald-500/60 text-emerald-400 font-bold rounded-full hover:bg-emerald-500/10 hover:border-emerald-400 transition-all text-lg backdrop-blur-xl relative overflow-hidden group shadow-lg shadow-emerald-500/20"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              />
              <motion.span
                className="absolute inset-0 border-2 border-emerald-400/30 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10">
                Find Venues
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with 3D effect */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-emerald-400"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
}

