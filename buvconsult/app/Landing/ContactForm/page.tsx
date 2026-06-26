"use client";

import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { motion, useInView, type Variants } from "framer-motion";
import { CheckCircle2, Clock3, Mail, MessageCircle, Phone, Send, Sparkles, Workflow } from "lucide-react";
import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLandingLanguage } from "@/components/landing/LanguageProvider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AnimatedWrapper = motion.div;
const contactEmail = "hello@buvconsult.com";
const whatsAppNumber = "37124885690";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 110,
      damping: 18,
    },
  },
};

const copy = {
  en: {
    badge: "Start with clarity",
    title: "Book a free construction software consultation",
    intro:
      "Tell us about the workflow that wastes time, creates mistakes, or slows down your team. We will map the process and propose a practical AI or software solution before you commit to anything.",
    benefits: ["Free consultation", "Free process review", "Free interactive mockup"],
    afterTitle: "What happens after you contact us",
    afterText:
      "We discuss the process, prepare an interactive mockup, then move into development only after the direction is clear and useful.",
    delivery: "Typical focused workflow delivery starts from 2 weeks.",
    contact: {
      phone: "Phone",
      email: "Email",
      whatsApp: "WhatsApp",
    },
    formEyebrow: "Project inquiry",
    formTitle: "Tell us what should work better",
    formIntro: "A short description is enough. We will come back with practical next steps.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    subject: "Workflow or challenge",
    message: "Message",
    firstNamePlaceholder: "Name",
    lastNamePlaceholder: "Surname",
    emailPlaceholder: "name@company.com",
    subjectPlaceholder: "Invoice approvals, timesheets, reporting...",
    messagePlaceholder: "What happens today, who is involved, and what should be faster or clearer?",
    submit: "Book a free consultation",
    pending: "Opening email...",
    defaultSubject: "Free consultation",
    success:
      "Your email app should open now. You can also contact us directly by phone, email, or WhatsApp.",
  },
  lv: {
    badge: "Sāciet ar skaidrību",
    title: "Pieteikt bezmaksas būvniecības programmatūras konsultāciju",
    intro:
      "Pastāstiet par procesu, kas tērē laiku, rada kļūdas vai bremzē komandu. Mēs izanalizēsim procesu un piedāvāsim praktisku AI vai programmatūras risinājumu pirms jebkādām saistībām.",
    benefits: ["Bezmaksas konsultācija", "Bezmaksas procesa analīze", "Bezmaksas interaktīvs makets"],
    afterTitle: "Kas notiek pēc saziņas",
    afterText:
      "Mēs pārrunājam procesu, sagatavojam interaktīvu maketu un sākam izstrādi tikai tad, kad virziens ir skaidrs un lietderīgs.",
    delivery: "Tipiska fokusēta procesa izstrāde sākas no 2 nedēļām.",
    contact: {
      phone: "Tālrunis",
      email: "E-pasts",
      whatsApp: "WhatsApp",
    },
    formEyebrow: "Projekta pieprasījums",
    formTitle: "Pastāstiet, kam jāstrādā labāk",
    formIntro: "Īss apraksts ir pietiekams. Mēs atgriezīsimies ar praktiskiem nākamajiem soļiem.",
    firstName: "Vārds",
    lastName: "Uzvārds",
    email: "E-pasts",
    subject: "Darba plūsma vai izaicinājums",
    message: "Ziņa",
    firstNamePlaceholder: "Vārds",
    lastNamePlaceholder: "Uzvārds",
    emailPlaceholder: "vards@uznemums.lv",
    subjectPlaceholder: "Rēķinu apstiprināšana, laika uzskaite, atskaites...",
    messagePlaceholder: "Kā process darbojas šobrīd, kas ir iesaistīts un kam jābūt ātrākam vai skaidrākam?",
    submit: "Pieteikt bezmaksas konsultāciju",
    pending: "Atver e-pastu...",
    defaultSubject: "Bezmaksas konsultācija",
    success:
      "Jūsu e-pasta lietotnei tagad vajadzētu atvērties. Varat sazināties arī tieši pa tālruni, e-pastu vai WhatsApp.",
  },
} as const;

