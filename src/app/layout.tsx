import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import UTMTracker from "@/components/UTMTracker";

const dmSerif = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const dmMono = DM_Mono({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "RecruitmentOS - The Automated Lead Engine for Recruiting Agencies",
    description: "The only recruiting agency lead generation platform that guarantees quality with a 6%+ reply rate.",
    icons: {
        icon: "/favicon.svg",
        apple: "/logos/recruitmentos_logo.png",
    },
    openGraph: {
        title: "RecruitmentOS - The Automated Lead Engine for Recruiting Agencies",
        description: "The only recruiting agency lead generation platform that guarantees quality with a 6%+ reply rate.",
        images: ["/logos/recruitmentos_logo.png"],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'RecruitmentOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
        'The only recruiting agency lead generation platform that guarantees quality with a 6%+ reply rate.',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '300',
        highPrice: '10000',
        offerCount: '4',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${dmSerif.variable} ${outfit.variable} ${dmMono.variable} font-sans antialiased`}>
                <Analytics />
                <UTMTracker />
                {children}
            </body>
        </html>
    );
}
