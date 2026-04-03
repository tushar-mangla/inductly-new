import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SystemDiagramGif from '@/components/SystemDiagramGif';
import TrustBar from '@/components/TrustBar';
import Problem from '@/components/Problem';
import BeforeAfter from '@/components/BeforeAfter';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Results from '@/components/Results';
import CaseStudy from '@/components/CaseStudy';
import Timeline from '@/components/Timeline';
import Integrations from '@/components/Integrations';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
    return (
        <main className="min-h-screen">
            <ScrollReveal />
            <Navbar />
            <Hero />
            <SystemDiagramGif />
            <Problem />
            <TrustBar />
            <BeforeAfter />
            <HowItWorks />
            <Features />
            <Results />
            <CaseStudy />
            <Timeline />
            <Integrations />
            <FAQ />
            <FinalCTA />
            <Footer />
        </main>
    );
}
