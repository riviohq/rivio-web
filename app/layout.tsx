import type { Metadata } from "next";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";
import MarketingJsonLd from "@/components/MarketingJsonLd";
import { FOUNDER_LINKEDIN, FOUNDER_NAME } from "@/lib/brandLinks";
import { SITE_SEO_KEYWORDS } from "@/lib/seoKeywords";
import { SITE_URL } from "@/lib/siteContent";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RIVIO | Pay Per Day Gym, Yoga & Fitness – No Subscription",
    template: "%s | RIVIO",
  },
  description:
    "Pay per day at any gym, yoga studio, or wellness center. No subscription, no commitment. Download Rivio on the App Store — India's flexible fitness access.",
  keywords: SITE_SEO_KEYWORDS,
  authors: [
    { name: "RIVIO", url: SITE_URL },
    { name: FOUNDER_NAME, url: FOUNDER_LINKEDIN },
  ],
  creator: "RIVIO",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "RIVIO | Pay Per Day Gym, Yoga & Fitness – No Subscription",
    description:
      "Pay per day at any gym, yoga, or studio. No subscription. Download on the App Store.",
    type: "website",
    url: SITE_URL,
    siteName: "RIVIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIVIO | Pay Per Day Fitness",
    description: "One app. Any gym or yoga. Pay only when you go.",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-black text-white">
        <MarketingJsonLd />
        <NavigationWrapper />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
