import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio User Help Center",
  description:
    "Answers for Rivio members: gym finder, My Progress workout tracker, passes, QR check in, wallet, and Team on studio pages.",
  path: "/user/help/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
