import { MetadataRoute } from "next";
import { getLatestNewsPageLastModified } from "@/lib/latestPublicationDates";
import { SITE_CONTENT_UPDATED_DATE, SITE_URL } from "@/lib/siteContent";

/**
 * Production sitemap for Google Search Console & Bing Webmaster Tools.
 * Submit once: https://search.google.com/search-console → Sitemaps → {SITE_URL}/sitemap.xml
 *
 * After deploy: request indexing for `/` and `/latest/` if you ship a major update.
 * Keep `lib/latestPublicationDates.ts` in sync when you add posts on `/latest/`.
 */

const defaultLastModified = (() => {
  const envDate = process.env.BUILD_DATE || process.env.SITEMAP_LAST_MODIFIED;
  if (envDate) {
    const d = new Date(envDate);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return new Date(`${SITE_CONTENT_UPDATED_DATE}T12:00:00.000Z`);
})();

const contentRefresh = new Date(`${SITE_CONTENT_UPDATED_DATE}T12:00:00.000Z`);

type Change = MetadataRoute.Sitemap[number]["changeFrequency"];

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: Change;
  lastModified?: Date;
};

const ROUTES: RouteEntry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly", lastModified: contentRefresh },
  {
    path: "/download/",
    priority: 0.98,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/latest/",
    priority: 0.97,
    changeFrequency: "daily",
    lastModified: getLatestNewsPageLastModified(),
  },
  { path: "/founder/", priority: 0.92, changeFrequency: "monthly" },
  { path: "/partners/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/business/partner-program/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/features/", priority: 0.85, changeFrequency: "monthly" },
  { path: "/features/member-app/", priority: 0.88, changeFrequency: "monthly" },
  { path: "/features/business-app/", priority: 0.88, changeFrequency: "monthly" },
  { path: "/features/partner/", priority: 0.82, changeFrequency: "monthly" },
  { path: "/features/user/", priority: 0.82, changeFrequency: "monthly" },
  { path: "/business/about-us/", priority: 0.72, changeFrequency: "monthly" },
  { path: "/members/about-us/", priority: 0.72, changeFrequency: "monthly" },
  { path: "/partner/about/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/user/about/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/business/support/", priority: 0.62, changeFrequency: "monthly" },
  { path: "/members/support/", priority: 0.62, changeFrequency: "monthly" },
  { path: "/partner/help/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/user/help/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/business/privacy-policy/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/business/terms-conditions/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/members/privacy-policy/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/members/terms-conditions/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/partner/privacy/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/partner/terms/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/user/privacy/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/user/terms/", priority: 0.48, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sorted = [...ROUTES].sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return a.path.localeCompare(b.path);
  });

  return sorted.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: lastModified ?? defaultLastModified,
    changeFrequency,
    priority,
  }));
}
