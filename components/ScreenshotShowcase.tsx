"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  useRef,
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from "react";
import {
  Smartphone,
  Building2,
  TrendingUp,
  Users,
  Wallet,
  Activity,
  MapPin,
  Star,
  QrCode,
  CheckCircle,
  Calendar,
  Clock,
  BarChart3,
  UserCheck,
  LucideIcon,
} from "lucide-react";
import {
  DURATION,
  DELAY,
  EASE_EXPO,
  EASE_SMOOTH,
  EASE_IN_OUT,
  EASE_OUT,
  EASE_LINEAR,
  SPRING_DEFAULT,
  TRANSITION_PULSE,
  TRANSITION_BACKGROUND,
  TRANSITION_ROTATE,
  getStaggerDelay,
} from "@/animation-timing";

// ============================================
// Theme Configuration
// ============================================
type ThemeColor = "emerald" | "gold";

const themeClasses = {
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    darkGradient: "bg-gradient-to-br from-gray-900 to-black",
    accent: "bg-emerald-500/20",
    accentBorder: "border-emerald-500/30",
    text: "text-emerald-400",
    textLight: "text-emerald-300",
    textLighter: "text-emerald-200",
    glow: "bg-emerald-400/30",
    glowLight: "bg-emerald-500/50",
    border: "border-emerald-400",
    statusActive: "bg-emerald-500/30 text-emerald-300",
    dot: "bg-emerald-400",
  },
  gold: {
    gradient: "from-gold-500 to-gold-600",
    bgGradient: "bg-gradient-to-br from-gold-500 to-gold-600",
    darkGradient: "bg-gradient-to-br from-gray-900 to-black",
    accent: "bg-gold-500/20",
    accentBorder: "border-gold-500/30",
    text: "text-gold-400",
    textLight: "text-gold-300",
    textLighter: "text-gold-200",
    glow: "bg-gold-400/30",
    glowLight: "bg-gold-500/50",
    border: "border-gold-400",
    statusActive: "bg-gold-500/30 text-gold-300",
    dot: "bg-gold-400",
  },
} as const;

// ============================================
// Visibility Context - pauses animations for off-screen cards
// ============================================
const VisibilityContext = createContext(true);
const useIsVisible = () => useContext(VisibilityContext);

// ============================================
// Custom Hooks
// ============================================
function useCountUp(
  end: number,
  duration: number = 2,
  start: number = 0,
  autoStart: boolean = true
) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const [hasStarted, setHasStarted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoStart && !hasStarted && end > start) {
      setHasStarted(true);
      const increment = (end - start) / (duration * 60);
      timerRef.current = setInterval(() => {
        countRef.current += increment;
        if (countRef.current >= end) {
          setCount(end);
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        } else {
          setCount(Math.floor(countRef.current));
        }
      }, 1000 / 60);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [hasStarted, end, duration, start, autoStart]);

  const reset = () => {
    setCount(start);
    countRef.current = start;
    setHasStarted(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return { count, reset };
}

function useAnimationCycle(intervalMs: number, animationDurationMs: number) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(true);
      setTimeout(() => setIsActive(false), animationDurationMs);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs, animationDurationMs]);

  return isActive;
}

// ============================================
// Reusable UI Components
// ============================================
function Spinner({
  className = "w-4 h-4",
  color = "emerald",
}: Readonly<{ className?: string; color?: ThemeColor }>) {
  const borderColor =
    color === "emerald" ? "border-emerald-400" : "border-gold-400";
  return (
    <motion.div
      className={`${className} border-2 ${borderColor} border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: DURATION.VERY_SLOW, repeat: Infinity, ease: EASE_LINEAR }}
    />
  );
}

function PulsingGlow({
  isActive,
  color = "emerald",
  size = "md",
}: Readonly<{
  isActive: boolean;
  color?: ThemeColor;
  size?: "sm" | "md" | "lg";
}>) {
  const sizeClasses = { sm: "w-12 h-12", md: "w-16 h-16", lg: "w-20 h-20" };
  const theme = themeClasses[color];
  return (
    <motion.div
      className={`absolute top-0 right-0 ${sizeClasses[size]} ${theme.glow} rounded-full blur-xl`}
      animate={{
        scale: isActive ? [1, 1.5, 1] : 1,
        opacity: isActive ? [0.5, 0.8, 0.5] : 0.3,
      }}
      transition={{ duration: 1 }}
    />
  );
}

function ShimmerOverlay() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      animate={{ x: ["-100%", "200%"] }}
      transition={TRANSITION_ROTATE}
    />
  );
}

// Floating cloud background configuration
const FLOATING_CLOUDS = [
  { id: "cloud-0", index: 0 },
  { id: "cloud-1", index: 1 },
  { id: "cloud-2", index: 2 },
  { id: "cloud-3", index: 3 },
] as const;

function FloatingClouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {FLOATING_CLOUDS.map(({ id, index: i }) => (
        <motion.div
          key={id}
          className="absolute rounded-full blur-3xl opacity-[0.15] gpu-accelerated"
          style={{
            width: `${400 + i * 80}px`,
            height: `${400 + i * 80}px`,
            background: i % 2 === 0 ? "#10b981" : "#f59e0b",
            left: `${15 + i * 25}%`,
            top: `${10 + i * 20}%`,
            willChange: "transform",
          }}
          animate={{
            x: [0, 50, -25, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{
            duration: 30 + i * 5,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}

interface StatCardProps {
  readonly label: string;
  readonly value: string | number;
  readonly isAnimating?: boolean;
  readonly incrementText?: string;
  readonly color?: ThemeColor;
  readonly icon?: LucideIcon;
  readonly delay?: number;
}

function StatCard({
  label,
  value,
  isAnimating = false,
  incrementText,
  color = "emerald",
  icon: Icon,
  delay = 0.3,
}: StatCardProps) {
  const theme = themeClasses[color];
  return (
    <motion.div
      className={`${theme.accent} rounded-lg p-3 mb-3 backdrop-blur-sm relative overflow-hidden`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-xs opacity-80 mb-1 flex items-center gap-2 truncate">
        {Icon && <Icon className="w-3 h-3 flex-shrink-0" />}
        <span className="truncate">{label}</span>
      </div>
      <motion.div
        className={`text-xl md:text-2xl font-bold ${theme.textLight} flex items-center gap-2 overflow-hidden`}
        key={String(value)}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: DURATION.FAST }}
      >
        <span className="truncate">{value}</span>
        {isAnimating && incrementText && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-sm ${theme.textLighter}`}
          >
            {incrementText}
          </motion.span>
        )}
      </motion.div>
      <PulsingGlow isActive={isAnimating} color={color} />
    </motion.div>
  );
}

