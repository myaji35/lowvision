# Story 2.7: "최신 보조공학(AT) 가이드" 페이지 구현

**Epic**: Epic 2 - 사용자 여정 기반 콘텐츠 페이지 구축
**Priority**: CRITICAL
**Points**: 13
**Status**: 🚧 IN PROGRESS

## 사용자 스토리

**As a** 저시력인 또는 가족
**I want** 2025년 최신 AI 기반 보조공학 제품 정보를 한눈에 보고
**So that** 내 상황에 맞는 보조기기를 선택하여 독립적인 삶을 살 수 있다

## 설명

이 페이지는 프로젝트의 **가장 중요한 콘텐츠**입니다. 저시력인의 삶의 질을 직접적으로 향상시키는 최신 보조공학 정보를 제공합니다.

## 수용 기준

- [x] `/daily-life/assistive-tech` 라우트 생성
- [ ] 보조공학 카테고리별 구조
- [ ] 각 제품별 상세 정보 카드
- [ ] 필터링 기능 (카테고리, 가격대)
- [ ] 검색 기능
- [ ] 외부 구매 링크
- [ ] 제품 비교 기능
- [ ] 사용자 리뷰 (Phase 2)
- [ ] 분기별 업데이트 프로세스 문서화

## 보조공학 카테고리

### 1. AI 기반 스마트 안경
- Envision Glasses
- Meta Ray-Ban Smart Glasses with AI
- 기타 최신 제품

### 2. AI 기반 웨어러블
- Biped
- 기타 웨어러블 기기

### 3. 스마트 지팡이
- WeWALK Smart Cane
- 기타 스마트 지팡이

### 4. 저시력 특화 스마트폰
- BlindShell Classic 2
- 기타 접근성 스마트폰

### 5. 비디오 확대기
- 탁상형 확대기
- 휴대형 확대기

## 페이지 구조

### 헤더
- H1: "2025+ 최신 보조공학(AT) 가이드"
- 소개: AI 시대의 혁신적인 보조기기
- 마지막 업데이트 날짜

### 필터 및 검색
- 카테고리 필터
- 가격대 필터
- 검색창

### 제품 그리드
- 카드 레이아웃
- 각 카드: 이미지, 제품명, 짧은 설명, 가격, 상세 보기 버튼

### 제품 상세
- 전체 설명
- 주요 기능 목록
- 저시력인에게 유용한 점
- 가격 정보
- 구매 링크 (외부)
- 관련 제품

## 데이터 구조

이미 정의된 데이터베이스 스키마 활용:

```typescript
// src/db/schema.ts - assistiveTech 테이블
export const assistiveTech = sqliteTable('assistive_tech', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  category: text('category').notNull(),
  description: text('description').notNull(),
  features: text('features').notNull(), // JSON string
  imageUrl: text('image_url'),
  externalLink: text('external_link'),
  price: text('price'), // 추가 필요
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});
```

## 기술 구현

### 파일 구조
```
/webapp/src/app/daily-life/assistive-tech/
├── page.tsx
├── components/
│   ├── ATFilterBar.tsx
│   ├── ATProductCard.tsx
│   ├── ATProductDetail.tsx
│   └── ATCategorySection.tsx
├── data/
│   └── assistive-tech-products.ts (임시 데이터)
└── types.ts
```

### 초기 데이터 (임시 - 향후 DB 연동)

```typescript
// data/assistive-tech-products.ts
export const assistiveTechProducts = [
  {
    id: 1,
    name: 'Envision Glasses',
    category: 'smart-glasses',
    description: 'AI 기반 스마트 안경으로 텍스트를 즉시 음성으로 변환하고 객체를 식별합니다.',
    features: [
      '텍스트 즉시 음성 변환 (OCR)',
      '객체 및 얼굴 인식',
      '실시간 영상 통화 지원',
      'Google Assistant 통합',
    ],
    imageUrl: '/images/at/envision-glasses.jpg',
    externalLink: 'https://www.letsenvision.com/',
    price: '$3,000 - $4,000',
  },
  // ... 더 많은 제품
];
```

## 완료 정의 (DoD)

- [ ] 페이지 구현 완료
- [ ] 최소 15개 제품 데이터 입력
- [ ] 필터링 및 검색 작동
- [ ] 모바일 반응형
- [ ] 접근성 검증 통과
- [ ] Lighthouse 90+ 달성
- [ ] 실제 사용자 피드백 (10명)

## 예상 작업 기간

2-3주

## 의존성

- 제품 이미지 (디자이너 또는 공식 사이트)
- 제품 정보 검증 (보조공학 전문가)
- 가격 정보 (최신 정보 확인)

---

**생성일**: 2025-11-03
**시작일**: 2025-11-03
**담당자**: Frontend + Content Team
