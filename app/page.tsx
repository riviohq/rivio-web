"use client";

import { Hero, Introduction, AppTabs, CitySearch, ContactUs } from "@/components";
import ProgressShowcase from "@/components/ProgressShowcase";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative -mt-20">
      <Hero />
      <ProgressShowcase />
      <Introduction />
      <AppTabs />
      <CitySearch />
      <ContactUs />
    </div>
  );
}
