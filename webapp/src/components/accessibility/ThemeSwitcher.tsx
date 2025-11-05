'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Theme } from '@/types';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'high-contrast');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div
      className="flex gap-2"
      role="group"
      aria-label="테마 선택"
    >
      <Button
        onClick={() => handleThemeChange('light')}
        variant={theme === 'light' ? 'default' : 'outline'}
        aria-pressed={theme === 'light'}
        aria-label="기본 모드"
      >
        기본
      </Button>
      <Button
        onClick={() => handleThemeChange('dark')}
        variant={theme === 'dark' ? 'default' : 'outline'}
        aria-pressed={theme === 'dark'}
        aria-label="다크 모드"
      >
        다크
      </Button>
      <Button
        onClick={() => handleThemeChange('high-contrast')}
        variant={theme === 'high-contrast' ? 'default' : 'outline'}
        aria-pressed={theme === 'high-contrast'}
        aria-label="고대비 모드"
      >
        고대비
      </Button>
    </div>
  );
}
