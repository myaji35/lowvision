# Story 2.5: 가족 및 보호자 지원 페이지 구현

**Epic**: Epic 2 - 사용자 여정 기반 콘텐츠 페이지 구축
**Priority**: HIGH
**Points**: 10
**Status**: 📋 Draft

## 스토리 정보
- **Story ID**: 2.5
- **Title**: 가족 및 보호자 지원 (역할, 지원 프로그램)
- **Priority**: HIGH
- **Estimated Effort**: 10 Story Points
- **Assigned To**: Dev Team
- **Created**: 2025-11-03
- **Last Updated**: 2025-11-03

## 사용자 스토리

**As a** 저시력인의 가족 또는 보호자
**I want** 저시력인을 돕는 구체적인 방법과 나를 위한 지원 프로그램을 알고
**So that** 효과적이고 건강하게 가족을 지원하며, 나 자신도 돌볼 수 있다

## 설명

PRD Table 2의 적응 단계 "2-3. 가족 및 보호자 지원 (역할, 지원 프로그램)"에 대응하는 페이지입니다.

Story 2.4 (저시력과 마음 건강)에서 심리적 측면을 다루었다면, Story 2.5는 **실질적인 지원 방법**과 **보호자를 위한 리소스**에 초점을 맞춥니다.

[Source: PRD prd.md Table 2, Epic 2]

## 수용 기준 (Acceptance Criteria)

### 필수 요구사항
- [ ] `/adaptation/family-support` 라우트 생성
- [ ] **효과적인 지원 방법** 섹션
  - 과보호 vs 적절한 지원 균형
  - 의사소통 팁
  - 일상생활에서 도울 수 있는 구체적인 방법
  - 독립성 존중하기
- [ ] **보호자를 위한 지원 프로그램** 섹션
  - 정부 지원 프로그램 (장애인 활동지원 서비스 등)
  - 보호자 휴가제, 돌봄 서비스
  - 보호자 교육 프로그램
  - 자조 모임 및 온라인 커뮤니티
- [ ] **역할별 가이드** 섹션
  - 부모 (아동/청소년 저시력인)
  - 성인 자녀 (노인 저시력인)
  - 배우자
- [ ] **자주 묻는 질문 (FAQ)** 섹션
- [ ] SEO 최적화
- [ ] 모바일/데스크톱 반응형
- [ ] WCAG 2.2 AA 접근성 100% 준수
- [ ] Lighthouse 90+

### 콘텐츠 요구사항
- [ ] 실용적이고 구체적인 조언 ("집안 조명을 밝게" 보다 "현관과 계단에 LED 센서등 설치")
- [ ] Do's and Don'ts 명확히 구분
- [ ] 실제 사례 또는 시나리오 (익명화)
- [ ] 전문가 검증 (사회복지사, 재활 전문가)

### 접근성 요구사항
- [ ] 시맨틱 HTML
- [ ] Accordion 또는 Tabs로 역할별 구분 (Radix UI)
- [ ] FAQ는 접근 가능한 구조 (details/summary 또는 Accordion)
- [ ] 명암비 7:1
- [ ] 키보드 네비게이션 100%

### 내비게이션 요구사항
- [ ] 이전: "저시력과 마음 건강" (Story 2.4)
- [ ] 다음: "생애주기별 지원" (Story 2.6)
- [ ] Breadcrumb: 홈 > 적응과 정서적 지원 > 가족 및 보호자 지원
- [ ] 관련 링크: "복지 혜택 총람" (장애인 활동지원)

## Dev Notes

### Previous Story Insights
- Story 2.4에서 `/adaptation/*` 패턴 확립
- Story 2.4의 `SupportServices` 컴포넌트 재사용 가능
- Radix UI Tabs/Accordion 패턴 일관성 유지

[Source: docs/stories/story-2.4-mental-health-page.md]

### 기술 스택
- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- Radix UI (Accordion, Tabs)
- Lucide React icons

[Source: webapp/package.json]

### 프로젝트 구조
```
/webapp/
├── app/
│   └── adaptation/
│       └── family-support/
│           ├── page.tsx
│           ├── metadata.ts
│           ├── components/
│           │   ├── SupportTips.tsx          # 지원 방법 팁
│           │   ├── ProgramList.tsx          # 지원 프로그램
│           │   ├── RoleGuide.tsx            # 역할별 가이드
│           │   └── FAQ.tsx                  # FAQ
│           └── data/
│               └── family-support.ts
```

