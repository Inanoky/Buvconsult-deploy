import articles from "@/data/landing-news.json";
import type {
	LandingDocumentMetadata,
	LandingLocale,
} from "@/components/landing/navigation/landing-routes";
import type { StoredNewsArticle } from "@/lib/news/store";
import { getLandingNavigationMetadata } from "./metadata";

export const landingNewsArticles: StoredNewsArticle[] = articles;

type NewsResult =
	| {
			articles: StoredNewsArticle[];
			totalArticles: number;
			currentPage: number;
	  }
	| { article: StoredNewsArticle; metadata: LandingDocumentMetadata };

export function readLandingNews(query: string): NewsResult {
	const params = new URLSearchParams(query);
	const locale = (params.get("locale") as LandingLocale) || "lv";
	const id = Number(params.get("id"));
	if (id) {
		const article = landingNewsArticles.find((item) => item.id === id);
		if (!article) throw new Error("Article unavailable");
		const metadata = getLandingNavigationMetadata(locale)["/Landing/News"];
		return {
			article,
			metadata: {
				...metadata,
				title: `${article.seoTitle || article.headline} | Buvconsult`,
				meta: {
					...metadata.meta,
					description: [article.seoDescription],
					"og:title": [article.seoTitle || article.headline],
				},
				links: [
					{
						rel: "canonical",
						href: `https://buvconsult.com/${locale}/Landing/News/${id}`,
					},
				],
			},
		};
	}
	const currentPage = Math.max(1, Number(params.get("page")) || 1);
	return {
		articles: landingNewsArticles.slice((currentPage - 1) * 6, currentPage * 6),
		totalArticles: landingNewsArticles.length,
		currentPage,
	};
}
