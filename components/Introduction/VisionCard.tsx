"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { 
  DURATION, 
  DELAY, 
  EASE_EXPO, 
  EASE_SMOOTH, 
  SPRING_DEFAULT,
  TRANSITION_GLOW 
} from "@/animation-timing";

interface VisionCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
  isInView: boolean;
  variant: "user" | "partner";
  baseDelay?: number;
}

const variantStyles = {
  user: {
    card: "hover:shadow-emerald-500/30 border-emerald-500/30",
    backgroundGradient: "from-emerald-500/5",
    iconContainer: "from-emerald-500/30 to-emerald-600/20",
    iconGlow: "bg-emerald-500/40",
    iconColor: "text-emerald-400",
    titleHover: "group-hover:text-emerald-300",
  },
  partner: {
    card: "hover:shadow-gold-500/30 border-gold-500/30",
    backgroundGradient: "from-gold-500/5",
    iconContainer: "from-gold-500/30 to-gold-600/20",
    iconGlow: "bg-gold-500/40",
    iconColor: "text-gold-400",
    titleHover: "group-hover:text-gold-300",
  },
};

export const VisionCard = ({
  feature,
  index,
  isInView,
  variant,
  baseDelay = 0.5,
}: VisionCardProps) => {
  const styles = variantStyles[variant];
  const Icon = feature.icon;

  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: DURATION.NORMAL,
        delay: baseDelay + index * DELAY.STAGGER_MEDIUM,
        ease: EASE_EXPO,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: SPRING_DEFAULT,
      }}
      className={`bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black/90 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl hover:shadow-2xl ${styles.card} transition-all backdrop-blur-xl relative overflow-hidden group gpu-accelerated`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Optimized background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${styles.backgroundGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <motion.div
        className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${styles.iconContainer} rounded-2xl md:rounded-3xl flex items-center justify-center mb-3 md:mb-6 relative mx-auto group-hover:scale-105 transition-transform duration-300 gpu-accelerated`}
        whileHover={{ scale: 1.1 }}
        transition={SPRING_DEFAULT}
        style={{ willChange: "transform" }}
      >
        <motion.div
          className={`absolute inset-0 ${styles.iconGlow} rounded-3xl blur-2xl gpu-accelerated`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={TRANSITION_GLOW}
          style={{ willChange: "transform, opacity" }}
        />
        <Icon
          className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ${styles.iconColor} relative z-10 drop-shadow-lg`}
        />
      </motion.div>

      <h3
        className={`text-lg md:text-xl lg:text-2xl font-extrabold text-white mb-2 md:mb-4 relative z-10 ${styles.titleHover} transition-colors`}
      >
        {feature.title}
      </h3>
      <p className="text-gray-200 leading-relaxed relative z-10 text-xs md:text-sm lg:text-base font-medium">
        {feature.description}
      </p>
    </motion.div>
  );
};
