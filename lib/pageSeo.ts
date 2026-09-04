import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteContent";

/**
 * Build unique, index-friendly metadata for a page.
 * Pass a concise `title` (no brand suffix); the root layout template appends " | RIVIO".
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = `${title} | RIVIO`;
  return {
    title: { absolute: ogTitle },
    description,
    ...(keywords && keywords.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "website",
      siteName: "RIVIO",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