### 컴포넌트 설계

#### SupportTips.tsx
```typescript
interface SupportTip {
  id: string;
  category: 'communication' | 'daily-life' | 'independence' | 'emotional';
  dos: string[];                // 권장 사항
  donts: string[];              // 피해야 할 것
  examples?: {
    scenario: string;
    goodApproach: string;
    poorApproach: string;
  }[];
}
```

#### ProgramList.tsx
```typescript
interface SupportProgram {
  id: string;
  name: string;
  type: 'government' | 'ngo' | 'local';
  target: string;               // 대상 (예: "만 6-65세 장애인 가족")
  description: string;
  benefits: string[];
  howToApply: string;
  contact: ContactInfo;
  relatedLink?: string;         // 내부 링크 (예: 복지 혜택 상세)
}
```

#### RoleGuide.tsx
```typescript
interface RoleGuide {
  role: 'parent' | 'adult-child' | 'spouse';
  title: string;
  commonChallenges: string[];
  specificTips: string[];
  resources: Resource[];
}
```

### 데이터 구조

```typescript
// app/adaptation/family-support/data/family-support.ts

// 효과적인 지원 방법
export const supportTips: SupportTip[] = [
  {
    id: 'communication',
    category: 'communication',
    dos: [
      '눈높이를 맞추고 정면에서 대화하세요',
      '명확하고 구체적으로 설명하세요 ("저기"가 아니라 "왼쪽 탁자 위")',
      '상대방이 필요한 도움을 직접 물어보세요',
      '"보여줄게"가 아니라 "설명해줄게"로 표현하세요'
    ],
    donts: [
      '상대방 동의 없이 갑자기 팔을 잡지 마세요',
      '"볼 수 있잖아" 같은 표현 금지 (저시력은 스펙트럼)',
      '다른 사람에게 대신 말하지 마세요 (예: 식당에서 주문)',
      '과도하게 큰 소리로 말하지 마세요 (청각은 정상)'
    ],
    examples: [
      {
        scenario: '외출 시 길 안내',
        goodApproach: '"내 팔꿈치를 잡으면 같이 걸을게. 계단 있으면 미리 말할게" - 본인이 선택하고 통제할 수 있게 함',
        poorApproach: '"내가 데려다줄게" - 일방적으로 팔을 끌고 감'
      }
    ]
  },
  {
    id: 'daily-life',
    category: 'daily-life',
    dos: [
      '집안 물건은 항상 같은 자리에 두세요',
      '색상 대비를 활용하세요 (예: 흰 접시에 어두운 음식)',
      '조명은 밝게, 그림자는 최소화',
      '문은 완전히 열거나 닫으세요 (반쯤 열린 문은 위험)',
      '바닥에 물건 두지 않기'
    ],
    donts: [
      '허락 없이 가구 배치를 바꾸지 마세요',
      '대화 없이 물건 위치를 옮기지 마세요',
      '"조심해"만 반복하지 말고 구체적으로 설명하세요'
    ]
  },
  {
    id: 'independence',
    category: 'independence',
    dos: [
      '본인이 할 수 있는 일은 스스로 하도록 기다려주세요',
      '보조기기 사용을 격려하세요',
      '실패를 경험할 기회도 주세요 (안전한 범위 내)',
      '성취를 인정하고 축하하세요'
    ],
    donts: [
      '무조건 대신 해주지 마세요',
      '"위험해"라며 시도를 막지 마세요',
      '"너는 못해"라는 메시지 전달 금지',
      '과잉보호로 의존성을 키우지 마세요'
    ],
    examples: [
      {
        scenario: '요리하기',
        goodApproach: '"칼 사용이 걱정되면 푸드 프로세서 써볼까? 같이 연습해보자" - 안전한 대안 제시',
        poorApproach: '"다칠까봐 무서워. 내가 할게" - 기회 박탈'
      }
    ]
  }
];

// 보호자 지원 프로그램
export const supportPrograms: SupportProgram[] = [
  {
    id: 'activity-support',
    name: '장애인 활동지원 서비스',
    type: 'government',
    target: '만 6세~65세 등록 장애인',
    description: '신체활동, 가사활동, 사회활동, 방문목욕, 방문간호 등을 지원하여 보호자 부담 경감',
    benefits: [
      '월 최대 120시간 활동지원',
      '본인부담금 최소 (기초생활수급자 면제)',
      '2025년부터 산모·신생아 방문서비스와 동시 이용 허용'
    ],
    howToApply: '주민센터 방문 → 신청서 제출 → 서비스 지원 종합조사 → 등급 결정 → 서비스 이용',
    contact: {
      phone: '129 (보건복지상담센터)',
      website: 'https://www.ableservice.or.kr'
    },
    relatedLink: '/rights/welfare-benefits#activity-support'
  },
  {
    id: 'caregiver-vacation',
    name: '장애인 가족 돌봄 휴가 지원',
    type: 'government',
    target: '장애인 가족을 돌보는 근로자',
    description: '가족돌봄휴직 또는 가족돌봄휴가 사용 시 급여 지원',
    benefits: [
      '월 최대 50만원 (통상임금의 일부)',
      '최대 10일 (연간)',
      '고용보험 지원'
    ],
    howToApply: '회사 인사팀에 신청 → 고용보험 급여 신청',
    contact: {
      phone: '1350 (고용노동부)',
      website: 'https://www.moel.go.kr'
    }
  },
  {
    id: 'parent-education',
    name: '장애아동 부모교육 지원',
    type: 'government',
    target: '장애아동 부모',
    description: '장애 이해, 양육 기술, 의사소통 방법 등 교육 프로그램',
    benefits: [
      '무료 교육 (온라인/오프라인)',
      '전문가 1:1 상담',
      '양육 자료 제공'
    ],
    howToApply: '중앙장애아동·발달장애인지원센터 또는 지역센터 문의',
    contact: {
      phone: '1577-5364',
      website: 'https://www.broso.or.kr'
    }
  },
  {
    id: 'kla-support-group',
    name: 'KLA 가족 자조 모임',
    type: 'ngo',
    target: '저시력인 가족',
    description: '같은 경험을 가진 가족들과의 정기 모임, 정보 교환 및 정서적 지원',
    benefits: [
      '월 1회 정기 모임 (온/오프라인)',
      '경험 공유 및 멘토링',
      '전문가 특강'
    ],
    howToApply: 'KLA 홈페이지 또는 전화 문의',
    contact: {
      phone: '02-XXXX-XXXX',
      email: 'family@lowvision.or.kr',
      website: '/community/programs'
    }
  }
];

// 역할별 가이드
export const roleGuides: RoleGuide[] = [
  {
    role: 'parent',
    title: '부모 (아동/청소년 저시력인)',
    commonChallenges: [
      '자녀의 미래가 걱정됩니다',
      '학교생활과 교육을 어떻게 지원해야 할지 모르겠습니다',
      '다른 아이들과 다르게 자라는 것이 안타깝습니다',
      '형제자매 관계를 어떻게 관리해야 할지 어렵습니다'
    ],
    specificTips: [
      '조기 재활 교육이 매우 중요합니다 (보행 훈련, 점자 등)',
      '특수교육 지원 신청 (개별화교육계획, 보조공학 기기)',
      '또래 활동 참여 기회를 적극적으로 만들어주세요',
      '비장애 형제자매의 감정도 돌봐주세요 (질투, 소외감 등)',
      '자녀에게 "장애"에 대해 솔직하고 긍정적으로 설명하세요'
    ],
    resources: [
      {
        title: '특수교육 지원센터',
        url: 'https://www.nise.go.kr',
        description: '특수교육 대상자 선정, 개별화교육 지원'
      },
      {
        title: '공공 어린이 재활병원',
        url: '/daily-life/rehab-education#children',
        description: '방문 재활 프로그램 (넥슨재단 지원)'
      }
    ]
  },
  {
    role: 'adult-child',
    title: '성인 자녀 (노인 부모가 저시력)',
    commonChallenges: [
      '독립적이던 부모님이 도움이 필요해지셨습니다',
      '부모님이 저시력을 인정하지 않으려 하십니다',
      '나의 가정과 부모님 돌봄 사이에서 갈등이 생깁니다',
      '멀리 떨어져 살아 자주 돌보기 어렵습니다'
    ],
    specificTips: [
      '부모님의 자존감을 지켜드리세요 (명령하지 말고 제안)',
      '지역 복지관, 경로당 프로그램 연계',
      '스마트폰 접근성 기능 설정 도와드리기 (화면 확대, 음성 지원)',
      '정기적인 안과 검진 일정 관리',
      '장애인 등록 권유 (복지 혜택 연계)',
      '활동지원 서비스 신청 고려'
    ],
    resources: [
      {
        title: '노인장기요양보험',
        url: 'https://www.longtermcare.or.kr',
        description: '65세 이상 노인 돌봄 서비스'
      },
      {
        title: '치매안심센터',
        url: 'https://www.nid.or.kr',
        description: '시력 상실과 인지 기능 저하 동반 시'
      }
    ]
  },
  {
    role: 'spouse',
    title: '배우자',
    commonChallenges: [
      '가정 내 역할 분담이 바뀌었습니다',
      '경제적 부담이 증가했습니다',
      '파트너의 우울, 분노를 감당하기 힘듭니다',
      '나 자신의 감정을 표현할 곳이 없습니다'
    ],
    specificTips: [
      '솔직한 대화를 유지하세요 (서로의 감정, 필요 공유)',
      '새로운 일상 루틴을 함께 만들어가세요',
      '부부 상담 고려 (변화된 관계 적응)',
      '배우자의 직업 재활 지원 (직업훈련, 취업 연계)',
      '재정 계획 재조정 (장애연금, 보험 등)',
      '보호자 자조 모임 참여'
    ],
    resources: [
      {
        title: '한국장애인고용공단',
        url: 'https://www.kead.or.kr',
        description: '장애인 직업 재활 및 취업 지원'
      },
      {
        title: '가족 상담 센터',
        url: 'https://www.familynet.or.kr',
        description: '부부·가족 상담'
      }
    ]
  }
];

// FAQ
export const faqs = [
  {
    q: '저시력인이 "도와주지 말라"고 하는데, 어떻게 해야 하나요?',
    a: '독립성을 존중하는 것이 중요합니다. 하지만 안전이 우려되는 상황이라면 "내가 도와주고 싶은데, 어떻게 하면 도움이 될까?"라고 물어보세요. 또는 "이 방법은 어때?"라며 대안을 제시하되, 최종 결정은 본인이 하도록 하세요.'
  },
  {
    q: '가족이 보조기기 사용을 거부합니다.',
    a: '보조기기에 대한 거부감(낙인, 두려움)은 흔합니다. 먼저 거부 이유를 들어보세요. 그 다음 ① 실제 사용자 후기 보여주기 ② 체험 기회 제공 (복지관 등) ③ 작고 눈에 띄지 않는 기기부터 시작 등의 방법을 시도해보세요.'
  },
  {
    q: '내가 너무 지쳐서 화가 납니다. 나쁜 사람인가요?',
    a: '절대 아닙니다. 보호자 소진(burnout)은 매우 흔하며, 당신의 감정은 정상입니다. 지금 당장 필요한 것은: ① 자신에게 휴식 허락하기 ② 다른 가족/친구에게 도움 요청 ③ 활동지원 서비스 이용 ④ 보호자 상담 받기. 당신이 건강해야 가족을 도울 수 있습니다.'
  },
  {
    q: '가족이 우울증인 것 같은데, 어떻게 설득하나요?',
    a: 'Story 2.4의 "전문가 도움이 필요한 징후"를 확인하세요. 설득보다는 "요즘 많이 힘들어 보여서 걱정돼. 함께 상담 받아볼까?"라고 제안하세요. 거부하면 억지로 끌고 가지 말고, 위기 상담 전화(1577-0199) 정보를 제공하고 지켜봐 주세요.'
  }
];
```

