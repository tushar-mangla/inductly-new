'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

export default function useScrollTracking() {
    const scrollMilestones = useRef(new Set<number>());

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );

            // Track at 25%, 50%, 75%, 100%
            [25, 50, 75, 100].forEach((milestone) => {
                if (scrollPercent >= milestone && !scrollMilestones.current.has(milestone)) {
                    scrollMilestones.current.add(milestone);
                    trackScrollDepth(milestone);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
}
