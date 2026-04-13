'use client';

import Link from 'next/link';
import { Tool } from '@/lib/tools-data';

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Outreach:   { bg: '#FFF4EB', text: '#FF6A00' },
  Assessment: { bg: '#FFF4EB', text: '#FF6A00' },
  Strategy:   { bg: '#FFF4EB', text: '#FF6A00' },
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const cat = CATEGORY_COLORS[tool.category] ?? { bg: '#FFF4EB', text: '#FF6A00' };

  return (
    <Link href={`/tools/${tool.slug}`}
      className="group flex flex-col bg-white border border-[#E5E5E5] rounded-3xl p-6 hover:border-[#FF6A00]/30 hover:shadow-md transition-all duration-300">

      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md"
          style={{ background: cat.bg, color: cat.text }}>
          {tool.category}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md text-[#9CA3AF]"
          style={{ background: '#F3F4F6' }}>
          {tool.badge}
        </span>
        {tool.isNew && (
          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md"
            style={{ background: '#FF6A00', color: '#fff' }}>
            New
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 group-hover:text-[#FF6A00] transition-colors leading-snug">
        {tool.title}
      </h3>

      <p className="text-sm text-[#6B7280] leading-relaxed mb-6 flex-grow font-medium">
        {tool.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#FF6A00] transition-colors flex items-center gap-1">
          View tool
          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md"
          style={{ background: '#FFF4EB', color: '#FF6A00' }}>
          Free
        </span>
      </div>
    </Link>
  );
}
