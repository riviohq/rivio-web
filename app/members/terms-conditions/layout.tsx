import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Member Terms & Conditions",
  description:
    "Terms of use for Rivio members using the pay per day fitness app.",
  path: "/members/terms-conditions/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
