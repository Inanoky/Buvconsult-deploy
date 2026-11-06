"use client";

import type { ReactNode } from "react";
import type { StoredNewsArticle } from "@/lib/news/store";
import type { LandingDocumentMetadata, LandingRoute } from "./landing-routes";

export type LoadedLandingPage = {
	render: () => ReactNode;
	metadata?: LandingDocumentMetadata;
};

const loaders: Record<string, () => Promise<LoadedLandingPage>> = {
	"/Landing": () =>
		import("@/components/landing/pages/ClientPage").then(({ default: Page }) => ({
			render: () => <Page />,
		})),
	"/Landing/About": () =>
		import("@/components/landing/pages/About/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/Agents": () =>
		import("@/components/landing/pages/Agents/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/Analytics": () =>
		import("@/components/landing/pages/Analytics/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/BIS-integracija": () =>
		import("@/components/landing/pages/BIS-integracija/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/CaseStudies": () =>
		import("@/components/landing/pages/CaseStudies/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/CaseStudies/Article_1": () =>
		import("@/components/landing/pages/CaseStudies/Article_1/page").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/CaseStudies/Article_2_AI_construction": () =>
		import(
			"@/components/landing/pages/CaseStudies/Article_2_AI_construction/page"
		).then(({ default: Page }) => ({ render: () => <Page /> })),
	"/Landing/CaseStudies/Deprom": () =>
		import("@/components/landing/pages/CaseStudies/Deprom/page").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/CaseStudies/LEC": () =>
		import("@/components/landing/pages/CaseStudies/LEC/page").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/CaseStudies/U-fix": () =>
		import("@/components/landing/pages/CaseStudies/U-fix/page").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/CaseStudies/how-to-track-construction-site-progress": () =>
		import(
			"@/components/landing/pages/CaseStudies/how-to-track-construction-site-progress/ClientPage"
		).then(({ default: Page }) => ({ render: () => <Page /> })),
	"/Landing/ContactForm": () =>
		import("@/components/landing/pages/ContactForm/page").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/Custom": () =>
		import("@/components/landing/pages/Custom/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/DataDeletion": () =>
		import("@/components/landing/pages/DataDeletion/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/Manufacturing": () =>
		import("@/components/landing/pages/Manufacturing/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/Pricing": () =>
		import("@/components/landing/pages/Pricing/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/Privacy": () =>
		import("@/components/landing/pages/Privacy/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/Services": () =>
		import("@/components/landing/pages/Services/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/SiteDiary": () =>
		import("@/components/landing/pages/SiteDiary/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/ThankYou": () =>
		import("@/components/landing/pages/ThankYou/page").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
	"/Landing/Timesheets": () =>
		import("@/components/landing/pages/Timesheets/ClientPage").then(
			({ default: Page }) => ({ render: () => <Page /> }),
		),
};

type NewsList = {
	articles: StoredNewsArticle[];
	totalArticles: number;
	currentPage: number;
};

async function readNews<T>(query: string): Promise<T> {
 const { readLandingNews } = await import("@/lib/landing/news");
 return readLandingNews(query) as T;
}

async function loadPage(route: LandingRoute): Promise<LoadedLandingPage> {
	if (route.articleId) {
		const [{ default: Page }, data] = await Promise.all([
			import("@/components/landing/pages/News/[id]/ClientPage"),
			readNews<{
				article: StoredNewsArticle;
				metadata: LandingDocumentMetadata;
			}>(
				new URLSearchParams({
					locale: route.locale,
					id: String(route.articleId),
				}).toString(),
			),
		]);
		return {
			render: () => <Page article={data.article} />,
			metadata: data.metadata,
		};
	}
	if (route.path === "/Landing/News") {
		const [{ default: Page }, data] = await Promise.all([
			import("@/components/landing/pages/News/ClientPage"),
			readNews<NewsList>(
				new URLSearchParams({
					locale: route.locale,
					page: String(route.page),
				}).toString(),
			),
		]);
		return { render: () => <Page {...data} /> };
	}
	if (
		["Limeni", "FIMA", "TGEM", "StoneAndTree"].includes(
			route.path.split("/").at(-1) || "",
		)
	) {
		const { default: Page } = await import(
			"@/components/landing/pages/CaseStudies/[slug]/ClientPage"
		);
		return { render: () => <Page slug={route.path.split("/").at(-1) || ""} /> };
	}
	return loaders[route.path]();
}

const pages = new Map<
	string,
	{ promise: Promise<LoadedLandingPage>; expiresAt: number }
>();

export function preloadLandingPage(
	route: LandingRoute,
): Promise<LoadedLandingPage> {
	const existing = pages.get(route.key);
	if (existing && existing.expiresAt > Date.now()) return existing.promise;
	const promise = loadPage(route).catch((error) => {
		if (pages.get(route.key)?.promise === promise) pages.delete(route.key);
		throw error;
	});
	pages.set(route.key, {
		promise,
		expiresAt: route.path.startsWith("/Landing/News")
			? Date.now() + 300_000
			: Infinity,
	});
	return promise;
}
