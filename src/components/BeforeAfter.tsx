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
        <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#e5e5e5]">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-12 md:mb-16 max-w-[520px]">
                    <p className="text-xs font-medium text-[#6b7280] uppercase tracking-widest mb-3">The Shift</p>
                    <h2 className="text-[#0A0A0A]">Recruiting has changed. Your systems should too.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Old Way */}
                    <div className="bg-white border border-[#e5e5e5] rounded-xl p-8 md:p-10">
                        <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-[#9ca3af] bg-[#f5f5f5] px-3 py-1 rounded mb-6">
                            The old way
                        </div>
                        <div className="space-y-4">
                            {oldWay.map((item) => (
                                <div key={item.text} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-[#ef4444] text-[10px] font-bold">{item.icon}</span>
                                    </div>
                                    <span className="text-sm text-[#9ca3af]">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* New Way */}
                    <div className="bg-[#0A0A0A] border border-white/[0.06] rounded-xl p-8 md:p-10">
                        <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-[#1a6b4a] bg-[#e8f5ef] px-3 py-1 rounded mb-6">
                            With RecruitmentOS
                        </div>
                        <div className="space-y-4">
                            {newWay.map((item) => (
                                <div key={item.text} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#e8f5ef] flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-[#1a6b4a] text-[10px] font-bold">{item.icon}</span>
                                    </div>
                                    <span className="text-sm text-white/90">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
