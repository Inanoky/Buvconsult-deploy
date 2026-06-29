"use client";

import * as React from "react";
import { LandingLocale } from "@/components/landing/Landing/Text";

type LandingLanguageContextValue = {
  locale: LandingLocale;
  setLocale: (locale: LandingLocale) => void;
};

const LandingLanguageContext = React.createContext<LandingLanguageContextValue | null>(null);

export function LandingLanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<LandingLocale>("lv");

  return (
    <LandingLanguageContext.Provider value={{ locale, setLocale }}>
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
  const { locale, setLocale } = useLandingLanguage();

  return (
    <div className="inline-flex rounded-full border border-white/20 bg-white/15 p-1 shadow-sm backdrop-blur-xl">
      {(["lv", "en", "ru"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`${compact ? "h-8 px-2.5 text-xs" : "h-9 px-4 text-sm"} rounded-full font-semibold transition ${
            locale === item
              ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
              : "text-zinc-600 hover:bg-white/50 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
