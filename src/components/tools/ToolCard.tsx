'use client';

import Link from 'next/link';
import { Tool } from '@/lib/tools-data';

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Outreach:   { bg: '#fff3e8', text: '#c2410c' },
  Assessment: { bg: '#e8f5ef', text: '#1a6b4a' },
  Strategy:   { bg: '#eff6ff', text: '#1d4ed8' },
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const cat = CATEGORY_COLORS[tool.category] ?? { bg: '#f3f4f6', text: '#374151' };

  return (
    <Link href={`/tools/${tool.slug}`}
      className="group block bg-white border border-[#e5e5e5] rounded-[10px] p-6 hover:border-[#1a6b4a] hover:shadow-md transition-all duration-200">

      <div className="flex items-center gap-2 mb-4">
        <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[2px]"
          style={{ background: cat.bg, color: cat.text, fontFamily: 'var(--font-mono)' }}>
          {tool.category}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[2px]"
          style={{ background: '#f3f4f6', color: '#6b7280', fontFamily: 'var(--font-mono)' }}>
          {tool.badge}
        </span>
        {tool.isNew && (
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[2px]"
            style={{ background: '#F97316', color: '#fff', fontFamily: 'var(--font-mono)' }}>
            New
          </span>
        )}
      </div>

      <h3 className="text-xl text-[#0d0d0d] mb-2 group-hover:text-[#1a6b4a] transition-colors"
        style={{ fontFamily: 'var(--font-serif)' }}>
        {tool.title}
      </h3>

      <p className="text-sm text-[#6b7280] leading-relaxed mb-5"
        style={{ fontFamily: 'var(--font-outfit)' }}>
        {tool.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#0d0d0d] group-hover:text-[#1a6b4a] transition-colors"
          style={{ fontFamily: 'var(--font-outfit)' }}>
          View tool →
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded-full"
          style={{ background: '#e8f5ef', color: '#1a6b4a', fontFamily: 'var(--font-mono)' }}>
          Free
        </span>
      </div>
    </Link>
  );
}
