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

// Assistive Technology Product types
export interface AssistiveProduct {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  price: number | null;
  description: string;
  features: string; // JSON string
  imageUrl: string | null;
  purchaseUrl: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AssistiveProductInput {
  name: string;
  category: string;
  manufacturer: string;
  price?: number | null;
  description: string;
  features: string[] | string;
  imageUrl?: string | null;
  purchaseUrl?: string | null;
  publishedAt?: string | null;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  count?: number;
  message?: string;
}
