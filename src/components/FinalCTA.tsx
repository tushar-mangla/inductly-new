'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const faqs = [
    {
        q: "What's the difference between Build and Run?",
        a: "Build is a one-time setup process where the entire BD engine is designed and configured. Run is the ongoing monthly operation and optimization of that system.",
    },
    {
        q: "How are the leads sourced?",
        a: "Leads are sourced through daily signal scraping, enrichment systems, and niche-specific filtering to find verified hiring-manager contacts.",
    },
    {
        q: "Do you really turn agencies down?",
        a: "Yes. RecruitmentOS follows strict qualification rules and only works with agencies that match the required niche and revenue criteria.",
    },
    {
        q: "What counts as a qualified meeting?",
        a: "A qualified meeting follows a predefined Qualified Meeting Definition agreed before outreach begins.",
    },
    {
        q: "How does the 10-Leads-a-Day campaign work?",
        a: "Agencies apply with their niche and business details. Approved agencies receive 10 verified hiring-manager leads every day for 30 days.",
    },
    {
        q: "What if we cancel Run mid-month?",
        a: "RecruitmentOS works on a 30-day notice policy and provides full handover documentation during exit.",
    },
    {
        q: "Why WhatsApp?",
        a: "WhatsApp allows direct and faster communication with Tushar for support and discussions.",
    },
    {
        q: "How do you handle niche specificity?",
        a: "Every agency gets a custom ICP map, signal sources, and targeting system built specifically for their recruitment niche.",
    },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border-b border-[#e5e5e5] last:border-b-0">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                aria-expanded={open}
            >
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#0A0A0A] group-hover:text-[#F97316] transition-colors leading-snug">
                    {q}
                </span>
                <span
                    className="flex-shrink-0 w-5 h-5 rounded-full border border-[#d1d5db] flex items-center justify-center transition-transform duration-300"
                    style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </span>
            </button>
            <div
                ref={bodyRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open ? (bodyRef.current?.scrollHeight ?? 500) + 'px' : '0px' }}
            >
                <p className="pb-4 text-sm text-[#6b7280] leading-relaxed pr-6">
                    {a}
                </p>
            </div>
        </div>
    );
}

function ContactForm() {
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const MAX_CHARS = 600;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        const data = new FormData(form);
        data.append('access_key', '0e7ac89b-a20a-4df5-a7b9-b5fc081df584');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
            });
            if (res.ok) {
                setSubmitted(true);
                form.reset();
                setMessage('');
            }
        } catch {
            // silently fail
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-14 h-14 rounded-full bg-[#F97316]/10 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">Message Sent!</h3>
                <p className="text-[#6b7280] text-sm">Our team will get back to you within 24 hours.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-[#F97316] font-medium hover:underline"
                >
                    Send another message →
                </button>
            </div>
        );
    }

    const inputClass = "w-full bg-[#F9FAFB] border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all";
    const labelClass = "block text-xs font-semibold text-[#374151] mb-1.5 tracking-wide uppercase";

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className={labelClass}>
                        First Name <span className="text-[#F97316] normal-case font-normal">(Required)</span>
                    </label>
                    <input
                        type="text"
                        name="first_name"
                        required
                        placeholder="John"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className={labelClass}>
                        Last Name <span className="text-[#F97316] normal-case font-normal">(Required)</span>
                    </label>
                    <input
                        type="text"
                        name="last_name"
                        required
                        placeholder="Smith"
                        className={inputClass}
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label className={labelClass}>
                    Email <span className="text-[#F97316] normal-case font-normal">(Required)</span>
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@agency.com"
                    className={inputClass}
                />
            </div>

            {/* Phone */}
            <div>
                <label className={labelClass}>
                    Phone <span className="text-[#F97316] normal-case font-normal">(Required)</span>
                </label>
                <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                />
            </div>

            {/* Company Website URL */}
            <div>
                <label className={labelClass}>Company Website URL</label>
                <input
                    type="url"
                    name="company_website"
                    placeholder="https://youragency.com"
                    className={inputClass}
                />
            </div>

            {/* Message */}
            <div>
                <label className={labelClass}>
                    Tell us about your project <span className="text-[#F97316] normal-case font-normal">(Required)</span>
                </label>
                <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={MAX_CHARS}
                    placeholder="Share your niche, current BD process, and what you're looking to achieve..."
                    className={`${inputClass} resize-none`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <p className="text-[11px] text-[#9CA3AF] mt-1">{message.length} of {MAX_CHARS} max characters</p>
            </div>

            {/* How did you hear */}
            <div>
                <label className={labelClass}>How did you hear about us?</label>
                <input
                    type="text"
                    name="referral"
                    placeholder="LinkedIn, referral, Google..."
                    className={inputClass}
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A0A0A] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#1a1a1a] transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
                {loading ? 'Sending…' : 'Submit'}
            </button>
        </form>
    );
}

export default function FinalCTA() {
    const calRef = useRef<HTMLDivElement>(null);
    const [calVisible, setCalVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCalVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px' }
        );
        if (calRef.current) observer.observe(calRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 sm:py-24 md:py-36 bg-[#FAFAFA] border-t border-[#e5e5e5]" id="contact">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

                {/* Section header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0A0A0A] tracking-tight leading-[1.1] mb-5">
                        Ready to Scale Your Pipeline Fast?
                    </h2>
                    <p className="text-lg md:text-xl text-[#6b7280] max-w-[520px] mx-auto leading-relaxed">
                        Join 10+ agencies already using RecruitmentOS to automate their pipeline and grow revenue — without hiring more people.
                    </p>
                </div>

                {/* Two-column: FAQ left, Form right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-16">

                    {/* LEFT — FAQ */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-5 tracking-tight">
                            Frequently Asked Questions
                        </h3>
                        <div className="bg-white rounded-2xl border border-[#e5e5e5] px-5 sm:px-7 shadow-sm">
                            {faqs.map((item, i) => (
                                <FAQItem key={i} q={item.q} a={item.a} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Contact Form */}
                    <div className="bg-white rounded-2xl border border-[#e5e5e5] shadow-sm px-6 sm:px-8 py-8">
                        <div className="w-full bg-[#0A0A0A] rounded-xl px-6 py-4 mb-6 flex items-center justify-center">
                            <h3
                                className="text-base sm:text-lg font-bold text-white whitespace-nowrap tracking-tight text-center"
                                style={{ textShadow: '0 0 12px rgba(255,255,255,0.8), 0 0 28px rgba(255,255,255,0.4), 0 0 50px rgba(255,255,255,0.2)' }}
                            >
                                Submit the form and our team will get in touch
                            </h3>
                        </div>

                        <ContactForm />
                    </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                    <Link
                        href="https://cal.com/tusharm/30min?user=tusharm"
                        target="_blank"
                        onClick={() => (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'Contact', { content_name: 'Book a Fit Call' })}
                        className="inline-flex items-center bg-[#0A0A0A] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold hover:bg-[#1a1a1a] transition-colors text-base sm:text-lg"
                    >
                        Book a Fit Call
                        <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>

                </div>

                {/* Cal.com Embed — lazy loaded */}
                <div ref={calRef} className="w-full max-w-[1000px] mx-auto rounded-2xl overflow-hidden border border-[#e5e5e5] h-[700px] bg-white shadow-sm ring-1 ring-black/5 mt-10">
                    {calVisible ? (
                        <iframe
                            src="https://cal.com/tusharm/30min?overlayCalendar=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Schedule a Demo"
                            className="w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#FAFAFA]">
                            <p className="text-[#9CA3AF] text-sm font-medium">Loading calendar…</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
