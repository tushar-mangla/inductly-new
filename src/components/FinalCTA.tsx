import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="py-16 md:py-32 bg-[#E0F2FE] border-y-4 border-[#1E293B] text-center" id="contact">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-4xl md:text-[64px] font-black mb-8 tracking-tighter text-[#1E293B] leading-[1.1]">Turn On Your Lead Generation Engine Today</h2>
                <p className="text-lg md:text-2xl mb-12 text-[#475569] max-w-[800px] mx-auto leading-relaxed font-black">
                    Get 1,000 verified leads delivered automatically every month. <br className="hidden md:inline" />
                    Starting at $0.50 per lead. Proven 6%+ reply rates.
                </p>
                <Link
                    href="https://cal.com/tusharm/30min?user=tusharm"
                    target="_blank"
                    className="bg-[#1E293B] text-white px-8 py-4 md:px-12 md:py-6 rounded-[2rem] font-black transition-all hover:translate-y-[-4px] btn-shadow text-xl md:text-2xl inline-block"
                >
                    Start Your Engine - Get 1,000 Leads →
                </Link>

            </div>
        </section>
    );
}
