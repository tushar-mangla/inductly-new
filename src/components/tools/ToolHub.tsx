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
      <main className="min-h-screen flex items-center justify-center bg-white">
        <span className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] border-t-transparent animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-24">

        <div className="mb-12">
          <p className="text-xs font-bold text-[#FF6A00] uppercase tracking-widest mb-3">
            Free Resources
          </p>
          <h1 className="text-[#0A0A0A] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Free Recruitment Tools
          </h1>
          <p className="text-[#6B7280] text-base sm:text-lg mt-3 max-w-xl font-medium">
            Unlock once. Access everything.
          </p>
        </div>

        <div className="max-w-2xl flex flex-col gap-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>

      </div>
    </main>
  );
}
