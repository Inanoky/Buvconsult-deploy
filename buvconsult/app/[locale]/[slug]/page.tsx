import { notFound } from "next/navigation";
import { getLandingRoute } from "@/components/landing/navigation/landing-routes";
import { getLandingPageMetadata } from "@/lib/landing/metadata";
import { renderLandingPage } from "@/lib/landing/render-page";
import { staticLocalizedPages } from "@/lib/site-routes";

export const dynamicParams = false;
type Params = { locale: string; slug: string };
function resolveRoute({ locale, slug }: Params) {
	return getLandingRoute(new URL(`https://buvconsult.com/${locale}/${slug}`));
}
export function generateStaticParams() {
	return staticLocalizedPages()
		.filter((item) => item.page !== "home")
		.map(({ locale, slug }) => ({ locale, slug }));
}
export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}) {
	const route = resolveRoute(await params);
	return route ? getLandingPageMetadata(route.locale, route.path) : {};
}
export default async function Page({ params }: { params: Promise<Params> }) {
	const route = resolveRoute(await params);
	if (!route) notFound();
	return renderLandingPage(route);
}
