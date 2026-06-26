import Image from "next/image";
import SiteDiary1 from "@/public/frontend/pages/SiteDiary/SiteDiary1.png";
import SiteDiary2 from "@/public/frontend/pages/SiteDiary/SiteDiary2.png";
import WhatsappScreen from "@/public/frontend/pages/SiteDiary/WhatsappScreen.png";

export default function Page() {
  return (
    <section className="relative flex items-center justify-center p-5">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:py-20">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-medium leading-tight sm:mt-8 sm:text-5xl sm:leading-none md:text-6xl lg:text-8xl">
            Construction site records
          </h1>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <div className="relative md:col-span-2">
            <Image
              src={SiteDiary2}
              alt="Site diary"
              priority
              className="w-full rounded-xl border object-cover shadow-2xl shadow-black/40 lg:rounded-2xl"
            />

            <Image
              src={WhatsappScreen}
              alt="WhatsApp"
              priority
              width={280}
              height={560}
              className="absolute bottom-3 right-3 z-10 aspect-[1/2.1679] w-[32%] rounded-xl border shadow-xl sm:w-[28%] md:bottom-4 md:right-4 md:w-[23.3%]"
            />
          </div>

          <p className="text-center text-base leading-relaxed sm:text-lg md:text-left md:text-xl">
            <span className="block text-xl font-semibold sm:text-2xl">How do we do that</span>
            <span className="block h-3 sm:h-4" />
            Just send a voice message to BUVCONSULT WhatsApp describing what happened today. Our AI will transform
            your words into a structured site diary record.
          </p>
        </div>

        <div className="mx-auto mt-6 grid w-full grid-cols-1 items-center gap-6 py-10 md:mt-12 md:grid-cols-3 lg:gap-10">
          <div className="flex flex-col space-y-3 text-center text-base leading-relaxed sm:space-y-4 sm:text-lg md:text-left md:text-xl">
            <span className="text-xl font-semibold sm:text-2xl">What is your benefit</span>
            <p>Everything that happens on site during the project is stored and easily accessible.</p>
            <p>
              Claim? You have <span className="font-bold text-primary">proof to defend.</span>
            </p>
            <p>
              Loss? You have <span className="font-bold text-primary">proof to recover.</span>
            </p>
            <p>Estimation? You know exactly how much time you have spent.</p>
            <p>Your project recorded.</p>
          </div>

          <Image
            src={SiteDiary1}
            alt="Site diary gallery"
            priority
            className="w-full rounded-xl border object-cover shadow-2xl shadow-black/40 md:col-span-2 lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
