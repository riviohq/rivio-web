/**
 * Centralized Animation Timing Constants
 * All animation durations, delays, and easing curves should be defined here
 * for consistency across the application.
 */

// =============================================================================
// EASING CURVES
// =============================================================================

/** Expo easing - smooth acceleration/deceleration */
export const EASE_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Smooth easing - gentle transitions */
export const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.6, 1];

/** Standard easing strings */
export const EASE_IN_OUT = "easeInOut" as const;
export const EASE_OUT = "easeOut" as const;
export const EASE_LINEAR = "linear" as const;

// =============================================================================
// SPRING CONFIGURATIONS
// =============================================================================

/** Default spring config for general animations */
export const SPRING_DEFAULT = { 
  type: "spring" as const, 
  stiffness: 400, 
  damping: 25 
};

/** Soft spring config for subtle animations */
export const SPRING_SOFT = { 
  type: "spring" as const, 
  stiffness: 150, 
  damping: 15 
};

/** Bouncy spring config for interactive elements */
export const SPRING_BOUNCY = { 
  type: "spring" as const, 
  stiffness: 200, 
  damping: 20 
};

// =============================================================================
// DURATIONS (in seconds)
// =============================================================================

export const DURATION = {
  /** Ultra fast - micro interactions (0.2s) */
  INSTANT: 0.2,
  
  /** Fast - quick feedback (0.3s) */
  FAST: 0.3,
  
  /** Medium-fast - button hovers, toggles (0.4s) */
  MEDIUM_FAST: 0.4,
  
  /** Normal - standard transitions (0.5s) */
  NORMAL: 0.5,
  
  /** Medium - content reveals (0.6s) */
  MEDIUM: 0.6,
  
  /** Slow - section transitions (0.8s) */
  SLOW: 0.8,
  
  /** Very slow - major reveals (1s) */
  VERY_SLOW: 1,
  
  /** Extra slow - dramatic entrances (1.5s) */
  EXTRA_SLOW: 1.5,
  
  // Looping animation durations
  /** Infinite loop - fast pulse (2s) */
  LOOP_FAST: 2,
  
  /** Infinite loop - medium pulse (2.5s) */
  LOOP_MEDIUM: 2.5,
  
  /** Infinite loop - slow pulse (3s) */
  LOOP_SLOW: 3,
  
  /** Infinite loop - glow effects (4s) */
  LOOP_GLOW: 4,
  
  /** Infinite loop - floating elements (5s) */
  LOOP_FLOAT: 5,
  
  /** Infinite loop - background orbs (8s) */
  LOOP_ORB: 8,
  
  /** Infinite loop - ambient background (15-21s) */
  LOOP_AMBIENT: 15,
  
  /** Infinite loop - slow background (20s) */
  LOOP_BACKGROUND: 20,
  
  /** Infinite loop - slowest background (30s) */
  LOOP_BACKGROUND_SLOW: 30,
} as const;

// =============================================================================
// DELAYS (in seconds)
// =============================================================================

export const DELAY = {
  /** No delay */
  NONE: 0,
  
  /** Tiny delay (0.05s) */
  TINY: 0.05,
  
  /** Very short delay (0.1s) */
  VERY_SHORT: 0.1,
  
  /** Short delay (0.2s) */
  SHORT: 0.2,
  
  /** Medium-short delay (0.3s) */
  MEDIUM_SHORT: 0.3,
  
  /** Medium delay (0.4s) */
  MEDIUM: 0.4,
  
  /** Medium-long delay (0.5s) */
  MEDIUM_LONG: 0.5,
  
  /** Long delay (0.6s) */
  LONG: 0.6,
  
  /** Very long delay (0.7s) */
  VERY_LONG: 0.7,
  
  /** Extra long delay (0.8s) */
  EXTRA_LONG: 0.8,
  
  /** Stagger base for sequential items */
  STAGGER: 0.1,
  
  /** Stagger small for fast sequences */
  STAGGER_SMALL: 0.05,
  
  /** Stagger medium for normal sequences */
  STAGGER_MEDIUM: 0.08,
  
  /** Stagger large for slow sequences */
  STAGGER_LARGE: 0.15,
} as const;

