import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "App Features: Member & Partner Apps",
  description:
    "Explore what the Rivio member and partner apps do: pay per day access, QR check in, passes, earnings, and full studio management in one place.",
  path: "/features/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
