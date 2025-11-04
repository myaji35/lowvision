# Story 2.9: 디지털 활용 가이드 페이지

## 스토리 정보
- **Story ID**: 2.9
- **Epic**: Epic 2 - 사용자 여정 기반 콘텐츠 페이지 구축
- **Title**: 일상 단계 - 디지털 활용 가이드
- **Priority**: Critical
- **Status**: Draft
- **Estimated Effort**: 13 Story Points
- **Assigned To**: Dev Team
- **Created**: 2025-11-04
- **Last Updated**: 2025-11-04

## 사용자 스토리

**As a** 저시력인 당사자 또는 가족
**I want** PC와 스마트폰의 접근성 설정 방법을 단계별로 배우고
**So that** 디지털 기기를 독립적으로 활용하여 정보 접근, 소통, 업무를 할 수 있다

## 수용 기준 (Acceptance Criteria)

### 필수 요구사항
- [ ] 4개 플랫폼별 접근성 설정 가이드 (Windows, macOS, Android, iOS)
- [ ] 각 플랫폼별 단계별 스크린샷 또는 동영상 (대체 텍스트 필수)
- [ ] 주요 기능 설정 방법 (화면 확대, 스크린 리더, 고대비 모드, 음성 입력)
- [ ] 추천 앱 및 프로그램 목록 (무료/유료 구분)
- [ ] 일상생활 활용 사례 (이메일, 메신저, 영상 시청, 온라인 쇼핑)
- [ ] 접근성 기능 비교표 (플랫폼별)
- [ ] 문제 해결 (Troubleshooting) 섹션
- [ ] WCAG 2.2 AA 접근성 준수
- [ ] 텍스트 200% 확대 시 레이아웃 유지
- [ ] 키보드 네비게이션 100% 지원
- [ ] 모바일/데스크톱 반응형 레이아웃

### 콘텐츠 요구사항
- [ ] 플랫폼별 최신 접근성 기능 반영 (2025년 기준)
- [ ] 단계별 설정 가이드 (번호 매기기, 스크린샷)
- [ ] 추천 설정값 (폰트 크기, 대비, 속도 등)
- [ ] 무료 앱 우선 소개 (유료는 명시)
- [ ] 온라인 학습 리소스 링크

## 디자인 요구사항

### 레이아웃
- 섹션 1: 왜 디지털 접근성이 중요한가? (도입부)
- 섹션 2: 플랫폼 선택 (Tabs: Windows, macOS, Android, iOS)
- 섹션 3: 각 플랫폼별 주요 설정 (Accordion: 화면 확대, 스크린 리더, 고대비 등)
- 섹션 4: 추천 앱 및 프로그램 (카드 그리드)
- 섹션 5: 일상생활 활용 사례
- 섹션 6: 문제 해결 FAQ
- 섹션 7: 온라인 학습 리소스

### 접근성
- 시맨틱 HTML (`<section>`, `<nav>`, `<article>`)
- 플랫폼 탭에 적절한 ARIA 속성
- 설정 단계에 `<ol>` 사용
- 스크린샷 이미지에 상세한 대체 텍스트
- 비디오에 자막 및 화면해설 제공 (optional)
- 고대비 모드에서 스크린샷 구분 명확
- 스크린 리더 친화적 마크업

## 기술 스펙

### 컴포넌트 구조
```
/webapp/src/app/daily-life/digital/
├── page.tsx                           # 메인 페이지
├── components/
│   ├── PlatformTabs.tsx               # 플랫폼 탭
│   ├── SettingAccordion.tsx           # 설정 Accordion
│   ├── StepByStepGuide.tsx            # 단계별 가이드
│   ├── AppCard.tsx                    # 앱 추천 카드
│   ├── UseCaseCard.tsx                # 활용 사례 카드
│   └── TroubleshootingFAQ.tsx         # 문제 해결 FAQ
└── data/
    ├── platformsData.ts               # 플랫폼별 데이터
    ├── appsData.ts                    # 앱 정보
    └── useCasesData.ts                # 활용 사례
```

