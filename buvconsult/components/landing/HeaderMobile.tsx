"use client";

import Link from "next/link";
import { LanguageToggle, useLandingLanguage } from "@/components/landing/LanguageProvider";
import { NavigationMenuMobile } from "./NavigationMenuMobile";
import { localizedPath } from "@/lib/site-routes";

export default function HeaderMobile() {
  const { locale } = useLandingLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/15 px-3 py-2.5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-2">
        <Link href={localizedPath(locale === "ru" ? "lv" : locale)} className="flex min-w-0 items-center gap-2" aria-label="Buvconsult">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-xs font-black text-white">
            B
          </span>
          <span className="truncate text-lg font-semibold tracking-normal text-zinc-950 dark:text-white">
            Buv<span className="text-emerald-700">consult</span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5">
          <LanguageToggle compact />
          <NavigationMenuMobile />
        </div>
      </div>
    </header>
  );
}
