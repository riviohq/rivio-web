import type { Metadata } from "next";
import Link from "next/link";
import {
  APP_STORE_DEVELOPER_URL,
  FOUNDER_FACEBOOK,
  FOUNDER_INSTAGRAM,
  FOUNDER_LINKEDIN,
  FOUNDER_NAME,
  FOUNDER_X,
  RIVIO_FACEBOOK,
  RIVIO_INSTAGRAM,
  RIVIO_LINKEDIN_COMPANY,
  RIVIO_X,
} from "@/lib/brandLinks";
import {
  APP_STORE_URL_BUSINESS,
  APP_STORE_URL_USER,
} from "@/lib/storeUrls";
import { SITE_CONTENT_UPDATED_DATE, SITE_URL } from "@/lib/siteContent";

const pageUrl = `${SITE_URL}/founder/`;

export const metadata: Metadata = {
  title: `${FOUNDER_NAME} — Founder`,
  description: `${FOUNDER_NAME} is Founder of RIVIO, the pay-per-day gym, yoga, and sports app for India. Official profiles, App Store developer page, and RIVIO company links.`,
  keywords: [
    FOUNDER_NAME,
    "Amandeep Bishnoi Rivio",
    "Amandeep Bishnoi founder",
    "Amandeep Bishnoi fitness entrepreneur",
    "Rivio founder India",
    "Rivio founder",
    "Gurugram fitness founder",
    "pay per day gym founder",
    "Rivio LinkedIn company",
    "Rivio App Store developer",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${FOUNDER_NAME} — Founder | RIVIO`,
    description:
      "Founder of RIVIO. Official social profiles and App Store developer listing.",
    type: "profile",
    url: pageUrl,
    siteName: "RIVIO",
  },
  twitter: {
    card: "summary",
    title: `${FOUNDER_NAME} | RIVIO`,
    description: "Founder — RIVIO pay-per-day fitness for India.",
  },
};

function FounderPageJsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${FOUNDER_NAME} — Founder, RIVIO`,
        dateModified: SITE_CONTENT_UPDATED_DATE,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#founder` },
        description:
          "Official founder page for Amandeep Bishnoi, Founder of RIVIO, with verified profile links.",
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

export default function FounderPage() {
  return (
    <>
      <FounderPageJsonLd />
      <article className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#86868b] mb-3">
            Last updated:{" "}
            {new Intl.DateTimeFormat("en-IN", {
              dateStyle: "long",
              timeZone: "Asia/Kolkata",
            }).format(new Date(`${SITE_CONTENT_UPDATED_DATE}T12:00:00+05:30`))}
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-4">
            {FOUNDER_NAME}
          </h1>
          <p className="text-lg text-emerald-700 font-medium mb-8">
            Founder, RIVIO
          </p>

          <section className="prose prose-neutral max-w-none mb-10" aria-labelledby="about-founder">
            <h2 id="about-founder" className="text-xl font-semibold text-[#1d1d1f] mb-3">
              About
            </h2>
            <p className="text-[#424245] leading-relaxed mb-4">
              <strong>{FOUNDER_NAME}</strong> founded <strong>RIVIO</strong> — a fitness platform built
              around <strong>flexibility over long-term lock-in</strong>: pay for the days you
              actually train, discover gyms and studios, and use one member experience for{" "}
              <strong>gym, yoga, sports, and wellness</strong> across India. RIVIO also offers a
              dedicated <strong>partner (business) app</strong> for venues: QR check-in, earnings,
              and operations.
            </p>
            <p className="text-[#424245] leading-relaxed mb-4">
              This page lists only <strong>verified official links</strong> for {FOUNDER_NAME} and
              for the RIVIO brand — useful for press, partners, investors, and search engines mapping
              the company to its leadership and products.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="founder-profiles">
            <h2 id="founder-profiles" className="text-xl font-semibold mb-4">
              {FOUNDER_NAME} — official profiles
            </h2>
            <ul className="space-y-3 text-emerald-700">
              <li>
                <a
                  href={FOUNDER_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="hover:underline break-all font-medium"
                >
                  LinkedIn (personal)
                </a>
              </li>
              <li>
                <a
                  href={FOUNDER_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="hover:underline break-all font-medium"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={FOUNDER_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="hover:underline break-all font-medium"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={FOUNDER_X}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="hover:underline break-all font-medium"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10" aria-labelledby="rivio-brand">
            <h2 id="rivio-brand" className="text-xl font-semibold mb-4">
              RIVIO — official company profiles
            </h2>
            <ul className="space-y-3 text-emerald-700">
              <li>
                <a
                  href={RIVIO_LINKEDIN_COMPANY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all font-medium"
                >
                  LinkedIn (company)
                </a>
              </li>
              <li>
                <a
                  href={RIVIO_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all font-medium"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={RIVIO_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all font-medium"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={RIVIO_X}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all font-medium"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10" aria-labelledby="apps-dev">
            <h2 id="apps-dev" className="text-xl font-semibold mb-4">
              Apps &amp; App Store developer
            </h2>
            <p className="text-[#424245] leading-relaxed mb-4">
              Both RIVIO consumer and RIVIO Partner apps are published under the same official Apple
              developer account. Google Play listings are <strong>pending</strong> — this site
              will add Play links when they are public.
            </p>
            <ul className="space-y-3 text-emerald-700">
              <li>
                <a
                  href={APP_STORE_DEVELOPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all font-medium"
                >
                  App Store — developer: {FOUNDER_NAME}
                </a>
              </li>
              <li>
                <a
                  href={APP_STORE_URL_USER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all font-medium"
                >
                  Rivio — Gym, Yoga &amp; Sports (member app)
                </a>
              </li>
              <li>
                <a
                  href={APP_STORE_URL_BUSINESS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all font-medium"
                >
                  Rivio Partner — Business app
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10" aria-labelledby="keywords-context">
            <h2 id="keywords-context" className="text-xl font-semibold mb-4">
              What people search for
            </h2>
            <p className="text-[#424245] leading-relaxed">
              RIVIO is built for queries like <strong>pay per day gym</strong>,{" "}
              <strong>gym without subscription</strong>, <strong>yoga pay per day</strong>,{" "}
              <strong>fitness app India</strong>, <strong>studio day pass</strong>,{" "}
              <strong>flexible fitness</strong>, <strong>wellness on demand</strong>, and{" "}
              <strong>partner tools for gyms and studios</strong>. The homepage and download hub
              explain the product; this page connects the company and founder to those official
              endpoints.
            </p>
          </section>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/download/" className="text-emerald-700 font-medium hover:underline">
              Download apps →
            </Link>
            <Link href="/" className="text-emerald-700 font-medium hover:underline">
              Home →
            </Link>
            <Link href="/partners/" className="text-emerald-700 font-medium hover:underline">
              Partners →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
