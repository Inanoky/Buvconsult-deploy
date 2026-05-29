"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MAIN_LINKS } from "@/components/landing/NavigationLinks";

export function NavigationMenuDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        {MAIN_LINKS.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href={href} className="text-base">
                {label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
