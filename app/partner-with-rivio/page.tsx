import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  MapPin,
  Building2,
  Phone,
  Tag,
  Dumbbell,
  Clock,
  Camera,
  CheckCircle,
  Users,
  BarChart3,
  CreditCard,
  QrCode,
  Handshake,
  Wallet,
  ChevronDown,
  Flag,
} from "lucide-react";
import StoreCta from "@/components/StoreCta";
import { APP_STORE_URL_BUSINESS, GOOGLE_PLAY_URL_BUSINESS } from "@/lib/storeUrls";
import { SITE_CONTENT_UPDATED_DATE, SITE_URL } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Partner with Rivio: Register Your Studio",
  description:
    "List your gym, yoga, or wellness studio on Rivio. Download the Rivio Business App and follow a simple 8 step onboarding to go live. No upfront registration charges.",
  keywords: [
    "partner with Rivio",
    "register studio on Rivio",
    "Rivio Business App",
    "list my gym",
    "gym onboarding",
    "pay per day fitness partner",
  ],
  alternates: { canonical: `${SITE_URL}/partner-with-rivio/` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Partner with Rivio: Register Your Studio",
    description:
      "Download the Rivio Business App and complete a simple 8 step onboarding to list your studio. No upfront registration charges.",
    url: `${SITE_URL}/partner-with-rivio/`,
    type: "website",
    siteName: "RIVIO",
    images: [
      {
        url: "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio_business.png",
        width: 512,
        height: 512,
        alt: "Rivio Business app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner with Rivio: Register Your Studio",
    description:
      "List your gym, yoga, or wellness studio on Rivio. Simple 8 step onboarding, no upfront charges.",
    images: ["https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio_business.png"],
  },
};

const BUSINESS_LOGO = "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio_business.png";
const IMG = "https://rivio-glimps.s3.ap-south-1.amazonaws.com/onboarding-images";

const BUSINESS_LINKS = {
  ios: APP_STORE_URL_BUSINESS,
  android: GOOGLE_PLAY_URL_BUSINESS,
};

const businessFeatures = [
  { icon: Users, text: "Manage all your customers from one place" },
  { icon: CreditCard, text: "Track memberships and passes" },
  { icon: QrCode, text: "Monitor attendance with QR check in" },
  { icon: BarChart3, text: "View transactions and earnings" },
  { icon: Tag, text: "Manage pricing and passes" },
  { icon: Building2, text: "Update business information anytime" },
];

const steps = [
  {
    icon: MapPin,
    title: "Business Location",
    intro: "Set your studio on the map with a real, verified pin.",
    images: [`${IMG}/1.PNG`],
    points: [
      "Complete this step while you are physically present at your studio.",
      "Tap Use Current Location and allow the location permission when prompted.",
      "Location is mandatory. Your business is created only after real GPS coordinates are received, never a fake default.",
      "Stand at your main entrance for the most accurate pin.",
      "You cannot continue until coordinates are set. If permission is denied, enable location in Settings and try again.",
    ],
  },
  {
    icon: Building2,
    title: "Business Details",
    intro: "Tell customers who you are and where to find you.",
    images: [`${IMG}/+2.PNG`],
    points: [
      "Enter your studio name exactly as customers should see it.",
      "Choose your business category: gym, wellness, yoga, dance, swimming, or sports club.",
      "Write a short description of your studio and what you offer.",
      "Add your complete address along with a nearby landmark.",
      "City, State, and PIN code are auto filled from your location and cannot be edited.",
    ],
  },
  {
    icon: Phone,
    title: "Contact Information",
    intro: "Let members reach your studio directly.",
    images: [`${IMG}/3.PNG`],
    points: [
      "Add your reception or business contact number.",
      "Add your business email address.",
      "These details are visible to customers, so double check for typos.",
      "Use a number and inbox you actually monitor for bookings and queries.",
    ],
  },
  {
    icon: Tag,
    title: "Pricing & Passes",
    intro: "Set what members pay, starting with the core Pay Per Day pass.",
    images: [`${IMG}/4.PNG`, `${IMG}/4.1.PNG`],
    points: [
      "The Pay Per Day pass is mandatory. It is the core of Rivio, so set a fair single day price.",
      "Add optional passes for regulars: Weekly, Monthly, and Annual (365 days).",
      "Create custom passes for anything else, such as personal training packages.",
      "For every custom pass, enter the pass name, number of valid days, and price.",
      "Review all prices before continuing. This is exactly what members are charged.",
    ],
  },
  {
    icon: Dumbbell,
    title: "Amenities",
    intro: "Show what your studio offers, both free and paid.",
    images: [`${IMG}/5.PNG`, `${IMG}/5.1.PNG`],
    points: [
      "Select the free amenities you provide: drinking water, air conditioning, locker facility, parking, washrooms, Wi-Fi, and more.",
      "Add paid amenities and services such as personal training, protein shakes, a cafe, special fitness programs, or custom services.",
      "Enter a price for each paid service so members know the cost upfront.",
      "Accurate amenities build trust and make your profile stand out.",
    ],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    intro: "Configure when your studio is open, day by day.",
    images: [`${IMG}/6.PNG`],
    points: [
      "Set opening hours for each day of the week.",
      "Add multiple time slots in a single day, for example 5:00 AM to 10:00 AM and again 4:00 PM to 10:00 PM.",
      "Mark any day your studio is closed as Closed.",
      "Keep hours current so members never arrive to a closed door.",
    ],
  },
  {
    icon: Camera,
    title: "Upload Studio Photos",
    intro: "Great photos help members choose your studio.",
    images: [`${IMG}/7.PNG`],
    points: [
      "Upload at least five clear, high quality images of your studio.",
      "Show your key areas: equipment, workout floor, reception, and facilities.",
      "Use good lighting and real photos. They perform far better than stock images.",
      "Strong visuals help customers understand your space and improve your profile.",
    ],
  },
  {
    icon: Wallet,
    title: "Setup Wallet",
    intro: "Add your tax and bank details so settlements can be paid out.",
    images: [`${IMG}/8.PNG`],
    points: [
      "Add your PAN card or GSTIN. Both are optional, but they help with tax compliance and smoother payouts.",
      "Add your bank account details so settlements can be processed to you.",
      "Your wallet collects earnings from per visit payments and pass purchases.",
      "Request a settlement anytime to transfer your wallet balance to your bank account.",
    ],
  },
];

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[2rem] bg-gradient-to-br from-amber-200 via-amber-100 to-amber-50 p-2 shadow-xl shadow-amber-900/10 ring-1 ring-amber-200/70">
      <div className="overflow-hidden rounded-[1.5rem] bg-black ring-1 ring-black/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
      </div>
    </div>
  );
}

