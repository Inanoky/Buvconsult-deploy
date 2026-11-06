import type { AbstractIntlMessages } from "next-intl";
import english from "@/messages/en.json";
import latvian from "@/messages/lv.json";
import russian from "@/messages/ru.json";
import type { LandingLocale } from "@/components/landing/navigation/landing-routes";

export const landingMessages = { lv: latvian, en: english, ru: russian };

export function getLandingMessages(locale: LandingLocale) {
	return landingMessages[locale] as unknown as AbstractIntlMessages;
}
