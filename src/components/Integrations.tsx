'use client';

const platforms = [
    'LinkedIn',
    'Indeed',
    'Stepstone',
    'Glassdoor',
    'Monster',
    'ZipRecruiter',
    'CareerBuilder',
    'Google Jobs',
];

export default function Integrations() {
    return (
        <section className="py-14 md:py-16 bg-[var(--paper-dark)] border-y border-[var(--border)]">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="mb-8">
                    <p className="label-mono text-[var(--muted)] mb-3">Integrations</p>
                    <h2 className="text-[var(--ink)] max-w-[400px]">We scrape from 50+ job boards so you don&apos;t have to.</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    {platforms.map((name) => (
                        <div
                            key={name}
                            className="bg-white border border-[var(--border-strong)] rounded-[6px] px-5 py-2.5 text-[0.85rem] text-[var(--muted)] font-medium font-sans hover:border-[var(--ink)] hover:text-[var(--ink)] hover:shadow-[0_2px_8px_rgba(13,13,13,0.06)] transition-all cursor-default"
                        >
                            {name}
                        </div>
                    ))}
                    <div className="bg-[var(--paper)] border-2 border-dashed border-[var(--border-strong)] rounded-[6px] px-5 py-2.5 text-[0.85rem] text-[var(--muted)] font-medium font-sans">
                        +42 more
                    </div>
                </div>
            </div>
        </section>
    );
}
