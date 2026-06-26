"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";
import { MAIN_LINKS } from "@/components/landing/NavigationLinks";
import { cn } from "@/lib/utils/utils";

export function NavigationMenuDesktop() {
  const pathname = usePathname();
  const { locale } = useLandingLanguage();

  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center rounded-full border border-white/20 bg-white/15 p-1 shadow-sm backdrop-blur-xl"
    >
      {MAIN_LINKS.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-white hover:text-zinc-950",
              "dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
              isActive && "bg-white text-zinc-950 shadow-sm dark:bg-white/15 dark:text-white"
            )}
          >
            {label[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
