import Image from "next/image";
import Documents1 from "@/public/frontend/pages/Documents/Documents1.png";
import InvoicesPage from "@/public/frontend/pages/Invoices/InvoicesPage.png";

export default function Page() {
  return (
    <section className="relative flex items-center justify-center p-5">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:py-20">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-medium leading-tight sm:mt-8 sm:text-5xl sm:leading-none md:text-6xl lg:text-8xl">
            Documents
          </h1>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <Image
            src={Documents1}
            alt="Documents dashboard"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl md:col-span-2 lg:rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 900px"
          />

          <div className="text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="block text-xl font-semibold sm:text-2xl">How do we do that</span>
            <span className="block h-3 sm:h-4" />
            Upload your documents in bulk. AI will extract information and provide it as context for analytics.
          </div>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <div className="flex flex-col text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="text-xl font-semibold sm:text-2xl">What is your benefit</span>
            <span className="block h-3 sm:h-4" />
            <p>
              Get cross-referencing between invoices, site records, and quality documents. Ask AI to perform an
              informed analysis on project-specific topics. <span className="font-bold text-primary">Talk to your project.</span>
            </p>
          </div>

          <Image
            src={InvoicesPage}
            alt="Cross-referenced analytics"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl md:col-span-2 lg:rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}
