import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturesDiagram from '@/components/FeaturesDiagram';
import BeforeAfter from '@/components/BeforeAfter';
import Features from '@/components/Features';
import ToolTicker from '@/components/ToolTicker';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ProductDemo from '@/components/ProductDemo';
export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <ProductDemo />
            <TrustBar />
            <FeaturesDiagram />
            <BeforeAfter />
            <Features />
            <ToolTicker />
            <FinalCTA />
            <Footer />
        </main>
    );
}
