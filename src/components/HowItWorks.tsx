const steps = [
    {
        number: '01',
        title: 'System Scrapes Jobs & Generates Leads',
        description: 'Our AI scans job boards, extracts companies, enriches data, and identifies key decision-makers.',
    },
    {
        number: '02',
        title: 'Matches Candidates, Outreaches Decision-Makers',
        description: 'Smart algorithms analyze job requirements, score and prioritize candidates by fit, match your best candidates automatically, and outreaches decision-makers.',
    },
    {
        number: '03',
        title: 'Automates Job Posting & ATS',
        description: 'Post jobs to multiple platforms in one click, Attracts more candidates effortlessly with ATS.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#F7FAFC] border-t-2 border-[#262626]" id="how-it-works">
            <div className="max-w-[1100px] mx-auto px-5">
                <div className="text-center mb-20">
                    <h2 className="mb-6 text-[#1E293B] max-md:text-[32px] text-5xl font-extrabold tracking-tight">Three simple steps to scale your agency</h2>
                </div>

                <div className="space-y-12 max-w-[1000px] mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-8 max-md:flex-col items-center group">
                            {/* Number Box */}
                            <div className="flex-shrink-0 w-[90px] h-[90px] bg-[#E0F2FE] border-2 border-[#262626] rounded-2xl flex items-center justify-center text-3xl font-black text-[#1E293B] btn-shadow">
                                {step.number}
                            </div>

                            {/* Content Card */}
                            <div className="flex-grow bg-[#F1F5F9]/50 hover:bg-[#E0F2FE] transition-colors duration-300 p-12 rounded-[2.5rem] border-2 border-[#262626] btn-shadow relative overflow-hidden">
                                <h3 className="text-3xl font-extrabold mb-4 text-[#1E293B] tracking-tight">{step.title}</h3>
                                <p className="text-[#475569] text-lg leading-relaxed font-medium mb-8 max-w-[600px]">{step.description}</p>

                                {/* Accent Bar */}
                                <div className="h-2 w-32 bg-[#1E293B] rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
