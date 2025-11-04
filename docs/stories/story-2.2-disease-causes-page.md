# Story 2.2: 원인 질환 페이지 구현

**Epic**: Epic 2 - 사용자 여정 기반 콘텐츠 페이지 구축
**Priority**: HIGH
**Points**: 13
**Status**: 📋 Draft

## 스토리 정보
- **Story ID**: 2.2
- **Title**: 저시력 원인 질환 페이지 (황반변성, 녹내장, 망막색소변성증 등)
- **Priority**: HIGH
- **Estimated Effort**: 13 Story Points
- **Assigned To**: Dev Team
- **Created**: 2025-11-03
- **Last Updated**: 2025-11-03

## 사용자 스토리

**As a** 저시력 진단을 받은 환자의 가족
**I want** 저시력을 유발하는 주요 질환들(황반변성, 녹내장, 당뇨망막병증, 망막색소변성증 등)에 대한 신뢰할 수 있는 최신 의학 정보를 확인하고
**So that** 우리 가족이 겪고 있는 원인 질환을 정확히 이해하고 적절한 대응 방법을 찾을 수 있다

## 설명

PRD 섹션 5.2.1에 명시된 "원인 질환 및 최신 의학 정보" 페이지를 구현합니다. 이 페이지는 사용자 여정의 첫 단계인 "진단" 단계에서 두 번째 핵심 페이지로, Story 2.1 ("저시력이란?") 다음에 자연스럽게 이어지는 정보를 제공합니다.

