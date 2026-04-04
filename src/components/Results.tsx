'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ───── count-up hook ───── */
function useCountUp(end: number, suffix: string, prefix: string, duration = 1800) {
    const [display, setDisplay] = useState(`${prefix}0${suffix}`);
    const ref = useRef<HTMLDivElement>(null);
    const hasRun = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasRun.current) {
                    hasRun.current = true;
                    const start = performance.now();
                    const step = (now: number) => {
                        const t = Math.min((now - start) / duration, 1);
                        const ease = 1 - Math.pow(1 - t, 3);
                        const val = Math.round(ease * end * 10) / 10;
                        setDisplay(`${prefix}${val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)}${suffix}`);
                        if (t < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.4 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [end, suffix, prefix, duration]);

    return { ref, display };
}

/* ───── data ───── */
const metrics = [
    {
        end: 5,
        suffix: 'x',
        prefix: '',
        label: 'More placements per Recruiter',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 20l6-6 4 4 10-14" />
            </svg>
        ),
    },
    {
        end: 87,
        suffix: '%',
        prefix: '',
        label: 'Cost reduction vs. manual',
        icon: (
            <span className="text-base font-bold leading-none">$</span>
        ),
    },
    {
        end: 6.3,
        suffix: '%',
        prefix: '',
        label: 'Reply rate (vs 1% industry avg)',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
            </svg>
        ),
    },
    {
        end: 7,
        suffix: ' days',
        prefix: '<',
        label: 'To first warm reply',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
];

const comparisons = [
    {
        aspect: 'Lead Sourcing',
        manual: '4+ hrs/day on job boards',
        ai: 'AI scrapes 1M+ jobs automatically',
    },
    {
        aspect: 'Candidate Matching',
        manual: 'Manual CV cross-referencing',
        ai: 'AI scores & matches in seconds',
    },
    {
        aspect: 'Outreach',
        manual: 'Generic templates, 1% reply rate',
        ai: 'Hyper-personalized, 6.3% reply rate',
    },
    {
        aspect: 'Cost',
        manual: '$60,000+/year per Recruiter',
        ai: 'From $500/mo — fraction of the cost',
    },
    {
        aspect: 'Working Hours',
        manual: '8h/day, 5 days/week',
        ai: '24/7/365 automation',
    },
    {
        aspect: 'Scalability',
        manual: 'Hire more people to grow',
        ai: 'Dial up volume instantly',
    },
];

/* ───── stat card ───── */
function StatCard({ metric }: { metric: (typeof metrics)[number] }) {
    const { ref, display } = useCountUp(metric.end, metric.suffix, metric.prefix);

    return (
        <div
            ref={ref}
            className="group relative bg-white rounded-2xl p-6 md:p-7 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
            {/* top edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E5E7EB] group-hover:bg-[#111827] transition-colors duration-300" />

            {/* icon */}
            <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] text-[#111827] flex items-center justify-center mb-4 group-hover:bg-[#111827] group-hover:text-white transition-all duration-300">
                {metric.icon}
            </div>

            {/* number */}
            <div className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-1 tabular-nums">
                {display}
            </div>

            {/* label */}
            <div className="text-[12px] text-[#6B7280] font-medium uppercase tracking-wider leading-snug">
                {metric.label}
            </div>
        </div>
    );
}

/* ───── main component ───── */
export default function Results() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden" id="results">
            {/* background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-orange-50/30 -z-10" />
            <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl -z-10" />
            <div className="absolute bottom-10 -right-32 w-[400px] h-[400px] rounded-full bg-orange-100/30 blur-3xl -z-10" />

            <div className="max-w-[1280px] mx-auto px-6">
                {/* header */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.2em] mb-4">
                        Results
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] max-w-[650px] mx-auto text-[#111827]">
                        The numbers your recruiters can&apos;t match manually.
                    </h2>
                </div>

                {/* stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-20 md:mb-28">
                    {metrics.map((m) => (
                        <StatCard key={m.label} metric={m} />
                    ))}
                </div>

                {/* comparison section */}
                <div className="text-center mb-12">
                    <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.2em] mb-4">
                        Side by side
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
                        Manual Recruiting vs. <span className="text-[#F97316]">RecruitmentOS</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-[960px] mx-auto">
                    {/* manual card */}
                    <div className="relative rounded-2xl bg-[#F3F4F6] border border-[#E5E7EB] p-7 md:p-8">
                        <div className="flex items-center gap-3 mb-7">
                            <div className="w-9 h-9 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#9CA3AF]">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <span className="text-base font-bold text-[#111827] uppercase tracking-wider">
                                Manual Recruiting
                            </span>
                        </div>
                        <div className="space-y-5">
                            {comparisons.map((row) => (
                                <div key={row.aspect}>
                                    <div className="text-xs font-bold text-[#111827] uppercase tracking-widest mb-1">
                                        {row.aspect}
                                    </div>
                                    <div className="text-[15px] text-[#374151] font-medium leading-relaxed">
                                        {row.manual}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI card */}
                    <div className="relative rounded-2xl bg-white border border-[#E5E7EB] p-7 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] overflow-hidden">
                        {/* subtle glow */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-blue-100/50 to-orange-100/40 blur-2xl pointer-events-none" />

                        <div className="relative flex items-center gap-3 mb-7">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#F97316] flex items-center justify-center text-white">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-sm font-bold text-[#111827] uppercase tracking-wider">
                                With RecruitmentOS
                            </span>
                        </div>
                        <div className="relative space-y-5">
                            {comparisons.map((row) => (
                                <div key={row.aspect}>
                                    <div className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-widest mb-1">
                                        {row.aspect}
                                    </div>
                                    <div className="text-sm text-[#111827] font-semibold leading-relaxed">
                                        {row.ai}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-14">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        See It In Action
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
