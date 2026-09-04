import type { Metadata } from "next";
import QrDownloadLanding from "@/components/QrDownloadLanding";
import { SITE_URL } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Get the Rivio App",
  description:
    "Scan, tap, download. Get Rivio for gyms, yoga and sports, or join the Rivio Partner program. Free on iPhone and Android.",
  // QR landing page: keep out of the index so it doesn't compete with /download.
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/get-the-app/` },
};

export default function GetAppPage() {
  return <QrDownloadLanding />;
}
