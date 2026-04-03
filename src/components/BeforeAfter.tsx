'use client';

const oldWay = [
    { text: 'Growth requires hiring more recruiters', icon: '✕' },
    { text: 'Relies on job boards and blind outreach', icon: '✕' },
    { text: 'Hours spent manually screening candidates', icon: '✕' },
    { text: 'Generic emails lost in hiring manager inboxes', icon: '✕' },
    { text: 'Always one step behind competitors', icon: '✕' },
    { text: 'Revenue is unpredictable, pipeline is inconsistent', icon: '✕' },
];

const newWay = [
    { text: 'Same team = 5x sourcing capacity', icon: '✓' },
    { text: 'AI detects hiring signals before jobs go public', icon: '✓' },
    { text: 'Screen thousands of resumes in minutes', icon: '✓' },
    { text: 'Personalized pitches with candidate match — 6.3% reply rate', icon: '✓' },
    { text: 'First recruiter to reach decision makers', icon: '✓' },
    { text: 'Predictable pipeline, compounding revenue growth', icon: '✓' },
];

export default function BeforeAfter() {
    return (
        <section className="py-16 md:py-20 bg-[var(--paper)]">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="mb-10 md:mb-14 max-w-[520px]">
                    <p className="label-mono text-[var(--muted)] mb-3">The Shift</p>
                    <h2 className="text-[var(--ink)]">Recruiting has changed. Your systems should too.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Old Way */}
                    <div className="bg-white border border-[var(--border-strong)] rounded-[10px] p-8 md:p-10 card-hover">
                        <span className="inline-block label-mono bg-[var(--paper-dark)] text-[var(--muted)] px-2.5 py-[4px] rounded-[2px] mb-6">
                            The old way
                        </span>
                        <div className="space-y-4">
                            {oldWay.map((item) => (
                                <div key={item.text} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--coral-light)] flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-[var(--coral)] text-[10px] font-bold font-mono">{item.icon}</span>
                                    </div>
                                    <span className="text-[0.85rem] text-[var(--muted)] leading-relaxed">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* New Way */}
                    <div className="bg-[var(--ink)] border border-[var(--ink)] rounded-[10px] p-8 md:p-10 card-hover hover:bg-[var(--ink)]">
                        <span className="inline-block label-mono bg-[var(--accent-light)] text-[var(--accent)] px-2.5 py-[4px] rounded-[2px] mb-6">
                            With RecruitmentOS
                        </span>
                        <div className="space-y-4">
                            {newWay.map((item) => (
                                <div key={item.text} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-[var(--accent)] text-[10px] font-bold font-mono">{item.icon}</span>
                                    </div>
                                    <span className="text-[0.85rem] text-[var(--paper)] leading-relaxed">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