[Source: PRD prd.md, 장애인 활동지원 서비스 [9, 10]]

### 페이지 구조

```tsx
// app/adaptation/family-support/page.tsx
export default function FamilySupportPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">가족 및 보호자 지원</h1>
        <p className="text-xl text-gray-700">
          저시력인을 효과적으로 돕는 방법과 보호자 자신을 위한 지원을 찾으세요.
        </p>
      </header>

      {/* 효과적인 지원 방법 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">효과적으로 돕는 방법</h2>
        <SupportTips tips={supportTips} />
      </section>

      {/* 역할별 가이드 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">역할별 가이드</h2>
        <Tabs defaultValue="parent">
          <TabsList>
            <TabsTrigger value="parent">부모</TabsTrigger>
            <TabsTrigger value="adult-child">성인 자녀</TabsTrigger>
            <TabsTrigger value="spouse">배우자</TabsTrigger>
          </TabsList>
          {roleGuides.map(guide => (
            <TabsContent key={guide.role} value={guide.role}>
              <RoleGuide guide={guide} />
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* 보호자 지원 프로그램 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">보호자를 위한 지원 프로그램</h2>
        <ProgramList programs={supportPrograms} />
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">자주 묻는 질문</h2>
        <FAQ items={faqs} />
      </section>

      {/* Navigation */}
      <nav className="flex justify-between pt-8 border-t">
        <a href="/adaptation/mental-health">← 저시력과 마음 건강</a>
        <a href="/adaptation/lifecycle-support">생애주기별 지원 →</a>
      </nav>
    </main>
  )
}
```

