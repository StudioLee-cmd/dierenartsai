/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/castratie-sterilisatie-dierenarts-programma', destination: '/', permanent: true },
            { source: '/blog/dierenartspraktijk-opschalen-solo-naar-5-artsen-zonder-kwaliteitsverlies', destination: '/', permanent: true },
            { source: '/blog/paraveterinair-aannemen-dierenartspraktijk-2026', destination: '/', permanent: true },
            { source: '/blog/preventieve-zorg-dierenarts-verdienmodel', destination: '/', permanent: true },
            { source: '/blog/reisvaccinaties-dierenpaspoort-zomerdrukte-omzetbron', destination: '/', permanent: true },
            { source: '/blog/robot-dierenarts-2026', destination: '/', permanent: true },
            { source: '/blog/senioren-zorg-programma-dierenarts-3-tier-pakket-preventieve-zorg', destination: '/', permanent: true },
            { source: '/blog/telegeneeskunde-dierenarts-aanbieden', destination: '/', permanent: true },
            { source: '/blog/leads-opvolgen-dierenarts-afspraak', destination: '/blog/leads-opvolgen-dierenartspraktijk-tips', permanent: true },
            { source: '/blog/leads-opvolgen-dierenartspraktijk', destination: '/blog/leads-opvolgen-dierenartspraktijk-tips', permanent: true },
            { source: '/blog/no-shows-dierenartspraktijk-verminderen', destination: '/blog/no-shows-dierenartspraktijk-voorkomen', permanent: true },
            { source: '/blog/review-vragen-dierenarts-na-behandeling', destination: '/blog/review-na-behandeling-dierenarts', permanent: true },
            { source: '/blog/spoeddienst-dierenarts-bereikbaar', destination: '/voice-ai', permanent: true },
            { source: '/blog/spoedgevallen-dierenarts-noodoproepen-opvangen', destination: '/blog/spoedgevallen-dierenarts-avond-weekend', permanent: true },
            { source: '/blog/social-media-voor-dierenartsen', destination: '/social-media', permanent: true },
            { source: '/blog/vaccinatieherinneringen-dierenarts-automatisch', destination: '/blog/vaccinatie-herinneringen-dierenarts-automatiseren', permanent: true },
            { source: '/blog/werkdruk-verlagen-dierenartspraktijk', destination: '/blog/werkdruk-dierenartsassistente-verlagen-2026', permanent: true },
        ];
    },
};

export default nextConfig;
