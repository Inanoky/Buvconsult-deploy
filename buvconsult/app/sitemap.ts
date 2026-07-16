import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { localizedPath, staticLocalizedPages } from "@/lib/site-routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-16");

  return staticLocalizedPages().map(({ page, path }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: page === "home" ? "weekly" : page === "privacy" ? "yearly" : "monthly",
    priority: page === "home" ? 1 : page === "contact" ? 0.8 : page === "privacy" ? 0.3 : 0.7,
    alternates: {
      languages: {
        "lv-LV": `${siteUrl}${localizedPath("lv", page)}`,
        en: `${siteUrl}${localizedPath("en", page)}`,
      },
    },
  }));
}