### SEO 메타데이터

```typescript
export const metadata: Metadata = {
  title: '가족 및 보호자 지원 | 효과적인 돌봄 방법 | 한국저시력인협회',
  description: '저시력인을 효과적으로 돕는 구체적인 방법, 역할별 가이드(부모/자녀/배우자), 보호자 지원 프로그램(활동지원, 돌봄휴가) 안내',
  keywords: ['저시력', '가족지원', '보호자', '돌봄', '활동지원', '부모교육', '자조모임'],
}
```

## Tasks / Subtasks

### Task 1: 프로젝트 구조 (AC: 1)
1.1. `app/adaptation/family-support/` 디렉토리 생성
1.2. `page.tsx`, `metadata.ts`, `components/`, `data/` 생성

### Task 2: 데이터 작성 (AC: 2, 3, 4)
2.1. `supportTips` (의사소통, 일상, 독립성)
2.2. `supportPrograms` (활동지원, 돌봄휴가, 부모교육, 자조모임)
2.3. `roleGuides` (부모, 성인 자녀, 배우자)
2.4. `faqs` (최소 4개)
2.5. **전문가 검증**: 사회복지사

### Task 3: 컴포넌트 구현 (AC: 접근성)
3.1. `SupportTips.tsx` - Do's/Don'ts 구분
3.2. `ProgramList.tsx` - 지원 프로그램 카드
3.3. `RoleGuide.tsx` - 역할별 콘텐츠
3.4. `FAQ.tsx` - Accordion (Radix UI)

