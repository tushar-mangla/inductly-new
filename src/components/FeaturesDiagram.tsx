'use client';

import React from 'react';

const features = [
    {
        title: 'Detect Hiring Signals',
        description: 'AI monitors job boards 24/7',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        position: 'top-left',
    },
    {
        title: 'Auto Source Candidates',
        description: 'Match from your database instantly',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        position: 'top-right',
    },
    {
        title: 'Scale Outreach',
        description: 'Hyper-personalized emails at scale',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        position: 'bottom-left',
    },
    {
        title: 'Find Decision Makers',
        description: 'Reach the right people first',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        position: 'bottom-right',
    },
];

// Arrow paths from center to each corner (SVG coordinates based on 800x500 viewBox)
const arrowPaths = [
    { d: 'M 400 250 C 300 250, 200 180, 140 120', delay: '0s' },      // top-left
    { d: 'M 400 250 C 500 250, 600 180, 660 120', delay: '0.4s' },    // top-right
    { d: 'M 400 250 C 300 250, 200 320, 140 380', delay: '0.8s' },    // bottom-left
    { d: 'M 400 250 C 500 250, 600 320, 660 380', delay: '1.2s' },    // bottom-right
];

export default function FeaturesDiagram() {
    return (
        <section className="py-12 sm:py-20 md:py-28 bg-white border-t border-[#e5e5e5]" id="solution-overview">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <p className="text-xs font-medium text-[#FF6A00] uppercase tracking-widest mb-3"></p>
                    <h2 className="text-[#0A0A0A] text-3xl md:text-4xl font-bold tracking-tight">
                        The Ultimate Automation Engine for Recruitment agencies.
                    </h2>
                </div>

                {/* Mobile Layout: stacked cards */}
                <div className="md:hidden relative bg-[#FAFAFA] border border-[#e5e5e5] rounded-3xl p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#FF6A00_1px,transparent_1px)] [background-size:20px_20px]" />
                    </div>

                    {/* Center Hub */}
                    <div className="relative z-10 flex flex-col items-center mb-8">
                        <div className="text-base font-extrabold text-[#0A0A0A] tracking-tight leading-none mb-1">
                            Recruitment<span className="text-[#FF6A00]">OS</span>
                        </div>
                        <img
                            src="/logos/robot.webp"
                            alt="RecruitmentOS AI Bot"
                            className="w-20 h-20 object-contain drop-shadow-lg mix-blend-multiply"
                        />
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="relative z-10 grid grid-cols-2 gap-3">
                        {features.map((feature) => (
                            <div key={feature.title} className="group">
                                <div className="bg-white border border-[#E5E5E5] rounded-2xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center text-[#FF6A00] mb-3">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-sm font-bold text-[#0A0A0A] leading-snug mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-[11px] text-[#9CA3AF] font-medium leading-snug">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout: diagram with SVG arrows */}
                <div className="hidden md:block relative bg-[#FAFAFA] border border-[#e5e5e5] rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#FF6A00_1px,transparent_1px)] [background-size:20px_20px]" />
                    </div>

                    {/* Diagram */}
                    <div className="relative w-full max-w-[800px] mx-auto" style={{ aspectRatio: '800 / 500' }}>

                        {/* SVG Arrows */}
                        <svg
                            viewBox="0 0 800 500"
                            fill="none"
                            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                        >
                            <defs>
                                {/* Arrowhead marker */}
                                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                    <polygon points="0 0, 8 3, 0 6" fill="#FF6A00" />
                                </marker>
                            </defs>

                            {arrowPaths.map((arrow, i) => (
                                <g key={i}>
                                    {/* Static faint path */}
                                    <path
                                        d={arrow.d}
                                        stroke="#E5E5E5"
                                        strokeWidth="2"
                                        fill="none"
                                        markerEnd="url(#arrowhead)"
                                    />
                                    {/* Animated flowing path */}
                                    <path
                                        d={arrow.d}
                                        stroke="#FF6A00"
                                        strokeWidth="2.5"
                                        fill="none"
                                        strokeDasharray="12 20"
                                        className="animate-flow"
                                        style={{ animationDelay: arrow.delay }}
                                    />
                                    {/* Animated traveling dot */}
                                    <circle r="4" fill="#FF6A00" className="animate-dot" style={{ animationDelay: arrow.delay }}>
                                        <animateMotion
                                            dur="2.5s"
                                            repeatCount="indefinite"
                                            begin={arrow.delay}
                                            path={arrow.d}
                                        />
                                    </circle>
                                    {/* Dot glow */}
                                    <circle r="8" fill="#FF6A00" opacity="0.2" className="animate-dot" style={{ animationDelay: arrow.delay }}>
                                        <animateMotion
                                            dur="2.5s"
                                            repeatCount="indefinite"
                                            begin={arrow.delay}
                                            path={arrow.d}
                                        />
                                    </circle>
                                </g>
                            ))}
                        </svg>

                        {/* Center Hub - Robot / Logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="flex flex-col items-center justify-center animate-pulse-slow">
                                <div className="text-xl font-extrabold text-[#0A0A0A] tracking-tight leading-none mb-1">
                                    Recruitment<span className="text-[#FF6A00]">OS</span>
                                </div>
                                <img
                                    src="/logos/robot.webp"
                                    alt="RecruitmentOS AI Bot"
                                    className="w-32 h-32 object-contain drop-shadow-lg mix-blend-multiply"
                                />
                            </div>
                        </div>

                        {/* Feature Cards */}
                        {features.map((feature, i) => {
                            const positionClasses = [
                                'top-0 left-0',
                                'top-0 right-0',
                                'bottom-0 left-0',
                                'bottom-0 right-0',
                            ];
                            return (
                                <div
                                    key={feature.title}
                                    className={`absolute ${positionClasses[i]} z-20 w-[160px] lg:w-[200px] group`}
                                >
                                    <div className="bg-white border border-[#E5E5E5] rounded-2xl p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(255,106,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] flex items-center justify-center text-[#FF6A00] mb-3 group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-[15px] font-bold text-[#0A0A0A] leading-snug mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-xs text-[#9CA3AF] font-medium leading-snug">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes flowDash {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -64; }
                }
                .animate-flow {
                    animation: flowDash 1.5s linear infinite;
                }
                .animate-pulse-slow {
                    animation: pulseSlow 3s ease-in-out infinite;
                }
                @keyframes pulseSlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(255,106,0,0.15); }
                    50% { box-shadow: 0 0 0 16px rgba(255,106,0,0); }
                }
            `}</style>
        </section>
    );
}
