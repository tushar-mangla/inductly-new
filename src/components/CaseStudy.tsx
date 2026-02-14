export default function CaseStudy() {
    return (
        <section className="py-16 md:py-32 bg-gradient-to-br from-[#1E293B] to-[#0F172A]" id="case-study">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] border-4 border-[#1E293B] btn-shadow p-6 md:p-12 lg:p-16">
                    {/* Badge */}
                    <div className="inline-block bg-[#FDE047] text-[#1E293B] px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8 border-2 border-[#1E293B]">
                        ⭐ CLIENT SUCCESS STORY
                    </div>

                    {/* Main Stat */}
                    <div className="mb-8">
                        <div className="text-5xl sm:text-6xl md:text-[96px] font-black text-[#1E293B] mb-2 leading-none tracking-tighter">
                            +30%
                        </div>
                        <div className="text-xl sm:text-2xl md:text-[40px] font-black text-[#1E293B] mb-2 sm:mb-3 leading-tight">
                            Revenue Growth
                        </div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#475569]">
                            In Just 60 Days
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-1.5 w-16 sm:w-24 bg-[#1E293B] mb-8"></div>

                    {/* Story */}
                    <h3 className="text-xl sm:text-2xl md:text-[40px] font-black text-[#1E293B] mb-4 sm:mb-6 leading-tight">
                        From Struggling Pipeline to Consistent Deals
                    </h3>
                    <p className="text-lg sm:text-xl text-[#475569] mb-8 sm:mb-10 max-w-[800px] font-bold leading-relaxed">
                        One recruiting agency automated their entire lead generation pipeline with Inductly AI
                        and scaled from inconsistent deals to predictable growth in just 2 months.
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        <div className="bg-[#E0F2FE] p-5 sm:p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-3xl sm:text-[40px] mb-2">✓</div>
                            <div className="text-base sm:text-lg font-black text-[#1E293B] leading-tight">
                                100% Automated Lead Generation
                            </div>
                        </div>
                        <div className="bg-[#E0F2FE] p-5 sm:p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-3xl sm:text-[40px] mb-2">✓</div>
                            <div className="text-base sm:text-lg font-black text-[#1E293B] leading-tight">
                                Predictable Pipeline For First Time
                            </div>
                        </div>
                        <div className="bg-[#FDE047] p-5 sm:p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-3xl sm:text-[40px] mb-2">💰</div>
                            <div className="text-base sm:text-lg font-black text-[#1E293B] leading-tight">
                                30% Revenue Increase in 60 Days
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t-2 border-[#1E293B]/10">
                        <div className="text-lg sm:text-2xl md:text-3xl font-black text-[#1E293B] italic leading-relaxed">
                            "We automated our entire lead generation pipeline and scaled from
                            inconsistent deals to predictable growth."
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
