import type { SiteLocale } from "@/lib/site-routes";

export const faqCopy = {
  lv: {
    eyebrow: "Biežāk uzdotie jautājumi",
    title: "Par pielāgotu programmatūru būvniecībai",
    items: [
      {
        question: "Kādus būvniecības procesus Buvconsult var automatizēt?",
        answer: "Mēs automatizējam rēķinu un dokumentu apstiprināšanu, laika un paveikto darbu uzskaiti, būvlaukuma atskaites, datu apkopošanu, vadības paneļus un citas atkārtotas darba plūsmas. Risinājums tiek veidots ap jūsu esošo procesu.",
      },
      {
        question: "Vai sistēmu var integrēt ar BIS, WhatsApp vai esošajiem rīkiem?",
        answer: "Jā. Ja pieejamas nepieciešamās integrācijas iespējas, varam savienot risinājumu ar BIS, WhatsApp, e-pastu, izklājlapām, datubāzēm un citām jūsu uzņēmuma sistēmām.",
      },
      {
        question: "Cik maksā pielāgota būvniecības programmatūra?",
        answer: "Konsultācija, procesa analīze un interaktīvais makets ir bez maksas. Vienkāršas darba plūsmas sākas no 200 € mēnesī, bet precīza cena ir atkarīga no lietotāju skaita, integrācijām un procesa sarežģītības.",
      },
      {
        question: "Vai pirms izstrādes var redzēt, kā risinājums darbosies?",
        answer: "Jā. Pēc procesa analīzes sagatavojam interaktīvu maketu, lai jūs un jūsu komanda varētu pārbaudīt plūsmu un sniegt atsauksmes pirms izstrādes sākuma.",
      },
      {
        question: "Kam Buvconsult risinājumi ir piemēroti?",
        answer: "Mēs strādājam ar ģenerāluzņēmējiem, specializētajiem darbuzņēmējiem un citām būvniecības komandām, kurām nepieciešams samazināt administratīvo darbu un iegūt labāku procesu pārskatāmību.",
      },
    ],
  },
  en: {
    eyebrow: "Frequently asked questions",
    title: "About custom construction software",
    items: [
      {
        question: "Which construction processes can Buvconsult automate?",
        answer: "We automate invoice and document approvals, time and completed-work records, site reporting, data collection, dashboards and other repetitive workflows. Each solution is designed around your existing process.",
      },
      {
        question: "Can the software integrate with BIS, WhatsApp or our existing tools?",
        answer: "Yes. Where the required integration options are available, we can connect your solution to BIS, WhatsApp, email, spreadsheets, databases and other systems your company already uses.",
      },
      {
        question: "How much does custom construction software cost?",
        answer: "The consultation, process analysis and interactive mockup are free. Simple workflows start from €200 per month; the exact price depends on user numbers, integrations and process complexity.",
      },
      {
        question: "Can we see how the solution works before development starts?",
        answer: "Yes. After analysing the process, we prepare an interactive mockup so your team can test the proposed workflow and give feedback before development begins.",
      },
      {
        question: "Who are Buvconsult solutions designed for?",
        answer: "We work with general contractors, specialist contractors and other construction teams that want to reduce administrative work and improve operational visibility.",
      },
    ],
  },
} as const;

export default function SeoFaq({ locale }: { locale: SiteLocale }) {
  const copy = faqCopy[locale];

  return (
    <section aria-labelledby="faq-title">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">{copy.eyebrow}</p>
      <h2 id="faq-title" className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-4xl md:text-5xl">
        {copy.title}
      </h2>
      <div className="mt-8 divide-y divide-zinc-200 rounded-3xl border border-zinc-200 bg-white px-5 shadow-sm sm:px-7">
        {copy.items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-zinc-950 marker:content-none">
              {item.question}
            </summary>
            <p className="mt-3 max-w-4xl leading-7 text-zinc-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
