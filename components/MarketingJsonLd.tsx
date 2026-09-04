import { FOUNDER_NAME, FOUNDER_SAME_AS, RIVIO_COMPANY_SAME_AS } from "@/lib/brandLinks";
import {
  APP_STORE_URL_BUSINESS,
  APP_STORE_URL_USER,
  GOOGLE_PLAY_URL_BUSINESS,
  GOOGLE_PLAY_URL_USER,
} from "@/lib/storeUrls";
import { SITE_CONTENT_UPDATED_DATE, SITE_URL } from "@/lib/siteContent";

const ORG_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

export default function MarketingJsonLd() {
  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "RIVIO",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.png`,
    },
    sameAs: [...RIVIO_COMPANY_SAME_AS],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    founder: { "@id": FOUNDER_ID },
    description:
      "Pay per day at gyms, yoga studios, and wellness centers in India. Flexible fitness without long-term subscriptions.",
  };

  const founder: Record<string, unknown> = {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: FOUNDER_NAME,
    givenName: "Amandeep",
    familyName: "Bishnoi",
    jobTitle: "Founder",
    worksFor: { "@id": ORG_ID },
    sameAs: [...FOUNDER_SAME_AS],
    knowsAbout: [
      "Pay per day gym",
      "Fitness marketplace India",
      "Yoga and studio access",
      "Sports and wellness technology",
      "Gym partner onboarding",
      "Mobile health applications",
    ],
  };

  const userApp: Record<string, unknown> = {
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#rivio-user-app`,
    name: "Rivio: Gym, Yoga & Sports",
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    downloadUrl: APP_STORE_URL_USER,
    installUrl: GOOGLE_PLAY_URL_USER,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    publisher: { "@id": ORG_ID },
  };

  const partnerApp: Record<string, unknown> = {
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#rivio-partner-app`,
    name: "Rivio Partner: Business App",
    operatingSystem: "iOS, Android",
    applicationCategory: "BusinessApplication",
    downloadUrl: APP_STORE_URL_BUSINESS,
    installUrl: GOOGLE_PLAY_URL_BUSINESS,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    publisher: { "@id": ORG_ID },
  };

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "RIVIO",
    description:
      "Pay per day at gyms, yoga studios, and wellness centers in India. No subscription.",
    inLanguage: "en-IN",
    dateModified: SITE_CONTENT_UPDATED_DATE,
    publisher: { "@id": ORG_ID },
  };

  const payload = {
    "@context": "https://schema.org",
    "@graph": [organization, founder, website, userApp, partnerApp],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
