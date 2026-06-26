"use client";

import Image from "next/image";
import { CheckCircle2, HardHat, Sparkles } from "lucide-react";
import Selfie from "@/public/frontend/pages/About/Selfie.jpg";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";

const copy = {
  en: {
    eyebrow: "About Buvconsult",
    title: "Software thinking with construction reality built in",
    paragraphs: [
      "Buvconsult exists for construction companies that know their processes can work better, but do not want to force their teams into generic software.",
      "We combine software development, AI automation and practical construction experience. That means we can understand invoices, approvals, site records, timesheets, reporting and the everyday friction between office and site.",
      "Our work starts with the workflow you already have. We analyse it, challenge the unnecessary steps, prepare a mockup and build a system that fits your business.",
    ],
    principlesTitle: "How we work",
    principles: [
      "Construction-first process analysis",
      "Free consultation and interactive mockup",
      "Development included in the monthly cost",
      "Practical systems that save administrative time",
    ],
    signature: ["Vjaceslavs Gromatovics", "Buvconsult Team", "From construction professionals, for construction professionals."],
  },
  lv: {
    eyebrow: "Par Buvconsult",
    title: "Programmatūras domāšana ar reālu būvniecības pieredzi",
    paragraphs: [
      "Buvconsult ir radīts būvniecības uzņēmumiem, kuri redz, ka procesi var strādāt labāk, bet nevēlas piespiest komandu pielāgoties vispārīgai programmatūrai.",
      "Mēs apvienojam programmatūras izstrādi, AI automatizāciju un praktisku būvniecības pieredzi. Tāpēc saprotam rēķinus, apstiprinājumus, būvlaukuma ierakstus, laika uzskaiti, atskaites un ikdienas berzi starp biroju un objektu.",
      "Darbu sākam ar jūsu esošo procesu. Mēs to analizējam, apšaubām liekos soļus, sagatavojam maketu un izstrādājam sistēmu, kas pielāgojas jūsu biznesam.",
    ],
    principlesTitle: "Kā mēs strādājam",
    principles: [
      "Būvniecības procesiem pielāgota analīze",
      "Bezmaksas konsultācija un interaktīvs makets",
      "Izstrāde iekļauta mēneša maksā",
      "Praktiskas sistēmas, kas ietaupa administratīvo laiku",
    ],
    signature: ["Vjačeslavs Gromatovičs", "Buvconsult komanda", "No būvniecības profesionāļiem būvniecības profesionāļiem."],
  },
} as const;

export default function Page() {
  const { locale } = useLandingLanguage();
  const text = copy[locale];

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">{text.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-black leading-[1] tracking-normal text-zinc-950 md:text-7xl">
            {text.title}
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-600">
            {text.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-zinc-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.1)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Sparkles className="size-5" />
              </span>
              <h2 className="text-2xl font-black text-zinc-950">{text.principlesTitle}</h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {text.principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                  <p className="font-medium leading-6 text-zinc-800">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-zinc-200 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <Image
            src={Selfie}
            alt="Vjaceslavs Gromatovics"
            priority
            width={700}
            height={900}
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
          <div className="mt-6 flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white">
              <HardHat className="size-6" />
            </span>
            <div className="space-y-1">
              {text.signature.map((line) => (
                <p key={line} className="font-semibold leading-6 text-zinc-950">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
