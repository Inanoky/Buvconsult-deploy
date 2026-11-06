import type { ComponentType } from "react";
import type { LandingRoute } from "@/components/landing/navigation/landing-routes";
import CustomerExperiencePage from "@/components/landing/pages/CaseStudies/[slug]/ClientPage";
import NewsPage from "@/components/landing/pages/News/ClientPage";
import ArticlePage from "@/components/landing/pages/News/[id]/ClientPage";
import { readLandingNews } from "./news";
import Page0 from "@/components/landing/pages/ClientPage";
import Page1 from "@/components/landing/pages/About/ClientPage";
import Page2 from "@/components/landing/pages/Agents/ClientPage";
import Page3 from "@/components/landing/pages/Analytics/ClientPage";
import Page4 from "@/components/landing/pages/BIS-integracija/ClientPage";
import Page5 from "@/components/landing/pages/CaseStudies/ClientPage";
import Page6 from "@/components/landing/pages/CaseStudies/Article_1/page";
import Page7 from "@/components/landing/pages/CaseStudies/Article_2_AI_construction/page";
import Page8 from "@/components/landing/pages/CaseStudies/Deprom/page";
import Page9 from "@/components/landing/pages/CaseStudies/LEC/page";
import Page10 from "@/components/landing/pages/CaseStudies/U-fix/page";
import Page11 from "@/components/landing/pages/CaseStudies/how-to-track-construction-site-progress/ClientPage";
import Page12 from "@/components/landing/pages/ContactForm/page";
import Page13 from "@/components/landing/pages/Custom/ClientPage";
import Page14 from "@/components/landing/pages/DataDeletion/ClientPage";
import Page15 from "@/components/landing/pages/Manufacturing/ClientPage";
import Page16 from "@/components/landing/pages/Pricing/ClientPage";
import Page17 from "@/components/landing/pages/Privacy/ClientPage";
import Page18 from "@/components/landing/pages/Services/ClientPage";
import Page19 from "@/components/landing/pages/SiteDiary/ClientPage";
import Page20 from "@/components/landing/pages/ThankYou/page";
import Page21 from "@/components/landing/pages/Timesheets/ClientPage";

const pages: Record<string, ComponentType> = {
	"/Landing": Page0,
	"/Landing/About": Page1,
	"/Landing/Agents": Page2,
	"/Landing/Analytics": Page3,
	"/Landing/BIS-integracija": Page4,
	"/Landing/CaseStudies": Page5,
	"/Landing/CaseStudies/Article_1": Page6,
	"/Landing/CaseStudies/Article_2_AI_construction": Page7,
	"/Landing/CaseStudies/Deprom": Page8,
	"/Landing/CaseStudies/LEC": Page9,
	"/Landing/CaseStudies/U-fix": Page10,
	"/Landing/CaseStudies/how-to-track-construction-site-progress": Page11,
	"/Landing/ContactForm": Page12,
	"/Landing/Custom": Page13,
	"/Landing/DataDeletion": Page14,
	"/Landing/Manufacturing": Page15,
	"/Landing/Pricing": Page16,
	"/Landing/Privacy": Page17,
	"/Landing/Services": Page18,
	"/Landing/SiteDiary": Page19,
	"/Landing/ThankYou": Page20,
	"/Landing/Timesheets": Page21,
};
export function renderLandingPage(route: LandingRoute) {
	if (route.articleId) {
		const data = readLandingNews(
			`locale=${route.locale}&id=${route.articleId}`,
		);
		if ("article" in data) return <ArticlePage article={data.article} />;
	}
	if (route.path === "/Landing/News") {
		const data = readLandingNews(`locale=${route.locale}&page=${route.page}`);
		if ("articles" in data) return <NewsPage {...data} />;
	}
	const slug = route.path.split("/").at(-1) || "";
	if (["Limeni", "FIMA", "TGEM", "StoneAndTree"].includes(slug))
		return <CustomerExperiencePage slug={slug} />;
	const Page = pages[route.path];
	return Page ? <Page /> : null;
}