### 데이터 모델
```typescript
interface Platform {
  id: 'windows' | 'macos' | 'android' | 'ios';
  name: string;                    // 'Windows 11'
  icon?: string;                   // 아이콘
  version: string;                 // '11, 10'
  accessibilityFeatures: AccessibilityFeature[];
}

interface AccessibilityFeature {
  id: string;
  name: string;                    // '돋보기 (화면 확대)'
  category: 'magnification' | 'screen-reader' | 'contrast' | 'voice' | 'keyboard';
  description: string;             // 기능 설명
  isBuiltIn: boolean;              // 내장 기능 여부
  setupSteps: SetupStep[];         // 설정 단계
  recommendedSettings?: RecommendedSetting[];
  screenshots?: string[];          // 스크린샷 URL
}

interface SetupStep {
  step: number;
  instruction: string;             // '설정 앱을 엽니다'
  detail?: string;                 // 상세 설명
  screenshotUrl?: string;
  altText?: string;                // 이미지 대체 텍스트
}

interface RecommendedSetting {
  setting: string;                 // '확대 배율'
  value: string;                   // '200%'
  reason: string;                  // '일반적으로 가장 많이 사용'
}

interface App {
  id: string;
  name: string;                    // 'NVDA (스크린 리더)'
  platform: string[];              // ['windows']
  category: 'screen-reader' | 'magnifier' | 'ocr' | 'productivity' | 'communication';
  description: string;
  features: string[];              // 주요 기능
  isFree: boolean;
  price?: string;                  // 유료인 경우
  downloadUrl: string;
  learnMoreUrl?: string;
}

interface UseCase {
  id: string;
  title: string;                   // '이메일 읽고 답장하기'
  platform: string;                // 'iOS'
  accessibilityFeature: string;    // 'VoiceOver'
  steps: string[];                 // 실행 단계
  tips: string[];                  // 유용한 팁
}

interface Troubleshooting {
  id: string;
  problem: string;                 // '스크린 리더가 작동하지 않아요'
  platform: string;
  solution: string[];              // 해결 방법 (여러 단계)
}
```

## 콘텐츠 구조

### 1. 왜 디지털 접근성이 중요한가?

디지털 기기는 **저시력인의 독립성과 사회 참여를 크게 향상**시킵니다:

- ✅ **정보 접근**: 뉴스, 책, 웹사이트를 스스로 읽을 수 있음
- ✅ **소통**: 이메일, 메신저, 영상통화로 타인과 연결
- ✅ **업무**: 재택근무, 온라인 업무 가능
- ✅ **일상**: 온라인 쇼핑, 은행 업무, 예약 등

**좋은 소식**: 모든 주요 플랫폼(Windows, macOS, Android, iOS)은 **무료 접근성 기능**을 내장하고 있습니다!

---

### 2. 플랫폼별 접근성 설정 가이드

#### 2-1. Windows 11/10

##### A. 돋보기 (화면 확대)

**설정 방법:**
1. Windows 키 + "+" (플러스 키) 누르기
2. 또는: 설정 → 접근성 → 돋보기 → 켜기

**주요 기능:**
- 전체 화면 확대 (Full-screen)
- 렌즈 모드 (Lens): 마우스 주변만 확대
- 고정 모드 (Docked): 상단에 확대 영역 고정

**추천 설정:**
- 확대 배율: 200-400%
- 색 반전: 켜기 (눈의 피로 감소)
- 부드럽게 하기: 켜기 (확대 시 화면 전환 부드럽게)

**단축키:**
- Windows + "+" : 확대
- Windows + "-" : 축소
- Ctrl + Alt + 방향키: 화면 이동

---

##### B. 내레이터 (스크린 리더)

