/**
 * Skip to Main Content Link
 * WCAG 2.4.1: Bypass Blocks - Level A
 * Allows keyboard users to skip navigation and go directly to main content
 */
export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
    >
      본문으로 바로가기
    </a>
  );
}
