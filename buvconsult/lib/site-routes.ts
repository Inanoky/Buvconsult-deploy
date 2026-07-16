export const siteLocales = ["lv", "en"] as const;

export type SiteLocale = (typeof siteLocales)[number];
export type SitePage = "home" | "projects" | "about" | "contact" | "privacy";

export const defaultLocale: SiteLocale = "lv";

const slugs: Record<SiteLocale, Record<SitePage, string>> = {
  lv: {
    home: "",
    projects: "projekti",
    about: "par-mums",
    contact: "kontakti",
    privacy: "privatuma-politika",
  },
  en: {
    home: "",
    projects: "projects",
    about: "about",
    contact: "contact",
    privacy: "privacy-policy",
  },
};

export function isSiteLocale(value: string): value is SiteLocale {
  return siteLocales.includes(value as SiteLocale);
}

export function localizedPath(locale: SiteLocale, page: SitePage = "home") {
  const slug = slugs[locale][page];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function localeFromPathname(pathname: string): SiteLocale {
  const locale = pathname.split("/").filter(Boolean)[0];
  return isSiteLocale(locale) ? locale : defaultLocale;
}

const legacyPages: Record<string, SitePage> = {
  "/": "home",
  "/Landing": "home",
  "/Landing/About": "about",
  "/Landing/Custom": "projects",
  "/Landing/ContactForm": "contact",
  "/Landing/Privacy": "privacy",
};

export function pageFromPathname(pathname: string): SitePage {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const legacyPage = legacyPages[normalized];

  if (legacyPage) return legacyPage;

  for (const locale of siteLocales) {
    for (const page of Object.keys(slugs[locale]) as SitePage[]) {
      if (localizedPath(locale, page) === normalized) return page;
    }
  }

  return "home";
}

export function staticLocalizedPages() {
  return siteLocales.flatMap((locale) =>
    (Object.keys(slugs[locale]) as SitePage[]).map((page) => ({
      locale,
      page,
      path: localizedPath(locale, page),
      slug: slugs[locale][page],
    }))
  );
}
