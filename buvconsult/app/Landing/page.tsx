"use client";

import { useIsMobile } from "@/lib/utils/hooks/use-mobile";
import LandingPageDesktop from "@/components/landing/Landing/LandingPageDesktop";
import LandingPageMobile from "@/components/landing/Landing/LandingPageMobile";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";

export default function LandingPage() {
  const isMobile = useIsMobile();
  const { locale } = useLandingLanguage();

  return isMobile ? (
    <LandingPageMobile locale={locale} />
  ) : (
    <LandingPageDesktop locale={locale} />
  );
}
