/**
 * Axe-core Configuration for Development
 *
 * This file configures axe-core to run accessibility tests in development mode.
 * It helps catch accessibility issues early in the development process.
 *
 * WCAG 2.2 Level AA compliance is the target standard.
 */

import type { ReactNode } from 'react';

export const axeConfig = {
  // Only run in development and client-side
  runOnlyInDevelopment: true,

  // Axe configuration options
  config: {
    rules: [
      // WCAG 2.2 Level AA rules
      { id: 'color-contrast', enabled: true }, // WCAG 1.4.3
      { id: 'link-name', enabled: true }, // WCAG 2.4.4
      { id: 'button-name', enabled: true }, // WCAG 4.1.2
      { id: 'image-alt', enabled: true }, // WCAG 1.1.1
      { id: 'label', enabled: true }, // WCAG 4.1.2
      { id: 'heading-order', enabled: true }, // WCAG 1.3.1
      { id: 'landmark-one-main', enabled: true }, // WCAG 1.3.1
      { id: 'page-has-heading-one', enabled: true }, // WCAG 1.3.1
      { id: 'bypass', enabled: true }, // WCAG 2.4.1
      { id: 'focus-order-semantics', enabled: true }, // WCAG 2.4.3
      { id: 'target-size', enabled: true }, // WCAG 2.5.8 (new in 2.2)
    ],
  },

  // Context options
  context: {
    // Include the entire document
    include: [['html']],
    // Exclude specific elements if needed
    exclude: [],
  },
};

export type AxeConfig = typeof axeConfig;
