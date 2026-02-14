import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import UTMTracker from "@/components/UTMTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Inductly AI - The Automated Lead Engine for Recruiting Agencies",
    description: "The only recruiting agency lead generation platform that guarantees quality with a 6%+ reply rate.",
    icons: {
        icon: "/favicon.svg",
        apple: "/logos/inductly_logo.png",
    },
    openGraph: {
        title: "Inductly AI - The Automated Lead Engine for Recruiting Agencies",
        description: "The only recruiting agency lead generation platform that guarantees quality with a 6%+ reply rate.",
        images: ["/logos/inductly_logo.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Analytics />
                {children}
            </body>
        </html>
    );
}
