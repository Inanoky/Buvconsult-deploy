"use client";

import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, FileText, LayoutDashboard, MessageCircle } from "lucide-react";
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
    <div className="relative mx-auto mt-12 max-w-6xl">
      <div className="workflow-board relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 p-5 shadow-[0_34px_120px_rgba(15,23,42,0.16)] backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4">
          <div className="workflow-card workflow-card-a rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <MessageCircle className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-500">Input</p>
                <p className="font-bold text-zinc-950">{copy.visualInput}</p>
              </div>
            </div>
          </div>

          <div className="workflow-connector h-px w-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600" />

          <div className="workflow-card workflow-card-b rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                <Bot className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-emerald-700">AI analysis</p>
                <p className="font-bold text-zinc-950">{copy.visualTitle}</p>
              </div>
            </div>
          </div>

          <div className="workflow-connector h-px w-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600" />

          <div className="workflow-card workflow-card-c rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-zinc-950 shadow-sm">
                <CheckCircle2 className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-500">Approval</p>
                <p className="font-bold text-zinc-950">{copy.visualMessage}</p>
              </div>
            </div>
          </div>

          <div className="workflow-connector h-px w-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600" />

          <div className="workflow-card workflow-card-d rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-white">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                <LayoutDashboard className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-300">Dashboard</p>
                <p className="font-bold">{copy.visualOutput}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-500">Status</p>
            <div className="mt-3 h-2 rounded-full bg-zinc-200">
              <div className="workflow-progress h-2 rounded-full bg-emerald-600" />
            </div>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-500">Manual steps</p>
            <p className="mt-2 text-2xl font-black text-zinc-950">-68%</p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-500">Next action</p>
            <p className="mt-2 font-bold text-emerald-700">{copy.primaryCta}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPageDesktop({ locale, setLocale }: LandingPageDesktopProps) {
  const copy = landingCopy[locale];

  return (
    <>
      <section className="relative -mt-[65px] overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#dff7ea_0%,#f7fbf8_34%,#ffffff_82%)] pt-[65px]">
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
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-zinc-600">{copy.description}</p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-500">{copy.supporting}</p>

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
