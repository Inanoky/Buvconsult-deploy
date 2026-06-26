"use client";

import Image from "next/image";
import Selfie from "@/public/frontend/pages/About/Selfie.jpg";

export default function Page() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="mx-auto w-full px-4 py-12 sm:px-6 lg:py-20">
        <div className="text-center">
          <h1 className="mt-8 text-4xl font-medium leading-tight sm:text-6xl sm:leading-none md:text-7xl lg:text-8xl">
            About
          </h1>
        </div>

        <div className="mx-auto mt-12 grid w-full grid-cols-1 items-start gap-6 py-12 md:grid-cols-3 lg:gap-10">
          <div className="space-y-5 text-base leading-relaxed sm:text-lg md:col-span-2 md:text-xl">
            <p>
              The construction industry is notorious worldwide for delays and cost overruns. Why? At BUVCONSULT we
              believe the answer is in the data. Poor record-keeping and overloaded management make it hard for the
              industry to learn from mistakes.
            </p>
            <p>
              Why has it not been solved before? Because of industry specifics such as "lowest bid wins," low priority
              on data, lack of reliable technology to collect and structure it, and limited data-science capabilities
              to extract meaningful insights.
            </p>
            <p>
              We are a Latvian SaaS platform focused on fixing exactly that. We deliver high-quality data collection
              and analytics, affordably, for the companies that need it most: small and medium trade contractors.
            </p>
            <div className="space-y-1">
              <p>Vjaceslavs Gromatovics</p>
              <p>BUVCONSULT Team</p>
              <p>From construction professionals, for construction professionals.</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={Selfie}
              alt="Vjaceslavs Gromatovics"
              priority
              width={350}
              height={200}
              className="h-auto w-[70%] rounded-2xl border shadow-2xl sm:w-[60%] md:w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
