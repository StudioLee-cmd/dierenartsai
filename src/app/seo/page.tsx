import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SEOContent from "./SEOContent";

const niche = 'dierenarts';
const nichePlural = 'dierenartsen';

export const metadata: Metadata = {
  title: `SEO en online marketing voor ${nichePlural} | ${siteDetails.siteName}`,
  description: `Online marketing voor ${nichePlural} die uitgaat van hoe baasjes echt zoeken: lokaal, met spoed en op naam van de praktijk. Lokale SEO, Google Bedrijfsprofiel en content, vanaf ${"\u20AC"}79/maand.`,
  keywords: [
    `seo voor ${nichePlural}`,
    `online marketing ${nichePlural}`,
    `online marketing ${niche}`,
    `lokale seo ${niche}`,
    `seo voor dierenklinieken`,
  ],
  openGraph: {
    title: `SEO en online marketing voor ${nichePlural} | ${siteDetails.siteName}`,
    description: `Online marketing voor ${nichePlural}: lokale SEO, Google Bedrijfsprofiel en content die past bij spoed, routine en de KNMVD-regels waar je aan gebonden bent.`,
    url: `${siteDetails.siteUrl}seo`,
    type: "website",
    locale: "nl_NL",
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}seo`,
  },
};

export default function SEOPage() {
  return <SEOContent />;
}
