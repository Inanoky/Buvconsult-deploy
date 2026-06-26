"use client";

import Link from "next/link";
import { CheckCircle2, LayoutDashboard, MessageCircle, Rocket } from "lucide-react";
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

type LandingPageMobileProps = {
  locale: LandingLocale;
};

function PremiumLoadBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="premium-grid absolute inset-0 opacity-70" />
      <div className="premium-sweep premium-sweep-a absolute inset-y-0 -left-1/3 w-2/3 rotate-12" />
      <div className="premium-line premium-line-a absolute left-0 top-24 h-px w-full" />
    </div>
  );
}

export default function LandingPageMobile({ locale }: LandingPageMobileProps) {
  const copy = landingCopy[locale];
  const icons = [MessageCircle, LayoutDashboard, CheckCircle2, Rocket] as const;
  const stepClasses = [
    "workflow-card-a workflow-step-a",
    "workflow-card-b workflow-step-b",
    "workflow-card-c workflow-step-c",
    "workflow-card-d workflow-step-d",
  ] as const;

  return (
    <>
      <section className="relative -mt-[65px] overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#dff7ea_0%,#f7fbf8_34%,#ffffff_82%)] pt-[65px]">
        <PremiumLoadBackground />
        <div className="relative mx-auto w-full max-w-3xl px-4 pb-16 pt-6">
          <div className="text-center">
            <p className="mx-auto mt-8 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              {copy.badge}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-normal text-zinc-950 sm:text-6xl">
              {copy.header}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600">{copy.description}</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500">{copy.supporting}</p>
            <div className="mx-auto mt-5 flex max-w-sm flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-2 text-xs font-semibold text-zinc-600 shadow-sm backdrop-blur">
                {copy.audienceLabel}
              </span>
              {copy.audienceItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button asChild size="lg" className="h-12 rounded-full bg-zinc-950 hover:bg-zinc-800">
                <Link href="/Landing/ContactForm">{copy.primaryCta}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full bg-white/80">
                <a href="#what-we-build">{copy.secondaryCta}</a>
              </Button>
            </div>
          </div>

          <div className="workflow-board mx-auto mt-10 max-w-sm rounded-[2rem] border border-zinc-200 bg-white/90 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.16)] backdrop-blur">
            {copy.visualSteps.map((item, index) => {
              const Icon = icons[index];

              return (
                <div key={item.label} className={`workflow-card workflow-step-card mb-3 flex min-h-24 rounded-2xl border border-zinc-200 p-4 ${stepClasses[index]}`}>
                  <div className="flex items-center gap-3">
                    <span className="workflow-step-icon flex size-10 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="workflow-step-label text-xs font-semibold">{item.label}</p>
                      <p className="workflow-step-title mt-1 text-sm font-bold leading-5">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="grid gap-3">
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-sm font-semibold text-zinc-500">{copy.visualStatusLabel}</p>
                <div className="mt-3 h-2 rounded-full bg-zinc-200">
                  <div className="workflow-progress h-2 rounded-full bg-emerald-600" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs font-semibold text-zinc-500">{copy.visualDevelopmentLabel}</p>
                  <p className="mt-2 text-lg font-black text-zinc-950">{copy.visualDevelopmentValue}</p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs font-semibold text-zinc-500">{copy.visualNextActionLabel}</p>
                  <p className="mt-2 text-sm font-bold leading-5 text-emerald-700">{copy.primaryCta}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-build" className="bg-white px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <BuildList copy={copy} />
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <ProcessSteps copy={copy} />
        </div>
      </section>

      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <PricingSection copy={copy} />
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-14 text-white">
        <div className="mx-auto max-w-3xl">
          <WhyBuvconsult copy={copy} />
        </div>
      </section>

      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <ExistingSoftware copy={copy} />
        </div>
      </section>
    </>
  );
}
