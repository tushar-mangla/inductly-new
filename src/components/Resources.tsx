'use client';

import React from 'react';
import Link from 'next/link';

const resources = [
    {
        title: "AI Hiring Blueprint E-book ",
        description: "A complete system to automate and scale recruitment with AI. Includes 25+ frameworks and 15+ workflows.",
        type: "Guide",
        li_duration: "30+ Pages",
        link: "https://shy-bottle-afc.notion.site/Recruitment-AI-solutions-playbook-32ab18f67e3c80ab9b02e4840c2143af",
        image: "/resources/playbook.webp",
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
        image: "/resources/template.webp",
        icon: undefined
    },
    {
        title: "Get FREE AI Audit",
        description: "A checklist to scan your current workflow for manual bottlenecks and optimization opportunities.",
        type: "Checklist",
        li_duration: "5 min prep",
        link: "https://recruitment-audit.netlify.app/",
        cta: "Scan Now",
        image: "/resources/audit.png",
        icon: undefined
    }
];

export default function Resources() {
    return (
        <section className="pt-10 pb-20 sm:pb-28 md:pb-36 bg-white" id="resources">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <p className="text-xs font-bold text-[#FF6A00] uppercase tracking-widest mb-3">Knowledge Base</p>
                        <h2 className="text-[#0A0A0A] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                            Resources to Scale Your Agency
                        </h2>
                    </div>
                    <Link
                        href="#"
                        className="text-[#0A0A0A] font-semibold hover:text-[#FF6A00] transition-colors flex items-center group text-sm sm:text-base border-b border-[#0A0A0A]/10 pb-1"
                    >
                        View All Resources
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-32">
                    {resources.map((resource, index) => (
                        <Link
                            key={index}
                            href={resource.link}
                            target={resource.link.startsWith('http') ? '_blank' : '_self'}
                            className="flex flex-col group"
                        >
                            <div className="relative aspect-[4/3] bg-[#FAFAFA] border border-[#E5E5E5] rounded-3xl mb-6 overflow-hidden flex items-center justify-center group-hover:border-[#FF6A00]/20 transition-all duration-300">
                                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300">
                                    <div className="absolute inset-0 bg-[radial-gradient(#FF6A00_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
                                </div>
                                {resource.image ? (
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-[#E5E5E5] group-hover:scale-110 transition-transform duration-500">
                                        {resource.icon}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF6A00] bg-[#FFF4EB] px-2 py-1 rounded-md">
                                        {resource.type}
                                    </span>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#9CA3AF]">
                                        {resource.li_duration}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3 group-hover:text-[#FF6A00] transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-[#6B7280] text-sm leading-relaxed font-medium mb-6">
                                    {resource.description}
                                </p>
                                <div className="mt-auto flex items-center text-sm font-bold text-[#0A0A0A] group-hover:gap-1 transition-all">
                                    {resource.cta || "Read Feature"}
                                    <svg className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* YouTube Video Section */}
                <div className="mb-32">
                    <div className="mb-12">
                        <h2 className="text-[#0A0A0A] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Learn how to implement AI in your business
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 -mx-4 md:-mx-12 lg:-mx-20">
                        {[
                            "https://www.youtube.com/embed/pUzira_UPoU",
                            "https://www.youtube.com/embed/IyBPV82u4FI"
                        ].map((video, idx) => (
                            <div key={idx} className="bg-white border-[0.5px] border-[#E5E5E5] rounded-2xl p-3 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.07)] hover:-translate-y-3 transition-all duration-500 ease-out group">
                                <div className="relative aspect-video rounded-xl overflow-hidden border-[0.5px] border-[#F3F4F6] bg-black shadow-inner">
                                    <iframe
                                        src={video}
                                        className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                                        title={`YouTube video ${idx + 1}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LinkedIn Feed Section */}
                <div className="pt-20 border-t border-[#E5E5E5]">
                    <div className="mb-16">
                        <p className="text-xs font-bold text-[#FF6A00] uppercase tracking-widest mb-3">Fresh Insights</p>
                        <h2 className="text-[#0A0A0A] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                            Straight from LinkedIn
                        </h2>
                        <p className="text-[#6B7280] text-base sm:text-lg max-w-2xl font-medium">
                            What we’re building, learning, and achieving—shared openly with you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <div key={idx} className="bg-white border border-[#E5E5E5] rounded-[2rem] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 ease-out flex flex-col group">
                                <div className="rounded-[1.5rem] overflow-hidden border border-[#F3F4F6] bg-[#FAFAFA]">
                                    <iframe
                                        src={post.src}
                                        height={post.h}
                                        width="100%"
                                        frameBorder="0"
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
    );
}
