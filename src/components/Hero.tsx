'use client';

import Link from 'next/link';
import Image from 'next/image';
import { trackCTAClick } from '@/lib/analytics';

export default function Hero() {
    return (
        <section className="pt-12 pb-20 md:pt-20 md:pb-32 relative overflow-hidden bg-white" id="hero">
            <div className="max-w-[1280px] mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-left">
                        <h1 className="text-4xl md:text-6xl lg:text-[56px] font-black leading-tight mb-8 text-[#1E293B] tracking-tight">
                            The Automated Lead <span className="text-orange-500">Engine</span> for Recruiting Agencies
                        </h1>

                        <div className="space-y-4 mb-10">
                            {[
                                'Scrape 1M+ jobs automatically every month',
                                'Generate 100K qualified leads on autopilot',
                                'Get verified leads with proven 6%+ reply rates'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="text-lg font-semibold text-[#1E293B]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xl text-[#475569] mb-12 font-medium max-w-[500px]">
                            Turn it on. Watch it run. Get 1,000 quality leads delivered every month—automatically.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                onClick={() => trackCTAClick('Start Your Engine', 'Hero')}
                                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-lg flex items-center gap-2"
                            >
                                Start Your Engine <span className="text-xl">→</span>
                            </Link>

                        </div>

                        <div className="text-[#1E293B] font-bold text-sm tracking-tight flex items-center gap-2 flex-wrap">
                            100% Autopilot <span className="text-[#CBD5E1]">●</span> No Manual Scraping <span className="text-[#CBD5E1]">●</span> Infinite Scalability
                        </div>
                    </div>

                    {/* Right Mockup */}
                    <div className="relative">
                        {/* Traffic Light Dots Mockup Frame */}
                        <div className="relative bg-white border-2 border-[#1E293B] rounded-[2rem] overflow-hidden btn-shadow">
                            {/* Browser Top Bar */}
                            <div className="bg-white border-b-2 border-[#1E293B] px-6 py-4 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                            </div>

                            {/* Image Mockup */}
                            <div className="relative aspect-[1.6/1] bg-slate-100 overflow-hidden">
                                <Image
                                    src="/campaign.png"
                                    alt="Inductly Lead Engine Dashboard"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Social Proof Text Below Mockup */}
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-[#1E293B] font-bold text-sm tracking-tight px-4">
                                Join <span className="text-[#1E293B] font-black underline decoration-[4px] decoration-orange-200 underline-offset-4">inductly</span> •
                                Scale <span className="text-[#1E293B] font-black italic">100K leads/month</span> •
                                <span className="text-orange-600 font-extrabold ml-1">Infinite Autopilot Scalability</span>
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
