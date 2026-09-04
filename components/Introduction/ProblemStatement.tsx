"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Calendar, 
  Layers, 
  Lightbulb,
  TrendingDown,
  Building2,
  Users
} from "lucide-react";
import { 
  DURATION, 
  EASE_EXPO,
  PROBLEM_DELAY,
} from "@/animation-timing";

interface ProblemStatementProps {
  isInView: boolean;
}

const PAIN_POINTS = [
  {
    icon: MapPin,
    title: "Moved to a New City?",
    description: "Your old gym membership is now worthless. Hesitant to commit to another annual fee in a new place? You're not alone.",
    color: "emerald",
  },
  {
    icon: Layers,
    title: "Want Variety?",
    description: "Gym today, swimming tomorrow, yoga on weekends, and maybe some zumba? Why buy multiple memberships when you can pay per visit?",
    color: "blue",
  },
  {
    icon: Calendar,
    title: "Weekend Warrior?",
    description: "Busy professionals who only work out on weekends still pay full monthly fees. That's 20+ unused days every month.",
    color: "purple",
  },
];

const STATISTICS = [
  {
    icon: TrendingDown,
    value: "80%",
    label: "Drop-off Rate",
    description: "Members quit within 5 months",
    source: "IHRSA Research",
  },
  {
    icon: Building2,
    value: "30-40%",
    label: "Off-Peak Usage",
    description: "Gym capacity wasted daily",
    source: "Industry Average",
  },
  {
    icon: Users,
    value: "0.5%",
    label: "Gym Penetration",
    description: "Indians with memberships",
    source: "vs 20%+ globally",
  },
];

