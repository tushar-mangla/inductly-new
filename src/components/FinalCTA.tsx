import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#e5e5e5]" id="contact">
            <div className="max-w-[680px] mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-[#e8f5ef] rounded-full px-3.5 py-1 text-[11px] font-semibold text-[#1a6b4a] uppercase tracking-wider mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a6b4a]" />
                    Ready to scale?
                </div>

                <h2 className="text-[#0A0A0A] mb-4">Stop sourcing manually.<br />Start closing more deals.</h2>
                <p className="text-sm text-[#6b7280] mb-8 max-w-[400px] mx-auto leading-relaxed">
                    Join 10+ agencies already using RecruitmentOS to automate their pipeline and grow revenue — without hiring more people.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="inline-flex items-center bg-[#0A0A0A] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors text-base"
                    >
                        Book a Demo
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link
                        href="mailto:tushar.mangla1120@gmail.com"
                        className="inline-flex items-center text-sm text-[#6b7280] hover:text-[#0A0A0A] transition-colors px-4 py-3.5 font-medium"
                    >
                        Or email us directly
                    </Link>
                </div>

                <p className="text-xs text-[#9ca3af]">
                    Setup in &lt;7 days &middot; No long-term contract &middot; First warm reply within a week
                </p>
            </div>
        </section>
    );
}
