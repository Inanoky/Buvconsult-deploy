import { notFound } from "next/navigation";
import LandingPage from "@/app/Landing/page";
import {
	isLandingLocale,
	LANDING_LOCALES,
} from "@/components/landing/navigation/landing-routes";
import { getLandingPageMetadata } from "@/lib/landing/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
	return LANDING_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	return isLandingLocale(locale)
		? getLandingPageMetadata(locale, "/Landing")
		: {};
}

export default async function LocalizedHome({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!isLandingLocale(locale)) notFound();
	return <LandingPage />;
}
