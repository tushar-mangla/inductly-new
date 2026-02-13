'use client';

import { useEffect } from 'react';

export default function UTMTracker() {
    useEffect(() => {
        // Extract UTM parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = urlParams.get('utm_source');
        const utmMedium = urlParams.get('utm_medium');
        const utmCampaign = urlParams.get('utm_campaign');
        const utmContent = urlParams.get('utm_content');
        const utmTerm = urlParams.get('utm_term');

        // If we have UTM parameters, send them to GA4
        if (utmContent && typeof window.gtag !== 'undefined') {
            window.gtag('event', 'page_view_with_utm', {
                campaign_source: utmSource,
                campaign_medium: utmMedium,
                campaign_name: utmCampaign,
                campaign_content: utmContent,
                campaign_term: utmTerm,
            });

            // Also set user properties for better tracking
            window.gtag('set', 'user_properties', {
                last_utm_content: utmContent,
                last_utm_campaign: utmCampaign,
            });
        }
    }, []);

    return null;
}
