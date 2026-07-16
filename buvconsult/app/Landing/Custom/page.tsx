"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, Layers3, Workflow } from "lucide-react";
import SiteDiary from "@/public/frontend/pages/SiteDiary/SiteDiary1-seo.webp";
import Dashboard from "@/public/frontend/pages/Home/Dashboard-seo.webp";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";
import { Button } from "@/components/ui/button";
import { localizedPath } from "@/lib/site-routes";

const copy = {
  en: {
    eyebrow: "Projects",
    title: "Construction workflows we have already shaped into software",
    intro: "Buvconsult builds practical systems around real site and office routines. These projects show the kind of focused digital tools we create for contractors.",
    cta: "Discuss your workflow",
    note: "Your process should not bend around off-the-shelf software. The software should fit your process.",
    projects: [
      {
        name: "WorksRecorded",
        tag: "Site progress and work records",
        imageAlt: "WorksRecorded project interface",
        icon: ClipboardList,
        image: SiteDiary,
        desc: "A project for recording completed works, site notes and progress evidence in a structured way, so teams can replace scattered messages and manual logs with reliable operational records.",
        points: [
          "Daily work records and site activity capture",
          "Cleaner evidence for approvals, reporting and disputes",
          "Faster overview of what has been completed on site",
        ],
      },
      {
        name: "ZTC Flow",
        tag: "Internal process and approval flow",
        imageAlt: "ZTC Flow dashboard interface",
        icon: Workflow,
        image: Dashboard,
        desc: "A custom flow for moving requests, decisions and operational tasks through the right people without losing context in spreadsheets, chats or email chains.",
        points: [
          "Clear stages from request to completion",
          "Role-based approvals and status visibility",
          "A workflow designed around the existing company process",
        ],
      },
    ],
  },
  lv: {
    eyebrow: "Projekti",
    title: "Būvniecības darba plūsmas, ko esam pārvērtuši programmatūrā",
    intro: "Buvconsult veido praktiskas sistēmas ap reāliem būvlaukuma un biroja procesiem. Šie projekti parāda, kādus mērķētus digitālos rīkus radām darbuzņēmējiem.",
    cta: "Apspriest jūsu procesu",
    note: "Jūsu process nav jāpielāgo gatavai sistēmai. Sistēmai jāpielāgojas jūsu procesam.",
    projects: [
      {
        name: "WorksRecorded",
        tag: "Būvlaukuma progress un darbu ieraksti",
        imageAlt: "WorksRecorded projekta saskarne",
        icon: ClipboardList,
        image: SiteDiary,
        desc: "Projekts paveikto darbu, būvlaukuma piezīmju un progresa pierādījumu strukturētai reģistrēšanai, lai komanda varētu aizstāt izkaisītas ziņas un manuālus žurnālus ar uzticamiem operatīvajiem datiem.",
        points: [
          "Ikdienas darbu ieraksti un būvlaukuma aktivitāšu fiksēšana",
          "Sakārtotāki pierādījumi apstiprinājumiem, atskaitēm un strīdu situācijām",
          "Ātrāks pārskats par būvlaukumā paveikto",
        ],
      },
      {
        name: "ZTC Flow",
        tag: "Iekšējais process un apstiprinājumu plūsma",
        imageAlt: "ZTC Flow vadības paneļa saskarne",
        icon: Workflow,
        image: Dashboard,
        desc: "Pielāgota plūsma pieprasījumu, lēmumu un operatīvo uzdevumu virzīšanai caur pareizajiem cilvēkiem, nezaudējot kontekstu izklājlapās, čatos vai e-pastu ķēdēs.",
        points: [
          "Skaidri posmi no pieprasījuma līdz pabeigšanai",
          "Lomu balstīti apstiprinājumi un statusa redzamība",
          "Darba plūsma, kas pielāgota esošajam uzņēmuma procesam",
        ],
      },
    ],
  },
  ru: {
    eyebrow: "Проекты",
    title: "Строительные процессы, которые мы уже превратили в ПО",
    intro: "Buvconsult создает практичные системы вокруг реальных процессов на объекте и в офисе. Эти проекты показывают, какие точечные цифровые инструменты мы создаем для подрядчиков.",
    cta: "Обсудить ваш процесс",
    note: "Ваш процесс не должен подстраиваться под готовую систему. Система должна подходить вашему процессу.",
    projects: [
      {
        name: "WorksRecorded",
        tag: "Прогресс на объекте и записи работ",
        imageAlt: "Интерфейс проекта WorksRecorded",
        icon: ClipboardList,
        image: SiteDiary,
        desc: "Проект для структурированной фиксации выполненных работ, заметок с объекта и подтверждений прогресса, чтобы заменить разрозненные сообщения и ручные журналы надежными операционными данными.",
        points: [
          "Ежедневные записи работ и активности на объекте",
          "Более чистые доказательства для согласований, отчетов и спорных ситуаций",
          "Быстрый обзор того, что выполнено на объекте",
        ],
      },
      {
        name: "ZTC Flow",
        tag: "Внутренний процесс и поток согласований",
        imageAlt: "Интерфейс панели ZTC Flow",
        icon: Workflow,
        image: Dashboard,
        desc: "Индивидуальный поток для передачи запросов, решений и операционных задач нужным людям без потери контекста в таблицах, чатах или цепочках писем.",
        points: [
          "Понятные этапы от запроса до завершения",
          "Согласования по ролям и видимость статусов",
          "Рабочий процесс, созданный вокруг существующего процесса компании",
        ],
      },
    ],
  },
} as const;

export default function Page() {
  const { locale } = useLandingLanguage();
  const text = copy[locale];
  const siteLocale = locale === "ru" ? "lv" : locale;

  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">{text.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.04] tracking-normal text-zinc-950 sm:text-5xl md:text-7xl">
            {text.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">{text.intro}</p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
          {text.projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.name}
                className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:rounded-[2rem]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white sm:bottom-5 sm:left-5 sm:right-auto">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg sm:size-12">
                      <Icon className="size-5 sm:size-6" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="truncate text-2xl font-black sm:text-3xl">{project.name}</h2>
                      <p className="text-sm font-semibold text-zinc-200">{project.tag}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-sm leading-7 text-zinc-600 sm:text-base">{project.desc}</p>
                  <div className="mt-6 grid gap-3">
                    {project.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/75 p-4">
                        <CheckCircle2 className="size-5 shrink-0 text-emerald-700" />
                        <p className="font-medium leading-6 text-zinc-800">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-zinc-200 bg-zinc-950 p-5 text-white shadow-2xl sm:mt-10 sm:flex-row sm:items-center sm:rounded-[2rem] sm:p-6">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500">
              <Layers3 className="size-6" />
            </span>
            <p className="max-w-2xl text-base font-semibold leading-7 text-zinc-100 sm:text-lg">{text.note}</p>
          </div>
          <Button asChild size="lg" className="w-full rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-100 sm:w-auto">
            <Link href={localizedPath(siteLocale, "contact")}>
              {text.cta}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
