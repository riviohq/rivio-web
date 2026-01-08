"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

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
        duration: 0.5,
        delay: baseDelay + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      className={`bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black/90 p-8 lg:p-4 rounded-3xl hover:shadow-2xl ${styles.card} transition-all backdrop-blur-xl relative overflow-hidden group gpu-accelerated`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Optimized background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${styles.backgroundGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <motion.div
        className={`w-20 h-20 bg-gradient-to-br ${styles.iconContainer} rounded-3xl flex items-center justify-center mb-6 relative mx-auto group-hover:scale-105 transition-transform duration-300 gpu-accelerated`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{ willChange: "transform" }}
      >
        <motion.div
          className={`absolute inset-0 ${styles.iconGlow} rounded-3xl blur-2xl gpu-accelerated`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
          style={{ willChange: "transform, opacity" }}
        />
        <Icon
          className={`w-10 h-10 ${styles.iconColor} relative z-10 drop-shadow-lg`}
        />
      </motion.div>

      <h3
        className={`text-xl lg:text-2xl font-extrabold text-white mb-4 relative z-10 ${styles.titleHover} transition-colors`}
      >
        {feature.title}
      </h3>
      <p className="text-gray-200 leading-relaxed relative z-10 text-sm lg:text-base font-medium">
        {feature.description}
      </p>
    </motion.div>
  );
};
