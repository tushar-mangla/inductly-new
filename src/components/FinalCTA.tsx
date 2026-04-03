'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

export default function FinalCTA() {
    return (
        <section className="py-16 md:py-24 bg-[var(--ink)]" id="contact">
            <div className="max-w-[680px] mx-auto px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-[var(--accent)] rounded-[2px] px-3 py-1 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="label-mono text-white">Ready to scale?</span>
                </div>

                <h2 className="text-[var(--paper)] mb-4 font-serif">Stop sourcing manually.<br />Start closing more deals.</h2>
                <p className="text-[0.9rem] text-[var(--paper)]/60 mb-10 max-w-[440px] mx-auto leading-relaxed font-sans">
                    Join 10+ agencies already using RecruitmentOS to automate their pipeline and grow revenue — without hiring more people.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        onClick={() => trackCTAClick('Book a Demo', 'Final CTA')}
                        className="inline-flex items-center bg-[var(--accent)] text-white px-8 py-3.5 rounded-[4px] font-medium hover:bg-[#0f6e56] transition-all duration-300 text-[0.95rem] font-sans group"
                    >
                        Book a Demo
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link
                        href="mailto:tushar.mangla1120@gmail.com"
                        className="inline-flex items-center text-[0.85rem] text-[var(--paper)]/50 hover:text-[var(--paper)] transition-colors px-4 py-3.5 font-medium font-sans"
                    >
                        Or email us directly
                    </Link>
                </div>

                <p className="label-mono text-[var(--paper)]/40">
                    Setup in &lt;7 days &middot; No long-term contract &middot; First warm reply within 2–3 weeks
                </p>
            </div>
        </section>
    );
}
