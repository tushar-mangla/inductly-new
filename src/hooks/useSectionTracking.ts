'use client';

import { useEffect, useRef } from 'react';
import { trackSectionView } from '@/lib/analytics';

export default function useSectionTracking(sectionName: string) {
    const sectionRef = useRef<HTMLElement>(null);
    const hasTracked = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTracked.current) {
                        hasTracked.current = true;
                        trackSectionView(sectionName);
                    }
                });
            },
            { threshold: 0.5 } // Track when 50% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [sectionName]);

    return sectionRef;
}
