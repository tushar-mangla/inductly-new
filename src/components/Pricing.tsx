import Link from 'next/link';

const plans = [
    {
        title: '🎯 Lead Engine',
        price: '$500',
        period: '/month',
        subtitle: '$0.50 per lead — for teams that handle their own outreach',
        features: [
            '<strong>1,000 verified leads/month</strong>',
            'Scraped from LinkedIn, Indeed, Stepstone & more',
            'Hiring manager name, email + title',
            'Job data + company intelligence',
            'Monthly reporting dashboard',
            'Cancel anytime',
        ],
        negatives: [
            'No outreach sent',
            'No resume screening',
        ],
        buttonText: 'Get Started',
        featured: false,
    },
    {
        title: '📬 Outreach Engine',
        price: '$594',
        period: '/month',
        subtitle: 'Leads + cold outreach we built in-house — proven 6%+ reply rate',
        features: [
            '<strong>1,000 verified leads/month</strong>',
            'Hiring manager direct contacts',
            '<strong class="text-orange-500">We built the cold email system</strong> — fully done for you',
            'Up to 30,000 active contacts in outreach',
            '<strong class="text-orange-500">Proven 6.3% reply rate</strong> — live campaign data',
            'Dedicated sending infrastructure included',
            'Weekly performance reports',
        ],
        negatives: [
            'No resume screening',
        ],
        buttonText: 'Start Outreaching →',
        featured: true,
    },
    {
        title: '⚡ Full Autopilot',
        price: '$694',
        period: '/month',
        subtitle: 'Everything included — we find, match, and pitch for you',
        features: [
            '<strong>1,000 verified leads/month</strong>',
            'Hiring manager direct contacts',
            'Cold outreach system — fully done for you',
            '6%+ reply rate on autopilot',
            '<strong class="text-orange-500">AI Resume Screening</strong> — candidates matched to open roles',
            '<strong class="text-orange-500">Hyper-personalized pitch</strong> per candidate match',
            'Weekly reports + priority support',
        ],
        negatives: [],
        buttonText: 'Get Full Autopilot →',
        featured: false,
    },
];

export default function Pricing() {
    return (
        <section className="py-16 md:py-32 bg-white" id="pricing">
            <div className="max-w-[1300px] mx-auto px-5 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-black mb-4 sm:mb-6 text-[#1E293B] tracking-tight leading-none">Pick Your Engine.</h2>
                <p className="text-lg sm:text-xl text-[#475569] mb-12 sm:mb-[80px] max-w-[800px] mx-auto font-medium">Start with leads. Add our outreach system. Unlock resume screening. Each plan stacks on the last.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white border-2 border-[#1E293B] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 relative transition-all duration-300 text-left btn-shadow ${plan.featured ? 'bg-[#E0F2FE]/20' : ''
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                    BEST VALUE
                                </div>
                            )}
                            <div className="text-2xl sm:text-[32px] font-black mb-2 text-[#1E293B] tracking-tighter">{plan.title}</div>
                            <div className="text-4xl sm:text-[52px] md:text-[64px] font-black text-[#1E293B] my-6 sm:my-8 leading-none tracking-tighter">
                                {plan.price}
                                <span className="text-lg sm:text-xl text-[#475569] font-bold ml-1">{plan.period}</span>
                            </div>
                            <div className="mb-8 sm:mb-10">
                                <p className="text-[#475569] text-base sm:text-lg font-bold">{plan.subtitle}</p>
                            </div>
                            <div className="space-y-3 sm:space-y-4 mb-6">
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#1E293B] flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="text-white text-[8px] font-bold">✓</span>
                                        </div>
                                        <span className="text-[#1E293B] text-sm leading-relaxed font-bold" dangerouslySetInnerHTML={{ __html: feature }} />
                                    </div>
                                ))}
                                {plan.negatives && plan.negatives.length > 0 && plan.negatives.map((neg, nIndex) => (
                                    <div key={`neg-${nIndex}`} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="text-slate-400 text-[8px] font-bold">✗</span>
                                        </div>
                                        <span className="text-slate-400 text-sm leading-relaxed font-medium">{neg}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                className={`mt-auto px-6 py-4 rounded-2xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-center block text-base ${
                                    plan.featured
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-[#1E293B] text-white'
                                }`}
                            >
                                {plan.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
