import type { Metadata } from "next";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RIVIO | Gym, Yoga & Sports Activities",
  description:
    "Pay-per-day fitness access. No multiple subscriptions. Access any gym, yoga studio, or wellness center instantly.",
  keywords:
    "fitness, gym, yoga, wellness, pay per day, flexible fitness, RIVIO",
  authors: [{ name: "RIVIO APP" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "RIVIO | Gym, Yoga & Sports Activities",
    description: "Pay-per-day fitness access. No multiple subscriptions.",
    type: "website",
  },
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
        <NavigationWrapper />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
