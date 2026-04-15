/** Official store listings — update Play URLs when Android builds are public. */
export const APP_STORE_URL_USER =
  "https://apps.apple.com/in/app/rivio-gym-yoga-sports/id6761522547";

export const APP_STORE_URL_BUSINESS =
  "https://apps.apple.com/in/app/rivio-partner-business-app/id6761448714";

export const GOOGLE_PLAY_URL_USER =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_USER_URL?.trim() ?? "";

export const GOOGLE_PLAY_URL_BUSINESS =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_BUSINESS_URL?.trim() ?? "";

export const hasGooglePlayUser = GOOGLE_PLAY_URL_USER.length > 0;
export const hasGooglePlayBusiness = GOOGLE_PLAY_URL_BUSINESS.length > 0;
