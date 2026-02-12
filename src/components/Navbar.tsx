import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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
                            <span className="text-2xl font-black text-[#1E293B] tracking-tighter">Inductly</span>
                            <span className="text-[10px] text-[#475569] font-bold uppercase tracking-widest mt-0.5">by Small Group</span>
                        </div>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { name: 'Solutions', href: '#solutions' },
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

                    {/* CTA Button */}
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        className="bg-[#1E293B] text-white px-6 py-3 rounded-xl font-black transition-all hover:translate-y-[-2px] btn-shadow text-sm"
                    >
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
}
