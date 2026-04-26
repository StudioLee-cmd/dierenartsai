import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Dierenartsen", url: "/chatbot" },
            { text: "Voice AI voor Dierenartsen", url: "/voice-ai" },
            { text: "SEO voor Dierenartsen", url: "/seo" },
            { text: "Social Media voor Dierenartsen", url: "/social-media" },
            { text: "Reviews voor Dierenartsen", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
            { text: "CRM voor Dierenartsen", url: "/crm" },
        ]
    },
    { text: "Tarieven", url: "/tarieven" },
    { text: "Gratis Scan", url: "/gratis-scan" },
    { text: "Gratis Website", url: "/gratis-website" },
    { text: "Blog", url: "/blog" }
];
