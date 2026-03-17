import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Stats from '@/components/Stats';
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

            {/* 3. Proof — Case Study */}
            <CaseStudy />

            {/* 4. Proof — Dashboard Screenshot */}
            <div className="max-w-[1200px] mx-auto px-5">
                <Proof />
            </div>

            {/* 5. Proof — Proven Reply Rates Guarantee */}
            <QualityGuarantee />

            {/* 6. System — How It Works (Diagram + Steps) */}
            <SystemDiagram />
            <HowItWorks />

            {/* 7. Logic — Us vs Them Comparison */}
            <ComparisonTable />

            {/* 8. Proof — Real Email Example (Why It Works) */}
            <EmailMockup />

            {/* 9. Offer — Pricing */}
            <Pricing />

            {/* 10. Close — Final CTA */}
            <FinalCTA />
            <Footer />
        </main>
    );
}
