const beforeItems = [
    { icon: '😩', text: 'Manually search job boards every morning to find who\'s hiring' },
    { icon: '⏱️', text: 'Hours cross-referencing CVs against open roles in your ATS' },
    { icon: '📧', text: 'Generic cold emails that get ignored — "Hi, we\'re a great agency..."' },
    { icon: '💸', text: 'Paying for Apollo, Lemlist, and extra sourcing tools separately' },
    { icon: '📉', text: 'Unpredictable pipeline — feast or famine every month' },
];

const afterItems = [
    { icon: '🚀', text: 'AI monitors 1M+ jobs and alerts you to new opportunities instantly' },
    { icon: '⚡', text: 'Candidates matched to open roles in seconds — zero manual work' },
    { icon: '💌', text: '"We already have your hire" emails — hyper-relevant, 6%+ reply rate' },
    { icon: '💰', text: 'One platform replaces your entire lead gen and outreach stack' },
    { icon: '📈', text: 'Predictable pipeline with consistent placements every month' },
];

export default function BeforeAfter() {
    return (
        <section className="py-16 md:py-32 bg-[#F8FAFC] border-t-2 border-[#1E293B]/10" id="transformation">
            <div className="max-w-[1100px] mx-auto px-5">
                <div className="text-center mb-12 sm:mb-20">
                    <div className="inline-block bg-[#1E293B] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8">
                        ⚡ The Transformation
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-[48px] font-black mb-4 sm:mb-6 text-[#1E293B] tracking-tight leading-tight">
                        What Changes When You Use Inductly
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* BEFORE */}
                    <div className="bg-red-50 border-2 border-red-200 rounded-[2rem] p-8 sm:p-10">
                        <div className="inline-block bg-red-100 text-red-600 text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-red-200 mb-6">
                            ❌ Without Inductly
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#1E293B] mb-6 tracking-tight">Manual. Inconsistent. Expensive.</h3>
                        <ul className="space-y-4">
                            {beforeItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                                    <span className="text-[#475569] text-sm sm:text-base font-medium leading-snug">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AFTER */}
                    <div className="bg-green-50 border-2 border-green-300 rounded-[2rem] p-8 sm:p-10">
                        <div className="inline-block bg-green-100 text-green-700 text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-green-200 mb-6">
                            ✅ With Inductly
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#1E293B] mb-6 tracking-tight">Automated. Predictable. Profitable.</h3>
                        <ul className="space-y-4">
                            {afterItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                                    <span className="text-[#1E293B] text-sm sm:text-base font-semibold leading-snug">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
