import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Buvconsult",
    short_name: "Buvconsult",
    description: "Construction software and AI solutions built around real workflows.",
    start_url: "/lv",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#059669",
    icons: [{ src: "/buvconsultLogo.png", sizes: "any", type: "image/png" }],
  };
}
