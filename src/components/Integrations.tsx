"use client";

import Image from 'next/image';

export default function Integrations() {
    const integrations = [
        { name: 'Hunter', logo: '/logos/hunter.png' },
        { name: 'Lusha', logo: '/logos/lusha.png' },
        { name: 'Recruitee', logo: '/logos/recruitee.png' },
        { name: 'LinkedIn', logo: '/logos/linkedin.png' },
        { name: 'Indeed', logo: '/logos/indeed.png' },
        { name: 'Stepstone', logo: '/logos/stepstone.png' },
        { name: 'Instantly', logo: '/logos/instantly.png' },
        { name: 'Apollo', logo: '/logos/apollo.png' },
    ];

    return (
        <section className="py-16 sm:py-24 bg-[#F7FAFC] overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-[#1E293B] mb-4">
                        Seamless Integrations
                    </h2>
                    <p className="text-lg sm:text-xl text-[#475569] font-bold">
                        Works with the tools you already use
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative mb-8 overflow-hidden">
                    <div className="flex gap-6 animate-marquee">
                        {/* First set of logos */}
                        {integrations.map((integration, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 w-[140px] h-[140px] bg-white border border-[#262626] rounded-2xl flex flex-col items-center justify-center gap-3 p-4"
                            >
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={integration.logo}
                                        alt={integration.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-sm font-bold text-[#1E293B]">
                                    {integration.name}
                                </span>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {integrations.map((integration, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex-shrink-0 w-[140px] h-[140px] bg-white border border-[#262626] rounded-2xl flex flex-col items-center justify-center gap-3 p-4"
                            >
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={integration.logo}
                                        alt={integration.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-sm font-bold text-[#1E293B]">
                                    {integration.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-center text-sm sm:text-base text-[#475569] font-bold">
                    + Many more integrations available via API
                </p>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
