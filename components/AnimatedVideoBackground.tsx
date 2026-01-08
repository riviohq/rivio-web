"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  QrCode,
  Smartphone,
  CheckCircle,
  Zap,
  CreditCard,
  MapPin,
  TrendingUp,
  Star,
  Waves,
  Target,
  Leaf,
} from "lucide-react";
import { memo, useEffect, useState } from "react";

// ============================================================================
// Scene Data
// ============================================================================
const scenes = [
  {
    icon: Smartphone,
    text: "Open RIVIO App",
    color: "emerald",
    description: "Launch the app on your phone",
  },
  {
    icon: MapPin,
    text: "Find Nearby Venues",
    color: "emerald",
    description: "Search gyms within 100m radius",
  },
  {
    icon: Activity,
    text: "Select Activity",
    color: "emerald",
    description: "Choose Gym, Yoga, Sports, or Swim",
  },
  {
    icon: QrCode,
    text: "Scan QR Code",
    color: "emerald",
    description: "Point camera at venue QR code",
  },
  {
    icon: Star,
    text: "Select Amenities",
    color: "gold",
    description: "Mark preferred amenities",
  },
  {
    icon: CheckCircle,
    text: "Check-in Success",
    color: "emerald",
    description: "You're checked in!",
  },
  {
    icon: CreditCard,
    text: "Pay Per Day",
    color: "gold",
    description: "Pay only ₹99 for today",
  },
  {
    icon: TrendingUp,
    text: "Increase Streak",
    color: "emerald",
    description: "Build your workout streak",
  },
  {
    icon: Activity,
    text: "Start Workout",
    color: "emerald",
    description: "Time to work out!",
  },
  {
    icon: Zap,
    text: "Access Any Venue",
    color: "gold",
    description: "Gym, Yoga, Sports, Swim - All!",
  },
] as const;

type SceneType = (typeof scenes)[number];

// ============================================================================
// Background Components
// ============================================================================
const AnimatedGradientBackground = memo(() => (
  <motion.div
    className="absolute inset-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%), #000000",
        "radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%), radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%), #000000",
        "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%), #000000",
      ],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
));
AnimatedGradientBackground.displayName = "AnimatedGradientBackground";

const GridPattern = memo(() => (
  <div className="absolute inset-0 opacity-15">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  </div>
));
GridPattern.displayName = "GridPattern";

// ============================================================================
// Phone Mockup Components
// ============================================================================
const StatusBar = memo(() => (
  <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 md:h-12 bg-gray-900 flex items-center justify-between px-4 sm:px-6 z-10">
    <div className="text-white text-[10px] sm:text-xs font-semibold">9:41</div>
    <div className="flex gap-1">
      <div className="w-1 h-1 bg-white rounded-full" />
      <div className="w-1 h-1 bg-white rounded-full" />
      <div className="w-1 h-1 bg-white rounded-full" />
    </div>
  </div>
));
StatusBar.displayName = "StatusBar";

const SceneIcon = memo(({ scene }: { scene: SceneType }) => {
  const IconComponent = scene.icon;
  const isEmerald = scene.color === "emerald";

  return (
    <motion.div
      className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl flex items-center justify-center ${
        isEmerald
          ? "bg-emerald-500/30 border-2 border-emerald-400/60"
          : "bg-gold-500/30 border-2 border-gold-400/60"
      }`}
      animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{
        boxShadow: isEmerald
          ? "0 0 30px rgba(16, 185, 129, 0.5), 0 0 60px rgba(16, 185, 129, 0.2)"
          : "0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.2)",
      }}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <IconComponent
          className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${
            isEmerald ? "text-emerald-300" : "text-gold-300"
          }`}
          style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
        />
      </motion.div>
    </motion.div>
  );
});
SceneIcon.displayName = "SceneIcon";

