# Story 2.4: 저시력과 마음 건강 페이지 구현

**Epic**: Epic 2 - 사용자 여정 기반 콘텐츠 페이지 구축
**Priority**: HIGH
**Points**: 13
**Status**: 📋 Draft

## 스토리 정보
- **Story ID**: 2.4
- **Title**: 저시력과 마음 건강 (본인/가족 심리 가이드)
- **Priority**: HIGH
- **Estimated Effort**: 13 Story Points
- **Assigned To**: Dev Team
- **Created**: 2025-11-03
- **Last Updated**: 2025-11-03

## 사용자 스토리

**As a** 저시력 진단을 받은 당사자 또는 그 가족
**I want** 시력 상실을 받아들이는 과정에서 겪는 감정과 심리적 어려움을 이해하고, 전문적인 심리 지원을 받을 수 있는 방법을 알고
**So that** 정서적으로 건강하게 적응하고 일상을 회복할 수 있다

## 설명

PRD 섹션 5.2.2 "진단 초기 가족을 위한 심리 지원 가이드"와 Table 2의 사용자 스토리 "너무 막막합니다. 앞으로 어떻게 살아야 할지, 마음은 어떻게 다잡아야 할지 모르겠습니다"에 대응하는 페이지입니다.

이 페이지는 **적응 단계**의 첫 번째 스토리로, 진단 단계(Stories 2.1-2.3)에서 의학적/실무적 정보를 제공받은 사용자에게 **정서적 지원**을 제공합니다.

