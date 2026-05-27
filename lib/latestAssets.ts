/**
 * Latest post cover images — PNG posters in `public/assets/latest/`.
 *
 * To update a post cover: replace the PNG file at the same path (keep filename).
 * Then update `RELEASES` in `app/latest/page.tsx` if you add a new post/date.
 * Sync dates in `lib/latestPublicationDates.ts` for sitemap lastModified.
 */
export const LATEST_ASSETS = {
  /** May 26, 2026 — 10 partner venues milestone */
  "2026-05-26-partners-milestone": "/assets/latest/2026-05-26-partners-milestone.png",
} as const;

export type LatestAssetKey = keyof typeof LATEST_ASSETS;

export function latestCoverPath(key: LatestAssetKey): string {
  return LATEST_ASSETS[key];
}
