'use client';

import { Button } from '@/components/ui/button';
import { useFontSize } from '@/hooks/useFontSize';
import type { FontSize } from '@/types';

/**
 * Font Size Control Component
 * WCAG 1.4.4: Resize text - Level AA
 * Allows users to increase text size up to 200% without assistive technology
 */
export function FontSizeControl() {
  const { fontSize, changeFontSize } = useFontSize();

  const fontSizeOptions: { value: FontSize; label: string; ariaLabel: string }[] = [
    { value: 'normal', label: '가', ariaLabel: '보통 크기' },
    { value: 'large', label: '가', ariaLabel: '큰 크기' },
    { value: 'x-large', label: '가', ariaLabel: '매우 큰 크기' },
  ];

  return (
    <div className="flex gap-1" role="group" aria-label="글자 크기 조절">
      {fontSizeOptions.map((option, index) => (
        <Button
          key={option.value}
          onClick={() => changeFontSize(option.value)}
          variant={fontSize === option.value ? 'default' : 'outline'}
          size="sm"
          aria-pressed={fontSize === option.value}
          aria-label={option.ariaLabel}
          className="min-w-[2.5rem]"
          style={{
            fontSize: index === 0 ? '0.875rem' : index === 1 ? '1rem' : '1.125rem',
          }}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
