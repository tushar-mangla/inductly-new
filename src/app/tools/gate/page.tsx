'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToolGate } from '@/hooks/useToolGate';
import ToolGateForm from '@/components/tools/ToolGateForm';

export default function GatePage() {
  const { isUnlocked, isHydrated } = useToolGate();
  const router = useRouter();

  // Already unlocked — send straight to tools
  useEffect(() => {
    if (isHydrated && isUnlocked) {
      router.replace('/tools');
    }
  }, [isHydrated, isUnlocked, router]);

  // Spinner while hydrating
  if (!isHydrated) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#f5f2ec' }}>
        <span className="w-8 h-8 rounded-full border-2 border-[#1a6b4a] border-t-transparent animate-spin" />
      </main>
    );
  }

  // Already unlocked — spinner while redirect fires
  if (isUnlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#f5f2ec' }}>
        <span className="w-8 h-8 rounded-full border-2 border-[#1a6b4a] border-t-transparent animate-spin" />
      </main>
    );
  }

  return <ToolGateForm />;
}
