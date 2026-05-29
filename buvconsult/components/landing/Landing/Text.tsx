import { CheckCircle2 } from "lucide-react";

export type LandingLocale = "lv" | "en";

export const landingCopy = {
  lv: {
    localeLabel: "LV",
    alternateLocaleLabel: "EN",
    badge: "AI un programmatūras partneris",
    eyebrow: "Buvconsult",
    header: "AI un programmatūras izstrāde",
    header2: "būvniecībai un ražošanai",
    description:
      "Buvconsult izstrādā praktiskas AI darba plūsmas, iekšējos rīkus un pielāgotu programmatūru uzņēmumiem, kas būvē, ražo, uzstāda un uztur reālus aktīvus.",
    operatingLine: "",
    primaryCta: "Apspriest projektu",
    secondaryCta: "Skatīt pakalpojumus",
    signalA: "AI aģenti, automatizācijas, paneļi un iekšējie rīki reālām operācijām.",
    signalB: "Veidots būvlaukumiem, rūpnīcām, piegādātājiem un vadības komandām.",
    visualTitle: "Operāciju dati",
    visualMessage: "Saņemts. Sagatavoju ierakstu.",
    visualInput: "WhatsApp, PDF, foto, Excel",
    visualOutput: "Strukturēts ieraksts un vadības panelis",
    buildTitle: "Ko Buvconsult izstrādā",
    workTitle: "Kā mēs strādājam",
    whyTitle: "Kāpēc uzņēmumi izvēlas mūs",
    whyIntro:
      "Buvconsult ir tehniskais partneris operatīviem uzņēmumiem, kuriem vajadzīgs noderīgs AI, nevis skaļi solījumi. Mēs palīdzam pāriet no atsevišķiem failiem un manuāliem darbiem uz programmatūru, kas klusi atbalsta ikdienas darbu.",
    buildItems: [
      {
        title: "AI darba plūsmu automatizācija",
        desc: "pārvērš manuālas dokumentu pārbaudes, atskaites un datu ievadi strukturētos procesos.",
      },
      {
        title: "Pielāgota biznesa programmatūra",
        desc: "izstrādā vadības paneļus, portālus, operatīvos rīkus un integrācijas atbilstoši jūsu darba veidam.",
      },
      {
        title: "Būvniecības datu sistēmas",
        desc: "savieno būvdarbu žurnālus, rēķinus, pavadzīmes, fotoattēlus un projekta ierakstus uzticamā pierādījumu kopumā.",
      },
      {
        title: "Ražošanas sistēmas",
        desc: "digitalizē ražošanas žurnālus, kvalitātes pārbaudes, noliktavas kustību un veiktspējas atskaites.",
      },
    ],
    workItems: [
      {
        title: "Operatīvā izpēte",
        desc: "pirms koda rakstīšanas pārskatām faktiskās darba plūsmas, failus, sastrēgumus un atskaišu prasības.",
      },
      {
        title: "AI prototipi",
        desc: "ātri pārbaudām lietojumus ar reāliem dokumentiem un reālu komandas uzvedību.",
      },
      {
        title: "Produkcijas programmatūra",
        desc: "pārbaudītus prototipus pārvēršam stabilās tīmekļa lietotnēs, automatizācijās un integrācijās.",
      },
      {
        title: "Cilvēka kontrole",
        desc: "AI palīdz komandai, bet apstiprinājumi, izņēmumi un atbildība paliek skaidri.",
      },
    ],
    whyItems: [
      "Būvniecības un ražošanas darbs reti pilnībā iederas gatavā SaaS produktā, tāpēc mēs pielāgojam programmatūru operācijām.",
      "Mēs apvienojam AI, automatizāciju, vadības paneļus un klasisku programmatūras izstrādi vienā piegādes procesā.",
    ],
  },
  en: {
    localeLabel: "EN",
    alternateLocaleLabel: "LV",
    badge: "AI and custom software partner",
    eyebrow: "Buvconsult",
    header: "AI and software development",
    header2: "for construction and manufacturing",
    description:
      "Buvconsult designs practical AI workflows, internal tools and custom software for companies that build, produce, install and maintain real-world assets.",
    operatingLine: "",
    primaryCta: "Discuss a project",
    secondaryCta: "Explore services",
    signalA: "AI agents, automations, dashboards and internal tools for real operations.",
    signalB: "Built around construction sites, factories, suppliers and management workflows.",
    visualTitle: "Operational data",
    visualMessage: "Received. Preparing the record.",
    visualInput: "WhatsApp, PDF, photos, Excel",
    visualOutput: "Structured record and dashboard",
    buildTitle: "What Buvconsult builds",
    workTitle: "How we work",
    whyTitle: "Why companies choose us",
    whyIntro:
      "Buvconsult is a technical partner for operational businesses that need useful AI, not hype. We help teams move from disconnected files and manual routines to software that quietly supports the work.",
    buildItems: [
      {
        title: "AI workflow automation",
        desc: "turn manual document checks, reporting and data entry into structured processes.",
      },
      {
        title: "Custom business software",
        desc: "build dashboards, portals, operational tools and integrations around how your team already works.",
      },
      {
        title: "Construction intelligence",
        desc: "connect site diaries, invoices, delivery notes, photos and project records into reliable evidence.",
      },
      {
        title: "Manufacturing systems",
        desc: "digitise production logs, quality checks, stock movement and performance reporting.",
      },
    ],
    workItems: [
      {
        title: "Operational discovery",
        desc: "we review your actual workflows, files, bottlenecks and reporting obligations before writing code.",
      },
      {
        title: "AI prototypes",
        desc: "we test use cases quickly with real documents and real team behaviour.",
      },
      {
        title: "Production software",
        desc: "we turn proven prototypes into stable web apps, automations and integrations.",
      },
      {
        title: "Human-in-the-loop control",
        desc: "AI supports the team while approvals, exceptions and accountability stay clear.",
      },
    ],
    whyItems: [
      "Construction and manufacturing work does not fit generic SaaS perfectly, so we adapt software to the operation instead of forcing the operation into software.",
      "We combine AI, automation, dashboards and traditional software engineering in one delivery process.",
    ],
  },
} as const;

type LandingCopy = (typeof landingCopy)[LandingLocale];

function BulletSection({
  title,
  items,
  compact = false,
}: {
  title: string;
  items: readonly { title: string; desc: string }[];
  compact?: boolean;
}) {
  return (
    <div className="space-y-5">
      <h3 className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-zinc-950`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map(({ title: itemTitle, desc }) => (
          <li key={itemTitle} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-700" aria-hidden />
            <p className="leading-relaxed text-zinc-700">
              <span className="font-semibold text-zinc-950">{itemTitle}</span>
              {desc ? <span> - {desc}</span> : null}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhatDoWeDo({ copy }: { copy: LandingCopy }) {
  return <BulletSection compact title={copy.buildTitle} items={copy.buildItems} />;
}

export function HowDoWeDoThat({ copy }: { copy: LandingCopy }) {
  return <BulletSection title={copy.workTitle} items={copy.workItems} />;
}

export function Why({ copy }: { copy: LandingCopy }) {
  return (
    <div className="space-y-5">
      <h3 className="text-2xl font-semibold text-zinc-950">{copy.whyTitle}</h3>
      <ul className="space-y-3">
        {copy.whyItems.map((text) => (
          <li key={text} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-700" aria-hidden />
            <p className="leading-relaxed text-zinc-700">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
