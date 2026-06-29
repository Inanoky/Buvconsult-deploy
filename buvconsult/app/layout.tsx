
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme/ThemeProvider";
import {GoogleTagManager} from '@next/third-parties/google'
import Script from "next/script";
import WebsiteShell from "@/components/landing/WebsiteShell";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Buvconsult",
  description: "AI and data consulting for construction and operational businesses.",
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
