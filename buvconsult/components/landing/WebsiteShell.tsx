"use client";

import { NextIntlClientProvider } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo, type ReactNode } from "react";
import { LandingLanguageProvider } from "@/components/landing/LanguageProvider";
import LandingClientShell from "@/components/landing/navigation/LandingClientShell";
import { isLandingLocale } from "@/components/landing/navigation/landing-routes";
import { Toaster } from "@/components/ui/sonner";
import { getLandingMessages } from "@/lib/landing/locale-resources";
import { getLandingNavigationMetadata } from "@/lib/landing/metadata";

export default function WebsiteShell({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const requestedLocale = pathname.split("/")[1];
	const locale = isLandingLocale(requestedLocale) ? requestedLocale : "lv";
	const metadata = useMemo(
		() => getLandingNavigationMetadata(locale),
		[locale],
	);
	return (
		<NextIntlClientProvider
			locale={locale}
			messages={getLandingMessages(locale)}
			timeZone="Europe/Riga"
		>
			<LandingLanguageProvider>
				<LandingClientShell metadata={metadata}>{children}</LandingClientShell>
				<Toaster richColors closeButton />
			</LandingLanguageProvider>
		</NextIntlClientProvider>
	);
}