interface CardContainerProps {
  readonly children: ReactNode;
  readonly color?: ThemeColor;
  readonly variant?: "gradient" | "dark" | "bordered";
  readonly className?: string;
}

function CardContainer({
  children,
  color = "emerald",
  variant = "gradient",
  className = "",
}: CardContainerProps) {
  const theme = themeClasses[color];
  const baseClasses = "p-4 rounded-lg h-full flex flex-col overflow-hidden";
  const variantClasses = {
    gradient: `${theme.bgGradient} text-white`,
    dark: `${theme.darkGradient} text-white`,
    bordered: `bg-gradient-to-br from-gray-800 to-black border-2 ${theme.accentBorder}`,
  };
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({
  children,
  delay = 0.2,
}: Readonly<{ children: ReactNode; delay?: number }>) {
  return (
    <motion.div
      className="text-lg font-bold mb-4 truncate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface TransactionItemProps {
  readonly type: string;
  readonly amount: number | string;
  readonly time: string;
  readonly isPositive?: boolean;
  readonly index: number;
  readonly color?: ThemeColor;
}

function TransactionItem({
  type,
  amount,
  time,
  isPositive = true,
  index,
  color = "emerald",
}: TransactionItemProps) {
  const theme = themeClasses[color];
  const bgClass = color === "emerald" ? "bg-white/10" : "bg-gold-500/10";
  return (
    <motion.div
      className={`${bgClass} rounded p-2 text-sm backdrop-blur-sm`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay: getStaggerDelay(index) }}
      whileHover={{ scale: 1.05, x: 5 }}
    >
      <div className="flex justify-between">
        <span className="text-xs">{type}</span>
        <span
          className={`${
            isPositive ? theme.textLight : ""
          } font-semibold text-xs`}
        >
          {isPositive ? "+" : ""}₹
          {typeof amount === "number" ? Math.abs(amount) : amount}
        </span>
      </div>
      <div className="text-xs opacity-60">{time}</div>
    </motion.div>
  );
}

interface VenueCardProps {
  readonly name: string;
  readonly price: string;
  readonly time?: string;
  readonly distance?: string;
  readonly type: string;
  readonly isSelected: boolean;
  readonly isBooking?: boolean;
  readonly isBooked?: boolean;
  readonly index: number;
}

function VenueCard({
  name,
  price,
  time,
  distance,
  type,
  isSelected,
  isBooking,
  isBooked,
  index,
}: VenueCardProps) {
  return (
    <motion.div
      className={`rounded-lg p-3 backdrop-blur-sm ${
        isSelected
          ? "bg-emerald-500/30 border-2 border-emerald-400"
          : "bg-white/10 border border-white/20"
      }`}
      animate={{
        scale: isSelected ? 1.05 : 1,
        opacity: isSelected ? 1 : 0.7,
      }}
      transition={{ duration: DURATION.FAST }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs opacity-80">{type}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-emerald-400">{price}</div>
          <div className="text-xs opacity-80 flex items-center gap-1">
            {time && (
              <>
                <Clock className="w-3 h-3" />
                {time}
              </>
            )}
            {distance && <>{distance}</>}
          </div>
        </div>
      </div>
      {isSelected && (
        <AnimatePresence>
          {isBooking && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-emerald-300 flex items-center gap-2 mt-2"
            >
              <Spinner className="w-4 h-4" />
              Booking...
            </motion.div>
          )}
          {isBooked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-emerald-400 flex items-center gap-2 mt-2"
            >
              <CheckCircle className="w-4 h-4" />
              Booked Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

// Animated Check-in Component with Live QR Scanning
function AnimatedCheckIn() {
  const isVisible = useIsVisible();
  const [isScanning, setIsScanning] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInCount, setCheckInCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const cycle = setInterval(() => {
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        setIsCheckedIn(true);
        setCheckInCount((prev) => prev + 1);
        setTimeout(() => setIsCheckedIn(false), 2000);
      }, 2000);
    }, 5000);
    return () => clearInterval(cycle);
  }, [isVisible]);

  return (
    <CardContainer color="emerald" className="relative overflow-hidden">
      <ShimmerOverlay />
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="text-lg font-bold">Check-In</div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={TRANSITION_BACKGROUND}
        >
          <QrCode className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          {!isScanning && !isCheckedIn && (
            <motion.div
              key="ready"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <QrCode className="w-20 h-20 mx-auto mb-4 opacity-80" />
              <div className="text-sm">Point camera at QR code</div>
            </motion.div>
          )}
          {isScanning && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <motion.div
                className="w-48 h-48 border-4 border-white rounded-lg mx-auto mb-4 relative"
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute w-full h-1 bg-white"
                  animate={{ y: [0, 192, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              <div className="text-sm font-semibold">Scanning...</div>
            </motion.div>
          )}
          {isCheckedIn && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [0, 1.2, 1], rotate: [0, 360] }}
                transition={{ duration: DURATION.MEDIUM, ease: EASE_OUT }}
              >
                <CheckCircle className="w-24 h-24 mx-auto mb-4 text-white" />
              </motion.div>
              <motion.div
                className="text-2xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: DELAY.SHORT }}
              >
                Checked In! ✅
              </motion.div>
              <div className="text-sm opacity-90">
                Total Check-ins: {checkInCount}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CardContainer>
  );
}

// Animated Booking Component
function AnimatedBooking() {
  const isVisible = useIsVisible();
  const [selectedVenue, setSelectedVenue] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const venues = [
    { name: "Elite Fitness", price: "₹200", time: "10:00 AM", type: "Gym" },
    { name: "Zen Yoga Studio", price: "₹150", time: "11:00 AM", type: "Yoga" },
    { name: "Swim Center", price: "₹250", time: "2:00 PM", type: "Swim" },
  ];

  useEffect(() => {
    if (!isVisible) return;
    const cycle = setInterval(() => {
      setSelectedVenue((prev) => (prev + 1) % venues.length);
      setIsBooking(true);
      setTimeout(() => {
        setIsBooking(false);
        setIsBooked(true);
        setTimeout(() => setIsBooked(false), 2000);
      }, 1500);
    }, 5000);
    return () => clearInterval(cycle);
  }, [isVisible, venues.length]);

  return (
    <CardContainer color="emerald" variant="dark">
      <div className="text-lg font-bold mb-4">Book Venue</div>
      <div className="space-y-3 flex-1">
        {venues.map((venue, index) => (
          <VenueCard
            key={venue.name}
            {...venue}
            isSelected={index === selectedVenue}
            isBooking={index === selectedVenue && isBooking}
            isBooked={index === selectedVenue && isBooked}
            index={index}
          />
        ))}
      </div>
    </CardContainer>
  );
}

// Enhanced Wallet with Live Balance Increase
function AnimatedWallet() {
  const isVisible = useIsVisible();
  const { count: balance, reset } = useCountUp(1250, 3, 500, true);
  const [transactions, setTransactions] = useState([
    { type: "Top Up", amount: 500, time: "Just now", id: 1 },
    { type: "Gym Visit", amount: -200, time: "Today, 10:30 AM", id: 2 },
  ]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setIsAdding(true);
      setTimeout(() => {
        const newAmount = Math.floor(Math.random() * 500) + 200;
        setTransactions((prev) => [
          {
            type: "Top Up",
            amount: newAmount,
            time: "Just now",
            id: Date.now(),
          },
          ...prev.slice(0, 2),
        ]);
        reset();
        setTimeout(() => setIsAdding(false), 500);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible, reset]);

  return (
    <CardContainer color="emerald">
      <CardTitle>Wallet</CardTitle>
      <motion.div
        className="bg-white/20 rounded-lg p-4 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: DELAY.MEDIUM_SHORT }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="text-xs opacity-80 mb-2">Available Balance</div>
        <motion.div
          className="text-2xl md:text-3xl font-bold flex items-center gap-2 overflow-hidden"
          key={balance}
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
        >
          <span className="truncate">₹{balance.toLocaleString()}</span>
          {isAdding && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm md:text-lg text-emerald-200 flex-shrink-0"
            >
              +₹{transactions[0]?.amount || 0}
            </motion.span>
          )}
        </motion.div>
        <PulsingGlow isActive={isAdding} color="emerald" size="lg" />
      </motion.div>
      <div className="space-y-2 flex-1 overflow-hidden">
        <AnimatePresence>
          {transactions.map((tx, index) => (
            <TransactionItem
              key={tx.id}
              type={tx.type}
              amount={tx.amount}
              time={tx.time}
              isPositive={tx.amount > 0}
              index={index}
              color="emerald"
            />
          ))}
        </AnimatePresence>
      </div>
    </CardContainer>
  );
}

// Enhanced Dashboard with Live Streak Increase
function AnimatedDashboard() {
  const { count: streakCount } = useCountUp(12, 2, 0, true);
  const { count: rankCount } = useCountUp(45, 2, 50, true);
  const { count: visitsCount } = useCountUp(18, 2, 0, true);
  const streakIncreasing = useAnimationCycle(5000, 1500);

  return (
    <CardContainer color="emerald" variant="dark">
      <CardTitle>Dashboard</CardTitle>
      <StatCard
        label="Current Streak"
        value={`${streakCount} Days 🔥`}
        isAnimating={streakIncreasing}
        incrementText="+1"
        color="emerald"
        delay={0.3}
      />
      <StatCard
        label="Leaderboard Rank"
        value={`#${rankCount}`}
        color="emerald"
        delay={0.4}
      />
      <StatCard
        label="This Month"
        value={`${visitsCount} Visits`}
        color="emerald"
        delay={0.5}
      />
    </CardContainer>
  );
}

// Animated Home Screen Component
function AnimatedHomeScreen() {
  const isVisible = useIsVisible();
  const [currentIndex, setCurrentIndex] = useState(0);
  const venues = [
    {
      name: "Elite Fitness Center",
      price: "₹200/day",
      distance: "0.5 km",
      type: "Gym",
    },
    {
      name: "Zen Yoga Studio",
      price: "₹150/day",
      distance: "1.2 km",
      type: "Yoga",
    },
    {
      name: "Swim Center",
      price: "₹250/day",
      distance: "2.1 km",
      type: "Swim",
    },
  ];

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % venues.length),
      3000
    );
    return () => clearInterval(interval);
  }, [isVisible, venues.length]);

  return (
    <CardContainer color="emerald" className="relative overflow-hidden">
      <ShimmerOverlay />
      <div className="flex items-center justify-between mb-4 relative z-10">
        <motion.div
          className="text-lg font-bold"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={TRANSITION_PULSE}
        >
          RIVIO
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={TRANSITION_BACKGROUND}
        >
          <MapPin className="w-5 h-5" />
        </motion.div>
      </div>
      {venues.map((venue, index) => (
        <motion.div
          key={venue.name}
          className="bg-white/20 rounded-lg p-3 mb-2 backdrop-blur-sm relative z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0.6,
            x: 0,
            scale: index === currentIndex ? 1.02 : 1,
          }}
          transition={{ duration: DURATION.NORMAL }}
        >
          <div className="text-xs opacity-80 mb-1">{venue.type}</div>
          <div className="text-sm font-semibold">{venue.name}</div>
          <div className="text-xs opacity-80">
            {venue.price} • {venue.distance}
          </div>
        </motion.div>
      ))}
    </CardContainer>
  );
}

