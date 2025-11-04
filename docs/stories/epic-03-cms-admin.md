# Epic 3: CMS 및 Admin 기능

## 개요

협회 직원이 웹사이트 콘텐츠를 직접 관리할 수 있는 CMS(Content Management System) 및 Admin 패널을 구축합니다. 특히 보조공학 제품, 소식, 자료실 콘텐츠를 쉽게 등록/수정/삭제할 수 있는 기능을 제공합니다.

## 비즈니스 가치

- **콘텐츠 운영 자율성**: 개발자 도움 없이 협회 직원이 직접 콘텐츠 업데이트
- **최신 정보 유지**: 보조공학 신제품, 소식, 자료를 즉시 게시
- **운영 비용 절감**: 외부 개발 의뢰 없이 내부에서 콘텐츠 관리
- **정보 정확성 향상**: 협회 담당자가 직접 관리하여 오류 최소화

## 사용자 스토리

**As a** 협회 콘텐츠 관리자
**I want** 웹사이트의 콘텐츠(보조공학, 소식, 자료)를 직접 등록/수정/삭제하고
**So that** 개발자 도움 없이 신속하게 정보를 업데이트하고 사용자에게 최신 정보를 제공할 수 있다

## 수용 기준

- [ ] 관리자 로그인 및 권한 관리 (Role: Admin, Editor)
- [ ] 보조공학 제품 CRUD (Create, Read, Update, Delete)
- [ ] 소식(News) 콘텐츠 CRUD
- [ ] 자료실(Resources) 콘텐츠 CRUD
- [ ] 이미지/파일 업로드 및 관리
- [ ] 콘텐츠 미리보기 기능
- [ ] 접근성 있는 Admin UI (WCAG 2.2 AA)
- [ ] 모바일/태블릿에서도 사용 가능

## 관련 Story

### Admin 기반 구축
- **Story 3.1**: Admin 인증 및 권한 관리 (NextAuth.js + DB)
- **Story 3.2**: 보조공학 제품 CRUD Admin 페이지 ⭐ (사용자 요청)
- **Story 3.3**: 소식(News) 콘텐츠 CMS
- **Story 3.4**: 자료실(Resources) 콘텐츠 CMS
- **Story 3.5**: 이미지/파일 업로드 및 관리 (Cloud Storage 연동)

### 선택적 기능 (Phase 2)
- Story 3.6: 콘텐츠 버전 관리 및 히스토리
- Story 3.7: 예약 발행 (Scheduled Publishing)
- Story 3.8: 콘텐츠 승인 워크플로우 (Editor → Admin 승인)

## 기술적 고려사항

### 인증 및 권한
- **NextAuth.js**: 세션 기반 인증
- **Database**: Drizzle ORM (SQLite dev, PostgreSQL prod)
- **Role-based Access Control**: Admin, Editor 역할 구분

### 데이터베이스 스키마
```typescript
// User (관리자)
table users {
  id: serial
  email: varchar(255) unique
  name: varchar(100)
  role: enum('admin', 'editor')
  createdAt: timestamp
  updatedAt: timestamp
}

// Session (NextAuth)
table sessions {
  id: serial
  userId: int (FK)
  token: varchar(255)
  expiresAt: timestamp
}

// AssistiveTechProduct
table assistive_tech_products {
  id: serial
  name: varchar(255)
  category: varchar(50)
  description: text
  features: json
  price: varchar(100)
  manufacturer: varchar(255)
  imageUrl: varchar(500)
  externalLink: varchar(500)
  isPublished: boolean
  createdAt: timestamp
  updatedAt: timestamp
  createdBy: int (FK to users)
}

// NewsArticle
table news_articles {
  id: serial
  slug: varchar(255) unique
  category: varchar(50)
  title: varchar(500)
  summary: text
  content: text
  publishedAt: timestamp
  isPinned: boolean
  imageUrl: varchar(500)
  attachments: json
  createdBy: int (FK)
  updatedBy: int (FK)
  createdAt: timestamp
  updatedAt: timestamp
}

// Resource
table resources {
  id: serial
  slug: varchar(255) unique
  category: varchar(50)
  title: varchar(500)
  description: text
  publishedAt: timestamp
  fileFormat: varchar(50)
  fileSize: int
  downloadUrl: varchar(500)
  thumbnailUrl: varchar(500)
  isAccessible: boolean
  downloads: int
  createdBy: int (FK)
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Admin UI 프레임워크
- **shadcn/ui**: 접근성 있는 컴포넌트 (Table, Form, Dialog)
- **React Hook Form**: 폼 관리
- **Zod**: 스키마 검증
- **TanStack Table**: 데이터 테이블 (정렬, 필터링, pagination)

### 파일 업로드
- **Option 1**: Vercel Blob Storage (간단, Vercel 배포 시 권장)
- **Option 2**: Google Cloud Storage (GCP 배포 시)
- **Option 3**: 로컬 파일 시스템 (개발 환경)

## 콘텐츠 요구사항

### 관리 가능한 콘텐츠 유형
1. **보조공학 제품**: 제품명, 카테고리, 설명, 특징, 가격, 이미지, 링크
2. **소식(News)**: 제목, 카테고리, 요약, 본문, 첨부파일, 발행일, 상단고정
3. **자료실(Resources)**: 제목, 카테고리, 설명, 파일, 썸네일, 접근성 여부

### 필수 기능
- 리스트 페이지: 검색, 정렬, 필터, pagination
- 생성/수정 폼: 유효성 검증, 미리보기
- 삭제: 확인 다이얼로그
- 이미지 업로드: 드래그 앤 드롭, 미리보기, 크기 제한

## 우선순위

**CRITICAL** - 콘텐츠 운영의 핵심 기능

## 예상 작업 기간

6-8주 (Phase 2 기간)

## 위험 및 의존성

**위험:**
- 파일 업로드 스토리지 용량 관리
- 관리자 계정 보안 (강력한 비밀번호, 2FA 고려)
- 대용량 파일 업로드 시 성능 이슈

**완화 전략:**
- Cloud Storage 사용 (용량 확장 가능)
- NextAuth.js 보안 모범 사례 적용
- 파일 크기 제한 (이미지 5MB, 문서 50MB)

**의존성:**
- Epic 1 (접근성 기반 구조) 완료
- Epic 2 (콘텐츠 페이지) 완료 - 연동할 콘텐츠 구조 확정

## 완료 정의 (Definition of Done)

- 모든 Story 3.1-3.5 완료
- Admin 페이지 접근성 검증 통과
- 관리자 계정 생성 및 테스트 완료
- 보조공학 제품 최소 10개 등록 테스트
- 소식 최소 5개 등록 테스트
- 자료 최소 5개 등록 테스트
- 파일 업로드/다운로드 테스트 통과
- Production 배포 및 실사용 테스트

## 참고 자료
- PRD: `/docs/prd.md`
- NextAuth.js Docs: https://next-auth.js.org/
- Drizzle ORM Docs: https://orm.drizzle.team/
- shadcn/ui Admin Templates: https://ui.shadcn.com/examples/dashboard
- Vercel Blob Docs: https://vercel.com/docs/storage/vercel-blob

## 노트
- Admin 페이지는 `/admin` 경로에 구축
- 일반 사용자는 접근 불가 (로그인 필요)
- Editor는 생성/수정만, Admin은 삭제 및 사용자 관리 가능
- 향후 다국어 지원 시 콘텐츠도 다국어 관리 필요 (Phase 3)

---

**생성일**: 2025-11-04
**담당자**: Dev Team + 협회 콘텐츠 팀
**상태**: Planned
