"use client";

import { motion } from "framer-motion";
import { X, Check, Star, Circle } from "lucide-react";
import { 
  DURATION, 
  EASE_EXPO, 
  EASE_IN_OUT, 
  PROBLEM_DELAY 
} from "@/animation-timing";

interface WhyRivioDifferentProps {
  isInView: boolean;
}

const DifferentiatorCard = ({
  title,
  children,
  isInView,
  delay,
  variant = "emerald",
}: Readonly<{
  number: number;
  title: string;
  children: React.ReactNode;
  isInView: boolean;
  delay: number;
  variant?: "emerald" | "gold";
}>) => {
  const isGold = variant === "gold";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: DURATION.MEDIUM, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`p-3 md:p-4 lg:p-6 rounded-2xl md:rounded-3xl border-2 transition-all backdrop-blur-xl relative overflow-hidden group flex flex-col h-full ${
        isGold
          ? "bg-gradient-to-br from-gold-500/20 via-gold-600/15 to-gold-500/20 border-gold-500/50 hover:border-gold-400/70"
          : "bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 border-emerald-500/40 hover:border-emerald-400/60"
      }`}
    >
      {/* Background glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isGold ? "bg-gold-500/10" : "bg-emerald-500/5"
        }`}
      />
      {isGold && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: DURATION.LOOP_SLOW,
            repeat: Infinity,
            ease: EASE_IN_OUT,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-4 min-h-[2rem] md:min-h-[3rem]">
          <h4 className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight">
            {title}
          </h4>
        </div>

        <div className="space-y-2 md:space-y-3 flex-grow">{children}</div>
      </div>
    </motion.div>
  );
};

const ApproachBox = ({
  type,
  children,
  variant = "emerald",
}: Readonly<{
  type: "traditional" | "rivio" | "highlight";
  children: React.ReactNode;
  variant?: "emerald" | "gold";
}>) => {
  if (type === "traditional") {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4 h-auto flex flex-col">
        <div className="flex items-center gap-2 mb-2 flex-shrink-0">
          <X className="w-4 h-4 text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-300 font-semibold">
            Traditional Approach:
          </p>
        </div>
        <div className="flex-grow flex flex-col justify-center overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  if (type === "highlight") {
    return (
      <div className="bg-gold-500/20 border border-gold-500/40 rounded-xl p-4 mb-4 h-auto flex flex-col">
        <div className="flex items-center justify-center gap-2 mb-2 flex-shrink-0">
          <Star className="w-5 h-5 text-gold-300 fill-gold-300 flex-shrink-0" />
          <p className="text-base text-gold-200 font-bold text-center">
            Our Core Differentiator
          </p>
          <Star className="w-5 h-5 text-gold-300 fill-gold-300 flex-shrink-0" />
        </div>
        <div className="flex-grow flex flex-col justify-center overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  const isGold = variant === "gold";
  return (
    <div
      className={`rounded-xl p-4 h-auto flex flex-col ${
        isGold
          ? "bg-gold-500/10 border border-gold-500/30"
          : "bg-emerald-500/10 border border-emerald-500/30"
      }`}
    >
      <div className="flex items-center gap-2 mb-2 flex-shrink-0">
        <Check
          className={`w-4 h-4 flex-shrink-0 ${
            isGold ? "text-gold-400" : "text-emerald-400"
          }`}
        />
        <p
          className={`text-sm font-semibold ${
            isGold ? "text-gold-300" : "text-emerald-300"
          }`}
        >
          {isGold ? "Marketplace Capabilities:" : "RIVIO's Approach:"}
        </p>
      </div>
      <div className="flex-grow flex flex-col justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const VARIANT_COLORS = {
  gold: "text-gold-400",
  red: "text-red-400",
  emerald: "text-emerald-400",
} as const;

const ListItem = ({
  children,
  variant = "emerald",
}: Readonly<{
  children: React.ReactNode;
  variant?: "emerald" | "gold" | "red";
}>) => {
  const colorClass = VARIANT_COLORS[variant];

  return (
    <li className="flex items-start gap-2">
      <Circle
        className={`w-4 h-4 ${colorClass} mt-0.5 flex-shrink-0`}
        fill="currentColor"
      />
      <span>{children}</span>
    </li>
  );
};

export const WhyRivioDifferent = ({ isInView }: WhyRivioDifferentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.SECTION_START, ease: EASE_EXPO }}
      className="mt-10 md:mt-20 relative"
    >
      {/* Background with gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 rounded-3xl blur-xl" />
      <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 rounded-2xl md:rounded-3xl p-4 md:p-10 lg:p-16 text-white border-2 border-emerald-500/30 backdrop-blur-xl overflow-hidden gpu-accelerated shadow-2xl shadow-emerald-500/10">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]" />
        </div>

        <div className="relative z-10">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.HEADING }}
            className="text-center mb-6 md:mb-12"
          >
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">
                RIVIO
              </span>{" "}
              is Different
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
              We&apos;re not just another fitness app. Here&apos;s what makes us
              fundamentally different.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-gold-400 rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Three Key Differentiators */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-12">
            {/* 1. Physical Space Access Platform */}
            <DifferentiatorCard
              number={1}
              title="Physical Space Access Platform"
              isInView={isInView}
              delay={1.4}
            >
              <ApproachBox type="traditional">
                <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                  <ListItem variant="red">
                    Focus on virtual coaching and online workouts
                  </ListItem>
                  <ListItem variant="red">
                    Digital content delivery over physical access
                  </ListItem>
                </ul>
              </ApproachBox>

              <ApproachBox type="rivio">
                <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
                  <ListItem>
                    <strong>Physical space access</strong> to real gyms,
                    studios, and pools
                  </ListItem>
                  <ListItem>
                    <strong>Real-world facilities</strong> - premium equipment
                    and expert trainers
                  </ListItem>
                  <ListItem>
                    <strong>Daily flexibility</strong> - choose your venue and
                    time
                  </ListItem>
                </ul>
              </ApproachBox>
            </DifferentiatorCard>

            {/* 2. Flexible Payment Model */}
            <DifferentiatorCard
              number={2}
              title="Flexible Payment Model"
              isInView={isInView}
              delay={1.5}
            >
              <ApproachBox type="traditional">
                <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                  <ListItem variant="red">
                    Mandatory monthly/annual subscription plans
                  </ListItem>
                  <ListItem variant="red">
                    Locked into single-venue ecosystems
                  </ListItem>
                </ul>
              </ApproachBox>

              <ApproachBox type="rivio">
                <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
                  <ListItem>
                    <strong>Zero commitment</strong> - no long-term contracts
                  </ListItem>
                  <ListItem>
                    <strong>Pay-per-day</strong> - only pay for days you use
                  </ListItem>
                  <ListItem>
                    <strong>Transparent pricing</strong> - see costs upfront
                  </ListItem>
                </ul>
              </ApproachBox>
            </DifferentiatorCard>

            {/* 3. Multi-Venue Marketplace Platform */}
            <DifferentiatorCard
              number={3}
              title="Multi-Venue Marketplace"
              isInView={isInView}
              delay={1.6}
              variant="gold"
            >
              <ApproachBox type="highlight">
                <p className="text-sm text-white leading-relaxed font-medium text-center">
                  RIVIO operates as a true marketplace, connecting users with
                  multiple venues across the entire fitness ecosystem. Access
                  any
                </p>
              </ApproachBox>

              <ApproachBox type="rivio" variant="gold">
                <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
                  <ListItem variant="gold">
                    <strong>Multi-venue access</strong> across all fitness
                    categories
                  </ListItem>
                  <ListItem variant="gold">
                    <strong>Compare pricing</strong>, amenities, and locations
                  </ListItem>
                  <ListItem variant="gold">
                    <strong>Unrestricted freedom</strong> - marketplace without
                    limits
                  </ListItem>
                </ul>
              </ApproachBox>
            </DifferentiatorCard>
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.PARAGRAPH_1 }}
            className="text-center bg-gradient-to-r from-emerald-600/20 to-gold-600/20 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-emerald-500/30 backdrop-blur-sm"
          >
            <p className="text-sm md:text-xl lg:text-2xl text-white leading-relaxed font-medium">
              <strong className="text-emerald-300">
                RIVIO isn&apos;t trying to be everything to everyone.
              </strong>{" "}
              We&apos;re focused on one thing:{" "}
              <strong className="text-gold-300">
                making physical fitness spaces accessible through a true
                marketplace model.
              </strong>{" "}
              No coaching apps. No subscription locks. Just access, choice, and
              freedom.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
