'use client';

const resultItems = [
    { label: 'Lead Generation', result: '100% automated' },
    { label: 'Pipeline Predictability', result: 'First time achieved' },
    { label: 'Recruiter Time Saved', result: '4+ hrs/day per person' },
    { label: 'Reply Rate', result: '6.3% (from <1%)' },
];

const timelineSteps = [
    { day: 'Day 0', event: 'Manual sourcing eating 4+ hours/day' },
    { day: 'Day 1–7', event: 'RecruitmentOS deployed and configured' },
    { day: 'Week 1', event: 'First warm replies received' },
    { day: 'Day 30', event: 'Predictable pipeline established' },
    { day: 'Day 60', event: '+30% revenue growth achieved' },
];

export default function CaseStudy() {
    return (
        <section className="py-16 md:py-20 bg-[var(--paper)]" id="case-study">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="mb-10 md:mb-14">
                    <p className="label-mono text-[var(--muted)] mb-3">Case Study</p>
                    <h2 className="text-[var(--ink)] max-w-[500px]">From struggling pipeline to predictable revenue.</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
                    {/* Left — Results */}
                    <div>
                        <div className="mb-8">
                            <div className="text-[3.2rem] font-serif text-[var(--ink)] tracking-tight leading-none">+30%</div>
                            <div className="text-[1.15rem] font-serif text-[var(--ink)] mt-2">Revenue Growth</div>
                            <div className="text-[0.8rem] text-[var(--muted)] font-sans">In just 90 days</div>
                        </div>

                        <div className="space-y-0">
                            {resultItems.map((item) => (
                                <div key={item.label} className="flex items-center justify-between py-4 border-b border-[var(--border)] last:border-0">
                                    <span className="text-[0.85rem] text-[var(--muted)] font-sans">{item.label}</span>
                                    <span className="text-[0.85rem] font-medium text-[var(--ink)] font-sans">{item.result}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Testimonial */}
                    <div className="bg-white border border-[var(--border-strong)] rounded-[10px] p-8 md:p-10">
                        <svg className="w-8 h-8 text-[var(--border-strong)] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <blockquote className="text-[1.15rem] md:text-[1.3rem] font-serif text-[var(--ink)] leading-relaxed mb-8 tracking-tight">
                            We stopped cold calling. RecruitmentOS now sends matched candidate pitches to hiring managers on autopilot. We went from inconsistent deals to a predictable pipeline — revenue is up 30% in just 90 days.
                        </blockquote>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-[var(--ink)] rounded-[6px] flex items-center justify-center text-[var(--paper)] text-[0.85rem] font-serif">
                                M
                            </div>
                            <div>
                                <div className="text-[0.85rem] font-medium text-[var(--ink)] font-sans">Marcus</div>
                                <div className="label-mono text-[var(--muted)]">Tech Recruiting Agency, Berlin</div>
                            </div>
                        </div>

                        <div className="border-t border-[var(--border)] pt-6">
                            <p className="label-mono text-[var(--muted)] mb-5">Timeline</p>
                            <div className="space-y-0">
                                {timelineSteps.map((step, i) => (
                                    <div key={i} className="flex items-start gap-4 py-2.5">
                                        <span className="label-mono text-[var(--muted)] w-16 shrink-0 pt-0.5">{step.day}</span>
                                        <div className="flex items-start gap-2.5">
                                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${i === 4 ? 'bg-[var(--accent)]' : 'bg-[var(--border-strong)]'}`} />
                                            <span className={`text-[0.85rem] font-sans ${i === 4 ? 'text-[var(--accent)] font-medium' : 'text-[var(--muted)]'}`}>{step.event}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