const PainPointCard = ({
  point,
  index,
  isInView,
}: {
  point: typeof PAIN_POINTS[0];
  index: number;
  isInView: boolean;
}) => {
  const Icon = point.icon;
  const colorClasses = {
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
  };
  const iconBgClasses = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      whileHover={{ y: -5 }}
      className={`${colorClasses[point.color as keyof typeof colorClasses]} rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-lg`}
    >
      <div className={`${iconBgClasses[point.color as keyof typeof iconBgClasses]} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="text-lg md:text-xl font-semibold text-[#1d1d1f] mb-2">
        {point.title}
      </h4>
      <p className="text-sm md:text-base text-[#86868b] leading-relaxed">
        {point.description}
      </p>
    </motion.div>
  );
};

const StatCard = ({
  stat,
  index,
  isInView,
}: {
  stat: typeof STATISTICS[0];
  index: number;
  isInView: boolean;
}) => {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="text-center"
    >
      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {stat.value}
      </div>
      <div className="text-sm font-medium text-white/90 mb-1">
        {stat.label}
      </div>
      <div className="text-xs text-white/70">
        {stat.description}
      </div>
      <div className="text-[10px] text-white/50 mt-1 uppercase tracking-wider">
        {stat.source}
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
          The Problem
        </span>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-4">
          Sound Familiar?
        </h3>
        <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto">
          Traditional gym memberships don&apos;t fit modern lifestyles. Here&apos;s why millions feel stuck.
        </p>
      </motion.div>

      {/* Pain Point Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
        {PAIN_POINTS.map((point, index) => (
          <PainPointCard 
            key={point.title} 
            point={point} 
            index={index} 
            isInView={isInView} 
          />
        ))}
      </div>

      {/* Statistics Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 overflow-hidden"
      >
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.3),transparent_50%)]" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">
              The Numbers Don&apos;t Lie
            </h4>
            <p className="text-sm md:text-base text-white/80">
              Industry research reveals a broken system
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {STATISTICS.map((stat, index) => (
              <StatCard 
                key={stat.label} 
                stat={stat} 
                index={index} 
                isInView={isInView} 
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Detailed Industry Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 md:mt-16"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-wider bg-emerald-50 px-4 py-2 rounded-full mb-4">
                Industry Analysis
              </span>
              <h4 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] tracking-[-0.02em]">
                The Broken Fitness Model
              </h4>
            </div>

            <div className="space-y-6 text-[#424245]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-base md:text-lg leading-relaxed"
              >
                Research from <strong className="text-[#1d1d1f]">IHRSA (International Health, Racquet & Sportsclub Association)</strong> shows that 
                the traditional gym membership model has a fundamental flaw. Most people sign up with good intentions, but life gets in the way.
                Work schedules change, travel happens, motivation fluctuates. The result? <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">Millions paying for memberships they rarely use.</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-base md:text-lg leading-relaxed"
              >
                Meanwhile, gym owners face the opposite problem. They invest heavily in equipment and facilities, but during off-peak hours 
                (mornings, afternoons, weekends), their spaces sit mostly empty. <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-medium">Users waste money on unused memberships, 
                while gyms waste capacity during slow hours.</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-base md:text-lg leading-relaxed"
              >
                In India, despite a growing health-conscious population, gym penetration remains extremely low at just <strong className="text-[#1d1d1f]">0.5% compared 
                to 20%+ in developed countries</strong>. The barrier? Expensive annual commitments that don&apos;t fit modern lifestyles. 
                <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">People want flexibility, the freedom to work out when and where they want, paying only for what they actually use.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-[#f5f5f7] rounded-2xl p-6 mt-8"
              >
                <p className="text-base md:text-lg leading-relaxed text-[#1d1d1f]">
                  <strong>The Indian fitness industry is valued at ₹15,000+ Crore</strong>, yet serves less than 1% of the population. 
                  This isn&apos;t a demand problem, it&apos;s an <span className="text-emerald-600 font-semibold">accessibility problem</span>. 
                  People want to stay fit, but they don&apos;t want to be locked into expensive, inflexible contracts.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Solution Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-12 md:mt-16"
      >
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 lg:p-16 text-white overflow-hidden relative">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.4),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.3),transparent_50%)]" />
          </div>

          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-2xl md:text-4xl font-semibold mb-4 tracking-[-0.02em]">
                  Our Solution: Pay Only When You Use
                </h4>
                
                <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                  No subscriptions. No annual fees. <strong className="text-white">You pay only for the days you actually show up.</strong> One app, any venue: gym, yoga, dance, swimming, sports. Pay per day and move on.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {["Gym", "Yoga", "Dance", "Swimming", "Sports", "Zumba", "Pilates", "Boxing"].map((activity, index) => (
                  <motion.span
                    key={activity}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.08 }}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30"
                  >
                    {activity}
                  </motion.span>
                ))}
              </div>

              <div className="space-y-5 text-white/90">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-base md:text-lg leading-relaxed"
                >
                  <strong className="text-white">Gym on Monday, yoga on Tuesday, dance on Wednesday, swimming on Thursday?</strong> Why buy four different subscriptions? With RIVIO you pay only for the days you use each. Mix it up every week, with no commitment to one place or one activity.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="text-base md:text-lg leading-relaxed"
                >
                  Not everyone wants to gym daily. Hard exercise every single day isn’t for everyone, and that’s okay. <strong className="text-white">Weekend sports, a swim when you feel like it, or a yoga class now and then?</strong> Pay for that day only. No guilt, no wasted membership, no “I didn’t go enough.”
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.55 }}
                  className="text-base md:text-lg leading-relaxed"
                >
                  One app. Scan at the venue, pay for that day, and you’re done. <strong className="text-white">No contracts, no lock-in.</strong> Whether you’re a variety seeker, a weekend warrior, or someone who just wants to move when it suits you, RIVIO fits.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="mt-10 text-center"
              >
                <p className="text-xl md:text-2xl font-semibold text-white">
                  One app. Any activity. Pay only when you use.
                </p>
                <p className="text-sm md:text-base text-white/70 mt-2">
                  Your week, your mix. No subscriptions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
