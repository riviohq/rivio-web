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
import { getLatestNewsPageLastModified } from "@/lib/latestPublicationDates";
import { SITE_URL } from "@/lib/siteContent";

const MEMBER_ICON =
  "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png";
const PARTNER_ICON =
  "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio_business.png";

const pageUrl = `${SITE_URL}/latest/`;

type ReleaseKind = "release" | "beta" | "milestone";

/** Visual cover for each card — swap URLs when you add real photos. */
type CoverVariant =
  | { variant: "dual-apps" }
  | { variant: "ios-gradient"; imageSrc: string; imageAlt: string }
  | { variant: "android-gradient" }
  | { variant: "site-launch" };

type ReleasePost = {
  iso: string;
  label: string;
  kind: ReleaseKind;
  title: string;
  summary: string;
  detail?: string;
  highlights?: string[];
  /** Roadmap / reflections — “thoughts & plans” */
  lookingAhead?: string;
  cover: CoverVariant;
  showStoreLinks?: boolean;
};

/** Newest first. Add new entries at the top. Sync `iso` values with `lib/latestPublicationDates.ts` for sitemap `lastModified`. */
const RELEASES: ReleasePost[] = [
  {
    iso: "2026-05-04",
    label: "May 4, 2026",
    kind: "release",
    title: "Google Play production — both apps stable on iOS & Android",
    summary:
      "RIVIO: Gym, Yoga & Sports and RIVIO: Partner & Business App are now listed on Google Play in production, alongside their App Store releases. Members get the same pay-per-day discovery, wallet, and QR check-in; partners get the same live visits, earnings, and venue tools — whether they join from an iPhone or an Android device.",
    detail:
      "We are treating this as our cross-platform production baseline: one product story on rivioapp.com, two apps, two stores, one operational playbook for support and onboarding.",
    highlights: [
      "Production listings for both apps on Google Play (India).",
      "Feature parity with the App Store builds you already use in the field.",
      "Stable channel for Razorpay-backed top-ups, per-day debits, and partner settlements.",
      "Hardened QR entry flows after months of beta traffic across pilot gyms and studios.",
    ],
    lookingAhead:
      "Next we will deepen analytics for partners, expand venue onboarding templates, and keep publishing short release notes here — including UI refreshes and any new onboarding flows, with screenshots when we ship them.",
    cover: { variant: "dual-apps" },
    showStoreLinks: true,
  },
  {
    iso: "2026-04-29",
    label: "April 29, 2026",
    kind: "release",
    title: "App Store — production releases for both apps",
    summary:
      "We shipped final production builds on the App Store for RIVIO: Gym, Yoga & Sports and RIVIO: Partner & Business App. iPhone and iPad users could download the same binaries we had validated in TestFlight, with performance budgets, payment paths, and QR check-in frozen for general availability.",
    detail:
      "This was the moment we committed to App Store–first production quality: crash-free sessions, predictable cold start, and partner tools that could survive a busy Saturday check-in window.",
    highlights: [
      "App Store production for the member app and the partner app the same week.",
      "Wallet, venue discovery, and streak UX signed off for public marketing.",
      "Partner dashboards aligned with settlement and QR policies we still run today.",
    ],
    lookingAhead:
      "Android production was the obvious next milestone; we used April feedback to prioritise Play Console testing tracks and device matrices before opening Google Play betas.",
    cover: {
      variant: "ios-gradient",
      imageSrc: MEMBER_ICON,
      imageAlt: "RIVIO: Gym, Yoga & Sports app icon",
    },
  },
  {
    iso: "2026-03-17",
    label: "March 17, 2026",
    kind: "beta",
    title: "App Store beta — iOS builds open for wider testing",
    summary:
      "We opened App Store beta distribution for both RIVIO: Gym, Yoga & Sports and RIVIO: Partner & Business App. Testers exercised real money flows in a controlled environment while we tuned onboarding copy, empty states, and the first-run experience for members and venue staff.",
    highlights: [
      "Parallel beta tracks for member and partner iOS builds.",
      "Focused test plans around first wallet top-up, first check-in, and first payout view.",
      "Collected qualitative notes we later folded into the April production cut.",
    ],
    lookingAhead:
      "Beta taught us where people hesitated in UI — we catalogued those moments for a future “what’s new in onboarding” post with annotated screens.",
    cover: {
      variant: "ios-gradient",
      imageSrc: PARTNER_ICON,
      imageAlt: "RIVIO: Partner & Business App icon",
    },
  },
  {
    iso: "2026-03-03",
    label: "March 3, 2026",
    kind: "beta",
    title: "Google Play — closed beta for both Android apps",
    summary:
      "Android beta listings went live in parallel for RIVIO: Gym, Yoga & Sports and RIVIO: Partner & Business App. We stress-tested notifications, background restrictions, and a wide spread of OEM devices while venues ran real check-ins on pilot builds.",
    highlights: [
      "Closed beta cohorts for members and partners on Google Play.",
      "Emphasis on payment reliability and QR latency on mid-range hardware.",
      "Crash analytics wired so we could compare Android vs iOS incident rates week over week.",
    ],
    lookingAhead:
      "Device lab results from March directly informed the May production rollout — especially permission prompts and deep links from SMS or UPI apps back into Rivio.",
    cover: { variant: "android-gradient" },
  },
  {
    iso: "2026-02-01",
    label: "February 1, 2026",
    kind: "milestone",
    title: "RIVIO goes public — rivioapp.com is live",
    summary:
      "We launched rivioapp.com as the home for our idea: flexible fitness in India without long-term gym lock-ins. The site explains pay-per-day access, introduces RIVIO: Gym, Yoga & Sports and RIVIO: Partner & Business App, and gives partners a clear path to talk to us while we finished store betas.",
    detail:
      "Going live on the web was as much a product decision as a marketing one — a single canonical place for story, trust, SEO, and download links as each platform matured.",
    highlights: [
      "Public brand and product narrative on rivioapp.com.",
      "Early partner and member funnels anchored on one domain.",
      "Room to grow this Latest section with posts, photos, and roadmap notes — exactly what you are reading now.",
    ],
    lookingAhead:
      "We plan to keep publishing here: ship notes, onboarding walkthroughs, partner spotlights, and imagery from the field whenever we have something worth your time.",
    cover: { variant: "site-launch" },
  },
];

