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
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
  },
  partner: {
    iconBg: "bg-amber-500",
    iconColor: "text-white",
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: baseDelay + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      <div
        className={`w-12 h-12 ${styles.iconBg} rounded-xl flex items-center justify-center mb-5`}
      >
        <Icon className={`w-6 h-6 ${styles.iconColor}`} />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-[#1d1d1f] mb-2">
        {feature.title}
      </h3>
      <p className="text-[#86868b] leading-relaxed text-sm md:text-base">
        {feature.description}
      </p>
    </motion.div>
  );
};
