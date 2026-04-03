'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

const customModules = [
    {
        tag: 'Lead Generation',
        tagColor: 'bg-[var(--accent-light)] text-[var(--accent)]',
        name: 'Find Qualified Leads',
        description: 'Automated sourcing and targeting system for your recruitment pipelines. Continuously generates warm prospects at scale.',
        price: '$4,000',
    },
    {
        tag: 'Candidate to Customer',
        tagColor: 'bg-[var(--purple-light)] text-[var(--purple)]',
        name: 'Hybrid Model',
        description: 'Lead generation combined with resume screening — the full front-to-back candidate flow in a single integrated system.',
        price: '$2,500',
    },
    {
        tag: 'Resume Screening',
        tagColor: 'bg-[var(--gold-light)] text-[var(--gold)]',
        name: 'Smart Resume Filter',
        description: 'AI-powered screening to shortlist the best-fit candidates fast. Eliminates manual review for high-volume positions.',
        price: '$2,000',
    },
    {
        tag: 'Outreach',
        tagColor: 'bg-[var(--coral-light)] text-[var(--coral)]',
        name: 'Mass Outreach Engine',
        description: 'Send hundreds of thousands of personalized, targeted emails per month with delivery and tracking built in.',
        price: '$3,000',
    },
];

const saasModules = [
    {
        tag: 'Lead Generation',
        tagColor: 'bg-[var(--accent-light)] text-[var(--accent)]',
        name: 'Per-Lead Billing',
        rows: [
            ['Cost per lead', '$0.80'],
            ['Leads per month', '750'],
            ['Monthly minimum', '$600/mo'],
            ['Commitment', '3 months'],
        ],
    },
    {
        tag: 'Candidate to Customer',
        tagColor: 'bg-[var(--purple-light)] text-[var(--purple)]',
        name: 'Per-Candidate Billing',
        rows: [
            ['Cost per match', '$1.00'],
            ['Monthly matches', '~1,200'],
            ['Est. monthly', '~$1,200/mo'],
            ['Commitment', '3 months'],
        ],
    },
    {
        tag: 'Resume Screening',
        tagColor: 'bg-[var(--gold-light)] text-[var(--gold)]',
        name: 'Volume-Based Billing',
        rows: [
            ['Per 1,000 resumes', '$10'],
            ['Volume', 'Unlimited'],
            ['Monthly minimum', '$300/mo'],
            ['Commitment', '3 months'],
        ],
    },
    {
        tag: 'Outreach',
        tagColor: 'bg-[var(--coral-light)] text-[var(--coral)]',
        name: 'High-Volume Email',
        rows: [
            ['Volume', '100,000+/mo'],
            ['Personalization', 'Built-in'],
            ['Monthly minimum', '$300/mo'],
            ['Commitment', '3 months'],
        ],
    },
];

const comparisonRows = [
    ['Lead Generation', '$4,000', '$0.80/lead', '$600/mo', '3 months'],
    ['Candidate to Customer', '$2,500', '$1.00/candidate', '~$1,200/mo', '3 months'],
    ['Resume Screening', '$2,000', '$10/1K resumes', '$300/mo', '3 months'],
    ['Outreach', '$3,000', 'Volume incl.', '$300/mo', '3 months'],
];

