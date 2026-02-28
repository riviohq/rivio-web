"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  DURATION, 
  DELAY, 
  EASE_EXPO, 
} from "@/animation-timing";
import {
  Mail,
  Send,
  Building2,
  TrendingUp,
  Users,
  ArrowRight,
  Zap,
  BarChart3,
  Shield,
} from "lucide-react";

const PARTNER_BENEFITS = [
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Fill empty slots during off-peak hours and boost utilization by up to 45%",
    color: "emerald",
  },
  {
    icon: Users,
    title: "New Customers",
    description: "Reach thousands of fitness enthusiasts looking for flexible access",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Track visits, revenue, and customer insights with our dashboard",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Guaranteed payouts with transparent commission structure",
    color: "amber",
  },
];

const BenefitCard = ({
  benefit,
  index,
  isInView,
}: {
  benefit: typeof PARTNER_BENEFITS[0];
  index: number;
  isInView: boolean;
}) => {
  const Icon = benefit.icon;
  const colorClasses = {
    emerald: { bg: "bg-emerald-50", icon: "bg-emerald-500", text: "text-emerald-600" },
    blue: { bg: "bg-blue-50", icon: "bg-blue-500", text: "text-blue-600" },
    purple: { bg: "bg-purple-50", icon: "bg-purple-500", text: "text-purple-600" },
    amber: { bg: "bg-amber-50", icon: "bg-amber-500", text: "text-amber-600" },
  };
  const colors = colorClasses[benefit.color as keyof typeof colorClasses];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className={`${colors.bg} rounded-2xl p-5 border border-gray-100 min-w-0`}
    >
      <div className={`${colors.icon} w-10 h-10 rounded-xl flex items-center justify-center mb-3 flex-shrink-0`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h4 className="text-base font-semibold text-[#1d1d1f] mb-1 break-words">
        {benefit.title}
      </h4>
      <p className="text-sm text-[#86868b] leading-relaxed break-words">
        {benefit.description}
      </p>
    </motion.div>
  );
};

export default function ContactUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 relative overflow-x-hidden bg-[#f5f5f7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-w-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-wider bg-emerald-50 px-4 py-2 rounded-full mb-4">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-4 tracking-[-0.02em]">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto">
            Join the fitness revolution. Partner with RIVIO and transform how India works out.
          </p>
        </motion.div>

        {/* Main Content Grid - equal height boxes */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 min-w-0 lg:items-stretch">
          {/* Left Side - Partner Benefits (same card style as right) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-w-0 flex"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 w-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1d1d1f] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f]">
                    Why Partner With Us?
                  </h3>
                  <p className="text-sm text-[#86868b]">Benefits for your business</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0 flex-1">
                {PARTNER_BENEFITS.map((benefit, index) => (
                  <BenefitCard
                    key={benefit.title}
                    benefit={benefit}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>

              {/* Stats Row - single column on mobile to prevent overlap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 bg-[#f5f5f7] rounded-2xl p-4 border border-gray-100"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="min-w-0">
                    <p className="text-base md:text-lg font-bold text-emerald-500">Built for</p>
                    <p className="text-xs text-[#86868b] mt-0.5">Gyms, studios & clubs</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-base md:text-lg font-bold text-[#1d1d1f]">Designed to</p>
                    <p className="text-xs text-[#86868b] mt-0.5">Boost utilization & revenue</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-base md:text-lg font-bold text-blue-500">Launching in</p>
                    <p className="text-xs text-[#86868b] mt-0.5">Major Indian cities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Card (same card style) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="min-w-0 flex"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 w-full flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f]">
                    Get Started Today
                  </h3>
                  <p className="text-sm text-[#86868b]">Quick and easy onboarding</p>
                </div>
              </div>

              <p className="text-[#86868b] mb-8 leading-relaxed">
                Ready to increase your revenue and reach more customers? Fill out our partnership form 
                and our team will get back to you within 24 hours.
              </p>

              {/* CTA Button */}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeRYNKypv9jMJaT3Ws-0OesfYEaBnM_5oP5a3z27LlRw1ps2Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-[#1d1d1f] text-white rounded-xl font-medium hover:bg-black transition-all flex items-center justify-center gap-3 text-base mb-6"
              >
                <Send className="w-5 h-5" />
                <span>Fill Partnership Form</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm text-[#86868b]">or contact directly</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                <a
                  href="mailto:partners@rivioapp.com"
                  className="flex items-center gap-4 p-4 bg-[#f5f5f7] rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#86868b]">For partnerships</p>
                    <p className="text-[#1d1d1f] font-medium group-hover:text-emerald-600 transition-colors">
                      partners@rivioapp.com
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#86868b] group-hover:text-emerald-600 transition-colors" />
                </a>

                <a
                  href="mailto:support@rivioapp.com"
                  className="flex items-center gap-4 p-4 bg-[#f5f5f7] rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#86868b]">For support</p>
                    <p className="text-[#1d1d1f] font-medium group-hover:text-blue-600 transition-colors">
                      support@rivioapp.com
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#86868b] group-hover:text-blue-600 transition-colors" />
                </a>
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 pt-6 border-t border-gray-100"
              >
                <div className="flex items-center justify-center gap-2 text-sm text-[#86868b]">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>Secure & trusted by our early fitness partners</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
