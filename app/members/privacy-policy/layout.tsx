import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Member Privacy Policy",
  description:
    "How Rivio collects, uses, and protects member data in the pay per day fitness app.",
  path: "/members/privacy-policy/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
