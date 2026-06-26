"use client";

import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { motion, useInView, type Variants } from "framer-motion";
import { CheckCircle2, Clock3, Mail, MessageCircle, Phone, Send, Sparkles, Workflow } from "lucide-react";
import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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

const benefits = [
  "Free consultation",
  "Free process review",
  "Free interactive mockup",
] as const;

const contactOptions = [
  { label: "Phone", value: "+371 24885690", href: "tel:+37124885690", icon: Phone },
  { label: "Email", value: contactEmail, href: `mailto:${contactEmail}`, icon: Mail },
  { label: "WhatsApp", value: "+371 24885690", href: `https://wa.me/${whatsAppNumber}`, icon: MessageCircle },
] as const;

export default function ContactForm() {
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
    const subject = String(fd.get("subject") || "Free consultation");
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
      msg: "Your email app should open now. You can also contact us directly by phone, email, or WhatsApp.",
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
              Start with clarity
            </p>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-normal text-zinc-950 sm:text-6xl lg:text-7xl">
                Book a free construction software consultation
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                Tell us about the workflow that wastes time, creates mistakes, or slows down your team. We will map the
                process and propose a practical AI or software solution before you commit to anything.
              </p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper variants={itemVariants} className="grid gap-3 sm:grid-cols-3">
            {benefits.map((benefit) => (
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
                <h2 className="text-2xl font-bold">What happens after you contact us</h2>
                <p className="mt-3 leading-7 text-zinc-300">
                  We discuss the process, prepare an interactive mockup, then move into development only after the
                  direction is clear and useful.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Clock3 className="size-5 text-emerald-400" />
              <p className="text-sm font-semibold text-zinc-200">Typical focused workflow delivery starts from 2 weeks.</p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper variants={itemVariants} className="grid gap-3">
            {contactOptions.map((item) => {
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Project inquiry</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-zinc-950">Tell us what should work better</h2>
              <p className="mt-3 leading-7 text-zinc-600">
                A short description is enough. We will come back with practical next steps.
              </p>
            </div>

            <form className="space-y-5" onSubmit={onSubmit}>
              <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" name="firstName" placeholder="Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" name="lastName" placeholder="Surname" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="name@company.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Workflow or challenge</Label>
                <Input id="subject" name="subject" placeholder="Invoice approvals, timesheets, reporting..." required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What happens today, who is involved, and what should be faster or clearer?"
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
                  "Opening email..."
                ) : (
                  <>
                    Book a free consultation
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
