'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b-2 border-[#1E293B]/10 py-4">
            <div className="max-w-[1280px] mx-auto px-6">
                <nav className="flex items-center justify-between gap-8">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[#1E293B] rounded-xl flex items-center justify-center text-white text-2xl font-black btn-shadow group-hover:translate-y-[-2px] transition-transform">
                            I
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl sm:text-2xl font-black text-[#1E293B] tracking-tighter">Inductly</span>
                            <span className="text-[10px] text-[#475569] font-bold uppercase tracking-widest mt-0.5 hidden sm:inline">by Small Group</span>
                        </div>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { name: 'Features', href: '#features' },
                            { name: 'How It Works', href: '#how-it-works' },
                            { name: 'Resources', href: '#resources' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[15px] font-bold text-[#475569] hover:text-[#1E293B] transition-colors tracking-tight`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://cal.com/tusharm/30min?user=tusharm"
                            target="_blank"
                            className="bg-[#1E293B] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-xs sm:text-sm"
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 md:hidden text-[#1E293B]"
                            aria-label="Toggle menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                {isMenuOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </>
                                ) : (
                                    <>
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Content */}
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-6 space-y-4 border-t-2 border-[#1E293B]/5 mt-4">
                        {[
                            { name: 'Features', href: '#features' },
                            { name: 'How It Works', href: '#how-it-works' },
                            { name: 'Resources', href: '#resources' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-lg font-bold text-[#475569] hover:text-[#1E293B] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