**설정 방법:**
1. Ctrl + Windows + Enter (켜기/끄기 토글)
2. 또는: 설정 → 접근성 → 내레이터 → 켜기

**주요 기능:**
- 화면의 모든 텍스트 음성 읽기
- 웹 브라우징 지원
- Office 문서 읽기
- 점자 디스플레이 연결 가능

**추천 설정:**
- 음성 속도: 50-70 (중간)
- 음성: Microsoft Heami (한국어 자연스러운 음성)
- 상세 수준: 보통 (처음 사용자)

**기본 단축키:**
- Caps Lock + F1: 모든 명령 보기
- Caps Lock + Enter: 항목 선택
- Caps Lock + 방향키: 탐색

**대안 (무료)**: NVDA (더 강력, 추천)

---

##### C. 고대비 모드

**설정 방법:**
1. 좌측 Alt + 좌측 Shift + Print Screen
2. 또는: 설정 → 접근성 → 고대비 → 테마 선택

**추천 테마:**
- 고대비 흑백 (검정 배경, 흰색 텍스트)
- 고대비 백흑 (흰색 배경, 검정 텍스트)

---

#### 2-2. macOS (Sonoma/Ventura)

##### A. 확대/축소

**설정 방법:**
1. 시스템 설정 → 접근성 → 확대/축소
2. 켜기: Option + Command + F5

**확대 모드:**
- 전체 화면
- 분할 화면
- 픽처 인 픽처 (PIP)

**추천 설정:**
- 확대 스타일: 전체 화면
- 최대 확대 배율: 8배
- 확대 시 이미지 부드럽게: 켜기

**단축키:**
- Option + Command + "+" : 확대
- Option + Command + "-" : 축소

---

##### B. VoiceOver (스크린 리더)

**설정 방법:**
1. Command + F5 (켜기/끄기)
2. 또는: 시스템 설정 → 접근성 → VoiceOver

**주요 기능:**
- macOS 전체 음성 읽기 (Safari, Mail, Pages 등)
- 제스처 기반 탐색 (터치패드)
- 로터 기능 (빠른 탐색)

**추천 설정:**
- 음성: Yuna (한국어 고품질)
- 속도: 중간 (50%)
- 상세도: 보통

**기본 제스처:**
- VO + 방향키: 탐색 (VO = Ctrl + Option)
- VO + Space: 선택
- VO + A: VoiceOver 메뉴

---

##### C. 디스플레이 조절

**설정 방법:**
시스템 설정 → 접근성 → 디스플레이

**주요 설정:**
- 명암 증가: 켜기
- 투명도 줄이기: 켜기 (시각적 혼란 감소)
- 색상 반전: 켜기 (다크 모드)
- 텍스트 크기: 크게

---

#### 2-3. Android (14/13)

##### A. TalkBack (스크린 리더)

**설정 방법:**
1. 설정 → 접근성 → TalkBack → 켜기
2. 또는: 볼륨 상하 동시 3초 길게 누르기

**주요 기능:**
- 화면의 모든 요소 음성 읽기
- 제스처 기반 탐색
- 점자 키보드 지원

**추천 설정:**
- 음성 속도: 1.0배 (보통)
- 음성: 한국어 TTS
- 터치 탐색: 켜기

**기본 제스처:**
- 한 손가락 스와이프 좌우: 항목 탐색
- 두 번 탭: 선택
- 두 손가락 스와이프 하단: TalkBack 일시 정지

---

##### B. 확대

**설정 방법:**
설정 → 접근성 → 확대 → 켜기

**확대 방식:**
- 삼중 탭: 화면 3번 탭하면 확대
- 접근성 버튼: 화면 하단 버튼으로 확대

**추천:**
- 확대 배율: 3-5배
- 확대 시 모든 화면 포함

---

##### C. 고대비 텍스트 및 큰 글씨

