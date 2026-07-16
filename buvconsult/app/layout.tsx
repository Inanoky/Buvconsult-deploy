
import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme/ThemeProvider";
import {GoogleTagManager} from '@next/third-parties/google'
import Script from "next/script";
import WebsiteShell from "@/components/landing/WebsiteShell";
import { localizedAlternates, siteName, siteUrl } from "@/lib/seo";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: "SIA BUVCONSULT", url: siteUrl }],
  creator: "SIA BUVCONSULT",
  publisher: "SIA BUVCONSULT",
  category: "Construction technology",
  title: {
    default: "Būvniecības programmatūra un AI risinājumi | Buvconsult",
    template: "%s | Buvconsult",
  },
  description:
    "Pielāgota būvniecības programmatūra un AI risinājumi procesu automatizācijai, atskaitēm, apstiprinājumiem un integrācijām.",
  alternates: {
    canonical: "/lv",
    languages: localizedAlternates("home"),
  },
  icons: {
    icon: "/buvconsultLogo.png",
    apple: "/buvconsultLogo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "SIA BUVCONSULT",
  alternateName: "Buvconsult",
  url: siteUrl,
  logo: `${siteUrl}/buvconsultLogo.png`,
  foundingDate: "2025-04-23",
  vatID: "LV40203643527",
  email: "vjaceslavs.gromatovics@buvconsult.com",
  telephone: "+37124885690",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brīvības iela 91-22",
    addressLocality: "Rīga",
    postalCode: "LV-1001",
    addressCountry: "LV",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+37124885690",
    email: "vjaceslavs.gromatovics@buvconsult.com",
    contactType: "sales",
    availableLanguage: ["Latvian", "English"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: ["lv-LV", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="lv" suppressHydrationWarning>
      <head>
        <Script id="document-language" strategy="beforeInteractive">
          {`document.documentElement.lang = location.pathname === '/en' || location.pathname.startsWith('/en/') ? 'en' : 'lv';`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleTagManager gtmId="GTM-TFB37MS4" />
        <Script id="ga-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('config', 'AW-17670426077');
        `}
        </Script>
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            <WebsiteShell>{children}</WebsiteShell>
           </ThemeProvider>
      </body>
    </html>
  );
}
