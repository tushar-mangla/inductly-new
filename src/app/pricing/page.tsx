import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
    title: 'Pricing — RecruitmentOS',
    description:
        'Four specialized modules built for recruitment agencies — available as a custom build or as a scalable SaaS subscription.',
    openGraph: {
        title: 'Pricing — RecruitmentOS',
        description:
            'Four specialized modules built for recruitment agencies — available as a custom build or as a scalable SaaS subscription.',
        images: ['/logos/recruitmentos_logo.png'],
    },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <ScrollReveal />
            <Navbar />
            <Pricing />
            <Footer />
        </main>
    );
}