// Animated Profile Component
function AnimatedProfile() {
  const profileStats = [
    { label: "Total Visits", value: "127", delay: 0.4 },
    { label: "Achievements", value: "8 Unlocked", delay: 0.5 },
  ];

  return (
    <CardContainer color="emerald" variant="bordered">
      <motion.div
        className="w-20 h-20 bg-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold relative"
        animate={{ rotate: [0, 360] }}
        transition={TRANSITION_BACKGROUND}
      >
        <motion.div
          className="absolute inset-0 bg-emerald-400 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={TRANSITION_PULSE}
        />
        <span className="relative z-10">AB</span>
      </motion.div>
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: DELAY.MEDIUM_SHORT }}
      >
        <div className="font-bold text-white mb-1">Your Profile</div>
        <div className="text-xs text-gray-400">Fitness Enthusiast</div>
      </motion.div>
      <div className="space-y-2">
        {profileStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-emerald-500/20 rounded-lg p-2 text-center backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: stat.delay }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-xs text-gray-400">{stat.label}</div>
            <motion.div
              className="font-bold text-emerald-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            >
              {stat.value}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </CardContainer>
  );
}

// Animated Partner Dashboard with Live Earnings and Check-ins
function AnimatedPartnerDashboard() {
  const isVisible = useIsVisible();
  const { count: earnings, reset: resetEarnings } = useCountUp(
    12450,
    3,
    10000,
    true
  );
  const { count: visits, reset: resetVisits } = useCountUp(1247, 2, 1200, true);
  const { count: monthly } = useCountUp(245600, 3, 240000, true);
  const { count: checkIns, reset: resetCheckIns } = useCountUp(45, 2, 40, true);
  const [isEarning, setIsEarning] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const earningsInterval = setInterval(() => {
      setIsEarning(true);
      setTimeout(() => {
        resetEarnings();
        setTimeout(() => setIsEarning(false), 500);
      }, 1000);
    }, 6000);
    const checkInInterval = setInterval(() => {
      setIsCheckIn(true);
      setTimeout(() => {
        resetCheckIns();
        resetVisits();
        setTimeout(() => setIsCheckIn(false), 500);
      }, 1000);
    }, 5000);
    return () => {
      clearInterval(earningsInterval);
      clearInterval(checkInInterval);
    };
  }, [isVisible, resetEarnings, resetCheckIns, resetVisits]);

  return (
    <CardContainer color="gold">
      <CardTitle>Business Dashboard</CardTitle>
      <StatCard
        label="Today's Earnings"
        value={`₹${earnings.toLocaleString()}`}
        isAnimating={isEarning}
        incrementText="+₹200"
        color="gold"
        delay={0.3}
      />
      <StatCard
        label="Today's Check-ins"
        value={checkIns}
        isAnimating={isCheckIn}
        incrementText="+1"
        color="gold"
        delay={0.4}
      />
      <StatCard
        label="Total Visits"
        value={visits.toLocaleString()}
        color="gold"
        delay={0.5}
      />
      <StatCard
        label="This Month"
        value={`₹${monthly.toLocaleString()}`}
        color="gold"
        delay={0.6}
      />
    </CardContainer>
  );
}

