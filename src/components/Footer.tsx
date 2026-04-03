'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-8 bg-[var(--paper)] border-t border-[var(--border-strong)]">
            <div className="max-w-[1100px] mx-auto px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link href="/" className="flex items-center font-serif text-[1.3rem] tracking-tight">
                        <span className="text-[var(--ink)]">Recruitment</span>
                        <span className="text-[var(--coral)] ml-0.5">OS</span>
                    </Link>

                    <div className="flex items-center gap-6 text-[0.8rem] text-[var(--muted)] font-sans">
                        <Link href="#features" className="hover:text-[var(--ink)] transition-colors">Features</Link>
                        <Link href="#results" className="hover:text-[var(--ink)] transition-colors">Results</Link>
                        <Link href="https://recruitmentos-pricing.netlify.app/" target="_blank" className="hover:text-[var(--ink)] transition-colors">Pricing</Link>
                        <Link href="#faq" className="hover:text-[var(--ink)] transition-colors">FAQ</Link>
                        <Link href="https://smallgrp.com" target="_blank" className="hover:text-[var(--ink)] transition-colors">About</Link>
                    </div>

                    <p className="text-[0.8rem] text-[var(--muted)] font-sans">
                        &copy; {new Date().getFullYear()} RecruitmentOS by{' '}
                        <Link href="https://smallgrp.com" target="_blank" className="text-[var(--ink)] hover:text-[var(--muted)] transition-colors">
                            Small Group
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
