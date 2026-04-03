'use client';

import Image from 'next/image';

export default function SystemDiagramGif() {
    return (
        <section className="relative w-full bg-[var(--ink)] py-14 md:py-20">
            <div className="mx-auto max-w-[1100px] px-8">
                <div className="text-center mb-10 fade-up">
                    <p className="label-mono text-[var(--accent-light)] mb-3">How It All Connects</p>
                    <h2 className="text-[var(--paper)] font-serif max-w-[500px] mx-auto">
                        One engine. Four capabilities. Fully automated.
                    </h2>
                </div>
                <div className="fade-up delay-2">
                    <Image
                        src="/system-diagram.gif"
                        alt="RecruitmentOS system diagram showing Scale Outreach, Detect Hiring Signals, Auto-Source Candidates, and Find Decision-Makers"
                        width={1456}
                        height={816}
                        className="w-full h-auto rounded-[10px]"
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
}
