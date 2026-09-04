import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Partner Program for Studios",
  description:
    "Join the Rivio partner program. No upfront charges, fast payouts, QR check in, and real time analytics for your gym, yoga, or wellness studio.",
  path: "/business/partner-program/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
