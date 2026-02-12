export default function QualityGuarantee() {
    return (
        <section className="py-32 bg-[#1E293B] text-white text-center rounded-[4rem] mx-4 relative overflow-hidden my-24">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full"></div>

            <div className="max-w-[1200px] mx-auto px-5 relative z-10">
                <h2 className="text-[56px] font-black mb-6 tracking-tight leading-none text-[#E0F2FE]">Quality You Can Measure</h2>
                <p className="text-xl mb-12 text-slate-300 font-bold">We don't just promise quality. We prove it with every lead batch.</p>
                <div className="text-[120px] font-black my-12 tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] leading-none">6%+ Reply Rate</div>
                <p className="text-xl text-slate-300 max-w-[800px] mx-auto leading-relaxed font-bold">
                    Every lead batch comes with verified reply rate data. <br />
                    If we're not hitting 6%+, you don't pay for those leads.
                </p>
            </div>
        </section>
    );
}
