"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  DURATION, 
  DELAY, 
  EASE_EXPO, 
  EASE_SMOOTH, 
  EASE_LINEAR,
  TRANSITION_REVEAL,
  TRANSITION_ROTATE
} from "@/animation-timing";
import {
  Search,
  MapPin,
  TrendingUp,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";

export default function CitySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowMessage(true);
      // In the future, this will search the database and show partners
    }
  };

  const popularCities = ["Delhi", "Mumbai", "Bangalore"];

  return (
    <section
      id="cities"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden bg-[#f5f5f7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={TRANSITION_REVEAL}
          className="text-center mb-4 md:mb-6"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Coming to a city near you
          </motion.h2>
          <p className="text-xl md:text-2xl text-[#86868b] mb-8">
            We're expanding across India, one city at a time.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATION.SLOW, delay: DELAY.SHORT, ease: EASE_EXPO }}
          className="max-w-2xl mx-auto mb-4 md:mb-6"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowMessage(false);
                }}
                placeholder="Search for a city..."
                className="w-full pl-12 pr-28 py-4 text-base bg-white text-[#1d1d1f] placeholder-[#86868b] rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 text-sm bg-[#1d1d1f] text-white rounded-full font-medium hover:bg-black transition-all duration-200"
              >
                Search
              </button>
            </div>
          </form>

          {/* Onboarding Partners Message */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: DURATION.MEDIUM_FAST, ease: EASE_EXPO }}
              className="mt-6 relative overflow-hidden"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-emerald-200 shadow-lg">
                <div className="relative z-10">
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg md:text-2xl font-semibold text-[#1d1d1f] mb-1 md:mb-2">
                        We're Onboarding Partners in{" "}
                        <span className="text-emerald-500">{searchQuery}</span>
                      </h4>
                      <p className="text-[#86868b] font-medium leading-relaxed mb-2 md:mb-4 text-sm md:text-base">
                        We're actively building our network in{" "}
                        <strong className="text-emerald-600">
                          {searchQuery}
                        </strong>{" "}
                        and onboarding premium fitness partners. This feature
                        will be available soon once we've onboarded enough
                        partners to provide comprehensive coverage in your city.
                      </p>
                      <div className="bg-[#f5f5f7] rounded-xl p-4 border border-gray-200">
                        <p className="text-sm text-[#1d1d1f] font-medium mb-2">
                          <strong className="text-emerald-600">
                            What's Coming:
                          </strong>
                        </p>
                        <ul className="space-y-2 text-sm text-[#86868b]">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>
                              Complete list of gyms, yoga studios, sports
                              facilities, and wellness centers in {searchQuery}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>
                              Real-time pricing, availability, and amenities for
                              each venue
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>
                              Ratings, reviews, and photos from the RIVIO
                              community
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>Instant booking and pay-per-day access</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 font-medium">
                        <TrendingUp className="w-4 h-4" />
                        <span>
                          Our network is growing rapidly. Check back soon!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Popular Cities */}
          <div className="mt-4 md:mt-8">
            <p className="text-[#86868b] mb-2 md:mb-4 text-center font-medium text-sm md:text-base">
              Popular Cities:
            </p>
            <div className="flex flex-wrap justify-center gap-2 lg:gap-3 ">
              {popularCities.map((city, index) => (
                <motion.button
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchQuery(city);
                    setShowMessage(true);
                  }}
                  className="px-4 py-2 bg-white rounded-full text-[#1d1d1f] hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 text-sm shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  {city}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expansion Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATION.SLOW, delay: DELAY.LONG, ease: EASE_EXPO }}
          className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-sm"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]" />
          </div>

          <div className="relative z-10">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#1d1d1f] mb-3 md:mb-6 text-center tracking-[-0.02em]">
              Building India's Largest{" "}
              <span className="text-emerald-500">
                Pay-Per-Day
              </span>{" "}
              Fitness Network
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: DELAY.VERY_LONG }}
                className="bg-emerald-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-emerald-100 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Building2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="font-semibold text-[#1d1d1f] mb-1 md:mb-2 text-base md:text-lg">
                  Active Onboarding
                </h4>
                <p className="text-[#86868b] text-xs md:text-sm font-medium leading-relaxed">
                  We're continuously adding premium fitness partners across
                  major cities and emerging markets
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: DELAY.EXTRA_LONG }}
                className="bg-amber-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-100 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="font-semibold text-[#1d1d1f] mb-1 md:mb-2 text-base md:text-lg">
                  City Coverage
                </h4>
                <p className="text-[#86868b] text-xs md:text-sm font-medium leading-relaxed">
                  Expanding from metros to tier-2 and tier-3 cities, ensuring
                  fitness access for everyone
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="bg-emerald-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-emerald-100 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="font-semibold text-[#1d1d1f] mb-1 md:mb-2 text-base md:text-lg">
                  Community Growth
                </h4>
                <p className="text-[#86868b] text-xs md:text-sm font-medium leading-relaxed">
                  A growing community of members discovering flexible, commitment-free fitness
                  across India
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="bg-amber-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-100 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="font-semibold text-[#1d1d1f] mb-1 md:mb-2 text-base md:text-lg">
                  Rapid Expansion
                </h4>
                <p className="text-[#86868b] text-xs md:text-sm font-medium leading-relaxed">
                  Our network is growing exponentially as more partners
                  recognize the pay-per-day opportunity
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
              className="bg-[#f5f5f7] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-200 text-center"
            >
              <p className="text-sm md:text-lg lg:text-xl text-[#1d1d1f] font-medium leading-relaxed">
                <strong className="text-emerald-500">
                  Search functionality will be live soon!
                </strong>{" "}
                We're working tirelessly to onboard partners in every major
                city. Once we have sufficient coverage in a city, you'll be able
                to search, compare, and book venues instantly.{" "}
                <strong className="text-amber-500">
                  Stay tuned for updates as we expand our network.
                </strong>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
