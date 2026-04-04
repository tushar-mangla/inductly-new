'use client';

import React from 'react';

export default function FeaturesDiagram() {
    return (
        <section className="py-20 md:py-28 bg-white border-t border-[#e5e5e5]" id="solution-overview">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-xs font-medium text-[#FF6A00] uppercase tracking-widest mb-3">At a Glance</p>
                    <h2 className="text-[#0A0A0A] text-3xl md:text-4xl font-bold tracking-tight">The ultimate automation engine for recruiting agencies.</h2>
                </div>

                <div className="relative bg-[#FAFAFA] border border-[#e5e5e5] rounded-3xl p-8 md:p-12 overflow-hidden flex items-center justify-center">
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#FF6A00_1px,transparent_1px)] [background-size:20px_20px]" />
                    </div>

                    <img 
                        src="/features-diagram.png" 
                        alt="Recruitment OS Solution Diagram" 
                        className="w-full max-w-[900px] h-auto relative z-10"
                    />
                </div>
            </div>
        </section>
    );
}
