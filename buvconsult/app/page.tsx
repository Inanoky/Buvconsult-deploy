import LandingPage from "./Landing/page";
import { getLandingPageMetadata } from "@/lib/landing/metadata";

export const metadata = getLandingPageMetadata("lv", "/Landing");

export default function HomePage() {
  return <LandingPage />;
}
