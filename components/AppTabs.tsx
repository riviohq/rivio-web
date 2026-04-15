"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Download,
  MapPin,
  QrCode,
  Star,
  CheckCircle,
  TrendingUp,
  CreditCard,
  Activity,
  BarChart3,
  Settings,
  Building2,
  DollarSign,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  APP_STORE_URL_BUSINESS,
  APP_STORE_URL_USER,
  GOOGLE_PLAY_URL_BUSINESS,
  GOOGLE_PLAY_URL_USER,
  hasGooglePlayBusiness,
  hasGooglePlayUser,
} from "@/lib/storeUrls";

// User App Steps
const userSteps = [
  {
    icon: MapPin,
    title: "Find",
    subtitle: "Discover nearby venues",
    description: "Gyms, studios, and pools near you",
    color: "emerald",
  },
  {
    icon: Activity,
    title: "Choose",
    subtitle: "Pick your activity",
    description: "Gym, Yoga, Swimming, Sports",
    color: "blue",
  },
  {
    icon: Star,
    title: "Compare",
    subtitle: "Check amenities",
    description: "AC, WiFi, Parking, Showers",
    color: "purple",
  },
  {
    icon: QrCode,
    title: "Scan",
    subtitle: "Walk in & check-in",
    description: "Quick QR entry",
    color: "emerald",
  },
  {
    icon: CreditCard,
    title: "Pay",
    subtitle: "Only for today",
    description: "No contracts ever",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Track",
    subtitle: "Build your streak",
    description: "Earn rewards",
    color: "purple",
  },
];

// Business App Steps
const businessSteps = [
  {
    icon: Building2,
    title: "Register",
    subtitle: "Onboard your venue",
    description: "Quick setup process",
    color: "amber",
  },
  {
    icon: QrCode,
    title: "Generate",
    subtitle: "Get QR codes",
    description: "Unique codes per location",
    color: "orange",
  },
  {
    icon: Users,
    title: "Welcome",
    subtitle: "Real-time check-ins",
    description: "Monitor live entries",
    color: "amber",
  },
  {
    icon: DollarSign,
    title: "Earn",
    subtitle: "Dual revenue streams",
    description: "Maximize earnings",
    color: "orange",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    subtitle: "Advanced analytics",
    description: "Data-driven insights",
    color: "amber",
  },
  {
    icon: Settings,
    title: "Manage",
    subtitle: "Multi-location control",
    description: "One dashboard",
    color: "orange",
  },
];

