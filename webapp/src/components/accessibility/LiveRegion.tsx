'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface LiveRegionProps {
  children: ReactNode;
  /**
   * 'polite': Waits for a pause in speech
   * 'assertive': Interrupts current speech
   */
  priority?: 'polite' | 'assertive';
  /**
   * 'status': For status updates
   * 'alert': For important messages
   */
  role?: 'status' | 'alert';
  className?: string;
}

/**
 * Live Region Component for Dynamic Content Announcements
 *
 * WCAG 4.1.3: Status Messages
 *
 * Use this to announce dynamic content changes to screen readers
 *
 * Example:
 * <LiveRegion priority="assertive" role="alert">
 *   Form submitted successfully!
 * </LiveRegion>
 */
export function LiveRegion({
  children,
  priority = 'polite',
  role = 'status',
  className,
}: LiveRegionProps) {
  const regionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={regionRef}
      role={role}
      aria-live={priority}
      aria-atomic="true"
      className={className || 'sr-only'}
    >
      {children}
    </div>
  );
}

/**
 * Hook for programmatic announcements
 */
export function useScreenReaderAnnouncement() {
  const regionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create live region if it doesn't exist
    if (!regionRef.current) {
      const region = document.createElement('div');
      region.setAttribute('role', 'status');
      region.setAttribute('aria-live', 'polite');
      region.setAttribute('aria-atomic', 'true');
      region.className = 'sr-only';
      document.body.appendChild(region);
      regionRef.current = region;
    }

    return () => {
      if (regionRef.current && document.body.contains(regionRef.current)) {
        document.body.removeChild(regionRef.current);
      }
    };
  }, []);

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (regionRef.current) {
      regionRef.current.setAttribute('aria-live', priority);
      regionRef.current.textContent = message;

      // Clear after announcement
      setTimeout(() => {
        if (regionRef.current) {
          regionRef.current.textContent = '';
        }
      }, 1000);
    }
  };

  return announce;
}
