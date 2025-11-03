# Epic 3: 데이터 관리 및 CMS 구축

## 개요

보조공학 제품, 복지 혜택, 자료실 등 동적 콘텐츠를 효율적으로 관리할 수 있는 데이터베이스 및 CMS 시스템을 구축합니다.

## 비즈니스 가치

- 콘텐츠 업데이트 효율성 극대화
- 비개발자도 콘텐츠 관리 가능
- 최신 정보 유지 (분기별 보조공학, 연간 복지 정책)

## 사용자 스토리

**As a** 디지털 콘텐츠 매니저
**I want** 코드 수정 없이 보조공학 제품과 복지 정보를 업데이트하고
**So that** 항상 최신 정보를 사용자에게 제공할 수 있다

## 수용 기준

- [ ] Drizzle ORM 스키마 완벽 구현
- [ ] SQLite (로컬) 및 PostgreSQL (프로덕션) 연동
- [ ] CRUD API 엔드포인트 구현
- [ ] 데이터 시딩 스크립트
- [ ] 백업 및 복구 시스템
- [ ] CMS UI (간단한 관리자 페이지)

## 관련 Story

- Story 3.1: 데이터베이스 스키마 최종 설계
- Story 3.2: 보조공학 제품 CRUD API
- Story 3.3: 복지 혜택 CRUD API
- Story 3.4: 자료실 파일 업로드 시스템
- Story 3.5: 관리자 대시보드 UI
- Story 3.6: 데이터 마이그레이션 도구
- Story 3.7: 자동 백업 시스템

## 데이터 모델

### 1. Pages (콘텐츠 페이지)
- slug, title, content, category, metadata

### 2. Assistive Tech (보조공학)
- name, category, description, features, image, link

### 3. Welfare Benefits (복지 혜택)
- name, category, description, eligibility, howToApply

### 4. Resources (자료실)
- title, description, fileUrl, fileType, category

## 기술적 고려사항

- Drizzle ORM 활용
- Next.js API Routes
- 파일 업로드: AWS S3 또는 Cloudflare R2
- 이미지 최적화: Sharp
- 검색 기능: Full-text search (PostgreSQL) 또는 Algolia

## CMS 옵션

**옵션 1**: 커스텀 관리자 페이지 (shadcn/ui 기반)
- 장점: 완전한 커스터마이징
- 단점: 개발 시간 증가

**옵션 2**: Headless CMS 연동
- Sanity / Contentful / Strapi
- 장점: 빠른 구축, 강력한 기능
- 단점: 추가 비용

**권장**: Phase 1에서는 옵션 1로 최소 기능 구현, Phase 2에서 옵션 2 고려

## 위험 및 의존성

**위험:**
- 데이터 마이그레이션 복잡성
- 파일 업로드 보안 이슈

**완화 전략:**
- 점진적 마이그레이션
- 파일 타입/크기 검증 철저

## 우선순위

**MEDIUM** - Phase 2 우선 구현

## 예상 작업 기간

4-6주

## 완료 정의 (Definition of Done)

- 모든 데이터 모델 구현 및 테스트 완료
- API 엔드포인트 통합 테스트 통과
- 관리자 페이지 기본 기능 동작
- 데이터 백업 자동화
- 문서화 완료

---

**생성일**: 2025-11-03
**담당자**: 백엔드 개발자
**상태**: Planned
