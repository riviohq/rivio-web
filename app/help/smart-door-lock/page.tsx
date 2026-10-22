import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Lock,
  Wifi,
  Link2,
  Shield,
  Smartphone,
  DoorOpen,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { SITE_CONTENT_UPDATED_DATE, SITE_URL } from "@/lib/siteContent";

const PAGE_URL = `${SITE_URL}/help/smart-door-lock/`;
const OG =
  `${SITE_URL}/assets/smart-lock/partner-manage.png`;

export const metadata: Metadata = {
  title: "How to Set Up Smart Door Lock on Rivio Partner | Step-by-Step",
  description:
    "Set up TTLock or an HTTPS unlock link in Rivio Partner. Gateway tips, test unlock, Available for pass holders, and member Unlock so pass holders open the gym door from the Rivio app.",
  keywords: [
    "Rivio smart door lock",
    "Rivio TTLock setup",
    "gym door unlock app India",
    "Rivio Partner door lock",
    "TTLock gateway G2 Rivio",
    "Shelly relay gym unlock",
    "how to setup smart lock Rivio",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "How to Set Up Smart Door Lock on Rivio",
    description:
      "Recommended: TTLock app + Wi‑Fi gateway. Or use an HTTPS unlock link. Step-by-step for Rivio Partner.",
    url: PAGE_URL,
    type: "article",
    siteName: "RIVIO",
    images: [{ url: OG, width: 1179, height: 2556, alt: "Rivio Partner door lock manage screen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Set Up Smart Door Lock on Rivio",
    description: "TTLock + gateway or HTTPS unlock link. Full partner guide.",
    images: [OG],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "How to Set Up Smart Door Lock on Rivio Partner",
      description:
        "Step-by-step guide to connect TTLock or an HTTPS unlock link so Rivio members can unlock your studio door with a pass.",
      dateModified: SITE_CONTENT_UPDATED_DATE,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Partner help", item: `${SITE_URL}/business/support/` },
        { "@type": "ListItem", position: 3, name: "Smart door lock setup", item: PAGE_URL },
      ],
    },
    {
      "@type": "HowTo",
      name: "Set up TTLock smart door unlock on Rivio Partner",
      description:
        "Connect a TTLock-compatible lock and Wi‑Fi gateway so Rivio pass holders can unlock your gym door from the member app.",
      totalTime: "PT45M",
      step: [
        {
          "@type": "HowToStep",
          name: "Install lock and gateway",
          text: "Install a TTLock-compatible lock and a TTLock Wi‑Fi gateway (e.g. G2) on gym Wi‑Fi near the door. Pair both in the TTLock phone app and confirm remote unlock works.",
        },
        {
          "@type": "HowToStep",
          name: "Open Door Lock Setup",
          text: "In Rivio Partner go to More → Door Lock Setup and select your venue.",
        },
        {
          "@type": "HowToStep",
          name: "Connect TTLock",
          text: "Choose Configured with the TTLock app, pick your brand, enter your TTLock username and password, tap Find my locks, and select the door.",
        },
        {
          "@type": "HowToStep",
          name: "Test and go live",
          text: "Save, stand at the door, tap Test unlock. After success, turn on Available for pass holders so members see Unlock.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do partners need a TTLock client ID?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Rivio holds one TTLock client ID and secret for the whole platform. Partners only enter their TTLock app username and password in Door Lock Setup.",
          },
        },
        {
          "@type": "Question",
          name: "Where is unlock activity stored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Rivio’s backend door access logs (who, phone, pass type, result, distance, IST time). Not on the lock maker’s gate URL.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Available for pass holders disabled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You must run a successful Test unlock first so a half-configured lock never appears to members.",
          },
        },
      ],
    },
  ],
};

