'use client';

import React from 'react';
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies-data';

export default function CaseStudyPage() {
  const study = caseStudies[0];

  return (
    <div className="min-h-screen bg-white pt-24 pb-32 animate-fadeIn">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-black hover:text-[#FF6A00] transition-colors mb-16 animate-slideUp"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK
        </Link>

        {/* Two Column Layout (40/60) */}
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-24 items-start">

          {/* Left: Simple Image */}
          <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 animate-slideUp" style={{ animationDelay: '100ms' }}>
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Plain Text Content */}
          <div className="space-y-12 text-black text-lg leading-relaxed antialiased" style={{ color: '#000000' }}>

            <div className="animate-slideUp" style={{ animationDelay: '200ms' }}>
              <p className="font-bold mb-4">THE PROBLEM</p>
              <p>{study.problem}</p>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '300ms' }}>
              <p className="font-bold mb-4">THE ROOT CAUSE</p>
              <p>{study.rootCause}</p>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '400ms' }}>
              <p className="font-bold mb-4">THE SOLUTION</p>
              <p>{study.solution}</p>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '500ms' }}>
              <p className="font-bold mb-4 text-[#FF6A00]">THE RESULT</p>
              <p className="font-bold">{study.result}</p>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '600ms' }}>
              <p className="font-bold mb-4">THE TAKEAWAY</p>
              <p>{study.takeaway}</p>
            </div>

          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideUp {
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
