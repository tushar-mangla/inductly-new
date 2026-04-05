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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const sections = containerRef.current.querySelectorAll('.service-card');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        if (scrollPos > element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[#FFFFFF] overflow-hidden" id="services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6" ref={containerRef}>
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tighter mb-6">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-0">
          
          {/* LEFT SIDE: Vertical Timeline (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col items-center relative pt-4">
            <div className="w-[1px] h-full bg-[#E5E5E5] absolute top-4 bottom-4 left-1/2 -translate-x-1/2">
              <div 
                className="w-full bg-[#0A0A0A] transition-all duration-700 ease-out origin-top"
                style={{ height: `${(activeStep + 1) * 25}%` }}
              />
            </div>
            {services.map((_, index) => (
              <div 
                key={index}
                className={`w-10 h-10 rounded-full border-2 bg-white z-10 flex items-center justify-center transition-all duration-300 mb-[280px] last:mb-0
                  ${activeStep >= index ? 'border-[#0A0A0A] scale-110 shadow-sm' : 'border-[#E5E5E5] scale-100 opacity-50'}
                `}
              >
                <div className={`w-2 h-2 rounded-full ${activeStep >= index ? 'bg-[#0A0A0A]' : 'bg-[#E5E5E5]'}`} />
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Content Cards */}
          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card group relative"
              >
                <div className="flex flex-col md:grid md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_280px] gap-8 md:gap-12 items-start">

                  {/* Card Content */}
                  <div className="transition-all duration-500 hover:translate-y-[-4px]">
                    <span className={`inline-block text-[12px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 ${service.tagColor}`}>
                      {service.tag}
                    </span>
                    
                    <h3 className="text-2xl md:text-[26px] font-semibold text-[#0A0A0A] leading-[1.3] mb-6 max-w-[550px] tracking-tight">
                      <span className="bg-[#FDEDD3] text-[#111827] px-2.5 py-1 rounded-md inline-block -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                        {service.headline}
                      </span>
                    </h3>

                    <p className="text-[16px] text-[#666666] leading-relaxed mb-8 max-w-[450px] font-medium">
                      {service.description}
                    </p>

                    <Link 
                      href="https://cal.com/tusharm/30min?user=tusharm"
                      target="_blank"
                      className="inline-flex items-center text-[15px] font-bold text-[#0A0A0A] hover:gap-2 transition-all group/cta"
                    >
                      {service.cta}
                      <span className="ml-2 transition-transform duration-300 group-hover/cta:translate-x-1"></span>
                    </Link>
                  </div>

                  {/* Floating Metric Cards */}
                  <div className="flex flex-col gap-4 w-full">
                    {service.metrics.map((metric, mIdx) => (
                      <div 
                        key={mIdx}
                        className="bg-white border border-[#E5E5E5] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-all duration-300 group/metric"
                      >
                        <div className="text-3xl font-black text-[#0A0A0A] tracking-tighter mb-1">{metric.value}</div>
                        <div className="text-[12px] font-bold text-[#9CA3AF] uppercase tracking-widest">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .service-card {
          opacity: 1;
        }
        @media (max-width: 768px) {
          h3 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
