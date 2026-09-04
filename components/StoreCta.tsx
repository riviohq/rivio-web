"use client";

import { useEffect, useState } from "react";
import {
  detectPlatform,
  resolveStoreUrl,
  type Platform,
  type StoreLinks,
} from "@/lib/platform";

/**
 * Device-aware store link. Renders a single anchor that resolves to the
 * App Store (iOS/desktop) or Google Play (Android) for the given app.
 */
export default function StoreCta({
  links,
  className,
  children,
}: {
  links: StoreLinks;
  className?: string;
  children: React.ReactNode;
}) {
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  return (
    <a
      href={resolveStoreUrl(platform, links)}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
