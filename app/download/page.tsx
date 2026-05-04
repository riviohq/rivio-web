import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppleMark, PlayMark } from "@/components/StoreMarks";
import {
  APP_STORE_URL_BUSINESS,
  APP_STORE_URL_USER,
  GOOGLE_PLAY_URL_BUSINESS,
  GOOGLE_PLAY_URL_USER,
} from "@/lib/storeUrls";
import { SITE_CONTENT_UPDATED_DATE, SITE_URL } from "@/lib/siteContent";

const MEMBER_ICON =
  "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png";
const PARTNER_ICON =
  "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio_business.png";

export const metadata: Metadata = {
  title: "Download RIVIO apps",
  description:
    "Get Rivio for workouts and Rivio Partner for your venue — free on iPhone and Android. Pay-per-day fitness in India.",
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
      "Get Rivio and Rivio Partner on the App Store and Google Play.",
    type: "website",
    url: `${SITE_URL}/download/`,
    siteName: "RIVIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download RIVIO apps",
    description: "Rivio and Rivio Partner on iOS and Android.",
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
      {
        "@type": "MobileApplication",
        name: "Rivio — Gym, Yoga & Sports",
        operatingSystem: "iOS, Android",
        downloadUrl: APP_STORE_URL_USER,
        installUrl: GOOGLE_PLAY_URL_USER,
      },
      {
        "@type": "MobileApplication",
        name: "Rivio Partner — Business App",
        operatingSystem: "iOS, Android",
        downloadUrl: APP_STORE_URL_BUSINESS,
        installUrl: GOOGLE_PLAY_URL_BUSINESS,
      },
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
      <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
        <div className="relative overflow-hidden border-b border-black/[0.06] bg-gradient-to-b from-white via-[#f5f5f7] to-[#fbfbfd]">
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-400/[0.12] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-24 right-0 h-64 w-64 rounded-full bg-blue-400/[0.08] blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-5xl px-4 pb-14 pt-28 md:pb-20 md:pt-32">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-emerald-600">
              Download
            </p>
            <h1 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-[-0.03em] text-[#1d1d1f] md:text-5xl">
              Two apps. Pick yours.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-[#6e6e73] md:text-xl">
              Train and pay per day with <span className="text-[#1d1d1f]">Rivio</span>, or run your
              venue with <span className="text-[#1d1d1f]">Rivio Partner</span>. Free to install on
              iPhone and Android.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 pb-20 pt-10 md:pt-14">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Member */}
            <article
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_12px_48px_-16px_rgba(16,185,129,0.25)]"
              aria-labelledby="member-heading"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-500/[0.08] to-transparent"
                aria-hidden
              />
              <div className="relative flex flex-1 flex-col">
                <div className="mb-6 flex items-start gap-4">
                  <div className="relative shrink-0 rounded-2xl bg-white p-1 shadow-md ring-1 ring-black/[0.06]">
                    <Image
                      src={MEMBER_ICON}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-xl"
                    />
                  </div>
                  <div>
                    <h2
                      id="member-heading"
                      className="text-xl font-semibold tracking-tight text-[#1d1d1f] md:text-2xl"
                    >
                      Rivio
                    </h2>
                    <p className="mt-1 text-sm font-medium text-emerald-600">
                      For members
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73]">
                      Find gyms and studios, check in with QR, pay only for the days you show up.
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href={APP_STORE_URL_USER}
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#1d1d1f] text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-black active:scale-[0.99]"
                  >
                    <AppleMark className="h-5 w-5" />
                    App Store
                  </a>
                  <a
                    href={GOOGLE_PLAY_URL_USER}
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#dadada] bg-white text-[15px] font-semibold text-[#1d1d1f] shadow-sm transition-all duration-200 hover:border-[#c4c4c4] hover:bg-[#fafafa] active:scale-[0.99]"
                  >
                    <PlayMark className="h-5 w-5 text-[#01875f]" />
                    Google Play
                  </a>
                </div>
              </div>
            </article>

            {/* Partner */}
            <article
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_12px_48px_-16px_rgba(245,158,11,0.28)]"
              aria-labelledby="partner-heading"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-500/[0.1] to-transparent"
                aria-hidden
              />
              <div className="relative flex flex-1 flex-col">
                <div className="mb-6 flex items-start gap-4">
                  <div className="relative shrink-0 rounded-2xl bg-white p-1 shadow-md ring-1 ring-black/[0.06]">
                    <Image
                      src={PARTNER_ICON}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-xl"
                    />
                  </div>
                  <div>
                    <h2
                      id="partner-heading"
                      className="text-xl font-semibold tracking-tight text-[#1d1d1f] md:text-2xl"
                    >
                      Rivio Partner
                    </h2>
                    <p className="mt-1 text-sm font-medium text-amber-600">
                      For businesses
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73]">
                      Onboard your space, share QR check-in, and track visits and payouts in one
                      place.
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href={APP_STORE_URL_BUSINESS}
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#1d1d1f] text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-black active:scale-[0.99]"
                  >
                    <AppleMark className="h-5 w-5" />
                    App Store
                  </a>
                  <a
                    href={GOOGLE_PLAY_URL_BUSINESS}
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#dadada] bg-white text-[15px] font-semibold text-[#1d1d1f] shadow-sm transition-all duration-200 hover:border-[#c4c4c4] hover:bg-[#fafafa] active:scale-[0.99]"
                  >
                    <PlayMark className="h-5 w-5 text-[#01875f]" />
                    Google Play
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="mx-auto mt-4 max-w-2xl text-center">
            <p className="text-sm text-[#86868b]">
              What&apos;s new?{" "}
              <Link
                href="/latest/"
                className="font-medium text-emerald-600 underline-offset-4 hover:text-emerald-700 hover:underline"
              >
                See latest updates
              </Link>
              {" · "}
              <Link
                href="/"
                className="font-medium text-emerald-600 underline-offset-4 hover:text-emerald-700 hover:underline"
              >
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
