'use client';

import { ReactNode } from 'react';
import useSectionTracking from '@/hooks/useSectionTracking';

interface TrackableSectionProps {
    sectionName: string;
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function TrackableSection({ sectionName, children, className, id }: TrackableSectionProps) {
    const sectionRef = useSectionTracking(sectionName);

    return (
        <section ref={sectionRef} className={className} id={id}>
            {children}
        </section>
    );
}
