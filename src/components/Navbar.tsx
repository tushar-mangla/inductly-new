'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Features', href: '#features' },
        { name: 'Results', href: '#results' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className="sticky top-0 z-[100] nav-bg backdrop-blur-md border-b border-[var(--border-strong)]">
            <div className="max-w-[1100px] mx-auto px-8 py-3">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center font-serif text-[1.5rem] leading-none tracking-[-0.02em]">
                        <span className="text-[var(--ink)]">Recruitment</span>
                        <span className="text-[var(--coral)] ml-0.5">OS</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                {...('external' in link && link.external ? { target: '_blank' } : {})}
                                className="text-[0.85rem] font-sans text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://cal.com/tusharm/30min?user=tusharm"
                            target="_blank"
                            className="bg-[var(--accent)] text-white px-[22px] py-[10px] rounded-[4px] text-[0.85rem] font-medium hover:bg-[#0f6e56] transition-colors font-sans"
                        >
                            Book a Demo
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 md:hidden text-[var(--ink)]"
                        aria-label="Toggle menu"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            {isMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="4" y1="8" x2="20" y2="8" />
                                    <line x1="4" y1="16" x2="20" y2="16" />
                                </>
                            )}
                        </svg>
                    </button>
                </nav>

                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 space-y-3 border-t border-[var(--border-strong)] mt-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                {...('external' in link && link.external ? { target: '_blank' } : {})}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-[0.85rem] font-sans text-[var(--muted)] hover:text-[var(--ink)] transition-colors py-1"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://cal.com/tusharm/30min?user=tusharm"
                            target="_blank"
                            className="block bg-[var(--accent)] text-white px-5 py-2.5 rounded-[4px] text-[0.85rem] font-medium text-center mt-2 font-sans"
                        >
                            Book a Demo
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
