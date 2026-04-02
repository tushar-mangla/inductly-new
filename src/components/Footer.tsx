import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-[#e5e5e5]">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#0A0A0A] rounded flex items-center justify-center text-white text-[10px] font-bold">R</div>
                        <span className="text-sm font-semibold text-[#0A0A0A] tracking-tight">RecruitmentOS</span>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-[#9ca3af]">
                        <Link href="#features" className="hover:text-[#0A0A0A] transition-colors">Features</Link>
                        <Link href="#results" className="hover:text-[#0A0A0A] transition-colors">Results</Link>
                        <Link href="#faq" className="hover:text-[#0A0A0A] transition-colors">FAQ</Link>
                        <Link href="https://smallgrp.com" target="_blank" className="hover:text-[#0A0A0A] transition-colors">About</Link>
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
