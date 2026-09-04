"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Static-export friendly redirect: /latest now lives at /pulse. */
export default function RedirectToPulse() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/pulse/");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbfbfd] px-4 text-center text-[#1d1d1f]">
      <div>
        <p className="text-lg font-semibold">Redirecting to Rivio Pulse…</p>
        <p className="mt-2 text-sm text-[#6e6e73]">
          If nothing happens,{" "}
          <Link
            href="/pulse/"
            className="font-medium text-emerald-600 underline-offset-4 hover:underline"
          >
            open Rivio Pulse
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
