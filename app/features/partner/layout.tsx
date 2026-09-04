import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Partner App: Features for Studios",
  description:
    "Onboard your studio, set passes, track visits, and manage settlements with the Rivio partner app. Built for gyms, yoga, and wellness centers.",
  path: "/features/partner/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
