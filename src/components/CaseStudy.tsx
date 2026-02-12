export default function CaseStudy() {
    return (
        <section className="py-32 bg-gradient-to-br from-[#1E293B] to-[#0F172A]" id="case-study">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="bg-white rounded-[3rem] border-4 border-[#1E293B] btn-shadow p-12 md:p-16">
                    {/* Badge */}
                    <div className="inline-block bg-[#FDE047] text-[#1E293B] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-8 border-2 border-[#1E293B]">
                        ⭐ CLIENT SUCCESS STORY
                    </div>

                    {/* Main Stat */}
                    <div className="mb-8">
                        <div className="text-[72px] md:text-[96px] font-black text-[#1E293B] mb-2 leading-none tracking-tighter">
                            +30%
                        </div>
                        <div className="text-[32px] md:text-[40px] font-black text-[#1E293B] mb-3 leading-tight">
                            Revenue Growth
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-[#475569]">
                            In Just 60 Days
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-1 w-24 bg-[#1E293B] mb-8"></div>

                    {/* Story */}
                    <h3 className="text-[32px] md:text-[40px] font-black text-[#1E293B] mb-6 leading-tight">
                        From Struggling Pipeline to Consistent Deals
                    </h3>
                    <p className="text-xl text-[#475569] mb-10 max-w-[800px] font-bold leading-relaxed">
                        One recruiting agency automated their entire lead generation pipeline with Inductly
                        and scaled from inconsistent deals to predictable growth in just 2 months.
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#E0F2FE] p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-[40px] mb-2">✓</div>
                            <div className="text-lg font-black text-[#1E293B] leading-tight">
                                100% Automated Lead Generation
                            </div>
                        </div>
                        <div className="bg-[#E0F2FE] p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-[40px] mb-2">✓</div>
                            <div className="text-lg font-black text-[#1E293B] leading-tight">
                                Predictable Pipeline For First Time
                            </div>
                        </div>
                        <div className="bg-[#FDE047] p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-[40px] mb-2">💰</div>
                            <div className="text-lg font-black text-[#1E293B] leading-tight">
                                30% Revenue Increase in 60 Days
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-10 pt-10 border-t-2 border-[#1E293B]/10">
                        <div className="text-2xl md:text-3xl font-black text-[#1E293B] italic leading-relaxed">
                            "We automated our entire lead generation pipeline and scaled from
                            inconsistent deals to predictable growth."
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
