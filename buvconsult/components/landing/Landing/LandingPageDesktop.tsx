"use client";

import Link from "next/link";
import { ArrowRight, Bot, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BuildList,
  ExistingSoftware,
  LandingLocale,
  PricingSection,
  ProcessSteps,
  WhyBuvconsult,
  landingCopy,
} from "@/components/landing/Landing/Text";

type LandingPageDesktopProps = {
  locale: LandingLocale;
  setLocale: (locale: LandingLocale) => void;
};

function LanguageToggle({ locale, setLocale }: LandingPageDesktopProps) {
  return (
    <div className="inline-flex rounded-full border border-zinc-200 bg-white/90 p-1 shadow-sm backdrop-blur">
      {(["lv", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`h-9 rounded-full px-4 text-sm font-semibold transition ${
            locale === item ? "bg-zinc-950 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-950"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function PremiumLoadBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="premium-grid absolute inset-0 opacity-70" />
      <div className="premium-sweep premium-sweep-a absolute inset-y-0 -left-1/4 w-1/2 rotate-12" />
      <div className="premium-sweep premium-sweep-b absolute inset-y-0 -right-1/3 w-1/2 rotate-12" />
      <div className="premium-line premium-line-a absolute left-0 top-28 h-px w-full" />
      <div className="premium-line premium-line-b absolute bottom-28 left-0 h-px w-full" />
    </div>
  );
}

function HeroVisual({
  copy,
}: {
  copy: (typeof landingCopy)[LandingLocale];
}) {
  return (
    <div className="relative mx-auto mt-12 flex h-[500px] max-w-5xl items-end justify-center">
      <div className="absolute left-8 top-36 flex size-24 items-center justify-center rounded-2xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
        <MessageCircle className="size-12 text-emerald-700" />
      </div>
      <div className="absolute right-8 top-36 flex size-24 items-center justify-center rounded-2xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
        <FileText className="size-12 text-cyan-600" />
      </div>
      <div className="absolute left-28 top-48 h-px w-72 border-t border-dashed border-emerald-700/50" />
      <div className="absolute right-28 top-48 h-px w-72 border-t border-dashed border-emerald-700/50" />

      <div className="relative z-10 h-[470px] w-[300px] rounded-[3rem] border-[12px] border-zinc-950 bg-zinc-50 shadow-[0_34px_120px_rgba(15,23,42,0.26)]">
        <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-zinc-900" />
        <div className="px-6 pt-7">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full bg-emerald-700 text-white">
              <Bot className="size-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-zinc-950">Buvconsult</p>
              <p className="text-sm text-zinc-500">{copy.visualTitle}</p>
            </div>
          </div>

          <div className="mt-14 rounded-3xl bg-emerald-100 px-5 py-4 shadow-sm">
            <p className="text-sm font-semibold text-zinc-950">{copy.visualInput}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="size-9 rounded-full bg-white" />
              <div className="h-3 flex-1 rounded-full bg-emerald-600/25">
                <div className="h-3 w-2/3 rounded-full bg-emerald-700" />
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-3xl bg-white px-5 py-4 shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
            <p className="text-lg font-semibold text-zinc-950">{copy.visualMessage}</p>
            <p className="mt-2 text-sm text-zinc-500">{copy.visualOutput}</p>
          </div>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        className="absolute bottom-4 z-20 h-14 rounded-2xl bg-emerald-700 px-10 text-base shadow-[0_24px_70px_rgba(4,120,87,0.34)] hover:bg-emerald-800"
      >
        <Link href="/Landing/ContactForm">
          {copy.primaryCta}
          <ArrowRight className="size-5" />
        </Link>
      </Button>
    </div>
  );
}

export default function LandingPageDesktop({ locale, setLocale }: LandingPageDesktopProps) {
  const copy = landingCopy[locale];

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfbfa_0%,#f7faf7_55%,#eef7f1_100%)]">
        <PremiumLoadBackground />
        <div className="relative mx-auto flex min-h-[820px] w-full max-w-7xl flex-col px-6 pb-16 pt-8">
          <div className="flex items-center justify-end">
            <LanguageToggle locale={locale} setLocale={setLocale} />
          </div>

          <div className="mx-auto mt-10 max-w-6xl text-center">
            <p className="mx-auto inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              {copy.badge}
            </p>
            <h1 className="mx-auto mt-7 max-w-5xl text-7xl font-black leading-[0.95] tracking-normal text-zinc-950">
              {copy.header}
            </h1>
            <p className="mx-auto mt-7 max-w-4xl text-xl leading-8 text-zinc-600">{copy.description}</p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">{copy.supporting}</p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-500">{copy.proof}</p>

            <div className="mt-9 flex items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-zinc-950 px-7 hover:bg-zinc-800">
                <Link href="/Landing/ContactForm">{copy.primaryCta}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-zinc-300 bg-white/70 px-7">
                <a href="#what-we-build">{copy.secondaryCta}</a>
              </Button>
            </div>
          </div>

          <HeroVisual copy={copy} />
        </div>
      </section>

      <section id="what-we-build" className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <BuildList copy={copy} />
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <ProcessSteps copy={copy} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <PricingSection copy={copy} />
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <WhyBuvconsult copy={copy} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <ExistingSoftware copy={copy} />
        </div>
      </section>
    </>
  );
}