**설정 방법:**
1. 설정 → 접근성 → 텍스트 및 표시
2. 글꼴 크기: 최대
3. 표시 크기: 최대
4. 고대비 텍스트: 켜기

---

#### 2-4. iOS (18/17)

##### A. VoiceOver (스크린 리더)

**설정 방법:**
1. 설정 → 접근성 → VoiceOver → 켜기
2. 또는: Siri에게 "VoiceOver 켜줘"

**주요 기능:**
- iPhone/iPad 전체 음성 읽기
- 제스처 기반 탐색
- 로터 (빠른 탐색)

**추천 설정:**
- 말하기 속도: 50% (중간)
- 음성: Yuna (한국어 고품질)
- 촉각 피드백: 켜기

**기본 제스처:**
- 한 손가락 스와이프 좌우: 항목 탐색
- 두 번 탭: 선택
- 로터 회전: 두 손가락으로 화면 위에서 회전

---

##### B. 확대/축소

**설정 방법:**
설정 → 접근성 → 확대/축소 → 켜기

**확대 방식:**
- 삼중 탭: 화면 3번 탭
- 컨트롤러: 화면에 떠있는 확대 컨트롤러

**추천:**
- 최대 확대 수준: 8배
- 확대/축소 필터: 반전 (눈 피로 감소)

---

##### C. 디스플레이 조절

**설정 방법:**
설정 → 접근성 → 디스플레이 및 텍스트 크기

**주요 설정:**
- 큰 텍스트: 최대 크기
- 굵은 텍스트: 켜기
- 투명도 줄이기: 켜기
- 명암 증가: 켜기
- 색상 반전: 스마트 반전 (권장)

---

### 3. 추천 앱 및 프로그램

#### 3-1. 스크린 리더

| 앱 이름 | 플랫폼 | 가격 | 특징 |
|---------|--------|------|------|
| **NVDA** | Windows | 무료 | 가장 강력한 무료 스크린 리더, 다국어 지원 |
| **JAWS** | Windows | 유료 (약 $95/년) | 전문가용, Office 완벽 지원 |
| **VoiceOver** | macOS, iOS | 무료 (내장) | Apple 생태계 완벽 통합 |
| **TalkBack** | Android | 무료 (내장) | Google 서비스 최적화 |

**추천**: NVDA (Windows), VoiceOver (Apple)

---

#### 3-2. 화면 확대

| 앱 이름 | 플랫폼 | 가격 | 특징 |
|---------|--------|------|------|
| **돋보기** | Windows | 무료 (내장) | 간편, 색 반전 지원 |
| **ZoomText** | Windows | 유료 ($599) | 전문가용, 스크린 리더 통합 |
| **확대/축소** | macOS, iOS | 무료 (내장) | 부드러운 확대, 제스처 지원 |

**추천**: 내장 돋보기/확대 기능 (충분히 강력함)

---

#### 3-3. OCR (문자 인식)

| 앱 이름 | 플랫폼 | 가격 | 특징 |
|---------|--------|------|------|
| **Seeing AI** | iOS | 무료 | Microsoft 개발, 실시간 OCR, 한국어 지원 |
| **Google Lookout** | Android | 무료 | 문서, 제품, 사람 인식 |
| **KNFB Reader** | iOS, Android | 유료 ($99) | 가장 정확한 OCR, 다국어 |
| **Envision AI** | iOS, Android | 무료/유료 | 실시간 OCR, AI 설명 |

**추천**: Seeing AI (iOS), Google Lookout (Android)

---

#### 3-4. 생산성

| 앱 이름 | 플랫폼 | 가격 | 특징 |
|---------|--------|------|------|
| **Be My Eyes** | iOS, Android | 무료 | 자원봉사자와 실시간 영상 통화 |
| **Voice Dream Reader** | iOS, Android | 유료 ($14.99) | 전자책, PDF 읽기, 고품질 TTS |
| **Microsoft Office** | 모든 플랫폼 | 무료/유료 | 접근성 최고 수준 |

