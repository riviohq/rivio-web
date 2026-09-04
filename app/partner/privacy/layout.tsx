import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Partner App Privacy Policy",
  description:
    "Privacy policy for the Rivio partner app: how studio and customer data is collected, used, and protected.",
  path: "/partner/privacy/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
