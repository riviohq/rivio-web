"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { 
  DURATION, 
  EASE_EXPO, 
  EASE_IN_OUT, 
  EASE_LINEAR,
  PROBLEM_DELAY,
  TRANSITION_ORB,
  TRANSITION_ROTATE
} from "@/animation-timing";

interface ProblemStatementProps {
  isInView: boolean;
}

const PARTICLES_CONFIG = Array.from({ length: 20 }, (_, i) => ({
  id: `particle-${i}`,
  left: `${(i * 5) % 100}%`,
  top: `${(i * 7) % 100}%`,
  duration: 4 + i * 0.2,
  delay: i * 0.15,
}));

const STATISTICS = [
  {
    value: "67%",
    description:
      "of gym memberships go completely unused, representing billions in wasted consumer spending annually",
    variant: "emerald" as const,
    delay: PROBLEM_DELAY.STAT_1,
  },
  {
    value: "$50B+",
    description:
      "wasted globally each year on unused fitness memberships and underutilized facilities",
    variant: "gold" as const,
    delay: PROBLEM_DELAY.STAT_2,
  },
  {
    value: "45%",
    description:
      "average facility utilization rate, leaving massive revenue potential untapped",
    variant: "emerald" as const,
    delay: PROBLEM_DELAY.STAT_3,
  },
];

