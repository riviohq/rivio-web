import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Business App Support",
  description:
    "Partner support: smart door lock, Manage Team, staff passes, QR check-in, passes, payouts, and FAQs. Setup guide at /help/smart-door-lock/.",
  path: "/business/support/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
