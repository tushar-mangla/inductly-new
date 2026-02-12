import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-20 bg-white text-[#1E293B] text-center border-t-2 border-[#1E293B]/10">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#1E293B] rounded-lg flex items-center justify-center text-white text-md font-black">I</div>
                        <span className="text-xl font-black tracking-tighter">Inductly</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-black uppercase tracking-widest text-[#475569]">
                        <Link href="#features" className="hover:text-[#1E293B]">Features</Link>
                        <Link href="#how-it-works" className="hover:text-[#1E293B]">How It Works</Link>
                        <Link href="#pricing" className="hover:text-[#1E293B]">Pricing</Link>
                        <Link href="https://smallgrp.com" target="_blank" className="hover:text-[#1E293B]">About Us</Link>
                    </div>

                    <div className="w-full h-px bg-[#1E293B]/10"></div>

                    <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-[#475569] font-bold">
                        <p>&copy; {new Date().getFullYear()} Inductly. All rights reserved.</p>
                        <p>Built by <Link href="https://smallgrp.com" className="text-[#1E293B] hover:underline">Small Group</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
