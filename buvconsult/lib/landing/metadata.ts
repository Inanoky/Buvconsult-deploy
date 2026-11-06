import type { Metadata } from "next";
import {
	LANDING_LOCALES,
	LANDING_STATIC_PATHS,
	type LandingDocumentMetadata,
	type LandingLocale,
	type LandingMetadataMap,
} from "@/components/landing/navigation/landing-routes";
import { buildLandingMetadata } from "@/lib/seo/landingMetadata";
import { landingMessages } from "./locale-resources";

const labels = {
	lv: {
		About: "Par mums",
		Analytics: "Finanšu analītika",
		CaseStudies: "Pieredze",
		ContactForm: "Kontakti",
		Custom: "Pielāgoti aģenti",
		DataDeletion: "Datu dzēšana",
		Manufacturing: "Ražošanas risinājumi",
		News: "Ziņas",
		Privacy: "Privātuma politika",
		SiteDiary: "Darbu uzskaite",
		ThankYou: "Paldies",
		Timesheets: "Darba laika uzskaite",
		"BIS-integracija": "BIS dokumentācijas pārvaldība",
	},
	en: {
		About: "About us",
		Analytics: "Financial analytics",
		CaseStudies: "Experience",
		ContactForm: "Contact",
		Custom: "Custom agents",
		DataDeletion: "Data deletion",
		Manufacturing: "Manufacturing solutions",
		News: "News",
		Privacy: "Privacy policy",
		SiteDiary: "Work records",
		ThankYou: "Thank you",
		Timesheets: "Timesheets",
		"BIS-integracija": "BIS documentation",
	},
	ru: {
		About: "О нас",
		Analytics: "Финансовая аналитика",
		CaseStudies: "Опыт",
		ContactForm: "Контакты",
		Custom: "Индивидуальные агенты",
		DataDeletion: "Удаление данных",
		Manufacturing: "Решения для производства",
		News: "Новости",
		Privacy: "Политика конфиденциальности",
		SiteDiary: "Учёт работ",
		ThankYou: "Спасибо",
		Timesheets: "Учёт рабочего времени",
		"BIS-integracija": "Документация BIS",
	},
};

export function getLandingPageMetadata(
	locale: LandingLocale,
	path: string,
): Metadata {
	const copy = landingMessages[locale].AgentLanding;
	const segment = path.split("/")[2];
	const title =
		path === "/Landing"
			? `${copy.title} ${copy.titleHighlight} | Buvconsult`
			: `${segment === "Agents" ? copy.catalogTitle : segment === "Pricing" ? copy.pricingPageTitle : segment === "Services" ? copy.servicesPageTitle : labels[locale][segment as keyof typeof labels.lv] || segment} | Buvconsult`;
	const metadata = buildLandingMetadata({
		locale,
		path,
		title,
		description: copy.description,
		keywords: ["Buvconsult", "AI agents", "construction"],
	});
	const localizedPath = (language: string) =>
		`https://buvconsult.com/${language}${path === "/Landing" ? "" : path}`;
	metadata.alternates = {
		canonical: localizedPath(locale),
		languages: Object.fromEntries([
			...LANDING_LOCALES.map((language) => [
				language === "lv" ? "lv-LV" : language,
				localizedPath(language),
			]),
			["x-default", localizedPath("lv")],
		]),
	};
	return metadata;
}

function documentMetadata(metadata: Metadata): LandingDocumentMetadata {
	const title =
		typeof metadata.title === "string"
			? metadata.title
			: metadata.title && "absolute" in metadata.title
				? metadata.title.absolute
				: "Buvconsult";
	const canonical = String(
		metadata.alternates?.canonical || "https://buvconsult.com",
	);
	return {
		title,
		meta: {
			description: [metadata.description || ""],
			"og:title": [title],
			"og:description": [metadata.description || ""],
			"og:url": [canonical],
			"og:site_name": ["Buvconsult"],
			"og:type": ["website"],
			"og:image": ["https://buvconsult.com/og-lv.png"],
			"twitter:card": ["summary_large_image"],
			"twitter:title": [title],
			"twitter:description": [metadata.description || ""],
		},
		links: [
			{ rel: "canonical", href: canonical },
			...Object.entries(metadata.alternates?.languages || {}).map(
				([hrefLang, value]) => ({
					rel: "alternate",
					hrefLang,
					href: String(value),
				}),
			),
		],
	};
}

export function getLandingNavigationMetadata(
	locale: LandingLocale,
): LandingMetadataMap {
	return Object.fromEntries(
		LANDING_STATIC_PATHS.map((path) => [
			path,
			documentMetadata(getLandingPageMetadata(locale, path)),
		]),
	);
}
