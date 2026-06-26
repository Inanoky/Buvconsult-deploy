import Image from "next/image";
import Analytics1 from "@/public/frontend/pages/Analytics/Analytics1.png";
import Analytics2 from "@/public/frontend/pages/Analytics/Analytics2.png";

export default function Page() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:py-20">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-medium leading-tight sm:mt-8 sm:text-5xl sm:leading-none md:text-6xl lg:text-8xl">
            Analytics
          </h1>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <Image
            src={Analytics1}
            alt="Analytics overview"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl md:col-span-2 lg:rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 900px"
          />

          <div className="text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="block text-xl font-semibold sm:text-2xl">How do we do that</span>
            <span className="block h-3 sm:h-4" />
            We combine data science with AI and construction industry expertise to automatically extract analytics from
            your data. We will provide the insights you need: bill of quantities, progress statistics, hindrances,
            delays, average performance, cost per category and period, areas of waste and improvement, and more.
          </div>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <div className="flex flex-col text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="text-xl font-semibold sm:text-2xl">What is your benefit</span>
            <span className="block h-3 sm:h-4" />
            <ul className="space-y-2 pl-5 marker:text-base marker:text-primary sm:pl-6 sm:marker:text-lg">
              <li>Advanced pre-made analytics for immediate results.</li>
              <li>Custom analytics for specific needs.</li>
              <li>Dynamic updates as the project progresses.</li>
              <li>Forecast finances, cash flow, and work progress.</li>
            </ul>
          </div>

          <Image
            src={Analytics2}
            alt="Analytics details"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl md:col-span-2 lg:rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}
