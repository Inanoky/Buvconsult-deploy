"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_LINKS } from "@/components/landing/NavigationLinks";
import { cn } from "@/lib/utils/utils";

export function NavigationMenuDesktop() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center rounded-full border border-zinc-200 bg-zinc-50/80 p-1 shadow-sm"
    >
      {MAIN_LINKS.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-white hover:text-zinc-950",
              isActive && "bg-white text-zinc-950 shadow-sm"
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
