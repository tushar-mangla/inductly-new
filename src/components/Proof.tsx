export default function Proof() {
    return (
        <section className="py-32 bg-[#E0F2FE]" id="proof">
            <div className="max-w-[1200px] mx-auto px-5 text-center">
                <div className="inline-block bg-white text-[#1E293B] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-8 border-2 border-[#1E293B]">
                    REAL CAMPAIGN DATA
                </div>
                <h2 className="text-[48px] font-black mb-6 text-[#1E293B] tracking-tight leading-none">
                    We Don't Just Promise Results—We Show You The Dashboard
                </h2>
                <p className="text-xl text-[#475569] mb-16 max-w-[800px] mx-auto font-bold">
                    Live data from our active lead generation campaigns
                </p>

                {/* Dashboard Screenshot Container */}
                <div className="bg-white p-8 md:p-12 rounded-[3rem] border-4 border-[#1E293B] btn-shadow mb-12 max-w-[1000px] mx-auto">
                    <div className="relative overflow-hidden rounded-2xl border-2 border-[#1E293B]/20 mb-8">
                        <img
                            src="/instantly.png"
                            alt="Instantly.ai campaign showing 6.3% reply rate"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-[#E0F2FE] p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-[48px] font-black text-[#1E293B] mb-1 leading-none tracking-tighter">3,543</div>
                            <div className="text-sm font-black text-[#1E293B] uppercase tracking-widest">Emails Sent</div>
                        </div>
                        <div className="bg-[#E0F2FE] p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-[48px] font-black text-[#1E293B] mb-1 leading-none tracking-tighter">145</div>
                            <div className="text-sm font-black text-[#1E293B] uppercase tracking-widest">Direct Replies</div>
                        </div>
                        <div className="bg-[#1E293B] p-6 rounded-2xl border-2 border-[#1E293B]">
                            <div className="text-[48px] font-black text-white mb-1 leading-none tracking-tighter">6.3%</div>
                            <div className="text-sm font-black text-white uppercase tracking-widest">Reply Rate</div>
                        </div>
                    </div>

                </div>

                {/* Description */}
                <p className="text-lg text-[#1E293B] max-w-[800px] mx-auto font-bold leading-relaxed">
                    This is one of dozens of campaigns we run 24/7. Every client gets
                    the same level of transparency and access to real-time analytics.
                </p>
            </div>
        </section>
    );
}
