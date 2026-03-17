import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="py-16 md:py-32 bg-[#E0F2FE] border-y-4 border-[#1E293B] text-center" id="contact">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="inline-block bg-[#1E293B] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8">
                    🚀 Ready to Scale?
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-[64px] font-black mb-6 sm:mb-8 tracking-tighter text-[#1E293B] leading-[1.1]">
                    We find. We match. We outreach.<br className="hidden md:inline" />
                    <span className="text-orange-500"> You just close the deal.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-3 text-[#475569] max-w-[640px] mx-auto leading-relaxed font-medium">
                    Setup in under 7 days. No extra hires. First warm reply this week.
                </p>
                <p className="text-sm sm:text-base text-[#94A3B8] font-medium mb-10 sm:mb-12">
                    Starting at $0.50 per lead · Proven 6%+ reply rates · Cancel anytime
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="bg-orange-500 text-white px-8 py-4 md:px-12 md:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black transition-all hover:translate-y-[-4px] btn-shadow text-lg sm:text-xl inline-flex items-center gap-3 justify-center"
                    >
                        See Live Demo →
                    </Link>
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="bg-white text-[#1E293B] px-8 py-4 md:px-12 md:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black transition-all hover:translate-y-[-4px] border-2 border-[#1E293B] text-lg sm:text-xl inline-flex items-center gap-3 justify-center"
                    >
                        ▶ Watch System Breakdown
                    </Link>
                </div>
            </div>
        </section>
    );
}