// =============================================================================
// SECTION DELAYS (for page sections appearing in sequence)
// =============================================================================

export const SECTION_DELAY = {
  FIRST: 0.1,
  SECOND: 0.2,
  THIRD: 0.3,
  FOURTH: 0.4,
  FIFTH: 0.5,
  SIXTH: 0.6,
  SEVENTH: 0.7,
  EIGHTH: 0.8,
} as const;

// =============================================================================
// PROBLEM STATEMENT DELAYS (specific to ProblemStatement component)
// =============================================================================

export const PROBLEM_DELAY = {
  SECTION_START: 1.2,
  HEADING: 1.3,
  BADGE: 1.4,
  STAT_1: 1.4,
  STAT_2: 1.5,
  STAT_3: 1.6,
  DIVIDER: 1.5,
  PARAGRAPH_1: 1.7,
  PARAGRAPH_2: 1.8,
  PARAGRAPH_3: 1.9,
  SOLUTION: 2,
  SOLUTION_TITLE: 2.1,
  SOLUTION_TEXT_1: 2.2,
  SOLUTION_TEXT_2: 2.3,
} as const;

// =============================================================================
// TRANSITION PRESETS
// =============================================================================

/** Standard fade-in transition */
export const TRANSITION_FADE_IN = {
  duration: DURATION.MEDIUM,
  ease: EASE_EXPO,
};

/** Standard fade-in with short delay */
export const TRANSITION_FADE_IN_DELAY = {
  duration: DURATION.MEDIUM,
  delay: DELAY.SHORT,
  ease: EASE_EXPO,
};

/** Slow reveal transition */
export const TRANSITION_REVEAL = {
  duration: DURATION.SLOW,
  ease: EASE_EXPO,
};

/** Infinite pulse animation */
export const TRANSITION_PULSE = {
  duration: DURATION.LOOP_FAST,
  repeat: Infinity,
  ease: EASE_IN_OUT,
};

/** Infinite glow animation */
export const TRANSITION_GLOW = {
  duration: DURATION.LOOP_GLOW,
  repeat: Infinity,
  ease: EASE_SMOOTH,
};

/** Infinite float animation */
export const TRANSITION_FLOAT = {
  duration: DURATION.LOOP_FLOAT,
  repeat: Infinity,
  ease: EASE_SMOOTH,
};

/** Infinite linear rotation */
export const TRANSITION_ROTATE = {
  duration: DURATION.LOOP_SLOW,
  repeat: Infinity,
  ease: EASE_LINEAR,
};

/** Background orb floating */
export const TRANSITION_ORB = {
  duration: DURATION.LOOP_ORB,
  repeat: Infinity,
  ease: EASE_IN_OUT,
};

/** Slow background animation */
export const TRANSITION_BACKGROUND = {
  duration: DURATION.LOOP_BACKGROUND,
  repeat: Infinity,
  ease: EASE_LINEAR,
};

// =============================================================================
// ANIMATION VARIANTS (for framer-motion)
// =============================================================================

/** Standard fade in up animation */
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/** Standard fade in animation */
export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

/** Scale in animation */
export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

/** Slide in from left */
export const SLIDE_IN_LEFT = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

/** Slide in from right */
export const SLIDE_IN_RIGHT = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Generate staggered delay for list items
 */
export const getStaggerDelay = (
  index: number, 
  baseDelay: number = 0, 
  stagger: number = DELAY.STAGGER
): number => baseDelay + index * stagger;

/**
 * Generate transition with staggered delay
 */
export const getStaggerTransition = (
  index: number,
  baseDelay: number = 0,
  duration: number = DURATION.NORMAL
) => ({
  duration,
  delay: getStaggerDelay(index, baseDelay),
  ease: EASE_EXPO,
});

/**
 * Generate background orb animation duration
 */
export const getOrbDuration = (
  index: number,
  baseDuration: number = DURATION.LOOP_AMBIENT,
  increment: number = 3
): number => baseDuration + index * increment;

/**
 * Generate background orb delay
 */
export const getOrbDelay = (
  index: number,
  increment: number = 1.5
): number => index * increment;