export default function Pricing() {
    return (
        <section className="py-20 md:py-28 bg-[var(--paper)]" id="pricing">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* ── Hero: two-column ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-16 fade-up">
                    <div>
                        <span className="label-mono text-[var(--accent)] mb-4 inline-block">Pricing</span>
                        <h2 className="text-[var(--ink)] mb-4">
                            Hire smarter. Pay only for what you need.
                        </h2>
                        <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[480px]">
                            Four specialized modules built for recruitment agencies — available as a
                            custom build or as a scalable SaaS subscription. Mix, match, or take the
                            full suite at a significant discount.
                        </p>
                    </div>
                    {/* Stats 2×2 grid */}
                    <div className="grid grid-cols-2 border border-[var(--border)] rounded-[10px] overflow-hidden self-start">
                        {[
                            { value: '4', label: 'Core Modules' },
                            { value: '20%', label: 'Custom Bundle Saving' },
                            { value: '38%', label: 'SaaS Bundle Saving' },
                            { value: '3 mo', label: 'Min. SaaS Commitment' },
                        ].map((s, i) => (
                            <div
                                key={s.label}
                                className={`py-5 px-5 bg-[var(--surface)] ${
                                    i % 2 === 0 ? 'border-r border-[var(--border)]' : ''
                                } ${i < 2 ? 'border-b border-[var(--border)]' : ''}`}
                            >
                                <div className="text-[2rem] font-serif text-[var(--ink)] leading-tight">{s.value}</div>
                                <div className="label-mono text-[var(--muted)] mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════
                    SECTION 01 — Custom Solution
                ═══════════════════════════════════════════════════ */}
                <div className="mb-16 fade-up delay-1">
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="label-mono text-[var(--muted)]">01</span>
                        <h3 className="text-lg text-[var(--ink)]">Custom Solution</h3>
                        <div className="flex-1 h-px bg-[var(--border)]" />
                        <span className="label-mono text-[var(--muted)]">One-time build fee</span>
                    </div>

                    {/* Connected card grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[var(--border)] rounded-[10px] overflow-hidden">
                        {customModules.map((mod, i) => (
                            <div
                                key={mod.name}
                                className={`bg-[var(--surface)] p-7 flex flex-col gap-3 hover:bg-white transition-colors ${
                                    i < customModules.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-[var(--border)]' : ''
                                } ${i < 2 ? 'sm:border-b sm:border-[var(--border)] lg:border-b-0' : ''}`}
                            >
                                <span className={`inline-block label-mono px-2.5 py-0.5 rounded w-fit ${mod.tagColor}`}>
                                    {mod.tag}
                                </span>
                                <div className="text-[1.15rem] font-semibold text-[var(--ink)] font-sans">{mod.name}</div>
                                <p className="text-[0.8rem] text-[var(--muted)] leading-relaxed flex-1">{mod.description}</p>
                                <div className="text-[1.9rem] font-serif text-[var(--ink)] mt-2 leading-tight">{mod.price}</div>
                                <div className="label-mono text-[var(--muted)]">one-time custom build</div>
                            </div>
                        ))}
                    </div>

                    {/* Bundle Banner */}
                    <div className="mt-3 bg-[var(--ink)] text-white rounded-[10px] px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                        <div>
                            <div className="label-mono text-[var(--accent-mid)] mb-1">Full Suite Bundle</div>
                            <div className="text-[1.5rem] font-serif leading-tight">All 4 modules, fully integrated</div>
                            <div className="text-[0.8rem] text-white/40 mt-1">Lead Gen + C2C + Resume Screening + Outreach</div>
                        </div>
                        <div className="sm:text-right shrink-0">
                            <div className="text-sm text-white/35 line-through">$12,500 separately</div>
                            <div className="text-[2.8rem] font-serif leading-tight">$10,000</div>
                            <div className="text-[0.8rem] text-[var(--accent-mid)] font-medium mt-0.5">Save $2,500 &middot; 20% off</div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════
                    SECTION 02 — SaaS Subscription
                ═══════════════════════════════════════════════════ */}
                <div className="mb-16 fade-up delay-2">
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="label-mono text-[var(--muted)]">02</span>
                        <h3 className="text-lg text-[var(--ink)]">SaaS Subscription</h3>
                        <div className="flex-1 h-px bg-[var(--border)]" />
                        <span className="label-mono text-[var(--muted)]">Pay as you grow</span>
                    </div>

                    <p className="text-[0.8rem] text-[var(--muted)] mb-6">3-month minimum commitment across all SaaS offerings.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {saasModules.map((mod) => (
                            <div
                                key={mod.name}
                                className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-7 card-hover"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className={`inline-block label-mono px-2.5 py-0.5 rounded w-fit ${mod.tagColor}`}>
                                            {mod.tag}
                                        </span>
                                        <div className="text-[1.15rem] font-semibold text-[var(--ink)] font-sans mt-2">{mod.name}</div>
                                    </div>
                                    <span className="label-mono text-[var(--muted)] bg-[var(--paper-dark)] px-3 py-1 rounded-[20px] shrink-0">
                                        3-month min.
                                    </span>
                                </div>
                                <table className="w-full">
                                    <tbody>
                                        {mod.rows.map(([label, value]) => (
                                            <tr key={label} className="border-b border-[var(--border)] last:border-0">
                                                <td className="py-2.5 text-[0.8rem] text-[var(--muted)]">{label}</td>
                                                <td className="py-2.5 text-right text-[0.8rem] font-medium font-mono text-[var(--ink)]">{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>

                    {/* SaaS Bundle */}
                    <div className="mt-4 bg-[var(--paper-dark)] border-2 border-dashed border-[var(--border-strong)] rounded-[10px] px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                        <div>
                            <div className="label-mono text-[var(--accent)] mb-1">SaaS Full Suite &middot; Bulk Rate</div>
                            <div className="text-[1.5rem] font-serif text-[var(--ink)] leading-tight">All 4 modules at a locked-in rate</div>
                            <div className="text-[0.8rem] text-[var(--muted)] mt-1">Lead Gen + C2C + Resume Screening + Outreach &middot; 3-month minimum</div>
                        </div>
                        <div className="sm:text-right shrink-0">
                            <div className="text-sm text-[var(--muted)] line-through">~$2,400/mo combined</div>
                            <div className="text-[2.4rem] font-serif text-[var(--ink)] leading-tight">
                                $1,500<span className="text-base font-sans font-normal text-[var(--muted)]"> /mo</span>
                            </div>
                            <div className="text-[0.8rem] text-[var(--accent)] font-medium mt-0.5">Save ~$900/month &middot; 38% off</div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════
                    SECTION 03 — Quick Comparison
                ═══════════════════════════════════════════════════ */}
                <div className="mb-14 fade-up delay-3">
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="label-mono text-[var(--muted)]">03</span>
                        <h3 className="text-lg text-[var(--ink)]">Quick Comparison</h3>
                        <div className="flex-1 h-px bg-[var(--border)]" />
                    </div>

                    <div className="overflow-x-auto border border-[var(--border)] rounded-[10px]">
                        <table className="w-full text-[0.8rem] bg-[var(--surface)]">
                            <thead>
                                <tr className="bg-[var(--paper-dark)] border-b border-[var(--border)]">
                                    <th className="text-left p-4 label-mono text-[var(--muted)] w-[25%]">Module</th>
                                    <th className="text-center p-4 label-mono text-[var(--muted)]">Custom Build</th>
                                    <th className="text-center p-4 label-mono text-[var(--muted)]">SaaS (per unit)</th>
                                    <th className="text-center p-4 label-mono text-[var(--muted)]">SaaS (monthly min.)</th>
                                    <th className="text-center p-4 label-mono text-[var(--muted)]">Commitment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map(([module, custom, perUnit, monthly, commitment]) => (
                                    <tr key={module} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--paper)] transition-colors">
                                        <td className="p-4 text-[var(--muted)]">{module}</td>
                                        <td className="p-4 text-center font-mono font-medium text-[var(--ink)]">{custom}</td>
                                        <td className="p-4 text-center font-mono text-[var(--ink)]">{perUnit}</td>
                                        <td className="p-4 text-center font-mono text-[var(--ink)]">{monthly}</td>
                                        <td className="p-4 text-center text-[var(--muted)]">{commitment}</td>
                                    </tr>
                                ))}
                                <tr className="bg-[var(--accent-light)]/50">
                                    <td className="p-4 font-semibold text-[var(--accent)]">Full Suite Bundle</td>
                                    <td className="p-4 text-center font-mono font-bold text-[var(--accent)]">$10,000</td>
                                    <td className="p-4 text-center text-[var(--muted)]">&mdash;</td>
                                    <td className="p-4 text-center font-mono font-bold text-[var(--accent)]">$1,500/mo</td>
                                    <td className="p-4 text-center text-[var(--accent)]">3 months</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="text-center fade-up delay-4">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        onClick={() => trackCTAClick('Get a Custom Quote', 'Pricing')}
                        className="inline-flex items-center bg-[var(--accent)] text-white px-6 py-3 rounded-[4px] font-medium hover:bg-[#0f6e56] transition-colors text-sm tracking-wide"
                    >
                        Get a Custom Quote
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <p className="text-[0.75rem] text-[var(--muted)] mt-3">All prices in USD &middot; Custom quotes available for enterprise</p>
                </div>
            </div>
        </section>
    );
}
