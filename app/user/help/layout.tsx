import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio User Help Center",
  description:
    "Answers for Rivio members: finding studios, buying passes, QR check in, and payments in the Rivio user app.",
  path: "/user/help/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
