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
    resourceUrl: 'https://github.com/tushar-mangla/recruiting-skills',
    communityUrl: 'https://chat.whatsapp.com/I9PLSmDMJ06B6qYYVsRb0q?mode=gi_t',
    whatsInside: [
      '6 free AI skills purpose-built for recruiters',
      'Automates the most time-consuming parts of the recruitment workflow',
      'Covers sourcing, screening, outreach, and more',
      'Open-source and ready to use immediately',
    ],
  },
  {
    slug: 'playbook',
    title: 'Recruitment OS Solutions Playbook',
    description:
      'Practical strategies to automate your pipeline, win more clients, and scale placements — built for ambitious recruitment agencies.',
    category: 'Strategy',
    badge: 'Guide',
    resourceUrl:
      'https://shy-bottle-afc.notion.site/Recruitment-AI-solutions-playbook-32ab18f67e3c80ab9b02e4840c2143af',
    communityUrl: 'https://chat.whatsapp.com/I9PLSmDMJ06B6qYYVsRb0q?mode=gi_t',
    whatsInside: [
      'Step-by-step AI strategies to automate sourcing, outreach, and client acquisition',
      'Private WhatsApp community of agency owners sharing AI tools and scripts',
      'Real-time recruitment wins and proven templates from top agencies',
      'End-to-end blueprint for scaling placements with fewer people',
    ],
  },
];
