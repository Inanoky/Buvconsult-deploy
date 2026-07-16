"use client";

import LandingPageDesktop from "@/components/landing/Landing/LandingPageDesktop";
import LandingPageMobile from "@/components/landing/Landing/LandingPageMobile";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";

export default function LandingPage() {
  const { locale } = useLandingLanguage();

  return (
    <>
      <div className="contents md:hidden"><LandingPageMobile locale={locale} /></div>
      <div className="hidden md:contents"><LandingPageDesktop locale={locale} /></div>
    </>
  );
}
