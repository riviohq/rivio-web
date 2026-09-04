import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Business Terms & Conditions",
  description:
    "Terms of use for Rivio partner studios using the Rivio business app.",
  path: "/business/terms-conditions/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
