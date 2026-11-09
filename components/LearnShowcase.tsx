"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Brain, Dumbbell, Flower2, PlayCircle } from "lucide-react";

const TRACKS = [
  {
    icon: Dumbbell,
    title: "Gym",
    text: "Strength and cardio in a dedicated Learn track — separate from yoga.",
  },
  {
    icon: Flower2,
    title: "Yoga",
    text: "Yoga-focused catalog and motion guides so poses stay clear.",
  },
  {
    icon: PlayCircle,
    title: "Learn how to",
    text: "Short form and movement guidance while you practice in the app.",
  },
  {
    icon: Brain,
    title: "AI Personal Trainer",
    text: "Get coaching help in Rivio — guidance built around your Learn hub training.",
  },
];

export default function LearnShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      id="learn-hub"
      ref={ref}
      className="py-16 md:py-24 bg-[#f5f5f7] border-y border-black/[0.06]"
      aria-labelledby="learn-hub-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <p className="text-emerald-600 font-semibold text-sm tracking-wide uppercase mb-4 inline-flex items-center justify-center gap-2">
            <BookOpen className="h-4 w-4" />
            New in the Rivio app
          </p>
          <h2
            id="learn-hub-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.03em] leading-[1.05] mb-5"
          >
            Learn hub is live
          </h2>
          <p className="text-xl md:text-2xl text-[#3f3f46] font-medium leading-snug mb-4">
            Gym, yoga, and AI Personal Trainer
          </p>
          <p className="text-base md:text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto">
            Swipe between Gym and Yoga, open learn-how-to guides, and train with AI
            Personal Trainer — all inside the Rivio member app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
          {TRACKS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 * index }}
                className="rounded-2xl p-6 md:p-7 bg-white border border-black/[0.06] shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-[#6e6e73] leading-relaxed">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/download/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1d1d1f] text-white font-medium hover:bg-black transition-colors"
          >
            Get the Rivio app
          </Link>
          <Link
            href="/pulse/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-black/10 text-[#1d1d1f] font-medium hover:bg-white transition-colors"
          >
            Read Rivio Pulse
          </Link>
        </div>
      </div>
    </section>
  );
}
