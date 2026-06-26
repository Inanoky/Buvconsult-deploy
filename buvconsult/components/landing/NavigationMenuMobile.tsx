"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import { Menu } from "lucide-react";
import { COMBINED_LINKS } from "@/components/landing/NavigationLinks"

export function NavigationMenuMobile() {
 
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="size-10 rounded-full bg-white">
          <Menu className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2">
        {COMBINED_LINKS.map((item) => (
          <DropdownMenuItem key={item.id} asChild>
            <Link 
              href={item.href} 
              className={cn(
                "flex w-full items-center rounded-xl px-3 py-2 text-sm font-semibold",
                pathname === item.href ? "bg-zinc-100 text-zinc-950" : "text-zinc-600"
              )}
            >
              {item.id}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
