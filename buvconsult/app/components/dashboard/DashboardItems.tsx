"use client";

import Link from "next/link";
import { navLinks } from "@/app/dashboard/layout";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useProject } from "@/components/provider/ProjectProvider";
import {Wrench, HardHat,ChartBarBig, Clock8, ReceiptText, ChartBar, DollarSign, Globe, Home, ChartLine} from "lucide-react";

export const projectNavLinks = [
  {
    name: "Invoices",
    href: "/dashboard",
    path: "invoices",
    icon: ReceiptText,
  },
  {
    name: "Timesheets",
    href: "/dashboard/sites",
    path: "timesheets",
    icon: Clock8,
  },
  {
    name: "Program",
    href: "/dashboard/pricing",
    path: "program",
    icon: ChartBarBig,
  },
  {
    name: "Analytics",
    href: "/dashboard/programm",
    path: "analytics",
    icon: ChartLine,
  },
    {
    name: "Settings",
    href: "/dashboard/settings",
    path: "settings",
    icon: Wrench,
  },
];

export function DashboardItems() {
  const { projectId, projectName, setProject } = useProject();
  const pathname = usePathname();

  useEffect(() => {
    const isAboveProject =
      pathname === "/dashboard" || pathname === "/dashboard/sites";
    if (isAboveProject && (projectId || projectName)) setProject("", "");
  }, [pathname]);

  return (
    <div className="flex items-center w-full justify-between">
      {/* LEFT: Main navigation links + project nav links if selected */}
      <div className="flex items-center gap-1">
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
            <span className="hidden md:inline-block">{item.name}</span>
          </Link>
        ))}

        {/* Only show project nav links when in a project subroute */}
{projectName && projectId && /^\/dashboard\/sites\/[^\/]+/.test(pathname) &&
  projectNavLinks.map((item) => (
    <Link
      href={`/dashboard/sites/${projectId}/${item.path}`}
      key={item.name}
      className={cn(
        // Always blue, and slightly bolder on selected
        "text-blue-500 ",
        pathname === `/dashboard/sites/${projectId}/${item.path}`
          ? "bg-muted"
          : "bg-none",
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-blue-700"
      )}
    >
      <item.icon className="size-4" />
      <span className="hidden md:inline-block">{item.name}</span>
    </Link>
  ))
}

      </div>

      {/* RIGHT: Project name */}
      {projectName && (
        <div
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2",
            "text-blue-600 font-semibold bg-none"
          )}
          style={{
            pointerEvents: "none",
            userSelect: "none",
            maxWidth: "200px",
          }}
        >
          <span className="truncate block">{projectName}</span>
        </div>
      )}
    </div>
  );
}
