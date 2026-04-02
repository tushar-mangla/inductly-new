'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

export default function Hero() {
    return (
        <section className="pt-16 pb-20 md:pt-28 md:pb-36 bg-white" id="hero">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#e8f5ef] rounded-full px-3.5 py-1 text-[11px] font-semibold text-[#1a6b4a] uppercase tracking-wider mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1a6b4a] animate-pulse" />
                            AI-Powered Placement Engine
                        </div>

                        <h1 className="text-[#0A0A0A] mb-6">
                            5x your placements per recruiter —{' '}
                            <span className="text-[#6b7280]">without hiring more people.</span>
                        </h1>

                        <p className="text-lg text-[#6b7280] mb-10 max-w-[480px] leading-relaxed">
                            RecruitmentOS scrapes 1M+ jobs, matches candidates to open roles, and sends personalized outreach to hiring managers — all on autopilot.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-3 mb-6">
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                onClick={() => trackCTAClick('Book a Demo', 'Hero')}
                                className="inline-flex items-center bg-[#0A0A0A] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-[#1a1a1a] transition-all text-base"
                            >
                                Book a Demo
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center text-[#6b7280] hover:text-[#0A0A0A] px-4 py-3.5 text-sm font-medium transition-colors"
                            >
                                See How It Works
                                <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 14l-7 7-7-7M12 3v18" />
                                </svg>
                            </Link>
                        </div>

                        <p className="text-xs text-[#9ca3af]">
                            Setup in &lt;7 days &middot; No long-term contract &middot; Cancel anytime
                        </p>
                    </div>

                    {/* Right — Email Mockup */}
                    <div className="hidden lg:block">
                        <div className="bg-white border border-[#e5e5e5] rounded-xl shadow-sm overflow-hidden">
                            {/* Email header */}
                            <div className="border-b border-[#e5e5e5] px-6 py-4 bg-[#FAFAFA]">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <div className="flex gap-3">
                                        <span className="text-[#9ca3af] w-10">From</span>
                                        <span className="text-[#0A0A0A] font-medium">Sarah @ Your Agency</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-[#9ca3af] w-10">To</span>
                                        <span className="text-[#6b7280]">thomas.m@techcompany.de</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-[#9ca3af] w-10">Re</span>
                                        <span className="text-[#0A0A0A] font-semibold">Already have your Senior Python Engineer</span>
                                    </div>
                                </div>
                            </div>
                            {/* Email body */}
                            <div className="px-6 py-5 text-[13px] text-[#374151] leading-relaxed space-y-3">
                                <p>Hi Thomas,</p>
                                <p>
                                    I saw you&apos;re hiring a Senior Python Engineer for the backend team at TechCompany.
                                    We have a candidate who might be exactly what you need:
                                </p>
                                <div className="bg-[#FAFAFA] border border-[#e5e5e5] rounded-lg px-4 py-3 text-xs space-y-1">
                                    <div><span className="text-[#9ca3af]">Experience:</span> <span className="font-medium text-[#0A0A0A]">6 years backend Python, FastAPI</span></div>
                                    <div><span className="text-[#9ca3af]">Location:</span> <span className="font-medium text-[#0A0A0A]">Munich (open to hybrid)</span></div>
                                    <div><span className="text-[#9ca3af]">Specialty:</span> <span className="font-medium text-[#0A0A0A]">Data pipelines, microservices</span></div>
                                    <div><span className="text-[#9ca3af]">Availability:</span> <span className="font-medium text-[#1a6b4a]">Immediately available</span></div>
                                </div>
                                <p>Would a quick call this week make sense?</p>
                                <p className="text-[#6b7280]">Best,<br />Sarah</p>
                            </div>
                            {/* Tag */}
                            <div className="border-t border-[#e5e5e5] px-6 py-3 bg-[#e8f5ef]">
                                <p className="text-[11px] text-[#1a6b4a] font-medium">
                                    AI-generated from candidate match &middot; Sent automatically by RecruitmentOS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
