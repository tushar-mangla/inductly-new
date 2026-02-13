const features = [
    {
        icon: '🎯',
        title: 'Quality-First Lead Generation',
        description: 'Not just any leads. Every lead is verified, enriched, and consistently achieves our 6%+ reply rate standard.',
    },
    {
        icon: '⚡',
        title: 'Massive Scale Capacity',
        description: 'Need more volume? We can scrape up to 1 million jobs per month and deliver 100,000+ qualified leads monthly.',
        stat: '1M+ jobs/month',
    },
    {
        icon: '📊',
        title: 'Complete Data Package',
        description: 'Get the full picture: job posting data, company intelligence, and enriched lead profiles all in one platform.',
    },
    {
        icon: '🔄',
        title: 'Automated Pipeline',
        description: 'Stop wasting time on manual prospecting. Our AI-powered system finds, qualifies, and enriches leads 24/7.',
    },
    {
        icon: '📈',
        title: 'Proven Results',
        description: 'We helped one agency increase revenue by 30% in just 60 days. Real metrics, real growth, real ROI.',
        stat: '+30% revenue',
    },
    {
        icon: '✅',
        title: 'Performance Transparency',
        description: "Every lead batch comes with verified reply rate data. We show you exactly what's working with full campaign analytics and reporting.",
    },
];

export default function Features() {
    return (
        <section className="py-16 md:py-32 bg-[#F8FAFC]" id="features">
            <div className="max-w-[1200px] mx-auto px-5 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-black mb-4 sm:mb-6 text-[#1E293B] tracking-tight">Built for Scale, Priced for Growth</h2>
                <p className="text-lg sm:text-xl text-[#475569] mb-12 sm:mb-[80px] max-w-[800px] mx-auto font-medium">Everything you need to build a predictable recruiting pipeline</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border-2 border-[#1E293B] text-left btn-shadow hover:bg-[#E0F2FE]/50 transition-colors">
                            <div className="text-4xl sm:text-5xl mb-6 sm:mb-8">{feature.icon}</div>
                            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-[#1E293B] tracking-tight leading-tight">{feature.title}</h3>
                            <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-medium mb-6 sm:mb-8">{feature.description}</p>
                            {feature.stat && (
                                <div className="text-2xl sm:text-3xl font-black text-[#1E293B] tracking-tighter">{feature.stat}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
