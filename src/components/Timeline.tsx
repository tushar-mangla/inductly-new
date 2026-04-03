'use client';

const phases = [
    {
        period: 'Days 1–7',
        title: 'Setup & Launch',
        description: 'Onboarding call, niche configuration, candidate data connected, sending infrastructure warmed up, and first campaigns deployed.',
        status: 'Setup',
        statusColor: 'bg-[var(--purple-light)] text-[var(--purple)]',
    },
    {
        period: 'Week 1–2',
        title: 'First Warm Replies',
        description: 'Outreach starts landing. Hiring managers respond to personalized candidate pitches. Your inbox fills with opportunities to close.',
        status: 'Early results',
        statusColor: 'bg-[var(--gold-light)] text-[var(--gold)]',
    },
    {
        period: 'Day 30',
        title: 'Pipeline Takes Shape',
        description: 'Consistent deal flow established. Targeting refined from live data. Your team focuses on closing, not sourcing.',
        status: 'Momentum',
        statusColor: 'bg-[var(--coral-light)] text-[var(--coral)]',
    },
    {
        period: 'Day 60+',
        title: 'Revenue Compounds',
        description: 'System runs on autopilot. Placements increase. Revenue grows predictably. You scale without adding headcount.',
        status: 'Growth',
        statusColor: 'bg-[var(--accent-light)] text-[var(--accent)]',
    },
];

export default function Timeline() {
    return (
        <section className="py-16 md:py-20 bg-[var(--paper)]" id="timeline">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="mb-10 md:mb-14">
                    <p className="label-mono text-[var(--muted)] mb-3">Implementation</p>
                    <h2 className="text-[var(--ink)] max-w-[500px]">Ready in 7 days. Results by day 60. Yours forever.</h2>
                </div>

                {/* Timeline with connecting line */}
                <div className="relative">
                    {/* Horizontal connector line (desktop) */}
                    <div className="hidden md:block absolute top-[52px] left-[5%] right-[5%] h-[2px] bg-[var(--border-strong)] z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {phases.map((phase, index) => (
                            <div
                                key={phase.period}
                                className={`relative fade-up delay-${index + 1}`}
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:flex w-6 h-6 rounded-full bg-white border-2 border-[var(--border-strong)] items-center justify-center mx-auto mb-6 relative z-10">
                                    <div className={`w-2.5 h-2.5 rounded-full ${index === phases.length - 1 ? 'bg-[var(--accent)]' : 'bg-[var(--border-strong)]'}`} />
                                </div>

                                <div className="bg-white border border-[var(--border-strong)] rounded-[10px] p-6 md:p-7 card-hover">
                                    <div className="label-mono text-[var(--muted)] mb-3">{phase.period}</div>
                                    <h3 className="text-[1.05rem] text-[var(--ink)] mb-2">{phase.title}</h3>
                                    <p className="text-[0.8rem] text-[var(--muted)] leading-relaxed mb-4 font-sans">{phase.description}</p>
                                    <span className={`inline-block label-mono px-2.5 py-[4px] rounded-[2px] ${phase.statusColor}`}>
                                        {phase.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
