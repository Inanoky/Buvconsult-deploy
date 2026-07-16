import type { Metadata } from "next";
import { localizedPath, type SiteLocale, type SitePage } from "@/lib/site-routes";

export const siteUrl = "https://buvconsult.com";
export const siteName = "Buvconsult";

type SeoCopy = { title: string; description: string; keywords: string[] };

const seoCopy: Record<SiteLocale, Record<SitePage, SeoCopy>> = {
  lv: {
    home: {
      title: "Būvniecības programmatūra un AI risinājumi | Buvconsult",
      description: "Pielāgota būvniecības procesu automatizācija, AI risinājumi, atskaites, apstiprinājumi un integrācijas Latvijas būvniecības uzņēmumiem.",
      keywords: ["būvniecības programmatūra", "būvniecības procesu automatizācija", "AI risinājumi būvniecībai", "būvlaukuma atskaites", "BIS integrācija"],
    },
    projects: {
      title: "Būvniecības programmatūras projekti | Buvconsult",
      description: "Apskatiet Buvconsult pielāgotās sistēmas būvlaukuma progresa, darbu uzskaites, apstiprinājumu un uzņēmuma procesu pārvaldībai.",
      keywords: ["būvniecības programmatūras projekti", "darbu uzskaite", "būvlaukuma progress", "apstiprinājumu sistēma"],
    },
    about: {
      title: "Par Buvconsult — tehnoloģijas būvniecībai",
      description: "Buvconsult apvieno programmatūras izstrādi, AI automatizāciju un praktisku būvniecības pieredzi, lai uzlabotu reālus darba procesus.",
      keywords: ["Buvconsult", "būvniecības digitalizācija Latvijā", "programmatūras izstrāde būvniecībai"],
    },
    contact: {
      title: "Būvniecības digitalizācijas konsultācija | Buvconsult",
      description: "Pastāstiet Buvconsult par laikietilpīgu būvniecības procesu. Saņemiet bezmaksas konsultāciju, procesa analīzi un praktiskus nākamos soļus.",
      keywords: ["būvniecības digitalizācijas konsultācija", "AI konsultācija būvniecībai", "Buvconsult kontakti"],
    },
    privacy: {
      title: "Privātuma politika | Buvconsult",
      description: "Informācija par to, kā SIA BUVCONSULT apstrādā un aizsargā personas datus saskaņā ar Vispārīgo datu aizsardzības regulu.",
      keywords: ["Buvconsult privātuma politika", "personas datu aizsardzība"],
    },
  },
  en: {
    home: {
      title: "Construction Software & AI Solutions | Buvconsult",
      description: "Custom construction software and AI automation for approvals, reporting, site records, dashboards and integrations—built around your workflow.",
      keywords: ["construction software", "construction workflow automation", "AI for construction", "construction reporting software", "custom contractor software"],
    },
    projects: {
      title: "Construction Software Projects | Buvconsult",
      description: "Explore custom Buvconsult systems for site progress, work records, approvals and operational workflows, designed for construction teams.",
      keywords: ["construction software projects", "site progress software", "construction work records", "approval workflow software"],
    },
    about: {
      title: "About Buvconsult — Construction Technology Partner",
      description: "Buvconsult combines software engineering, AI automation and practical construction experience to improve real contractor workflows.",
      keywords: ["Buvconsult", "construction technology partner", "construction software development"],
    },
    contact: {
      title: "Construction Digitalisation Consultation | Buvconsult",
      description: "Tell Buvconsult about a time-consuming construction workflow. Get a free consultation, process analysis and practical next steps.",
      keywords: ["construction technology consultation", "construction AI consultation", "contact Buvconsult"],
    },
    privacy: {
      title: "Privacy Policy | Buvconsult",
      description: "Learn how SIA BUVCONSULT collects, uses and protects personal data in accordance with the General Data Protection Regulation.",
      keywords: ["Buvconsult privacy policy", "personal data protection"],
    },
  },
};

export function getSeoCopy(locale: SiteLocale, page: SitePage) {
  return seoCopy[locale][page];
}

export function localizedAlternates(page: SitePage) {
  return {
    "lv-LV": localizedPath("lv", page),
    en: localizedPath("en", page),
    "x-default": localizedPath("lv", page),
  };
}

export function createPageMetadata(locale: SiteLocale, page: SitePage): Metadata {
  const copy = getSeoCopy(locale, page);
  const path = localizedPath(locale, page);
  const isLatvian = locale === "lv";

  return {
    title: { absolute: copy.title },
    description: copy.description,
    keywords: copy.keywords,
    alternates: { canonical: path, languages: localizedAlternates(page) },
    openGraph: {
      type: "website",
      url: path,
      siteName,
      locale: isLatvian ? "lv_LV" : "en_US",
      alternateLocale: [isLatvian ? "en_US" : "lv_LV"],
      title: copy.title,
      description: copy.description,
      images: [{
        url: isLatvian ? "/og-lv.png" : "/og-en.png",
        width: 1200,
        height: 630,
        alt: isLatvian ? "Buvconsult būvniecības programmatūra un AI risinājumi" : "Buvconsult construction software and AI solutions",
      }],
    },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: [isLatvian ? "/og-lv.png" : "/og-en.png"] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
  };
}
