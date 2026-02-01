"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  QrCode,
  CreditCard,
  Zap,
  Activity,
  Waves,
  Leaf,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { memo, useEffect, useState } from "react";

// ============================================================================
// Journey Steps
// ============================================================================
const journeySteps = [
  {
    id: 1,
    title: "Find",
    subtitle: "Discover venues near you",
    description: "500+ gyms, studios, and pools",
    icon: MapPin,
    color: "emerald",
  },
  {
    id: 2,
    title: "Choose",
    subtitle: "Pick your activity",
    description: "Gym, Yoga, Swimming, Sports",
    icon: Activity,
    color: "blue",
  },
  {
    id: 3,
    title: "Compare",
    subtitle: "Check amenities & prices",
    description: "AC, WiFi, Parking, Showers",
    icon: Zap,
    color: "amber",
  },
  {
    id: 4,
    title: "Scan",
    subtitle: "Walk in & check-in",
    description: "Quick QR code entry",
    icon: QrCode,
    color: "purple",
  },
  {
    id: 5,
    title: "Pay",
    subtitle: "Only for today",
    description: "No contracts, ever",
    icon: CreditCard,
    color: "emerald",
  },
  {
    id: 6,
    title: "Train",
    subtitle: "Start your workout",
    description: "You're all set!",
    icon: Target,
    color: "blue",
  },
];

const activities = [
  { icon: Activity, label: "Gym", color: "emerald" },
  { icon: Waves, label: "Swim", color: "blue" },
  { icon: Leaf, label: "Yoga", color: "purple" },
  { icon: Target, label: "Sports", color: "amber" },
];

// ============================================================================
// Background Elements
// ============================================================================
const FloatingOrbs = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large ambient orbs */}
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
        top: "-20%",
        right: "-10%",
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
        bottom: "-15%",
        left: "-5%",
      }}
      animate={{
        scale: [1, 1.15, 1],
        x: [0, -20, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)",
        top: "40%",
        left: "30%",
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
));
FloatingOrbs.displayName = "FloatingOrbs";

// ============================================================================
// Main Journey Card
// ============================================================================
const JourneyCard = memo(({ step, isActive }: { step: typeof journeySteps[0]; isActive: boolean }) => {
  const Icon = step.icon;
  const colorClasses = {
    emerald: {
      bg: "bg-emerald-500",
      light: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
    },
    blue: {
      bg: "bg-blue-500",
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    purple: {
      bg: "bg-purple-500",
      light: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
    },
  };
  const colors = colorClasses[step.color as keyof typeof colorClasses];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.4, 
        y: 0, 
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative ${isActive ? 'z-10' : 'z-0'}`}
    >
      <motion.div
        className={`bg-white rounded-2xl p-5 shadow-sm border transition-all duration-500 ${
          isActive ? 'shadow-xl border-gray-200' : 'border-gray-100'
        }`}
        style={{
          boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.1)' : '0 4px 15px rgba(0,0,0,0.05)',
        }}
        whileHover={{ y: -5 }}
      >
        <div className={`${colors.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">{step.title}</h3>
        <p className={`text-sm font-medium ${colors.text} mb-2`}>{step.subtitle}</p>
        <p className="text-xs text-[#86868b]">{step.description}</p>
        
        {isActive && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: 'linear' }}
            className={`absolute bottom-0 left-0 h-1 ${colors.bg} rounded-b-2xl`}
          />
        )}
      </motion.div>
    </motion.div>
  );
});
JourneyCard.displayName = "JourneyCard";

