import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { NavigationMenuDesktop } from "@/components/landing/NavigationMenuDesktop";
import { Button } from "@/components/ui/button";

export default function HeaderDesktop() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/90 px-5 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-black text-white shadow-sm">
            B
          </span>
          <span className="text-xl font-semibold tracking-normal text-zinc-950">
            Buv<span className="text-emerald-700">consult</span>
          </span>
        </Link>

        <NavigationMenuDesktop />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="h-10 rounded-full bg-zinc-950 px-5 text-sm font-semibold hover:bg-zinc-800">
            <Link href="/Landing/ContactForm">Start a project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
