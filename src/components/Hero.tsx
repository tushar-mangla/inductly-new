import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="pt-20 pb-32 relative overflow-hidden bg-white" id="hero">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-left">
                        <h1 className="text-[56px] font-black leading-[1.1] mb-8 text-[#1E293B] tracking-tight">
                            3x your placement without hiring more recruiters.
                        </h1>

                        <div className="space-y-4 mb-10">
                            {[
                                'Automate lead generation and outreach at scale',
                                'Match candidates to jobs with AI-powered scoring',
                                'Save 20+ hours per week with intelligent automations'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E293B]">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="text-lg font-semibold text-[#1E293B]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xl text-[#475569] mb-12 font-medium max-w-[500px]">
                            Inductly is an AI-powered smart recruiting platform built for recruiters.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                className="bg-[#1E293B] text-white px-8 py-4 rounded-xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-lg flex items-center gap-2"
                            >
                                Book a Demo <span className="text-xl">→</span>
                            </Link>
                        </div>

                        <div className="text-[#1E293B] font-bold text-sm tracking-tight flex items-center gap-2 flex-wrap">
                            Join inductly <span className="text-[#CBD5E1]">●</span> Save 8+ hours per role <span className="text-[#CBD5E1]">●</span> 30% personalization response
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
                                    alt="Inductly Lead Machine Dashboard"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Social Proof Text Below Mockup */}
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-[#1E293B] font-bold text-sm tracking-tight px-4">
                                Join <span className="text-[#1E293B] font-black underline decoration-[4px] decoration-[#E0F2FE] underline-offset-4">inductly</span> •
                                Save <span className="text-[#1E293B] font-black italic">8+ hours per role</span> •
                                <span className="text-orange-600 font-extrabold ml-1">30% personalization response</span>
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
