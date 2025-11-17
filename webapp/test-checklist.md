# 로컬 테스트 체크리스트

**테스트 일시**: 2025-11-17
**개발 서버**: http://localhost:3000

---

## ✅ Phase 1: 페이지 접근성 확인

### 홈 및 콘텐츠 페이지

- [ ] **홈페이지**: http://localhost:3000
  - [ ] 페이지 로딩 정상
  - [ ] 내비게이션 메뉴 표시
  - [ ] 접근성 컨트롤 (폰트 크기, 테마 전환) 표시

### 진단 단계 (4페이지)

- [ ] http://localhost:3000/diagnosis
- [ ] http://localhost:3000/diagnosis/what-is-low-vision
- [ ] http://localhost:3000/diagnosis/causes
- [ ] http://localhost:3000/diagnosis/first-steps

### 적응 단계 (3페이지)

- [ ] http://localhost:3000/adaptation/mental-health
- [ ] http://localhost:3000/adaptation/family-support
- [ ] http://localhost:3000/adaptation/lifecycle-support

### 일상 단계 (4페이지)

- [ ] http://localhost:3000/daily-life/assistive-tech
  - [ ] **중요**: 8개 제품이 모두 표시되는가?
  - [ ] 각 제품 카드에 이름, 카테고리, 가격 표시
  - [ ] 제품 카드 클릭 시 상세 페이지로 이동

- [ ] http://localhost:3000/daily-life/rehabilitation
- [ ] http://localhost:3000/daily-life/digital-accessibility
- [ ] http://localhost:3000/daily-life/employment

### 권리 단계 (2페이지)

- [ ] http://localhost:3000/rights/welfare-benefits
  - [ ] **중요**: 12개 복지 혜택 카테고리 표시
- [ ] http://localhost:3000/rights/legal-advocacy

### 커뮤니티 (1페이지)

- [ ] http://localhost:3000/community

### 기타 (1페이지)

- [ ] http://localhost:3000/about/history

---

## ✅ Phase 2: 보조공학 제품 테스트

### 제품 목록 페이지
- [ ] http://localhost:3000/daily-life/assistive-tech
  - [ ] 8개 제품 표시 확인:
    - [ ] Envision Glasses
    - [ ] Meta Ray-Ban Stories
    - [ ] Biped AI 웨어러블
    - [ ] WeWALK Smart Cane
    - [ ] BlindShell Classic 2
    - [ ] OpenBook 9
    - [ ] PEARL
    - [ ] OrCam MyEye Pro

### 제품 상세 페이지 (8개)
각 제품 카드를 클릭하여 상세 페이지 확인:
- [ ] 제품명 표시
- [ ] 카테고리 표시
- [ ] 제조사 표시
- [ ] 가격 표시 (또는 "가격 미정")
- [ ] 상세 설명 표시
- [ ] 주요 기능 목록 표시
- [ ] "뒤로 가기" 버튼 동작

---

## ✅ Phase 3: Admin 페이지 테스트

### 대시보드
- [ ] http://localhost:3000/admin
  - [ ] "연락처 정보 관리" 카드 표시
  - [ ] "보조기기 관리" 카드 표시
  - [ ] 각 카드 클릭 시 해당 페이지로 이동

### 보조기기 관리
- [ ] http://localhost:3000/admin/products
  - [ ] 8개 제품 목록 표시
  - [ ] 각 제품의 이름, 카테고리, 제조사, 가격 표시
  - [ ] "공개" 상태 표시

#### CRUD 기능 테스트
- [ ] **생성 (Create)**:
  - [ ] "새 제품 추가" 버튼 클릭
  - [ ] 폼에 테스트 제품 정보 입력
  - [ ] "저장" 클릭 → 성공 메시지 확인
  - [ ] 목록에 새 제품 표시 확인

- [ ] **수정 (Update)**:
  - [ ] 기존 제품 "편집" 버튼 클릭
  - [ ] 정보 수정 (예: 가격 변경)
  - [ ] "저장" 클릭 → 변경사항 반영 확인

- [ ] **삭제 (Delete)**:
  - [ ] 테스트 제품 "삭제" 버튼 클릭
  - [ ] 확인 대화상자 표시
  - [ ] "확인" 클릭 → 목록에서 제거 확인

- [ ] **공개/비공개 토글**:
  - [ ] 제품 공개 상태 토글 클릭
  - [ ] 상태 변경 확인
  - [ ] 비공개 제품은 일반 사용자 페이지에 표시되지 않는지 확인

### 연락처 관리
- [ ] http://localhost:3000/admin/contact
  - [ ] 기존 연락처 정보 표시:
    - [ ] 조직명 (한글/영문)
    - [ ] 주소
    - [ ] 전화번호
    - [ ] 팩스번호
    - [ ] 이메일

