import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Inductly - The Automated Lead Engine for Recruiting Agencies",
    description: "The only recruiting agency lead generation platform that guarantees quality with a 6%+ reply rate.",
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
