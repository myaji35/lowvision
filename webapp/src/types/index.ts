// Database types
export type Category =
  | 'diagnosis'
  | 'adaptation'
  | 'daily-life'
  | 'rights'
  | 'community';

export type ATCategory =
  | 'smart-glasses'
  | 'wearable'
  | 'smart-cane'
  | 'smartphone'
  | 'video-magnifier';

export type WelfarCategory =
  | 'daily-support'
  | 'child-support'
  | 'legal-advocacy'
  | 'financial';

// Theme types
export type Theme = 'light' | 'dark' | 'high-contrast';

// Font size types
export type FontSize = 'normal' | 'large' | 'x-large';

// Accessibility preferences
export interface AccessibilityPreferences {
  theme: Theme;
  fontSize: FontSize;
  reducedMotion: boolean;
}
