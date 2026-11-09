"use client";

import { Hero, Introduction, AppTabs, CitySearch, ContactUs } from "@/components";
import ProgressShowcase from "@/components/ProgressShowcase";
import LearnShowcase from "@/components/LearnShowcase";
import FrontDeskShowcase from "@/components/FrontDeskShowcase";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative -mt-20">
      <Hero />
      <LearnShowcase />
      <ProgressShowcase />
      <FrontDeskShowcase />
      <Introduction />
      <AppTabs />
      <CitySearch />
      <ContactUs />
    </div>
  );
}
