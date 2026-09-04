import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio User App: Features for Members",
  description:
    "Discover gyms and studios, pay per day with no subscription, and manage passes and attendance in the Rivio user app.",
  path: "/features/user/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
