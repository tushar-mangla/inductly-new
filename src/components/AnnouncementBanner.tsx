'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-[#001D3D] relative z-[100] border-b border-white/5">
            <div className="max-w-[1280px] mx-auto px-4 py-3 sm:py-2.5 flex items-center justify-center gap-4 text-center">
                <Link 
                    href="https://recruitment-audit.netlify.app/" 
                    target="_blank"
                    className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 group cursor-pointer"
                >
                    <span className="bg-[#00D47E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 animate-pulse">
                        NEW
                    </span>
                    <span className="text-white text-xs sm:text-sm font-medium hover:text-[#00D47E] transition-colors tracking-tight">
                        We're opening a FREE AI Audit for just 5 to 7 selected agencies. <span className="underline decoration-[#00D47E]/30 hidden sm:inline ml-1 font-bold">Claim yours here →</span>
                    </span>
                </Link>

                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 text-white/40 hover:text-white transition-colors"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    );
}
