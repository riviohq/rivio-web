import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Download, Handshake, MapPin } from "lucide-react";
import { AppleMark, PlayMark } from "@/components/StoreMarks";
import StoreCta from "@/components/StoreCta";
import {
  APP_STORE_URL_BUSINESS,
  APP_STORE_URL_USER,
  GOOGLE_PLAY_URL_BUSINESS,
  GOOGLE_PLAY_URL_USER,
} from "@/lib/storeUrls";
import { getPulsePageLastModified } from "@/lib/pulsePublicationDates";
import { SITE_URL } from "@/lib/siteContent";

const MEMBER_ICON = "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png";
const PARTNER_ICON =
  "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio_business.png";

const OG_IMAGE = MEMBER_ICON;

const pageUrl = `${SITE_URL}/pulse/`;

type ReleaseKind = "release" | "beta" | "milestone";

/** Each card gets a clean, on-brand cover built from gradients and the real app icons. */
type CoverVariant =
  | { variant: "venues" }
  | { variant: "dual-apps" }
  | { variant: "approved" }
  | { variant: "ios-beta" }
  | { variant: "android-beta" }
  | { variant: "launch" };

const POST_COVER_HEIGHT = "h-48 md:h-52";

type ReleasePost = {
  iso: string;
  label: string;
  kind: ReleaseKind;
  title: string;
  summary: string;
  detail?: string;
  whatsNext?: string;
  cover: CoverVariant;
  showStoreLinks?: boolean;
};

