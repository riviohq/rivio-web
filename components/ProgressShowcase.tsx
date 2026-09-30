"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Dumbbell,
  BarChart3,
  CalendarDays,
  PlusCircle,
  Flame,
  MapPin,
} from "lucide-react";

const SHOTS = [
  {
    src: "/assets/progress/progress-overview.png",
    alt: "Rivio My Progress overview with workout tracker insights, gym streak, and body part progress in India fitness app",
    label: "Progress insights",
    caption: "See what is improving across exercises and body parts",
  },
  {
    src: "/assets/progress/workout-history.png",
    alt: "Rivio workout history day by day with volume sets reps and muscle map workout tracker",
    label: "Workout history",
    caption: "Open any day, review sets, and repeat a past workout",
  },
  {
    src: "/assets/progress/new-entry.png",
    alt: "Rivio New Entry screen to log a workout name time bodyweight and feeling workout logger app",
    label: "New entry",
    caption: "Name the day, set time, and start from a past workout",
  },
  {
    src: "/assets/progress/log-sets.png",
    alt: "Rivio set logger with incline walk outdoor run weight reps distance workout tracking app India",
    label: "Log every set",
    caption: "Weights, reps, time, and distance with muscle highlights",
  },
];

const HIGHLIGHTS = [
  {
    icon: Dumbbell,
    title: "Workout tracker built in",
    text: "Log strength, cardio, and custom exercises without a second app. Rivio is a gym finder and a workout tracker in one place.",
  },
  {
    icon: BarChart3,
    title: "Progress you can read",
    text: "Charts, personal records, and body part insights show what moved over 7 days, 1 month, 3 months, or a custom date range.",
  },
  {
    icon: CalendarDays,
    title: "History that stays light",
    text: "Workout History loads your last 7 days by default. Pick any older day from the calendar when you need it.",
  },
  {
    icon: PlusCircle,
    title: "Faster logging next time",
    text: "Start from last workout or a past push, legs, or cardio day. Change only what is different today.",
  },
  {
    icon: Flame,
    title: "Gym streak + training log",
    text: "Attendance streaks from QR check-in stay separate from the exercises you log, so consistency and training both stay clear.",
  },
  {
    icon: MapPin,
    title: "Find a gym, then train",
    text: "Discover nearby gyms and studios, check in, meet the team on the Team tab, then track the workout in My Progress.",
  },
];

export default function ProgressShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      id="workout-tracker"
      ref={ref}
      className="py-16 md:py-24 bg-white border-y border-black/[0.06]"
      aria-labelledby="workout-tracker-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <p className="text-emerald-600 font-semibold text-sm tracking-wide uppercase mb-3">
            New in the Rivio user app
          </p>
          <h2
            id="workout-tracker-heading"
            className="text-3xl md:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-4"
          >
            Track my workout. Find a gym. One app.
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed">
            Looking for a number one workout tracker, a gym finder near you, or an
            app to track my workout without another subscription? Rivio combines
            pay-per-day gym access with My Progress so you can log sets, follow
            history, and see real progress after every session.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-12 md:mb-16">
          {SHOTS.map((shot, index) => (
            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#f5f5f7] border border-black/[0.06] shadow-sm"
            >
              <div className="relative aspect-[9/19.5] bg-black/5">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top"
                  priority={index < 2}
                />
              </div>
              <figcaption className="p-3 md:p-4">
                <p className="text-sm font-semibold text-[#1d1d1f]">{shot.label}</p>
                <p className="text-xs md:text-sm text-[#86868b] mt-1">{shot.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="rounded-2xl p-5 md:p-6 bg-[#f5f5f7] border border-black/[0.05]"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <p className="text-center text-sm text-[#86868b] max-w-2xl mx-auto mb-6">
          Search for workout tracker India, gym finder app, track my workout, log
          gym sets, fitness streak app, or pay per day gym. Rivio is built for
          members who want flexible venue access and a clear training log in the
          same download.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/download/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1d1d1f] text-white font-medium hover:bg-black transition-colors"
          >
            Download Rivio
          </Link>
          <Link
            href="/features/member-app/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-black/10 text-[#1d1d1f] font-medium hover:bg-[#f5f5f7] transition-colors"
          >
            See member features
          </Link>
        </div>
      </div>
    </section>
  );
}