export default function ContactForm() {
  const { locale } = useLandingLanguage();
  const text = copy[locale];
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.24 });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
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
    const subject = String(fd.get("subject") || text.defaultSubject);
    const message = String(fd.get("message") || "");
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    sendGAEvent("event", "conversion", {
      value: { send_to: "AW-17670426077/3OXOCMXV7rUbEN2b9elB" },
    });
    sendGTMEvent({
      event: "conversion",
      value: { send_to: "AW-17670426077/3OXOCMXV7rUbEN2b9elB" },
    });

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Buvconsult] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    setStatus({
      ok: true,
      msg: text.success,
    });
    setPending(false);
  }

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
      <AnimatedWrapper
        className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="space-y-8">
          <AnimatedWrapper variants={itemVariants} className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm backdrop-blur">
              <Sparkles className="size-4" />
              {text.badge}
            </p>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-normal text-zinc-950 sm:text-6xl lg:text-7xl">
                {text.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                {text.intro}
              </p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper variants={itemVariants} className="grid gap-3 sm:grid-cols-3">
            {text.benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-white/50 bg-white/65 p-4 shadow-sm backdrop-blur">
                <CheckCircle2 className="mb-4 size-5 text-emerald-700" />
                <p className="text-sm font-bold leading-5 text-zinc-950">{benefit}</p>
              </div>
            ))}
          </AnimatedWrapper>

          <AnimatedWrapper variants={itemVariants} className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                <Workflow className="size-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{text.afterTitle}</h2>
                <p className="mt-3 leading-7 text-zinc-300">
                  {text.afterText}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Clock3 className="size-5 text-emerald-400" />
              <p className="text-sm font-semibold text-zinc-200">{text.delivery}</p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper variants={itemVariants} className="grid gap-3">
            {[
              { label: text.contact.phone, value: "+371 24885690", href: "tel:+37124885690", icon: Phone },
              { label: text.contact.email, value: contactEmail, href: `mailto:${contactEmail}`, icon: Mail },
              { label: text.contact.whatsApp, value: "+371 24885690", href: `https://wa.me/${whatsAppNumber}`, icon: MessageCircle },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("https://") ? "_blank" : undefined}
                  rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white/75 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                        {item.label}
                      </span>
                      <span className="font-bold text-zinc-950">{item.value}</span>
                    </span>
                  </span>
                  <Send className="size-4 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700" />
                </a>
              );
            })}
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper
          variants={itemVariants}
          className="rounded-[2rem] border border-white/60 bg-white/[0.82] p-4 shadow-[0_34px_120px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:p-6 lg:sticky lg:top-28"
        >
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 sm:p-7">
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{text.formEyebrow}</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-zinc-950">{text.formTitle}</h2>
              <p className="mt-3 leading-7 text-zinc-600">
                {text.formIntro}
              </p>
            </div>

            <form className="space-y-5" onSubmit={onSubmit}>
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

              <div className="space-y-2">
                <Label htmlFor="email">{text.email}</Label>
                <Input id="email" name="email" type="email" placeholder={text.emailPlaceholder} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">{text.subject}</Label>
                <Input id="subject" name="subject" placeholder={text.subjectPlaceholder} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{text.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={text.messagePlaceholder}
                  className="min-h-36 resize-none"
                  required
                />
              </div>

              {status && (
                <p className={status.ok ? "text-sm font-semibold text-emerald-700" : "text-sm font-semibold text-destructive"}>
                  {status.msg}
                </p>
              )}

              <Button type="submit" className="group h-12 w-full rounded-full bg-zinc-950 text-base font-bold hover:bg-zinc-800" disabled={pending}>
                {pending ? (
                  text.pending
                ) : (
                  <>
                    {text.submit}
                    <Send className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </AnimatedWrapper>
      </AnimatedWrapper>
    </section>
  );
}
