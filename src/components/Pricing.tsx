import Link from 'next/link';

const customModules = [
    {
        tag: 'Lead Generation',
        tagColor: 'bg-[#e8f5ef] text-[#1a6b4a]',
        name: 'Find Qualified Leads',
        description: 'Automated sourcing and targeting for warm prospects at scale.',
        price: '$4,000',
    },
    {
        tag: 'Candidate to Customer',
        tagColor: 'bg-[#eeebfb] text-[#3d2e7c]',
        name: 'Hybrid Model',
        description: 'Lead generation + resume screening in a single integrated system.',
        price: '$2,500',
    },
    {
        tag: 'Resume Screening',
        tagColor: 'bg-[#fdf6e8] text-[#b8862a]',
        name: 'Smart Resume Filter',
        description: 'AI-powered screening for high-volume positions.',
        price: '$2,000',
    },
    {
        tag: 'Outreach',
        tagColor: 'bg-[#fcecea] text-[#c0412b]',
        name: 'Mass Outreach Engine',
        description: 'Hundreds of thousands of personalized emails per month.',
        price: '$3,000',
    },
];

const saasModules = [
    {
        tag: 'Lead Generation',
        tagColor: 'bg-[#e8f5ef] text-[#1a6b4a]',
        name: 'Per-Lead Billing',
        rows: [
            ['Cost per lead', '$0.80'],
            ['Monthly minimum', '$600/mo'],
            ['Commitment', '3 months'],
        ],
    },
    {
        tag: 'Candidate to Customer',
        tagColor: 'bg-[#eeebfb] text-[#3d2e7c]',
        name: 'Per-Candidate Billing',
        rows: [
            ['Cost per match', '$1.00'],
            ['Est. monthly', '~$1,200/mo'],
            ['Commitment', '3 months'],
        ],
    },
    {
        tag: 'Resume Screening',
        tagColor: 'bg-[#fdf6e8] text-[#b8862a]',
        name: 'Volume-Based Billing',
        rows: [
            ['Per 1,000 resumes', '$10'],
            ['Monthly minimum', '$300/mo'],
            ['Commitment', '3 months'],
        ],
    },
    {
        tag: 'Outreach',
        tagColor: 'bg-[#fcecea] text-[#c0412b]',
        name: 'High-Volume Email',
        rows: [
            ['Volume', '100,000+/mo'],
            ['Monthly minimum', '$300/mo'],
            ['Commitment', '3 months'],
        ],
    },
];

