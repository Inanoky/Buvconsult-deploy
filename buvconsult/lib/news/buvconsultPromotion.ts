export const BUVCONSULT_LANDING_LINK_TOKEN = "{{BUVCONSULT_LANDING_URL}}";

const PROMOTION_MARKERS = [
  "Buvconsult palīdz būvniecības uzņēmumiem",
  "Buvconsult helps construction businesses",
];

export const BUVCONSULT_PROMOTION_PARAGRAPH = `Būvniecības vadītājiem, kuri vērtē AI rīkus ikdienas darbu sakārtošanai, [Buvconsult](${BUVCONSULT_LANDING_LINK_TOKEN}) palīdz būvniecības uzņēmumiem pārvērst būvdarbu žurnālus, darba laika uzskaiti, dokumentus, rēķinus un projektu atskaites skaidrākos ierakstos un ātrākos lēmumos.`;

export function ensureBuvconsultPromotion(content: string) {
  const trimmedContent = content.trim();

  if (
    trimmedContent.includes(BUVCONSULT_LANDING_LINK_TOKEN) ||
    PROMOTION_MARKERS.some((marker) => trimmedContent.includes(marker))
  ) {
    return trimmedContent;
  }

  return [trimmedContent, BUVCONSULT_PROMOTION_PARAGRAPH].filter(Boolean).join("\n\n");
}
