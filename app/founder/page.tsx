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
  title: `The Founder — Vision | ${FOUNDER_NAME}`,
  description: `The Founder’s vision behind RIVIO — pay-per-day gym, yoga, and sports access in India. Founder links, App Store developer page, and RIVIO company links for ${FOUNDER_NAME}.`,
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
    title: `The Founder — Vision | RIVIO`,
    description:
      "The Founder’s vision behind RIVIO. Founder links and App Store developer listing.",
    type: "profile",
    url: pageUrl,
    siteName: "RIVIO",
  },
  twitter: {
    card: "summary",
    title: `The Founder — Vision | RIVIO`,
    description: "The Founder’s vision behind RIVIO — pay-per-day fitness for India.",
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
          "Founder page for Amandeep Bishnoi, Founder of RIVIO, with profile and app links.",
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
          <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-2">
            The Founder — Vision
          </h1>
          <p className="text-lg text-[#1d1d1f] font-semibold mb-8">
            {FOUNDER_NAME} · Founder, RIVIO
          </p>

          <section className="prose prose-neutral max-w-none mb-10" aria-labelledby="about-founder">
            <h2 id="about-founder" className="text-xl font-semibold text-[#1d1d1f] mb-3">
              From the Founder Team
            </h2>
            <p className="text-[#424245] leading-relaxed mb-4">
              Imagine a world where fitness is not locked behind expensive memberships or complicated
              contracts. Where you can walk into any gym, yoga studio, or fitness center—anywhere,
              anytime—and simply start your workout. No commitments. No restrictions. No barriers.
              That is the world we are building at <strong>RIVIO</strong>.
            </p>
            <p className="text-[#424245] leading-relaxed mb-4">
              We saw frustration when people could not access fitness because of long-term contracts
              they could not justify, or because they were tied to a single location. We watched
              motivated people pause their goals, not due to lack of intent, but because the system
              was not designed for real life. That did not sit right with us.
            </p>
            <p className="text-[#424245] leading-relaxed mb-4">
              So we built something different. RIVIO is your passport to fitness freedom: pay for
              what you use, or choose a pass that fits your schedule. Build streaks, compete on
              leaderboards, and turn your fitness journey into an adventure. Every visit counts.
              Every milestone matters.
            </p>
            <p className="text-[#424245] leading-relaxed mb-4">
              Our vision is simple: make fitness accessible to everyone, everywhere. Whether you
              work out daily or occasionally, whether you are experienced or just getting started,
              RIVIO adapts to you—not the other way around. We are not only building a platform; we
              are building a movement that empowers people to take control of their health and
              wellness on their own terms.
            </p>

            <hr className="my-8 border-black/10" />

            <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">
              For fitness businesses — the RIVIO Partner vision
            </h3>
            <p className="text-[#424245] leading-relaxed mb-4">
              The fitness and wellness industry is powered by passion, dedication, and the
              transformative impact of community. Yet we observed that business owners—the people
              creating these life-changing experiences—were being held back by technology that was
              supposed to help them.
            </p>
            <p className="text-[#424245] leading-relaxed mb-4">
              Complex systems, fragmented tools, and outdated processes were consuming time that
              should be spent serving members, building communities, and growing businesses. This
              disconnect inspired us to create <strong>RIVIO Partner</strong>.
            </p>
            <p className="text-[#424245] leading-relaxed mb-4">
              RIVIO Partner represents a new approach to business management—one where technology
              truly serves the business owner. Features like real-time earnings visibility, QR
              check-ins, flexible pass management, and smoother settlements are designed with a
              single purpose: to give you back your time and amplify your success.
            </p>
            <p className="text-[#424245] leading-relaxed">
              Our commitment goes beyond software. We measure our success through your growth, your
              profitability, and your ability to focus on what you do best. When you thrive, we have
              achieved our goal.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="founder-profiles">
            <h2 id="founder-profiles" className="text-xl font-semibold mb-4">
              Connect with {FOUNDER_NAME}
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
              RIVIO online
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
              Both RIVIO consumer and RIVIO Partner apps are published under the same Apple developer
              account. Google Play listings are <strong>pending</strong> — this site
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
              explain the product; this page connects the company and founder to the right places.
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
