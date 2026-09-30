import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "About the Rivio User App",
  description:
    "About Rivio: gym finder and workout tracker with pay-per-day access in India. My Progress, QR check in, wallet, and studio Team profiles.",
  path: "/user/about/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
