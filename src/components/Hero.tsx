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
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-36 bg-[var(--paper)]" id="hero">
            <RetroGrid />
            <div className="relative z-10 max-w-[1100px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
                    {/* Left — Copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[var(--ink)] rounded-[2px] px-3 py-1.5 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
                            <span className="font-mono text-[0.7rem] tracking-[0.12em] uppercase font-medium text-[var(--paper)]">
                                {typedText}
                                <span className="inline-block animate-[pulse_1s_ease-in-out_infinite] ml-0.5">|</span>
                            </span>
                        </div>

                        <h1 className="font-serif text-[var(--ink)] mb-6">
                            5x your placements per recruiter{' '}
                            <span className="text-[var(--coral)]">without hiring more people.</span>
                        </h1>

                        <p className="text-[1rem] md:text-[1.05rem] font-sans text-[var(--muted)] mb-10 max-w-[520px] leading-relaxed">
                            RecruitmentOS scrapes 1M+ jobs, matches candidates to open roles, and sends personalized outreach to hiring managers — all on autopilot.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-3 mb-6">
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                onClick={() => trackCTAClick('Book a Demo', 'Hero')}
                                className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-7 py-3 rounded-[4px] font-medium hover:bg-[#0f6e56] transition-all duration-300 text-[0.9rem] font-sans group"
                            >
                                Book a Demo
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center justify-center text-[var(--muted)] text-[0.85rem] font-medium hover:text-[var(--ink)] transition-colors font-sans px-2 py-3"
                            >
                                See how it works
                                <svg className="ml-1 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 14l-7 7-7-7" />
                                </svg>
                            </Link>
                        </div>

                        <p className="label-mono text-[var(--muted)]">
                            Setup in &lt;7 days &middot; No contract &middot; Cancel anytime
                        </p>
                    </div>

                    {/* Right — Key stats */}
                    <div className="grid grid-cols-2 gap-[1px] bg-[var(--border-strong)] rounded-[10px] overflow-hidden">
                        {[
                            { value: '1M+', label: 'Jobs scraped monthly', color: 'text-[var(--accent)]' },
                            { value: '6.3%', label: 'Avg. reply rate', color: 'text-[var(--coral)]' },
                            { value: '5x', label: 'More placements', color: 'text-[var(--purple)]' },
                            { value: '<7d', label: 'To first warm reply', color: 'text-[var(--gold)]' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white p-6 md:p-7 text-center">
                                <div className={`text-[1.9rem] font-serif ${stat.color} mb-1`}>{stat.value}</div>
                                <div className="label-mono text-[var(--muted)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
