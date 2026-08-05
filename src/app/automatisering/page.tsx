import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import AutomatiseringContent from "./AutomatiseringContent";

export const metadata: Metadata = {
  title: `Dierenarts software: automatisering bovenop je praktijksysteem | ${siteDetails.siteName}`,
  description: `Op zoek naar dierenarts software? Je hoeft je praktijksysteem niet te vervangen. ${siteDetails.siteName} legt een automatiseringslaag over Animana, Vetsoft of Fuga heen: herinneringen, opvolging en review-verzoeken. Vergelijking van de opties.`,
  keywords: [
    "dierenarts software",
    "dierenarts afspraken software",
    "dierenartspraktijk boekingssysteem",
    "praktijkmanagementsysteem dierenarts",
    `workflow automatisering ${siteDetails.niche?.toLowerCase()}`,
  ],
  openGraph: {
    title: `Dierenarts software: automatisering bovenop je praktijksysteem | ${siteDetails.siteName}`,
    description: `Je praktijksysteem vervangen is duur en riskant. Een automatiseringslaag erbovenop niet. Vergelijk de opties voor ${siteDetails.niche?.toLowerCase()}.`,
    url: `${siteDetails.siteUrl}automatisering`,
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: `${siteDetails.siteUrl}images/services/automatisering-hero.jpg`,
        width: 1672,
        height: 941,
        alt: `Workflow automatisering voor ${siteDetails.niche?.toLowerCase()}`,
      },
    ],
  },
  alternates: { canonical: `${siteDetails.siteUrl}automatisering` },
};

export default function AutomatiseringPage() {
  return <AutomatiseringContent />;
}
