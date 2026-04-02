const painPoints = [
    {
        number: '01',
        accent: 'border-l-[#c0412b]',
        title: 'Recruiters waste 4+ hours a day on manual sourcing',
        description: 'Scrolling job boards, copying contacts into spreadsheets, cross-referencing LinkedIn — all before a single email goes out. That\'s $60K+/year per recruiter burned on busywork.',
        stat: '$60K+',
        statLabel: 'wasted per recruiter/year',
    },
    {
        number: '02',
        accent: 'border-l-[#b8862a]',
        title: 'Cold outreach gets ignored — 1% reply rate at best',
        description: 'Generic templates with no candidate context. Hiring managers delete these on sight. Your team works harder every quarter for worse results.',
        stat: '1%',
        statLabel: 'industry avg reply rate',
    },
    {
        number: '03',
        accent: 'border-l-[#3d2e7c]',
        title: 'Scaling requires hiring — and margins shrink',
        description: 'Every new recruiter needs onboarding, tools, salary, and months to ramp. Growth is linear, costs compound, and your margins compress with every hire.',
        stat: '6+ mo',
        statLabel: 'avg ramp time per recruiter',
    },
];

export default function Problem() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-12 md:mb-16 max-w-[520px]">
                    <p className="text-xs font-medium text-[#c0412b] uppercase tracking-widest mb-3">The Problem</p>
                    <h2 className="text-[#0A0A0A]">Your pipeline is leaking revenue at every stage.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {painPoints.map((pain) => (
                        <div
                            key={pain.number}
                            className={`bg-[#FAFAFA] border border-[#e5e5e5] border-l-[3px] ${pain.accent} rounded-xl p-6 md:p-8 card-hover`}
                        >
                            <div className="text-[11px] font-mono text-[#9ca3af] mb-4">{pain.number}</div>
                            <h3 className="text-base font-semibold text-[#0A0A0A] mb-3 leading-snug">{pain.title}</h3>
                            <p className="text-sm text-[#6b7280] leading-relaxed mb-6">{pain.description}</p>
                            <div className="border-t border-[#e5e5e5] pt-4">
                                <div className="text-xl font-bold text-[#0A0A0A]">{pain.stat}</div>
                                <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider">{pain.statLabel}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
