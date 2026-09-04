import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/pageSeo";

export const metadata = pageMetadata({
  title: "Rivio Member App Features",
  description:
    "Find gyms, yoga, and studios near you, buy passes, pay per day, and check in with a QR code. See everything the Rivio member app offers.",
  path: "/features/member-app/",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
