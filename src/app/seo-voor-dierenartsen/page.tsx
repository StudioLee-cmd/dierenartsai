import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SEOContent from "@/app/seo/SEOContent";

export const metadata: Metadata = {
    title: `SEO voor Dierenartsen | ${siteDetails.siteName}`,
    description: `Ontdek onze seo oplossing voor dierenartsen. ${siteDetails.siteName} helpt je groeien.`,
};

export default function Page() {
    return <SEOContent />;
}
