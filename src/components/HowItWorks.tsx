'use client';

const steps = [
    {
        number: '01',
        title: 'Define Your Market',
        description: 'Tell us your niche — job titles, industries, geographies. We configure the engine around your exact placement focus.',
        outcome: 'Done in one onboarding call',
    },
    {
        number: '02',
        title: 'AI Scrapes, Matches & Writes',
        description: 'RecruitmentOS monitors 1M+ job postings monthly, identifies hiring managers, matches your candidates to open roles, and drafts personalized emails — automatically.',
        outcome: 'Runs 24/7 without intervention',
    },
    {
        number: '03',
        title: 'You Get Warm Replies',
        description: 'Hiring managers receive emails that reference a qualified candidate for their open role. Not a pitch — a solution. Replies land in your inbox, ready to close.',
        outcome: 'First warm reply within 2–3 weeks',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 md:py-20 bg-[var(--paper-dark)]" id="how-it-works">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="mb-10 md:mb-14">
                    <p className="label-mono text-[var(--muted)] mb-3">How It Works</p>
                    <h2 className="text-[var(--ink)] max-w-[440px]">Three steps. Set it once. Placements on autopilot.</h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border-strong)] rounded-[10px] overflow-hidden">
                    {steps.map((step, index) => (
                        <div key={step.number} className={`relative flex flex-col p-7 md:p-8 bg-white card-hover fade-up delay-${index + 1}`}>
                            {/* Step number */}
                            <div className="w-10 h-10 rounded-[6px] bg-[var(--ink)] flex items-center justify-center text-[var(--paper)] text-[0.85rem] font-serif mb-5">
                                {index + 1}
                            </div>

                            <h3 className="text-[1.15rem] text-[var(--ink)] mb-3">{step.title}</h3>
                            <p className="text-[0.85rem] text-[var(--muted)] leading-relaxed mb-6 flex-1">{step.description}</p>

                            <div className="inline-flex items-center gap-1.5 label-mono text-[var(--accent)] bg-[var(--accent-light)] px-2.5 py-[5px] rounded-[2px] w-fit">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                {step.outcome}
                            </div>

                            {/* Arrow connector (desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute -right-[13px] top-1/2 -translate-y-1/2 z-10 w-[26px] h-[26px] bg-[var(--paper-dark)] border border-[var(--border-strong)] rounded-full items-center justify-center">
                                    <svg className="w-3 h-3 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
