const stats = [
    { value: '10+', label: 'Agencies automated' },
    { value: '500+', label: 'Jobs processed daily' },
    { value: '6.3%', label: 'Avg. reply rate' },
    { value: '+30%', label: 'Revenue growth' },
];

export default function TrustBar() {
    return (
        <section className="border-y border-[#e5e5e5] bg-[#FAFAFA]">
            <div className="max-w-[1100px] mx-auto px-6 py-8 md:py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-[#0A0A0A] tracking-tight mb-1">{stat.value}</div>
                            <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
