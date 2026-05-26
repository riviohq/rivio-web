import type { ReactNode } from "react";
import { aboutPageJsonLd, aboutPageMetadata } from "@/lib/aboutPageSeo";

export const metadata = aboutPageMetadata("business", "/business/about-us/");

export default function BusinessAboutLayout({ children }: { children: ReactNode }) {
  const jsonLd = aboutPageJsonLd("business", "/business/about-us/");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
