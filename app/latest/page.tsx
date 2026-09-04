import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteContent";
import RedirectToPulse from "./RedirectToPulse";

/** Legacy URL — the news feed moved to /pulse/. Keep this redirect so old links & QR codes still work. */
export const metadata: Metadata = {
  title: "Rivio Pulse",
  description: "The RIVIO news feed moved to Rivio Pulse.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/pulse/` },
};

export default function LatestRedirectPage() {
  return <RedirectToPulse />;
}