---

### 4. 일상생활 활용 사례

#### 사례 1: 이메일 읽고 답장하기 (iOS + VoiceOver)
1. VoiceOver 켜기 (Siri: "VoiceOver 켜줘")
2. 메일 앱 열기 (탭 + 선택)
3. 이메일 목록에서 한 손가락 스와이프로 탐색
4. 읽고 싶은 이메일에서 두 번 탭
5. 로터로 "제목" → "본문" 이동
6. 답장 버튼 선택 → 키보드로 입력
7. 보내기

---

#### 사례 2: YouTube 영상 시청 (Android + TalkBack)
1. TalkBack 켜기
2. YouTube 앱 열기
3. 검색 버튼 선택 → 음성으로 검색어 입력
4. 영상 선택 → 재생
5. 자막 켜기 (설정 → 자막)

---

#### 사례 3: 온라인 쇼핑 (Windows + NVDA)
1. NVDA 실행 (Ctrl + Alt + N)
2. 웹 브라우저 (Chrome/Edge) 열기
3. 쇼핑몰 웹사이트 접속
4. Heading 단축키 (H)로 빠르게 탐색
5. 상품 검색 → 상품 선택
6. 장바구니 담기 → 결제

---

### 5. 문제 해결 (Troubleshooting)

#### Q1. 스크린 리더가 갑자기 작동하지 않아요 (Windows)
**해결:**
1. Ctrl + Windows + Enter 눌러 내레이터 다시 켜기
2. NVDA 사용 중이라면 Ctrl + Alt + N으로 재시작
3. PC 재부팅

---

#### Q2. VoiceOver 속도가 너무 빨라요 (iOS)
**해결:**
1. 설정 → 접근성 → VoiceOver → 말하기 속도
2. 슬라이더를 왼쪽(느리게)으로 이동
3. 또는 VoiceOver 켠 상태에서 로터 → "말하기 속도" 선택 → 조절

---

#### Q3. 확대하면 화면이 잘려요 (Android)
**해결:**
1. 설정 → 접근성 → 확대 → 확대 설정
2. "확대 시 모든 화면 포함" 켜기
3. 확대 배율 줄이기 (3-4배 권장)

---

#### Q4. 고대비 모드에서 사진이 보기 어려워요 (Windows)
**해결:**
1. 고대비 모드 일시 끄기 (Alt + Shift + Print Screen)
2. 또는 사진 앱에서 색상 반전 끄기

---

### 6. 온라인 학습 리소스

#### 6-1. NVDA 한국어 가이드
- **웹사이트**: https://www.nvda-kr.org/
- **내용**: NVDA 다운로드, 설치, 사용법 (한국어)
- **비용**: 무료

#### 6-2. Apple 접근성 지원
- **웹사이트**: https://www.apple.com/kr/accessibility/
- **내용**: VoiceOver, 확대/축소 사용법 (동영상)
- **언어**: 한국어

#### 6-3. Google 접근성 도움말
- **웹사이트**: https://support.google.com/accessibility/
- **내용**: TalkBack, Android 접근성 설정
- **언어**: 한국어

#### 6-4. 한국저시력인협회 디지털 교육
- **전화**: 02-XXXX-XXXX
- **내용**: 1:1 또는 그룹 디지털 교육 (PC, 스마트폰)
- **비용**: 무료 또는 저렴

---

### 7. 플랫폼 선택 가이드

**Windows를 추천하는 경우:**
- 업무용 (Office, 이메일)
- NVDA 사용 희망
- PC 경험 있음

**macOS/iOS를 추천하는 경우:**
- Apple 생태계 선호
- VoiceOver 평가 우수
- 직관적인 UX 선호

**Android를 추천하는 경우:**
- 저렴한 기기 선호
- Google 서비스 많이 사용
- 커스터마이징 선호

---

