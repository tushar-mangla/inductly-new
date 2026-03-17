'use client';

import Link from 'next/link';
import Image from 'next/image';
import { trackCTAClick } from '@/lib/analytics';

export default function Hero() {
    return (
        <section className="pt-8 pb-16 md:pt-20 md:pb-32 relative overflow-hidden bg-white" id="hero">
            <div className="max-w-[1280px] mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#7C6EF5]/10 border border-[#7C6EF5]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#7C6EF5] uppercase tracking-wider mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10D98A] shadow-[0_0_8px_#10D98A] animate-pulse"></span>
                            AI Placement Engine — Live
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[64px] font-black leading-[1.05] mb-6 sm:mb-8 text-[#1E293B] tracking-tight">
                            Your recruiters<br />
                            are bottlenecked.<br />
                            <span className="text-orange-500">This system fixes it.</span>
                        </h1>

                        {/* Sub */}
                        <p className="text-lg sm:text-xl text-[#475569] mb-8 font-medium max-w-[540px] leading-relaxed">
                            5x placements per recruiter — without hiring more people. AI that scrapes jobs, matches candidates, and sends personalized outreach while you sleep.
                        </p>

                        {/* Bullet triggers */}
                        <div className="space-y-3 mb-8">
                            {[
                                '✓  Scrape 1M+ active jobs monthly — automatically',
                                '✓  AI matches candidates to open roles in seconds',
                                '✓  Outreach sent for you — proven 6.3% reply rate',
                            ].map((item, i) => (
                                <div key={i} className="text-base sm:text-lg font-semibold text-[#1E293B]">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Speed trigger */}
                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-xs font-black text-green-700 uppercase tracking-wider mb-8">
                            ⚡ Setup in &lt;7 days · No extra hires needed
                        </div>

                        {/* Dual CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                onClick={() => trackCTAClick('See Live Demo', 'Hero')}
                                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-lg flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                See Live Demo →
                            </Link>
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                onClick={() => trackCTAClick('Get 5x Placement System', 'Hero')}
                                className="bg-white text-[#1E293B] px-8 py-4 rounded-xl font-black transition-all hover:translate-y-[-2px] border-2 border-[#1E293B] text-lg flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                Get 5x Placement System
                            </Link>
                        </div>

                        {/* Micro-proof */}
                        <p className="text-sm text-[#94A3B8] font-medium mb-4">
                            🔒 No long-term contract · Cancel anytime · First warm reply in &lt;7 days
                        </p>
                        {/* Urgency */}
                        <p className="text-sm font-black text-red-600">
                            ⚠ Agencies using this are already replacing manual recruiters with systems.
                        </p>
                    </div>

                    {/* Right Mockup */}
                    <div className="relative mt-8 lg:mt-0">
                        <div className="relative bg-white border-2 border-[#1E293B] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden btn-shadow">
                            {/* Browser Top Bar */}
                            <div className="bg-white border-b-2 border-[#1E293B] px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                                <span className="ml-3 text-xs text-[#94A3B8] font-bold">inductly.ai — Live Campaign</span>
                            </div>

                            {/* Image Mockup */}
                            <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                                <Image
                                    src="/campaign.png"
                                    alt="Inductly AI Lead Engine Dashboard"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating stat badge */}
                        <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#1E293B] text-white rounded-2xl px-4 py-3 sm:px-5 sm:py-4 btn-shadow border-2 border-white">
                            <div className="text-xl sm:text-2xl font-black leading-none">6.3%</div>
                            <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-0.5">Reply Rate</div>
                        </div>

                        {/* Floating badge top-right */}
                        <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-orange-500 text-white rounded-2xl px-4 py-3 sm:px-5 sm:py-4 btn-shadow border-2 border-white">
                            <div className="text-xl sm:text-2xl font-black leading-none">1M+</div>
                            <div className="text-[10px] font-bold text-orange-100 uppercase tracking-widest mt-0.5">Jobs/Month</div>
                        </div>

                        <div className="absolute -inset-4 bg-[#1E293B]/5 blur-3xl -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

