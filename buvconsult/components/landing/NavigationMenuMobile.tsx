"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import { Menu } from "lucide-react";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";
import { MAIN_LINKS } from "@/components/landing/NavigationLinks"

export function NavigationMenuMobile() {
 
  const pathname = usePathname();
  const { locale } = useLandingLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="size-10 rounded-full border-white/20 bg-white/15 backdrop-blur-xl dark:text-white">
          <Menu className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2">
        {MAIN_LINKS.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link 
              href={item.href} 
              className={cn(
                "flex w-full items-center rounded-xl px-3 py-2 text-sm font-semibold",
                pathname === item.href ? "bg-zinc-100 text-zinc-950" : "text-zinc-600"
              )}
            >
              {item.label[locale]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
