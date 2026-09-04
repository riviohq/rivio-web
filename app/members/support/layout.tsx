import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Member Support",
  description:
    "Help and support for Rivio members. Get answers on passes, bookings, QR check in, payments, and your account.",
  path: "/members/support/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
