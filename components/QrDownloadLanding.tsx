"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  detectPlatform,
  resolveStoreUrl,
  type Platform,
  type StoreLinks,
} from "@/lib/platform";
import {
  APP_STORE_URL_BUSINESS,
  APP_STORE_URL_USER,
  GOOGLE_PLAY_URL_BUSINESS,
  GOOGLE_PLAY_URL_USER,
} from "@/lib/storeUrls";

const MEMBER_ICON = "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio.png";
const PARTNER_ICON =
  "https://rivio-glimps.s3.ap-south-1.amazonaws.com/rivio_business.png";

const USER_LINKS: StoreLinks = {
  ios: APP_STORE_URL_USER,
  android: GOOGLE_PLAY_URL_USER,
};

const PARTNER_LINKS: StoreLinks = {
  ios: APP_STORE_URL_BUSINESS,
  android: GOOGLE_PLAY_URL_BUSINESS,
};

export default function QrDownloadLanding() {
  // Default to App Store on SSR/first paint; refine once we know the device.
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const userStoreUrl = resolveStoreUrl(platform, USER_LINKS);
  const partnerStoreUrl = resolveStoreUrl(platform, PARTNER_LINKS);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f5f5f7] to-[#fbfbfd] px-4 py-10 text-[#1d1d1f]">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-400/[0.14] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-400/[0.12] blur-3xl"
        aria-hidden
      />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_12px_60px_-16px_rgba(0,0,0,0.25)] sm:p-8"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-emerald-500/[0.08] to-transparent"
            aria-hidden
          />

          <div className="relative">
            {/* App identity */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl bg-white p-1.5 shadow-md ring-1 ring-black/[0.06]">
                <Image
                  src={MEMBER_ICON}
                  alt="Rivio app icon"
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-2xl"
                  priority
                />
              </div>
              <h1 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
                Get the Rivio App
              </h1>
              <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73]">
                Find gyms, yoga &amp; sports near you and pay only for the days
                you show up.
              </p>
            </div>

            {/* Primary download — one tap straight to the store */}
            <a
              href={userStoreUrl}
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#1d1d1f] text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-black active:scale-[0.99]"
            >
              <Download className="h-5 w-5" />
              Get the App
            </a>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-black/[0.08]" />
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#a1a1a6]">
                or
              </span>
              <span className="h-px flex-1 bg-black/[0.08]" />
            </div>

            {/* Partnership program — one tap straight to the partner store */}
            <div className="rounded-2xl border border-amber-200/70 bg-amber-50/60 p-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/[0.06]">
                  <Image
                    src={PARTNER_ICON}
                    alt="Rivio Partner app icon"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#1d1d1f]">
                    Own a gym or studio?
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#6e6e73]">
                    List your space and grow with Rivio Partner.
                  </p>
                </div>
              </div>
              <a
                href={partnerStoreUrl}
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-amber-600 active:scale-[0.99]"
              >
                <Handshake className="h-5 w-5" />
                Join Partnership Program
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-center text-xs text-[#a1a1a6]">
              Free on iPhone &amp; Android ·{" "}
              <Link
                href="/download/"
                className="font-medium text-emerald-600 underline-offset-4 hover:underline"
              >
                All download links
              </Link>
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
