# Story 2.1: "저시력이란?" 페이지 구현

**Epic**: Epic 2 - 사용자 여정 기반 콘텐츠 페이지 구축
**Priority**: HIGH
**Points**: 8
**Status**: 📋 TODO

## 사용자 스토리

**As a** 저시력 진단을 받은 가족
**I want** 저시력의 정의와 증상을 명확히 이해하고
**So that** 우리 가족이 겪고 있는 상황을 정확히 파악할 수 있다

## 설명

사용자 여정의 첫 단계인 "진단" 단계에서 가장 중요한 기초 정보 페이지를 구현합니다.

## 수용 기준

- [ ] `/diagnosis/what-is-low-vision` 라우트 생성
- [ ] 페이지 콘텐츠 구조 설계
- [ ] 콘텐츠 작성 (의료 전문가 검토 필요)
- [ ] SEO 최적화 (title, description, keywords)
- [ ] Open Graph 메타 태그
- [ ] 모바일 반응형 레이아웃
- [ ] 관련 페이지 링크 (원인 질환, 진단 직후 가이드)
- [ ] Lighthouse 점수 90+ (Performance, Accessibility)

## 페이지 구조

### 1. 헤더
- H1: "저시력이란?"
- 소개 문구: 1-2 문장

### 2. 섹션 1: 저시력의 정의
- 의학적 정의
- 시력 범위 (교정시력 0.3 이하)
- 시야 범위 (20도 이내)

### 3. 섹션 2: 주요 증상
- 흐릿하게 보임
- 색상 구분 어려움
- 빛에 민감함
- 시야 좁아짐

### 4. 섹션 3: 저시력 vs 전맹
- 차이점 명확히 설명
- 잔여 시력 활용 가능성

### 5. 섹션 4: 다음 단계
- CTA: "원인 질환 알아보기"
- CTA: "진단 직후 가이드"

### 6. 관련 자료
- 외부 링크 (질병관리청 등)
- 다운로드 가능한 PDF

## 콘텐츠 요구사항

- 전문 용어는 쉬운 설명 추가
- 인포그래픽 또는 다이어그램 포함
- 실제 사례 또는 통계 데이터
- 최신 의학 정보 (2025년 기준)

## 디자인 요구사항

- 읽기 편한 폰트 크기 (최소 16px)
- 충분한 줄 간격 (line-height: 1.5 이상)
- 명확한 섹션 구분
- 이미지 alt 텍스트 필수

## 기술 구현

### 파일 구조
```
/webapp/src/app/diagnosis/what-is-low-vision/
├── page.tsx
├── components/
│   ├── DefinitionSection.tsx
│   ├── SymptomsSection.tsx
│   └── NextStepsSection.tsx
└── metadata.ts
```

### Metadata 예시
```ts
export const metadata: Metadata = {
  title: "저시력이란? - 한국저시력인협회",
  description: "저시력의 정의, 증상, 전맹과의 차이를 명확히 이해하고 다음 단계를 준비하세요.",
  keywords: ["저시력", "저시력 정의", "저시력 증상", "시각장애"],
  openGraph: {
    title: "저시력이란?",
    description: "저시력의 정의와 증상을 쉽게 이해하기",
    images: ["/og-images/what-is-low-vision.jpg"],
  },
};
```

## 테스트 계획

- [ ] 콘텐츠 가독성 테스트 (Flesch Reading Ease)
- [ ] 의료 전문가 팩트체크
- [ ] 저시력 사용자 피드백 (5명)
- [ ] 모바일 반응형 테스트 (iOS, Android)
- [ ] Lighthouse 점수 검증
- [ ] 스크린 리더 테스트 (NVDA, VoiceOver)

## 완료 정의 (DoD)

- [ ] 페이지 구현 완료
- [ ] 콘텐츠 전문가 검토 완료
- [ ] SEO 최적화 완료
- [ ] 접근성 검증 통과
- [ ] 저시력 사용자 테스트 통과
- [ ] Lighthouse 90+ 달성
- [ ] 관련 페이지 링크 모두 작동

## 의존성

- 의료 전문가 협력 (콘텐츠 검토)
- 인포그래픽 디자이너 (시각 자료)
- 저시력 사용자 테스터

## 예상 작업 기간

2주

## 관련 Story

- Story 2.2: "원인 질환" 페이지
- Story 2.3: "진단 직후 가이드" 페이지

## 참고 자료

- MSD 매뉴얼: 시각장애 및 실명
- WHO: Visual Impairment and Blindness
- 대한안과학회 자료
- RNIB: Understanding sight loss

---

**생성일**: 2025-11-03
**예상 시작일**: 2025-11-10
**담당자**: Frontend + Content Team
