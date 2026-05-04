/** Official store listings — App Store + Google Play (defaults; override with NEXT_PUBLIC_* if needed). */
export const APP_STORE_URL_USER =
  "https://apps.apple.com/in/app/rivio-gym-yoga-sports/id6761522547";

export const APP_STORE_URL_BUSINESS =
  "https://apps.apple.com/in/app/rivio-partner-business-app/id6761448714";

const DEFAULT_GOOGLE_PLAY_USER =
  "https://play.google.com/store/apps/details?id=com.rivio.app";

const DEFAULT_GOOGLE_PLAY_BUSINESS =
  "https://play.google.com/store/apps/details?id=com.rivio.partner";

export const GOOGLE_PLAY_URL_USER =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_USER_URL?.trim() || DEFAULT_GOOGLE_PLAY_USER;

export const GOOGLE_PLAY_URL_BUSINESS =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_BUSINESS_URL?.trim() ||
  DEFAULT_GOOGLE_PLAY_BUSINESS;

export const hasGooglePlayUser = GOOGLE_PLAY_URL_USER.length > 0;
export const hasGooglePlayBusiness = GOOGLE_PLAY_URL_BUSINESS.length > 0;
