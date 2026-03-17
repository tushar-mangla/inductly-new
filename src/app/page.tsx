import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import CaseStudy from '@/components/CaseStudy';
import Proof from '@/components/Proof';
import BeforeAfter from '@/components/BeforeAfter';
import QualityGuarantee from '@/components/QualityGuarantee';
import HowItWorks from '@/components/HowItWorks';
import EmailMockup from '@/components/EmailMockup';
import Pricing from '@/components/Pricing';
import Features from '@/components/Features';
import Integrations from '@/components/Integrations';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <div className="max-w-[1200px] mx-auto px-5">
                <Stats />
            </div>
            <CaseStudy />
            <div className="max-w-[1200px] mx-auto px-5">
                <Proof />
            </div>
            <BeforeAfter />
            <QualityGuarantee />
            <HowItWorks />
            <EmailMockup />
            <Pricing />
            <Features />
            <Integrations />
            <FinalCTA />
            <Footer />
        </main>
    );
}
