"use client";

import { motion } from "framer-motion";
import { 
  MapPin,
  Wallet,
  Repeat,
  Sparkles,
  QrCode,
  Clock,
  Ban,
  CheckCircle2,
} from "lucide-react";
import { 
  DURATION, 
  EASE_EXPO, 
  PROBLEM_DELAY 
} from "@/animation-timing";

interface WhyRivioDifferentProps {
  isInView: boolean;
}

const DIFFERENTIATORS = [
  {
    icon: MapPin,
    number: "01",
    title: "Work Out Anywhere",
    tagline: "Your membership travels with you",
    description: "Moved to a new city? Traveling for work? On vacation? Access any partner gym instantly. One app works everywhere, with no new memberships needed.",
    benefits: [
      "Same app works in Delhi, Mumbai, Bangalore & more",
      "No need to research gyms in new cities",
      "Instant access, no paperwork or waiting",
      "Perfect for frequent travelers & remote workers",
    ],
    highlight: "Fast-growing network across major cities",
    color: "emerald",
  },
  {
    icon: Wallet,
    number: "02", 
    title: "Pay Per Day",
    tagline: "Only pay when you actually go",
    description: "No annual contracts. No monthly fees draining your account. Visit a gym, pay for that day only. Skip a week? Pay nothing. It's that simple.",
    benefits: [
      "Busy month? Pay less. Active month? Worth every rupee",
      "No guilt when life gets in the way",
      "Prices shown upfront, no surprises",
      "Compare rates across gyms before you go",
    ],
    highlight: "Zero wasted money on unused days",
    color: "blue",
  },
  {
    icon: Repeat,
    number: "03",
    title: "Try Everything",
    tagline: "Gym, yoga, swimming, sports, all in one app",
    description: "Want to hit the gym Monday, swim Tuesday, and do yoga on weekends? No need for 3 different memberships. One app, endless possibilities.",
    benefits: [
      "Gym, swimming pool, yoga studio, CrossFit box",
      "Zumba classes, martial arts, sports facilities",
      "Try new activities without commitment",
      "Find what you love, skip what you don't",
    ],
    highlight: "Access gyms, pools, studios & sports facilities",
    color: "purple",
  },
];

const HOW_IT_WORKS = [
  { number: "1", icon: MapPin, title: "Find", text: "Discover nearby venues" },
  { number: "2", icon: QrCode, title: "Scan", text: "Scan QR & check-in" },
  { number: "3", icon: CheckCircle2, title: "Mark Visit", text: "Confirm your entry" },
  { number: "4", icon: Wallet, title: "Pay", text: "Pay for that day only" },
  { number: "5", icon: Clock, title: "Train", text: "Enjoy your workout" },
];

const DifferentiatorCard = ({
  item,
  index,
  isInView,
}: {
  item: typeof DIFFERENTIATORS[0];
  index: number;
  isInView: boolean;
}) => {
  const Icon = item.icon;
  const colorClasses = {
    emerald: {
      gradient: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      highlight: "bg-emerald-500",
      dot: "bg-emerald-400",
    },
    blue: {
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      highlight: "bg-blue-500",
      dot: "bg-blue-400",
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      highlight: "bg-purple-500",
      dot: "bg-purple-400",
    },
  };
  const colors = colorClasses[item.color as keyof typeof colorClasses];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group h-full flex flex-col"
    >
      {/* Number Badge */}
      <div className="absolute top-6 right-6 text-6xl md:text-7xl font-bold text-gray-100 select-none">
        {item.number}
      </div>

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-5 shadow-lg flex-shrink-0`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Title Section - Fixed Height */}
        <div className="mb-4">
          <h4 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-2">
            {item.title}
          </h4>
          <p className={`text-sm font-semibold ${colors.text}`}>
            {item.tagline}
          </p>
        </div>
        
        {/* Description - Fixed Height */}
        <p className="text-[#86868b] leading-relaxed mb-5 min-h-[72px]">
          {item.description}
        </p>

        {/* Benefits List - Flex Grow to Fill Space */}
        <div className={`${colors.bg} rounded-2xl p-4 mb-5 border ${colors.border} flex-grow`}>
          <ul className="space-y-2">
            {item.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full mt-2 flex-shrink-0`} />
                <span className="text-sm text-[#1d1d1f] leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Highlight Badge - Always at Bottom */}
        <div className="mt-auto">
          <div className={`inline-flex items-center gap-2 bg-[#1d1d1f] rounded-full px-4 py-2`}>
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              {item.highlight}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const WhyRivioDifferent = ({ isInView }: WhyRivioDifferentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.SECTION_START, ease: EASE_EXPO }}
      className="mt-16 md:mt-24"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-wider bg-emerald-50 px-4 py-2 rounded-full mb-4">
          The RIVIO Difference
        </span>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-4">
          Why We&apos;re Different
        </h3>
        <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto">
          Not another fitness app with workout videos. We give you real access to real gyms.
        </p>
      </motion.div>

      {/* Differentiator Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 items-stretch">
        {DIFFERENTIATORS.map((item, index) => (
          <DifferentiatorCard
            key={item.title}
            item={item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>

      {/* How It Works - Symmetric Steps */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-white rounded-3xl p-8 md:p-12 mb-12 md:mb-16 border border-gray-100 shadow-sm"
      >
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-wider bg-emerald-50 px-4 py-2 rounded-full mb-4">
            How It Works
          </span>
          <h4 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f]">
            5 Simple Steps
          </h4>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {HOW_IT_WORKS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              {/* Step Number */}
              <div className="relative mx-auto mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto border-2 border-emerald-100">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              
              {/* Step Title */}
              <h5 className="text-lg md:text-xl font-bold text-[#1d1d1f] mb-1">
                {step.title}
              </h5>
              
              {/* Step Description */}
              <p className="text-sm text-[#86868b]">
                {step.text}
              </p>
              
              {/* Arrow (except last) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <span className="text-gray-300 text-2xl">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Connection Line - Desktop Only */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-0 left-[10%] right-[10%] h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 rounded-full" />
          <div className="flex justify-between px-[8%]">
            {HOW_IT_WORKS.map((_, index) => (
              <div key={index} className="w-3 h-3 bg-emerald-500 rounded-full -mt-1 shadow-md" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Summary - Premium Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative overflow-hidden"
      >
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 lg:p-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">The Bottom Line</span>
            </motion.div>

            <h4 className="text-2xl md:text-4xl font-semibold mb-6 tracking-[-0.02em]">
              Fitness Without the Fine Print
            </h4>

            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Traditional gyms want your money whether you show up or not. 
              <span className="font-semibold text-white"> We only earn when you work out.</span> That&apos;s why 
              we&apos;re motivated to make fitness accessible, affordable, and flexible.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                "No Joining Fees",
                "No Annual Contracts", 
                "No Hidden Charges",
                "No Guilt",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
