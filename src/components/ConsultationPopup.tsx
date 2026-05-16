'use client';

import { useState, useEffect } from 'react';

export default function ConsultationPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const initialTimer = setTimeout(() => {
            setShouldRender(true);
            requestAnimationFrame(() => setIsVisible(true));
        }, 120000); // 2 minutes initial

        return () => clearTimeout(initialTimer);
    }, []);

    // Lock body scroll when open
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isVisible]);

    const closePopup = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShouldRender(false);
            setTimeout(() => {
                setShouldRender(true);
                requestAnimationFrame(() => setIsVisible(true));
            }, 180000); // 3 minutes later
        }, 300);
    };

    const handleConsultation = () => {
        window.open('https://wa.me/919667353913?text=I%20want%20to%20get%20an%20AI%20consultation', '_blank');
        closePopup();
    };

    if (!shouldRender) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={closePopup}
                className={`fixed inset-0 z-[199] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Centered Square Modal */}
            <div className={`fixed inset-0 z-[200] flex items-center justify-center px-4 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="relative bg-white w-[420px] h-[420px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-gray-100 overflow-hidden flex flex-col p-6">

                    {/* Close Button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors z-10"
                        aria-label="Close"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center shrink-0">
                            <div className="w-6 h-6 rounded-lg bg-[#FF6A00] flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-extrabold text-[#0A0A0A] tracking-tight leading-none mb-0.5">Stay Connected!</h3>
                            <p className="text-[#6B7280] font-medium text-[10px]">Get exclusive insights</p>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-extrabold text-[#0A0A0A] tracking-tight text-center mb-3 pb-3 border-b border-[#E5E5E5]">
                        Live chat with CEO
                    </h2>

                    {/* Testimonial */}
                    <div className="bg-[#FFF9F4] border border-[#FF6A00]/10 rounded-xl p-4 mb-4 flex-1 flex flex-col justify-between">
                        <p className="text-[#374151] font-medium leading-relaxed italic text-sm">
                            &quot;The insights from our consultation were a game-changer. We identified key areas for automation that we hadn&apos;t even considered.&quot;
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                            <div className="w-8 h-8 shrink-0">
                                <img
                                    src="/testimonials/tushar.webp"
                                    alt="Tushar mangla"
                                    className="w-full h-full rounded-lg object-cover border border-[#FF6A00]/10 shadow-sm"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-[#0A0A0A] leading-none mb-0.5 text-sm">Tushar mangla</div>
                                <div className="text-[10px] text-[#6B7280] font-medium">CEO, Tech Innovators</div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={handleConsultation}
                            className="w-full bg-[#FF6A00] text-white py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-orange-500/10 hover:bg-[#E55F00] transition-all"
                        >
                            Get AI Consultation
                        </button>
                        <button
                            onClick={closePopup}
                            className="w-full bg-[#F1F3F5] text-[#374151] py-2.5 rounded-xl font-bold text-sm hover:bg-[#E9ECEF] transition-colors"
                        >
                            Maybe Later
                        </button>
                    </div>

                    <p className="text-[10px] text-[#9CA3AF] text-center font-medium mt-3">
                        No spam, unsubscribe at any time. We respect your privacy.
                    </p>
                </div>
            </div>
        </>
    );
}

