"use client";

import Link from "next/link";
import { ArrowRight, Bot, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  HowDoWeDoThat,
  LandingLocale,
  landingCopy,
  WhatDoWeDo,
  Why,
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
            locale === item
              ? "bg-zinc-950 text-white shadow-sm"
              : "text-zinc-500 hover:text-zinc-950"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function HeroVisual({
  copy,
}: {
  copy: (typeof landingCopy)[LandingLocale];
}) {
  return (
    <div className="relative mx-auto mt-10 flex h-[520px] max-w-5xl items-end justify-center">
      <div className="absolute left-8 top-40 flex size-24 items-center justify-center rounded-2xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
        <MessageCircle className="size-12 text-emerald-700" />
      </div>
      <div className="absolute right-8 top-40 flex size-24 items-center justify-center rounded-2xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
        <FileText className="size-12 text-cyan-600" />
      </div>
      <div className="absolute left-28 top-52 h-px w-72 border-t border-dashed border-emerald-700/50" />
      <div className="absolute right-28 top-52 h-px w-72 border-t border-dashed border-emerald-700/50" />

      <div className="relative z-10 h-[490px] w-[300px] rounded-[3rem] border-[12px] border-zinc-950 bg-zinc-50 shadow-[0_34px_120px_rgba(15,23,42,0.26)]">
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

          <div className="mt-16 rounded-3xl bg-emerald-100 px-5 py-4 shadow-sm">
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
        className="absolute bottom-6 z-20 h-14 rounded-2xl bg-emerald-700 px-10 text-base shadow-[0_24px_70px_rgba(4,120,87,0.34)] hover:bg-emerald-800"
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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center_top,#ffffff_0%,#f7f7f5_42%,#ecf5ef_100%)]">
        <div className="mx-auto flex min-h-[780px] w-full max-w-7xl flex-col px-6 pb-16 pt-8">
          <div className="flex items-center justify-end">
            <LanguageToggle locale={locale} setLocale={setLocale} />
          </div>

          <div className="mx-auto mt-10 max-w-5xl text-center">
            <p className="mx-auto inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              {copy.badge}
            </p>
            <h1 className="mt-7 text-7xl font-black leading-[0.95] tracking-normal text-zinc-950">
              {copy.header}
              <span className="block">{copy.header2}</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-zinc-600">
              {copy.description}
            </p>
            {copy.operatingLine ? (
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-500">
                {copy.operatingLine}
              </p>
            ) : null}

            <div className="mt-8 flex items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-zinc-950 px-7 hover:bg-zinc-800">
                <Link href="/Landing/ContactForm">{copy.primaryCta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-zinc-300 bg-white/70 px-7"
              >
                <Link href="/Landing/Custom">{copy.secondaryCta}</Link>
              </Button>
            </div>
          </div>

          <HeroVisual copy={copy} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          <WhatDoWeDo copy={copy} />
          <div>
            <HowDoWeDoThat copy={copy} />
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8 [&_.font-semibold]:text-white [&_h3]:text-white [&_p]:text-zinc-300">
            <Bot className="mb-8 size-10 text-emerald-400" />
            <Why copy={copy} />
          </div>
        </div>
      </section>

    </>
  );
}
