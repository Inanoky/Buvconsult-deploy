import Link from "next/link";
import { ArrowRight, Bot, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_center_top,#ffffff_0%,#f7f7f5_48%,#ecf5ef_100%)] px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-lg font-semibold text-zinc-950">Buvconsult</p>
        <h1 className="mt-6 text-5xl font-black leading-none text-zinc-950 md:text-7xl">
          AI and software development
          <span className="block">for construction and manufacturing</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
          Practical AI workflows and custom software for operational companies.
        </p>

        <div className="relative mx-auto mt-12 h-[430px] max-w-sm">
          <div className="absolute left-0 top-24 flex size-20 items-center justify-center rounded-2xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
            <MessageCircle className="size-9 text-emerald-700" />
          </div>
          <div className="absolute right-0 top-24 flex size-20 items-center justify-center rounded-2xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
            <FileText className="size-9 text-cyan-600" />
          </div>
          <div className="absolute left-1/2 top-0 h-[390px] w-[240px] -translate-x-1/2 rounded-[2.5rem] border-[10px] border-zinc-950 bg-zinc-50 shadow-[0_34px_110px_rgba(15,23,42,0.28)]">
            <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-zinc-900" />
            <div className="px-5 pt-8 text-left">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-700 text-white">
                  <Bot className="size-5" />
                </div>
                <p className="font-bold text-zinc-950">Buvconsult</p>
              </div>
              <div className="mt-16 rounded-3xl bg-emerald-100 px-4 py-4">
                <p className="text-sm font-semibold text-zinc-950">WhatsApp, PDF, photos, Excel</p>
              </div>
              <div className="mt-6 rounded-3xl bg-white px-4 py-4 shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
                <p className="font-semibold text-zinc-950">Preparing the record.</p>
              </div>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="absolute bottom-0 left-1/2 z-20 h-14 w-[86%] -translate-x-1/2 rounded-2xl bg-emerald-700 text-base shadow-[0_24px_70px_rgba(4,120,87,0.34)] hover:bg-emerald-800"
          >
            <Link href="/Landing/ContactForm">
              Discuss a project
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
