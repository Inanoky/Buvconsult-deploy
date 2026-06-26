"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/landing/LanguageProvider";
import { NavigationMenuMobile } from "./NavigationMenuMobile";

export default function HeaderMobile() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/15 px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-black text-white">
            B
          </span>
          <span className="text-xl font-semibold tracking-normal text-zinc-950 dark:text-white">
            Buv<span className="text-emerald-700">consult</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <NavigationMenuMobile />
        </div>
      </div>
    </header>
  );
}
