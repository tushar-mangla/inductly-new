'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';
import { useState, useEffect } from 'react';
import RetroGrid from './RetroGrid';

export default function Hero() {
    const fullText = "AI-Powered Placement Engine";
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 bg-white" id="hero">
            <RetroGrid />
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="inline-flex items-center justify-center gap-2 bg-[#e8f5ef] rounded-full px-4 py-1.5 text-xs font-semibold text-[#1a6b4a] uppercase tracking-wider mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#1a6b4a] animate-pulse shrink-0" />
                        <span>
                            {typedText}
                            <span className="inline-block animate-[pulse_1s_ease-in-out_infinite] ml-0.5">|</span>
                        </span>
                    </div>

                    <h1 
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] mb-8 leading-tight max-w-5xl mx-auto"
                        style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                    >
                        5x your placements per Recruiter{' '}
                        <span className="text-orange-500 block sm:inline">without Hiring more people.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[#0A0A0A] mb-12 max-w-3xl mx-auto leading-relaxed">
                        RecruitmentOS scrapes 1M+ jobs, matches candidates to open roles, and sends personalized outreach to Hiring managers all on autopilot.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="https://cal.com/tusharm/30min?user=tusharm"
                            target="_blank"
                            onClick={() => trackCTAClick('Book a Demo', 'Hero')}
                            className="inline-flex items-center justify-center bg-[#0A0A0A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#222222] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 text-lg group"
                        >
                            Book a Demo
                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center bg-white text-[#0A0A0A] border border-[#e5e5e5] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#f9fafb] hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-300"
                        >
                            See How It Works
                            <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 14l-7 7-7-7M12 3v18" />
                            </svg>
                        </Link>
                    </div>

                    <p className="text-sm text-[#0A0A0A]">
                        Setup in &lt;7 days &middot; No long-term contract &middot; Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
}