/** Newest first. Add new entries at the top and keep `lib/pulsePublicationDates.ts` in sync. */
const RELEASES: ReleasePost[] = [
  {
    iso: "2026-08-20",
    label: "August 20, 2026",
    kind: "milestone",
    title: "10 partner venues are now live across India",
    summary:
      "This is a big one for us. Ten gyms, studios and wellness centers across India are now live on Rivio and taking check-ins every day. Members can find them, walk in, scan the QR code and pay just for that day. No membership and no lock-in.",
    detail:
      "We built Rivio so people can stay fit without signing up for a whole year, and so venue owners can earn from walk-ins with almost no setup. Watching ten partners run it day after day tells us the idea holds up in the real world, not just on a slide.",
    whatsNext:
      "We are adding more venues city by city. If you run a gym or studio in India and want to be next, write to us at partners@rivioapp.com.",
    cover: { variant: "venues" },
    showStoreLinks: true,
  },
  {
    iso: "2026-07-22",
    label: "July 22, 2026",
    kind: "release",
    title: "Both apps are stable and live for everyone",
    summary:
      "Rivio and Rivio Partner are now stable and open to everyone on the App Store and Google Play. You get the same experience on iPhone and Android: find venues, top up your wallet and check in with a QR code. If you run a venue, you see your visits and payouts in one place.",
    detail:
      "We spent months testing with real gyms and real payments before we were comfortable calling it stable. This is the version we are proud to hand to anyone.",
    cover: { variant: "dual-apps" },
    showStoreLinks: true,
  },
  {
    iso: "2026-06-18",
    label: "June 18, 2026",
    kind: "release",
    title: "Both apps approved by Apple and Google",
    summary:
      "Apple and Google have approved both Rivio and Rivio Partner. That gave us the green light to go public across all four listings, two apps on two stores.",
    detail:
      "Store reviews look closely at payments, privacy and how an app behaves in everyday use, so getting both apps cleared on both platforms was a proud moment for the team.",
    cover: { variant: "approved" },
  },
  {
    iso: "2026-05-12",
    label: "May 12, 2026",
    kind: "beta",
    title: "App Store beta wrapped up",
    summary:
      "We finished our iOS beta for both apps. Testers went through the full flow, from their first wallet top-up to their first check-in and first payout, and told us where things felt confusing so we could fix them before launch.",
    cover: { variant: "ios-beta" },
  },
  {
    iso: "2026-04-14",
    label: "April 14, 2026",
    kind: "beta",
    title: "Play Store beta wrapped up",
    summary:
      "Our Android beta is done. We ran both apps across a wide mix of phones and focused on the two things people care about most: payments that do not fail, and a QR check-in that feels instant.",
    cover: { variant: "android-beta" },
  },
  {
    iso: "2026-03-10",
    label: "March 10, 2026",
    kind: "milestone",
    title: "Rivio is officially here",
    summary:
      "We introduced Rivio to the world at rivioapp.com. The site shares our story, explains how pay-per-day fitness works and gives gym and studio owners an easy way to reach us.",
    detail:
      "Launching on the web first gave us one clear home for everything Rivio while we finished testing both apps in the stores.",
    cover: { variant: "launch" },
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
  if (cover.variant === "venues") {
    return (
      <div
        className={`relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 ${POST_COVER_HEIGHT}`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.28),transparent_55%)]"
          aria-hidden
        />
        <div className="relative z-10 flex items-center gap-5 text-white">
          <span className="text-6xl font-bold leading-none tracking-tight md:text-7xl">
            10
          </span>
          <div className="text-left">
            <p className="text-xl font-semibold leading-tight md:text-2xl">
              Partner venues
            </p>
            <p className="text-base font-medium text-white/90">live across India</p>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-white/25">
              <MapPin className="h-3.5 w-3.5" />
              Gyms, studios &amp; wellness
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (cover.variant === "dual-apps") {
    return (
      <div className={`relative flex w-full overflow-hidden ${POST_COVER_HEIGHT}`}>
        <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-emerald-100/90 via-emerald-50 to-white">
          <Image
            src={MEMBER_ICON}
            alt="Rivio: Gym, Yoga & Sports"
            width={112}
            height={112}
            className="h-20 w-20 rounded-2xl shadow-lg ring-2 ring-white/80 md:h-24 md:w-24"
          />
          <p className="mt-3 max-w-[10rem] text-center text-[10px] font-semibold uppercase tracking-wide text-emerald-900/80">
            Rivio: Gym, Yoga &amp; Sports
          </p>
        </div>
        <div className="flex w-px shrink-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
        <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-bl from-amber-100/90 via-amber-50/90 to-white">
          <Image
            src={PARTNER_ICON}
            alt="Rivio: Partner & Business App"
            width={112}
            height={112}
            className="h-20 w-20 rounded-2xl shadow-lg ring-2 ring-white/80 md:h-24 md:w-24"
          />
          <p className="mt-3 max-w-[11rem] text-center text-[10px] font-semibold uppercase tracking-wide text-amber-950/80">
            Rivio: Partner &amp; Business App
          </p>
        </div>
      </div>
    );
  }

  if (cover.variant === "approved") {
    return (
      <div
        className={`relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 ${POST_COVER_HEIGHT}`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(16,185,129,0.28),transparent_55%)]"
          aria-hidden
        />
        <div className="relative z-10 flex items-center gap-5">
          <Image
            src={MEMBER_ICON}
            alt="Rivio app icon"
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl shadow-xl ring-2 ring-white/15"
          />
          <Image
            src={PARTNER_ICON}
            alt="Rivio Partner app icon"
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl shadow-xl ring-2 ring-amber-200/25"
          />
        </div>
        <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
          <CheckCircle className="h-4 w-4" />
          Approved on App Store &amp; Google Play
        </span>
      </div>
    );
  }

  if (cover.variant === "ios-beta") {
    return (
      <div
        className={`relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ${POST_COVER_HEIGHT}`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.16),transparent_55%)]"
          aria-hidden
        />
        <div className="relative z-10 flex items-center gap-5">
          <Image
            src={MEMBER_ICON}
            alt="Rivio app icon"
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl shadow-xl ring-2 ring-white/15"
          />
          <Image
            src={PARTNER_ICON}
            alt="Rivio Partner app icon"
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl shadow-xl ring-2 ring-white/15"
          />
        </div>
        <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
          <AppleMark className="h-4 w-4" />
          App Store beta
        </span>
      </div>
    );
  }

  if (cover.variant === "android-beta") {
    return (
      <div
        className={`relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 ${POST_COVER_HEIGHT}`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(1,135,95,0.4),transparent_50%)]"
          aria-hidden
        />
        <div className="relative z-10 flex items-center gap-5">
          <Image
            src={MEMBER_ICON}
            alt="Rivio app icon on Android"
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl shadow-xl ring-2 ring-white/15"
          />
          <Image
            src={PARTNER_ICON}
            alt="Rivio Partner app icon on Android"
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl shadow-xl ring-2 ring-amber-200/25"
          />
        </div>
        <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
          <PlayMark className="h-4 w-4 text-emerald-400" />
          Google Play beta
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] ${POST_COVER_HEIGHT}`}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent_45%)]"
        aria-hidden
      />
      <Image
        src="/logos/rivio-user-dark.svg"
        alt="Rivio wordmark"
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
  title: "Rivio Pulse: news, updates and milestones",
  description:
    "What is happening at Rivio. Product updates, new partner venues, and honest notes on releases for the Rivio and Rivio Partner apps on the App Store and Google Play.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Rivio Pulse",
    description:
      "News, product updates and milestones from Rivio. New venues, releases and what we are building next.",
    type: "website",
    url: pageUrl,
    siteName: "RIVIO",
    images: [{ url: OG_IMAGE, width: 512, height: 512, alt: "Rivio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivio Pulse",
    description: "News, updates and milestones from Rivio, newest first.",
    images: [OG_IMAGE],
  },
};

function PulseJsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: "Rivio Pulse",
    dateModified: getPulsePageLastModified().toISOString(),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    description:
      "News, product updates and milestones for Rivio, and release notes for the Rivio and Rivio Partner apps on the App Store and Google Play.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export default function PulsePage() {
  return (
    <>
      <PulseJsonLd />
      <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
        <div className="relative overflow-hidden border-b border-black/[0.06] bg-gradient-to-b from-white via-[#f5f5f7] to-[#fbfbfd]">
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-400/[0.12] blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-28 text-center md:pb-16 md:pt-32">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-600">
              Rivio Pulse
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#1d1d1f] md:text-5xl">
              Rivio Pulse
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#6e6e73] md:text-xl">
              This is where we share what is happening at Rivio. New features,
              milestones, new venues, and honest notes on what we are building
              next. Newest first.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 md:pt-14">
          <div className="mb-10 flex flex-col gap-4 border-b border-black/[0.06] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] md:text-xl">
                The story so far
              </h2>
              <p className="mt-1 text-sm text-[#86868b]">
                {RELEASES.length} updates and counting
              </p>
            </div>
            <Link
              href="/download/"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Download the apps
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

                    {post.whatsNext ? (
                      <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-4 md:px-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-800/90">
                          What&apos;s next
                        </p>
                        <p className="mt-2 text-[15px] leading-relaxed text-[#3f3f46]">
                          {post.whatsNext}
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
                                Rivio: Gym, Yoga &amp; Sports
                              </h4>
                              <p className="text-xs text-[#86868b]">
                                For members. Pay per day, check in with QR.
                              </p>
                            </div>
                          </div>
                          <div className="max-w-lg">
                            <StoreCta
                              links={{ ios: APP_STORE_URL_USER, android: GOOGLE_PLAY_URL_USER }}
                              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#1d1d1f] text-sm font-semibold text-white transition hover:bg-black"
                            >
                              <Download className="h-4 w-4" />
                              Get the App
                            </StoreCta>
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
                                Rivio: Partner &amp; Business App
                              </h4>
                              <p className="text-xs text-[#86868b]">
                                For venues. See visits and payouts in one place.
                              </p>
                            </div>
                          </div>
                          <div className="max-w-lg">
                            <StoreCta
                              links={{ ios: APP_STORE_URL_BUSINESS, android: GOOGLE_PLAY_URL_BUSINESS }}
                              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-amber-500 text-sm font-semibold text-white transition hover:bg-amber-600"
                            >
                              <Handshake className="h-4 w-4" />
                              Partner with App
                            </StoreCta>
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
            on the homepage, or head{" "}
            <Link
              href="/"
              className="font-medium text-emerald-600 underline-offset-4 hover:underline"
            >
              home
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
