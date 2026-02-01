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
      className="py-20 md:py-32 relative overflow-hidden bg-[#f5f5f7]"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={TRANSITION_FADE_IN}
          className="text-center mb-4 md:mb-6 gpu-accelerated"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A new way to fitness
          </motion.h2>
          <p className="text-xl md:text-2xl text-[#86868b] max-w-3xl mx-auto leading-relaxed">
            Flexibility, transparency, and access for everyone.
            No subscriptions. No commitments. Just fitness, your way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATION.MEDIUM, delay: DELAY.MEDIUM }}
          className="mb-6 md:mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-8 text-center tracking-[-0.01em]">
            For <span className="text-emerald-500">Fitness Enthusiasts</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
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
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-8 text-center tracking-[-0.01em]">
            For <span className="text-amber-500">Fitness Businesses</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
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
