import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Proof from '@/components/Proof';
import QualityGuarantee from '@/components/QualityGuarantee';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Features from '@/components/Features';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <div className="max-w-[1200px] mx-auto px-5">
                <Stats />
                <Proof />
            </div>
            <QualityGuarantee />
            <HowItWorks />
            <Pricing />
            <Features />
            <FinalCTA />
            <Footer />
        </main>
    );
}
