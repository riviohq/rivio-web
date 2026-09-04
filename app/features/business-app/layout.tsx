import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Business App Features",
  description:
    "Manage customers, passes, attendance, pricing, and payouts. See what the Rivio Partner business app does for your gym or studio.",
  path: "/features/business-app/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
