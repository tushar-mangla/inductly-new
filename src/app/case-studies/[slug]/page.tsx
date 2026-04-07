'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { caseStudies } from '@/lib/case-studies-data';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies" className="text-[#FF6A00] font-bold">Back to List</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-32 animate-fadeIn">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center text-sm text-black hover:text-[#FF6A00] transition-colors mb-16 animate-slideUp"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO ALL STORIES
        </Link>

        <div className="animate-slideUp">
          {/* Title Section */}
          <h1 className="text-2xl md:text-3xl font-bold mb-16 max-w-5xl leading-tight">
            {study.title}
          </h1>

          {/* Two Column Layout (40/60) */}
          <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-24 items-start">

            {/* Left: Image */}
            <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6 text-black text-lg leading-snug antialiased" style={{ color: '#000000' }}>

              <div>
                <p className="font-bold mb-2">THE PROBLEM</p>
                <p className="whitespace-pre-line">{study.problem}</p>
              </div>

              <div>
                <p className="font-bold mb-2">THE ROOT CAUSE</p>
                <p className="whitespace-pre-line">{study.rootCause}</p>
              </div>

              <div>
                <p className="font-bold mb-2">THE SOLUTION</p>
                <p className="whitespace-pre-line">{study.solution}</p>
              </div>

              <div>
                <p className="font-bold mb-2 text-[#FF6A00]">THE RESULT</p>
                <p className="whitespace-pre-line">{study.result}</p>
              </div>

              <div>
                <p className="font-bold mb-2">THE TAKEAWAY</p>
                <p className="whitespace-pre-line">{study.takeaway}</p>
              </div>

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
