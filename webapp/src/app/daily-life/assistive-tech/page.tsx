'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { ATProductCard } from './components/ATProductCard';
import { ATFilterBar } from './components/ATFilterBar';
import { products, categories } from './data/products';
import type { ATCategory } from './types';

export default function AssistiveTechPage() {
  const [activeCategory, setActiveCategory] = useState<ATCategory>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory);

  const lastUpdated = '2025년 11월 3일';

  return (
    <div className="container py-8 md:py-12">
      {/* Header Section */}
      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl mb-4">
          2025+ 최신 보조공학(AT) 가이드
        </h1>
        <p className="text-lg text-muted-foreground max-w-[750px] mb-4">
          AI 시대의 혁신적인 보조기기로 더 독립적인 삶을 살아보세요.
          텍스트 인식, 객체 식별, 장애물 감지 등 최신 기술이 담긴 제품들을 소개합니다.
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">마지막 업데이트:</span> {lastUpdated}
        </p>
      </header>

      {/* Filter Bar */}
      <section aria-label="제품 필터" className="mb-8">
        <ATFilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section>

      {/* Products Grid */}
      <section aria-label="보조공학 제품 목록">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length}개의 제품
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ATProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              해당 카테고리에 제품이 없습니다.
            </p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="mt-12 p-6 bg-muted/30 rounded-lg" aria-labelledby="info-heading">
        <h2 id="info-heading" className="text-xl font-bold mb-4">
          보조공학 제품 선택 가이드
        </h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            보조공학 제품은 개인의 시력 상태, 생활 환경, 필요에 따라 적합한 것이 다릅니다.
            제품 선택 전 전문가와 상담하시거나 체험해보시길 권장합니다.
          </p>
          <div>
            <h3 className="font-semibold text-foreground mb-2">💡 선택 시 고려사항</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>현재 시력 상태 및 주요 활동</li>
              <li>사용 환경 (실내/실외, 이동 빈도)</li>
              <li>기술 친숙도 및 학습 의지</li>
              <li>예산 및 유지비용</li>
              <li>보험 적용 여부 확인</li>
            </ul>
          </div>
          <p className="text-xs">
            ⚠️ 가격 정보는 참고용이며, 실제 가격은 판매처와 시기에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
