import Link from 'next/link';

const plans = [
    {
        title: 'Monthly',
        price: '$500',
        period: '/month',
        subtitle: 'Minimum monthly commitment',
        features: [
            '<strong>1,000 quality leads/month</strong> included',
            '$0.50 per lead',
            '6%+ reply rate',
            'Job data + company data',
            'Monthly reporting dashboard',
            'Cancel anytime',
        ],
        buttonText: 'Get Started',
        featured: false,
    },
    {
        title: '3-Month Partnership',
        price: '$400',
        period: '/month',
        subtitle: '$1,200 total for 3 months',
        features: [
            '<strong>1,000 quality leads/month</strong> (3k total)',
            '$0.40 per lead (20% savings)',
            '6%+ reply rate',
            'Job data + company data',
            'Weekly performance reports',
            'Dedicated account manager',
            'Priority support',
        ],
        buttonText: 'Start Saving Now',
        featured: true,
    },
];

export default function Pricing() {
    return (
        <section className="py-32 bg-white" id="pricing">
            <div className="max-w-[1100px] mx-auto px-5 text-center">
                <h2 className="text-[48px] font-black mb-6 text-[#1E293B] tracking-tight leading-none">Transparent Pricing That Scales</h2>
                <p className="text-xl text-[#475569] mb-[80px] max-w-[800px] mx-auto font-medium">Pay per lead, not per seat. No hidden fees. Cancel anytime.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white border-2 border-[#1E293B] rounded-[3rem] p-12 relative transition-all duration-300 text-left btn-shadow ${plan.featured ? 'bg-[#E0F2FE]/20' : ''
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                                    BEST VALUE
                                </div>
                            )}
                            <div className="text-[32px] font-black mb-2 text-[#1E293B] tracking-tighter">{plan.title}</div>
                            <div className="text-[64px] font-black text-[#1E293B] my-8 leading-none tracking-tighter">
                                {plan.price}
                                <span className="text-xl text-[#475569] font-bold ml-1">{plan.period}</span>
                            </div>
                            <div className="mb-10">
                                <p className="text-[#475569] text-lg font-bold">{plan.subtitle}</p>
                            </div>
                            <div className="space-y-4 mb-12">
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#1E293B] flex items-center justify-center shrink-0">
                                            <span className="text-white text-[10px] font-bold">✓</span>
                                        </div>
                                        <span className="text-[#1E293B] leading-relaxed font-bold" dangerouslySetInnerHTML={{ __html: feature }} />
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="https://cal.com/tusharm/30min?user=tusharm"
                                target="_blank"
                                className="bg-[#1E293B] text-white px-10 py-5 rounded-2xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-center block text-lg"
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
