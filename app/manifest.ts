import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RIVIO: Pay Per Day Gym, Yoga & Fitness",
    short_name: "RIVIO",
    description:
      "Pay per day at any gym, yoga studio, or wellness center in India. No subscription, no commitment.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10b981",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
