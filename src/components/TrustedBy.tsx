import Image from 'next/image';

export default function TrustedBy() {
    return (
        <section className="py-10 md:py-14 bg-[#F8FAFC] border-b-2 border-[#1E293B]/10">
            <div className="max-w-[1280px] mx-auto px-5 text-center">
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#94A3B8] mb-6 sm:mb-8">
                    Trusted by Recruiting Agencies
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
                    {/* Call It Recruiting */}
                    <div className="flex items-center opacity-75 hover:opacity-100 transition-opacity">
                        <Image
                            src="/logos/call-it-recruiting-logo.webp"
                            alt="Call It Recruiting"
                            width={160}
                            height={48}
                            className="object-contain h-9 sm:h-11 w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
