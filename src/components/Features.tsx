import Link from 'next/link';

const features = [
    {
        tag: 'Lead Generation',
        tagColor: 'bg-[#e8f5ef] text-[#1a6b4a]',
        title: 'Find every hiring manager in your niche — automatically',
        description: 'RecruitmentOS scrapes LinkedIn, Indeed, Stepstone and 50+ job boards to surface active job postings in your target market. You get the hiring manager\'s name, email, title, and company intel — delivered daily.',
        metrics: [
            { value: '1M+', label: 'Jobs scraped monthly' },
            { value: '50+', label: 'Job boards monitored' },
        ],
    },
    {
        tag: 'Candidate Matching',
        tagColor: 'bg-[#eeebfb] text-[#3d2e7c]',
        title: 'AI matches your candidates to open roles in seconds',
        description: 'Upload your candidate database. The AI reads every job description, scores fit against your candidates, and surfaces the top matches — instantly. No more manual CV cross-referencing.',
        metrics: [
            { value: '<5s', label: 'Matching speed' },
            { value: '95%', label: 'Match accuracy' },
        ],
    },
    {
        tag: 'Outreach Engine',
        tagColor: 'bg-[#fcecea] text-[#c0412b]',
        title: 'Hyper-personalized emails that hiring managers actually reply to',
        description: 'Each email references a specific candidate who fits their open role. "We already have your Senior Python Engineer." Not a pitch — a solution. That\'s why the reply rate is 6x the industry average.',
        metrics: [
            { value: '6.3%', label: 'Avg. reply rate' },
            { value: '30K+', label: 'Active contacts' },
        ],
    },
    {
        tag: 'Resume Screening',
        tagColor: 'bg-[#fdf6e8] text-[#b8862a]',
        title: 'Screen thousands of resumes in minutes, not days',
        description: 'AI-powered screening eliminates manual review for high-volume positions. Candidates are ranked by fit, flagged for interview readiness, and matched to multiple open roles simultaneously.',
        metrics: [
            { value: '1,000+', label: 'Resumes per batch' },
            { value: '80%', label: 'Time saved' },
        ],
    },
];

export default function Features() {
    return (
        <section className="py-20 md:py-28 bg-white border-t border-[#e5e5e5]" id="features">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-12 md:mb-16">
                    <p className="text-xs font-medium text-[#6b7280] uppercase tracking-widest mb-3">Capabilities</p>
                    <h2 className="text-[#0A0A0A] max-w-[500px]">Everything your team needs to place more candidates, faster.</h2>
                </div>

                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="border border-[#e5e5e5] rounded-xl p-8 md:p-10 hover:border-[#d4d4d4] transition-all hover:shadow-sm bg-white"
                        >
                            <div className={`grid grid-cols-1 md:grid-cols-[1fr_240px] gap-8 items-start ${index % 2 !== 0 ? 'md:grid-cols-[240px_1fr]' : ''}`}>
                                {index % 2 !== 0 && (
                                    <div className="hidden md:flex flex-col gap-4">
                                        {feature.metrics.map((metric) => (
                                            <div key={metric.label} className="bg-[#FAFAFA] border border-[#e5e5e5] rounded-lg p-4">
                                                <div className="text-2xl font-bold text-[#0A0A0A] tracking-tight">{metric.value}</div>
                                                <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider mt-0.5">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div>
                                    <span className={`inline-block text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded w-fit mb-4 ${feature.tagColor}`}>
                                        {feature.tag}
                                    </span>
                                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3 max-w-[480px]">{feature.title}</h3>
                                    <p className="text-sm text-[#6b7280] leading-relaxed max-w-[520px]">{feature.description}</p>
                                    {/* Mobile metrics */}
                                    <div className="flex gap-6 mt-6 md:hidden">
                                        {feature.metrics.map((metric) => (
                                            <div key={metric.label}>
                                                <div className="text-xl font-bold text-[#0A0A0A]">{metric.value}</div>
                                                <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {index % 2 === 0 && (
                                    <div className="hidden md:flex flex-col gap-4">
                                        {feature.metrics.map((metric) => (
                                            <div key={metric.label} className="bg-[#FAFAFA] border border-[#e5e5e5] rounded-lg p-4">
                                                <div className="text-2xl font-bold text-[#0A0A0A] tracking-tight">{metric.value}</div>
                                                <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider mt-0.5">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="inline-flex items-center text-sm font-medium text-[#0A0A0A] hover:text-[#6b7280] transition-colors"
                    >
                        See all capabilities in a live demo
                        <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
