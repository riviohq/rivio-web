import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Member Support",
  description:
    "Help for Rivio members: gym finder, My Progress workout tracking, passes, QR check in, wallet, streaks, and studio Team profiles.",
  path: "/members/support/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
