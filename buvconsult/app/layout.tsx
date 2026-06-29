
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme/ThemeProvider";
import {GoogleTagManager} from '@next/third-parties/google'
import Script from "next/script";
import WebsiteShell from "@/components/landing/WebsiteShell";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://buvconsult.com"),
  title: {
    default: "Buvconsult | AI and Digital Partner for Construction",
    template: "%s | Buvconsult",
  },
  description:
    "Custom AI and software for construction companies. Buvconsult builds practical workflows, dashboards and automation tools for general contractors and specialist contractors.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Buvconsult | AI and Digital Partner for Construction",
    description:
      "Custom AI and software for construction companies. Practical workflows, dashboards and automation tools built around the way your team already works.",
    url: "https://buvconsult.com",
    siteName: "Buvconsult",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Buvconsult AI and software for construction",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buvconsult | AI and Digital Partner for Construction",
    description:
      "Custom AI and software for construction companies, built around real workflows.",
    images: ["/hero.png"],
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="notranslate" translate="no" suppressHydrationWarning>
            
             <GoogleTagManager gtmId="GTM-TFB37MS4" />


            <Script id="ga-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('config', 'AW-17670426077');
        `}
      </Script>

      <body
        className={`${inter.className} notranslate antialiased`}
        translate="no"
      >
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
