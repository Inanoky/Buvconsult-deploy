import { notFound } from "next/navigation";
import {
	getLandingRoute,
	LANDING_LOCALES,
	LANDING_STATIC_PATHS,
} from "@/components/landing/navigation/landing-routes";
import { getLandingPageMetadata } from "@/lib/landing/metadata";
import { landingNewsArticles, readLandingNews } from "@/lib/landing/news";
import { renderLandingPage } from "@/lib/landing/render-page";

export const dynamicParams = false;

type PageParams = { locale: string; path?: string[] };

function resolveRoute({ locale, path = [] }: PageParams) {
	return getLandingRoute(
		new URL(
			`https://buvconsult.com/${locale}/Landing${path.length ? `/${path.join("/")}` : ""}`,
		),
	);
}

export function generateStaticParams() {
	const paths = [
		...LANDING_STATIC_PATHS,
		...landingNewsArticles.map((article) => `/Landing/News/${article.id}`),
	];
	return LANDING_LOCALES.flatMap((locale) =>
		paths
			.filter((path) =>
				getLandingRoute(new URL(`https://buvconsult.com/${locale}${path}`)),
			)
			.map((path) => ({
				locale,
				path: path
					.replace(/^\/Landing\/?/, "")
					.split("/")
					.filter(Boolean),
			})),
	);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<PageParams>;
}) {
	const route = resolveRoute(await params);
	if (!route) return {};
	const metadata = getLandingPageMetadata(route.locale, route.path);
	if (route.articleId) {
		const data = readLandingNews(
			`locale=${route.locale}&id=${route.articleId}`,
		);
		if ("article" in data) {
			metadata.title = {
				absolute: `${data.article.seoTitle || data.article.headline} | Buvconsult`,
			};
			metadata.description = data.article.seoDescription;
		}
	}
	return metadata;
}

export default async function Page({
	params,
}: {
	params: Promise<PageParams>;
}) {
	const route = resolveRoute(await params);
	if (!route) notFound();
	return renderLandingPage(route);
}
