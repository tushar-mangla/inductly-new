import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-[#e5e5e5]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-5 text-[#9ca3af]">
                        <Link href="https://www.instagram.com/recruitmentos/" target="_blank" aria-label="Instagram" className="hover:text-[#F97316] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/company/recruitmentos/" target="_blank" aria-label="LinkedIn" className="hover:text-[#F97316] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </Link>
                        <Link href="#" target="_blank" aria-label="Facebook" className="hover:text-[#F97316] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-[#9ca3af]">
                        <Link href="/#services" className="hover:text-[#0A0A0A] transition-colors">Services</Link>
<Link href="https://smallgrp.com" target="_blank" className="hover:text-[#0A0A0A] transition-colors">About</Link>
                        <Link href="https://chat.whatsapp.com/I9PLSmDMJ06B6qYYVsRb0q?mode=gi_t" target="_blank" className="hover:text-[#0A0A0A] transition-colors">Join Our Community</Link>
                        <Link href="https://wa.me/919667353913" target="_blank" className="hover:text-[#0A0A0A] transition-colors">Live chat with CEO</Link>
                    </div>

                    <p className="text-xs text-[#9ca3af]">
                        &copy; {new Date().getFullYear()} RecruitmentOS by{' '}
                        <Link href="https://smallgrp.com" target="_blank" className="text-[#6b7280] hover:text-[#0A0A0A] transition-colors">
                            Small Group
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
