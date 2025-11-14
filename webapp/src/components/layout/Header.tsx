'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ThemeSwitcher } from '@/components/accessibility/ThemeSwitcher';
import { FontSizeControl } from '@/components/accessibility/FontSizeControl';
import { KeyboardShortcuts } from '@/components/accessibility/KeyboardShortcuts';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">한국저시력인협회</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav aria-label="메인 네비게이션" className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>저시력 바로 알기</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/diagnosis"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground bg-primary/5 border border-primary/20"
                          >
                            <div className="text-sm font-medium leading-none text-primary flex items-center justify-between gap-2">
                              <span>📚 전체 보기 (개요)</span>
                              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                                <span className="text-xs">⇧</span>1
                              </kbd>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              저시력의 모든 것을 한눈에
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/diagnosis/what-is-low-vision"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              저시력이란?
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              저시력의 정의와 증상 이해하기
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/diagnosis/causes"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              원인 질환
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              황반변성, 녹내장 등 주요 질환
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/diagnosis/first-steps"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              진단 직후 가이드
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              진단 후 무엇을 해야 하나요?
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>적응과 지원</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/adaptation/mental-health"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none flex items-center justify-between gap-2">
                              <span>저시력과 마음 건강</span>
                              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                                <span className="text-xs">⇧</span>2
                              </kbd>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              본인 및 가족 심리 가이드
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/adaptation/family-support"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              가족 및 보호자 지원
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              가족의 역할과 지원 프로그램
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>독립적인 삶</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/daily-life/assistive-tech"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none flex items-center justify-between gap-2">
                              <span>최신 보조공학</span>
                              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                                <span className="text-xs">⇧</span>3
                              </kbd>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              2025+ AI 기반 보조기기
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/daily-life/rehabilitation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              재활 및 교육
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              보행 및 일상생활 훈련
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/rights/welfare-benefits"
                      className="group inline-flex h-10 w-max items-center justify-center gap-2 rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <span>권리와 복지</span>
                      <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-70">
                        <span className="text-xs">⇧</span>4
                      </kbd>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/community"
                      className="group inline-flex h-10 w-max items-center justify-center gap-2 rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <span>협회 소식</span>
                      <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-70">
                        <span className="text-xs">⇧</span>5
                      </kbd>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <KeyboardShortcuts />
            <FontSizeControl />
            <ThemeSwitcher />
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary min-w-[2.75rem] min-h-[2.75rem]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      {mobileMenuOpen && (
        <nav
          className="lg:hidden border-t bg-background"
          aria-label="모바일 메인 네비게이션"
        >
          <div className="container px-4 py-4 space-y-3">
            {/* 모바일 접근성 컨트롤 */}
            <div className="flex items-center gap-4 pb-3 border-b md:hidden">
              <KeyboardShortcuts />
              <FontSizeControl />
              <ThemeSwitcher />
            </div>

            {/* 저시력 바로 알기 */}
            <div className="space-y-2">
              <div className="font-semibold text-sm px-3 py-2">저시력 바로 알기</div>
              <Link
                href="/diagnosis"
                className="block px-3 py-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                📚 전체 보기 (개요)
              </Link>
              <Link
                href="/diagnosis/what-is-low-vision"
                className="block px-3 py-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                저시력이란?
              </Link>
              <Link
                href="/diagnosis/causes"
                className="block px-3 py-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                원인 질환
              </Link>
              <Link
                href="/diagnosis/first-steps"
                className="block px-3 py-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                진단 직후 가이드
              </Link>
            </div>

            {/* 적응과 지원 */}
            <div className="space-y-2">
              <div className="font-semibold text-sm px-3 py-2">적응과 지원</div>
              <Link
                href="/adaptation/mental-health"
                className="block px-3 py-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                저시력과 마음 건강
              </Link>
              <Link
                href="/adaptation/family-support"
                className="block px-3 py-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                가족 및 보호자 지원
              </Link>
            </div>

            {/* 독립적인 삶 */}
            <div className="space-y-2">
              <div className="font-semibold text-sm px-3 py-2">독립적인 삶</div>
              <Link
                href="/daily-life/assistive-tech"
                className="block px-3 py-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                최신 보조공학
              </Link>
              <Link
                href="/daily-life/rehabilitation"
                className="block px-3 py-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                재활 및 교육
              </Link>
            </div>

            {/* 권리와 복지 */}
            <Link
              href="/rights/welfare-benefits"
              className="block px-3 py-2 rounded-md font-semibold hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              권리와 복지
            </Link>

            {/* 협회 소식 */}
            <Link
              href="/community"
              className="block px-3 py-2 rounded-md font-semibold hover:bg-accent focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              협회 소식
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
