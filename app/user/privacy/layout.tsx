import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio User App Privacy Policy",
  description:
    "Privacy policy for the Rivio user app: what data we collect, how we use it, and how we keep it protected.",
  path: "/user/privacy/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