[Source: PRD prd.md#5.2.1]

## 수용 기준 (Acceptance Criteria)

### 필수 요구사항
- [ ] `/diagnosis/causes` 라우트 생성 (Next.js App Router 사용)
- [ ] 주요 4대 원인 질환 섹션 구현:
  - 황반변성 (Age-related Macular Degeneration, AMD)
  - 녹내장 (Glaucoma)
  - 당뇨망막병증 (Diabetic Retinopathy)
  - 망막색소변성증 (Retinitis Pigmentosa, RP)
- [ ] 각 질환별 하위 정보 포함:
  - 정의 및 원인
  - 주요 증상
  - 진행 단계
  - 치료 및 관리 방법
  - 예방 및 조기 발견 방법
- [ ] SEO 최적화 (title, description, keywords, structured data)
- [ ] Open Graph 및 Twitter Card 메타 태그
- [ ] 모바일/데스크톱 반응형 레이아웃
- [ ] WCAG 2.2 AA 접근성 100% 준수
- [ ] 텍스트 200% 확대 시 레이아웃 유지
- [ ] 키보드 네비게이션 100% 지원
- [ ] Lighthouse 점수 90+ (Performance, Accessibility, Best Practices, SEO)

### 콘텐츠 요구사항
- [ ] 2025년 기준 최신 의학 정보 반영
- [ ] MSD 매뉴얼 수준의 신뢰할 수 있는 정보 제공
- [ ] 전문 용어에 대한 쉬운 설명 (툴팁 또는 각주)
- [ ] 질환별 발생률 및 통계 데이터 (국내 데이터 우선)
- [ ] 관련 외부 링크 (질병관리청, 대한안과학회 등 공신력 있는 기관)
- [ ] 다운로드 가능한 PDF 자료 (향후 Phase 2)

### 접근성 요구사항 (WCAG 2.2 AA)
- [ ] 시맨틱 HTML 사용 (`<article>`, `<section>`, `<h1>-<h6>`)
- [ ] 각 질환 섹션에 명확한 heading 구조 (H2 → H3)
- [ ] 이미지 alt 텍스트 필수 (의학 다이어그램 등)
- [ ] 명암비 7:1 (AAA 권장 수준)
- [ ] 모든 폰트 크기 `rem` 단위 사용
- [ ] 포커스 인디케이터 명확 (2px 이상)
- [ ] 링크 텍스트 명확 ("여기 클릭" 금지, "황반변성 상세 정보" 형식)
- [ ] Skip to content 링크 제공

### 내비게이션 요구사항
- [ ] 이전 페이지 링크: "저시력이란?" (Story 2.1)
- [ ] 다음 페이지 링크: "진단 직후 가이드" (Story 2.3)
- [ ] 질환 간 빠른 이동 (anchor 링크 또는 탭 네비게이션)
- [ ] Breadcrumb: 홈 > 저시력 바로 알기 > 원인 질환

## Dev Notes (개발자 참고사항)

### Previous Story Insights
Story 2.1에서 `/diagnosis/what-is-low-vision` 라우트 구조를 확립했습니다. 동일한 패턴을 따라 `/diagnosis/causes`를 생성하여 일관성을 유지하세요.

[Source: docs/stories/story-2.1-what-is-low-vision-page.md]

### 기술 스택 (Tech Stack)
- **Frontend**: Next.js 16.0.1 (App Router), React 19.2.0, TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI (`@radix-ui/react-*`)
- **Icons**: Lucide React
- **Accessibility**: `@axe-core/react`, `eslint-plugin-jsx-a11y`

[Source: webapp/package.json]

### 프로젝트 구조 (File Locations)
```
/webapp/
├── app/
│   └── diagnosis/
│       └── causes/
│           ├── page.tsx                 # 메인 페이지 (SSG 권장)
│           ├── components/
│           │   ├── DiseaseSection.tsx   # 개별 질환 섹션 컴포넌트
│           │   ├── DiseaseCard.tsx      # 질환 카드 컴포넌트 (4개 질환)
│           │   ├── QuickNavigation.tsx  # 질환 간 빠른 이동 탭
│           │   └── RelatedResources.tsx # 관련 자료 섹션
│           └── metadata.ts              # SEO 메타데이터
```

[Source: Story 2.1 참조, Next.js App Router 규칙]

### 컴포넌트 설계 (Component Specifications)

#### DiseaseSection.tsx
```typescript
interface DiseaseSectionProps {
  id: string;                    // "amd", "glaucoma", "diabetic-retinopathy", "rp"
  title: string;                 // 질환명 (한글)
  subtitle?: string;             // 영문명 (예: Age-related Macular Degeneration)
  definition: string;            // 정의
  causes: string[];              // 원인 리스트
  symptoms: string[];            // 증상 리스트
  stages?: string[];             // 진행 단계 (옵션)
  treatment: string;             // 치료 방법
  prevention: string;            // 예방 및 조기 발견
  externalLinks?: ExternalLink[];// 외부 링크
}
```

#### QuickNavigation.tsx
- Radix UI Tabs 또는 커스텀 anchor 링크 사용
- 키보드 접근성: 화살표 키로 탭 이동
- 현재 섹션 하이라이트 (scroll spy 기능)

[Source: Radix UI 사용 원칙, CLAUDE.md]

### 접근성 구현 (Accessibility Implementation)

#### 필수 ARIA 및 시맨틱 HTML
```tsx
<main>
  <h1>저시력의 주요 원인 질환</h1>

  <nav aria-label="질환 목록 빠른 이동">
    <QuickNavigation />
  </nav>

  <section aria-labelledby="disease-amd">
    <h2 id="disease-amd">황반변성 (AMD)</h2>
    {/* 질환 콘텐츠 */}
  </section>

  {/* 다른 질환들도 동일한 패턴 */}
</main>
```

#### 포커스 관리
- 질환 탭 클릭 시 해당 섹션 H2로 포커스 이동
- `scroll-padding-top` 사용 (고정 헤더 고려)

[Source: CLAUDE.md, WCAG 2.4.11 포커스 가려짐 방지]

### 스타일링 (CSS Requirements)

#### Tailwind CSS 클래스 예시
```tsx
<h1 className="text-4xl font-bold mb-4">
  {/* 폰트 크기는 rem 단위로 자동 변환됨 */}
</h1>

<p className="text-base leading-relaxed">
  {/* line-height: 1.5 이상 권장 */}
</p>

<a
  href="/diagnosis/what-is-low-vision"
  className="underline focus:outline-2 focus:outline-offset-2 focus:outline-black"
>
  {/* 포커스 인디케이터 필수 */}
</a>
```

#### 금지 사항
- ❌ `px` 단위 폰트 크기
- ❌ `outline: none`
- ❌ 색상만으로 의미 전달

[Source: CLAUDE.md 금지 사항]

### SEO 및 메타데이터 (metadata.ts)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '저시력 원인 질환 | 황반변성, 녹내장, 당뇨망막병증 | 한국저시력인협회',
  description: '저시력을 유발하는 주요 질환인 황반변성, 녹내장, 당뇨망막병증, 망막색소변성증의 원인, 증상, 치료법을 알아보세요. 2025년 최신 의학 정보 제공.',
  keywords: ['저시력', '황반변성', '녹내장', '당뇨망막병증', '망막색소변성증', 'AMD', '시력상실', '원인질환'],
  openGraph: {
    title: '저시력 원인 질환 - 한국저시력인협회',
    description: '황반변성, 녹내장 등 저시력 주요 원인 질환 완벽 가이드',
    type: 'article',
    url: 'https://lowvision.or.kr/diagnosis/causes',
    images: [
      {
        url: '/og-image-causes.jpg',
        width: 1200,
        height: 630,
        alt: '저시력 원인 질환 인포그래픽'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '저시력 원인 질환 가이드',
    description: '황반변성, 녹내장, 당뇨망막병증 등 주요 질환 정보'
  }
}
```

### 콘텐츠 구조 (Page Structure)

```tsx
// app/diagnosis/causes/page.tsx
export default function CausesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <header>
        <h1>저시력의 주요 원인 질환</h1>
        <p className="lead">
          저시력을 유발하는 4대 질환에 대한 최신 의학 정보를 제공합니다.
        </p>
      </header>

      {/* Quick Navigation */}
      <QuickNavigation diseases={diseasesList} />

      {/* Disease Sections */}
      <div className="space-y-12">
        <DiseaseSection
          id="amd"
          title="황반변성 (Age-related Macular Degeneration)"
          {...amdData}
        />
        <DiseaseSection
          id="glaucoma"
          title="녹내장 (Glaucoma)"
          {...glaucomaData}
        />
        <DiseaseSection
          id="diabetic-retinopathy"
          title="당뇨망막병증 (Diabetic Retinopathy)"
          {...diabeticRetinopathyData}
        />
        <DiseaseSection
          id="rp"
          title="망막색소변성증 (Retinitis Pigmentosa)"
          {...rpData}
        />
      </div>

      {/* Related Resources */}
      <RelatedResources />

      {/* Navigation */}
      <nav aria-label="페이지 이동" className="flex justify-between mt-12">
        <a href="/diagnosis/what-is-low-vision">← 저시력이란?</a>
        <a href="/diagnosis/after-diagnosis">진단 직후 가이드 →</a>
      </nav>
    </main>
  )
}
```

### 데이터 구조 (Data Models)

아직 CMS가 구축되지 않았으므로, 초기에는 정적 데이터를 TypeScript 파일로 관리합니다.

```typescript
// app/diagnosis/causes/data/diseases.ts
export interface Disease {
  id: string
  title: string
  subtitle: string
  definition: string
  causes: string[]
  symptoms: string[]
  stages?: string[]
  treatment: string
  prevention: string
  externalLinks: ExternalLink[]
  statistics?: {
    prevalence: string
    ageGroup: string
    source: string
  }
}

