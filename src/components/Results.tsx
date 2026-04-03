'use client';

import Link from 'next/link';

const comparisons = [
    { aspect: 'Lead Sourcing', manual: '4+ hours/day on job boards', ros: 'AI scrapes 1M+ jobs automatically' },
    { aspect: 'Candidate Matching', manual: 'Manual CV cross-referencing', ros: 'AI scores & matches in seconds' },
    { aspect: 'Cold Outreach', manual: 'Generic templates, 1% reply rate', ros: 'Personalized pitches, 6.3% reply rate' },
    { aspect: 'Cost Per Recruiter', manual: '$60,000+/year salary + tools', ros: 'Fraction of the cost, no new hires' },
    { aspect: 'Working Hours', manual: '8h/day, 5 days/week', ros: '24/7/365 automation' },
    { aspect: 'Scalability', manual: 'Hire more people to grow', ros: 'Dial up volume instantly' },
];

const metrics = [
    { value: '5x', label: 'More placements per recruiter', accent: 'border-t-[var(--accent)]' },
    { value: '87%', label: 'Cost reduction vs. manual', accent: 'border-t-[var(--purple)]' },
    { value: '6.3%', label: 'Reply rate (vs 1% avg)', accent: 'border-t-[var(--coral)]' },
    { value: '<7 days', label: 'To first warm reply', accent: 'border-t-[var(--gold)]' },
];

export default function Results() {
    return (
        <section className="py-16 md:py-20 bg-[var(--paper-dark)]" id="results">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="mb-10 md:mb-14">
                    <p className="label-mono text-[var(--muted)] mb-3">Results</p>
                    <h2 className="text-[var(--ink)] max-w-[500px]">The numbers your recruiters can&apos;t match manually.</h2>
                </div>

                {/* Key outcome metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {metrics.map((metric, index) => (
                        <div key={metric.label} className={`bg-white border border-[var(--border-strong)] border-t-2 ${metric.accent} rounded-[10px] p-6 text-center card-hover fade-up delay-${index + 1}`}>
                            <div className="text-[1.9rem] font-serif text-[var(--ink)] tracking-tight mb-1">{metric.value}</div>
                            <div className="label-mono text-[var(--muted)] leading-tight">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Comparison table */}
                <div className="overflow-x-auto border border-[var(--border-strong)] rounded-[10px] bg-white">
                    <table className="w-full text-[0.85rem]">
                        <thead>
                            <tr className="border-b border-[var(--border)]">
                                <th className="text-left p-[0.9rem_1.25rem] label-mono text-[var(--muted)] w-[22%] bg-[var(--paper-dark)]">Aspect</th>
                                <th className="text-left p-[0.9rem_1.25rem] label-mono text-[var(--muted)] bg-[var(--paper-dark)]">Manual Recruiting</th>
                                <th className="text-left p-[0.9rem_1.25rem] label-mono text-[var(--accent)] bg-[var(--paper-dark)]">With RecruitmentOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row) => (
                                <tr key={row.aspect} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--paper)] transition-colors">
                                    <td className="p-[0.9rem_1.25rem] text-[0.85rem] font-medium text-[var(--ink)] font-sans">{row.aspect}</td>
                                    <td className="p-[0.9rem_1.25rem] text-[0.85rem] text-[var(--muted)] font-sans">{row.manual}</td>
                                    <td className="p-[0.9rem_1.25rem] text-[0.85rem] text-[var(--ink)] font-medium font-sans">{row.ros}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="inline-flex items-center bg-[var(--accent)] text-white px-[22px] py-[10px] rounded-[4px] font-medium hover:bg-[#0f6e56] transition-colors text-[0.85rem] font-sans"
                    >
                        See It In Action
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