[Source: PRD prd.md#5.2.2, Table 2 - 신규 IA]

## 수용 기준 (Acceptance Criteria)

### 필수 요구사항
- [ ] `/adaptation/mental-health` 라우트 생성
- [ ] **당사자용** 심리 가이드 섹션
  - 시력 상실 슬픔 단계 (부정, 분노, 협상, 우울, 수용)
  - 각 단계별 특징과 대응 방법
  - 전문가 상담이 필요한 징후
- [ ] **가족/보호자용** 심리 가이드 섹션
  - 보호자의 정서적 부담 이해
  - 소진(burnout) 예방
  - 건강한 지원자 역할
- [ ] **심리 지원 서비스** 안내
  - 정부/민간 상담 프로그램 (발달장애인 부모상담지원 등)
  - 자조 모임 및 온라인 커뮤니티
  - 위기 상담 핫라인
- [ ] SEO 최적화 (title, description, keywords)
- [ ] 모바일/데스크톱 반응형 레이아웃
- [ ] WCAG 2.2 AA 접근성 100% 준수
- [ ] Lighthouse 점수 90+

### 콘텐츠 요구사항
- [ ] 공감적이고 희망적인 tone (비난하지 않고 이해하는 자세)
- [ ] 심리학 전문 용어는 쉽게 설명
- [ ] 실제 당사자/가족의 사례 (익명화) 또는 인용
- [ ] 전문가 검토 (심리상담사, 정신과 전문의)
- [ ] 외부 자원 링크 (보건복지부, 한국심리학회 등)

### 접근성 요구사항
- [ ] 시맨틱 HTML (`<article>`, `<section>`, `<aside>`)
- [ ] Heading 구조 명확 (H1 → H2 → H3)
- [ ] 위기 상담 정보는 `role="complementary"` 사용
- [ ] 연락처는 클릭 가능 (`tel:`, `mailto:`)
- [ ] 명암비 7:1 (AAA 권장)
- [ ] 키보드 네비게이션 100% 지원

### 내비게이션 요구사항
- [ ] 이전 페이지: "진단 직후 가이드" (Story 2.3)
- [ ] 다음 페이지: "가족 및 보호자 지원" (Story 2.5)
- [ ] Breadcrumb: 홈 > 적응과 정서적 지원 > 저시력과 마음 건강
- [ ] 관련 페이지 링크: "진단 직후 가이드" (초기 심리 대응)

## Dev Notes

### Previous Story Insights
- Story 2.1-2.3에서 `/diagnosis/*` 패턴 확립
- Story 2.4부터 `/adaptation/*` 패턴 시작
- Story 2.3의 `TimelineStep`, `ActionChecklist` 컴포넌트 재사용 가능성 검토

[Source: docs/stories/story-2.3-after-diagnosis-guide.md]

### 기술 스택
- **Frontend**: Next.js 16.0.1, React 19.2.0, TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI (Accordion, Tabs 활용)
- **Icons**: Lucide React (Heart, MessageCircle, Users, Phone 등)

[Source: webapp/package.json]

### 프로젝트 구조
```
/webapp/
├── app/
│   └── adaptation/                      # 적응 단계 루트 (신규)
│       └── mental-health/
│           ├── page.tsx                 # 메인 페이지
│           ├── metadata.ts              # SEO
│           ├── components/
│           │   ├── GriefStagesSection.tsx    # 슬픔 단계 설명
│           │   ├── CopingStrategies.tsx      # 대응 전략
│           │   ├── FamilyGuideSection.tsx    # 가족 가이드
│           │   ├── SupportServices.tsx       # 지원 서비스
│           │   └── CrisisHotline.tsx         # 위기 상담
│           └── data/
│               └── mental-health.ts     # 콘텐츠 데이터
```

### 컴포넌트 설계

#### GriefStagesSection.tsx
```typescript
interface GriefStage {
  id: string;
  name: string;                    // "부정", "분노", "협상", "우울", "수용"
  description: string;             // 단계 설명
  commonFeelings: string[];        // 흔한 감정들
  copingStrategies: string[];      // 대응 전략
  warningSign?: string;            // 전문가 도움 필요한 징후
}

interface GriefStagesSectionProps {
  stages: GriefStage[];
  variant: 'individual' | 'family'; // 당사자용 vs 가족용
}
```

#### CopingStrategies.tsx
```typescript
interface CopingStrategy {
  id: string;
  category: 'self-care' | 'social' | 'professional'; // 자가 관리 / 사회적 지원 / 전문가 도움
  title: string;
  description: string;
  actionItems: string[];
  resources?: Resource[];
}
```

#### SupportServices.tsx
```typescript
interface SupportService {
  id: string;
  name: string;                    // "발달장애인 부모상담지원"
  organization: string;            // "보건복지부"
  type: 'government' | 'private' | 'ngo';
  description: string;
  eligibility?: string;            // 대상자 조건
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  availability: string;            // "평일 9-18시", "24시간"
}
```

[Source: Radix UI patterns, TypeScript best practices]

### 데이터 구조

```typescript
// app/adaptation/mental-health/data/mental-health.ts

export interface MentalHealthData {
  individualGuide: {
    introduction: string;
    griefStages: GriefStage[];
    copingStrategies: CopingStrategy[];
  };
  familyGuide: {
    introduction: string;
    commonChallenges: string[];
    caregiverBurnout: {
      signs: string[];
      prevention: string[];
    };
    healthySupport: string[];
  };
  supportServices: SupportService[];
  crisisResources: CrisisResource[];
}

// 슬픔 5단계 (Kübler-Ross model)
export const griefStages: GriefStage[] = [
  {
    id: 'denial',
    name: '부정 (Denial)',
    description: '진단 결과를 받아들이기 어려워하는 단계입니다. "이건 실수일 거야", "다른 병원에서 다시 검사받아야 해"와 같은 생각을 합니다.',
    commonFeelings: [
      '믿기지 않음',
      '충격',
      '혼란',
      '현실감 없음'
    ],
    copingStrategies: [
      '감정을 억누르지 말고 인정하세요',
      '신뢰할 수 있는 사람과 대화하세요',
      '충분한 시간을 가지고 천천히 받아들이세요',
      '정확한 의학 정보를 확인하세요'
    ],
    warningSign: '부정이 몇 주 이상 지속되어 필요한 치료나 재활을 거부하는 경우'
  },
  {
    id: 'anger',
    name: '분노 (Anger)',
    description: '"왜 하필 나에게?", "이건 불공평해"라는 생각과 함께 분노를 느끼는 단계입니다.',
    commonFeelings: [
      '화남',
      '짜증',
      '억울함',
      '불공평함'
    ],
    copingStrategies: [
      '분노는 정상적인 반응임을 이해하세요',
      '안전한 방법으로 감정을 표현하세요 (일기, 운동 등)',
      '다른 사람을 비난하지 않도록 주의하세요',
      '분노 관리 기법을 배우세요 (호흡법, 이완 기법)'
    ],
    warningSign: '통제할 수 없는 분노로 대인관계가 심각하게 손상되는 경우'
  },
  {
    id: 'bargaining',
    name: '협상 (Bargaining)',
    description: '"만약 ~했다면", "~만 하면 나아질 거야"라며 상황을 되돌리려는 시도를 하는 단계입니다.',
    commonFeelings: [
      '후회',
      '죄책감',
      '희망',
      '집착'
    ],
    copingStrategies: [
      '과거를 바꿀 수 없음을 천천히 받아들이세요',
      '자신을 비난하지 마세요',
      '현실적인 희망에 초점을 맞추세요',
      '전문가와 치료 옵션에 대해 상담하세요'
    ],
    warningSign: '검증되지 않은 치료법에 집착하여 정상적인 치료를 거부하는 경우'
  },
  {
    id: 'depression',
    name: '우울 (Depression)',
    description: '상실의 현실을 직면하며 깊은 슬픔과 무력감을 느끼는 단계입니다.',
    commonFeelings: [
      '슬픔',
      '무력감',
      '절망',
      '사회적 고립'
    ],
    copingStrategies: [
      '우울감은 치유 과정의 일부임을 이해하세요',
      '혼자 있지 말고 가족, 친구와 시간을 보내세요',
      '작은 활동부터 시작하여 일상을 유지하세요',
      '심리 상담이나 지원 그룹에 참여하세요'
    ],
    warningSign: '2주 이상 지속되는 심각한 우울, 자해/자살 생각, 일상생활 불가능 - 즉시 전문가 도움 필요'
  },
  {
    id: 'acceptance',
    name: '수용 (Acceptance)',
    description: '현실을 받아들이고 새로운 방식으로 살아가는 방법을 찾는 단계입니다. 이는 "포기"가 아니라 "적응"을 의미합니다.',
    commonFeelings: [
      '평온함',
      '현실적 희망',
      '적응 의지',
      '새로운 정체성 형성'
    ],
    copingStrategies: [
      '작은 성취를 축하하세요',
      '새로운 기술(보조기기, 재활)을 배우세요',
      '미래 계획을 세우세요',
      '같은 경험을 가진 사람들과 교류하세요'
    ]
  }
];

// 가족/보호자 가이드
export const familyGuide = {
  introduction: '저시력인을 돌보는 가족과 보호자도 심리적 어려움을 겪습니다. 당신의 감정도 중요합니다.',
  commonChallenges: [
    '당사자의 감정 변화에 대응하기 어려움',
    '무엇을 도와야 할지, 어디까지 도와야 할지 모름',
    '자신의 삶과 돌봄의 균형 찾기',
    '죄책감 (충분히 돕지 못한다는 생각)',
    '미래에 대한 불안'
  ],
  caregiverBurnout: {
    signs: [
      '만성 피로',
      '짜증, 분노 증가',
      '사회적 고립',
      '수면 장애',
      '우울, 불안',
      '신체 건강 악화'
    ],
    prevention: [
      '자신만의 시간을 확보하세요 (휴식, 취미)',
      '다른 가족, 친구에게 도움을 요청하세요',
      '지원 서비스(활동지원사 등)를 적극 활용하세요',
      '보호자 자조 모임에 참여하세요',
      '필요하다면 본인도 상담을 받으세요'
    ]
  },
  healthySupport: [
    '과보호하지 말고 당사자의 독립성을 존중하세요',
    '당사자의 감정을 경청하되 해결책을 강요하지 마세요',
    '"너는 할 수 있어"라는 압박보다 "내가 도울 수 있는 게 있니?"라고 물으세요',
    '작은 성취를 함께 축하하세요',
    '당사자와 함께 새로운 활동을 찾아보세요'
  ]
};

// 지원 서비스 (PRD 참조)
export const supportServices: SupportService[] = [
  {
    id: 'parent-counseling',
    name: '발달장애인 부모상담지원',
    organization: '보건복지부 / 중앙장애아동발달장애인지원센터',
    type: 'government',
    description: '장애를 가진 자녀를 둔 부모의 심리·정서적 어려움 상담 및 지원',
    eligibility: '발달장애인 또는 장애아동의 부모·보호자',
    contact: {
      phone: '1577-5364',
      website: 'https://www.broso.or.kr'
    },
    availability: '평일 9:00-18:00'
  },
  {
    id: 'mental-health-welfare',
    name: '정신건강복지센터',
    organization: '보건복지부',
    type: 'government',
    description: '우울, 불안 등 정신건강 상담 및 전문가 연계',
    contact: {
      phone: '1577-0199',
      website: 'https://www.mentalhealth.go.kr'
    },
    availability: '24시간 (위기상담)'
  },
  {
    id: 'kla-support',
    name: 'KLA 자조 모임',
    organization: '한국저시력인협회',
    type: 'ngo',
    description: '저시력인 당사자 및 가족 간 경험 공유 및 정서적 지원',
    contact: {
      website: '/community/programs',
      email: 'support@lowvision.or.kr'
    },
    availability: '월 1회 정기 모임 (온/오프라인)'
  }
];

// 위기 상담 (긴급)
export const crisisResources: CrisisResource[] = [
  {
    id: 'suicide-prevention',
    name: '자살예방 상담전화',
    phone: '1393',
    description: '자살 위기 개입 및 전문 상담',
    availability: '24시간',
    urgent: true
  },
  {
    id: 'mental-crisis',
    name: '정신건강 위기상담',
    phone: '1577-0199',
    description: '정신적 위기 상황 긴급 상담',
    availability: '24시간',
    urgent: true
  }
];
```

[Source: PRD prd.md#5.2.2 심리 지원 가이드, 발달장애인 부모상담지원 [41]]

### 페이지 구조

```tsx
// app/adaptation/mental-health/page.tsx
import { griefStages, familyGuide, supportServices, crisisResources } from './data/mental-health'

export default function MentalHealthPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          저시력과 마음 건강
        </h1>
        <p className="text-xl leading-relaxed text-gray-700">
          시력 상실은 신체적 변화일 뿐만 아니라 정서적 여정이기도 합니다.
          당신의 감정은 정상적이며, 도움을 받을 수 있습니다.
        </p>
      </header>

      {/* Crisis Hotline (Sticky) */}
      <CrisisHotline resources={crisisResources} />

      {/* Tabs: 당사자용 / 가족용 */}
      <Tabs defaultValue="individual" className="mb-16">
        <TabsList>
          <TabsTrigger value="individual">저시력인 당사자</TabsTrigger>
          <TabsTrigger value="family">가족 및 보호자</TabsTrigger>
        </TabsList>

        {/* 당사자용 */}
        <TabsContent value="individual">
          <section aria-labelledby="grief-stages-title">
            <h2 id="grief-stages-title" className="text-3xl font-bold mb-6">
              시력 상실의 심리적 과정
            </h2>
            <p className="mb-8">
              많은 사람들이 시력 상실을 받아들이는 과정에서 다음과 같은 단계를 경험합니다.
              이는 선형적이지 않으며, 단계를 건너뛰거나 반복할 수 있습니다.
            </p>
            <GriefStagesSection stages={griefStages} variant="individual" />
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">대응 전략</h2>
            <CopingStrategies strategies={copingStrategiesData} />
          </section>
        </TabsContent>

        {/* 가족용 */}
        <TabsContent value="family">
          <FamilyGuideSection guide={familyGuide} />
        </TabsContent>
      </Tabs>

      {/* 지원 서비스 */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6">심리 지원 서비스</h2>
        <p className="mb-8">
          혼자 감당하지 마세요. 전문적인 도움을 받을 수 있습니다.
        </p>
        <SupportServices services={supportServices} />
      </section>

      {/* Navigation */}
      <nav aria-label="페이지 이동" className="flex justify-between mt-12 pt-8 border-t">
        <a href="/diagnosis/after-diagnosis">← 진단 직후 가이드</a>
        <a href="/adaptation/family-support">가족 및 보호자 지원 →</a>
      </nav>
    </main>
  )
}
```

### 접근성 구현

#### CrisisHotline.tsx (Sticky Banner)
```tsx
<aside
  role="complementary"
  aria-label="긴급 상담 정보"
  className="sticky top-4 bg-yellow-50 border-l-4 border-yellow-600 p-4 mb-8 z-10"
>
  <div className="flex items-center gap-3">
    <AlertCircle className="h-6 w-6 text-yellow-700" aria-hidden="true" />
    <div>
      <p className="font-semibold text-yellow-900">
        위기 상황이신가요? 24시간 긴급 상담
      </p>
      <div className="flex gap-4 mt-2">
        {crisisResources.map(resource => (
          <a
            key={resource.id}
            href={`tel:${resource.phone}`}
            className="text-yellow-900 font-bold hover:underline"
          >
            {resource.name}: {resource.phone}
          </a>
        ))}
      </div>
    </div>
  </div>
</aside>
```

#### Tabs 접근성 (Radix UI)
```tsx
import * as Tabs from '@radix-ui/react-tabs'

// Radix UI는 자동으로 ARIA 속성 제공:
// role="tablist", role="tab", aria-selected, aria-controls
<Tabs.Root defaultValue="individual">
  <Tabs.List aria-label="심리 가이드 대상 선택">
    <Tabs.Trigger value="individual">저시력인 당사자</Tabs.Trigger>
    <Tabs.Trigger value="family">가족 및 보호자</Tabs.Trigger>
  </Tabs.List>
  {/* ... */}
</Tabs.Root>
```

[Source: Radix UI Tabs documentation, WCAG 2.4.6 Headings and Labels]

### SEO 메타데이터

```typescript
// app/adaptation/mental-health/metadata.ts
export const metadata: Metadata = {
  title: '저시력과 마음 건강 | 심리 지원 가이드 | 한국저시력인협회',
  description: '시력 상실의 심리적 과정(부정, 분노, 우울, 수용)과 대응 전략. 당사자 및 가족을 위한 심리 지원 서비스 안내. 24시간 위기 상담 정보 포함.',
  keywords: ['저시력', '심리', '우울', '적응', '슬픔단계', '가족지원', '상담', '정신건강'],
  openGraph: {
    title: '저시력과 마음 건강 - 한국저시력인협회',
    description: '시력 상실 적응을 위한 심리 가이드 및 지원 서비스',
    type: 'article',
    url: 'https://lowvision.or.kr/adaptation/mental-health',
  }
}
```

## Tasks / Subtasks

### Task 1: 프로젝트 구조 생성 (AC: 1)
1.1. `app/adaptation/` 디렉토리 생성 (적응 단계 루트)
1.2. `app/adaptation/mental-health/` 하위 디렉토리
1.3. `page.tsx`, `metadata.ts`, `components/`, `data/` 생성

### Task 2: 데이터 모델 및 콘텐츠 작성 (AC: 2, 3, 4)
2.1. `data/mental-health.ts` 파일 생성
2.2. 인터페이스 정의 (`GriefStage`, `SupportService` 등)
2.3. 슬픔 5단계 데이터 작성 (Kübler-Ross model 기반)
2.4. 가족 가이드 데이터 작성 (보호자 소진, 건강한 지원 등)
2.5. 지원 서비스 데이터 작성 (발달장애인 부모상담지원 등)
2.6. 위기 상담 정보 작성 (1393, 1577-0199)
2.7. **전문가 검토**: 심리상담사 또는 정신과 전문의

### Task 3: UI 컴포넌트 구현 (AC: 접근성, 내비게이션)
3.1. `GriefStagesSection.tsx` - Accordion 또는 Card 형태
3.2. `CopingStrategies.tsx` - 대응 전략 리스트
3.3. `FamilyGuideSection.tsx` - 가족 가이드 섹션
3.4. `SupportServices.tsx` - 지원 서비스 카드
3.5. `CrisisHotline.tsx` - Sticky banner (긴급 상담)

### Task 4: 탭 네비게이션 구현 (당사자 / 가족)
4.1. Radix UI Tabs 설치 및 설정
4.2. 탭 전환 로직 구현
4.3. 키보드 접근성 (화살표 키)
4.4. ARIA 레이블 추가

### Task 5: 메인 페이지 조립 (AC: 1, 5, 6)
5.1. Hero 섹션
5.2. 위기 상담 배너 (sticky)
5.3. 탭 컨텐츠 통합
5.4. 지원 서비스 섹션
5.5. 페이지 네비게이션

### Task 6: 접근성 구현
6.1. Heading 구조 검증
6.2. 위기 정보 `role="complementary"`
6.3. 연락처 `tel:` 링크
6.4. 명암비 7:1 검증
6.5. 포커스 인디케이터

### Task 7: SEO 최적화
7.1. `metadata.ts` 완성
7.2. Structured Data (MedicalWebPage schema)

### Task 8: 테스트 및 검증
8.1. ESLint jsx-a11y
8.2. Lighthouse 90+
8.3. 키보드 네비게이션 (탭 전환 포함)
8.4. 스크린 리더 테스트
8.5. 텍스트 200% 확대
8.6. 모바일 반응형

### Task 9: 문서화 및 배포
9.1. Git 커밋 및 PR

## Definition of Done

- [ ] 모든 수용 기준 충족
- [ ] 당사자용 + 가족용 가이드 완성
- [ ] 슬픔 5단계 + 대응 전략 포함
- [ ] 지원 서비스 정보 정확성 확인
- [ ] 접근성 자동 검증 통과
- [ ] Lighthouse 90+
- [ ] 심리 전문가 검토 완료
- [ ] Code Review 통과

## Related Stories
- **Prerequisite**: Story 2.3 - 진단 직후 가이드
- **Next**: Story 2.5 - 가족 및 보호자 지원
- **Related**: Story 2.6 - 생애주기별 지원 (아동/청년/노인별 심리 이슈)

## Notes

### 콘텐츠 작성 주의사항
- **Tone**: 공감적, 비난하지 않음, 희망적
- **민감성**: 자살/자해 언급 시 항상 위기 상담 정보 병기
- **문화적 맥락**: 한국 문화에서의 장애 인식, 가족 역할 고려
- **증거 기반**: 슬픔 5단계는 Kübler-Ross 모델에 기반하되, 선형적이지 않음 명시

### 전문가 검토 필수 영역
- 슬픔 단계 설명의 정확성
- "전문가 도움 필요한 징후" 기준
- 위기 상담 연락처 최신성

### 향후 확장
- Phase 2: 온라인 자가 평가 도구 (우울증 자가 진단 등)
- Phase 2: 명상/이완 기법 동영상
- Phase 3: AI 챗봇 정서적 지원

---

**Created**: 2025-11-03
**Author**: Bob (Scrum Master)
**Source**: PRD prd.md#5.2.2, Table 2, Epic 2, CLAUDE.md
