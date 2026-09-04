import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Business App Support",
  description:
    "Help and support for Rivio partner studios. Get answers on onboarding, passes, attendance, payouts, and account questions.",
  path: "/business/support/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
