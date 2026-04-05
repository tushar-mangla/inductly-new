'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'lead-gen',
    tag: 'LEAD GENERATION',
    tagColor: 'bg-[#e8f5ef] text-[#1a6b4a]',
    headline: 'Find real hiring managers automatically',
    description: 'AI scans job boards and uncovers the actual decision-makers behind every role with verified contact data.',
    cta: 'Get sample leads →',
    metrics: [
      { value: '1M+', label: 'Jobs scraped monthly' },
      { value: '50+', label: 'Job boards monitored' },
    ]
  },
  {
    id: 'job-intel',
    tag: 'JOB INTELLIGENCE',
    tagColor: 'bg-[#eeebfb] text-[#3d2e7c]',
    headline: 'Only high-intent job opportunities',
    description: 'Filters out Recruiter spam and duplicates so you only see real openings with a direct path to hiring managers.',
    cta: 'Explore jobs →',
    metrics: [
      { value: '95%', label: 'Match accuracy' },
    ]
  },
  {
    id: 'candidate-match',
    tag: 'CANDIDATE MATCHING',
    tagColor: 'bg-[#fdf6e8] text-[#b8862a]',
    headline: 'Match candidates to roles in seconds',
    description: 'AI ranks candidates against job requirements and builds ready-to-send shortlists instantly.',
    cta: 'See matching →',
    metrics: [
      { value: '<5s', label: 'Matching speed' },
    ]
  },
  {
    id: 'outreach',
    tag: 'OUTREACH ENGINE',
    tagColor: 'bg-[#fcecea] text-[#c0412b]',
    headline: 'Emails that actually get replies',
    description: 'Hyper-personalized outreach based on role, company, and candidate context that feels human, not automated.',
    cta: 'View demo →',
    metrics: [
      { value: '6.3%', label: 'Avg reply rate' },
      { value: '30K+', label: 'Active contacts' },
    ]
  }
];

export default function Features() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPos = window.scrollY + window.innerHeight / 2;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        if (scrollPos > top && scrollPos < top + rect.height) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[#FFFFFF] overflow-hidden" id="services">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6" ref={containerRef}>

        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tighter">Our Services</h2>
        </div>

        {/* Service Cards */}
        <div className="space-y-6 md:space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="service-card group relative bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#d4d4d4] transition-all duration-300"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                  activeStep >= index ? 'border-[#0A0A0A] bg-[#0A0A0A]' : 'border-[#E5E5E5]'
                }`}>
                  <span className={`text-xs font-bold ${activeStep >= index ? 'text-white' : 'text-[#9CA3AF]'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className={`inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${service.tagColor}`}>
                  {service.tag}
                </span>
              </div>

              {/* Content + Metrics */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
                {/* Left: Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#0A0A0A] leading-[1.3] mb-4 tracking-tight">
                    <span className="bg-[#FDEDD3] text-[#111827] px-2 py-0.5 rounded-md inline-block -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                      {service.headline}
                    </span>
                  </h3>

                  <p className="text-[15px] text-[#666666] leading-relaxed mb-5 max-w-[480px] font-medium">
                    {service.description}
                  </p>

                  <Link
                    href="https://cal.com/tusharm/30min?user=tusharm"
                    target="_blank"
                    className="inline-flex items-center text-[14px] font-bold text-[#0A0A0A] hover:text-[#FF6A00] transition-colors group/cta"
                  >
                    {service.cta}
                  </Link>
                </div>

                {/* Right: Inline Metric Cards */}
                <div className="flex flex-row md:flex-col gap-3 shrink-0">
                  {service.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-5 py-4 min-w-[140px] hover:bg-white hover:shadow-sm transition-all duration-300"
                    >
                      <div className="text-2xl md:text-3xl font-black text-[#0A0A0A] tracking-tighter mb-0.5">{metric.value}</div>
                      <div className="text-[10px] md:text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
