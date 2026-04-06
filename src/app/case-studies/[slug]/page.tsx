'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies-data';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = use(params);
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-black hover:text-[#FF6A00] transition-colors mb-16"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK
        </Link>

        {/* Two Column Layout (40/60) */}
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-24 items-start">
          
          {/* Left: Simple Image */}
          <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src={study.image} 
              alt={study.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Plain Text Content */}
          <div className="space-y-12 text-black text-lg leading-relaxed antialiased" style={{ color: '#000000' }}>
            
            <div>
              <p className="font-bold mb-4">THE PROBLEM</p>
              <p>{study.problem}</p>
            </div>

            <div>
              <p className="font-bold mb-4">THE ROOT CAUSE</p>
              <p>{study.rootCause}</p>
            </div>

            <div>
              <p className="font-bold mb-4">THE SOLUTION</p>
              <p>{study.solution}</p>
            </div>

            <div>
              <p className="font-bold mb-4 text-[#FF6A00]">THE RESULT</p>
              <p className="font-bold">{study.result}</p>
            </div>

            <div>
              <p className="font-bold mb-4">THE TAKEAWAY</p>
              <p>{study.takeaway}</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