export interface ExternalLink {
  title: string
  url: string
  organization: string
}

export const amdData: Disease = {
  id: 'amd',
  title: '황반변성',
  subtitle: 'Age-related Macular Degeneration (AMD)',
  definition: '망막의 중심부인 황반에 변성이 일어나 시력이 저하되는 질환입니다...',
  causes: [
    '노화',
    '흡연',
    '가족력',
    '고혈압',
    '비만'
  ],
  symptoms: [
    '중심 시야가 흐릿하거나 왜곡됨',
    '직선이 굽어 보임 (암슬러 격자 테스트)',
    '색상 구분 어려움',
    '독서 시 글자가 사라짐'
  ],
  stages: [
    '초기: 드루젠(노폐물) 축적',
    '중기: 시력 저하 시작',
    '말기: 중심 시력 상실'
  ],
  treatment: '습성 AMD는 항혈관내피성장인자(anti-VEGF) 주사 치료가 가능합니다. 건성 AMD는 현재 확립된 치료법이 없으나, 영양제(루테인, 제아잔틴) 복용이 진행을 늦출 수 있습니다.',
  prevention: '정기 안과 검진(50세 이상 권장), 금연, 균형잡힌 식단, UV 차단 선글라스 착용',
  externalLinks: [
    {
      title: '대한안과학회 - 황반변성 정보',
      url: 'https://www.ophthalmology.org',
      organization: '대한안과학회'
    },
    {
      title: '질병관리청 - 황반변성 질환 정보',
      url: 'https://www.kdca.go.kr',
      organization: '질병관리청'
    }
  ],
  statistics: {
    prevalence: '국내 65세 이상 인구의 약 10-15%',
    ageGroup: '주로 50세 이상',
    source: '대한안과학회 (2024)'
  }
}

