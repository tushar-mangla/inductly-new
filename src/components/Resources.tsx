'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import SkillsGateModal from './SkillsGateModal';

const resources = [
    {
        title: "6 Free AI Skills for Recruiters",
        description: "6 free AI skills built to handle the most time-consuming parts of your workflow — sourcing, screening, outreach, and more.",
        type: "Tool",
        li_duration: "Free Access",
        link: "__skills_gate__",
        image: "/resources/recruitment-skills.webp",
        cta: "Get Free Skills",
        icon: undefined
    },
    {
        title: "AI Hiring Blueprint E-book ",
        description: "A complete system to automate and scale recruitment with AI. Includes 25+ frameworks and 15+ workflows.",
        type: "Guide",
        li_duration: "30+ Pages",
        link: "https://recruitement-os.netlify.app/",
        image: "/resources/ai-hiring-blueprint.webp",
        cta: "Download Free Guide",
        icon: undefined
    },
    {
        title: "Get Free Recruitment AI systems template ",
        description: "Plug-and-play templates to build and automate your AI recruitment system instantly.",
        type: "Template",
        li_duration: "Get Free Access",
        link: "https://long-streetcar-093.notion.site/Recruitment-AI-System-Free-Audit-Resources-336434e7ef8c8037be1ed5df3f5d8f1d?pvs=73",
        cta: "Get Free Access",
        image: "/resources/ai-systems-template.webp",
        icon: undefined
    },
    {
        title: "Get FREE AI Audit",
        description: "A checklist to scan your current workflow for manual bottlenecks and optimization opportunities.",
        type: "Checklist",
        li_duration: "5 min prep",
        link: "https://recruitment-audit.netlify.app/",
        cta: "Scan Now",
        image: "/resources/ai-audit.webp",
        icon: undefined
    },
];

function LazyIframe({ src, height, title, allow, allowFullScreen, className, style }: {
    src: string;
    height?: string | number;
    title: string;
    allow?: string;
    allowFullScreen?: boolean;
    className?: string;
    style?: React.CSSProperties;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px' }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ height: height ? `${height}px` : undefined }} className="w-full">
            {visible ? (
                <iframe
                    src={src}
                    height={height}
                    width="100%"
                    title={title}
                    allow={allow}
                    allowFullScreen={allowFullScreen}
                    className={className}
                    style={{ border: 'none', ...style }}
                />
            ) : (
                <div className="w-full h-full min-h-[200px] bg-[#FAFAFA] animate-pulse rounded-xl" />
            )}
        </div>
    );
}

const GITHUB_URL = 'https://github.com/tushar-mangla/recruitment-skills';
const STORAGE_KEY = 'rOS_unlocked';

