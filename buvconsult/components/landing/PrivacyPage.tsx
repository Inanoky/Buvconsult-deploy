"use client";

import { useLandingLanguage } from "@/components/landing/LanguageProvider";

const copy = {
  lv: {
    title: "Privātuma politika",
    updated: "Pēdējo reizi atjaunināta: 16.07.2026.",
    intro: "Šajā privātuma politikā ir izskaidrots, kā SIA BUVCONSULT (turpmāk — “mēs”) vāc, izmanto un aizsargā personas datus, kad izmantojat Buvconsult tīmekļvietni un saistītos pakalpojumus. Mēs ievērojam Vispārīgo datu aizsardzības regulu (VDAR) un piemērojamos datu aizsardzības tiesību aktus.",
    controller: "1. Datu pārzinis",
    collected: "2. Dati, ko mēs vācam",
    provided: "Jūsu sniegtā informācija",
    providedItems: ["Vārds, e-pasta adrese, tālruņa numurs, amats un informācija par organizāciju.", "Ziņas, projektu apraksti un faili, ko izvēlaties mums nosūtīt.", "Saziņas vēsture, tostarp atbalsta ziņas un atsauksmes."],
    automatic: "Automātiski vāktie dati",
    automaticItems: ["IP adrese un informācija par ierīci.", "Pārlūkprogrammas versija un operētājsistēma.", "Lietošanas dati, piemēram, apmeklētās lapas un izmantotās funkcijas."],
    why: "3. Kāpēc mēs izmantojam datus",
    whyItems: ["Lai atbildētu uz projektu un atbalsta pieprasījumiem.", "Lai sniegtu un uzlabotu mūsu pakalpojumus.", "Lai sagatavotu piedāvājumus, prototipus un projekta saziņu.", "Lai izpildītu juridiskās un finanšu prasības."],
    noSale: "Mēs nepārdodam jūsu personas datus.",
    basis: "4. Apstrādes tiesiskais pamats",
    basisItems: ["Līguma izpilde vai pasākumi pirms līguma noslēgšanas.", "Leģitīmās intereses.", "Piekrišana, ja tā ir nepieciešama.", "Juridiska pienākuma izpilde."],
    sharing: "5. Datu kopīgošana",
    sharingText: "Ja tas nepieciešams pakalpojuma nodrošināšanai, mēs varam kopīgot datus ar uzticamiem hostinga, analītikas un saziņas pakalpojumu sniedzējiem. Mēs nepārdodam un neiznomājam personas datus.",
    storage: "6. Datu glabāšana un drošība",
    storageText: "Dati tiek glabāti drošā mākoņvidē Eiropas Savienībā vai citos uzticamos, VDAR prasībām atbilstošos reģionos.",
    storageItems: ["Šifrēta datu pārraide, ja piemērojams.", "Ierobežota piekļuve uzņēmuma datiem.", "Samērīgi tehniski un organizatoriski drošības pasākumi."],
    rights: "7. Jūsu tiesības",
    rightsItems: ["Piekļūt saviem datiem.", "Labot neprecīzu informāciju.", "Pieprasīt datu dzēšanu.", "Ierobežot apstrādi vai iebilst pret to.", "Saņemt datus pārnesamā formātā.", "Jebkurā laikā atsaukt piekrišanu."],
    rightsText: "Lai īstenotu savas tiesības, rakstiet uz vjaceslavs.gromatovics@buvconsult.com.",
    contact: "8. Saziņa",
    contactText: "Jautājumos par privātumu sazinieties ar SIA BUVCONSULT, Rīga, Latvija, e-pasts: vjaceslavs.gromatovics@buvconsult.com.",
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: 16 July 2026",
    intro: "This Privacy Policy explains how SIA BUVCONSULT (“we”, “our”, or “us”) collects, uses and protects personal data when you use the Buvconsult website and related services. We comply with the General Data Protection Regulation (GDPR) and applicable data protection laws.",
    controller: "1. Data controller",
    collected: "2. Data we collect",
    provided: "Information you provide",
    providedItems: ["Name, email address, phone number, job role and organisation details.", "Messages, project descriptions and files you choose to share with us.", "Communication history, including support messages and feedback."],
    automatic: "Automatically collected data",
    automaticItems: ["IP address and device information.", "Browser version and operating system.", "Usage data, such as pages visited and features used."],
    why: "3. Why we use your data",
    whyItems: ["To respond to project enquiries and support requests.", "To provide and improve our services.", "To prepare proposals, prototypes and project communication.", "To comply with legal and financial requirements."],
    noSale: "We do not sell your personal data.",
    basis: "4. Legal basis for processing",
    basisItems: ["Performance of a contract or steps taken before entering a contract.", "Legitimate interests.", "Consent, where required.", "Compliance with a legal obligation."],
    sharing: "5. Data sharing",
    sharingText: "We may share data with trusted hosting, analytics and communication providers where necessary to deliver our services. We do not sell or rent personal data.",
    storage: "6. Data storage and security",
    storageText: "Data is stored in secure cloud environments within the European Union or other trusted GDPR-compliant regions.",
    storageItems: ["Encrypted data transfer where applicable.", "Restricted access to business records.", "Reasonable technical and organisational safeguards."],
    rights: "7. Your rights",
    rightsItems: ["Access your data.", "Correct inaccurate information.", "Request deletion.", "Restrict or object to processing.", "Receive portable copies of your data.", "Withdraw consent at any time."],
    rightsText: "To exercise your rights, email vjaceslavs.gromatovics@buvconsult.com.",
    contact: "8. Contact us",
    contactText: "For privacy-related enquiries, contact SIA BUVCONSULT, Riga, Latvia, at vjaceslavs.gromatovics@buvconsult.com.",
  },
} as const;

export default function PrivacyPage() {
  const { locale } = useLandingLanguage();
  const text = copy[locale === "ru" ? "lv" : locale];

  return (
    <article className="prose prose-zinc mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <h1>{text.title}</h1>
      <p><strong>{text.updated}</strong></p>
      <p>{text.intro}</p>
      <h2>{text.controller}</h2>
      <p><strong>SIA BUVCONSULT</strong><br />Brīvības iela 91-22, Rīga, LV-1001, Latvija<br />Reģ. Nr. 40203643527<br />E-pasts: vjaceslavs.gromatovics@buvconsult.com</p>
      <h2>{text.collected}</h2>
      <h3>{text.provided}</h3>
      <ul>{text.providedItems.map((item) => <li key={item}>{item}</li>)}</ul>
      <h3>{text.automatic}</h3>
      <ul>{text.automaticItems.map((item) => <li key={item}>{item}</li>)}</ul>
      <h2>{text.why}</h2>
      <ul>{text.whyItems.map((item) => <li key={item}>{item}</li>)}</ul>
      <p><strong>{text.noSale}</strong></p>
      <h2>{text.basis}</h2>
      <ul>{text.basisItems.map((item) => <li key={item}>{item}</li>)}</ul>
      <h2>{text.sharing}</h2>
      <p>{text.sharingText}</p>
      <h2>{text.storage}</h2>
      <p>{text.storageText}</p>
      <ul>{text.storageItems.map((item) => <li key={item}>{item}</li>)}</ul>
      <h2>{text.rights}</h2>
      <ul>{text.rightsItems.map((item) => <li key={item}>{item}</li>)}</ul>
      <p>{text.rightsText}</p>
      <h2>{text.contact}</h2>
      <p>{text.contactText}</p>
    </article>
  );
}
