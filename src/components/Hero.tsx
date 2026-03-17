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
                        <div className="inline-flex items-center gap-2 bg-[#7C6EF5]/10 border border-[#7C6EF5]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#7C6EF5] uppercase tracking-wider mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10D98A] shadow-[0_0_8px_#10D98A] animate-pulse"></span>
                            Now with AI Candidate Matching
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[64px] font-black leading-[1.1] mb-6 sm:mb-8 text-[#1E293B] tracking-tight">
                            Stop Pitching.<br />
                            <span className="text-orange-500">Start Placing.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-[#475569] mb-8 font-medium max-w-[560px] leading-relaxed">
                            Inductly finds companies that are actively hiring, instantly matches your candidates to their open roles, and emails the hiring manager — before your competitors even know the job exists.
                        </p>

                        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
                            {[
                                'Scrape 1M+ active jobs monthly',
                                'Instant candidate-to-job matching',
                                'Sent on autopilot with 6%+ replies'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start sm:items-center gap-3">
                                    <div className="flex-shrink-0 mt-1 sm:mt-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 sm:w-6 sm:h-6">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-semibold text-[#1E293B] leading-tight">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mb-10 sm:mb-12">
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                onClick={() => trackCTAClick('Start Your Engine', 'Hero')}
                                className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-lg flex items-center justify-center gap-2"
                            >
                                Start Your Engine <span className="text-xl">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Mockup */}
                    <div className="relative mt-8 lg:mt-0">
                        {/* Traffic Light Dots Mockup Frame */}
                        <div className="relative bg-white border-2 border-[#1E293B] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden btn-shadow">
                            {/* Browser Top Bar */}
                            <div className="bg-white border-b-2 border-[#1E293B] px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
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

                        {/* Social Proof Text Below Mockup */}
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-[#1E293B] font-bold text-xs sm:text-sm tracking-tight px-4 leading-relaxed">
                                Join <span className="text-[#1E293B] font-black underline decoration-[3px] sm:decoration-[4px] decoration-orange-200 underline-offset-4">inductly</span> •
                                Scale <span className="text-[#1E293B] font-black italic">100K leads/month</span> •
                                <span className="text-orange-600 font-extrabold block sm:inline mt-1 sm:mt-0 ml-0 sm:ml-1">Infinite Autopilot</span>
                            </p>
                        </div>

                        {/* Shadow Glow Effect */}
                        <div className="absolute -inset-4 bg-[#1E293B]/5 blur-3xl -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
