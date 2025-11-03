# Story 1.1: 접근성 린트 및 자동 검증 설정

**Epic**: Epic 1 - 접근성 우선 기반 구조 구축
**Priority**: HIGH
**Points**: 3
**Status**: ✅ DONE

## 사용자 스토리

**As a** 개발자
**I want** 코드 작성 시 접근성 문제를 실시간으로 감지하고
**So that** WCAG 2.2 기준을 자동으로 준수할 수 있다

## 설명

개발 과정에서 접근성 문제를 조기에 발견하고 수정할 수 있도록 자동화된 린팅 및 검증 시스템을 구축합니다.

## 수용 기준

- [x] eslint-plugin-jsx-a11y 설치 및 설정
- [x] @axe-core/react 설치
- [x] ESLint 규칙 엄격 설정 (error level)
- [x] 주요 WCAG 2.2 규칙 포함
  - [x] anchor-is-valid
  - [x] alt-text
  - [x] aria-props
  - [x] click-events-have-key-events
  - [x] heading-has-content
  - [x] label-has-associated-control
- [x] pre-commit hook 고려 (향후)

## 기술 구현

### 설치된 패키지
```json
{
  "eslint-plugin-jsx-a11y": "latest",
  "@axe-core/react": "latest"
}
```

### ESLint 설정 (eslint.config.mjs)
```js
import jsxA11y from "eslint-plugin-jsx-a11y";

{
  plugins: {
    "jsx-a11y": jsxA11y,
  },
  rules: {
    ...jsxA11y.configs.recommended.rules,
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/alt-text": "error",
    // ... 추가 규칙
  }
}
```

## 테스트 계획

- [x] ESLint 실행: `npm run lint`
- [x] 기존 코드 접근성 검증
- [x] CI/CD 파이프라인 통합 (향후)

## 완료 정의 (DoD)

- [x] 모든 패키지 설치 완료
- [x] ESLint 설정 완료
- [x] 개발 서버에서 실시간 검증 작동
- [x] 팀원 교육 자료 작성 (CLAUDE.md에 포함)

## 작업 로그

**2025-11-03**:
- ✅ eslint-plugin-jsx-a11y 설치
- ✅ @axe-core/react 설치
- ✅ eslint.config.mjs 업데이트
- ✅ 접근성 규칙 적용

## 관련 파일

- `/webapp/eslint.config.mjs` - ESLint 설정
- `/webapp/package.json` - 패키지 의존성
- `/CLAUDE.md` - 접근성 가이드

## 참고 자료

- [eslint-plugin-jsx-a11y 문서](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [axe-core 문서](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)

---

**생성일**: 2025-11-03
**완료일**: 2025-11-03
**담당자**: Development Team
