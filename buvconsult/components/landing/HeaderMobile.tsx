import Link from "next/link";
import { NavigationMenuMobile } from "./NavigationMenuMobile";

export default function HeaderMobile() {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 px-4 py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <h4 className="text-2xl font-semibold tracking-normal text-zinc-950">
            Buv<span className="text-emerald-700">consult</span>
          </h4>
        </Link>

        <NavigationMenuMobile />
      </div>
    </div>
  );
}
