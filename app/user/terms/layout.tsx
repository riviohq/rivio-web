import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio User App Terms & Conditions",
  description:
    "Terms of use for the Rivio user app.",
  path: "/user/terms/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
