import {
  BarChart3,
  Bot,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Code2,
  Database,
  FileCheck2,
  FlaskConical,
  GitPullRequestArrow,
  LayoutDashboard,
  MessageCircle,
  Rocket,
  Search,
  Users,
} from "lucide-react";

export type LandingLocale = "lv" | "en";

export const landingCopy = {
  lv: {
    badge: "Bezmaksas konsultācija un interaktīvs makets",
    header: "AI un digitālais partneris būvniecībai",
    header2: "",
    description:
      "Mēs veidojam pielāgotu programmatūru un AI risinājumus, kas automatizē administrāciju, apstiprinājumus, atskaites un atkārtotus uzdevumus.",
    supporting:
      "Risinājums pielāgojas tam, kā jūsu komanda jau strādā, nevis piespiež mainīt procesus.",
    proof:
      "Bez lieliem sākotnējiem ieguldījumiem. Maksājums sākas tikai pēc risinājuma pieņemšanas.",
    primaryCta: "Pieteikt bezmaksas konsultāciju",
    secondaryCta: "Skatīt iespējas",
    visualTitle: "Būvniecības darba plūsma",
    visualMessage: "Process analizēts. Makets sagatavots.",
    visualInput: "Rēķini, laika uzskaite, BIS, WhatsApp",
    visualOutput: "Pielāgots rīks jūsu komandai",
    buildTitle: "Ko mēs varam izveidot",
    buildIntro: "Mēs palīdzam būvniecības uzņēmumiem automatizēt un digitalizēt operatīvos procesus.",
    buildItems: [
      "Rēķinu apstiprināšanas darba plūsmas",
      "Darbinieku pārvaldība un laika uzskaite",
      "Produktivitātes izsekošana",
      "Inventāra un materiālu pārvaldība",
      "AI asistenti",
      "Būvlaukuma atskaites",
      "Datu ievākšana",
      "BIS integrācija",
      "WhatsApp integrācija",
      "Iekšējās apstiprināšanas darba plūsmas",
      "Pielāgoti vadības paneļi un atskaites",
      "Jebkura jūsu biznesam unikāla darba plūsma",
    ],
    workTitle: "Kā tas strādā",
    workHeadline: "No pirmās sarunas līdz pieņemtam risinājumam.",
    workItems: [
      {
        title: "Pastāstiet par izaicinājumu",
        desc: "Nosauciet procesu, kas aizņem pārāk daudz laika, rada kļūdas vai sagādā vilšanos.",
      },
      {
        title: "Bezmaksas konsultācija",
        desc: "Rezervējiet tikšanos un vienkārši izskaidrojiet, kā process darbojas šobrīd.",
      },
      {
        title: "Risinājums un makets",
        desc: "Mēs analizējam jūsu darba plūsmu un bez maksas sagatavojam risinājuma piedāvājumu ar interaktīvu maketu. Mēs arī ieteiksim automatizācijas un AI idejas, kas var vēl vairāk uzlabot procesu.",
      },
      {
        title: "Izstrāde",
        desc: "Pēc apstiprināšanas sākam izstrādi un regulāri informējam par progresu.",
      },
      {
        title: "Testēšana",
        desc: "Sistēma tiek testēta jūsu organizācijā un pielāgota pēc reālām lietotāju atsauksmēm.",
      },
      {
        title: "Palaišana",
        desc: "Sistēmu palaižam tikai tad, kad esat apmierināti ar rezultātu. Maksāt sākat tikai pēc risinājuma pieņemšanas.",
      },
    ],
    pricingTitle: "Cenas",
    pricingHeadline: "Vienkārša mēneša maksa tikai pēc risinājuma pieņemšanas.",
    pricingIntro: "Konsultācija, procesa analīze un interaktīvie maketi vienmēr ir bez maksas.",
    pricingItems: [
      {
        title: "Vienkārša darba plūsma",
        price: "€200/mēnesī",
        meta: "Līdz 15 lietotājiem",
        desc: "Piemērots mazākām iekšējām darba plūsmām un procesu automatizācijai.",
      },
      {
        title: "Vidēja sarežģītība",
        price: "€400/mēnesī",
        meta: "Līdz 40 lietotājiem",
        desc: "Piemērots lielākām darba plūsmām ar vairākiem lietotājiem un integrācijām.",
      },
      {
        title: "Sarežģīti risinājumi",
        price: "Individuāls piedāvājums",
        meta: "Uzņēmuma līmeņa sistēmām",
        desc: "Ideāli AI risinājumiem, sarežģītām integrācijām un uzņēmuma mēroga sistēmām.",
      },
    ],
    whyTitle: "Kāpēc Buvconsult?",
    whyHeadline: "Premium līmeņa speciālists, nevis vispārīga programmatūras aģentūra.",
    whyParagraphs: [
      "Atšķirībā no tradicionālām programmatūras aģentūrām, mēs saprotam būvniecību. Mūsu komanda apvieno pieredzējušus programmatūras izstrādātājus ar būvniecības profesionāļiem, kuri saprot, kā projekti tiek plānoti, vadīti un nodoti.",
      "Mēs ne tikai izstrādājam to, ko prasāt. Mēs analizējam esošo darba plūsmu, atrodam automatizācijas iespējas, apšaubām neefektīvus procesus un projektējam programmatūru, kas patiešām ietaupa laiku, samazina administratīvo darbu un uzlabo pārskatāmību.",
      "Mērķis ir vienkāršs: izveidot programmatūru, kas pati sevi atpelna, padarot jūsu uzņēmumu efektīvāku.",
    ],
    existingTitle: "Kāpēc ne vienkārši nopirkt gatavu programmatūru?",
    existingHeadline: "Programmatūrai jāpielāgojas jūsu biznesam.",
    existingIntro: "Lielākā daļa programmatūras liek biznesam pielāgoties sistēmai. Mēs veidojam programmatūru, kas pielāgojas jūsu biznesam.",
    existingItems: [
      "Bez liekām funkcijām",
      "Bez sarežģītas ieviešanas",
      "Bez nepieciešamības mainīt komandas darba veidu",
      "Veidots tieši jūsu procesiem",
      "Viegli paplašināms, uzņēmumam augot",
    ],
  },
  en: {
    badge: "Free consultation and interactive mockup",
    header: "AI and digital partner for construction",
    header2: "",
    description:
      "We build custom software and AI solutions that automate admin, approvals, reporting and repetitive construction workflows.",
    supporting:
      "Every solution fits the way your company already works, without forcing your team to change its processes.",
    proof:
      "No large upfront investment. Payment starts only after you accept the solution.",
    primaryCta: "Book a free consultation",
    secondaryCta: "See what we build",
    visualTitle: "Construction workflow",
    visualMessage: "Process analysed. Mockup ready.",
    visualInput: "Invoices, timesheets, BIS, WhatsApp",
    visualOutput: "Custom tool for your team",
    buildTitle: "What We Can Build",
    buildIntro: "We help construction companies automate and digitalise operational processes.",
    buildItems: [
      "Invoice approval workflows",
      "Workforce management & timesheets",
      "Productivity tracking",
      "Inventory & material management",
      "AI assistants",
      "Site reporting",
      "Data collection",
      "BIS integration",
      "WhatsApp integration",
      "Internal approval workflows",
      "Custom dashboards & reporting",
      "Any workflow unique to your business",
    ],
    workTitle: "How It Works",
    workHeadline: "From first conversation to accepted solution.",
    workItems: [
      {
        title: "Tell us your challenge",
        desc: "Identify a process that takes too much time, creates mistakes or causes frustration.",
      },
      {
        title: "Free consultation",
        desc: "Book a meeting and simply explain how the process works today.",
      },
      {
        title: "Solution & Mockup",
        desc: "We analyse your workflow and prepare a solution proposal together with an interactive mockup, completely free of charge. We will also suggest ideas for automation and AI that could further improve your process.",
      },
      {
        title: "Development",
        desc: "Once approved, we begin development and keep you updated throughout the project.",
      },
      {
        title: "Testing",
        desc: "The system is tested within your organisation and adjusted based on real user feedback.",
      },
      {
        title: "Go Live",
        desc: "Only when you are happy with the result do we launch the system. You only start paying after accepting the solution.",
      },
    ],
    pricingTitle: "Pricing",
    pricingHeadline: "Simple monthly pricing after you accept the solution.",
    pricingIntro: "Consultation, process analysis and interactive mockups are always free.",
    pricingItems: [
      {
        title: "Simple Workflow",
        price: "€200/month",
        meta: "Up to 15 users",
        desc: "Perfect for smaller internal workflows and process automation.",
      },
      {
        title: "Medium Complexity",
        price: "€400/month",
        meta: "Up to 40 users",
        desc: "Suitable for larger workflows with multiple users and integrations.",
      },
      {
        title: "Complex Solutions",
        price: "Custom quotation",
        meta: "Enterprise-level systems",
        desc: "Ideal for enterprise-level systems, AI solutions and advanced integrations.",
      },
    ],
    whyTitle: "Why Buvconsult?",
    whyHeadline: "Premium specialist, not a generic software shop.",
    whyParagraphs: [
      "Unlike traditional software agencies, we understand construction. Our team combines experienced software developers with construction professionals who understand how projects are planned, delivered and managed.",
      "We do not simply build what you ask for. We analyse your existing workflow, identify opportunities for automation, challenge inefficient processes, and design software that genuinely saves time, reduces administrative work and improves operational visibility.",
      "Our goal is simple: build software that pays for itself by making your business more efficient.",
    ],
    existingTitle: "Why Not Just Buy Existing Software?",
    existingHeadline: "Software should adapt to your business.",
    existingIntro: "Most software forces your business to adapt to the system. We build software that adapts to your business.",
    existingItems: [
      "No unnecessary features",
      "No complicated setup",
      "No changing the way your team works",
      "Built specifically for your processes",
      "Easy to expand as your business grows",
    ],
  },
} as const;

