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

type LandingPageDesktopProps = {
  locale: LandingLocale;
};

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
  locale,
}: {
  copy: (typeof landingCopy)[LandingLocale];
  locale: LandingLocale;
}) {
  const steps = locale === "lv"
    ? [
        { label: "Saruna", text: "Vajadzibas un process", icon: MessageCircle, className: "workflow-card-a workflow-step-a" },
        { label: "Makets", text: "Interaktivs risinajuma makets", icon: LayoutDashboard, className: "workflow-card-b workflow-step-b" },
        { label: "Testesana", text: "Parbaude ar jusu komandu", icon: CheckCircle2, className: "workflow-card-c workflow-step-c" },
        { label: "Palaisana", text: "Risinajums produkcija", icon: Rocket, className: "workflow-card-d workflow-step-d" },
      ]
    : [
        { label: "Discussion", text: "Process and requirements", icon: MessageCircle, className: "workflow-card-a workflow-step-a" },
        { label: "Mockup", text: "Interactive solution preview", icon: LayoutDashboard, className: "workflow-card-b workflow-step-b" },
        { label: "Testing", text: "Validated with your team", icon: CheckCircle2, className: "workflow-card-c workflow-step-c" },
        { label: "Production", text: "Live custom solution", icon: Rocket, className: "workflow-card-d workflow-step-d" },
      ];

  return (
    <div className="relative mx-auto mt-12 max-w-6xl">
      <div className="workflow-board relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 p-5 shadow-[0_34px_120px_rgba(15,23,42,0.16)] backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.label} className="contents">
                <div className={`workflow-card workflow-step-card rounded-2xl border p-5 ${step.className}`}>
                  <div className="flex items-center gap-3">
                    <span className="workflow-step-icon flex size-11 items-center justify-center rounded-2xl">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="workflow-step-label text-sm font-semibold">{step.label}</p>
                      <p className="workflow-step-title font-bold">{step.text}</p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="workflow-connector h-px w-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-500">Status</p>
            <div className="mt-3 h-2 rounded-full bg-zinc-200">
              <div className="workflow-progress h-2 rounded-full bg-emerald-600" />
            </div>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-500">Development time</p>
            <p className="mt-2 text-2xl font-black text-zinc-950">2 weeks</p>
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

export default function LandingPageDesktop({ locale }: LandingPageDesktopProps) {
  const copy = landingCopy[locale];

  return (
    <>
      <section className="relative -mt-[65px] overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#dff7ea_0%,#f7fbf8_34%,#ffffff_82%)] pt-[65px]">
        <PremiumLoadBackground />
        <div className="relative mx-auto flex min-h-[820px] w-full max-w-7xl flex-col px-6 pb-16 pt-8">
          <div className="mx-auto mt-16 max-w-6xl text-center">
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

          <HeroVisual copy={copy} locale={locale} />
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
