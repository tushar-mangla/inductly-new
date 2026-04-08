'use client';

export default function ProductDemo() {
    return (
        <section className="bg-[#F9FAFB] py-20 md:py-28" id="demo">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A00] mb-3">
                        Product Demo
                    </p>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-4"
                        style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                    >
                        See RecruitmentOS in Action
                    </h2>
                    <p className="text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto">
                        Watch how our AI automates sourcing, matching, and outreach — end to end.
                    </p>
                </div>

                {/* Video Container */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white border border-[#E5E5E5] rounded-2xl p-3 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 ease-out">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-black min-h-[400px] md:min-h-[560px]">
                            <iframe
                                src="https://fast.wistia.com/embed/iframe/qimej8fhke?seo=true&videoFoam=true"
                                className="absolute inset-0 w-full h-full"
                                title="RecruitmentOS Product Demo"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
