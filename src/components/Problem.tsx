'use client';

const painPoints = [
    {
        number: '01',
        accent: 'border-l-[var(--coral)]',
        tagColor: 'bg-[var(--coral-light)] text-[var(--coral)]',
        title: 'Recruiters waste 4+ hours a day on manual sourcing',
        description: 'Scrolling job boards, copying contacts into spreadsheets, cross-referencing LinkedIn — all before a single email goes out. That\'s $60K+/year per recruiter burned on busywork.',
        stat: '$60K+',
        statLabel: 'wasted per recruiter/year',
    },
    {
        number: '02',
        accent: 'border-l-[var(--gold)]',
        tagColor: 'bg-[var(--gold-light)] text-[var(--gold)]',
        title: 'Cold outreach gets ignored — 1% reply rate at best',
        description: 'Generic templates with no candidate context. Hiring managers delete these on sight. Your team works harder every quarter for worse results.',
        stat: '1%',
        statLabel: 'industry avg reply rate',
    },
    {
        number: '03',
        accent: 'border-l-[var(--purple)]',
        tagColor: 'bg-[var(--purple-light)] text-[var(--purple)]',
        title: 'Scaling requires hiring — and margins shrink',
        description: 'Every new recruiter needs onboarding, tools, salary, and months to ramp. Growth is linear, costs compound, and your margins compress with every hire.',
        stat: '6+ mo',
        statLabel: 'avg ramp time per recruiter',
    },
];

export default function Problem() {
    return (
        <section className="py-16 md:py-20 bg-[var(--paper)]">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="mb-10 md:mb-14 max-w-[520px]">
                    <p className="label-mono text-[var(--coral)] mb-3">The Problem</p>
                    <h2 className="text-[var(--ink)]">Your pipeline is leaking revenue at every stage.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border-strong)] rounded-[10px] overflow-hidden">
                    {painPoints.map((pain, index) => (
                        <div
                            key={pain.number}
                            className={`bg-white p-7 md:p-8 card-hover border-l-[3px] ${pain.accent} fade-up ${index === 0 ? 'delay-1' : index === 1 ? 'delay-2' : 'delay-3'}`}
                        >
                            <span className={`inline-block label-mono px-2 py-[3px] rounded-[2px] mb-4 ${pain.tagColor}`}>
                                {pain.number}
                            </span>
                            <h3 className="text-[1.05rem] text-[var(--ink)] mb-3 leading-snug">{pain.title}</h3>
                            <p className="text-[0.85rem] text-[var(--muted)] leading-relaxed mb-6">{pain.description}</p>
                            <div className="border-t border-[var(--border)] pt-4">
                                <div className="text-[1.5rem] font-serif text-[var(--ink)]">{pain.stat}</div>
                                <div className="label-mono text-[var(--muted)] mt-0.5">{pain.statLabel}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
