export type ATCategory =
  | 'smart-glasses'
  | 'wearable'
  | 'smart-cane'
  | 'smartphone'
  | 'video-magnifier'
  | 'all';

export interface AssistiveTechProduct {
  id: number;
  name: string;
  category: ATCategory;
  description: string;
  features: string[];
  imageUrl?: string;
  price: string;
  externalLink?: string;
  manufacturer?: string;
}

export interface ATCategoryInfo {
  id: ATCategory;
  name: string;
  description: string;
  icon: string;
}

export const categoryLabels: Record<ATCategory, string> = {
  'smart-glasses': 'AI 스마트 안경',
  'wearable': 'AI 웨어러블',
  'smart-cane': '스마트 지팡이',
  'smartphone': '저시력 특화 스마트폰',
  'video-magnifier': '비디오 확대기',
  'all': '전체'
};
