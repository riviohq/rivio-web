import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Business Privacy Policy",
  description:
    "How the Rivio partner business app collects, uses, and protects studio and customer data.",
  path: "/business/privacy-policy/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
