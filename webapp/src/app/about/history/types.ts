export type HistoryCategory =
  | 'founding'
  | 'program'
  | 'recognition'
  | 'partnership'
  | 'achievement'
  | 'digital';

export type HistoryImportance = 'high' | 'medium' | 'low';

export interface HistoryItem {
  id: string;
  year: number;
  month?: number;
  title: string;
  description: string;
  category: HistoryCategory;
  importance: HistoryImportance;
}

export interface HistoryPeriod {
  decade: string; // '1990s', '2000s', '2010s', '2020s'
  label: string;  // '1990년대', '2000년대'
  description?: string;
  items: HistoryItem[];
}

export const categoryLabels: Record<HistoryCategory, string> = {
  founding: '설립',
  program: '사업',
  recognition: '인증',
  partnership: '협력',
  achievement: '성과',
  digital: '디지털',
};

export const categoryColors: Record<HistoryCategory, string> = {
  founding: 'bg-blue-100 text-blue-800',
  program: 'bg-green-100 text-green-800',
  recognition: 'bg-yellow-100 text-yellow-800',
  partnership: 'bg-purple-100 text-purple-800',
  achievement: 'bg-red-100 text-red-800',
  digital: 'bg-indigo-100 text-indigo-800',
};