export default function Pricing() {
    return (
        <section className="py-20 md:py-28 bg-[#FAFAFA]" id="pricing">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-16">
                    <p className="text-xs font-medium text-[#6b7280] uppercase tracking-widest mb-3">Pricing</p>
                    <h2 className="text-[#0A0A0A] max-w-[500px] mb-4">Pay only for what you need.</h2>
                    <p className="text-sm text-[#6b7280] max-w-[520px]">
                        Available as a one-time custom build or a scalable SaaS subscription. Mix, match, or take the full suite at a discount.
                    </p>
                </div>

                {/* Custom Solution */}
                <div className="mb-16">
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9ca3af]">01</span>
                        <h3 className="text-lg font-semibold text-[#0A0A0A]">Custom Solution</h3>
                        <div className="flex-1 h-px bg-[#e5e5e5]" />
                        <span className="text-xs text-[#9ca3af]">One-time build fee</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#d4d4d4] border border-[#d4d4d4] rounded-xl overflow-hidden">
                        {customModules.map((mod) => (
                            <div key={mod.name} className="bg-white p-6 flex flex-col gap-3 hover:bg-[#FAFAFA] transition-colors">
                                <span className={`inline-block text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded w-fit ${mod.tagColor}`}>
                                    {mod.tag}
                                </span>
                                <div className="text-base font-semibold text-[#0A0A0A]">{mod.name}</div>
                                <p className="text-xs text-[#6b7280] leading-relaxed flex-1">{mod.description}</p>
                                <div className="text-2xl font-bold text-[#0A0A0A] mt-2">{mod.price}</div>
                                <div className="text-[11px] text-[#9ca3af]">one-time custom build</div>
                            </div>
                        ))}
                    </div>

                    {/* Bundle banner */}
                    <div className="mt-3 bg-[#0A0A0A] text-white rounded-xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <div className="text-xs font-medium text-[#1a6b4a] uppercase tracking-wider mb-1">Full Suite Bundle</div>
                            <div className="text-base font-semibold">All 4 modules, fully integrated</div>
                            <div className="text-xs text-white/50 mt-1">Lead Gen + C2C + Resume Screening + Outreach</div>
                        </div>
                        <div className="sm:text-right">
                            <div className="text-xs text-white/40 line-through">$12,500 separately</div>
                            <div className="text-3xl font-bold">$10,000</div>
                            <div className="text-xs text-[#1a6b4a] font-medium">Save $2,500 (20% off)</div>
                        </div>
                    </div>
                </div>

                {/* SaaS Subscription */}
                <div className="mb-16">
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9ca3af]">02</span>
                        <h3 className="text-lg font-semibold text-[#0A0A0A]">SaaS Subscription</h3>
                        <div className="flex-1 h-px bg-[#e5e5e5]" />
                        <span className="text-xs text-[#9ca3af]">Pay as you grow</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {saasModules.map((mod) => (
                            <div key={mod.name} className="bg-white border border-[#e5e5e5] rounded-xl p-6 hover:shadow-sm transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className={`inline-block text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded w-fit ${mod.tagColor}`}>
                                            {mod.tag}
                                        </span>
                                        <div className="text-base font-semibold text-[#0A0A0A] mt-2">{mod.name}</div>
                                    </div>
                                    <span className="text-[10px] text-[#9ca3af] bg-[#f5f5f5] px-3 py-1 rounded-full uppercase tracking-wider">
                                        3-month min.
                                    </span>
                                </div>
                                <table className="w-full text-sm">
                                    <tbody>
                                        {mod.rows.map(([label, value]) => (
                                            <tr key={label} className="border-b border-[#f5f5f5] last:border-0">
                                                <td className="py-2.5 text-[#6b7280] text-xs">{label}</td>
                                                <td className="py-2.5 text-right text-xs font-medium font-mono text-[#0A0A0A]">{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>

                    {/* SaaS Bundle */}
                    <div className="mt-4 border-2 border-dashed border-[#d4d4d4] rounded-xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAFAFA]">
                        <div>
                            <div className="text-xs font-medium text-[#1a6b4a] uppercase tracking-wider mb-1">SaaS Full Suite</div>
                            <div className="text-base font-semibold text-[#0A0A0A]">All 4 modules at a locked-in rate</div>
                            <div className="text-xs text-[#9ca3af] mt-1">Lead Gen + C2C + Resume Screening + Outreach · 3-month minimum</div>
                        </div>
                        <div className="sm:text-right">
                            <div className="text-xs text-[#9ca3af] line-through">~$2,400/mo combined</div>
                            <div className="text-3xl font-bold text-[#0A0A0A]">$1,500<span className="text-sm font-normal text-[#9ca3af]"> /mo</span></div>
                            <div className="text-xs text-[#1a6b4a] font-medium">Save ~$900/month (38% off)</div>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div>
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9ca3af]">03</span>
                        <h3 className="text-lg font-semibold text-[#0A0A0A]">Quick Comparison</h3>
                        <div className="flex-1 h-px bg-[#e5e5e5]" />
                    </div>

                    <div className="overflow-x-auto border border-[#e5e5e5] rounded-xl">
                        <table className="w-full text-sm bg-white">
                            <thead>
                                <tr className="bg-[#FAFAFA] border-b border-[#e5e5e5]">
                                    <th className="text-left p-4 text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider w-[30%]">Module</th>
                                    <th className="text-center p-4 text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider">Custom Build</th>
                                    <th className="text-center p-4 text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider">SaaS (per unit)</th>
                                    <th className="text-center p-4 text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider">SaaS (monthly min.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Lead Generation', '$4,000', '$0.80/lead', '$600/mo'],
                                    ['Candidate to Customer', '$2,500', '$1.00/candidate', '~$1,200/mo'],
                                    ['Resume Screening', '$2,000', '$10/1K resumes', '$300/mo'],
                                    ['Outreach', '$3,000', 'Volume included', '$300/mo'],
                                ].map(([module, custom, perUnit, monthly]) => (
                                    <tr key={module} className="border-b border-[#f5f5f5] last:border-0 hover:bg-[#FAFAFA] transition-colors">
                                        <td className="p-4 text-xs text-[#6b7280]">{module}</td>
                                        <td className="p-4 text-center text-xs font-mono font-medium text-[#0A0A0A]">{custom}</td>
                                        <td className="p-4 text-center text-xs font-mono font-medium text-[#0A0A0A]">{perUnit}</td>
                                        <td className="p-4 text-center text-xs font-mono font-medium text-[#0A0A0A]">{monthly}</td>
                                    </tr>
                                ))}
                                <tr className="bg-[#FAFAFA]">
                                    <td className="p-4 text-xs font-medium text-[#0A0A0A]">Full Suite Bundle</td>
                                    <td className="p-4 text-center text-xs font-mono font-semibold text-[#1a6b4a]">$10,000</td>
                                    <td className="p-4 text-center text-xs text-[#d4d4d4]">—</td>
                                    <td className="p-4 text-center text-xs font-mono font-semibold text-[#1a6b4a]">$1,500/mo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="inline-flex items-center bg-[#0A0A0A] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors text-sm"
                    >
                        Get a Custom Quote
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <p className="text-xs text-[#9ca3af] mt-3">All prices in USD. Custom quotes available for enterprise.</p>
                </div>
            </div>
        </section>
    );
}
