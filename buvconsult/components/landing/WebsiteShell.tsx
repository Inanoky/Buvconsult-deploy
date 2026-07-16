"use client"

import FooterDesktop from "@/components/landing/FooterDesktop"
import FooterMobile from "@/components/landing/FooterMobile"
import HeaderDesktop from "@/components/landing/HeaderDesktop"
import HeaderMobile from "@/components/landing/HeaderMobile"
import { LandingLanguageProvider } from "@/components/landing/LanguageProvider"
import { Toaster } from "@/components/ui/sonner"

export default function WebsiteShell({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <LandingLanguageProvider>
      <div className="site-background" aria-hidden="true" />
      <div className="contents md:hidden"><HeaderMobile /></div>
      <div className="hidden md:contents"><HeaderDesktop /></div>
      <main className="site-page-shell">{children}</main>
      <div className="contents md:hidden"><FooterMobile /></div>
      <div className="hidden md:contents"><FooterDesktop /></div>
      <Toaster richColors closeButton />
    </LandingLanguageProvider>
  )
}
