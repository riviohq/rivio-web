"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { userVision, partnerVision } from "@/constants";
import { FloatingBackground } from "./FloatingBackground";
import { ProblemStatement } from "./ProblemStatement";
import { WhyRivioDifferent } from "./WhyRivioDifferent";
import { VisionCard } from "./VisionCard";
import { 
  DURATION, 
  DELAY, 
  EASE_EXPO, 
  TRANSITION_FADE_IN 
} from "@/animation-timing";

export const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 md:py-24 bg-black relative overflow-hidden"
    >
      <FloatingBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={TRANSITION_FADE_IN}
          className="text-center mb-6 md:mb-12 gpu-accelerated"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-6 gpu-accelerated"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: DURATION.MEDIUM, delay: DELAY.VERY_SHORT, ease: EASE_EXPO }}
            style={{ willChange: "transform, opacity" }}
          >
            Fitness is{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent">
              Evolving
            </span>
          </motion.h2>
          <p className="text-base md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto font-medium">
            Access. Easy access. Priority. These things matter more than ever.
            We&apos;re building the future of fitness—one that prioritizes
            flexibility, transparency, and sustainable growth for everyone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATION.MEDIUM, delay: DELAY.MEDIUM }}
          className="mb-8 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-8 text-center">
            Vision for <span className="text-emerald-400">Users</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {userVision.map((feature, index) => (
              <VisionCard
                key={feature.title}
                feature={feature}
                index={index}
                isInView={isInView}
                variant="user"
                baseDelay={0.5}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATION.MEDIUM, delay: DELAY.EXTRA_LONG }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-8 text-center">
            Vision for <span className="text-gold-400">Partners</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {partnerVision.map((feature, index) => (
              <VisionCard
                key={feature.title}
                feature={feature}
                index={index}
                isInView={isInView}
                variant="partner"
                baseDelay={0.9}
              />
            ))}
          </div>
        </motion.div>

        <ProblemStatement isInView={isInView} />
        <WhyRivioDifferent isInView={isInView} />
      </div>
    </section>
  );
};