// Color configurations
const colorConfig = {
  emerald: { bg: "bg-emerald-500", light: "bg-emerald-50", text: "text-emerald-600", glow: "rgba(16, 185, 129, 0.3)" },
  blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", glow: "rgba(59, 130, 246, 0.3)" },
  purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", glow: "rgba(147, 51, 234, 0.3)" },
  amber: { bg: "bg-amber-500", light: "bg-amber-50", text: "text-amber-600", glow: "rgba(245, 158, 11, 0.3)" },
  orange: { bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", glow: "rgba(249, 115, 22, 0.3)" },
};

// Animated Journey Display Component
const JourneyDisplay = ({ 
  steps, 
  currentStep, 
  accentColor 
}: { 
  steps: typeof userSteps; 
  currentStep: number;
  accentColor: "emerald" | "amber";
}) => {
  const step = steps[currentStep];
  const Icon = step.icon;
  const colors = colorConfig[step.color as keyof typeof colorConfig];

  return (
    <div className="relative h-[320px] md:h-[380px] flex flex-col items-center justify-center">
      {/* Floating background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-32 h-32 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(245, 158, 11, 0.4)'} 0%, transparent 70%)`,
            top: "10%",
            right: "10%",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${accentColor === 'emerald' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(249, 115, 22, 0.4)'} 0%, transparent 70%)`,
            bottom: "15%",
            left: "15%",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Main Icon */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className={`${colors.bg} w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-6`}
          style={{ boxShadow: `0 15px 40px ${colors.glow}` }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-2 tracking-[-0.02em]">
            {step.title}
          </h3>
          <p className={`text-base md:text-lg font-medium ${colors.text} mb-1`}>
            {step.subtitle}
          </p>
          <p className="text-sm text-[#86868b]">
            {step.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Step Indicators */}
      <div className="flex items-center gap-2 mt-8">
        {steps.map((s, index) => {
          const stepColors = colorConfig[s.color as keyof typeof colorConfig];
          return (
            <motion.div
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === currentStep ? `w-6 h-2 ${stepColors.bg}` : 'w-2 h-2 bg-gray-300'
              }`}
            />
          );
        })}
      </div>

      {/* Bottom Step Flow */}
      <div className="flex items-center gap-1 mt-6">
        {steps.map((s, index) => {
          const StepIcon = s.icon;
          const isActive = index === currentStep;
          const isPast = index < currentStep;
          const stepColors = colorConfig[s.color as keyof typeof colorConfig];
          
          return (
            <div key={index} className="flex items-center">
              <motion.div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isActive ? stepColors.bg : isPast ? stepColors.light : 'bg-gray-100'
                }`}
                animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <StepIcon className={`w-4 h-4 ${isActive ? 'text-white' : isPast ? stepColors.text : 'text-gray-400'}`} />
              </motion.div>
              {index < steps.length - 1 && (
                <ArrowRight className={`w-3 h-3 mx-0.5 ${isPast ? stepColors.text : 'text-gray-300'}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function AppTabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const [userStep, setUserStep] = useState(0);
  const [businessStep, setBusinessStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const userInterval = setInterval(() => {
      setUserStep((prev) => (prev + 1) % userSteps.length);
    }, 3500);

    const businessInterval = setInterval(() => {
      setBusinessStep((prev) => (prev + 1) % businessSteps.length);
    }, 3800);

    return () => {
      clearInterval(userInterval);
      clearInterval(businessInterval);
    };
  }, [isInView]);

  return (
    <section
      id="apps"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-wider bg-emerald-50 px-4 py-2 rounded-full mb-4">
            Our Apps
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-4 tracking-[-0.02em]">
            Two Apps. One Ecosystem.
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto">
            Designed for fitness enthusiasts and business owners alike — now on the App Store.{" "}
            <Link
              href="/download/"
              className="text-emerald-600 font-medium hover:text-emerald-700 underline-offset-2 hover:underline"
            >
              All download links
            </Link>
          </p>
        </motion.div>

        {/* Both Apps Side by Side */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* User App */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#f5f5f7] rounded-3xl p-6 md:p-8 lg:p-10 h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png"
                  alt="RIVIO User App Logo"
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f]">
                    RIVIO User
                  </h3>
                  <p className="text-emerald-500 font-medium text-sm">
                    For Fitness Enthusiasts
                  </p>
                </div>
              </div>

              {/* Animated Journey */}
              <JourneyDisplay 
                steps={userSteps} 
                currentStep={userStep}
                accentColor="emerald"
              />

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  href={APP_STORE_URL_USER}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full font-medium text-sm hover:bg-black transition-all"
                >
                  <Download className="w-4 h-4" />
                  App Store
                </motion.a>
                {hasGooglePlayUser ? (
                  <motion.a
                    href={GOOGLE_PLAY_URL_USER}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1d1d1f] rounded-full font-medium text-sm hover:bg-gray-50 transition-all border border-gray-200"
                  >
                    <Download className="w-4 h-4" />
                    Google Play
                  </motion.a>
                ) : null}
              </div>
            </div>
          </motion.div>

          {/* Business App */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#f5f5f7] rounded-3xl p-6 md:p-8 lg:p-10 h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio_business.png"
                  alt="RIVIO Business Logo"
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f]">
                    RIVIO Business
                  </h3>
                  <p className="text-amber-500 font-medium text-sm">
                    For Fitness Businesses
                  </p>
                </div>
              </div>

              {/* Animated Journey */}
              <JourneyDisplay 
                steps={businessSteps} 
                currentStep={businessStep}
                accentColor="amber"
              />

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  href={APP_STORE_URL_BUSINESS}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full font-medium text-sm hover:bg-black transition-all"
                >
                  <Download className="w-4 h-4" />
                  App Store
                </motion.a>
                {hasGooglePlayBusiness ? (
                  <motion.a
                    href={GOOGLE_PLAY_URL_BUSINESS}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1d1d1f] rounded-full font-medium text-sm hover:bg-gray-50 transition-all border border-gray-200"
                  >
                    <Download className="w-4 h-4" />
                    Google Play
                  </motion.a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
