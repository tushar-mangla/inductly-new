import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="py-16 md:py-32 bg-[#E0F2FE] border-y-4 border-[#1E293B] text-center" id="contact">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="inline-block bg-[#1E293B] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8">
                    🚀 Ready to Scale?
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-[64px] font-black mb-6 sm:mb-8 tracking-tighter text-[#1E293B] leading-[1.1]">
                    Turn On Your<br className="hidden md:inline" /> Placement Engine Today
                </h2>
                <p className="text-base sm:text-lg md:text-2xl mb-4 text-[#475569] max-w-[700px] mx-auto leading-relaxed font-bold">
                    We find companies hiring in your niche, match your candidates, and email the hiring manager.
                    <br className="hidden md:inline" />
                    <span className="text-[#1E293B]"> You just close the deal.</span>
                </p>
                <p className="text-sm sm:text-base text-[#94A3B8] font-medium mb-10 sm:mb-12">
                    Starting at $0.50 per lead · 6%+ reply rate guarantee · Cancel anytime
                </p>
                <Link
                    href="https://cal.com/tusharm/30min?user=tusharm"
                    target="_blank"
                    className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 md:px-12 md:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black transition-all hover:translate-y-[-4px] btn-shadow text-lg sm:text-xl md:text-2xl inline-flex items-center gap-3 justify-center"
                >
                    Get Your First Warm Reply This Week →
                </Link>
            </div>
        </section>
    );
}
