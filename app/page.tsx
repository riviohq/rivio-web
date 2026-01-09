"use client";

import { useEffect, useState } from "react";
import {
  Navigation,
  Hero,
  Introduction,
  AppTabs,
  CitySearch,
  ContactUs,
  Footer,
} from "@/components";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden relative bg-black">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Introduction />
      <AppTabs />
      <CitySearch />
      <ContactUs />
    </main>
  );
}
