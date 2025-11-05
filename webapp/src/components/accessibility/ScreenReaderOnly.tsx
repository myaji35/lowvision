import { ReactNode } from 'react';

interface ScreenReaderOnlyProps {
  children: ReactNode;
  as?: 'span' | 'div' | 'p';
}

/**
 * Screen Reader Only Component
 *
 * Visually hides content but keeps it accessible to screen readers
 * WCAG 2.4.1: Bypass Blocks
 */
export function ScreenReaderOnly({
  children,
  as: Component = 'span'
}: ScreenReaderOnlyProps) {
  return (
    <Component className="sr-only">
      {children}
    </Component>
  );
}

/**
 * Use this for decorative icons that don't need to be announced
 */
export function AriaHidden({ children }: { children: ReactNode }) {
  return (
    <span aria-hidden="true">
      {children}
    </span>
  );
}
