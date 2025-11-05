'use client';

import { useEffect, useState } from 'react';
import type { FontSize } from '@/types';

const FONT_SIZE_MAP: Record<FontSize, string> = {
  normal: '100%',
  large: '125%',
  'x-large': '150%',
};

export function useFontSize() {
  const [fontSize, setFontSize] = useState<FontSize>('normal');

  useEffect(() => {
    // Load font size from localStorage
    const savedFontSize = localStorage.getItem('fontSize') as FontSize | null;
    if (savedFontSize && savedFontSize in FONT_SIZE_MAP) {
      setFontSize(savedFontSize);
      applyFontSize(savedFontSize);
    }
  }, []);

  const applyFontSize = (newFontSize: FontSize) => {
    document.documentElement.style.fontSize = FONT_SIZE_MAP[newFontSize];
    localStorage.setItem('fontSize', newFontSize);
  };

  const changeFontSize = (newFontSize: FontSize) => {
    setFontSize(newFontSize);
    applyFontSize(newFontSize);
  };

  return {
    fontSize,
    changeFontSize,
  };
}
