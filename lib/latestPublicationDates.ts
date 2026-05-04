/**
 * ISO publication dates for updates shown on `/latest/` (newest first).
 * When you add a post at the top of `RELEASES` in `app/latest/page.tsx`, add
 * the same date string here so the sitemap `lastModified` for `/latest/` stays accurate.
 *
 * After updating: redeploy, then in Google Search Console use “Sitemaps” to resubmit
 * `https://rivioapp.com/sitemap.xml` (or URL Inspection on `/latest/`).
 */
export const LATEST_PUBLICATION_DATES_ISO_NEWEST_FIRST = [
  "2026-05-04",
  "2026-04-29",
  "2026-03-17",
  "2026-03-03",
  "2026-02-01",
] as const;

/** Sitemap & crawlers: use the most recent post date as the page’s last update. */
export function getLatestNewsPageLastModified(): Date {
  const newest = LATEST_PUBLICATION_DATES_ISO_NEWEST_FIRST[0];
  return new Date(`${newest}T12:00:00.000Z`);
}
