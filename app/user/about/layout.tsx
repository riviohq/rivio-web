import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "About the Rivio User App",
  description:
    "What the Rivio user app is and how pay per day fitness works for members across gyms, yoga studios, and wellness centers in India.",
  path: "/user/about/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