export type LandingCopy = (typeof landingCopy)[LandingLocale];

const buildIcons = [
  FileCheck2,
  Users,
  BarChart3,
  Boxes,
  Bot,
  ClipboardList,
  Database,
  GitPullRequestArrow,
  MessageCircle,
  CalendarCheck,
  LayoutDashboard,
  Code2,
] as const;

const workIcons = [Search, CalendarCheck, LayoutDashboard, Code2, FlaskConical, Rocket] as const;

export function BuildList({ copy }: { copy: LandingCopy }) {
  return (
    <div className="space-y-7">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{copy.buildTitle}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-normal text-zinc-950 md:text-5xl">
          {copy.buildIntro}
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {copy.buildItems.map((item, index) => {
          const Icon = buildIcons[index % buildIcons.length];

          return (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Icon className="size-5" aria-hidden />
            </span>
            <p className="font-medium leading-relaxed text-zinc-800">{item}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProcessSteps({ copy }: { copy: LandingCopy }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{copy.workTitle}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-normal text-zinc-950 md:text-5xl">
          {copy.workHeadline}
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {copy.workItems.map((item, index) => {
          const Icon = workIcons[index % workIcons.length];

          return (
          <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                <Icon className="size-5" aria-hidden />
              </div>
              <span className="text-sm font-bold text-emerald-700">0{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-zinc-950">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-zinc-600">{item.desc}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export function PricingSection({ copy }: { copy: LandingCopy }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{copy.pricingTitle}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-normal text-zinc-950 md:text-5xl">
          {copy.pricingHeadline}
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">{copy.pricingIntro}</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {copy.pricingItems.map((item) => (
          <div key={item.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-950">{item.title}</h3>
            <p className="mt-5 text-3xl font-black text-zinc-950">{item.price}</p>
            <p className="mt-2 text-sm font-semibold text-emerald-700">{item.meta}</p>
            <p className="mt-5 leading-relaxed text-zinc-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhyBuvconsult({ copy }: { copy: LandingCopy }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">{copy.whyTitle}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-normal text-white md:text-5xl">
          {copy.whyHeadline}
        </h2>
      </div>
      <div className="space-y-5">
        {copy.whyParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-8 text-zinc-300">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ExistingSoftware({ copy }: { copy: LandingCopy }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{copy.existingTitle}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-normal text-zinc-950 md:text-5xl">
          {copy.existingHeadline}
        </h2>
        <p className="mt-5 text-lg leading-8 text-zinc-600">{copy.existingIntro}</p>
      </div>
      <div className="grid gap-3">
        {copy.existingItems.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-700" aria-hidden />
            <p className="font-medium leading-relaxed text-zinc-800">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
