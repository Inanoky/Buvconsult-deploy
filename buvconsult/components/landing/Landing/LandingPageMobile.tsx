"use client";

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

const consultationUrl = "https://calendly.com/vjaceslavs-worksrecorded/30min";

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
      <section className="relative -mt-[65px] overflow-hidden pt-[65px]">
        <PremiumLoadBackground />
        <div className="relative mx-auto w-full max-w-3xl px-4 pb-12 pt-5">
          <div className="text-center">
            <p className="mx-auto mt-7 max-w-xs text-[0.7rem] font-bold uppercase tracking-[0.14em] text-emerald-700">
              {copy.audienceLabel}
            </p>

            <h1 className="mx-auto mt-4 max-w-xl break-words text-[2.35rem] font-black leading-[1.03] tracking-normal text-zinc-950 sm:text-6xl">
              {copy.header}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-7 text-zinc-600">{copy.description}</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-500">{copy.supporting}</p>
            <div className="mx-auto mt-5 flex max-w-sm flex-wrap items-center justify-center gap-2">
              {copy.audienceItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-200 bg-white/65 px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <Button asChild size="lg" className="min-h-12 rounded-full bg-yellow-400 px-5 py-3 text-center leading-5 text-zinc-950 shadow-[0_14px_40px_rgba(250,204,21,0.28)] hover:bg-yellow-300">
                <a href={consultationUrl} target="_blank" rel="noreferrer">{copy.primaryCta}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full bg-white/80">
                <a href="#what-we-build">{copy.secondaryCta}</a>
              </Button>
            </div>
          </div>

          <div className="workflow-board mx-auto mt-8 max-w-sm rounded-[1.75rem] border border-zinc-200 bg-white/80 p-3.5 shadow-[0_24px_78px_rgba(15,23,42,0.14)] backdrop-blur-xl">
            {copy.visualSteps.map((item, index) => {
              const Icon = icons[index];

              return (
                <div key={item.label} className={`workflow-card workflow-step-card mb-3 flex min-h-20 rounded-2xl border border-zinc-200 p-3.5 ${stepClasses[index]}`}>
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
            <div className="grid gap-3 sm:grid-cols-[1fr_0.74fr]">
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-sm font-semibold text-zinc-500">{copy.visualStatusLabel}</p>
                <div className="mt-3 h-2 rounded-full bg-zinc-200">
                  <div className="workflow-progress h-2 rounded-full bg-emerald-600" />
                </div>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs font-semibold text-zinc-500">{copy.visualDevelopmentLabel}</p>
                <p className="mt-2 text-lg font-black text-zinc-950">{copy.visualDevelopmentValue}</p>
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
