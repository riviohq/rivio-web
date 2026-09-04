/** Lightweight client-side OS detection for store redirects (QR landing, etc.). */
export type Platform = "ios" | "android" | "other";

/**
 * Detects the visitor's mobile OS from the user agent.
 * Returns "other" on desktop or during SSR (no `navigator`).
 */
export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";

  const ua = navigator.userAgent || (navigator as unknown as { vendor?: string }).vendor || "";

  if (/android/i.test(ua)) return "android";

  // iPadOS 13+ reports as "Macintosh"; distinguish real Macs via touch support.
  const isIPadOS = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  if (/iPad|iPhone|iPod/.test(ua) || isIPadOS) return "ios";

  return "other";
}

export type StoreLinks = { ios: string; android: string };

/** One store URL per device — Android → Play Store, everything else → App Store. */
export function resolveStoreUrl(platform: Platform, links: StoreLinks): string {
  return platform === "android" ? links.android : links.ios;
}
