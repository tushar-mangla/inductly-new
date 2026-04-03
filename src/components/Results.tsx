import Link from 'next/link';

const comparisons = [
    { aspect: 'Lead Sourcing', manual: '4+ hours/day on job boards', ros: 'AI scrapes 1M+ jobs automatically' },
    { aspect: 'Candidate Matching', manual: 'Manual CV cross-referencing', ros: 'AI scores & matches in seconds' },
    { aspect: 'Cold Outreach', manual: 'Generic templates, 1% reply rate', ros: 'Personalized pitches, 6.3% reply rate' },
    { aspect: 'Cost Per Recruiter', manual: '$60,000+/year salary + tools', ros: 'Fraction of the cost, no new hires' },
    { aspect: 'Working Hours', manual: '8h/day, 5 days/week', ros: '24/7/365 automation' },
    { aspect: 'Scalability', manual: 'Hire more people to grow', ros: 'Dial up volume instantly' },
];

const metrics = [
    { value: '5x', label: 'More placements per recruiter', accent: 'border-t-[#1a6b4a]' },
    { value: '87%', label: 'Cost reduction vs. manual', accent: 'border-t-[#3d2e7c]' },
    { value: '6.3%', label: 'Reply rate (vs 1% avg)', accent: 'border-t-[#c0412b]' },
    { value: '<7 days', label: 'To first warm reply', accent: 'border-t-[#b8862a]' },
];

export default function Results() {
    return (
        <section className="py-20 md:py-28 bg-[#FAFAFA]" id="results">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-12 md:mb-16">
                    <p className="text-xs font-medium text-[#6b7280] uppercase tracking-widest mb-3">Results</p>
                    <h2 className="text-[#0A0A0A] max-w-[500px]">The numbers your recruiters can&apos;t match manually.</h2>
                </div>

                {/* Key outcome metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                    {metrics.map((metric) => (
                        <div key={metric.label} className={`bg-white border border-[#e5e5e5] shadow-sm border-t-2 ${metric.accent} rounded-xl p-6 text-center`}>
                            <div className="text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-1">{metric.value}</div>
                            <div className="text-[11px] text-[#6b7280] uppercase tracking-wider leading-tight">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Comparison table */}
                <div className="overflow-x-auto border border-[#e5e5e5] rounded-xl bg-white shadow-sm">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-[#e5e5e5]">
                                <th className="text-left p-5 text-[10px] font-medium text-[#6b7280] uppercase tracking-wider w-[22%]">Aspect</th>
                                <th className="text-left p-5 text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider">Manual Recruiting</th>
                                <th className="text-left p-5 text-[10px] font-medium text-[#1a6b4a] uppercase tracking-wider">With RecruitmentOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row) => (
                                <tr key={row.aspect} className="border-b border-[#e5e5e5] last:border-0 hover:bg-[#f9fafb] transition-colors">
                                    <td className="p-5 text-xs font-medium text-[#6b7280]">{row.aspect}</td>
                                    <td className="p-5 text-xs text-[#9ca3af]">{row.manual}</td>
                                    <td className="p-5 text-xs text-[#0A0A0A] font-medium">{row.ros}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="inline-flex items-center bg-[#0A0A0A] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-[#222222] transition-colors text-sm shadow-md"
                    >
                        See It In Action
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
