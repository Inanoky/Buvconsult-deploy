"use client";

import { useState } from "react";
import { useIsMobile } from "@/lib/utils/hooks/use-mobile";
import LandingPageDesktop from "@/components/landing/Landing/LandingPageDesktop";
import LandingPageMobile from "@/components/landing/Landing/LandingPageMobile";
import { LandingLocale } from "@/components/landing/Landing/Text";

export default function LandingPage() {
  const isMobile = useIsMobile();
  const [locale, setLocale] = useState<LandingLocale>("lv");

  return isMobile ? (
    <LandingPageMobile locale={locale} setLocale={setLocale} />
  ) : (
    <LandingPageDesktop locale={locale} setLocale={setLocale} />
  );
}
