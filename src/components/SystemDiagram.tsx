import Link from 'next/link';

const steps = [
    {
        icon: '🏢',
        label: 'Input',
        title: 'Your Target Market',
        desc: 'Tell us your niche — tech, finance, healthcare. That\'s it.',
        color: 'bg-white border-[#1E293B]',
        textColor: 'text-[#1E293B]',
    },
    {
        icon: '🤖',
        label: 'AI Engine',
        title: 'Inductly Runs 24/7',
        desc: 'Scrapes 500+ jobs/day, matches your candidates, and writes hyper-personalized emails.',
        color: 'bg-[#1E293B] border-[#1E293B]',
        textColor: 'text-white',
    },
    {
        icon: '💼',
        label: 'Output',
        title: 'Warm Replies & Placements',
        desc: 'Hiring managers reply. You close. Rinse and repeat on autopilot.',
        color: 'bg-orange-500 border-orange-500',
        textColor: 'text-white',
    },
];

export default function SystemDiagram() {
    return (
        <section className="py-16 md:py-28 bg-white" id="system">
            <div className="max-w-[1100px] mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block bg-[#7C6EF5]/10 border border-[#7C6EF5]/30 text-[#7C6EF5] px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest mb-5">
                        ⚙️ How It Actually Works
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-[48px] font-black mb-4 text-[#1E293B] tracking-tight leading-tight">
                        Your Aha Moment
                    </h2>
                    <p className="text-lg text-[#475569] font-medium max-w-[500px] mx-auto">
                        Three inputs. One engine. Infinite placements.
                    </p>
                </div>

                {/* Flow */}
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col lg:flex-row items-center w-full lg:w-auto lg:flex-1">
                            {/* Card */}
                            <div className={`w-full border-2 ${step.color} rounded-[2rem] p-8 btn-shadow text-center flex-1`}>
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <div className={`text-[10px] font-black uppercase tracking-widest mb-2 ${step.textColor === 'text-white' ? 'text-white/60' : 'text-[#94A3B8]'}`}>
                                    {step.label}
                                </div>
                                <div className={`text-xl sm:text-2xl font-black mb-3 leading-tight ${step.textColor}`}>
                                    {step.title}
                                </div>
                                <p className={`text-sm font-medium leading-relaxed ${step.textColor === 'text-white' ? 'text-white/80' : 'text-[#475569]'}`}>
                                    {step.desc}
                                </p>
                            </div>

                            {/* Arrow between cards */}
                            {i < steps.length - 1 && (
                                <div className="text-4xl font-black text-[#1E293B]/30 rotate-90 lg:rotate-0 my-2 lg:my-0 lg:mx-4 flex-shrink-0">
                                    →
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Result callout */}
                <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-[#E0F2FE] rounded-[2rem] border-2 border-[#1E293B] text-center">
                    <p className="text-lg sm:text-2xl font-black text-[#1E293B] mb-2">
                        Result: Agencies running Inductly see <span className="text-orange-500">5x more placements</span> per recruiter — with zero new headcount.
                    </p>
                    <p className="text-sm text-[#475569] font-medium">
                        Setup in &lt;7 days · Works with your existing ATS · No hiring required
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="bg-orange-500 text-white px-8 py-4 rounded-xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-lg inline-flex items-center justify-center gap-2"
                    >
                        See Live Demo →
                    </Link>
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="bg-white text-[#1E293B] px-8 py-4 rounded-xl font-black transition-all hover:translate-y-[-2px] border-2 border-[#1E293B] text-lg inline-flex items-center justify-center gap-2"
                    >
                        Get 5x Placement System
                    </Link>
                </div>
            </div>
        </section>
    );
}
