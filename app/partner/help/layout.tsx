import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Partner Help Center",
  description:
    "Answers for Rivio partners: studio setup, pricing and passes, attendance, and settlements in the Rivio partner app.",
  path: "/partner/help/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
