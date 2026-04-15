import { MetadataRoute } from "next";
import { SITE_CONTENT_UPDATED_DATE } from "@/lib/siteContent";

const BASE_URL = "https://rivioapp.com";

const lastModified = (() => {
  const envDate = process.env.BUILD_DATE || process.env.SITEMAP_LAST_MODIFIED;
  if (envDate) {
    const d = new Date(envDate);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return new Date(`${SITE_CONTENT_UPDATED_DATE}T12:00:00.000Z`);
})();

type Change = MetadataRoute.Sitemap[number]["changeFrequency"];

const ROUTES: { path: string; priority: number; changeFrequency: Change }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/download/", priority: 0.95, changeFrequency: "weekly" },
  { path: "/founder/", priority: 0.92, changeFrequency: "monthly" },
  { path: "/partners/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/features/", priority: 0.85, changeFrequency: "monthly" },
  { path: "/features/member-app/", priority: 0.88, changeFrequency: "monthly" },
  { path: "/features/business-app/", priority: 0.88, changeFrequency: "monthly" },
  { path: "/features/partner/", priority: 0.82, changeFrequency: "monthly" },
  { path: "/features/user/", priority: 0.82, changeFrequency: "monthly" },
  { path: "/business/partner-program/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/business/about-us/", priority: 0.72, changeFrequency: "monthly" },
  { path: "/business/support/", priority: 0.62, changeFrequency: "monthly" },
  { path: "/business/privacy-policy/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/business/terms-conditions/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/members/about-us/", priority: 0.72, changeFrequency: "monthly" },
  { path: "/members/support/", priority: 0.62, changeFrequency: "monthly" },
  { path: "/members/privacy-policy/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/members/terms-conditions/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/partner/about/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/partner/help/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partner/privacy/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/partner/terms/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/user/about/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/user/help/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/user/privacy/", priority: 0.48, changeFrequency: "yearly" },
  { path: "/user/terms/", priority: 0.48, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
