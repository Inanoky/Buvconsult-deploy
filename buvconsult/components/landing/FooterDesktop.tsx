import Link from "next/link";

export default function FooterDesktop() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-10 px-6 py-16">
        <div className="space-y-5 text-base leading-snug">
          <p className="text-xl font-semibold">SIA "BUVCONSULT"</p>
          <div className="space-y-2 text-zinc-400">
            <p>LV40203643527, 23.04.2025</p>
            <p>Riga, Brivibas iela 91-22, LV-1001</p>
            <p>
              <a href="https://www.buvconsult.com" className="underline underline-offset-4">
                buvconsult.com
              </a>
            </p>
            <p>All rights reserved / Visas tiesibas aizsargatas</p>
          </div>
        </div>

        <div className="space-y-4 text-base leading-snug">
          <p className="font-semibold">Company / Uzņēmums</p>
          <div className="space-y-3 text-zinc-400">
            <p><Link href="/Landing/Custom" className="hover:text-white">Services / Pakalpojumi</Link></p>
            <p><Link href="/Landing/About" className="hover:text-white">About / Par mums</Link></p>
            <p><Link href="/Landing/ContactForm" className="hover:text-white">Contacts / Kontakti</Link></p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase text-emerald-400">Contact / Kontakti</p>
          <h4 className="mt-4 text-3xl font-semibold">
            Buv<span className="text-emerald-400">consult</span>
          </h4>
          <p className="mt-5 text-zinc-400">Let us talk about your process / Parunasim par jusu procesu</p>
          <div className="mt-6 space-y-3 text-zinc-200">
            <p><a href="tel:+37124885690">tel. +371 24885690</a></p>
            <p><a href="mailto:hello@buvconsult.com">hello@buvconsult.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
