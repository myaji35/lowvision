# Story 2.3: 진단 직후 가이드 페이지 구현

**Epic**: Epic 2 - 사용자 여정 기반 콘텐츠 페이지 구축
**Priority**: HIGH
**Points**: 13
**Status**: 📋 Draft

## 스토리 정보
- **Story ID**: 2.3
- **Title**: 진단 직후: 무엇을 해야 하나요?
- **Priority**: HIGH
- **Estimated Effort**: 13 Story Points
- **Assigned To**: Dev Team
- **Created**: 2025-11-03
- **Last Updated**: 2025-11-03

## 사용자 스토리

**As a** 오늘 저시력 진단을 받은 환자의 가족
**I want** 진단 직후 즉시 해야 할 일들과 다음 단계를 단계별로 명확히 안내받고
**So that** 혼란과 두려움 속에서도 올바른 방향으로 대응할 수 있다

## 설명

PRD 섹션 5.1의 사용자 스토리 "오늘 아이가/부모님이 저시력 진단을 받았습니다. 대체 저시력이 무엇이고, 원인 질환은 무엇인가요?"에 대한 답변의 마지막 단계입니다.

Story 2.1 (저시력이란?), Story 2.2 (원인 질환)을 통해 기본 정보를 제공받은 사용자에게, 이제 **실질적인 행동 가이드**를 제공하여 진단 초기의 막막함을 해소합니다.