// Animated Partner Wallet with Live Balance Increases
function AnimatedPartnerWallet() {
  const isVisible = useIsVisible();
  const { count: balance, reset } = useCountUp(185250, 3, 180000, true);
  const [transactions, setTransactions] = useState([
    { type: "Check-in Payment", amount: 200, time: "Just now", id: 1 },
    { type: "Subscription Payment", amount: 2000, time: "2 min ago", id: 2 },
    { type: "Daily Pass", amount: 200, time: "5 min ago", id: 3 },
  ]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const amounts = [200, 500, 1000, 2000];
    const types = [
      "Check-in Payment",
      "Daily Pass",
      "Weekly Pass",
      "Subscription Payment",
    ];
    const interval = setInterval(() => {
      setIsAdding(true);
      setTimeout(() => {
        const randomAmount =
          amounts[Math.floor(Math.random() * amounts.length)];
        const randomType = types[Math.floor(Math.random() * types.length)];
        setTransactions((prev) => [
          {
            type: randomType,
            amount: randomAmount,
            time: "Just now",
            id: Date.now(),
          },
          ...prev.slice(0, 2),
        ]);
        reset();
        setTimeout(() => setIsAdding(false), 500);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible, reset]);

  return (
    <CardContainer color="gold" variant="dark">
      <CardTitle>Partner Wallet</CardTitle>
      <motion.div
        className="bg-gold-500/20 rounded-lg p-4 mb-3 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: DELAY.MEDIUM_SHORT }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="text-xs opacity-80 mb-2">Available Balance</div>
        <motion.div
          className="text-2xl md:text-3xl font-bold text-gold-300 flex items-center gap-2 overflow-hidden"
          key={balance}
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: DURATION.FAST }}
        >
          <span className="truncate">₹{balance.toLocaleString()}</span>
          {isAdding && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-gold-200 flex-shrink-0"
            >
              +₹{transactions[0]?.amount || 0}
            </motion.span>
          )}
        </motion.div>
        <PulsingGlow isActive={isAdding} color="gold" size="lg" />
      </motion.div>
      <div className="space-y-2 flex-1 overflow-hidden mb-3">
        <div className="text-xs opacity-80 mb-2">Recent Transactions</div>
        <AnimatePresence>
          {transactions.map((tx, index) => (
            <TransactionItem
              key={tx.id}
              type={tx.type}
              amount={tx.amount}
              time={tx.time}
              isPositive
              index={index}
              color="gold"
            />
          ))}
        </AnimatePresence>
      </div>
      <SettlementButton />
    </CardContainer>
  );
}

// Reusable Settlement Button
function SettlementButton() {
  return (
    <motion.div
      className="bg-gold-500/20 rounded-lg p-3 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: DELAY.MEDIUM }}
    >
      <div className="text-sm font-semibold mb-2">Settle to Bank</div>
      <motion.button
        className="bg-gold-500 text-white text-center py-2 rounded-lg text-sm font-semibold w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0px rgba(212, 175, 55, 0)",
            "0 0 20px rgba(212, 175, 55, 0.5)",
            "0 0 0px rgba(212, 175, 55, 0)",
          ],
        }}
        transition={TRANSITION_PULSE}
      >
        Request Settlement
      </motion.button>
    </motion.div>
  );
}

// Activity Item Type
interface ActivityItem {
  readonly type: string;
  readonly user: string;
  readonly time: string;
  readonly id: number;
  readonly icon: LucideIcon;
  readonly amount?: string;
}

