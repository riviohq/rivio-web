import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "About the Rivio Partner App",
  description:
    "What the Rivio partner app is and how studios grow with pay per day access, QR check in, and fast payouts.",
  path: "/partner/about/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
