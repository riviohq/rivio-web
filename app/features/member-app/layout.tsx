import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Member App Features",
  description:
    "Gym finder and workout tracker in one app: My Progress, pay per day, wallet, QR check in, passes, streaks, and coach Team pages on studios.",
  path: "/features/member-app/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
