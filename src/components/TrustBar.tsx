'use client';

const stats = [
    { value: '10+', label: 'Agencies automated' },
    { value: '500+', label: 'Jobs processed daily' },
    { value: '6.3%', label: 'Avg. reply rate' },
    { value: '+30%', label: 'Revenue growth' },
];

export default function TrustBar() {
    return (
        <section className="border-y border-[var(--border-strong)] bg-[var(--paper-dark)]">
            <div className="max-w-[1100px] mx-auto px-8 py-8 md:py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`text-center py-2 ${index < stats.length - 1 ? 'md:border-r md:border-[var(--border)]' : ''}`}
                        >
                            <div className="text-[1.9rem] font-serif text-[var(--ink)] tracking-tight mb-1">{stat.value}</div>
                            <div className="label-mono text-[var(--muted)]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
