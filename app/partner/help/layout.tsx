import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Partner Help Center",
  description:
    "Partner help: Manage Team, staff photos, staff passes, QR check in, passes, earnings, and what members see on the Team tab.",
  path: "/partner/help/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
