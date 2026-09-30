import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Business App Support",
  description:
    "Partner support: Manage Team, staff photos, staff passes, onboarding, QR check in, passes, payouts, and member-facing Team tab.",
  path: "/business/support/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
