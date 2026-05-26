import type { ReactNode } from "react";
import { aboutPageJsonLd, aboutPageMetadata } from "@/lib/aboutPageSeo";

export const metadata = aboutPageMetadata("members", "/members/about-us/");

export default function MembersAboutLayout({ children }: { children: ReactNode }) {
  const jsonLd = aboutPageJsonLd("members", "/members/about-us/");

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
