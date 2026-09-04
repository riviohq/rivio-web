/**
 * ISO publication dates for updates shown on `/pulse/` (newest first).
 * When you add a post at the top of `RELEASES` in `app/pulse/page.tsx`, add
 * the same date string here so the sitemap `lastModified` for `/pulse/` stays accurate.
 *
 * After updating: redeploy, then in Google Search Console use “Sitemaps” to resubmit
 * `https://rivioapp.com/sitemap.xml` (or URL Inspection on `/pulse/`).
 */
export const PULSE_PUBLICATION_DATES_ISO_NEWEST_FIRST = [
  "2026-08-20",
  "2026-07-22",
  "2026-06-18",
  "2026-05-12",
  "2026-04-14",
  "2026-03-10",
] as const;

/** Sitemap & crawlers: use the most recent post date as the page’s last update. */
export function getPulsePageLastModified(): Date {
  const newest = PULSE_PUBLICATION_DATES_ISO_NEWEST_FIRST[0];
  return new Date(`${newest}T12:00:00.000Z`);
}