[Source: PRD prd.md#5.1, Table 2 - 신규 IA]

## 수용 기준 (Acceptance Criteria)

### 필수 요구사항
- [ ] `/diagnosis/after-diagnosis` 라우트 생성
- [ ] 시간순 단계별 가이드 구조 (즉시 → 1주일 이내 → 1개월 이내)
- [ ] 각 단계별 구체적인 행동 항목 (체크리스트 형태)
- [ ] 관련 서비스/기관 연락처 정보
- [ ] 다음 단계 페이지로의 명확한 내비게이션 (적응 단계로 이동)
- [ ] 긴급 상황 대응 정보 (시력 급격한 악화 등)
- [ ] SEO 최적화 (title, description, keywords)
- [ ] 모바일/데스크톱 반응형 레이아웃
- [ ] WCAG 2.2 AA 접근성 100% 준수
- [ ] Lighthouse 점수 90+ (모든 항목)

### 콘텐츠 요구사항
- [ ] **즉시 해야 할 일** (진단 당일~3일):
  - 의사와 충분한 상담 (질문 리스트 제공)
  - 진단서 및 의료 기록 확보
  - 가족/보호자에게 알리기
  - 초기 심리적 대응 (충격, 부정 단계)
- [ ] **1주일 이내**:
  - 장애인 등록 절차 시작 (복지 혜택 연계)
  - 재활 병원/복지관 알아보기
  - 보조기기 초기 상담
  - 직장/학교 상황 정리
- [ ] **1개월 이내**:
  - 생활 환경 조정 시작
  - 재활 교육 프로그램 등록
  - 심리 상담 서비스 이용
  - 자조 모임/커뮤니티 참여
- [ ] **긴급 상황 대응**:
  - 시력 급격한 악화 징후
  - 응급실 방문 필요 상황
  - 긴급 연락처 (야간/주말)

### 접근성 요구사항
- [ ] 체크리스트는 실제 체크 가능한 인터랙티브 요소 (선택사항)
- [ ] 각 단계는 명확한 heading 구조 (H2 → H3)
- [ ] 연락처 정보는 클릭 가능한 링크 (tel:, mailto:)
- [ ] 긴급 정보는 시각적으로 강조 (색상 + 아이콘 + 텍스트)
- [ ] 명암비 7:1 (AAA 권장)
- [ ] 키보드 네비게이션 완벽 지원

### 내비게이션 요구사항
- [ ] 이전 페이지: "원인 질환" (Story 2.2)
- [ ] 다음 페이지: "저시력과 마음 건강" (Story 2.4, 적응 단계 시작)
- [ ] Breadcrumb: 홈 > 저시력 바로 알기 > 진단 직후 가이드
- [ ] CTA: "다음 단계: 적응과 정서적 지원 알아보기"

## Dev Notes

### Previous Story Insights
- Story 2.1, 2.2에서 확립한 `/diagnosis/*` 라우트 패턴 유지
- Story 2.2의 `DiseaseSection` 컴포넌트 패턴 참조 (재사용 고려)
- 접근성 기준 동일 (WCAG 2.2 AA, 명암비 7:1)

[Source: docs/stories/story-2.1, story-2.2]

### 기술 스택
- **Frontend**: Next.js 16.0.1 (App Router), React 19.2.0, TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI (Accordion, Checkbox 활용 가능)
- **Icons**: Lucide React (CheckCircle, AlertCircle, Phone, Mail 등)

[Source: webapp/package.json]

### 프로젝트 구조 (File Locations)
```
/webapp/
├── app/
│   └── diagnosis/
│       └── after-diagnosis/
│           ├── page.tsx                    # 메인 페이지
│           ├── metadata.ts                 # SEO
│           ├── components/
│           │   ├── TimelineStep.tsx        # 단계별 섹션 컴포넌트
│           │   ├── ActionChecklist.tsx     # 행동 체크리스트
│           │   ├── EmergencyAlert.tsx      # 긴급 정보 섹션
│           │   ├── ContactCard.tsx         # 연락처 카드
│           │   └── NextStepsNavigation.tsx # 다음 단계 CTA
│           └── data/
│               └── timeline.ts             # 단계별 데이터
```

### 컴포넌트 설계

#### TimelineStep.tsx
```typescript
interface TimelineStepProps {
  step: number;                    // 1, 2, 3 (즉시, 1주일, 1개월)
  title: string;                   // "즉시 해야 할 일"
  timeframe: string;               // "진단 당일 ~ 3일 이내"
  actions: Action[];               // 행동 항목 리스트
  isUrgent?: boolean;              // 긴급 여부
}

interface Action {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  relatedLinks?: {
    text: string;
    url: string;
  }[];
}
```

#### ActionChecklist.tsx
```typescript
interface ActionChecklistProps {
  actions: Action[];
  allowInteraction?: boolean;      // 체크 가능 여부 (기본 false, 정적)
}
```

#### EmergencyAlert.tsx
```typescript
interface EmergencyAlertProps {
  title: string;
  symptoms: string[];              // 응급 징후 리스트
  contacts: EmergencyContact[];    // 긴급 연락처
}

interface EmergencyContact {
  name: string;
  phone: string;
  availability: string;            // "24시간", "평일 9-18시"
}
```

[Source: Radix UI 사용 패턴, CLAUDE.md]

### 데이터 구조

```typescript
// app/diagnosis/after-diagnosis/data/timeline.ts
export interface TimelineData {
  steps: TimelineStep[];
  emergencyInfo: EmergencyInfo;
}

export interface TimelineStep {
  id: string;
  step: number;
  title: string;
  timeframe: string;
  description: string;
  actions: Action[];
}

export interface EmergencyInfo {
  title: string;
  description: string;
  symptoms: string[];
  contacts: EmergencyContact[];
}

export const afterDiagnosisTimeline: TimelineData = {
  steps: [
    {
      id: 'immediate',
      step: 1,
      title: '즉시 해야 할 일',
      timeframe: '진단 당일 ~ 3일 이내',
      description: '진단 직후 가장 먼저 해야 할 중요한 일들입니다.',
      actions: [
        {
          id: 'consult-doctor',
          title: '의사와 충분한 상담',
          description: '진단 내용, 예후, 치료 옵션에 대해 명확히 이해하세요. 질문 리스트를 준비하면 도움이 됩니다.',
          priority: 'high',
          relatedLinks: [
            {
              text: '의사에게 물어볼 질문 리스트 다운로드',
              url: '/resources/doctor-questions.pdf'
            }
          ]
        },
        {
          id: 'get-medical-records',
          title: '진단서 및 의료 기록 확보',
          description: '향후 장애인 등록, 복지 혜택 신청 시 필요합니다.',
          priority: 'high',
          relatedLinks: []
        },
        {
          id: 'inform-family',
          title: '가족/보호자에게 알리기',
          description: '혼자 감당하지 말고 가까운 사람들과 상황을 공유하세요.',
          priority: 'medium',
          relatedLinks: [
            {
              text: '가족에게 저시력 설명하는 방법',
              url: '/adaptation/family-support'
            }
          ]
        },
        {
          id: 'emotional-response',
          title: '초기 심리적 대응',
          description: '충격, 부정, 분노는 정상적인 반응입니다. 전문가 도움을 받는 것을 두려워하지 마세요.',
          priority: 'high',
          relatedLinks: [
            {
              text: '저시력과 마음 건강',
              url: '/adaptation/mental-health'
            }
          ]
        }
      ]
    },
    {
      id: 'one-week',
      step: 2,
      title: '1주일 이내',
      timeframe: '진단 후 1주일 이내',
      description: '생활 기반을 다지기 위한 필수 절차들을 시작하세요.',
      actions: [
        {
          id: 'disability-registration',
          title: '장애인 등록 절차 시작',
          description: '복지 혜택(활동지원, 재활 서비스 등)을 받기 위해 필요합니다.',
          priority: 'high',
          relatedLinks: [
            {
              text: '장애인 등록 방법 상세 가이드',
              url: '/rights/welfare-benefits#disability-registration'
            },
            {
              text: '가까운 주민센터 찾기',
              url: 'https://www.gov.kr'
            }
          ]
        },
        {
          id: 'find-rehab-center',
          title: '재활 병원/복지관 알아보기',
          description: '보행 훈련, 일상생활 훈련 등 재활 서비스를 제공하는 기관을 찾으세요.',
          priority: 'high',
          relatedLinks: [
            {
              text: '전국 시각장애인복지관 목록',
              url: '/daily-life/rehab-education#welfare-centers'
            }
          ]
        },
        {
          id: 'assistive-tech-consult',
          title: '보조기기 초기 상담',
          description: '확대경, 화면낭독기 등 보조기기 정보를 수집하세요.',
          priority: 'medium',
          relatedLinks: [
            {
              text: '최신 보조공학 가이드',
              url: '/daily-life/assistive-tech'
            }
          ]
        },
        {
          id: 'work-school-adjustment',
          title: '직장/학교 상황 정리',
          description: '필요한 경우 휴직, 휴학 또는 업무 조정을 요청하세요.',
          priority: 'medium',
          relatedLinks: []
        }
      ]
    },
    {
      id: 'one-month',
      step: 3,
      title: '1개월 이내',
      timeframe: '진단 후 1개월 이내',
      description: '장기적인 적응을 위한 기반을 마련하세요.',
      actions: [
        {
          id: 'home-adjustment',
          title: '생활 환경 조정 시작',
          description: '집안 조명, 가구 배치, 색상 대비 등을 저시력에 맞게 조정하세요.',
          priority: 'medium',
          relatedLinks: []
        },
        {
          id: 'rehab-program',
          title: '재활 교육 프로그램 등록',
          description: '보행 훈련, 점자 교육, 일상생활 훈련 프로그램에 참여하세요.',
          priority: 'high',
          relatedLinks: [
            {
              text: '재활 및 교육 정보',
              url: '/daily-life/rehab-education'
            }
          ]
        },
        {
          id: 'counseling',
          title: '심리 상담 서비스 이용',
          description: '지속적인 심리적 지원이 적응에 큰 도움이 됩니다.',
          priority: 'high',
          relatedLinks: [
            {
              text: '가족 및 보호자 지원 프로그램',
              url: '/adaptation/family-support'
            }
          ]
        },
        {
          id: 'community',
          title: '자조 모임/커뮤니티 참여',
          description: '같은 경험을 가진 사람들과 교류하며 정보와 위로를 얻으세요.',
          priority: 'medium',
          relatedLinks: [
            {
              text: 'KLA 프로그램 및 모임',
              url: '/community/programs'
            }
          ]
        }
      ]
    }
  ],
  emergencyInfo: {
    title: '긴급 상황 대응',
    description: '다음 증상이 나타나면 즉시 응급실을 방문하세요.',
    symptoms: [
      '갑작스러운 시력 상실 또는 급격한 악화',
      '심한 눈 통증',
      '시야에 번개 같은 섬광이 보임',
      '떠다니는 물체(비문증)가 갑자기 증가',
      '시야의 일부가 커튼처럼 가려짐'
    ],
    contacts: [
      {
        name: '119 응급의료정보센터',
        phone: '119',
        availability: '24시간'
      },
      {
        name: '대한안과학회 긴급 상담',
        phone: '1234-5678',
        availability: '평일 9:00-18:00 (예시)'
      }
    ]
  }
}
```

[Source: PRD prd.md 사용자 여정, 복지 정책 정보]

### 페이지 구조 (Page Structure)

```tsx
// app/diagnosis/after-diagnosis/page.tsx
import { afterDiagnosisTimeline } from './data/timeline'
import TimelineStep from './components/TimelineStep'
import EmergencyAlert from './components/EmergencyAlert'
import NextStepsNavigation from './components/NextStepsNavigation'

export default function AfterDiagnosisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          진단 직후: 무엇을 해야 하나요?
        </h1>
        <p className="text-xl leading-relaxed text-gray-700">
          저시력 진단 직후는 혼란스러울 수 있습니다.
          이 가이드는 단계별로 해야 할 일을 안내하여
          올바른 방향으로 나아갈 수 있도록 돕습니다.
        </p>
      </header>

      {/* Emergency Alert */}
      <EmergencyAlert {...afterDiagnosisTimeline.emergencyInfo} />

      {/* Timeline Steps */}
      <div className="space-y-16 my-16">
        {afterDiagnosisTimeline.steps.map((step) => (
          <TimelineStep key={step.id} {...step} />
        ))}
      </div>

      {/* Next Steps CTA */}
      <NextStepsNavigation />

      {/* Page Navigation */}
      <nav aria-label="페이지 이동" className="flex justify-between mt-12 pt-8 border-t">
        <a
          href="/diagnosis/causes"
          className="flex items-center gap-2 hover:underline focus:outline-2"
        >
          ← 원인 질환 알아보기
        </a>
        <a
          href="/adaptation/mental-health"
          className="flex items-center gap-2 hover:underline focus:outline-2"
        >
          저시력과 마음 건강 →
        </a>
      </nav>
    </main>
  )
}
```

### 접근성 구현

#### 긴급 정보 강조 (EmergencyAlert.tsx)
```tsx
<aside
  role="alert"
  aria-labelledby="emergency-title"
  className="bg-red-50 border-l-4 border-red-600 p-6 mb-8"
>
  <div className="flex items-start gap-4">
    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" aria-hidden="true" />
    <div>
      <h2 id="emergency-title" className="text-xl font-bold text-red-900 mb-2">
        {title}
      </h2>
      <p className="text-red-800 mb-4">{description}</p>
      {/* 증상 및 연락처 */}
    </div>
  </div>
</aside>
```

#### 연락처 접근성
```tsx
<a
  href="tel:119"
  className="inline-flex items-center gap-2 text-lg font-semibold hover:underline focus:outline-2"
>
  <Phone className="h-5 w-5" aria-hidden="true" />
  119
  <span className="sr-only">전화 걸기</span>
</a>
```

[Source: WCAG 2.4.4 링크 목적, CLAUDE.md 접근성 요구사항]

### SEO 메타데이터

```typescript
// app/diagnosis/after-diagnosis/metadata.ts
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '저시력 진단 직후 가이드 | 해야 할 일 단계별 안내 | 한국저시력인협회',
  description: '저시력 진단 직후 즉시, 1주일, 1개월 이내 해야 할 일을 단계별로 안내합니다. 장애인 등록, 재활 서비스, 보조기기 정보 포함.',
  keywords: ['저시력', '진단', '대응방법', '장애인등록', '재활서비스', '초기대응', '가이드'],
  openGraph: {
    title: '저시력 진단 직후 가이드 - 한국저시력인협회',
    description: '진단 직후 해야 할 일 단계별 완벽 가이드',
    type: 'article',
    url: 'https://lowvision.or.kr/diagnosis/after-diagnosis',
  }
}
```

### 스타일링 (Tailwind CSS)

```tsx
// TimelineStep.tsx 스타일 예시
<section
  aria-labelledby={`step-${step}-title`}
  className="relative pl-8 border-l-2 border-blue-300"
>
  {/* Step number badge */}
  <div className="absolute -left-5 top-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
    {step}
  </div>

  <h2 id={`step-${step}-title`} className="text-2xl font-bold mb-2">
    {title}
  </h2>
  <p className="text-gray-600 mb-4">{timeframe}</p>

  {/* Actions checklist */}
  <ActionChecklist actions={actions} />
</section>
```

[Source: Tailwind CSS 4.0 patterns]

## Tasks / Subtasks

### Task 1: 프로젝트 구조 생성 (AC: 1)
1.1. `app/diagnosis/after-diagnosis/` 디렉토리 생성
1.2. `page.tsx`, `metadata.ts` 파일 생성
1.3. `components/`, `data/` 디렉토리 생성

### Task 2: 데이터 모델 및 콘텐츠 작성 (AC: 2, 3, 4)
2.1. `data/timeline.ts` 파일 생성
2.2. `TimelineData`, `TimelineStep`, `Action`, `EmergencyInfo` 인터페이스 정의
2.3. 즉시 단계 데이터 작성 (4개 액션)
2.4. 1주일 단계 데이터 작성 (4개 액션)
2.5. 1개월 단계 데이터 작성 (4개 액션)
2.6. 긴급 상황 정보 작성 (증상 5개, 연락처 2개)
2.7. **콘텐츠 검증**: 복지 전문가 또는 사회복지사 검토

### Task 3: UI 컴포넌트 구현 (AC: 5, 6, 7)
3.1. `TimelineStep.tsx` 컴포넌트
   - Props 정의
   - 시각적 타임라인 디자인 (번호 뱃지, 연결선)
   - 시맨틱 HTML (`<section>`, `<h2>`)
3.2. `ActionChecklist.tsx` 컴포넌트
   - 액션 리스트 렌더링
   - 우선순위 시각화 (high/medium/low)
   - 관련 링크 표시
3.3. `EmergencyAlert.tsx` 컴포넌트
   - `role="alert"` 사용
   - 빨간색 강조 (색상 + 텍스트 + 아이콘)
   - 증상 리스트 및 연락처
3.4. `ContactCard.tsx` 컴포넌트
   - 전화번호 클릭 가능 (`tel:`)
   - 운영 시간 표시
3.5. `NextStepsNavigation.tsx` 컴포넌트
   - "다음 단계: 적응과 정서적 지원" CTA
   - 명확한 버튼 디자인 (24x24px 이상)

### Task 4: 메인 페이지 조립 (AC: 1, 8, 9)
4.1. `page.tsx` 컴포넌트 통합
4.2. Hero 섹션 추가
4.3. 긴급 정보 섹션 배치 (최상단)
4.4. 타임라인 스텝 렌더링
4.5. 다음 단계 CTA 추가
4.6. 페이지 네비게이션 (이전/다음)
4.7. Breadcrumb 추가

### Task 5: 접근성 구현 (AC: 접근성 요구사항 전체)
5.1. 모든 heading 구조 검증 (H1 → H2 → H3)
5.2. 연락처 링크 `tel:`, `mailto:` 적용
5.3. 긴급 정보 `role="alert"` 적용
5.4. 색상 + 아이콘 + 텍스트 조합 (색상만 의존 금지)
5.5. 명암비 7:1 검증
5.6. 포커스 인디케이터 스타일링
5.7. Skip to content 링크

### Task 6: SEO 최적화 (AC: 7)
6.1. `metadata.ts` 완성
6.2. Structured Data (JSON-LD) 추가 (옵션, HowTo schema)

### Task 7: 테스트 및 검증 (AC: 10)
7.1. ESLint jsx-a11y 검증
7.2. @axe-core/react 검증
7.3. Lighthouse 점수 확인 (90+)
7.4. 키보드 네비게이션 테스트
7.5. 스크린 리더 테스트
7.6. 텍스트 200% 확대 테스트
7.7. 모바일 반응형 테스트

### Task 8: 문서화 및 배포
8.1. 개발 문서 업데이트
8.2. Git 커밋 및 PR

## Definition of Done

- [ ] 모든 수용 기준 충족
- [ ] 3단계 타임라인 + 긴급 정보 완성
- [ ] 접근성 자동 검증 통과
- [ ] Lighthouse 90+ (모든 항목)
- [ ] 콘텐츠 전문가 검토 완료
- [ ] Code Review 통과

## Related Stories
- **Prerequisite**: Story 2.2 - 원인 질환 페이지
- **Next**: Story 2.4 - 저시력과 마음 건강 (적응 단계 시작)
- **Related**: Story 2.10 - 복지 혜택 총람 (장애인 등록 상세 정보)

## Notes

### 콘텐츠 작성 주의사항
- 진단 직후 심리 상태(충격, 부정, 혼란) 고려한 공감적 tone
- 복잡한 절차는 단순화하여 설명
- 외부 링크는 공신력 있는 기관 우선 (정부, 협회 등)
- 연락처는 정기적 업데이트 필요 (분기별 확인)

### 향후 확장
- Phase 2: 인터랙티브 체크리스트 (로그인 사용자 진행도 저장)
- Phase 2: 맞춤형 가이드 (질환별, 연령별)
- Phase 3: 챗봇 연동 ("다음 단계는 무엇인가요?")

---

**Created**: 2025-11-03
**Author**: Bob (Scrum Master)
**Source**: PRD prd.md#5.1, Epic 2, Story 2.1, Story 2.2, CLAUDE.md