// glaucomaData, diabeticRetinopathyData, rpData도 동일한 구조로 정의
```

[Source: PRD prd.md#5.2.1, 의학 정보 신뢰성 요구사항]

### Testing Requirements

#### 접근성 테스트
```bash
# 개발 중 자동 검증
npm run lint   # eslint-plugin-jsx-a11y

# 빌드 후 검증
npm run build
npx pa11y http://localhost:3000/diagnosis/causes
```

#### 수동 테스트 체크리스트
- [ ] 키보드만으로 전체 페이지 탐색 (Tab, Shift+Tab, Enter)
- [ ] 스크린 리더 테스트 (VoiceOver on macOS, NVDA on Windows)
- [ ] 텍스트 200% 확대 (Cmd/Ctrl + +)
- [ ] 고대비 모드 (시스템 설정)
- [ ] 모바일 반응형 (320px ~ 1920px)

[Source: CLAUDE.md 테스트 체크리스트]

## Tasks / Subtasks

### Task 1: 프로젝트 구조 및 라우트 생성 (AC: 1)
1.1. `app/diagnosis/causes/` 디렉토리 생성
1.2. `page.tsx` 파일 생성 (기본 레이아웃)
1.3. `metadata.ts` 파일 생성 (SEO 메타데이터)
1.4. `components/` 하위 디렉토리 생성

### Task 2: 데이터 모델 및 콘텐츠 정의 (AC: 2, 3)
2.1. `data/diseases.ts` 파일 생성
2.2. `Disease` 및 `ExternalLink` 인터페이스 정의
2.3. 황반변성 데이터 작성 (`amdData`)
2.4. 녹내장 데이터 작성 (`glaucomaData`)
2.5. 당뇨망막병증 데이터 작성 (`diabeticRetinopathyData`)
2.6. 망막색소변성증 데이터 작성 (`rpData`)
2.7. **콘텐츠 전문가 검토 요청** (의료진 또는 대한안과학회)

### Task 3: UI 컴포넌트 구현 (AC: 2, 4, 5)
3.1. `DiseaseSection.tsx` 컴포넌트 작성
   - Props 인터페이스 정의
   - 시맨틱 HTML 구조 (`<section>`, `<h2>`, `<article>`)
   - Tailwind CSS 스타일링
3.2. `DiseaseCard.tsx` 컴포넌트 작성 (4개 질환 카드)
3.3. `QuickNavigation.tsx` 컴포넌트 작성
   - Radix UI Tabs 또는 anchor 링크
   - Scroll spy 기능 (현재 섹션 하이라이트)
3.4. `RelatedResources.tsx` 컴포넌트 작성
   - 외부 링크 목록
   - 다운로드 자료 (향후)

### Task 4: 메인 페이지 조립 (AC: 1, 6, 7)
4.1. `page.tsx`에 컴포넌트 통합
4.2. Hero 섹션 추가
4.3. Navigation 섹션 추가 (이전/다음 페이지)
4.4. Breadcrumb 추가
4.5. 반응형 레이아웃 적용 (모바일/데스크톱)

### Task 5: 접근성 구현 (AC: 8, 9, 10)
5.1. 모든 이미지에 alt 텍스트 추가
5.2. 폰트 크기 `rem` 단위 확인
5.3. 명암비 7:1 검증 (Lighthouse 또는 Color Contrast Analyzer)
5.4. 포커스 인디케이터 스타일링 (2px 이상)
5.5. Skip to content 링크 추가
5.6. ARIA 레이블 추가 (navigation, sections)
5.7. Heading 구조 검증 (H1 → H2 → H3)

### Task 6: SEO 최적화 (AC: 4, 5)
6.1. `metadata.ts` 완성
   - title, description, keywords
   - OpenGraph 메타 태그
   - Twitter Card 메타 태그
6.2. Structured Data (JSON-LD) 추가 (옵션, 의료 정보)
6.3. Canonical URL 설정

### Task 7: 테스트 및 검증 (AC: 11)
7.1. ESLint jsx-a11y 플러그인 검증
7.2. @axe-core/react 런타임 검증
7.3. Lighthouse 점수 확인 (Performance, Accessibility, SEO 각 90+)
7.4. 키보드 네비게이션 수동 테스트
7.5. 스크린 리더 테스트 (VoiceOver, NVDA)
7.6. 텍스트 200% 확대 테스트
7.7. 모바일 반응형 테스트 (320px, 768px, 1024px)

### Task 8: 문서화 및 배포 준비
8.1. README 또는 개발 문서 업데이트
8.2. 컴포넌트 Storybook 작성 (옵션, 향후)
8.3. Git 커밋 및 PR 생성

## Definition of Done

- [ ] 모든 수용 기준 충족
- [ ] 접근성 자동 검증 통과 (eslint, axe-core)
- [ ] Lighthouse 점수 90+ (모든 항목)
- [ ] 키보드 및 스크린 리더 수동 테스트 통과
- [ ] 콘텐츠 전문가(의료진) 검토 완료
- [ ] Code Review 통과
- [ ] 문서화 완료

## Related Stories
- **Prerequisite**: Story 2.1 - "저시력이란?" 페이지 (완료 필요)
- **Next**: Story 2.3 - "진단 직후 가이드" 페이지
- **Related**: Epic 3 - Data & CMS (향후 콘텐츠 동적 관리)

## Notes

### 콘텐츠 작성 시 주의사항
- 의학 정보는 반드시 최신 자료(2025년 기준) 참조
- MSD 매뉴얼, 대한안과학회 등 신뢰할 수 있는 출처 명시
- 전문 용어는 쉬운 설명 추가 (예: "드루젠(drusen) - 황반에 쌓이는 노폐물")
- 통계 데이터는 출처 및 연도 명시

### 향후 확장 가능성
- Phase 2: CMS 연동으로 콘텐츠 동적 관리
- Phase 2: 질환별 상세 페이지 추가 (예: `/diagnosis/causes/amd`)
- Phase 3: 사용자 피드백 기능 ("이 정보가 도움이 되었나요?")
- Phase 3: 관련 뉴스 및 최신 연구 동향 섹션

---

**Created**: 2025-11-03
**Author**: Bob (Scrum Master)
**Source**: PRD prd.md, Epic 2, Story 2.1, CLAUDE.md, package.json