// Enhanced Activities with Live Check-ins and Subscriptions
function AnimatedActivities() {
  const isVisible = useIsVisible();
  const [activities, setActivities] = useState<ActivityItem[]>([
    {
      type: "Check-in",
      user: "John Doe",
      time: "Just now",
      id: 1,
      icon: CheckCircle,
    },
    {
      type: "Check-in",
      user: "Jane Smith",
      time: "2 min ago",
      id: 2,
      icon: CheckCircle,
    },
    {
      type: "Subscription",
      user: "Monthly Pass",
      time: "5 min ago",
      amount: "₹2,000",
      id: 3,
      icon: Star,
    },
  ]);
  const [newActivity, setNewActivity] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const users = [
      "John Doe",
      "Jane Smith",
      "Mike Johnson",
      "Sarah Williams",
      "David Brown",
      "Emma Davis",
    ];
    const types: Array<{ type: string; icon: LucideIcon; amount?: string }> = [
      { type: "Check-in", icon: CheckCircle },
      { type: "Subscription", icon: Star, amount: "₹2,000" },
      { type: "Daily Pass", icon: Calendar, amount: "₹200" },
    ];

    const interval = setInterval(() => {
      setNewActivity(true);
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomType = types[Math.floor(Math.random() * types.length)];
      const newAct: ActivityItem = {
        type: randomType.type,
        user: randomUser,
        time: "Just now",
        id: Date.now(),
        icon: randomType.icon,
        ...(randomType.amount && { amount: randomType.amount }),
      };
      setActivities((prev) => [newAct, ...prev.slice(0, 2)]);
      setTimeout(() => setNewActivity(false), 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <CardContainer color="gold" variant="bordered">
      <CardTitle>Recent Activities</CardTitle>
      <div className="space-y-2 flex-1 overflow-hidden">
        <AnimatePresence>
          {activities.map((activity, index) => (
            <ActivityListItem
              key={activity.id}
              activity={activity}
              index={index}
              isNew={index === 0 && newActivity}
            />
          ))}
        </AnimatePresence>
      </div>
    </CardContainer>
  );
}

// Reusable Activity List Item
function ActivityListItem({
  activity,
  index,
  isNew,
}: Readonly<{ activity: ActivityItem; index: number; isNew: boolean }>) {
  const IconComponent = activity.icon;
  return (
    <motion.div
      className="bg-gold-500/20 rounded-lg p-3 backdrop-blur-sm"
      initial={{ opacity: 0, x: -20, scale: 0.9 }}
      animate={{
        opacity: index === 0 ? 1 : 0.7,
        x: 0,
        scale: index === 0 ? 1.02 : 1,
      }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: DURATION.NORMAL, delay: getStaggerDelay(index) }}
      whileHover={{ scale: 1.05, x: 5 }}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-white flex items-center gap-2">
          <IconComponent className="w-4 h-4 text-gold-400" />
          {activity.type}
          {isNew && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              className="w-2 h-2 bg-gold-400 rounded-full"
            />
          )}
        </span>
        <span className="text-xs text-gray-400">{activity.time}</span>
      </div>
      <div className="text-xs text-gray-400">
        {activity.user}
        {activity.amount && ` - ${activity.amount}`}
      </div>
    </motion.div>
  );
}

// Status Badge Component
function StatusBadge({
  status,
  animate = false,
}: Readonly<{ status: string; animate?: boolean }>) {
  const isActive = status === "Active";
  return (
    <motion.span
      className={`text-xs px-2 py-1 rounded ${
        isActive
          ? "bg-emerald-500/30 text-emerald-300"
          : "bg-gray-500/30 text-gray-400"
      }`}
      animate={isActive && animate ? { opacity: [1, 0.7, 1] } : {}}
      transition={TRANSITION_PULSE}
    >
      {status}
    </motion.span>
  );
}

// Gold Action Button
function GoldActionButton({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <motion.button
      className="bg-gold-500 text-white text-center py-2 rounded-lg text-sm font-semibold w-full mt-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(212, 175, 55, 0)",
          "0 0 20px rgba(212, 175, 55, 0.5)",
          "0 0 0px rgba(212, 175, 55, 0)",
        ],
      }}
      transition={TRANSITION_PULSE}
    >
      {children}
    </motion.button>
  );
}

