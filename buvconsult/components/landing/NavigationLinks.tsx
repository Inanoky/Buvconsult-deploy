import type { SitePage } from "@/lib/site-routes";

export const MAIN_LINKS: ReadonlyArray<{
  page: SitePage;
  label: { en: string; lv: string };
}> = [
  { page: "home", label: { en: "Home", lv: "Sākums" } },
  { page: "projects", label: { en: "Projects", lv: "Projekti" } },
  { page: "about", label: { en: "About", lv: "Par mums" } },
  { page: "contact", label: { en: "Contact", lv: "Kontakti" } },
] as const;
