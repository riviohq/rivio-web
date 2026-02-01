"use client";

import { Hero, Introduction, AppTabs, CitySearch, ContactUs } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative -mt-20">
      <Hero />
      <Introduction />
      <AppTabs />
      <CitySearch />
      <ContactUs />
    </div>
  );
}
