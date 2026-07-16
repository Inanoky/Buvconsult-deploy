import { notFound } from "next/navigation";
import LandingPage from "@/app/Landing/page";
import { createPageMetadata, siteUrl } from "@/lib/seo";
import { isSiteLocale, localizedPath, siteLocales } from "@/lib/site-routes";
import { faqCopy } from "@/components/landing/SeoFaq";

export const dynamicParams = false;

export function generateStaticParams() {
  return siteLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isSiteLocale(locale)) return {};
  return createPageMetadata(locale, "home");
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isSiteLocale(locale)) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${localizedPath(locale)}/#service`,
    name: locale === "lv" ? "Būvniecības programmatūra un AI automatizācija" : "Construction software and AI automation",
    description: locale === "lv" ? "Pielāgota programmatūra, AI risinājumi un procesu automatizācija būvniecības uzņēmumiem." : "Custom software, AI solutions and workflow automation for construction companies.",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: [{ "@type": "Country", name: "Latvia" }, { "@type": "Place", name: "Europe" }],
    serviceType: ["Custom software development", "Construction workflow automation", "AI automation"],
    url: `${siteUrl}${localizedPath(locale)}`,
    inLanguage: locale === "lv" ? "lv-LV" : "en",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCopy[locale].items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <LandingPage />
    </>
  );
}
