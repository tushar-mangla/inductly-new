'use client';

import Link from 'next/link';

const features = [
    {
        tag: 'Lead Generation',
        tagColor: 'bg-[var(--accent-light)] text-[var(--accent)]',
        accentBorder: 'border-l-[var(--accent)]',
        title: 'Find every hiring manager in your niche — automatically',
        description: 'RecruitmentOS scrapes LinkedIn, Indeed, Stepstone and 50+ job boards to surface active job postings in your target market. You get the hiring manager\'s name, email, title, and company intel — delivered daily.',
        metrics: [
            { value: '1M+', label: 'Jobs scraped monthly' },
            { value: '50+', label: 'Job boards monitored' },
        ],
    },
    {
        tag: 'Candidate Matching',
        tagColor: 'bg-[var(--purple-light)] text-[var(--purple)]',
        accentBorder: 'border-l-[var(--purple)]',
        title: 'AI matches your candidates to open roles in seconds',
        description: 'Upload your candidate database. The AI reads every job description, scores fit against your candidates, and surfaces the top matches — instantly. No more manual CV cross-referencing.',
        metrics: [
            { value: '<5s', label: 'Matching speed' },
            { value: '95%', label: 'Match accuracy' },
        ],
    },
    {
        tag: 'Outreach Engine',
        tagColor: 'bg-[var(--coral-light)] text-[var(--coral)]',
        accentBorder: 'border-l-[var(--coral)]',
        title: 'Hyper-personalized emails that hiring managers actually reply to',
        description: 'Each email references a specific candidate who fits their open role. "We already have your Senior Python Engineer." Not a pitch — a solution. That\'s why the reply rate is 6x the industry average.',
        metrics: [
            { value: '6.3%', label: 'Avg. reply rate' },
            { value: '30K+', label: 'Active contacts' },
        ],
    },
    {
        tag: 'Resume Screening',
        tagColor: 'bg-[var(--gold-light)] text-[var(--gold)]',
        accentBorder: 'border-l-[var(--gold)]',
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
        <section className="py-16 md:py-20 bg-[var(--paper)]" id="features">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="mb-10 md:mb-14">
                    <p className="label-mono text-[var(--muted)] mb-3">Capabilities</p>
                    <h2 className="text-[var(--ink)] max-w-[500px]">Everything your team needs to place more candidates, faster.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[var(--border-strong)] rounded-[10px] overflow-hidden">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`bg-white p-7 md:p-8 card-hover border-l-[3px] ${feature.accentBorder} fade-up delay-${(index % 4) + 1}`}
                        >
                            <span className={`inline-block label-mono px-2.5 py-[4px] rounded-[2px] w-fit mb-4 ${feature.tagColor}`}>
                                {feature.tag}
                            </span>
                            <h3 className="text-[1.1rem] text-[var(--ink)] mb-3 leading-snug">{feature.title}</h3>
                            <p className="text-[0.85rem] text-[var(--muted)] leading-relaxed mb-6">{feature.description}</p>

                            <div className="flex gap-6 pt-4 border-t border-[var(--border)]">
                                {feature.metrics.map((metric) => (
                                    <div key={metric.label}>
                                        <div className="text-[1.3rem] font-serif text-[var(--ink)]">{metric.value}</div>
                                        <div className="label-mono text-[var(--muted)] mt-0.5">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="inline-flex items-center text-[0.85rem] font-medium font-sans text-[var(--ink)] hover:text-[var(--muted)] transition-colors"
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
