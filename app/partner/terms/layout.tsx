import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Partner App Terms & Conditions",
  description:
    "Terms of use for the Rivio partner app.",
  path: "/partner/terms/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