### Task 4: 메인 페이지 조립 (AC: 1, 5, 6)
4.1. Hero
4.2. 4개 섹션 통합
4.3. Tabs (역할별)
4.4. Navigation

### Task 5: 접근성 (AC: 접근성 요구사항)
5.1. Radix UI Tabs/Accordion
5.2. Heading 구조
5.3. 명암비 7:1
5.4. 키보드 네비게이션

### Task 6: SEO & 테스트
6.1. metadata.ts
6.2. Lighthouse 90+
6.3. 접근성 검증

### Task 7: Git 커밋

## Definition of Done

- [ ] 모든 수용 기준 충족
- [ ] Do's/Don'ts, 역할별 가이드, 프로그램, FAQ 완성
- [ ] 접근성 검증 통과
- [ ] Lighthouse 90+
- [ ] 사회복지사 검토 완료

## Related Stories
- **Prerequisite**: Story 2.4 - 저시력과 마음 건강
- **Next**: Story 2.6 - 생애주기별 지원
- **Related**: Story 2.10 - 복지 혜택 총람 (활동지원 상세)

## Notes

### 콘텐츠 주의사항
- **Tone**: 보호자를 비난하지 않고 격려
- **균형**: 과보호 경계 + 적절한 지원 강조
- **현실성**: 이상적인 조언보다 현실적인 팁

### 향후 확장
- Phase 2: 보호자 온라인 교육 동영상
- Phase 3: 보호자 커뮤니티 포럼

---

**Created**: 2025-11-03
**Author**: Bob (Scrum Master)
**Source**: PRD prd.md Table 2, Epic 2, Story 2.4, CLAUDE.md