// ============================================================================
// Center Feature Display
// ============================================================================
const CenterDisplay = memo(({ currentStep }: { currentStep: number }) => {
  const step = journeySteps[currentStep];
  const Icon = step.icon;
  
  const colorClasses = {
    emerald: { bg: "bg-emerald-500", glow: "rgba(16, 185, 129, 0.3)" },
    blue: { bg: "bg-blue-500", glow: "rgba(59, 130, 246, 0.3)" },
    purple: { bg: "bg-purple-500", glow: "rgba(147, 51, 234, 0.3)" },
    amber: { bg: "bg-amber-500", glow: "rgba(245, 158, 11, 0.3)" },
  };
  const colors = colorClasses[step.color as keyof typeof colorClasses];

  return (
    <div className="flex flex-col items-center">
      {/* Main Icon */}
      <motion.div
        key={currentStep}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className={`${colors.bg} w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center mb-8`}
        style={{
          boxShadow: `0 20px 60px ${colors.glow}, 0 10px 30px ${colors.glow}`,
        }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </motion.div>
      </motion.div>

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
          <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] mb-3 tracking-[-0.02em]">
            {step.title}
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] mb-2">
            {step.subtitle}
          </p>
          <p className="text-sm text-[#86868b]">
            {step.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Step Indicators */}
      <div className="flex items-center gap-3 mt-10">
        {journeySteps.map((s, index) => (
          <motion.div
            key={s.id}
            className={`rounded-full transition-all duration-300 ${
              index === currentStep 
                ? `w-8 h-2 ${colorClasses[s.color as keyof typeof colorClasses].bg}` 
                : 'w-2 h-2 bg-gray-300'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
});
CenterDisplay.displayName = "CenterDisplay";

// ============================================================================
// Floating Activity Pills
// ============================================================================
const FloatingActivities = memo(({ currentStep }: { currentStep: number }) => {
  if (currentStep !== 1) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 pointer-events-none"
    >
      {activities.map((activity, index) => {
        const positions = [
          { top: '15%', left: '10%' },
          { top: '20%', right: '15%' },
          { bottom: '25%', left: '15%' },
          { bottom: '20%', right: '10%' },
        ];
        const colorClasses = {
          emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
          blue: "bg-blue-50 text-blue-600 border-blue-200",
          purple: "bg-purple-50 text-purple-600 border-purple-200",
          amber: "bg-amber-50 text-amber-600 border-amber-200",
        };
        
        return (
          <motion.div
            key={activity.label}
            className={`absolute flex items-center gap-2 px-4 py-2 rounded-full border shadow-lg ${colorClasses[activity.color as keyof typeof colorClasses]}`}
            style={positions[index]}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{ 
              delay: 0.2 + index * 0.15,
              y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <activity.icon className="w-4 h-4" />
            <span className="text-sm font-semibold">{activity.label}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
});
FloatingActivities.displayName = "FloatingActivities";

// ============================================================================
// Floating Amenities
// ============================================================================
const FloatingAmenities = memo(({ currentStep }: { currentStep: number }) => {
  if (currentStep !== 2) return null;
  
  const amenities = [
    { name: "AC", color: "blue" },
    { name: "WiFi", color: "purple" },
    { name: "Parking", color: "emerald" },
    { name: "Showers", color: "blue" },
    { name: "Lockers", color: "amber" },
    { name: "Trainer", color: "emerald" },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 pointer-events-none flex items-center justify-center"
    >
      <div className="absolute flex flex-wrap gap-3 max-w-[400px] justify-center" style={{ top: '20%' }}>
        {amenities.slice(0, 3).map((amenity, index) => {
          const colorClasses = {
            emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
            blue: "bg-blue-50 text-blue-600 border-blue-200",
            purple: "bg-purple-50 text-purple-600 border-purple-200",
            amber: "bg-amber-50 text-amber-600 border-amber-200",
          };
          return (
            <motion.div
              key={amenity.name}
              className={`px-4 py-2 rounded-full border shadow-lg font-semibold text-sm ${colorClasses[amenity.color as keyof typeof colorClasses]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              ✓ {amenity.name}
            </motion.div>
          );
        })}
      </div>
      <div className="absolute flex flex-wrap gap-3 max-w-[400px] justify-center" style={{ bottom: '20%' }}>
        {amenities.slice(3).map((amenity, index) => {
          const colorClasses = {
            emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
            blue: "bg-blue-50 text-blue-600 border-blue-200",
            purple: "bg-purple-50 text-purple-600 border-purple-200",
            amber: "bg-amber-50 text-amber-600 border-amber-200",
          };
          return (
            <motion.div
              key={amenity.name}
              className={`px-4 py-2 rounded-full border shadow-lg font-semibold text-sm ${colorClasses[amenity.color as keyof typeof colorClasses]}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              ✓ {amenity.name}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
});
FloatingAmenities.displayName = "FloatingAmenities";

// ============================================================================
// Floating Price Tag
// ============================================================================
const FloatingPrice = memo(({ currentStep }: { currentStep: number }) => {
  if (currentStep !== 4) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="absolute top-1/2 right-[15%] -translate-y-1/2"
    >
      <motion.div
        className="bg-white rounded-2xl px-6 py-4 shadow-2xl border border-gray-100"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
      >
        <p className="text-xs text-[#86868b] mb-1">Starting from</p>
        <p className="text-3xl font-bold text-[#1d1d1f]">₹99<span className="text-sm font-normal text-[#86868b]">/day</span></p>
        <div className="flex items-center gap-1 mt-2 text-emerald-500">
          <CheckCircle2 className="w-3 h-3" />
          <span className="text-xs font-medium">No hidden fees</span>
        </div>
      </motion.div>
    </motion.div>
  );
});
FloatingPrice.displayName = "FloatingPrice";

// ============================================================================
// Floating Venues
// ============================================================================
const FloatingVenues = memo(({ currentStep }: { currentStep: number }) => {
  if (currentStep !== 0) return null;
  
  const venues = [
    { name: "Elite Gym", distance: "200m", rating: "4.8" },
    { name: "Zen Yoga", distance: "350m", rating: "4.9" },
    { name: "AquaFit", distance: "500m", rating: "4.7" },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-1/2 left-[10%] -translate-y-1/2 hidden lg:block"
    >
      <div className="space-y-3">
        {venues.map((venue, index) => (
          <motion.div
            key={venue.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
            className="bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-3"
            style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
          >
            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f]">{venue.name}</p>
              <p className="text-xs text-[#86868b]">{venue.distance} • ⭐ {venue.rating}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});
FloatingVenues.displayName = "FloatingVenues";

// ============================================================================
// Floating Success
// ============================================================================
const FloatingSuccess = memo(({ currentStep }: { currentStep: number }) => {
  if (currentStep !== 5) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 pointer-events-none"
    >
      {/* Confetti-like elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 rounded-full ${
            i % 4 === 0 ? 'bg-emerald-400' : 
            i % 4 === 1 ? 'bg-blue-400' : 
            i % 4 === 2 ? 'bg-purple-400' : 'bg-amber-400'
          }`}
          style={{
            left: `${15 + (i * 6)}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.5, 0],
            y: [50, -30, -100],
          }}
          transition={{ 
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
      
      {/* Success badges */}
      <motion.div
        className="absolute left-[10%] top-1/3 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-sm font-bold text-[#1d1d1f]">🔥 3 Day Streak!</p>
        <p className="text-xs text-[#86868b]">Keep it going</p>
      </motion.div>
      
      <motion.div
        className="absolute right-[10%] top-1/4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm font-bold text-emerald-500">+50 Points</p>
        <p className="text-xs text-[#86868b]">Workout complete</p>
      </motion.div>
    </motion.div>
  );
});
FloatingSuccess.displayName = "FloatingSuccess";

// ============================================================================
// Bottom Journey Flow
// ============================================================================
const JourneyFlow = memo(({ currentStep }: { currentStep: number }) => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2">
    {journeySteps.map((step, index) => {
      const Icon = step.icon;
      const isActive = index === currentStep;
      const isPast = index < currentStep;
      
      return (
        <div key={step.id} className="flex items-center">
          <motion.div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isActive 
                ? 'bg-emerald-500 shadow-lg' 
                : isPast 
                  ? 'bg-emerald-100' 
                  : 'bg-gray-100'
            }`}
            animate={isActive ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-white' : isPast ? 'text-emerald-500' : 'text-gray-400'}`} />
          </motion.div>
          {index < journeySteps.length - 1 && (
            <div className="flex items-center mx-2">
              <motion.div
                className={`h-0.5 w-8 transition-all duration-500 ${isPast ? 'bg-emerald-500' : 'bg-gray-200'}`}
              />
              <ArrowRight className={`w-4 h-4 ${isPast ? 'text-emerald-500' : 'text-gray-300'}`} />
            </div>
          )}
        </div>
      );
    })}
  </div>
));
JourneyFlow.displayName = "JourneyFlow";

// ============================================================================
// Main Component
// ============================================================================
export default function AnimatedVideoBackground() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#fafafa]">
      <FloatingOrbs />
      
      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <CenterDisplay currentStep={currentStep} />
      </div>

      {/* Contextual Floating Elements */}
      <AnimatePresence>
        <FloatingVenues currentStep={currentStep} />
      </AnimatePresence>
      <AnimatePresence>
        <FloatingActivities currentStep={currentStep} />
      </AnimatePresence>
      <AnimatePresence>
        <FloatingAmenities currentStep={currentStep} />
      </AnimatePresence>
      <AnimatePresence>
        <FloatingPrice currentStep={currentStep} />
      </AnimatePresence>
      <AnimatePresence>
        <FloatingSuccess currentStep={currentStep} />
      </AnimatePresence>

      {/* Bottom Journey Flow */}
      <JourneyFlow currentStep={currentStep} />
    </div>
  );
}
