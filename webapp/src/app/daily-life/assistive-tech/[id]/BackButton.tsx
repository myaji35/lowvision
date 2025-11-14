'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  return (
    <div className="mb-6">
      <Button variant="ghost" onClick={() => router.back()} className="gap-2">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        <span>뒤로 가기</span>
      </Button>
    </div>
  );
}
