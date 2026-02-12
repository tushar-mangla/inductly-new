export default function Proof() {
    return (
        <section className="py-32 bg-white" id="proof">
            <div className="max-w-[1200px] mx-auto px-5 text-center">
                <div className="inline-block bg-[#E0F2FE] text-[#1E293B] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-8 border-2 border-[#1E293B]">
                    Case Studies
                </div>
                <h2 className="text-[48px] font-black mb-6 text-[#1E293B] tracking-tight leading-none">Real Results for Real Agencies</h2>
                <p className="text-xl text-[#475569] mb-[80px] max-w-[800px] mx-auto font-bold underline decoration-[#1E293B] decoration-4 underline-offset-8">
                    We don't just promise results. We deliver them at scale.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
                    {/* Live Campaign Card */}
                    <div className="bg-white p-12 rounded-[3rem] border-2 border-[#1E293B] text-left relative overflow-hidden btn-shadow group hover:bg-[#E0F2FE]/20 transition-all">
                        <div className="absolute top-0 right-0 bg-[#1E293B] text-white px-8 py-3 rounded-bl-[2rem] font-black text-xs tracking-widest uppercase">
                            LIVE DATA
                        </div>
                        <div className="text-[84px] font-black text-[#1E293B] mb-2 leading-none tracking-tighter italic">6.3%</div>
                        <div className="text-xl font-black text-[#1E293B] mb-8 uppercase tracking-widest border-l-4 border-[#1E293B] pl-4">Verified Reply Rate</div>

                        <div className="space-y-6 mb-10">
                            <div className="flex justify-between items-center border-b-2 border-[#1E293B]/10 pb-4">
                                <span className="text-[#475569] font-bold">Leads Sent</span>
                                <span className="text-[#1E293B] font-black text-2xl tracking-tighter">3,543</span>
                            </div>
                            <div className="flex justify-between items-center border-b-2 border-[#1E293B]/10 pb-4">
                                <span className="text-[#475569] font-bold">Direct Replies</span>
                                <span className="text-[#1E293B] font-black text-2xl tracking-tighter">145</span>
                            </div>
                        </div>

                        <div className="text-md text-[#475569] leading-relaxed italic font-bold opacity-80">
                            "Every lead batch comes with verified reply rate data.
                            Transparency is our core principle."
                        </div>
                    </div>

                    {/* Revenue Card */}
                    <div className="bg-white p-12 rounded-[3rem] border-2 border-[#1E293B] text-left btn-shadow flex flex-col justify-center hover:bg-[#E0F2FE]/20 transition-all">
                        <div className="text-[72px] font-black text-[#1E293B] mb-4 leading-none tracking-tighter">+30%</div>
                        <div className="text-xl font-black text-[#1E293B] mb-8 uppercase tracking-widest border-l-4 border-[#1E293B] pl-4">Revenue Growth</div>
                        <div className="text-2xl text-[#1E293B] font-black mb-6 leading-tight tracking-tight">
                            Recruiting agency scaled from struggling pipeline to consistent deal flow in 60 days.
                        </div>
                        <p className="text-[#475569] leading-relaxed font-bold opacity-80">
                            Automated their entire lead generation pipeline and scaled from inconsistent deals to predictable growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
