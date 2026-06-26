import { Bot, ChartNoAxesCombined, Factory, HardHat } from "lucide-react";
import { LandingLocale } from "@/components/landing/Landing/Text";

const featureCopy = {
  lv: {
    eyebrow: "Praktiskas sistēmas, izmērāma vērtība",
    title: "Projekti komandām, kas būvē un ražo",
    items: [
      {
        name: "AI procesu automatizācija",
        description:
          "Automatizē dokumentu nolasīšanu, atskaites, apstiprinājumus un atkārtotus koordinācijas darbus ar kontrolētām AI darba plūsmām.",
        icon: Bot,
      },
      {
        name: "Būvniecības programmatūra",
        description:
          "Veido projektu ierakstus, būvdarbu žurnālus, rēķinu plūsmas, pierādījumu arhīvus un paneļus atbilstoši reālai objektu darbībai.",
        icon: HardHat,
      },
      {
        name: "Ražošanas rīki",
        description:
          "Izstrādā ražošanas žurnālus, kvalitātes pārbaudes sistēmas, noliktavas rīkus un vadības skatus rūpnīcu komandām.",
        icon: Factory,
      },
      {
        name: "Operatīvā analītika",
        description:
          "Pārvērš ziņas, PDF, Excel, fotoattēlus un sistēmu datus vadības paneļos, pēc kuriem komanda var rīkoties.",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  en: {
    eyebrow: "Practical systems, measurable value",
    title: "Projects for teams that build and produce",
    items: [
      {
        name: "AI Process Automation",
        description:
          "Automate document extraction, reporting, approvals and repetitive coordination tasks with controlled AI workflows.",
        icon: Bot,
      },
      {
        name: "Construction Software",
        description:
          "Create project records, site diaries, invoice flows, evidence logs and dashboards that match real site operations.",
        icon: HardHat,
      },
      {
        name: "Manufacturing Tools",
        description:
          "Build production logs, quality check systems, stock tools and management views for factory teams.",
        icon: Factory,
      },
      {
        name: "Operational Analytics",
        description:
          "Turn messages, PDFs, spreadsheets, photos and system data into dashboards your team can act on.",
        icon: ChartNoAxesCombined,
      },
    ],
  },
} as const;

export function Features({ locale = "lv" }: { locale?: LandingLocale }) {
  const copy = featureCopy[locale];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 lg:text-center">
        <p className="font-semibold leading-7 text-emerald-700">{copy.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-normal text-zinc-950 sm:text-4xl">
          {copy.title}
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-2xl px-4 sm:mt-20 lg:mt-24 lg:max-w-5xl">
        <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
          {copy.items.map((feature) => (
            <div
              key={feature.name}
              className="rounded-xl border border-zinc-200 bg-white p-7 shadow-[0_20px_80px_rgba(15,23,42,0.08)]"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-emerald-700">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-7 text-zinc-950">
                {feature.name}
              </h3>
              <p className="mt-4 text-lg leading-snug text-zinc-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
