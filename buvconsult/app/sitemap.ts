import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import {
	getLandingRoute,
	LANDING_LOCALES,
	LANDING_STATIC_PATHS,
} from "@/components/landing/navigation/landing-routes";
import { landingNewsArticles } from "@/lib/landing/news";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date("2026-11-06");

	const paths = [
		"",
		...LANDING_STATIC_PATHS.filter((path) => path !== "/Landing"),
		...landingNewsArticles.map((article) => `/Landing/News/${article.id}`),
	];
	return LANDING_LOCALES.flatMap((locale) =>
		paths
			.filter((path) => getLandingRoute(new URL(`${siteUrl}/${locale}${path}`)))
			.map((path) => ({
				url: `${siteUrl}/${locale}${path}`,
				lastModified,
				changeFrequency:
					path === "" ? ("weekly" as const) : ("monthly" as const),
				priority: path === "" ? 1 : 0.7,
				alternates: {
					languages: {
						"lv-LV": `${siteUrl}/lv${path}`,
						en: `${siteUrl}/en${path}`,
						ru: `${siteUrl}/ru${path}`,
					},
				},
			})),
	);
}