const SceneText = memo(({ scene }: { scene: SceneType }) => {
  const isEmerald = scene.color === "emerald";

  return (
    <motion.div
      className="text-center px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h3
        className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 ${
          isEmerald ? "text-emerald-300" : "text-gold-300"
        }`}
        style={{ textShadow: "0 0 15px currentColor, 0 0 30px currentColor" }}
      >
        {scene.text}
      </h3>
      <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium">
        {scene.description}
      </p>
    </motion.div>
  );
});
SceneText.displayName = "SceneText";

const ProgressIndicators = memo(({ currentScene }: { currentScene: number }) => (
  <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4 flex-wrap justify-center max-w-[200px]">
    {scenes.map((scene, index) => {
      const isActive = index === currentScene;
      return (
        <motion.div
          key={index}
          className={`h-1.5 sm:h-2 rounded-full ${
            isActive
              ? scene.color === "emerald"
                ? "bg-emerald-400"
                : "bg-gold-400"
              : "bg-gray-700"
          }`}
          animate={{ width: isActive ? 24 : 6 }}
          transition={{ duration: 0.3 }}
        />
      );
    })}
  </div>
));
ProgressIndicators.displayName = "ProgressIndicators";

const PhoneMockup = memo(({ currentScene }: { currentScene: number }) => (
  <motion.div
    className="relative w-44 h-[300px] sm:w-52 sm:h-[360px] md:w-60 md:h-[420px] lg:w-72 lg:h-[500px] bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-1.5 sm:p-2 md:p-3 shadow-2xl border-2 sm:border-3 md:border-4 border-gray-700 flex-shrink-0"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    style={{
      boxShadow:
        "0 15px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(16, 185, 129, 0.25)",
    }}
  >
    <div className="w-full h-full bg-black rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative">
      <StatusBar />
      <div className="pt-8 sm:pt-10 md:pt-12 h-full flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-5 pb-4">
        <SceneIcon scene={scenes[currentScene]} />
        <SceneText scene={scenes[currentScene]} />
        <ProgressIndicators currentScene={currentScene} />
      </div>
    </div>
  </motion.div>
));
PhoneMockup.displayName = "PhoneMockup";

// ============================================================================
// Overlay Animations
// ============================================================================
const VenueSearchOverlay = memo(() => (
  <motion.div
    className="absolute inset-0 pointer-events-none flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-black/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 backdrop-blur-xl border-2 border-emerald-400/40 w-full max-w-xs sm:max-w-sm"
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
        <h4 className="text-sm sm:text-base md:text-lg font-bold text-emerald-300">
          Search Nearby Venues
        </h4>
      </div>

      <motion.div
        className="bg-gray-800/50 rounded-lg p-2 mb-2 sm:mb-3 flex items-center gap-2"
        animate={{
          borderColor: [
            "rgba(16, 185, 129, 0.3)",
            "rgba(16, 185, 129, 0.6)",
            "rgba(16, 185, 129, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ border: "2px solid" }}
      >
        <motion.div
          className="w-3 h-3 border-2 border-emerald-400 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <span className="text-gray-400 text-[10px] sm:text-xs">
          Searching within 100m...
        </span>
      </motion.div>

      <div className="space-y-1.5">
        {[
          { name: "Elite Fitness", distance: "45m", price: "₹200/day" },
          { name: "Zen Yoga Studio", distance: "78m", price: "₹150/day" },
          { name: "Swim Center", distance: "95m", price: "₹250/day" },
        ].map((venue, index) => (
          <motion.div
            key={venue.name}
            className="bg-emerald-500/20 rounded-lg p-2 border border-emerald-400/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold text-white">
                  {venue.name}
                </div>
                <div className="text-[9px] sm:text-[10px] text-emerald-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  {venue.distance} away
                </div>
              </div>
              <motion.span
                className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/30 text-emerald-300"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Open
              </motion.span>
            </div>
            <div className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">
              {venue.price}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-2 sm:mt-3 text-center"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] sm:text-[10px] text-emerald-400 flex items-center justify-center gap-1">
          <motion.div
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          Showing venues within 100m radius
        </span>
      </motion.div>
    </motion.div>
  </motion.div>
));
VenueSearchOverlay.displayName = "VenueSearchOverlay";

const ActivitySelectionOverlay = memo(() => (
  <motion.div
    className="absolute inset-0 pointer-events-none flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-[200px] sm:max-w-[280px]">
      {[
        { Icon: Activity, label: "Gym", color: "emerald" },
        { Icon: Leaf, label: "Yoga", color: "emerald" },
        { Icon: Target, label: "Sports", color: "gold" },
        { Icon: Waves, label: "Swim", color: "emerald" },
      ].map(({ Icon, label, color }, index) => (
        <motion.div
          key={label}
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex flex-col items-center justify-center gap-1 ${
            color === "emerald"
              ? "bg-emerald-500/30 border-2 border-emerald-400/60"
              : "bg-gold-500/30 border-2 border-gold-400/60"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
          style={{
            boxShadow:
              color === "emerald"
                ? "0 0 20px rgba(16, 185, 129, 0.5)"
                : "0 0 20px rgba(212, 175, 55, 0.5)",
          }}
        >
          <Icon
            className={`w-6 h-6 sm:w-8 sm:h-8 ${
              color === "emerald" ? "text-emerald-300" : "text-gold-300"
            }`}
          />
          <span
            className={`text-[10px] sm:text-xs font-semibold ${
              color === "emerald" ? "text-emerald-300" : "text-gold-300"
            }`}
          >
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
));
ActivitySelectionOverlay.displayName = "ActivitySelectionOverlay";

const QRScanOverlay = memo(() => (
  <motion.div
    className="absolute inset-0 pointer-events-none flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 border-3 sm:border-4 border-emerald-400 rounded-lg"
      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{
        boxShadow:
          "0 0 30px rgba(16, 185, 129, 0.7), 0 0 60px rgba(16, 185, 129, 0.3)",
      }}
    />
    <motion.div
      className="absolute w-40 sm:w-52 md:w-64 h-1.5 sm:h-2 bg-emerald-400"
      animate={{ y: [-80, 80, -80] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      style={{ boxShadow: "0 0 15px rgba(16, 185, 129, 1)" }}
    />
  </motion.div>
));
QRScanOverlay.displayName = "QRScanOverlay";

const AmenitiesOverlay = memo(() => (
  <motion.div
    className="absolute inset-0 pointer-events-none flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-[280px]">
      {["AC", "WiFi", "Parking", "Shower"].map((amenity, index) => (
        <motion.div
          key={amenity}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-500/30 border-2 border-gold-400/60 rounded-lg text-gold-300 font-bold text-xs sm:text-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
          style={{ boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)" }}
        >
          {amenity}
        </motion.div>
      ))}
    </div>
  </motion.div>
));
AmenitiesOverlay.displayName = "AmenitiesOverlay";

const PaymentOverlay = memo(() => (
  <motion.div
    className="absolute inset-0 pointer-events-none flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-300"
      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        textShadow:
          "0 0 30px rgba(212, 175, 55, 0.7), 0 0 60px rgba(212, 175, 55, 0.3)",
      }}
    >
      ₹99
    </motion.div>
  </motion.div>
));
PaymentOverlay.displayName = "PaymentOverlay";

const StreakOverlay = memo(() => (
  <motion.div
    className="absolute inset-0 pointer-events-none flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="text-center"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-300 mb-2"
        style={{ textShadow: "0 0 25px rgba(16, 185, 129, 0.7)" }}
      >
        🔥 7 Day Streak
      </div>
      <div className="text-sm sm:text-base md:text-lg text-emerald-400 font-semibold">
        Keep it going!
      </div>
    </motion.div>
  </motion.div>
));
StreakOverlay.displayName = "StreakOverlay";

// ============================================================================
// Main Component
// ============================================================================
export default function AnimatedVideoBackground() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <AnimatedGradientBackground />
      <GridPattern />

      {/* Main Animation Scene - Properly Contained */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <PhoneMockup currentScene={currentScene} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay Animations - Contained within bounds */}
      <AnimatePresence>
        {currentScene === 1 && <VenueSearchOverlay />}
      </AnimatePresence>
      <AnimatePresence>
        {currentScene === 2 && <ActivitySelectionOverlay />}
      </AnimatePresence>
      <AnimatePresence>
        {currentScene === 3 && <QRScanOverlay />}
      </AnimatePresence>
      <AnimatePresence>
        {currentScene === 4 && <AmenitiesOverlay />}
      </AnimatePresence>
      <AnimatePresence>
        {currentScene === 6 && <PaymentOverlay />}
      </AnimatePresence>
      <AnimatePresence>
        {currentScene === 7 && <StreakOverlay />}
      </AnimatePresence>
    </div>
  );
}
