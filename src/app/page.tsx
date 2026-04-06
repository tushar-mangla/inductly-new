'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturesDiagram from '@/components/FeaturesDiagram';
import BeforeAfter from '@/components/BeforeAfter';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import Features from '@/components/Features';
import ToolTicker from '@/components/ToolTicker';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <TrustBar />
            <FeaturesDiagram />
            <BeforeAfter />
            <CaseStudiesSection />
            <Features />
            <ToolTicker />
            <FinalCTA />
            <Footer />
        </main>
    );
}
