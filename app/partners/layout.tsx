import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Become a Rivio Partner",
  description:
    "Grow footfall by listing your gym, yoga, or wellness studio on Rivio. Reach travellers and locals looking for pay per day fitness, with no upfront charges.",
  path: "/partners/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
