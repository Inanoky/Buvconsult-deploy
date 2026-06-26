"use client";

import Image from "next/image";
import InvoicesPage from "@/public/frontend/pages/Invoices/InvoicesPage.png";
import Timesheets1 from "@/public/frontend/pages/Timesheets/Timesheets1.png";
import TimesheetsWhatsapp from "@/public/frontend/pages/Timesheets/TimesheetsWhatsapp.png";

export default function Page() {
  return (
    <section className="relative flex items-center justify-center p-5">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:py-20">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-medium leading-tight sm:mt-8 sm:text-5xl sm:leading-none md:text-6xl lg:text-8xl">
            Timesheets
          </h1>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <div className="relative md:col-span-2">
            <Image
              src={Timesheets1}
              alt="Timesheets dashboard"
              priority
              className="w-full rounded-xl border object-cover shadow-2xl shadow-black/40 lg:rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 900px"
            />

            <Image
              src={TimesheetsWhatsapp}
              alt="WhatsApp"
              priority
              className="absolute bottom-3 right-3 z-10 aspect-[1/2.1679] w-[32%] rounded-xl border shadow-xl sm:w-[28%] md:bottom-4 md:right-4 md:w-[23.3%]"
            />
          </div>

          <p className="text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="block text-xl font-semibold sm:text-2xl">How do we do that</span>
            <span className="block h-3 sm:h-4" />
            Workers use WhatsApp to chat with BUVCONSULT AI to clock in and out of work. Before clocking out, the AI
            asks them to describe what was achieved during the day. The information is structured and stored automatically.
          </p>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <div className="flex flex-col text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="text-xl font-semibold sm:text-2xl">What is your benefit</span>
            <span className="block h-3 sm:h-4" />
            <ul className="space-y-2 pl-5 marker:text-base marker:text-primary sm:pl-6 sm:marker:text-lg">
              <li>Get every work hour accounted for.</li>
              <li>Bid labor precisely on the next project.</li>
              <li>Identify waste, set targets, and measure KPIs for labor.</li>
            </ul>
          </div>

          <Image
            src={InvoicesPage}
            alt="Timesheet analytics"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl shadow-black/20 md:col-span-2 lg:rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}
