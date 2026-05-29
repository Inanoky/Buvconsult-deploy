import Link from "next/link";
import { ThemeToggle } from "@/components/dashboard/ThemeToggle";
import { NavigationMenuDesktop } from "@/components/landing/NavigationMenuDesktop";

export default function HeaderDesktop() {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 px-5 py-4 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-4 items-center">
        <Link href="/" className="flex items-center">
          <h4 className="text-2xl font-semibold tracking-normal text-zinc-950">
            Buv<span className="text-emerald-700">consult</span>
          </h4>
        </Link>

        <div className="col-span-2 col-start-2 flex items-center justify-center">
          <NavigationMenuDesktop />
        </div>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
