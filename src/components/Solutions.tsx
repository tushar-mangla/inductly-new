const modules = [
    {
        tag: 'Lead Generation',
        tagColor: 'bg-[#e8f5ef] text-[#1a6b4a]',
        name: 'Find Qualified Leads',
        description: 'Automated sourcing from LinkedIn, Indeed, Stepstone and more. Continuously generates warm prospects with hiring manager contacts at scale.',
    },
    {
        tag: 'Candidate to Customer',
        tagColor: 'bg-[#eeebfb] text-[#3d2e7c]',
        name: 'Hybrid C2C Model',
        description: 'Lead generation combined with resume screening — the full front-to-back candidate flow in a single integrated system.',
    },
    {
        tag: 'Resume Screening',
        tagColor: 'bg-[#fdf6e8] text-[#b8862a]',
        name: 'Smart Resume Filter',
        description: 'AI-powered screening to shortlist best-fit candidates fast. Eliminates manual review for high-volume positions.',
    },
    {
        tag: 'Outreach',
        tagColor: 'bg-[#fcecea] text-[#c0412b]',
        name: 'Mass Outreach Engine',
        description: 'Send hundreds of thousands of personalized, targeted emails per month with delivery tracking built in. Proven 6.3% reply rate.',
    },
];

export default function Solutions() {
    return (
        <section className="py-20 md:py-28 bg-[#FAFAFA]" id="solutions">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-12 md:mb-16">
                    <p className="text-xs font-medium text-[#6b7280] uppercase tracking-widest mb-3">Modules</p>
                    <h2 className="text-[#0A0A0A] max-w-[480px]">Four systems. One platform. Zero manual work.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d4d4d4] border border-[#d4d4d4] rounded-xl overflow-hidden">
                    {modules.map((mod) => (
                        <div key={mod.name} className="bg-white p-8 md:p-10 flex flex-col gap-4 hover:bg-[#FAFAFA] transition-colors">
                            <span className={`inline-block text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded w-fit ${mod.tagColor}`}>
                                {mod.tag}
                            </span>
                            <h3 className="text-xl font-semibold text-[#0A0A0A]">{mod.name}</h3>
                            <p className="text-sm text-[#6b7280] leading-relaxed">{mod.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
