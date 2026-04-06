'use client';

import React from 'react';
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies-data';

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-white" id="case-studies">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-bold text-[#FF6A00] uppercase tracking-widest mb-3">Proof of Results</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tighter">
            Case Studies
          </h2>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link 
              key={study.slug} 
              href={`/case-studies/${study.slug}`}
              className="group block"
            >
              {/* Card Container */}
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-[2rem] p-8 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-black/5 transition-all duration-500 ease-out">
                
                {/* Stats / Highlight */}
                <div className="mb-8">
                  <div className="text-4xl font-black text-black tracking-tighter leading-none mb-2">
                    {study.cardStats.split(' ')[0]}
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    {study.cardStats.split(' ').slice(1).join(' ')}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-[#FF6A00] transition-colors">
                  {study.cardTitle}
                </h3>

                {/* Read Case Study link (footer style) */}
                <div className="mt-auto flex items-center text-sm font-bold text-black border-t border-gray-100 pt-6">
                  Read Case Study
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
