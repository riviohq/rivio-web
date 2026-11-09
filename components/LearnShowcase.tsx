"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Dumbbell,
  Flower2,
  Sparkles,
  PlayCircle,
  Brain,
} from "lucide-react";

const TRACKS = [
  {
    icon: Dumbbell,
    title: "Gym track",
    text: "Strength and cardio moves in one swipeable Learn hub, separate from yoga.",
  },
  {
    icon: Flower2,
    title: "Yoga track",
    text: "Yoga-focused catalog and motion guides so poses stay clear and on-track.",
  },
  {
    icon: PlayCircle,
    title: "Learn how to",
    text: "Short guidance on form and movement while you practice in the app.",
  },
  {
    icon: Brain,
    title: "AI Personal Trainer",
    text: "Coming soon — smarter coaching built on the Learn hub. Watch Rivio Pulse.",
    badge: "Coming soon",
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
          <p className="text-emerald-600 font-semibold text-sm tracking-wide uppercase mb-3 inline-flex items-center justify-center gap-2">
            <BookOpen className="h-4 w-4" />
            New in Rivio · Release 1.10.261109
          </p>
          <h2
            id="learn-hub-heading"
            className="text-3xl md:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-4"
          >
            Learn hub: gym, yoga, and AI next
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed">
            Swipe between Gym and Yoga tracks, follow learn-how-to guides, and get
            ready for AI Personal Trainer — all inside the Rivio member app.
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
                className="relative rounded-2xl p-5 md:p-6 bg-white border border-black/[0.06] shadow-sm"
              >
                {"badge" in item && item.badge ? (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                    <Sparkles className="h-3 w-3" />
                    {item.badge}
                  </span>
                ) : null}
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2 pr-16">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.text}</p>
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
