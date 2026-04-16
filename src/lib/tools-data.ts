export type Tool = {
  slug: string;
  title: string;
  description: string;
  category: string;
  badge: string;
  isNew?: boolean;
  resourceUrl: string;
  embedUrl?: string;
  communityUrl?: string;
  videoUrl?: string;
  whatsInside: string[];
};

export const tools: Tool[] = [
  {
    slug: 'cold-email-writer',
    title: 'AI Cold Email Writer',
    description:
      'AI Cold Email Writer Agent — powered by Claude — uses a 48-law psychology system to write hyper-personalized outreach that books calls. Not templates. Not blasts. Emails that feel human.',
    category: 'Outreach',
    badge: 'Tool',
    isNew: true,
    resourceUrl: 'https://claude.ai/public/artifacts/c876e9cb-c44e-45ab-ae00-9ebc8c951c1f',
    embedUrl: 'https://claude.site/public/artifacts/c876e9cb-c44e-45ab-ae00-9ebc8c951c1f/embed',
    communityUrl: 'https://chat.whatsapp.com/I9PLSmDMJ06B6qYYVsRb0q?mode=gi_t',
    whatsInside: [
      'AI Cold Email Writer Agent powered by Claude',
      'Paste a candidate or client profile — get a personalized, psychology-backed cold email in seconds',
      '48-law psychology system for 3× reply rate lift',
      '4 email types built for different outreach scenarios',
    ],
  },
  {
    slug: 'ai-recruiting-skills',
    title: '6 Free AI Skills for Recruiters',
    description:
      'Recruiters: I just released 6 free AI skills built to handle the most time-consuming parts of your workflow — sourcing, screening, outreach, and more.',
    category: 'Strategy',
    badge: 'Tool',
    isNew: true,
    resourceUrl: 'https://github.com/tushar-mangla/recruitment-skills',
    communityUrl: 'https://chat.whatsapp.com/I9PLSmDMJ06B6qYYVsRb0q?mode=gi_t',
    whatsInside: [
      '6 free AI skills purpose-built for recruiters',
      'Automates the most time-consuming parts of the recruitment workflow',
      'Covers sourcing, screening, outreach, and more',
      'Open-source and ready to use immediately',
    ],
  },
];
