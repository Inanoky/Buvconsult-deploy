"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LandingLocale } from "@/components/landing/Landing/Text";
import {
  localeFromPathname,
  localizedPath,
  pageFromPathname,
  type SiteLocale,
} from "@/lib/site-routes";

type LandingLanguageContextValue = {
  locale: LandingLocale;
};

const LandingLanguageContext = React.createContext<LandingLanguageContextValue | null>(null);

export function LandingLanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);

  return (
    <LandingLanguageContext.Provider value={{ locale }}>
      {children}
    </LandingLanguageContext.Provider>
  );
}

export function useLandingLanguage() {
  const value = React.useContext(LandingLanguageContext);

  if (!value) {
    throw new Error("useLandingLanguage must be used inside LandingLanguageProvider");
  }

  return value;
}

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const { locale } = useLandingLanguage();
  const page = pageFromPathname(pathname);

  return (
    <nav aria-label={locale === "lv" ? "Valodas izvēle" : "Language selection"} className="inline-flex rounded-full border border-white/20 bg-white/15 p-1 shadow-sm backdrop-blur-xl">
      {(["lv", "en"] as const).map((item: SiteLocale) => (
        <Link
          key={item}
          href={localizedPath(item, page)}
          hrefLang={item === "lv" ? "lv-LV" : "en"}
          lang={item}
          aria-current={locale === item ? "page" : undefined}
          className={`${compact ? "h-8 px-2.5 text-xs" : "h-9 px-4 text-sm"} rounded-full font-semibold transition ${
            locale === item
              ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
              : "text-zinc-600 hover:bg-white/50 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          }`}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
