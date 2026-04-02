import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Dierenartsen", url: "/chatbot-voor-dierenartsen" },
            { text: "Voice AI voor Dierenartsen", url: "/voice-ai-voor-dierenartsen" },
            { text: "SEO voor Dierenartsen", url: "/seo-voor-dierenartsen" },
            { text: "Social Media voor Dierenartsen", url: "/social-media-voor-dierenartsen" },
            { text: "Reviews voor Dierenartsen", url: "/reviews-voor-dierenartsen" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    { text: "Tarieven", url: "/tarieven" },
    { text: "Gratis Scan", url: "/gratis-scan" },
    { text: "Gratis Website", url: "/gratis-website" },
    { text: "Blog", url: "/blog" }
];
