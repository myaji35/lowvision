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

    // Dynamically import axe-core to avoid including it in production bundle
    import('axe-core')
      .then((axe) => {
        // Run accessibility tests after initial render
        const runAxe = () => {
          axe.default.run(document, {
            rules: {
              // WCAG 2.2 Level AA rules
              'color-contrast': { enabled: true },
              'link-name': { enabled: true },
              'button-name': { enabled: true },
              'image-alt': { enabled: true },
              'label': { enabled: true },
              'heading-order': { enabled: true },
              'landmark-one-main': { enabled: true },
              'page-has-heading-one': { enabled: true },
              'bypass': { enabled: true },
              'focus-order-semantics': { enabled: true },
              'target-size': { enabled: true }, // WCAG 2.5.8 (new in 2.2)
            },
          })
            .then((results) => {
              if (results.violations.length === 0) {
                console.log(
                  '%c✅ No accessibility violations found!',
                  'color: #00aa00; font-weight: bold; font-size: 14px;'
                );
              } else {
                console.log(
                  '%c⚠️ Accessibility Violations Found',
                  'color: #ff6600; font-weight: bold; font-size: 14px;',
                  `\n${results.violations.length} violation(s) detected:`
                );
                results.violations.forEach((violation) => {
                  console.group(`${violation.impact?.toUpperCase()}: ${violation.help}`);
                  console.log('Description:', violation.description);
                  console.log('Help URL:', violation.helpUrl);
                  console.log('Affected elements:', violation.nodes.length);
                  violation.nodes.forEach((node) => {
                    console.log('Element:', node.html);
                    console.log('Target:', node.target);
                  });
                  console.groupEnd();
                });
              }
            })
            .catch((error) => {
              console.error('Axe-core error:', error);
            });
        };

        // Run tests after a short delay to allow DOM to stabilize
        const timer = setTimeout(runAxe, 1000);

        console.log(
          '%c🎯 Axe Accessibility Testing Enabled',
          'color: #0066cc; font-weight: bold; font-size: 14px;',
          '\nAccessibility violations will be logged to the console.'
        );

        return () => clearTimeout(timer);
      })
      .catch((error) => {
        console.error('Failed to load axe-core:', error);
      });
  }, []);

  // This component doesn't render anything
  return null;
}
