"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  UserPlus,
  LayoutDashboard,
  Users,
  ShieldCheck,
  CalendarRange,
  MessageSquare,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: UserPlus,
    title: "Add customer",
    text: "Onboard a walk-in, issue a cash pass, and get them training the same visit.",
  },
  {
    icon: ShieldCheck,
    title: "Existing members stay safe",
    text: "If the number already exists, Rivio adds the pass only — name and photo stay unchanged.",
  },
  {
    icon: LayoutDashboard,
    title: "Front Desk on Dashboard",
    text: "Pick your venue, then jump to customers, visits, passes, wallet, or your space.",
  },
  {
    icon: Users,
    title: "My Customers",
    text: "Search and filter members with a wider default window so past visits stay findable.",
  },
  {
    icon: CalendarRange,
    title: "Smarter date defaults",
    text: "Customers look back years; visits and expired passes open on useful ranges.",
  },
  {
    icon: MessageSquare,
    title: "Welcome SMS",
    text: "Notify new and returning members when your welcome template is live.",
  },
];

export default function FrontDeskShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      id="front-desk"
      ref={ref}
      className="py-16 md:py-24 bg-white border-y border-black/[0.06]"
      aria-labelledby="front-desk-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <p className="text-amber-600 font-semibold text-sm tracking-wide uppercase mb-3">
            New in Rivio Partner
          </p>
          <h2
            id="front-desk-heading"
            className="text-3xl md:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-4"
          >
            Add customer. Run the desk.
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed">
            Rivio Partner now helps gyms onboard members at the counter, issue cash
            passes, and open desk tools from one Front Desk strip on the Dashboard.
          </p>
        </motion.div>

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
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/partner-with-rivio/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1d1d1f] text-white font-medium hover:bg-black transition-colors"
          >
            Partner with Rivio
          </Link>
          <Link
            href="/features/business-app/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-black/10 text-[#1d1d1f] font-medium hover:bg-[#f5f5f7] transition-colors"
          >
            See partner features
          </Link>
        </div>
      </div>
    </section>
  );
}