function Shot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-lg shadow-emerald-900/5">
      <div className="relative mx-auto aspect-[9/19.5] max-w-[280px] bg-black">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="280px" />
      </div>
      <figcaption className="border-t border-emerald-50 px-4 py-3 text-center text-sm font-medium text-gray-700">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function SmartDoorLockHelpPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="border-b border-black/[0.08] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-4 py-10 pt-28 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Rivio Partner · Help
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.02em] text-[#1d1d1f] md:text-5xl">
            How to set up <span className="text-emerald-500">smart door lock</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#86868b]">
            Let pass holders unlock your studio from the Rivio member app — no front-desk wait. Follow
            this guide end to end so you rarely need to contact support.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Updated {SITE_CONTENT_UPDATED_DATE} · Also in Partner app: More → Help & Support →{" "}
            <strong>Door Lock</strong>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/business/support/"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm"
            >
              All partner FAQs
            </Link>
            <Link
              href="/partner-with-rivio/"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Partner with Rivio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-14 px-4 py-12 sm:px-6 lg:px-8">
        {/* Recommendation */}
        <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recommendation</h2>
              <p className="mt-2 leading-relaxed text-gray-700">
                For most gyms and studios: use a lock that works with the{" "}
                <strong>TTLock</strong> phone app, plus a <strong>TTLock Wi‑Fi gateway</strong> (for
                example a G2) on your gym Wi‑Fi near the door. That is the simplest path in Rivio
                Partner.
              </p>
              <p className="mt-3 text-gray-600">
                Alternative that works well: an electric strike / magnetic lock wired to a{" "}
                <strong>Wi‑Fi relay</strong> with a cloud unlock URL (e.g. Shelly), entered as an
                HTTPS unlock link in Rivio.
              </p>
              <p className="mt-3 text-gray-600">
                Already have <strong>ZKTeco</strong> or <strong>eSSL</strong> on the wall? Use{" "}
                <strong>ZKBio / eBioserver cloud</strong> unlock, or point the device at{" "}
                <strong>Rivio ADMS</strong> (see Path C below). The unit must control a door relay —
                fingerprint attendance-only machines cannot remote-unlock.
              </p>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">What it looks like</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Shot
              src="/assets/smart-lock/partner-setup.png"
              alt="Rivio Partner Door Lock Setup"
              caption="Partner · Door Lock Setup"
            />
            <Shot
              src="/assets/smart-lock/partner-manage.png"
              alt="Rivio Partner manage door lock and activity"
              caption="Partner · Manage & activity"
            />
            <Shot
              src="/assets/smart-lock/member-unlock.png"
              alt="Rivio member app Unlock door button"
              caption="Member · Unlock on studio page"
            />
            <Shot
              src="/assets/smart-lock/member-unlock-2.png"
              alt="Rivio member unlock ready near the door"
              caption="Member · Unlock when nearby"
            />
          </div>
        </section>

        {/* Path A TTLock */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Wifi className="h-7 w-7 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Path A — TTLock (recommended)</h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-bold text-gray-900">1. Hardware & gateway</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
              <li>Install a TTLock-compatible lock (or any lock that already appears in the TTLock app).</li>
              <li>
                Place a TTLock Wi‑Fi gateway near the door, powered 24/7, on gym Wi‑Fi. Pair it in the
                TTLock app.
              </li>
              <li>
                In TTLock, confirm the lock shows gateway connected and that{" "}
                <strong>remote unlock works</strong> from the TTLock app (outside Bluetooth range).
              </li>
            </ol>
            <p className="mt-3 flex gap-2 text-sm text-amber-800">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              Without a gateway, the lock is Bluetooth-only. Rivio cannot open it remotely.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-bold text-gray-900">2. Connect in Rivio Partner</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
              <li>Open <strong>More → Door Lock Setup</strong> and choose the venue.</li>
              <li>Select <strong>Configured with the TTLock app</strong>.</li>
              <li>Pick your brand (India brands are listed A–Z first).</li>
              <li>
                Enter your <strong>TTLock username and password</strong> (same as the TTLock phone
                app) → <strong>Find my locks</strong> → select the door.
              </li>
              <li>
                Save → stand at the door → <strong>Test unlock</strong>.
              </li>
              <li>
                After a successful test, turn on <strong>Available for pass holders</strong>.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6">
            <h3 className="flex items-center gap-2 font-bold text-gray-900">
              <Shield className="h-5 w-5 text-emerald-600" />
              TTLock credentials — who owns what
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-emerald-200 text-gray-600">
                    <th className="py-2 pr-4 font-semibold">Credential</th>
                    <th className="py-2 pr-4 font-semibold">Who</th>
                    <th className="py-2 font-semibold">Where</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b border-emerald-100">
                    <td className="py-3 pr-4">TTLock client ID & secret</td>
                    <td className="py-3 pr-4">Rivio (one pair for the whole platform)</td>
                    <td className="py-3">Rivio servers — partners never enter these</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">TTLock app username & password</td>
                    <td className="py-3 pr-4">Each partner (their own account)</td>
                    <td className="py-3">Typed in Door Lock Setup; password not stored</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Like a Google Maps API key: Rivio has one key; each studio signs in with its own TTLock
              account. Tokens are encrypted and renewed automatically.
            </p>
          </div>
        </section>

        {/* Path B HTTP */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Link2 className="h-7 w-7 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Path B — HTTPS unlock link</h2>
          </div>
          <p className="text-gray-700">
            Use this when your installer or device cloud gives you a remote-unlock URL. Brand names
            (Yale, Godrej, Relay…) are labels only — the URL is what connects.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Setup</th>
                  <th className="px-4 py-3 font-semibold">What you need</th>
                  <th className="px-4 py-3 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">Wi‑Fi relay</td>
                  <td className="px-4 py-3">Strike/maglock + Shelly-style cloud API (~₹2–5k + electrician)</td>
                  <td className="px-4 py-3">Most gyms</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">Access controller cloud</td>
                  <td className="px-4 py-3">Maker remote-unlock URL / API</td>
                  <td className="px-4 py-3">Existing biometric doors</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">Bridge</td>
                  <td className="px-4 py-3">Home Assistant / Tuya / SmartThings webhook</td>
                  <td className="px-4 py-3">Tech-savvy owners</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">Switch to TTLock</td>
                  <td className="px-4 py-3">TTLock lock + gateway (~₹8–15k)</td>
                  <td className="px-4 py-3">Buying new hardware</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ol className="list-decimal space-y-2 rounded-2xl border border-gray-200 bg-white p-6 pl-10 text-gray-700">
            <li>Door Lock Setup → Unlock link (HTTPS).</li>
            <li>
              Unlock URL must be <code className="rounded bg-gray-100 px-1">https://</code> and
              reachable from the internet (local 192.168… addresses are blocked for security).
            </li>
            <li>Method POST / GET / PUT per docs; optional header, body, signing secret.</li>
            <li>Save → Test unlock → Available for pass holders.</li>
          </ol>
          <p className="text-sm text-gray-600">
            Rivio treats HTTP 2xx within about 6 seconds as unlocked. For Shelly, set auto-off (~3s)
            in the Shelly app so the door locks again by itself.
          </p>
        </section>

        {/* Path C ZKTeco / eSSL */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Wifi className="h-7 w-7 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Path C — ZKTeco / eSSL (common in Indian gyms)</h2>
          </div>
          <p className="text-gray-700">
            Many clubs already have ZKTeco or eSSL fingerprint units. Rivio supports{" "}
            <strong>partner cloud unlock</strong> (ZKBio / eBioserverNew) and{" "}
            <strong>Rivio ADMS</strong> (device points its cloud URL at Rivio). The device must drive
            a door relay — attendance-only readers without unlock cannot open from the app.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">C1. ZKBio / eBioserver cloud</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
                <li>Door Lock Setup → brand ZKTeco or eSSL.</li>
                <li>Choose ZKTeco cloud (ZKBio) or eSSL cloud (eBioserver).</li>
                <li>
                  Enter server URL, API token or username/password, and door ID / device serial.
                </li>
                <li>Save → Test unlock → Available for pass holders.</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">C2. Point device to Rivio (ADMS)</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
                <li>Choose Point device to Rivio (ADMS).</li>
                <li>
                  Copy the Rivio ADMS URL (shown in the app, typically{" "}
                  <code className="rounded bg-gray-100 px-1 text-xs">
                    https://apis.rivioapp.com/api/iclock
                  </code>
                  ) into the device Cloud / ADMS setting.
                </li>
                <li>Enter the device serial (SN) → Save.</li>
                <li>Wait until the manage screen shows Online → Test unlock.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Godrej etc */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
          <h2 className="text-xl font-bold text-gray-900">Godrej, Yale, Qubo, Lavna…</h2>
          <p className="mt-2 text-gray-700">
            Many consumer brand apps do <strong>not</strong> give owners an unlock URL. Rivio cannot
            invent one.
          </p>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li className="flex gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              Door already opens in the <strong>TTLock</strong> app → use Path A with that brand.
            </li>
            <li className="flex gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              Electrician fitted a Wi‑Fi relay → Path B with their https URL.
            </li>
            <li className="flex gap-2">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
              Only the brand’s own app, no TTLock, no relay → Rivio cannot unlock yet.
            </li>
          </ul>
        </section>

        {/* Members */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Smartphone className="h-7 w-7 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">What members experience</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <DoorOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              On your studio page they see <strong>Unlock</strong> when the lock is live and they have
              an active pass, staff pass, or paid day visit.
            </li>
            <li className="flex gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              They must be near the door (~50 m). First unlock of the day can mark attendance for pass
              holders.
            </li>
            <li className="flex gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              No extra member setup — buy a pass and unlock when they arrive.
            </li>
          </ul>
        </section>

        {/* Activity */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-bold text-gray-900">Recent activity</h2>
          <p className="mt-2 text-gray-700">
            Every test and member unlock is stored in <strong>Rivio’s backend</strong> (door access
            logs) — not on the lock vendor’s URL. In Door Lock Setup you see name, full mobile,
            pass type, result, distance, and IST time. Refresh or Load more for older rows.
          </p>
        </section>

        {/* Checklist */}
        <section className="rounded-3xl border border-emerald-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">Go-live checklist</h2>
          <ul className="mt-4 space-y-3">
            {[
              "Gateway online / unlock URL returns 2xx in Test unlock",
              "Available for pass holders is ON",
              "Venue location pin is accurate (unlock uses GPS near the door)",
              "Test with a staff pass or your own member login",
              "Confirm Recent activity shows the unlock",
            ].map((t) => (
              <li key={t} className="flex gap-2 text-gray-800">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            More FAQs in the Partner app under <strong>Door Lock</strong>, or{" "}
            <Link href="/business/support/" className="font-semibold text-emerald-700 underline">
              Partner Help & Support
            </Link>
            . Email{" "}
            <a href="mailto:partners@rivioapp.com" className="font-semibold text-emerald-700 underline">
              partners@rivioapp.com
            </a>{" "}
            only if this guide does not cover your case.
          </p>
        </section>
      </div>
    </div>
  );
}
