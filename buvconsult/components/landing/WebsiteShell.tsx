"use client"

import FooterDesktop from "@/components/landing/FooterDesktop"
import FooterMobile from "@/components/landing/FooterMobile"
import HeaderDesktop from "@/components/landing/HeaderDesktop"
import HeaderMobile from "@/components/landing/HeaderMobile"
import { Toaster } from "@/components/ui/sonner"
import { useIsMobile } from "@/lib/utils/hooks/use-mobile"

export default function WebsiteShell({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isMobile = useIsMobile()

  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      {children}
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
      <Toaster richColors closeButton />
    </>
  )
}
