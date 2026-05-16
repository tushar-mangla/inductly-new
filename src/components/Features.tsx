'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'strategy',
    tag: 'PHASE 1',
    tagColor: 'bg-[#e8f5ef] text-[#1a6b4a]',
    headline: 'BD Strategy & Niche Mapping',
    oneLine: 'We build a tailored BD playbook specifically for your recruitment niche.',
    description: "Before sending a single email, we dive deep into your specific recruitment niche. We map out your exact Ideal Customer Profile (ICP), identify the best data sources, and craft positioning that makes your agency stand out from generalist recruiters.",
    workflow: [
      "Deep-dive discovery session on your niche",
      "ICP mapping (Roles, Industries, Geographies)",
      "Disqualification criteria setup",
      "Value proposition engineering"
    ],
    outcome: "A documented, scalable BD strategy that positions you as a niche authority, not another desperate recruiter."
  },
  {
    id: 'lead-gen',
    tag: 'PHASE 2',
    tagColor: 'bg-[#eeebfb] text-[#3d2e7c]',
    headline: 'Signal-Triggered Lead Generation',
    oneLine: 'We scrape the market daily for active hiring signals.',
    description: "Cold outreach to companies that aren't hiring is a waste of time. Our systems scrape job boards, funding rounds, and executive moves daily to identify companies actively building teams, then we find the exact hiring manager's verified contact details.",
    workflow: [
      "Daily scraping of 1M+ data points",
      "Signal detection (New roles, funding, executive changes)",
      "Waterfall enrichment for verified emails & mobile numbers",
      "Manual QA to remove HR/Recruiter spam"
    ],
    outcome: "A daily feed of 10-50 highly targeted, verified hiring manager leads who actually need your services right now."
  },
  {
    id: 'outreach',
    tag: 'PHASE 3',
    tagColor: 'bg-[#fdf6e8] text-[#b8862a]',
    headline: 'Multi-Channel Outreach Engine',
    oneLine: 'We engage hiring managers where they are, automatically.',
    description: 'We build and manage the entire outbound infrastructure. From buying and warming domains to crafting hyper-personalized email sequences and LinkedIn touchpoints, we ensure your message lands in the primary inbox, not spam.',
    workflow: [
      "Domain setup and continuous warmup",
      "Copywriting tailored to specific hiring signals",
      "Multi-channel sequences (Email + LinkedIn)",
      "Dynamic personalization (Company news, specific open roles)"
    ],
    outcome: "Consistent, daily outreach to your target market without you ever having to hit 'send' or worry about spam filters."
  },
  {
    id: 'triage',
    tag: 'PHASE 4',
    tagColor: 'bg-[#fcecea] text-[#c0412b]',
    headline: 'Reply Triage & Handover',
    oneLine: 'We handle the noise, you handle the warm leads.',
    description: 'When prospects reply, our team triages the inbox. We handle soft objections, manage "follow up in 3 months" responses, and seamlessly hand over the warm, ready-to-book meetings directly to your team.',
    workflow: [
      "Inbox monitoring and classification",
      "Objection handling and nurturing",
      "Calendar routing to your recruiters",
      "Seamless handover of qualified prospects"
    ],
    outcome: "You only spend time speaking to hiring managers who have agreed to a meeting. No more inbox management."
  },
  {
    id: 'reporting',
    tag: 'PHASE 5',
    tagColor: 'bg-[#e3f2fd] text-[#0d47a1]',
    headline: 'Reporting & Iteration',
    oneLine: 'Continuous optimization based on real market data.',
    description: "We don't just set and forget. We track every open, click, and reply. Our team analyzes the data weekly to A/B test messaging, refine the ICP, and double down on the segments that are converting into signed clients.",
    workflow: [
      "Weekly performance dashboards",
      "A/B testing of subject lines and copy",
      "Campaign pivot recommendations",
      "Monthly strategic review calls"
    ],
    outcome: "A BD system that gets smarter and more efficient every month, driving your Cost Per Acquisition down."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="services">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-6">
            The Done-For-You BD System
          </h2>
          <p className="text-lg md:text-xl text-[#6b7280] leading-relaxed">
            We don't just sell you software. We build, manage, and scale your entire outbound business development function so you can focus on filling roles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-[1px] bg-[#e5e5e5] hidden md:block"></div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className="relative flex flex-col md:flex-row gap-8 md:gap-16">

                {/* Timeline Dot (Desktop only) */}
                <div className="absolute left-0 top-2 hidden md:flex items-center justify-center w-11 h-11 bg-[#FAFAFA] border-2 border-[#e5e5e5] rounded-full z-10">
                  <div className="w-2.5 h-2.5 bg-[#FF6A00] rounded-full"></div>
                </div>

                {/* Content Area */}
                <div className="flex-1 md:pl-24">
                  
                  {/* Tag & Headline */}
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md ${service.tagColor}`}>
                      {service.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                      {service.headline}
                    </h3>
                  </div>

                  {/* One Liner */}
                  <p className="text-xl font-medium text-[#FF6A00] mb-4">
                    {service.oneLine}
                  </p>

                  {/* Deep Dive Description */}
                  <p className="text-base text-[#4b5563] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Grid for Workflow & Outcome */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    
                    {/* Workflow */}
                    <div className="bg-white border border-[#e5e5e5] rounded-xl p-6 shadow-sm">
                      <h4 className="text-sm font-bold text-[#0A0A0A] uppercase tracking-wider mb-4 border-b border-[#e5e5e5] pb-2">The Process</h4>
                      <ul className="space-y-3">
                        {service.workflow.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-[#4b5563] leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="bg-[#FFF9F4] border border-[#FF6A00]/20 rounded-xl p-6 shadow-sm flex flex-col justify-center">
                       <h4 className="text-sm font-bold text-[#FF6A00] uppercase tracking-wider mb-3">Expected Outcome</h4>
                       <p className="text-[#0A0A0A] font-medium leading-relaxed italic">
                         "{service.outcome}"
                       </p>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
                href="https://cal.com/tusharm/30min?user=tusharm"
                target="_blank"
                className="inline-flex items-center justify-center bg-[#0A0A0A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1a1a1a] transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
                Book a Fit Call
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