export default function Resources() {
    const [showModal, setShowModal] = useState(false);

    const handleSkillsClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true') {
            window.open(GITHUB_URL, '_blank');
        } else {
            setShowModal(true);
        }
    }, []);

    return (
        <>
        {showModal && <SkillsGateModal onClose={() => setShowModal(false)} redirectUrl={GITHUB_URL} />}
        <section className="pt-8 sm:pt-10 pb-16 sm:pb-24 md:pb-36 bg-white" id="resources">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14 md:mb-16">
                    <div className="max-w-2xl">
                        <p className="text-xs font-bold text-[#FF6A00] uppercase tracking-widest mb-3">Knowledge Base</p>
                        <h2 className="text-[#0A0A0A] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                            Resources to Scale Your Agency
                        </h2>
                    </div>
                </div>

                {/* Resource Cards Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-24 md:mb-32">
                    {resources.map((resource, index) => {
                        const cardInner = (
                            <>
                                <div className="relative aspect-[4/3] bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 overflow-hidden flex items-center justify-center group-hover:border-[#FF6A00]/20 transition-all duration-300">
                                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300">
                                        <div className="absolute inset-0 bg-[radial-gradient(#FF6A00_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
                                    </div>
                                    {resource.image ? (
                                        <img
                                            src={resource.image}
                                            alt={resource.title}
                                            loading="lazy"
                                            className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${index === 0 ? 'object-contain p-4' : 'object-cover'}`}
                                        />
                                    ) : (
                                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-[#E5E5E5] group-hover:scale-110 transition-transform duration-500">
                                            {resource.icon}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF6A00] bg-[#FFF4EB] px-2 py-1 rounded-md">
                                            {resource.type}
                                        </span>
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#9CA3AF]">
                                            {resource.li_duration}
                                        </span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-2 sm:mb-3 group-hover:text-[#FF6A00] transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-[#6B7280] text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                                        {resource.description}
                                    </p>
                                    <div className="mt-auto flex items-center text-sm font-bold text-[#0A0A0A] group-hover:gap-1 transition-all">
                                        {resource.cta || "Read Feature"}
                                        <svg className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </>
                        );

                        return resource.link === '__skills_gate__' ? (
                            <div key={index} onClick={handleSkillsClick} className="flex flex-col group cursor-pointer">
                                {cardInner}
                            </div>
                        ) : (
                            <Link key={index} href={resource.link} target="_blank" className="flex flex-col group">
                                {cardInner}
                            </Link>
                        );
                    })}
                </div>

                {/* Claude AI + MCP Feature Section */}
                <div className="mb-16 sm:mb-24 md:mb-32 border border-[#E5E5E5] rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="flex flex-col px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF6A00] bg-[#FFF4EB] px-2.5 py-1 rounded-md w-fit mb-4">
                            7-Step System
                        </span>
                        <h2 className="text-[#0A0A0A] text-xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-5 max-w-2xl">
                            How Recruiters Can Use Claude AI + MCP to Build a Full Recruitment Engine
                        </h2>
                        <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-medium mb-6 sm:mb-8 max-w-xl">
                            Think of Claude with MCP as your "AI recruiter brain" that connects with multiple tools and does the work for you. Instead of switching between 10 tools, you give instructions in plain English — and the system executes everything.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                            {["Apify", "Exa.ai", "Prospeo", "Lemlist", "Airtable", "RapidAPI"].map((tool) => (
                                <span key={tool} className="text-[10px] font-bold tracking-widest uppercase bg-[#F9FAFB] border border-[#E5E5E5] text-[#374151] px-2.5 py-1 rounded-md">
                                    {tool}
                                </span>
                            ))}
                        </div>
                        <Link
                            href="/resources/claude-mcp-recruitment-engine"
                            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#0A0A0A] text-white text-sm font-bold hover:bg-[#FF6A00] transition-colors w-fit group"
                        >
                            Read More
                            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* YouTube Video Section */}
                <div className="mb-16 sm:mb-24 md:mb-32">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-[#0A0A0A] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Learn how to implement AI in your business
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                        {[
                            "https://www.youtube.com/embed/pUzira_UPoU",
                            "https://www.youtube.com/embed/IyBPV82u4FI"
                        ].map((video, idx) => (
                            <div key={idx} className="bg-white border-[0.5px] border-[#E5E5E5] rounded-2xl p-2 sm:p-3 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.07)] hover:-translate-y-1 sm:hover:-translate-y-3 transition-all duration-500 ease-out group">
                                <div className="relative aspect-video rounded-xl overflow-hidden border-[0.5px] border-[#F3F4F6] bg-black shadow-inner">
                                    <LazyIframe
                                        src={video}
                                        title={`YouTube video ${idx + 1}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LinkedIn Feed Section */}
                <div className="pt-12 sm:pt-16 md:pt-20 border-t border-[#E5E5E5]">
                    <div className="mb-10 sm:mb-14 md:mb-16">
                        <p className="text-xs font-bold text-[#FF6A00] uppercase tracking-widest mb-3">Fresh Insights</p>
                        <h2 className="text-[#0A0A0A] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6">
                            Straight from LinkedIn
                        </h2>
                        <p className="text-[#6B7280] text-sm sm:text-base sm:text-lg max-w-2xl font-medium">
                            What we're building, learning, and achieving—shared openly with you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {[
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7444647634025406464?collapsed=1", h: "670" },
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7443408167159566336?collapsed=1", h: "670" },
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7434252974710878210?collapsed=1", h: "567" },
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7425284186292314112?collapsed=1", h: "567" },
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7429249511048491008?collapsed=1", h: "645" },
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7420553911931002881?collapsed=1", h: "670" },
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7445571343707910144?collapsed=1", h: "581" },
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7445098631516545024?collapsed=1", h: "670" },
                            { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7446272906940284928?collapsed=1", h: "670" }
                        ].map((post, idx) => (
                            <div key={idx} className="bg-white border border-[#E5E5E5] rounded-2xl sm:rounded-[2rem] p-3 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 sm:hover:-translate-y-3 transition-all duration-500 ease-out flex flex-col group">
                                <div className="rounded-xl sm:rounded-[1.5rem] overflow-hidden border border-[#F3F4F6] bg-[#FAFAFA]">
                                    <LazyIframe
                                        src={post.src}
                                        height={post.h}
                                        title={`LinkedIn post ${idx + 1}`}
                                        className="w-full opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
