'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturesDiagram from '@/components/FeaturesDiagram';
import BeforeAfter from '@/components/BeforeAfter';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Results from '@/components/Results';
import ToolTicker from '@/components/ToolTicker';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <TrustBar />
            <FeaturesDiagram />
            <BeforeAfter />
            <HowItWorks />
            <Features />
            <Results />
            <ToolTicker />
            <FinalCTA />
            <Footer />
        </main>
    );
}
