"use client";

import Image from "next/image";
import Invoices2 from "@/public/frontend/pages/Invoices/Invoices2.png";
import InvoicesPage from "@/public/frontend/pages/Invoices/InvoicesPage.png";

export default function Page() {
  return (
    <section className="relative flex items-center justify-center p-5">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:py-20">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-medium leading-tight sm:mt-8 sm:text-5xl sm:leading-none md:text-6xl lg:text-8xl">
            Invoices
          </h1>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <Image
            src={InvoicesPage}
            alt="Invoices dashboard"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl md:col-span-2 lg:rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 900px"
          />

          <div className="text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="block text-xl font-semibold sm:text-2xl">How do we do that</span>
            <span className="block h-3 sm:h-4" />
            Add <span className="font-mono">invoices@buvconsult.com</span> to your existing invoice flow. We will receive
            a copy of your invoices, and the BUVCONSULT AI will digitize and store them in a structured way.
          </div>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <div className="flex flex-col text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="text-xl font-semibold sm:text-2xl">What is your benefit</span>
            <span className="block h-3 sm:h-4" />
            <p>
              Get a <span className="font-bold text-primary">detailed cost breakdown</span> for every invoice item.
              Categorize in seconds. Need to change cost codes or summarize? AI will parse through thousands of invoice
              items to present detailed insights into your costs.
            </p>
          </div>

          <Image
            src={Invoices2}
            alt="Invoice analytics"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl md:col-span-2 lg:rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}
