# Story 1.3: 키보드 네비게이션 최적화

**Epic**: Epic 1 - 접근성 우선 기반 구조 구축
**Priority**: HIGH
**Points**: 5
**Status**: 📋 TODO

## 사용자 스토리

**As a** 저시력 사용자 (마우스 사용이 어려운)
**I want** 키보드만으로 웹사이트의 모든 기능을 사용하고
**So that** 시각적 포인팅 없이도 정보에 접근할 수 있다

## 설명

키보드 사용자가 Tab, Shift+Tab, Enter, Space, 화살표 키만으로 모든 인터랙션을 완료할 수 있도록 최적화합니다.

## 수용 기준

- [ ] 모든 인터랙티브 요소에 키보드 접근 가능
- [ ] Tab 순서가 논리적 (왼쪽→오른쪽, 위→아래)
- [ ] 포커스 트랩(Focus Trap)이 필요한 곳에 구현 (모달 등)
- [ ] Skip to main content 링크 작동
- [ ] 드롭다운 메뉴 키보드 조작 가능
- [ ] 모든 버튼/링크 Enter 또는 Space로 활성화
- [ ] 사용자 정의 컴포넌트 ARIA 패턴 준수
- [ ] 키보드 단축키 문서화

## 기술 구현

### 1. 네이티브 HTML 요소 우선 사용
```tsx
// ❌ 나쁜 예
<div onClick={handleClick}>클릭</div>

// ✅ 좋은 예
<button onClick={handleClick}>클릭</button>
```

### 2. 커스텀 컴포넌트에 키보드 지원
```tsx
const CustomButton = () => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      클릭
    </div>
  );
};
```

### 3. Navigation Menu 키보드 지원
```tsx
// shadcn/ui NavigationMenu는 이미 키보드 지원
// 화살표 키로 메뉴 이동
// Enter로 하위 메뉴 열기
// Escape로 메뉴 닫기
```

### 4. Focus Trap (모달용)
```tsx
import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }

      if (e.key === 'Escape') {
        onClose();
      }
    };

    firstElement?.focus();
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} role="dialog" aria-modal="true">
      {children}
    </div>
  );
};
```

## 테스트 계획

### 수동 테스트 체크리스트
- [ ] Tab 키로 전체 페이지 탐색
- [ ] Shift+Tab으로 역방향 탐색
- [ ] 모든 버튼 Enter/Space로 활성화
- [ ] 드롭다운 메뉴 화살표 키로 조작
- [ ] 모달 열림 시 포커스 트랩 작동
- [ ] Escape로 모달 닫기
- [ ] Skip to main 링크 작동
- [ ] 포커스 인디케이터 항상 표시

### 자동화 테스트
```tsx
// Jest + Testing Library
test('button is keyboard accessible', () => {
  render(<Button>클릭</Button>);
  const button = screen.getByRole('button');

  button.focus();
  expect(button).toHaveFocus();

  fireEvent.keyDown(button, { key: 'Enter' });
  expect(mockHandler).toHaveBeenCalled();
});
```

## 주요 키보드 단축키

| 키 | 기능 |
|---|---|
| Tab | 다음 요소로 포커스 이동 |
| Shift + Tab | 이전 요소로 포커스 이동 |
| Enter | 링크/버튼 활성화 |
| Space | 버튼 활성화, 체크박스 토글 |
| Escape | 모달/드롭다운 닫기 |
| ↑↓←→ | 메뉴 탐색 |

## 완료 정의 (DoD)

- [ ] 모든 페이지 키보드 테스트 통과
- [ ] Focus Trap 컴포넌트 구현 및 테스트
- [ ] 커스텀 컴포넌트 ARIA 패턴 적용
- [ ] 키보드 단축키 문서 작성
- [ ] 실제 사용자 테스트 통과 (5명)

## 의존성

- shadcn/ui 컴포넌트 (이미 키보드 지원)
- react-focus-lock (옵션)

## 예상 작업 기간

1주

## 관련 Story

- Story 1.1: 접근성 린트 (완료)
- Story 1.4: 스크린 리더 호환성

## 참고 자료

- [WCAG 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [WCAG 2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [WCAG 2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

**생성일**: 2025-11-03
**담당자**: Frontend Team
