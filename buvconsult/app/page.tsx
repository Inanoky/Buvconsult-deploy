import LandingPage from "./Landing/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("lv", "home");

export default function HomePage() {
  return <LandingPage />;
}