// Animated QR Code Management
function AnimatedQRManagement() {
  const isVisible = useIsVisible();
  const [qrCodes, setQrCodes] = useState([
    { location: "Main Entrance", status: "Active", id: 1 },
    { location: "Reception", status: "Active", id: 2 },
    { location: "Yoga Studio", status: "Inactive", id: 3 },
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setIsGenerating(true);
      setTimeout(() => {
        setQrCodes((prev) => [
          { location: "Gym Floor", status: "Active", id: Date.now() },
          ...prev.slice(0, 2),
        ]);
        setIsGenerating(false);
      }, 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <CardContainer color="gold" variant="bordered">
      <CardTitle>QR Code Management</CardTitle>
      <div className="space-y-3 flex-1 overflow-hidden">
        <AnimatePresence>
          {qrCodes.map((qr, index) => (
            <motion.div
              key={qr.id}
              className="bg-gold-500/20 rounded-lg p-3 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: getStaggerDelay(index) }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-gold-400" />
                  <span className="text-sm font-semibold">{qr.location}</span>
                </div>
                <StatusBadge status={qr.status} animate />
              </div>
              {index === 0 && isGenerating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-gold-300 flex items-center gap-2"
                >
                  <Spinner className="w-3 h-3" color="gold" />
                  Generating...
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <GoldActionButton>Generate New QR</GoldActionButton>
    </CardContainer>
  );
}

// Animated Venue Management
function AnimatedVenueManagement() {
  const isVisible = useIsVisible();
  const [venues, setVenues] = useState([
    { name: "Elite Fitness", status: "Open", visitors: 45, id: 1 },
    { name: "Yoga Studio", status: "Open", visitors: 23, id: 2 },
    { name: "Swim Center", status: "Closed", visitors: 0, id: 3 },
  ]);
  const isUpdating = useAnimationCycle(4000, 1000);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setVenues((prev) =>
        prev.map((v) => ({
          ...v,
          visitors:
            v.status === "Open"
              ? v.visitors + Math.floor(Math.random() * 3)
              : v.visitors,
        }))
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <CardContainer color="gold">
      <CardTitle>Venue Management</CardTitle>
      <div className="space-y-3 flex-1 overflow-hidden">
        {venues.map((venue, index) => (
          <motion.div
            key={venue.id}
            className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-sm font-semibold">{venue.name}</div>
                <div className="text-xs opacity-80 flex items-center gap-2 mt-1">
                  <motion.span
                    className={`w-2 h-2 rounded-full ${
                      venue.status === "Open" ? "bg-emerald-400" : "bg-gray-400"
                    }`}
                    animate={
                      venue.status === "Open" ? { opacity: [1, 0.5, 1] } : {}
                    }
                    transition={TRANSITION_PULSE}
                  />
                  {venue.status}
                </div>
              </div>
              <motion.div
                className="text-right"
                animate={
                  isUpdating && venue.status === "Open"
                    ? { scale: [1, 1.2, 1] }
                    : {}
                }
                transition={{ duration: DURATION.FAST }}
              >
                <div className="text-xs opacity-80">Current Visitors</div>
                <div className="text-lg font-bold">{venue.visitors}</div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </CardContainer>
  );
}

// Animated Analytics/Reports
function AnimatedAnalytics() {
  const { count: totalRevenue } = useCountUp(245600, 3, 240000, true);
  const { count: avgDaily } = useCountUp(12450, 2, 12000, true);
  const { count: peakHours } = useCountUp(18, 2, 15, true);
  const isUpdating = useAnimationCycle(5000, 500);

  return (
    <CardContainer color="gold" variant="bordered">
      <motion.div
        className="text-lg font-bold text-white mb-4 flex items-center gap-2 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: DELAY.SHORT }}
      >
        <BarChart3 className="w-5 h-5 text-gold-400 flex-shrink-0" />
        <span className="truncate">Analytics & Reports</span>
      </motion.div>
      <StatCard
        label="Total Revenue (Month)"
        value={`₹${totalRevenue.toLocaleString()}`}
        isAnimating={isUpdating}
        color="gold"
        delay={0.3}
      />
      <StatCard
        label="Avg Daily Earnings"
        value={`₹${avgDaily.toLocaleString()}`}
        color="gold"
        delay={0.4}
      />
      <StatCard
        label="Peak Hours Visitors"
        value={`${peakHours} visitors/hr`}
        color="gold"
        delay={0.5}
      />
    </CardContainer>
  );
}

// Customer Status Badge
function CustomerStatusBadge({ status }: Readonly<{ status: string }>) {
  const statusClasses = {
    Active: "bg-emerald-500/30",
    New: "bg-blue-500/30",
    Regular: "bg-gray-500/30",
  };
  return (
    <span
      className={`text-xs px-2 py-1 rounded ${
        statusClasses[status as keyof typeof statusClasses] || "bg-gray-500/30"
      }`}
    >
      {status}
    </span>
  );
}

// Animated Customer Management
function AnimatedCustomerManagement() {
  const isVisible = useIsVisible();
  const [customers, setCustomers] = useState([
    { name: "John Doe", visits: 12, status: "Active", id: 1 },
    { name: "Jane Smith", visits: 8, status: "Active", id: 2 },
    { name: "Mike Johnson", visits: 5, status: "Regular", id: 3 },
  ]);
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setIsNewCustomer(true);
      setTimeout(() => {
        setCustomers((prev) => [
          { name: "Sarah Williams", visits: 1, status: "New", id: Date.now() },
          ...prev.slice(0, 2),
        ]);
        setTimeout(() => setIsNewCustomer(false), 1500);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <CardContainer color="gold">
      <CardTitle>Customer Management</CardTitle>
      <div className="space-y-3 flex-1 overflow-hidden">
        <AnimatePresence>
          {customers.map((customer, index) => (
            <motion.div
              key={customer.id}
              className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: getStaggerDelay(index) }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-gold-200" />
                  <span className="text-sm font-semibold">{customer.name}</span>
                  {index === 0 && isNewCustomer && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.5, 1] }}
                      className="text-xs bg-emerald-500/50 px-2 py-0.5 rounded"
                    >
                      New
                    </motion.span>
                  )}
                </div>
                <CustomerStatusBadge status={customer.status} />
              </div>
              <div className="text-xs opacity-80">
                Total Visits: {customer.visits}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </CardContainer>
  );
}

// Subscription Item Component
interface SubscriptionItem {
  readonly user: string;
  readonly plan: string;
  readonly daysLeft: number;
  readonly amount: string;
  readonly id: number;
}

function SubscriptionCard({
  sub,
  index,
  isNew,
}: Readonly<{ sub: SubscriptionItem; index: number; isNew: boolean }>) {
  const isExpiring = sub.daysLeft <= 7;
  return (
    <motion.div
      className={`rounded-lg p-3 backdrop-blur-sm ${
        isExpiring
          ? "bg-orange-500/20 border border-orange-400/40"
          : "bg-gold-500/20 border border-gold-400/30"
      }`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay: getStaggerDelay(index) }}
      whileHover={{ scale: 1.05, x: 5 }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-sm font-semibold text-white flex items-center gap-2">
            {sub.user}
            {isNew && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                className="text-xs bg-emerald-500/50 px-2 py-0.5 rounded"
              >
                New
              </motion.span>
            )}
          </div>
          <div className="text-xs opacity-80 mt-1">{sub.plan} Plan</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-gold-300">{sub.amount}</div>
          <div
            className={`text-xs ${
              isExpiring ? "text-orange-300" : "text-gray-400"
            }`}
          >
            {sub.daysLeft} days left
          </div>
        </div>
      </div>
      {isExpiring && (
        <motion.div
          className="text-xs text-orange-300 flex items-center gap-1 mt-2"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: DURATION.EXTRA_SLOW, repeat: Infinity }}
        >
          <Clock className="w-3 h-3" />
          Expiring soon
        </motion.div>
      )}
    </motion.div>
  );
}

// Animated Subscriptions Management
function AnimatedSubscriptionsManagement() {
  const isVisible = useIsVisible();
  const [subscriptions, setSubscriptions] = useState<SubscriptionItem[]>([
    {
      user: "John Doe",
      plan: "Monthly",
      daysLeft: 15,
      amount: "₹2,000",
      id: 1,
    },
    { user: "Jane Smith", plan: "Weekly", daysLeft: 3, amount: "₹500", id: 2 },
    {
      user: "Mike Johnson",
      plan: "Monthly",
      daysLeft: 28,
      amount: "₹2,000",
      id: 3,
    },
  ]);
  const [isNewSubscription, setIsNewSubscription] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const users = ["Sarah Williams", "David Brown", "Emma Davis", "Robert Lee"];
    const plans = ["Monthly", "Weekly", "Quarterly"] as const;
    const planDetails = {
      Monthly: { days: 30, amount: "₹2,000" },
      Weekly: { days: 7, amount: "₹500" },
      Quarterly: { days: 90, amount: "₹5,000" },
    };

    const interval = setInterval(() => {
      setIsNewSubscription(true);
      setTimeout(() => {
        const randomPlan = plans[Math.floor(Math.random() * plans.length)];
        const { days, amount } = planDetails[randomPlan];
        setSubscriptions((prev) => [
          {
            user: users[Math.floor(Math.random() * users.length)],
            plan: randomPlan,
            daysLeft: days,
            amount,
            id: Date.now(),
          },
          ...prev.slice(0, 2),
        ]);
        setTimeout(() => setIsNewSubscription(false), 1500);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <CardContainer color="gold" variant="bordered">
      <motion.div
        className="text-lg font-bold text-white mb-4 flex items-center gap-2 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: DELAY.SHORT }}
      >
        <Star className="w-5 h-5 text-gold-400 flex-shrink-0" />
        <span className="truncate">Subscriptions</span>
      </motion.div>
      <div className="space-y-3 flex-1 overflow-hidden">
        <AnimatePresence>
          {subscriptions.map((sub, index) => (
            <SubscriptionCard
              key={sub.id}
              sub={sub}
              index={index}
              isNew={index === 0 && isNewSubscription}
            />
          ))}
        </AnimatePresence>
      </div>
      <motion.div
        className="bg-gold-500/20 rounded-lg p-2 mt-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: DELAY.MEDIUM }}
      >
        <div className="text-xs opacity-80 text-center">
          Total Active: {subscriptions.length}
        </div>
      </motion.div>
    </CardContainer>
  );
}

// Animated Business with Active Subscriptions and Expiring Passes
function AnimatedBusiness() {
  const isVisible = useIsVisible();
  const { count: activeSubscriptions, reset: resetSubs } = useCountUp(
    127,
    2,
    120,
    true
  );
  const { count: expiringPasses, reset: resetExpiring } = useCountUp(
    8,
    2,
    5,
    true
  );
  const [isNewSubscription, setIsNewSubscription] = useState(false);
  const [isPassExpiring, setIsPassExpiring] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const subInterval = setInterval(() => {
      setIsNewSubscription(true);
      setTimeout(() => {
        resetSubs();
        setTimeout(() => setIsNewSubscription(false), 500);
      }, 1000);
    }, 6000);
    const expiringInterval = setInterval(() => {
      setIsPassExpiring(true);
      setTimeout(() => {
        resetExpiring();
        setTimeout(() => setIsPassExpiring(false), 500);
      }, 1000);
    }, 8000);
    return () => {
      clearInterval(subInterval);
      clearInterval(expiringInterval);
    };
  }, [isVisible, resetSubs, resetExpiring]);

  return (
    <CardContainer color="gold">
      <CardTitle>Business Overview</CardTitle>
      <StatCard
        label="Active Subscriptions"
        value={activeSubscriptions}
        isAnimating={isNewSubscription}
        incrementText="+1"
        icon={Star}
        color="gold"
        delay={0.3}
      />
      <StatCard
        label="Passes Expiring (2-4 days)"
        value={expiringPasses}
        isAnimating={isPassExpiring}
        incrementText="⚠️"
        icon={Calendar}
        color="gold"
        delay={0.4}
      />
      <motion.div
        className="bg-white/20 rounded-lg p-3 mb-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: DELAY.MEDIUM_LONG }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Per-Visit Price</div>
        <motion.div
          className="text-xl font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={TRANSITION_PULSE}
        >
          ₹200
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: DELAY.LONG }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs opacity-80 mb-1">Location</div>
        <div className="text-sm font-semibold">Elite Fitness Center</div>
        <div className="text-xs opacity-80">Delhi, India</div>
      </motion.div>
    </CardContainer>
  );
}

// Screen Card Component with enhanced animations
function ScreenCard({ screen, index, isInView, delay }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: false, margin: "0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        cardInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.5,
        delay: delay * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      style={{ willChange: "transform, opacity" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white p-4 md:p-10 rounded-3xl shadow-lg border border-gray-200 relative overflow-hidden group gpu-accelerated hover:shadow-xl transition-shadow duration-300"
    >
      {/* Enhanced animated background glow */}
      <motion.div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          screen.color === "emerald" ? "bg-emerald-50" : "bg-amber-50"
        }`}
        animate={
          isHovered
            ? {
                scale: [1, 1.02, 1],
              }
            : {}
        }
        transition={{ duration: DURATION.LOOP_MEDIUM, repeat: Infinity }}
      />

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100"
        animate={isHovered ? { x: ["-100%", "200%"] } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner accent */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 ${
          screen.color === "emerald" ? "bg-emerald-100" : "bg-amber-100"
        } rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
      />

      {/* Enhanced Icon with premium animation */}
      <motion.div
        className={`w-16 h-16 md:w-20 md:h-20 ${
          screen.color === "emerald"
            ? "bg-emerald-500"
            : "bg-amber-500"
        } rounded-2xl flex items-center justify-center mb-4 md:mb-6 relative mx-auto group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
        transition={{ duration: DURATION.SLOW, ease: EASE_IN_OUT }}
      >
        <screen.icon
          className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10"
        />
      </motion.div>

      <motion.h4
        className={`text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-center relative z-10 group-hover:scale-105 transition-transform ${
          screen.color === "emerald"
            ? "text-[#1d1d1f] group-hover:text-emerald-600"
            : "text-[#1d1d1f] group-hover:text-amber-600"
        }`}
        initial={{ opacity: 0 }}
        animate={cardInView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.1 }}
      >
        {screen.title}
      </motion.h4>
      <motion.p
        className="text-[#86868b] mb-4 md:mb-8 leading-relaxed text-center relative z-10 text-sm md:text-base md:min-h-[72px]"
        initial={{ opacity: 0 }}
        animate={cardInView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.15 }}
      >
        {screen.description}
      </motion.p>

      {/* Animated mockup container - consistent aspect ratio for all cards */}
      <motion.div
        className="relative md:aspect-[9/16] mt-auto overflow-hidden md:overflow-visible"
        whileHover={{ scale: 1.03 }}
        transition={SPRING_DEFAULT}
      >
        <motion.div
          className="w-full h-full relative z-10"
          animate={
            isHovered
              ? {
                  y: [0, -8, 0],
                }
              : {}
          }
          transition={{ duration: DURATION.LOOP_MEDIUM, repeat: Infinity, ease: EASE_IN_OUT }}
        >
          <VisibilityContext.Provider value={cardInView}>
            {screen.mockup}
          </VisibilityContext.Provider>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface ScreenshotShowcaseProps {
  readonly showUser?: boolean;
  readonly showPartner?: boolean;
}

export default function ScreenshotShowcase({
  showUser = true,
  showPartner = true,
}: ScreenshotShowcaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [1, 1, 1, 0.8]
  );

  const userScreens = [
    {
      title: "Intelligent Discovery",
      description:
        "AI-powered venue discovery with real-time availability and proximity-based recommendations within 100m radius",
      icon: Smartphone,
      color: "emerald",
      mockup: <AnimatedHomeScreen />,
    },
    {
      title: "Seamless Check-In",
      description:
        "One-tap QR code scanning with instant verification and automated attendance tracking",
      icon: QrCode,
      color: "emerald",
      mockup: <AnimatedCheckIn />,
    },
    {
      title: "Gamified Engagement",
      description:
        "Real-time streak tracking, global leaderboards, and achievement system driving 3x user retention",
      icon: TrendingUp,
      color: "emerald",
      mockup: <AnimatedDashboard />,
    },
    {
      title: "Smart Wallet System",
      description:
        "Transparent transaction history, instant top-ups, and automated pay-per-day deductions with real-time updates",
      icon: Wallet,
      color: "emerald",
      mockup: <AnimatedWallet />,
    },
    {
      title: "Advanced Booking",
      description:
        "Reserve slots at premium venues with live availability, instant confirmations, and automated reminders",
      icon: Calendar,
      color: "emerald",
      mockup: <AnimatedBooking />,
    },
    {
      title: "Personalized Analytics",
      description:
        "Comprehensive fitness journey tracking with detailed insights, progress metrics, and social rankings",
      icon: Users,
      color: "emerald",
      mockup: <AnimatedProfile />,
    },
  ];

  const partnerScreens = [
    {
      title: "Executive Dashboard",
      description:
        "Real-time revenue tracking, visitor analytics, and performance metrics with live updates on earnings, clients and check-ins",
      icon: Building2,
      color: "gold",
      mockup: <AnimatedPartnerDashboard />,
    },
    {
      title: "Revenue Management",
      description:
        "Automated earnings tracking, instant settlement requests, and comprehensive transaction history with bank-level security",
      icon: Wallet,
      color: "gold",
      mockup: <AnimatedPartnerWallet />,
    },
    {
      title: "Live Activity Monitor",
      description:
        "Real-time feed of all customer interactions: check-ins, subscriptions, and pass purchases with instant notifications",
      icon: Activity,
      color: "gold",
      mockup: <AnimatedActivities />,
    },
    {
      title: "QR Code Infrastructure",
      description:
        "Enterprise-grade QR code generation and management system for seamless check-ins across all venue locations",
      icon: QrCode,
      color: "gold",
      mockup: <AnimatedQRManagement />,
    },
    {
      title: "Multi-Location Control",
      description:
        "Centralized management platform for multiple venues with real-time visitor tracking and capacity monitoring",
      icon: MapPin,
      color: "gold",
      mockup: <AnimatedVenueManagement />,
    },
    {
      title: "Business Intelligence",
      description:
        "Advanced analytics suite with revenue forecasting, peak hour analysis, and data-driven insights for growth",
      icon: BarChart3,
      color: "gold",
      mockup: <AnimatedAnalytics />,
    },
    {
      title: "Customer Relationship",
      description:
        "Comprehensive customer database with visit history, engagement metrics, and automated retention tools",
      icon: UserCheck,
      color: "gold",
      mockup: <AnimatedCustomerManagement />,
    },
    {
      title: "Subscription Lifecycle",
      description:
        "End-to-end subscription management with automated renewals, expiration alerts, and revenue optimization",
      icon: Star,
      color: "gold",
      mockup: <AnimatedSubscriptionsManagement />,
    },
    {
      title: "Business Operations",
      description:
        "Complete business overview with active subscriptions, expiring passes, dynamic pricing, and location management",
      icon: Building2,
      color: "gold",
      mockup: <AnimatedBusiness />,
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="py-16 md:py-24 bg-[#f5f5f7] relative overflow-hidden"
    >
      {/* Optimized floating cloud background */}
      <FloatingClouds />

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATION.MEDIUM, ease: EASE_EXPO }}
          className="text-center mb-12 gpu-accelerated"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-[-0.02em] gpu-accelerated"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ willChange: "transform, opacity" }}
          >
            Explore Our{" "}
            <span className="text-emerald-500">
              Apps
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-[#86868b] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: DURATION.MEDIUM, delay: DELAY.SHORT }}
          >
            Experience the future of fitness access through interactive
            demonstrations
          </motion.p>
        </motion.div>

        {/* User App Screenshots */}
        {showUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: DURATION.VERY_SLOW, delay: DELAY.MEDIUM_SHORT }}
            className="mb-16"
          >
            <motion.h3
              className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-12 text-center tracking-[-0.01em]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION.NORMAL, delay: DELAY.SHORT }}
            >
              For <span className="text-emerald-500">Fitness Enthusiasts</span>
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userScreens.map((screen, index) => (
                <ScreenCard
                  key={screen.title}
                  screen={screen}
                  index={index}
                  isInView={isInView}
                  delay={0.3 + index * 0.08}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Partner App Screenshots */}
        {showPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: DURATION.NORMAL, delay: DELAY.LONG }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-12 text-center tracking-[-0.01em]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION.NORMAL, delay: DELAY.VERY_LONG }}
            >
              For <span className="text-amber-500">Fitness Businesses</span>
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerScreens.map((screen, index) => (
                <ScreenCard
                  key={screen.title}
                  screen={screen}
                  index={index}
                  isInView={isInView}
                  delay={0.8 + index * 0.08}
                />
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