const StatCard = ({
  stat,
  isInView,
}: Readonly<{
  stat: (typeof STATISTICS)[0];
  isInView: boolean;
}>) => {
  const isGold = stat.variant === "gold";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: DURATION.NORMAL, delay: stat.delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 lg:p-6 border-2 transition-all shadow-xl relative overflow-hidden group ${
        isGold
          ? "bg-gradient-to-br from-gold-600/30 via-gold-700/20 to-gold-800/30 border-gold-400/40 hover:border-gold-300/60 shadow-gold-500/20"
          : "bg-gradient-to-br from-emerald-600/30 via-emerald-700/20 to-emerald-800/30 border-emerald-400/40 hover:border-emerald-300/60 shadow-emerald-500/20"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isGold ? "from-gold-500/10" : "from-emerald-500/10"
        }`}
      />
      <div className="relative z-10">
        <div
          className={`text-2xl md:text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent mb-2 md:mb-3 ${
            isGold
              ? "bg-gradient-to-r from-gold-300 to-gold-100"
              : "bg-gradient-to-r from-emerald-300 to-emerald-100"
          }`}
        >
          {stat.value}
        </div>
        <div className="text-xs md:text-sm lg:text-base text-white/95 leading-relaxed font-medium">
          {stat.description}
        </div>
      </div>
    </motion.div>
  );
};

export const ProblemStatement = ({ isInView }: ProblemStatementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.SECTION_START, ease: EASE_EXPO }}
      className="mt-10 md:mt-20 relative"
    >
      {/* Enhanced Background with Multiple Gradient Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-emerald-700/90 to-emerald-800/90 rounded-3xl blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-gold-600/20 via-transparent to-emerald-600/20 rounded-3xl blur-xl" />
      <div className="relative bg-gradient-to-br from-emerald-600/95 via-emerald-700/95 to-emerald-800/95 rounded-2xl md:rounded-3xl p-4 md:p-10 lg:p-16 text-white border-2 border-emerald-400/50 backdrop-blur-xl overflow-hidden gpu-accelerated shadow-2xl shadow-emerald-500/30">
        {/* Animated background pattern - Enhanced */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            style={{ left: "-10%", top: "-10%" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={TRANSITION_ORB}
          />
          <motion.div
            className="absolute w-96 h-96 bg-gold-500/15 rounded-full blur-3xl"
            style={{ right: "-10%", bottom: "-10%" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: DURATION.LOOP_ORB + 2,
              repeat: Infinity,
              ease: EASE_IN_OUT,
              delay: 1,
            }}
          />
        </div>

        {/* Floating particles - Enhanced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES_CONFIG.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10">
          {/* Main Heading - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.HEADING }}
            className="mb-4 md:mb-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.BADGE }}
              className="inline-block mb-4"
            >
              <span className="text-sm md:text-base font-semibold text-emerald-300 uppercase tracking-wider bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-400/30">
                Industry Analysis
              </span>
            </motion.div>
            <h3 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-3 md:mb-6 leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-gold-300 to-emerald-300 bg-clip-text text-transparent animate-gradient">
                $50 Billion
              </span>{" "}
              Problem
              <br />
              <span className="text-emerald-200">We&apos;re Solving</span>
            </h3>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : {}}
              transition={{ duration: DURATION.SLOW, delay: PROBLEM_DELAY.DIVIDER }}
              className="h-1.5 bg-gradient-to-r from-emerald-400 via-gold-400 to-emerald-400 rounded-full mx-auto shadow-lg shadow-emerald-500/50"
            />
          </motion.div>

          {/* Statistics Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
            {STATISTICS.map((stat) => (
              <StatCard key={stat.value} stat={stat} isInView={isInView} />
            ))}
          </div>

          {/* Problem Description - Enhanced */}
          <div className="space-y-2 md:space-y-4 mb-3 md:mb-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.PARAGRAPH_1 }}
              className="text-sm md:text-lg lg:text-xl text-white leading-relaxed font-medium"
            >
              After years of research, monitoring industry trends, and analyzing
              consumer behavior, we&apos;ve identified a fundamental flaw in the
              fitness ecosystem.{" "}
              <strong className="text-emerald-300 font-bold bg-emerald-500/20 px-2 py-1 rounded">
                The traditional subscription model forces people into
                commitments they can&apos;t keep.
              </strong>{" "}
              Life happens—work schedules change, priorities shift, motivation
              fluctuates. Yet millions are locked into expensive memberships
              they signed with good intentions but can&apos;t maintain.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.PARAGRAPH_2 }}
              className="text-sm md:text-lg lg:text-xl text-white leading-relaxed font-medium"
            >
              Meanwhile, fitness venues face their own crisis. They invest
              millions in premium equipment, spacious facilities, and expert
              trainers, only to see 55% of their capacity sit empty. High
              customer acquisition costs, low retention rates, and unpredictable
              revenue streams make it nearly impossible to sustain growth.{" "}
              <strong className="text-gold-300 font-bold bg-gold-500/20 px-2 py-1 rounded">
                The industry is stuck in a cycle of waste—consumers waste money,
                venues waste capacity.
              </strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.PARAGRAPH_3 }}
              className="text-sm md:text-lg lg:text-xl text-white leading-relaxed font-medium"
            >
              We&apos;ve studied every step of this journey. We&apos;ve analyzed
              why people abandon gyms, why venues struggle to fill slots, and
              what truly matters to both sides.{" "}
              <strong className="text-emerald-300 font-bold bg-gradient-to-r from-emerald-500/20 to-gold-500/20 px-2 py-1 rounded">
                The answer is simple: flexibility, transparency, and mutual
                value.
              </strong>{" "}
              People want to work out on their terms, and venues want to
              maximize their potential. Our pay-per-day model bridges this gap,
              creating a sustainable ecosystem where every visit matters, every
              payment is fair, and every facility reaches its full potential.
            </motion.p>
          </div>

          {/* Solution Highlight - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.SOLUTION }}
            className="relative bg-gradient-to-r from-emerald-500/40 via-gold-500/30 to-emerald-500/40 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-10 border-2 border-emerald-300/50 backdrop-blur-xl shadow-2xl shadow-emerald-500/30 overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-gold-500/20 opacity-50" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={TRANSITION_ROTATE}
            />

            <div className="relative z-10">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.SOLUTION_TITLE }}
                className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 md:mb-6 flex items-center gap-2 md:gap-4"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm flex-shrink-0">
                  <Lightbulb className="w-5 h-5 md:w-8 md:h-8 text-emerald-200" />
                </div>
                <span>Our Solution: A Win-Win Revolution</span>
              </motion.h4>
              <div className="space-y-2 md:space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.SOLUTION_TEXT_1 }}
                  className="text-sm md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium"
                >
                  <strong className="text-emerald-200 font-bold">
                    RIVIO disrupts this broken model entirely.
                  </strong>{" "}
                  Our world&apos;s first pay-per-day platform eliminates waste
                  for users while maximizing revenue for partners. Users access
                  premium facilities only when needed—no guilt, no waste, no
                  commitments. Partners fill capacity that would otherwise sit
                  empty, turning idle time into revenue.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: DURATION.MEDIUM, delay: PROBLEM_DELAY.SOLUTION_TEXT_2 }}
                  className="text-sm md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium"
                >
                  We&apos;re not just another fitness app.{" "}
                  <strong className="text-emerald-200 font-bold">
                    We&apos;re redefining an industry.
                  </strong>{" "}
                  With our proven model, comprehensive research, and deep
                  understanding of both user and partner needs, we&apos;re
                  positioned to transform how India—and eventually the
                  world—accesses fitness. This is more than a platform;
                  it&apos;s a movement toward sustainable, accessible, and
                  mutually beneficial fitness for everyone.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
