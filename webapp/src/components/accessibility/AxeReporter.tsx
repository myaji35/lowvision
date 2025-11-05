'use client';

import { useEffect } from 'react';

/**
 * Axe Accessibility Reporter
 *
 * This component runs axe-core accessibility tests in development mode
 * and reports violations to the browser console.
 *
 * It only runs in development to avoid performance impact in production.
 */
export function AxeReporter() {
  useEffect(() => {
    // Only run in development mode and in the browser
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
      return;
    }

    // Dynamically import axe-core and React to avoid including them in production bundle
    Promise.all([
      import('@axe-core/react'),
      import('react'),
      import('react-dom'),
    ])
      .then(([axe, React, ReactDOM]) => {
        // Configure axe to run on this React app
        axe.default(React, ReactDOM, 1000, {
          rules: [
            // WCAG 2.2 Level AA rules
            { id: 'color-contrast', enabled: true },
            { id: 'link-name', enabled: true },
            { id: 'button-name', enabled: true },
            { id: 'image-alt', enabled: true },
            { id: 'label', enabled: true },
            { id: 'heading-order', enabled: true },
            { id: 'landmark-one-main', enabled: true },
            { id: 'page-has-heading-one', enabled: true },
            { id: 'bypass', enabled: true },
            { id: 'focus-order-semantics', enabled: true },
            { id: 'target-size', enabled: true }, // WCAG 2.5.8 (new in 2.2)
          ],
        });

        console.log(
          '%c🎯 Axe Accessibility Testing Enabled',
          'color: #0066cc; font-weight: bold; font-size: 14px;',
          '\nAccessibility violations will be logged to the console.'
        );
      })
      .catch((error) => {
        console.error('Failed to load axe-core:', error);
      });
  }, []);

  // This component doesn't render anything
  return null;
}
