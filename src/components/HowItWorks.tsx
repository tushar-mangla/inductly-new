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
        outcome: 'First warm reply within 7 days',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#e5e5e5]" id="how-it-works">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-12 md:mb-16">
                    <p className="text-xs font-medium text-[#6b7280] uppercase tracking-widest mb-3">How It Works</p>
                    <h2 className="text-[#0A0A0A] max-w-[440px]">Three steps. Set it once. Placements on autopilot.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative flex flex-col p-8 md:p-10 bg-white border border-[#e5e5e5] md:border-r-0 md:last:border-r first:rounded-t-xl md:first:rounded-l-xl md:first:rounded-tr-none last:rounded-b-xl md:last:rounded-r-xl md:last:rounded-bl-none">
                            {/* Step number */}
                            <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-sm font-bold mb-6">
                                {index + 1}
                            </div>

                            <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">{step.title}</h3>
                            <p className="text-sm text-[#6b7280] leading-relaxed mb-6 flex-1">{step.description}</p>

                            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1a6b4a] bg-[#e8f5ef] px-3 py-1.5 rounded-md w-fit">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                {step.outcome}
                            </div>

                            {/* Arrow connector (desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-[#FAFAFA] border border-[#e5e5e5] rounded-full items-center justify-center">
                                    <svg className="w-3 h-3 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
