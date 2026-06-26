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

type LandingPageMobileProps = {
  locale: LandingLocale;
  setLocale: (locale: LandingLocale) => void;
};

function LanguageToggle({ locale, setLocale }: LandingPageMobileProps) {
  return (
    <div className="mx-auto inline-flex rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
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

export default function LandingPageMobile({ locale, setLocale }: LandingPageMobileProps) {
  const copy = landingCopy[locale];

  return (
    <>
      <section className="overflow-hidden bg-[radial-gradient(circle_at_center_top,#ffffff_0%,#f7f7f5_48%,#ecf5ef_100%)]">
        <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
          <div className="text-center">
            <LanguageToggle locale={locale} setLocale={setLocale} />
            <p className="mx-auto mt-8 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              {copy.badge}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-normal text-zinc-950 sm:text-6xl">
              {copy.header}
              <span className="block">{copy.header2}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Button asChild size="lg" className="h-12 rounded-full bg-zinc-950 hover:bg-zinc-800">
                <Link href="/Landing/ContactForm">{copy.primaryCta}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full bg-white/80">
                <Link href="/Landing/Custom">{copy.secondaryCta}</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto mt-10 h-[430px] max-w-sm">
            <div className="absolute left-0 top-24 flex size-20 items-center justify-center rounded-2xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
              <MessageCircle className="size-9 text-emerald-700" />
            </div>
            <div className="absolute right-0 top-24 flex size-20 items-center justify-center rounded-2xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
              <FileText className="size-9 text-cyan-600" />
            </div>

            <div className="absolute left-1/2 top-0 h-[390px] w-[240px] -translate-x-1/2 rounded-[2.5rem] border-[10px] border-zinc-950 bg-zinc-50 shadow-[0_34px_110px_rgba(15,23,42,0.28)]">
              <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-zinc-900" />
              <div className="px-5 pt-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-emerald-700 text-white">
                    <Bot className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-950">Buvconsult</p>
                    <p className="text-xs text-zinc-500">{copy.visualTitle}</p>
                  </div>
                </div>

                <div className="mt-16 rounded-3xl bg-emerald-100 px-4 py-4">
                  <p className="text-sm font-semibold text-zinc-950">{copy.visualInput}</p>
                  <div className="mt-4 h-3 rounded-full bg-emerald-600/25">
                    <div className="h-3 w-2/3 rounded-full bg-emerald-700" />
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-white px-4 py-4 shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
                  <p className="font-semibold text-zinc-950">{copy.visualMessage}</p>
                  <p className="mt-2 text-xs text-zinc-500">{copy.visualOutput}</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="absolute bottom-0 left-1/2 z-20 h-14 w-[86%] -translate-x-1/2 rounded-2xl bg-emerald-700 text-base shadow-[0_24px_70px_rgba(4,120,87,0.34)] hover:bg-emerald-800"
            >
              <Link href="/Landing/ContactForm">
                {copy.primaryCta}
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-3xl space-y-10">
          <WhatDoWeDo copy={copy} />
          <HowDoWeDoThat copy={copy} />
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-14 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 [&_.font-semibold]:text-white [&_h3]:text-white [&_p]:text-zinc-300">
            <Why copy={copy} />
          </div>
        </div>
      </section>

    </>
  );
}
