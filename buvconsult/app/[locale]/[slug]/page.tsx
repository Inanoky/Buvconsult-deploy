import { notFound } from "next/navigation";
import AboutPage from "@/app/Landing/About/page";
import ContactPage from "@/app/Landing/ContactForm/page";
import ProjectsPage from "@/app/Landing/Custom/page";
import PrivacyPage from "@/components/landing/PrivacyPage";
import { createPageMetadata, getSeoCopy, siteUrl } from "@/lib/seo";
import { isSiteLocale, localizedPath, staticLocalizedPages, type SitePage } from "@/lib/site-routes";

export const dynamicParams = false;

const pageComponents = {
  projects: ProjectsPage,
  about: AboutPage,
  contact: ContactPage,
  privacy: PrivacyPage,
} satisfies Record<Exclude<SitePage, "home">, React.ComponentType>;

function resolvePage(locale: string, slug: string) {
  return staticLocalizedPages().find((item) => item.locale === locale && item.slug === slug && item.page !== "home");
}

export function generateStaticParams() {
  return staticLocalizedPages()
    .filter((item) => item.page !== "home")
    .map(({ locale, slug }) => ({ locale, slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const route = resolvePage(locale, slug);
  if (!route || !isSiteLocale(locale)) return {};
  return createPageMetadata(locale, route.page);
}

export default async function LocalizedPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const route = resolvePage(locale, slug);
  if (!route || !isSiteLocale(locale) || route.page === "home") notFound();

  const Page = pageComponents[route.page];
  const pageSeo = getSeoCopy(locale, route.page);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "lv" ? "Sākums" : "Home", item: `${siteUrl}${localizedPath(locale)}` },
      { "@type": "ListItem", position: 2, name: pageSeo.title.split(" |")[0], item: `${siteUrl}${route.path}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Page />
    </>
  );
}
