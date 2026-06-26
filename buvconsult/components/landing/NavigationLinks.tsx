export const MAIN_LINKS = [
  { href: "/Landing/Custom", label: "Services" },
  { href: "/Landing/About", label: "About" },
  { href: "/Landing/ContactForm", label: "Contact" },
] as const;

export const COMBINED_LINKS = MAIN_LINKS.map((item) => ({
  id: item.label,
  href: item.href,
  title: item.label,
  description: item.label,
})) as readonly {
  id: string;
  href: string;
  title: string;
  description: string;
}[];
