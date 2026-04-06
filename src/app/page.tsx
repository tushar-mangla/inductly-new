'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturesDiagram from '@/components/FeaturesDiagram';
import BeforeAfter from '@/components/BeforeAfter';
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
            <Features />
            <ToolTicker />
            <FinalCTA />
            <Footer />
        </main>
    );
}
