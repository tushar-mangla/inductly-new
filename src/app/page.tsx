import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Stats from '@/components/Stats';
import BeforeAfter from '@/components/BeforeAfter';
import ComparisonTable from '@/components/ComparisonTable';
import HowItWorks from '@/components/HowItWorks';
import SystemDiagram from '@/components/SystemDiagram';
import EmailMockup from '@/components/EmailMockup';
import CaseStudy from '@/components/CaseStudy';
import Proof from '@/components/Proof';
import QualityGuarantee from '@/components/QualityGuarantee';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* 1. Hook — Hero */}
            <Hero />

            {/* 2. Trust — Logo + Stats */}
            <TrustedBy />
            <div className="max-w-[1200px] mx-auto px-5">
                <Stats />
            </div>

            {/* 3. Pain — Before/After */}
            <BeforeAfter />

            {/* 4. Logic — Us vs Them Comparison */}
            <ComparisonTable />

            {/* 5. System — How It Works */}
            <HowItWorks />

            {/* 5b. Aha Moment — System Diagram */}
            <SystemDiagram />

            {/* 6. Proof — Real Email + Instantly Dashboard + Case Study */}
            <EmailMockup />
            <div className="max-w-[1200px] mx-auto px-5">
                <Proof />
            </div>
            <CaseStudy />

            {/* 7. Credibility — 6%+ Reply Rate */}
            <QualityGuarantee />

            {/* 8. Offer — Pricing */}
            <Pricing />

            {/* 9. Close — Final CTA */}
            <FinalCTA />
            <Footer />
        </main>
    );
}
