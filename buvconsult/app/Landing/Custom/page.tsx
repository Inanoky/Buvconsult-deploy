"use client";

import Image from "next/image";
import Development from "@/public/frontend/pages/CustomSolutions/Development.png";
import Site from "@/public/frontend/pages/CustomSolutions/Site.jpeg";

export default function Page() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="mx-auto w-full px-4 py-12 sm:px-6 lg:py-20">
        <div className="text-center">
          <h1 className="mt-8 text-4xl font-medium leading-tight sm:text-6xl sm:leading-none md:text-7xl lg:text-8xl">
            Custom digital solutions
          </h1>
        </div>

        <div className="mx-auto mt-12 grid w-full grid-cols-1 items-center gap-6 py-12 md:grid-cols-3 lg:gap-10">
          <Image
            src={Site}
            alt="On-site digital solutions"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl md:col-span-2 lg:rounded-2xl"
          />

          <div className="space-y-4 text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="block text-xl font-semibold sm:text-2xl">How do we do that</span>
            <p>
              We speak <span className="font-semibold text-primary">construction language</span>. We dive into your
              processes, map where value is created, and identify what data to capture and how you will benefit from it.
            </p>
            <p>
              Once a custom system is designed and implemented, it keeps paying off: clean records, less manual work,
              and analytics that support decisions.
            </p>
            <p>
              Email us the process you want to digitalize and automate, and we will propose an effective, pragmatic
              solution.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid w-full grid-cols-1 items-center gap-6 py-12 md:grid-cols-3 lg:gap-10">
          <div className="flex flex-col space-y-4 text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="text-xl font-semibold sm:text-2xl">What is your benefit</span>
            <p>
              Construction is one of the last under-digitalized frontiers. Get ahead and leverage the AI wave to
              improve margins, bids, and day-to-day processes.
            </p>
            <p>
              From construction professionals to construction professionals. Practical tools, minimal friction, real
              outcomes.
            </p>
          </div>

          <Image
            src={Development}
            alt="Custom development"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl md:col-span-2 lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
