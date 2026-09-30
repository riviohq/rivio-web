import { MetadataRoute } from "next";
import { getPulsePageLastModified } from "@/lib/pulsePublicationDates";
import { SITE_CONTENT_UPDATED_DATE, SITE_URL } from "@/lib/siteContent";

/**
 * Production sitemap for Google Search Console & Bing Webmaster Tools.
 * Live URL: https://rivioapp.com/sitemap.xml
 *
 * SEO rules for this file:
 * - Only indexable, canonical URLs (trailing slash matches next.config).
 * - Skip redirects (`/latest/`) and noindex landings (`/get-the-app/`).
 * - `lastModified` must move when page copy or Pulse posts ship.
 * - Keep `lib/pulsePublicationDates.ts` and `SITE_CONTENT_UPDATED_DATE` in sync.
 *
 * After deploy: resubmit sitemap in Search Console; request indexing for `/`,
 * `/pulse/`, `/features/`, and About pages when content changes.
 */

const contentRefresh = new Date(`${SITE_CONTENT_UPDATED_DATE}T12:00:00.000Z`);

const defaultLastModified = (() => {
  const envDate = process.env.BUILD_DATE || process.env.SITEMAP_LAST_MODIFIED;
  if (envDate) {
    const d = new Date(envDate);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return contentRefresh;
})();

const pulseLastModified = getPulsePageLastModified();

type Change = MetadataRoute.Sitemap[number]["changeFrequency"];

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: Change;
  lastModified?: Date;
};

/**
 * Priority map (rough intent for crawlers):
 * 1.00 home · 0.98 download · 0.97 pulse · 0.95 partner CTA ·
 * 0.92–0.94 about / founder · 0.88–0.90 features · help/support · legal lower.
 */
const ROUTES: RouteEntry[] = [
  // Core discovery
  { path: "/", priority: 1, changeFrequency: "weekly", lastModified: contentRefresh },
  {
    path: "/download/",
    priority: 0.98,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/pulse/",
    priority: 0.97,
    changeFrequency: "daily",
    lastModified: pulseLastModified,
  },

  // Partner acquisition
  {
    path: "/partner-with-rivio/",
    priority: 0.95,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  { path: "/founder/", priority: 0.94, changeFrequency: "weekly", lastModified: contentRefresh },

  // About (member + partner) — refreshed with My Progress & Manage Team
  {
    path: "/members/about-us/",
    priority: 0.93,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/business/about-us/",
    priority: 0.93,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/user/about/",
    priority: 0.9,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/partner/about/",
    priority: 0.9,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },

  // Product / features (gym finder + workout tracker + Partner Team)
  {
    path: "/features/",
    priority: 0.9,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/features/member-app/",
    priority: 0.89,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/features/business-app/",
    priority: 0.89,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/features/user/",
    priority: 0.86,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/features/partner/",
    priority: 0.86,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },

  // Partner program aliases
  {
    path: "/partners/",
    priority: 0.88,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
  {
    path: "/business/partner-program/",
    priority: 0.88,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },

  // Help / support (Progress + Team FAQs)
  {
    path: "/members/support/",
    priority: 0.72,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/business/support/",
    priority: 0.72,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/user/help/",
    priority: 0.7,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },
  {
    path: "/partner/help/",
    priority: 0.7,
    changeFrequency: "weekly",
    lastModified: contentRefresh,
  },

  // Legal — updated for My Progress / Team data practices
  {
    path: "/members/privacy-policy/",
    priority: 0.5,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
  {
    path: "/members/terms-conditions/",
    priority: 0.5,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
  {
    path: "/business/privacy-policy/",
    priority: 0.5,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
  {
    path: "/business/terms-conditions/",
    priority: 0.5,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
  {
    path: "/user/privacy/",
    priority: 0.48,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
  {
    path: "/user/terms/",
    priority: 0.48,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
  {
    path: "/partner/privacy/",
    priority: 0.48,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
  {
    path: "/partner/terms/",
    priority: 0.48,
    changeFrequency: "monthly",
    lastModified: contentRefresh,
  },
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
