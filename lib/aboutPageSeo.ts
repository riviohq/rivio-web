import type { Metadata } from "next";
import { FOUNDER_NAME } from "@/lib/brandLinks";
import { SITE_URL } from "@/lib/siteContent";

type AboutVariant = "members" | "business";

const copy: Record<
  AboutVariant,
  { title: string; description: string; h1Context: string }
> = {
  members: {
    title: `About RIVIO: Pay-Per-Day Gym & Fitness App India | ${FOUNDER_NAME}`,
    description: `RIVIO is India's pay-per-day fitness platform founded by ${FOUNDER_NAME}. Discover gyms, yoga & wellness venues, check in with QR, and pay only for days you use, with no long-term subscription. Member app on App Store & Google Play.`,
    h1Context:
      "Universal fitness access. Pay per day, no subscription lock-in. Founded by Amandeep Bishnoi.",
  },
  business: {
    title: `About RIVIO Partner: Gym Business App India | ${FOUNDER_NAME}`,
    description: `RIVIO Partner helps gyms and wellness venues in India manage QR check-ins, visits, earnings, and settlements. Built by founder ${FOUNDER_NAME}. Partner app on App Store & Google Play.`,
    h1Context:
      "Business management for gyms & studios: live visits, payouts, and venue tools. By Amandeep Bishnoi, Founder of RIVIO.",
  },
};

export function aboutPageMetadata(variant: AboutVariant, path: string): Metadata {
  const { title, description } = copy[variant];
  const pageUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      FOUNDER_NAME,
      "Amandeep Bishnoi Rivio",
      "Amandeep Bishnoi founder",
      "Rivio app",
      "RIVIO fitness India",
      "pay per day gym India",
      "gym app India",
      "fitness marketplace India",
      "rivioapp.com",
      variant === "members" ? "RIVIO Gym Yoga Sports" : "RIVIO Partner Business App",
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "RIVIO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function aboutPageJsonLd(variant: AboutVariant, path: string) {
  const pageUrl = `${SITE_URL}${path}`;
  const { description } = copy[variant];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: variant === "members" ? "About RIVIO: Members" : "About RIVIO Partner",
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#founder` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: FOUNDER_NAME,
        jobTitle: "Founder",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/founder/`,
      },
    ],
  };
}