const kindStyles: Record<ReleaseKind, { pill: string }> = {
  release: {
    pill: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80",
  },
  beta: {
    pill: "bg-amber-50 text-amber-900 ring-1 ring-amber-200/70",
  },
  milestone: {
    pill: "bg-slate-100 text-slate-800 ring-1 ring-slate-200/80",
  },
};

const kindLabel: Record<ReleaseKind, string> = {
  release: "Release",
  beta: "Beta",
  milestone: "Milestone",
};

function PostCover({ cover }: { cover: CoverVariant }) {
  if (cover.variant === "dual-apps") {
    return (
      <div className="relative flex h-48 w-full overflow-hidden md:h-52">
        <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-emerald-100/90 via-emerald-50 to-white">
          <Image
            src={MEMBER_ICON}
            alt="RIVIO: Gym, Yoga & Sports"
            width={112}
            height={112}
            className="h-20 w-20 rounded-2xl shadow-lg ring-2 ring-white/80 md:h-24 md:w-24"
          />
          <p className="mt-3 max-w-[10rem] text-center text-[10px] font-semibold uppercase tracking-wide text-emerald-900/80">
            RIVIO: Gym, Yoga &amp; Sports
          </p>
        </div>
        <div className="flex w-px shrink-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
        <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-bl from-amber-100/90 via-amber-50/90 to-white">
          <Image
            src={PARTNER_ICON}
            alt="RIVIO: Partner & Business App"
            width={112}
            height={112}
            className="h-20 w-20 rounded-2xl shadow-lg ring-2 ring-white/80 md:h-24 md:w-24"
          />
          <p className="mt-3 max-w-[11rem] text-center text-[10px] font-semibold uppercase tracking-wide text-amber-950/80">
            RIVIO: Partner &amp; Business App
          </p>
        </div>
      </div>
    );
  }

  if (cover.variant === "ios-gradient") {
    return (
      <div className="relative flex h-44 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 md:h-48">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,185,129,0.35),transparent_55%)]" />
        <Image
          src={cover.imageSrc}
          alt={cover.imageAlt}
          width={120}
          height={120}
          className="relative z-10 h-24 w-24 rounded-2xl shadow-2xl ring-2 ring-white/20 md:h-28 md:w-28"
        />
      </div>
    );
  }

  if (cover.variant === "android-gradient") {
    return (
      <div className="relative flex h-44 w-full items-center justify-center gap-8 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 md:h-48 md:gap-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(1,135,95,0.4),transparent_50%)]" />
        <Image
          src={MEMBER_ICON}
          alt="RIVIO: Gym, Yoga & Sports on Android"
          width={88}
          height={88}
          className="relative z-10 h-[4.5rem] w-[4.5rem] rounded-xl shadow-xl ring-2 ring-white/15"
        />
        <Image
          src={PARTNER_ICON}
          alt="RIVIO: Partner & Business App on Android"
          width={88}
          height={88}
          className="relative z-10 h-[4.5rem] w-[4.5rem] rounded-xl shadow-xl ring-2 ring-amber-200/30"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-44 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] md:h-48">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent_45%)]" />
      <Image
        src="/logos/rivio-user-dark.svg"
        alt="RIVIO wordmark"
        width={160}
        height={48}
        className="relative z-10 h-10 w-auto opacity-95 md:h-12"
      />
      <p className="relative z-10 mt-3 text-sm font-medium tracking-wide text-emerald-400/95">
        rivioapp.com
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Latest — news & updates | RIVIO",
  description:
    "RIVIO news and plans: rivioapp.com, App Store and Google Play betas and production releases for RIVIO: Gym, Yoga & Sports and RIVIO: Partner & Business App.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Latest from RIVIO",
    description:
      "Updates, releases, and roadmap notes for RIVIO apps and rivioapp.com.",
    type: "website",
    url: pageUrl,
    siteName: "RIVIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest from RIVIO",
    description: "News and releases for RIVIO apps.",
  },
};

function LatestJsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: "Latest from RIVIO",
    dateModified: getLatestNewsPageLastModified().toISOString(),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    description:
      "News and updates for RIVIO — rivioapp.com, App Store and Google Play releases for RIVIO: Gym, Yoga & Sports and RIVIO: Partner & Business App.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export default function LatestPage() {
  return (
    <>
      <LatestJsonLd />
      <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
        <div className="relative overflow-hidden border-b border-black/[0.06] bg-gradient-to-b from-white via-[#f5f5f7] to-[#fbfbfd]">
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-400/[0.12] blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-28 text-center md:pb-16 md:pt-32">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-600">
              News &amp; releases
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#1d1d1f] md:text-5xl">
              Latest from RIVIO
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#6e6e73] md:text-xl">
              Ship notes, milestones, and what we are planning next — one card per update, newest
              first. We will keep adding photos and walkthroughs as we release onboarding changes
              and product news.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 md:pt-14">
          <div className="mb-10 flex flex-col gap-4 border-b border-black/[0.06] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] md:text-xl">
                Updates
              </h2>
              <p className="mt-1 text-sm text-[#86868b]">
                {RELEASES.length} posts · India · replace cover images anytime with your own shots
              </p>
            </div>
            <Link
              href="/download/"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Download hub
            </Link>
          </div>

          <div className="flex flex-col gap-10 md:gap-12">
            {RELEASES.map((post, index) => {
              const styles = kindStyles[post.kind];
              const isFirst = index === 0;

              return (
                <article
                  key={post.iso}
                  className={`overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_32px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)] ${
                    isFirst ? "ring-1 ring-emerald-500/12" : ""
                  }`}
                >
                  <PostCover cover={post.cover} />

                  <div className="flex flex-wrap items-center gap-3 border-b border-black/[0.05] bg-[#fafafa]/90 px-5 py-4 md:px-6">
                    <time
                      dateTime={post.iso}
                      className="text-sm font-semibold tabular-nums text-[#1d1d1f]"
                    >
                      {post.label}
                    </time>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${styles.pill}`}
                    >
                      {kindLabel[post.kind]}
                    </span>
                  </div>

                  <div className="px-5 py-6 md:px-6 md:py-7">
                    <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73] md:text-[17px]">
                      {post.summary}
                    </p>
                    {post.detail ? (
                      <p className="mt-4 text-[15px] leading-relaxed text-[#86868b] md:text-[16px]">
                        {post.detail}
                      </p>
                    ) : null}

                    {post.highlights && post.highlights.length > 0 ? (
                      <div className="mt-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#86868b]">
                          Highlights
                        </p>
                        <ul className="mt-3 list-none space-y-2.5 p-0">
                          {post.highlights.map((line, hi) => (
                            <li
                              key={`${post.iso}-h-${hi}`}
                              className="flex items-start gap-3 text-[15px] leading-snug text-[#424245]"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                                aria-hidden
                              />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {post.lookingAhead ? (
                      <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-4 md:px-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-800/90">
                          Thoughts &amp; plans
                        </p>
                        <p className="mt-2 text-[15px] leading-relaxed text-[#3f3f46]">
                          {post.lookingAhead}
                        </p>
                      </div>
                    ) : null}

                    {post.showStoreLinks ? (
                      <div className="mt-8 space-y-8 border-t border-black/[0.06] pt-8">
                        <section aria-labelledby={`stores-member-${post.iso}`}>
                          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative shrink-0 rounded-xl bg-[#f5f5f7] p-1.5 ring-1 ring-black/[0.06]">
                              <Image
                                src={MEMBER_ICON}
                                alt=""
                                width={44}
                                height={44}
                                className="h-11 w-11 rounded-lg"
                              />
                            </div>
                            <div>
                              <h4
                                id={`stores-member-${post.iso}`}
                                className="text-base font-semibold text-[#1d1d1f]"
                              >
                                RIVIO: Gym, Yoga &amp; Sports
                              </h4>
                              <p className="text-xs text-[#86868b]">
                                Members · pay per day · QR check-in
                              </p>
                            </div>
                          </div>
                          <div className="grid max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-2">
                            <a
                              href={APP_STORE_URL_USER}
                              rel="noopener noreferrer"
                              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1d1d1f] text-sm font-semibold text-white transition hover:bg-black"
                            >
                              <AppleMark className="h-4 w-4" />
                              App Store
                            </a>
                            <a
                              href={GOOGLE_PLAY_URL_USER}
                              rel="noopener noreferrer"
                              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:bg-gray-50"
                            >
                              <PlayMark className="h-4 w-4 text-[#01875f]" />
                              Google Play
                            </a>
                          </div>
                        </section>

                        <section aria-labelledby={`stores-partner-${post.iso}`}>
                          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative shrink-0 rounded-xl bg-[#fffbeb] p-1.5 ring-1 ring-amber-200/60">
                              <Image
                                src={PARTNER_ICON}
                                alt=""
                                width={44}
                                height={44}
                                className="h-11 w-11 rounded-lg"
                              />
                            </div>
                            <div>
                              <h4
                                id={`stores-partner-${post.iso}`}
                                className="text-base font-semibold text-[#1d1d1f]"
                              >
                                RIVIO: Partner &amp; Business App
                              </h4>
                              <p className="text-xs text-[#86868b]">
                                Venues · QR · visits · payouts
                              </p>
                            </div>
                          </div>
                          <div className="grid max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-2">
                            <a
                              href={APP_STORE_URL_BUSINESS}
                              rel="noopener noreferrer"
                              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1d1d1f] text-sm font-semibold text-white transition hover:bg-black"
                            >
                              <AppleMark className="h-4 w-4" />
                              App Store
                            </a>
                            <a
                              href={GOOGLE_PLAY_URL_BUSINESS}
                              rel="noopener noreferrer"
                              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:bg-gray-50"
                            >
                              <PlayMark className="h-4 w-4 text-[#01875f]" />
                              Google Play
                            </a>
                          </div>
                        </section>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-12 text-center text-sm text-[#86868b]">
            Questions or press? Use{" "}
            <Link href="/" className="font-medium text-emerald-600 hover:underline">
              Contact
            </Link>{" "}
            on the homepage ·{" "}
            <Link
              href="/"
              className="font-medium text-emerald-600 underline-offset-4 hover:underline"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
