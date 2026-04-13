'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Tool } from '@/lib/tools-data';
import ToolCard from './ToolCard';
import { useToolGate } from '@/hooks/useToolGate';

export default function ToolHub({ tools }: { tools: Tool[] }) {
  const { isUnlocked, isHydrated } = useToolGate();
  const router = useRouter();

  // Once hydrated, if not unlocked send to gate
  useEffect(() => {
    if (isHydrated && !isUnlocked) {
      router.replace('/tools/gate');
    }
  }, [isHydrated, isUnlocked, router]);

  // Show spinner while checking localStorage or while redirecting
  if (!isHydrated || !isUnlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#f5f2ec' }}>
        <span className="w-8 h-8 rounded-full border-2 border-[#1a6b4a] border-t-transparent animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ background: '#f5f2ec' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-24">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-[2px] mb-4"
            style={{ background: '#e8f5ef', color: '#1a6b4a', fontFamily: 'var(--font-mono)' }}>
            Free Resources
          </span>
          <h1 className="text-4xl sm:text-5xl text-[#0d0d0d] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
            Free Recruitment Tools
          </h1>
          <p className="text-lg text-[#6b7280] max-w-xl mx-auto" style={{ fontFamily: 'var(--font-outfit)' }}>
            Unlock once. Access everything.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>

      </div>
    </main>
  );
}
