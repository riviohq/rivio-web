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
    default: "RIVIO | Gym Finder, Workout Tracker & Pay Per Day Fitness India",
    template: "%s | RIVIO",
  },
  description:
    "Find gyms near you, track my workout with My Progress, and pay per day at gyms, yoga studios, and wellness venues. No subscription required. Rivio is India's gym finder and workout tracker in one app.",
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
    title: "RIVIO | Gym Finder & Workout Tracker | Pay Per Day Fitness",
    description:
      "Track my workout, find gyms near me, meet coaches, and pay only for the days you train. Download Rivio.",
    type: "website",
    url: SITE_URL,
    siteName: "RIVIO",
    images: [
      {
        url: "/assets/progress/progress-overview.png",
        width: 1170,
        height: 2532,
        alt: "Rivio My Progress workout tracker overview",
      },
      {
        url: "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png",
        width: 512,
        height: 512,
        alt: "RIVIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIVIO | Workout Tracker + Gym Finder",
    description: "Log workouts, find gyms, pay per day. One app for training and access.",
    images: ["/assets/progress/workout-history.png"],
  },
  alternates: { canonical: SITE_URL },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
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
