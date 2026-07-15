"use client";

import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactEmail = "vjaceslavs.gromatovics@buvconsult.com";
const whatsAppNumber = "37124885690";

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Book a free consultation",
    intro: "Tell us what process you want to improve. We will review it and come back with practical next steps.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    subject: "Workflow or challenge",
    message: "Message",
    firstNamePlaceholder: "Name",
    lastNamePlaceholder: "Surname",
    emailPlaceholder: "name@company.com",
    subjectPlaceholder: "Invoice approvals, timesheets, reporting...",
    messagePlaceholder: "What happens today, and what should be faster or clearer?",
    submit: "Send request",
    pending: "Opening email...",
    success: "Your email app should open now. You can also contact us directly by phone, email or WhatsApp.",
    direct: "Direct contact",
    phone: "Phone",
    whatsApp: "WhatsApp",
  },
  lv: {
    eyebrow: "Kontakti",
    title: "Pieteikt bezmaksas konsultāciju",
    intro: "Pastāstiet, kuru procesu vēlaties uzlabot. Mēs to izvērtēsim un atgriezīsimies ar praktiskiem nākamajiem soļiem.",
    firstName: "Vārds",
    lastName: "Uzvārds",
    email: "E-pasts",
    subject: "Darba plūsma vai izaicinājums",
    message: "Ziņa",
    firstNamePlaceholder: "Vārds",
    lastNamePlaceholder: "Uzvārds",
    emailPlaceholder: "vards@uznemums.lv",
    subjectPlaceholder: "Rēķinu apstiprināšana, laika uzskaite, atskaites...",
    messagePlaceholder: "Kā process darbojas šobrīd, un kam jābūt ātrākam vai skaidrākam?",
    submit: "Nosūtīt pieprasījumu",
    pending: "Atver e-pastu...",
    success: "Jūsu e-pasta lietotnei tagad vajadzētu atvērties. Varat sazināties arī tieši pa tālruni, e-pastu vai WhatsApp.",
    direct: "Tieša saziņa",
    phone: "Tālrunis",
    whatsApp: "WhatsApp",
  },
  ru: {
    eyebrow: "Контакты",
    title: "Записаться на бесплатную консультацию",
    intro: "Расскажите, какой процесс вы хотите улучшить. Мы изучим его и предложим практичные следующие шаги.",
    firstName: "Имя",
    lastName: "Фамилия",
    email: "Э-почта",
    subject: "Рабочий процесс или задача",
    message: "Сообщение",
    firstNamePlaceholder: "Имя",
    lastNamePlaceholder: "Фамилия",
    emailPlaceholder: "name@company.com",
    subjectPlaceholder: "Согласование счетов, учет времени, отчеты...",
    messagePlaceholder: "Как процесс работает сейчас, и что должно стать быстрее или понятнее?",
    submit: "Отправить запрос",
    pending: "Открываем почту...",
    success: "Почтовое приложение должно открыться. Вы также можете связаться с нами напрямую по телефону, email или WhatsApp.",
    direct: "Прямая связь",
    phone: "Телефон",
    whatsApp: "WhatsApp",
  },
} as const;

export default function ContactForm() {
  const { locale } = useLandingLanguage();
  const text = copy[locale];
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setStatus(null);

    const fd = new FormData(e.currentTarget);
    const hp = String(fd.get("hp") || "");
    if (hp) {
      setPending(false);
      return;
    }

    const firstName = String(fd.get("firstName") || "");
    const lastName = String(fd.get("lastName") || "");
    const email = String(fd.get("email") || "");
    const subject = String(fd.get("subject") || text.title);
    const message = String(fd.get("message") || "");
    const body = [`Name: ${firstName} ${lastName}`, `Email: ${email}`, "", message].join("\n");

    sendGAEvent("event", "conversion", {
      value: { send_to: "AW-17670426077/3OXOCMXV7rUbEN2b9elB" },
    });
    sendGTMEvent({
      event: "conversion",
      value: { send_to: "AW-17670426077/3OXOCMXV7rUbEN2b9elB" },
    });
    sendGTMEvent({
      event: "Buvconsult_form_submit",
      form_name: "contact_form",
      conversion_name: "lead",
    });

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Buvconsult] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    setStatus({ ok: true, msg: text.success });
    setPending(false);
  }

  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">{text.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.04] tracking-normal text-zinc-950 sm:text-5xl md:text-7xl">
              {text.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">{text.intro}</p>
          </div>

          <div className="rounded-[1.5rem] border border-zinc-200 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
            <h2 className="text-2xl font-black text-zinc-950">{text.direct}</h2>
            <div className="mt-6 grid gap-3">
              <a href="tel:+37124885690" className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                <Phone className="size-5 text-emerald-700" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{text.phone}</span>
                  <span className="font-bold text-zinc-950">+371 24885690</span>
                </span>
              </a>
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                <Mail className="size-5 text-emerald-700" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{text.email}</span>
                  <span className="break-all font-bold text-zinc-950">{contactEmail}</span>
                </span>
              </a>
              <a
                href={`https://wa.me/${whatsAppNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4"
              >
                <MessageCircle className="size-5 text-emerald-700" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{text.whatsApp}</span>
                  <span className="font-bold text-zinc-950">+371 24885690</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <form
          className="rounded-[1.5rem] border border-white/60 bg-white/85 p-5 shadow-[0_34px_120px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:rounded-[2rem] sm:p-7"
          onSubmit={onSubmit}
        >
          <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">{text.firstName}</Label>
              <Input id="firstName" name="firstName" placeholder={text.firstNamePlaceholder} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{text.lastName}</Label>
              <Input id="lastName" name="lastName" placeholder={text.lastNamePlaceholder} required />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <Label htmlFor="email">{text.email}</Label>
            <Input id="email" name="email" type="email" placeholder={text.emailPlaceholder} required />
          </div>

          <div className="mt-5 space-y-2">
            <Label htmlFor="subject">{text.subject}</Label>
            <Input id="subject" name="subject" placeholder={text.subjectPlaceholder} required />
          </div>

          <div className="mt-5 space-y-2">
            <Label htmlFor="message">{text.message}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={text.messagePlaceholder}
              className="min-h-40 resize-none"
              required
            />
          </div>

          {status && (
            <p className="mt-5 text-sm font-semibold text-emerald-700">
              {status.msg}
            </p>
          )}

          <Button type="submit" className="mt-6 h-12 w-full rounded-full bg-zinc-950 text-base font-bold hover:bg-zinc-800" disabled={pending}>
            {pending ? text.pending : text.submit}
            {!pending && <Send className="ml-2 size-4" />}
          </Button>
        </form>
      </div>
    </section>
  );
}
