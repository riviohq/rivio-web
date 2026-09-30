import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteContent";

/**
 * robots.txt — allow full crawl; point bots at the generated sitemap.
 * `/get-the-app/` is noindex via page metadata. `/latest/` redirects to `/pulse/`
 * and is omitted from the sitemap (not blocked here so the redirect can be followed).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