- [ ] **수정 테스트**:
  - [ ] 연락처 정보 수정 (예: 전화번호 변경)
  - [ ] "저장" 클릭 → 변경사항 반영 확인

---

## ✅ Phase 4: 접근성 기능 테스트

### 폰트 크기 조절
- [ ] 폰트 크기 조절 버튼 표시 (헤더 또는 사이드바)
- [ ] 100% 클릭 → 기본 크기
- [ ] 125% 클릭 → 중간 크기
- [ ] 150% 클릭 → 큰 크기
- [ ] 페이지 새로고침 후에도 설정 유지

### 테마 전환
- [ ] 테마 전환 버튼 표시
- [ ] 기본 테마 (흰색 배경/검정 텍스트)
- [ ] 다크 모드 (검정 배경/흰색 텍스트)
- [ ] 고대비 모드 (검정 배경/노랑 텍스트)
- [ ] 페이지 새로고침 후에도 설정 유지

### 키보드 접근성
- [ ] Tab 키로 모든 인터랙티브 요소 접근 가능
- [ ] 포커스 인디케이터 명확히 표시 (2px 테두리)
- [ ] Shift+Tab으로 역방향 이동
- [ ] Enter/Space로 버튼 및 링크 활성화
- [ ] Esc로 모달/대화상자 닫기

### 본문 바로가기
- [ ] 페이지 로드 시 Tab 키 한 번 → "본문 바로가기" 링크 포커스
- [ ] Enter 키 → 메인 콘텐츠로 이동

---

## ✅ Phase 5: 반응형 디자인 테스트

### 모바일 (320px~767px)
- [ ] 브라우저 개발자 도구 → 320px 너비 설정
  - [ ] 수평 스크롤 없음
  - [ ] 메뉴가 햄버거 아이콘으로 변경 (또는 세로 정렬)
  - [ ] 콘텐츠 세로 정렬
  - [ ] 버튼 크기 24x24px 이상

### 태블릿 (768px~1023px)
- [ ] 768px 너비 설정
  - [ ] 레이아웃 정상
  - [ ] 2열 그리드 (제품 카드 등)

### 데스크톱 (1024px~)
- [ ] 1024px 이상 너비
  - [ ] 레이아웃 정상
  - [ ] 3열 그리드 (제품 카드 등)
  - [ ] 최대 너비 제한 (읽기 편한 폭)

---

## ✅ Phase 6: 브라우저 호환성

### 주요 브라우저
- [ ] Chrome (최신 버전)
- [ ] Firefox (최신 버전)
- [ ] Safari (최신 버전)
- [ ] Edge (최신 버전)

### 모바일 브라우저
- [ ] Safari (iOS)
- [ ] Chrome (Android)

---

## ✅ Phase 7: 자동화 접근성 테스트

### ESLint 검증
```bash
npm run lint
```
- [ ] 오류 없음 또는 경고만 있음

### Pa11y 테스트
```bash
npm run test:a11y
```
- [ ] 모든 페이지 PASS
- [ ] WCAG 2.2 AA 위반사항 0개

### 브라우저 콘솔 (axe-core)
- [ ] 개발자 도구 콘솔 열기
- [ ] axe-core 자동 검증 메시지 확인
- [ ] 위반사항 0개 (또는 무시 가능한 경고만)

---

## ✅ Phase 8: 데이터베이스 확인

### Prisma Studio
```bash
npx prisma studio
```
- [ ] http://localhost:5555 접속
- [ ] **AssistiveProduct** 테이블:
  - [ ] 8개 레코드 확인
  - [ ] 각 레코드의 필드 정상 표시
  - [ ] publishedAt 필드 값 있음 (공개 상태)

- [ ] **ContactInfo** 테이블:
  - [ ] 1개 레코드 확인 (id: 1)
  - [ ] 모든 필드 정상 표시

---

## 🐛 발견된 이슈

### 이슈 1
- **페이지**:
- **문제**:
- **해결 방법**:

### 이슈 2
- **페이지**:
- **문제**:
- **해결 방법**:

---

## ✅ 테스트 완료 체크

- [ ] 모든 페이지 정상 로딩
- [ ] 8개 제품 정상 표시
- [ ] Admin CRUD 기능 정상
- [ ] 접근성 기능 정상
- [ ] 반응형 디자인 정상
- [ ] 자동화 테스트 통과
- [ ] 데이터베이스 정상

**테스트 결과**: ✅ PASS / ⚠️ 수정 필요 / ❌ FAIL

**테스트 완료 시각**: ________________

**다음 단계**: Vercel 배포 준비
