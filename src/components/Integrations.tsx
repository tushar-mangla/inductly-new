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
        <section className="py-16 md:py-20 bg-[#FAFAFA] border-t border-[#e5e5e5]">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="md:w-[240px] shrink-0">
                        <p className="text-xs font-medium text-[#9ca3af] uppercase tracking-widest mb-1">Integrations</p>
                        <p className="text-sm text-[#6b7280]">We scrape from <span className="font-semibold text-[#0A0A0A]">50+</span> job boards including</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {platforms.map((name) => (
                            <div
                                key={name}
                                className="bg-white border border-[#e5e5e5] rounded-lg px-4 py-2 text-sm text-[#6b7280] font-medium hover:border-[#d4d4d4] hover:text-[#0A0A0A] transition-all cursor-default"
                            >
                                {name}
                            </div>
                        ))}
                        <div className="bg-[#FAFAFA] border border-dashed border-[#d4d4d4] rounded-lg px-4 py-2 text-sm text-[#9ca3af] font-medium">
                            +42 more
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
