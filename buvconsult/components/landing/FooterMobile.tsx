"use client";

import { useLandingLanguage } from "@/components/landing/LanguageProvider";

const copy = {
  en: {
    contact: "Contact",
    prompt: "Let us talk about your process",
  },
  lv: {
    contact: "Kontakti",
    prompt: "Parunāsim par jūsu procesu",
  },
  ru: {
    contact: "Контакты",
    prompt: "Давайте обсудим ваш процесс",
  },
} as const;

export default function FooterMobile() {
  const { locale } = useLandingLanguage();
  const text = copy[locale];

  return (
    <footer className="relative z-10 border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto w-full max-w-3xl px-4 py-10">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase text-emerald-400">{text.contact}</p>
          <h4 className="mt-4 text-3xl font-semibold">
            Buv<span className="text-emerald-400">consult</span>
          </h4>
          <p className="mt-4 text-zinc-400">{text.prompt}</p>
          <div className="mt-6 space-y-3 text-zinc-200">
            <p>
              <a href="tel:+37124885690" className="underline underline-offset-4">
                tel. +371 24885690
              </a>
            </p>
            <p>
              <a href="mailto:vjaceslavs.gromatovics@buvconsult.com" className="break-all underline underline-offset-4">
                vjaceslavs.gromatovics@buvconsult.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-2 text-sm leading-relaxed text-zinc-400">
          <p className="font-medium text-white">SIA "BUVCONSULT"</p>
          <p>LV40203643527, 23.04.2025</p>
          <p>Riga, Brivibas iela 91-22, LV-1001</p>
          <p>
            <a href="https://www.buvconsult.com" className="underline underline-offset-4">
              buvconsult.com
            </a>
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          (c) {new Date().getFullYear()} BUVCONSULT
        </div>
      </div>
    </footer>
  );
}
