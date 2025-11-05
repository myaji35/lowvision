'use client';

import { Button } from '@/components/ui/button';
import type { ATCategory, ATCategoryInfo } from '../types';

interface ATFilterBarProps {
  categories: ATCategoryInfo[];
  activeCategory: ATCategory;
  onCategoryChange: (category: ATCategory) => void;
}

export function ATFilterBar({
  categories,
  activeCategory,
  onCategoryChange,
}: ATFilterBarProps) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-muted/30 rounded-lg">
      <div>
        <h2 className="text-sm font-semibold mb-3">카테고리</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className="flex items-center gap-2"
              aria-pressed={activeCategory === category.id}
              aria-label={`${category.name} 카테고리${
                activeCategory === category.id ? ' (선택됨)' : ''
              }`}
            >
              <span aria-hidden="true">{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {activeCategory !== 'all' && (
        <div className="text-sm text-muted-foreground">
          <p>
            <span className="font-medium">
              {categories.find((c) => c.id === activeCategory)?.name}
            </span>
            : {categories.find((c) => c.id === activeCategory)?.description}
          </p>
        </div>
      )}
    </div>
  );
}
