'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'How do you achieve a 6%+ reply rate?',
        answer: 'Every outreach email references a specific candidate who matches the hiring manager\'s open role. We\'re not sending cold pitches — we\'re offering a solution. That\'s why our reply rate is 6x the industry average. We continuously optimize deliverability, subject lines, and targeting using live campaign data.',
    },
    {
        question: 'How long does setup take?',
        answer: 'Under 7 days. We do a single onboarding call to understand your niche, configure the engine, connect your candidate data, and launch. Most agencies see their first warm reply within the first week.',
    },
    {
        question: 'What if I only need one module — not the full suite?',
        answer: 'Every module works independently. Start with lead generation only, add outreach later, or jump straight to the full suite. We price each module separately so you pay only for what you need.',
    },
    {
        question: 'How is this different from using a VA or hiring another Recruiter?',
        answer: 'A Recruiter costs $60K+/year, needs onboarding, and handles maybe 20-30 leads per day. RecruitmentOS processes 500+ jobs daily, runs 24/7, and costs a fraction. It doesn\'t replace your team — it amplifies them.',
    },
    {
        question: 'Why is there a 3-month minimum?',
        answer: 'Building a high-performing outreach pipeline takes time — warming up sending infrastructure, optimizing targeting, and iterating on messaging. In our experience, agencies start seeing consistent, compounding results around the 60–90 day mark. The 3-month minimum ensures you give the system enough runway to deliver real ROI, not just early signals. After that, cancel anytime.',
    },
    {
        question: 'What data do I get with each lead?',
        answer: 'Hiring manager name, direct email, job title, company name, job posting details, company size, and industry — plus C-suite executives, directors, and VPs when available. Everything you need to send a relevant, personalized outreach to the right decision-maker — in one package.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-28 bg-white border-t border-[#e5e5e5]" id="faq">
            <div className="max-w-[720px] mx-auto px-6">
                <div className="mb-12">
                    <p className="text-xs font-medium text-[#6b7280] uppercase tracking-widest mb-3">FAQ</p>
                    <h2 className="text-[#0A0A0A]">Common questions</h2>
                </div>

                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-[#e5e5e5]">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-5 text-left group"
                            >
                                <span className="text-[15px] font-medium text-[#0A0A0A] pr-4 group-hover:text-[#6b7280] transition-colors">
                                    {faq.question}
                                </span>
                                <span className="text-[#9ca3af] text-xl shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-[#e5e5e5] group-hover:border-[#d4d4d4] transition-colors">
                                    <svg
                                        className={`w-3 h-3 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    >
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-200 ${
                                    openIndex === index ? 'max-h-[500px] pb-5' : 'max-h-0'
                                }`}
                            >
                                <p className="text-sm text-[#6b7280] leading-relaxed pr-10">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
