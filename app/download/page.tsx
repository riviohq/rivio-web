import type { Metadata } from "next";
import Link from "next/link";
import {
  APP_STORE_URL_BUSINESS,
  APP_STORE_URL_USER,
  GOOGLE_PLAY_URL_BUSINESS,
  GOOGLE_PLAY_URL_USER,
} from "@/lib/storeUrls";
import { SITE_CONTENT_UPDATED_DATE, SITE_URL } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Download RIVIO apps",
  description:
    "Download Rivio for members (gym, yoga, sports) and Rivio Partner for businesses on the App Store. Pay-per-day fitness in India.",
  keywords: [
    "RIVIO app download",
    "Rivio App Store",
    "Rivio Partner app",
    "pay per day gym app India",
  ],
  alternates: { canonical: `${SITE_URL}/download/` },
  openGraph: {
    title: "Download RIVIO — Member & Partner apps",
    description:
      "Official App Store links for Rivio (members) and Rivio Partner (businesses).",
    type: "website",
    url: `${SITE_URL}/download/`,
    siteName: "RIVIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download RIVIO apps",
    description: "Member and Partner apps on the App Store.",
  },
};

function DownloadPageJsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/download/`,
    url: `${SITE_URL}/download/`,
    name: "Download RIVIO apps",
    dateModified: SITE_CONTENT_UPDATED_DATE,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: [
      { "@type": "MobileApplication", name: "Rivio — Gym, Yoga & Sports", downloadUrl: APP_STORE_URL_USER },
      { "@type": "MobileApplication", name: "Rivio Partner — Business App", downloadUrl: APP_STORE_URL_BUSINESS },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export default function DownloadPage() {
  return (
    <>
      <DownloadPageJsonLd />
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-3">
            Get the RIVIO apps
          </h1>
          <p className="text-[#86868b] mb-10 leading-relaxed">
            Both apps are live on the App Store. Use the official links below — safe to share and
            ideal for search and support.
          </p>

          <section className="space-y-8 mb-12" aria-labelledby="member-heading">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/[0.06]">
              <h2 id="member-heading" className="text-xl font-semibold mb-1">
                Rivio — for members
              </h2>
              <p className="text-sm text-[#86868b] mb-5">
                Gym, yoga, sports & wellness — pay per day, no subscription.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={APP_STORE_URL_USER}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-sm font-medium hover:bg-black transition-colors"
                  rel="noopener noreferrer"
                >
                  Download on the App Store
                </a>
                {GOOGLE_PLAY_URL_USER ? (
                  <a
                    href={GOOGLE_PLAY_URL_USER}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                    rel="noopener noreferrer"
                  >
                    Get it on Google Play
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/70 text-[#1d1d1f]/50 text-sm font-medium border border-gray-200 cursor-not-allowed select-none"
                    title="Google Play link is coming soon"
                  >
                    Google Play (coming soon)
                  </span>
                )}
              </div>
              <p className="mt-4 text-xs text-[#86868b] break-all">{APP_STORE_URL_USER}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/[0.06]">
              <h2 className="text-xl font-semibold mb-1">Rivio Partner — for businesses</h2>
              <p className="text-sm text-[#86868b] mb-5">
                For gyms, studios, and wellness centers — onboarding, QR check-in, and earnings.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={APP_STORE_URL_BUSINESS}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-sm font-medium hover:bg-black transition-colors"
                  rel="noopener noreferrer"
                >
                  Download on the App Store
                </a>
                {GOOGLE_PLAY_URL_BUSINESS ? (
                  <a
                    href={GOOGLE_PLAY_URL_BUSINESS}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                    rel="noopener noreferrer"
                  >
                    Get it on Google Play
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/70 text-[#1d1d1f]/50 text-sm font-medium border border-gray-200 cursor-not-allowed select-none"
                    title="Google Play link is coming soon"
                  >
                    Google Play (coming soon)
                  </span>
                )}
              </div>
              <p className="mt-4 text-xs text-[#86868b] break-all">{APP_STORE_URL_BUSINESS}</p>
            </div>
          </section>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-emerald-600 font-medium hover:text-emerald-700">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
