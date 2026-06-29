"use client";

import Link from "next/link";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";

const copy = {
  en: {
    rights: "All rights reserved",
    company: "Company",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    prompt: "Let us talk about your process",
  },
  lv: {
    rights: "Visas tiesības aizsargātas",
    company: "Uzņēmums",
    projects: "Projekti",
    about: "Par mums",
    contact: "Kontakti",
    prompt: "Parunāsim par jūsu procesu",
  },
  ru: {
    rights: "Все права защищены",
    company: "Компания",
    projects: "Проекты",
    about: "О нас",
    contact: "Контакты",
    prompt: "Давайте обсудим ваш процесс",
  },
} as const;

export default function FooterDesktop() {
  const { locale } = useLandingLanguage();
  const text = copy[locale];

  return (
    <footer className="relative z-10 border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-10 px-6 py-16">
        <div className="space-y-5 text-base leading-snug">
          <p className="text-xl font-semibold">SIA "BUVCONSULT"</p>
          <div className="space-y-2 text-zinc-400">
            <p>LV40203643527, 23.04.2025</p>
            <p>Riga, Brivibas iela 91-22, LV-1001</p>
            <p>
              <a href="https://www.buvconsult.com" className="underline underline-offset-4">
                buvconsult.com
              </a>
            </p>
            <p>{text.rights}</p>
          </div>
        </div>

        <div className="space-y-4 text-base leading-snug">
          <p className="font-semibold">{text.company}</p>
          <div className="space-y-3 text-zinc-400">
            <p><Link href="/Landing/Custom" className="hover:text-white">{text.projects}</Link></p>
            <p><Link href="/Landing/About" className="hover:text-white">{text.about}</Link></p>
            <p><Link href="/Landing/ContactForm" className="hover:text-white">{text.contact}</Link></p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase text-emerald-400">{text.contact}</p>
          <h4 className="mt-4 text-3xl font-semibold">
            Buv<span className="text-emerald-400">consult</span>
          </h4>
          <p className="mt-5 text-zinc-400">{text.prompt}</p>
          <div className="mt-6 space-y-3 text-zinc-200">
            <p><a href="tel:+37124885690">tel. +371 24885690</a></p>
            <p><a href="mailto:vjaceslavs.gromatovics@buvconsult.com">vjaceslavs.gromatovics@buvconsult.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
