'use client';

import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Niche Immersion',
    description: 'We do not run generic campaigns. We map your exact ideal customer profile, target industries, geography, disqualification rules, and hiring signals.',
    bullets: ['ICP mapping', 'Target industries & geography', 'Hiring signals', 'Disqualification rules'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Signal Engine',
    description: 'We deploy scraping systems to identify active hiring managers across multiple platforms, then enrich their contact information to ensure high deliverability.',
    bullets: ['Apollo & ZoomInfo integration', 'Clay enrichment systems', 'Smartlead connection', 'Daily scraping systems'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Outreach Engine',
    description: 'We manage the entire outbound flow, from setting up domains to writing and sending personalized sequences across email and LinkedIn.',
    bullets: ['Multi-channel sequences', 'LinkedIn & Email outreach', 'Inbox rotation', 'Domain warming & deliverability'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Reply Triage & Handover',
    description: 'Our team monitors the inbox, handles objections, classifies leads, and seamlessly passes the qualified, ready-to-book prospects directly to your calendar.',
    bullets: ['Lead classification', 'Recruiter handoff workflow', 'Objection routing', 'Comprehensive reporting'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold tracking-widest text-[#FF6A00] uppercase mb-4">Under the Hood</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-6">
            How RecruitmentOS Works
          </h2>
          <p className="text-lg text-[#6b7280]">
            A transparent look at the 4-step workflow we use to generate high-quality hiring manager meetings for your agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="absolute -inset-4 bg-[#FAFAFA] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <div className="relative z-10 flex flex-col h-full">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#0A0A0A] text-white flex items-center justify-center shadow-lg group-hover:bg-[#FF6A00] transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#FF6A00] uppercase tracking-wider block mb-1">Step {step.id}</span>
                    <h3 className="text-2xl font-bold text-[#0A0A0A] tracking-tight">{step.title}</h3>
                  </div>
                </div>

                <p className="text-[#4b5563] leading-relaxed mb-6 flex-grow">
                  {step.description}
                </p>

                <div className="bg-white border border-[#e5e5e5] rounded-xl p-5 shadow-sm">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wide">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
