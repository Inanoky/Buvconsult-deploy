"use client";

import Link from "next/link";
import { navLinks } from "@/app/dashboard/layout";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useProject } from "@/components/provider/ProjectProvider";
import { ChartBar, DollarSign, Globe, Home } from "lucide-react";

export const projectNavLinks = [
  {
    name: "Invoices",
    href: "/dashboard",
    path: "invoices",
    icon: Home,
  },
  {
    name: "Timesheets",
    href: "/dashboard/sites",
    path: "timesheets",
    icon: Globe,
  },
  {
    name: "Program",
    href: "/dashboard/pricing",
    path: "program",
    icon: DollarSign,
  },
  {
    name: "Analytics",
    href: "/dashboard/programm",
    path: "analytics",
    icon: ChartBar,
  },
    {
    name: "Settings",
    href: "/dashboard/settings",
    path: "settings",
    icon: ChartBar,
  },
];

export function DashboardItems() {
  const { projectId, projectName, setProject } = useProject();
  const pathname = usePathname();

  // ⛔ Clear project if user is on /dashboard or /dashboard/sites
  useEffect(() => {
    const isAboveProject =
      pathname === "/dashboard" || pathname === "/dashboard/sites";

    if (isAboveProject && (projectId || projectName)) {
      setProject("", "");
    }
  }, [pathname]);

  return (
    <>
      {/* Main navigation (always visible) */}
      {navLinks.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={cn(
            pathname === item.href
              ? "bg-muted text-primary"
              : "text-muted-foreground bg-none",
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70"
          )}
        >
          <item.icon className="size-4" />
          {item.name}
        </Link>
      ))}

      {/* Only show if project is selected */}
      {projectName && (
        <>
          <h1 className="mt-4 px-3 text-sm font-medium text-muted-foreground">
            Project: {projectName}
          </h1>

          {projectNavLinks.map((item) => (
            <Link
              href={`/dashboard/sites/${projectId}/${item.path}`}
              key={item.name}
              className={cn(
                pathname === `/dashboard/sites/${projectId}/${item.path}`
                  ? "bg-muted text-primary"
                  : "text-muted-foreground bg-none",
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70"
              )}
            >
              <item.icon className="size-4" />
              {item.name}
            </Link>
          ))}
        </>
      )}
    </>
  );
}