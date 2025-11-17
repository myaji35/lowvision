# 데이터베이스 설정 가이드

## 개요

이 프로젝트는 **Prisma ORM**을 사용하여 데이터베이스를 관리합니다.

- **로컬 개발**: SQLite (`prisma/dev.db`)
- **프로덕션**: PostgreSQL (환경 변수로 설정)

## 데이터베이스 스키마

### 1. AssistiveProduct (보조공학 제품)

| 필드 | 타입 | 설명 |
|------|------|------|
| id | String (UUID) | 고유 ID |
| name | String | 제품명 |
| category | String | 카테고리 (AI 안경, 웨어러블, 스마트 지팡이 등) |
| manufacturer | String | 제조사 |
| price | Int? | 가격 (원) - null 가능 |
| description | String | 제품 설명 |
| features | String | 주요 기능 (JSON string) |
| imageUrl | String? | 제품 이미지 URL |
| purchaseUrl | String? | 구매 링크 |
| publishedAt | DateTime? | 공개 일시 (null이면 비공개) |
| createdAt | DateTime | 생성일시 |
| updatedAt | DateTime | 수정일시 |

### 2. ContactInfo (연락처 정보)

| 필드 | 타입 | 설명 |
|------|------|------|
| id | Int | 고정값 1 (단일 레코드) |
| organizationKo | String | 조직명 (한글) |
| organizationEn | String | 조직명 (영문) |
| address | String | 주소 |
| phone | String | 전화번호 |
| fax | String | 팩스번호 |
| email | String | 이메일 |
| updatedAt | DateTime | 수정일시 |

## 환경 변수

`.env` 파일에 다음 변수를 설정하세요:

```bash
# SQLite (로컬 개발)
DATABASE_URL="file:./prisma/dev.db"

# PostgreSQL (프로덕션)
# DATABASE_URL="postgresql://user:password@host:port/database"
```

## 주요 명령어

### 1. Prisma 클라이언트 생성

```bash
npx prisma generate
```

Prisma 스키마를 기반으로 타입 안전한 클라이언트를 생성합니다.

### 2. 데이터베이스 스키마 동기화

```bash
npx prisma db push
```

Prisma 스키마를 데이터베이스에 적용합니다. (마이그레이션 없이 개발 환경에서 사용)

### 3. 시드 데이터 추가

```bash
npm run db:seed
```

초기 데이터를 데이터베이스에 추가합니다:
- 연락처 정보 1건
- 보조공학 제품 8건

### 4. 데이터베이스 브라우저

```bash
npx prisma studio
```

브라우저에서 데이터베이스를 시각적으로 탐색하고 편집할 수 있습니다.

### 5. 마이그레이션 생성 (프로덕션용)

```bash
npx prisma migrate dev --name migration_name
```

스키마 변경사항을 마이그레이션 파일로 생성합니다.

## 초기 설정 가이드

프로젝트를 처음 설정할 때:

```bash
# 1. 의존성 설치
npm install

# 2. Prisma 클라이언트 생성
npx prisma generate

# 3. 데이터베이스 스키마 적용
npx prisma db push

# 4. 시드 데이터 추가
npm run db:seed

# 5. 개발 서버 실행
npm run dev
```

이제 http://localhost:3000/admin에서 관리자 페이지를 확인할 수 있습니다.

## 프로덕션 배포

### Vercel 배포

Vercel에서는 PostgreSQL 데이터베이스를 권장합니다:

1. **Vercel Postgres** 또는 **Supabase** 등에서 PostgreSQL 데이터베이스 생성
2. 환경 변수에 `DATABASE_URL` 설정
3. 배포 후 Vercel CLI로 마이그레이션 실행:

```bash
npx vercel env pull .env.local
npx prisma migrate deploy
npx prisma db seed
```

### GCP Cloud Run 배포

1. Cloud SQL (PostgreSQL) 인스턴스 생성
2. `deploy-gcp.sh` 스크립트에 환경 변수 추가:
   ```bash
   --set-env-vars="DATABASE_URL=postgresql://..."
   ```
3. 배포 후 마이그레이션:
   ```bash
   gcloud run services describe lowvision-webapp
   # 데이터베이스 마이그레이션은 Cloud Run Job 또는 초기화 컨테이너로 실행
   ```

## 트러블슈팅

### 1. Prisma 클라이언트 생성 오류

```bash
rm -rf node_modules/.prisma
rm -rf node_modules/@prisma/client
npx prisma generate
```

### 2. 데이터베이스 동기화 실패

```bash
# 데이터베이스 초기화 (주의: 모든 데이터 삭제)
rm prisma/dev.db
npx prisma db push
npm run db:seed
```

### 3. 타입 오류

```bash
npx prisma generate
npm run build
```

## API 엔드포인트

### 제품 관리

- `GET /api/products` - 제품 목록 조회
  - Query: `?category=AI 스마트 안경&published=true`
- `POST /api/products` - 제품 생성
- `GET /api/products/[id]` - 제품 상세 조회
- `PUT /api/products/[id]` - 제품 수정
- `DELETE /api/products/[id]` - 제품 삭제

### 연락처 관리

- `GET /api/contact` - 연락처 정보 조회
- `PUT /api/contact` - 연락처 정보 수정

## 시드 데이터 (Seed Data)

현재 시드 데이터에는 다음이 포함됩니다:

### 보조공학 제품 (8개)
1. **Envision Glasses** - AI 스마트 안경 (4,500,000원)
2. **Meta Ray-Ban Stories** - AI 스마트 안경 (400,000원)
3. **Biped AI 웨어러블** - AI 웨어러블 (가격 미정)
4. **WeWALK Smart Cane** - 스마트 지팡이 (800,000원)
5. **BlindShell Classic 2** - 저시력 특화 스마트폰 (500,000원)
6. **OpenBook 9** - 휴대용 비디오 확대기 (3,500,000원)
7. **PEARL** - 탁상용 비디오 확대기 (5,000,000원)
8. **OrCam MyEye Pro** - AI 웨어러블 (6,000,000원)

### 연락처 정보
- 한국저시력인협회
- 주소: 서울특별시 영등포구 영신로 136 김안과병원 망막병원 지하1층
- 전화: (02)-2677-4662
- 팩스: (02)-2677-4665
- 이메일: lowvision@korea.com

## 참고 자료

- [Prisma 공식 문서](https://www.prisma.io/docs)
- [Next.js와 Prisma](https://www.prisma.io/nextjs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