const PAGE_URL = `${SITE_URL}/partner-with-rivio/`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Partner with Rivio: Register Your Studio",
      description:
        "List your gym, yoga, or wellness studio on Rivio. Download the Rivio Business App and follow a simple 8 step onboarding to go live. No upfront registration charges.",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#rivio-partner-app` },
      primaryImageOfPage: BUSINESS_LOGO,
      dateModified: SITE_CONTENT_UPDATED_DATE,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Partner with Rivio", item: PAGE_URL },
      ],
    },
    {
      "@type": "HowTo",
      "@id": `${PAGE_URL}#howto`,
      name: "How to register your studio on Rivio",
      description:
        "Download the Rivio Business App and complete an 8 step onboarding to list your gym, yoga, or wellness studio on Rivio.",
      totalTime: "PT15M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "0" },
      supply: [{ "@type": "HowToSupply", name: "Rivio Business App" }],
      image: BUSINESS_LOGO,
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: [step.intro, ...step.points].join(" "),
        url: `${PAGE_URL}#roadmap`,
        image: step.images[0],
      })),
    },
  ],
};

export default function PartnerWithRivioPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-amber-50/40 to-white">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Image
              src={BUSINESS_LOGO}
              alt="Rivio Business app icon"
              width={96}
              height={96}
              className="mx-auto mb-6 h-20 w-20 rounded-[1.35rem] shadow-lg shadow-amber-900/15 ring-1 ring-amber-200"
              priority
            />
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-4 py-1.5 text-sm font-medium text-amber-700">
              <Handshake className="h-4 w-4" />
              For gyms, studios &amp; wellness centers
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Partner with Rivio
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
              List your studio, reach travellers and locals looking for short term fitness, and grow
              your footfall. Getting started is a simple, guided journey of eight steps.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <StoreCta
                links={BUSINESS_LINKS}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:from-amber-600 hover:to-amber-700"
              >
                <Download className="h-5 w-5" />
                Get the Business App
              </StoreCta>
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50"
              >
                See the roadmap
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Business Management Features */}
        <section className="mt-14 mb-16">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-900/5 md:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/25">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Business Management Features
                </h2>
                <p className="mt-1 text-gray-500">With the Rivio Business App, you can:</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {businessFeatures.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <item.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <p className="flex-1 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              <p className="leading-relaxed text-gray-700">
                Your existing members can also download the{" "}
                <span className="font-medium text-emerald-700">Rivio User App</span> to view their
                memberships, purchase passes, and mark attendance using the QR code available at your
                studio.
              </p>
            </div>
          </div>
        </section>

        {/* How to Register */}
        <section id="how-to-register" className="mb-16 scroll-mt-24">
          <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-8 shadow-xl shadow-amber-900/5 md:p-12">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/25">
                <Download className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                How to Register Your Studio
              </h2>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              To partner with Rivio, download the Rivio Business App using the button below. It opens
              the App Store or Google Play automatically based on your device.
            </p>
            <div className="max-w-md">
              <StoreCta
                links={BUSINESS_LINKS}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:from-amber-600 hover:to-amber-700"
              >
                <Download className="h-5 w-5" />
                Get the Business App
              </StoreCta>
            </div>
            <p className="mt-6 leading-relaxed text-gray-600">
              After creating your account with your business name, your name, and mobile number,
              follow the guided roadmap below.
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="mb-16 scroll-mt-24">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-4 py-1.5 text-sm font-medium text-amber-700">
              <MapPin className="h-4 w-4" />
              Onboarding roadmap
            </div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">Your journey in 8 steps</h2>
            <p className="mx-auto mt-2 max-w-2xl text-gray-500">
              Follow the road from account setup to going live. Here is exactly what each screen asks
              for.
            </p>
          </div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 sm:gap-6">
                {/* Rail */}
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-lg font-bold text-white shadow-md shadow-amber-500/30 ring-4 ring-amber-100">
                    {index + 1}
                  </div>
                  <div className="relative my-1 w-1 flex-1 rounded-full bg-gradient-to-b from-amber-400 to-amber-200">
                    <span className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow ring-1 ring-amber-200">
                      <ChevronDown className="h-4 w-4 text-amber-500" />
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="mb-8 flex-1 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg shadow-gray-900/5">
                  <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:gap-8 md:p-8">
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                          <step.icon className="h-3.5 w-3.5" />
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="mt-1.5 mb-4 text-gray-500">{step.intro}</p>
                      <ul className="space-y-2.5">
                        {step.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                            <span className="text-sm leading-relaxed text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Screenshots in theme frames */}
                    <div className="flex flex-shrink-0 items-start justify-center gap-3 md:w-auto">
                      {step.images.map((src) => (
                        <div key={src} className="w-[150px] sm:w-[160px]">
                          <PhoneFrame
                            src={src}
                            alt={`${step.title} screen in the Rivio Business App`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Finish milestone */}
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30 ring-4 ring-emerald-100">
                  <Flag className="h-5 w-5" />
                </div>
              </div>
              <div className="flex-1 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  Your studio is live on Rivio
                </h3>
                <p className="mt-2 leading-relaxed text-gray-700">
                  Once all eight steps are completed, your studio is successfully onboarded and ready
                  to welcome members. You can update any detail anytime from the Business App.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Model */}
        <section className="mb-16">
          <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-8 shadow-xl shadow-amber-900/5 md:p-12">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/25">
                <Handshake className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Partnership Model</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <p className="text-lg leading-relaxed text-gray-800">
                  There are no upfront registration charges for joining Rivio.
                </p>
              </div>
              <p className="leading-relaxed text-gray-600">
                Our platform helps fitness businesses increase footfall by connecting them with
                verified users looking for short term fitness options while travelling or staying in a
                new city.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 text-center shadow-xl shadow-gray-900/5 md:p-12">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Ready to list your studio?
            </h2>
            <p className="mx-auto mb-8 max-w-xl leading-relaxed text-gray-600">
              Download the Rivio Business App and complete onboarding at your studio. Questions? Reach
              our team anytime.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <StoreCta
                links={BUSINESS_LINKS}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:from-amber-600 hover:to-amber-700"
              >
                <Download className="h-5 w-5" />
                Get the Business App
              </StoreCta>
              <a
                href="mailto:partner@rivioapp.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50"
              >
                <Phone className="h-5 w-5" />
                partner@rivioapp.com
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Prefer to explore first? Read the{" "}
              <Link
                href="/business/partner-program"
                className="text-amber-600 underline hover:text-amber-700"
              >
                Partner Program
              </Link>{" "}
              details.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