## 상호작용 시나리오

### 시나리오 1: Windows 사용자의 NVDA 설정
1. 사용자가 "디지털 활용 가이드" 페이지 방문
2. "Windows" 탭 선택
3. "내레이터 (스크린 리더)" Accordion 확장
4. "대안: NVDA" 링크 클릭
5. NVDA 다운로드 사이트로 이동

### 시나리오 2: iOS 사용자의 VoiceOver 학습
1. "iOS" 탭 선택
2. "VoiceOver" Accordion 확장
3. 설정 단계 읽기 (스크린샷 포함)
4. "기본 제스처" 섹션 확인
5. "Apple 접근성 지원" 링크 클릭 → 동영상 튜토리얼 시청

### 시나리오 3: 문제 해결
1. "문제 해결" 섹션으로 스크롤
2. "스크린 리더가 작동하지 않아요" FAQ 확장
3. 해결 방법 단계별 실행

## 접근성 체크리스트

- [ ] 플랫폼 탭에 적절한 ARIA 속성
- [ ] 설정 단계에 `<ol>` 사용
- [ ] 스크린샷에 상세한 대체 텍스트
- [ ] Accordion에 aria-expanded, aria-controls
- [ ] 테이블에 `<caption>`, `<th scope>`
- [ ] 명암비 7:1 달성
- [ ] 고대비 모드에서 스크린샷 구분 명확
- [ ] 텍스트 200% 확대 테스트 통과
- [ ] 스크린 리더 테스트

## 테스트 시나리오

### 접근성 테스트
1. axe DevTools로 자동 검증
2. 키보드만으로 전체 페이지 탐색
3. NVDA로 탭, Accordion, 테이블 읽기
4. 200% 텍스트 확대 시 레이아웃 확인
5. 고대비 모드 확인

### 기능 테스트
1. 플랫폼 탭 전환 (4개)
2. Accordion 확장/축소
3. 앱 카드 외부 링크 클릭
4. 스크린샷 확대 (있는 경우)

### 반응형 테스트
1. 모바일 (320px)
2. 태블릿 (768px)
3. 데스크톱 (1280px+)

## 의존성
- Epic 1 Story 1.1-1.3 완료
- shadcn/ui 컴포넌트 (Tabs, Accordion, Card, Table)
- Story 2.7 완료 (보조공학 정보와 연계)

## 위험 요소
- 플랫폼 버전 업데이트 시 설정 방법 변경 (연 2회 검증 필요)
- 스크린샷 제작 및 대체 텍스트 작성 시간 소요
- 앱 정보 업데이트 (신규 앱, 가격 변동)

## 완료 기준 (Definition of Done)
- [ ] 모든 기능 구현 완료
- [ ] 4개 플랫폼 설정 가이드 완료
- [ ] 최소 10개 앱 정보 입력
- [ ] 스크린샷에 대체 텍스트 100% 작성
- [ ] 접근성 자동 검증 100% 통과
- [ ] 수동 접근성 테스트 통과
- [ ] 모바일/데스크톱 반응형 확인
- [ ] 코드 리뷰 완료
- [ ] PR 머지 완료

## 참고 자료
- PRD: `/docs/prd.md`
- Epic 2: `/docs/stories/epic-02-content-pages.md`
- 접근성 가이드: `/CLAUDE.md`
- WCAG 2.2 Guidelines: https://www.w3.org/WAI/WCAG22/quickref/
- NVDA: https://www.nvaccess.org/
- Apple Accessibility: https://www.apple.com/accessibility/

## 노트
- 플랫폼 정보는 추후 CMS로 관리 전환 예정
- 초기 버전은 정적 데이터로 구현
- 연 2회 플랫폼 업데이트 반영 (iOS/Android 메이저 업데이트 시)
- 향후 동영상 튜토리얼 제작 고려
- 스크린샷은 고대비 모드에서도 잘 보이도록 제작
