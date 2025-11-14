'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Keyboard } from 'lucide-react';

interface Shortcut {
  key: string;
  description: string;
  path: string;
}

export function KeyboardShortcuts() {
  const router = useRouter();
  const [showHelp, setShowHelp] = useState(false);

  // 테마 전환 함수
  const toggleTheme = (theme: 'light' | 'dark' | 'contrast') => {
    const root = document.documentElement;

    // 기존 테마 클래스 제거
    root.classList.remove('light', 'dark', 'contrast');

    // 새 테마 적용
    root.classList.add(theme);

    // localStorage에 저장
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 입력 필드에서는 단축키 비활성화
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      // Shift 키가 눌린 경우만 처리
      if (!e.shiftKey) {
        return;
      }

      let path = '';

      switch (e.key) {
        case '!': path = '/diagnosis'; break;          // Shift + 1
        case '@': path = '/adaptation/mental-health'; break;  // Shift + 2
        case '#': path = '/daily-life/assistive-tech'; break; // Shift + 3
        case '$': path = '/rights/welfare-benefits'; break;   // Shift + 4
        case '%': path = '/community'; break;          // Shift + 5
        case 'H': path = '/'; break;                   // Shift + H
        case 'D':                                       // Shift + D (Dark mode)
          e.preventDefault();
          toggleTheme('dark');
          return;
        case 'L':                                       // Shift + L (Light mode)
          e.preventDefault();
          toggleTheme('light');
          return;
        case 'C':                                       // Shift + C (High contrast)
          e.preventDefault();
          toggleTheme('contrast');
          return;
        case '?':
          e.preventDefault();
          setShowHelp(true);
          return;
      }

      if (path) {
        e.preventDefault();
        router.push(path);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  const shortcuts: Shortcut[] = [
    { key: 'Shift + H', description: '홈으로 이동', path: '/' },
    { key: 'Shift + 1', description: '저시력 바로 알기', path: '/diagnosis' },
    { key: 'Shift + 2', description: '적응과 지원', path: '/adaptation/mental-health' },
    { key: 'Shift + 3', description: '독립적인 삶', path: '/daily-life/assistive-tech' },
    { key: 'Shift + 4', description: '권리와 복지', path: '/rights/welfare-benefits' },
    { key: 'Shift + 5', description: '협회 소식', path: '/community' },
    { key: 'Shift + L', description: '라이트 모드', path: '' },
    { key: 'Shift + D', description: '다크 모드', path: '' },
    { key: 'Shift + C', description: '고대비 모드', path: '' },
    { key: 'Shift + ?', description: '단축키 도움말', path: '' },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowHelp(true)}
        className="flex items-center gap-2"
        aria-label="키보드 단축키 도움말"
      >
        <Keyboard className="h-4 w-4" />
        <span className="hidden md:inline">단축키</span>
      </Button>

      <Dialog open={showHelp} onOpenChange={setShowHelp}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">⌨️ 키보드 단축키</DialogTitle>
            <DialogDescription>
              Shift 키와 함께 아래 키를 누르면 빠르게 이동할 수 있습니다.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <p className="font-semibold mb-2">💡 사용 방법</p>
              <ul className="text-sm space-y-1">
                <li>• <strong>Shift</strong> 키를 누른 상태에서 숫자나 문자를 누르세요</li>
                <li>• 입력창에서는 작동하지 않습니다</li>
              </ul>
            </div>

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">단축키</th>
                  <th className="text-left py-2">설명</th>
                  <th className="text-left py-2">시험</th>
                </tr>
              </thead>
              <tbody>
                {shortcuts.map((shortcut, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">
                      <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">
                        {shortcut.key}
                      </kbd>
                    </td>
                    <td className="py-3">{shortcut.description}</td>
                    <td className="py-3">
                      {shortcut.path && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            router.push(shortcut.path);
                            setShowHelp(false);
                          }}
                        >
                          이동
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Button onClick={() => setShowHelp(false)} className="w-full">
              닫기
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
