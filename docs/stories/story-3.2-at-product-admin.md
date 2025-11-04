# Story 3.2: 보조공학 제품 CRUD Admin 페이지

## 스토리 정보
- **Story ID**: 3.2
- **Epic**: Epic 3 - CMS 및 Admin 기능
- **Title**: 보조공학 제품 등록/수정/삭제 Admin 기능 ⭐ (사용자 요청)
- **Priority**: Critical
- **Status**: Draft
- **Estimated Effort**: 13 Story Points
- **Assigned To**: Dev Team
- **Created**: 2025-11-04
- **Last Updated**: 2025-11-04

## 사용자 스토리

**As a** 협회 콘텐츠 관리자
**I want** 보조공학 제품을 웹 인터페이스에서 직접 등록/수정/삭제하고
**So that** 개발자 도움 없이 신제품을 즉시 웹사이트에 게시하고 정보를 최신으로 유지할 수 있다

## 수용 기준

### 필수 기능
- [ ] 보조공학 제품 목록 페이지 (`/admin/assistive-tech`)
  - [ ] 검색 (제품명, 제조사)
  - [ ] 필터링 (카테고리)
  - [ ] 정렬 (최신순, 이름순)
  - [ ] Pagination (페이지당 20개)
  - [ ] 수정/삭제 액션 버튼
- [ ] 제품 등록 페이지 (`/admin/assistive-tech/new`)
  - [ ] 폼 검증 (필수 필드)
  - [ ] 이미지 업로드 (드래그 앤 드롭)
  - [ ] 특징 다중 입력 (동적 추가/제거)
  - [ ] 미리보기 기능
- [ ] 제품 수정 페이지 (`/admin/assistive-tech/[id]/edit`)
  - [ ] 기존 데이터 로드
  - [ ] 이미지 변경 (기존 유지 또는 새 업로드)
- [ ] 제품 삭제
  - [ ] 확인 다이얼로그
  - [ ] 소프트 삭제 또는 하드 삭제 (선택)
- [ ] 발행/비발행 토글 (isPublished)
- [ ] 접근성 준수 (WCAG 2.2 AA)

### 데이터베이스
- [ ] `assistive_tech_products` 테이블 생성
- [ ] Drizzle ORM 스키마 정의
- [ ] Migration 스크립트

## 디자인 요구사항

### 목록 페이지 레이아웃
```
┌─────────────────────────────────────────────────────┐
│ 보조공학 제품 관리           [+ 새 제품 등록] │
├─────────────────────────────────────────────────────┤
│ 🔍 검색: [..........]  카테고리: [전체 ▾]  │
├─────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────────┐  │
│ │ 썸네일 │ 제품명      │ 카테고리 │ 상태 │ 액션 │  │
│ ├───────────────────────────────────────────────┤  │
│ │ [img]  │ Envision... │ 스마트안경│ 발행 │ ✏️🗑️│  │
│ │ [img]  │ WeWALK...   │ 스마트지팡│ 발행 │ ✏️🗑️│  │
│ └───────────────────────────────────────────────┘  │
│                         < 1 2 3 4 5 >               │
└─────────────────────────────────────────────────────┘
```

### 등록/수정 폼 레이아웃
```
┌─────────────────────────────────────────────────────┐
│ 새 제품 등록                      [취소] [저장] │
├─────────────────────────────────────────────────────┤
│ 제품명*          [..............................]  │
│ 카테고리*        [스마트 안경 ▾]                     │
│ 제조사           [..............................]  │
│ 가격             [..............................]  │
│ 외부 링크        [..............................]  │
│                                                     │
│ 제품 설명*                                          │
│ [..............................................  │
│  ..............................................  │
│  .............................................. ] │
│                                                     │
│ 주요 특징*                                          │
│ 1. [............................] [- 제거]          │
│ 2. [............................] [- 제거]          │
│ 3. [............................] [- 제거]          │
│                                [+ 특징 추가]        │
│                                                     │
│ 이미지 업로드                                        │
│ ┌─────────────────────────────────────────┐        │
│ │  이미지를 드래그하거나 클릭하여 업로드    │        │
│ │         [미리보기: img.jpg]              │        │
│ └─────────────────────────────────────────┘        │
│                                                     │
│ ☐ 즉시 발행 (isPublished)                          │
│                                                     │
│                            [미리보기] [저장]        │
└─────────────────────────────────────────────────────┘
```

## 기술 스펙

### 컴포넌트 구조
```
/webapp/src/app/admin/assistive-tech/
├── page.tsx                           # 목록 페이지
├── new/
│   └── page.tsx                       # 등록 페이지
├── [id]/
│   └── edit/
│       └── page.tsx                   # 수정 페이지
└── components/
    ├── ProductTable.tsx               # 제품 목록 테이블
    ├── ProductForm.tsx                # 제품 등록/수정 폼
    ├── ImageUpload.tsx                # 이미지 업로드 컴포넌트
    ├── FeatureInput.tsx               # 특징 다중 입력
    ├── DeleteDialog.tsx               # 삭제 확인 다이얼로그
    └── ProductPreview.tsx             # 미리보기 모달
```

### 데이터베이스 스키마
```typescript
// lib/db/schema.ts
import { pgTable, serial, varchar, text, boolean, timestamp, integer, json } from 'drizzle-orm/pg-core';

export const assistiveTechProducts = pgTable('assistive_tech_products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  category: varchar('category', { length: 50 }).notNull(),
  // 'smart-glasses' | 'wearable' | 'smart-cane' | 'smartphone' | 'video-magnifier'
  description: text('description').notNull(),
  features: json('features').$type<string[]>().notNull(), // ["특징1", "특징2"]
  manufacturer: varchar('manufacturer', { length: 255 }),
  price: varchar('price', { length: 100 }), // "약 $1,500" (문자열)
  imageUrl: varchar('image_url', { length: 500 }),
  externalLink: varchar('external_link', { length: 500 }),
  isPublished: boolean('is_published').default(false).notNull(),
  createdBy: integer('created_by').references(() => users.id),
  updatedBy: integer('updated_by').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

### API Routes

#### 목록 조회
```typescript
// app/api/admin/assistive-tech/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { assistiveTechProducts } from '@/lib/db/schema';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';

  // Drizzle ORM 쿼리
  const products = await db.query.assistiveTechProducts.findMany({
    where: (products, { and, like, eq }) => {
      const conditions = [];
      if (search) {
        conditions.push(like(products.name, `%${search}%`));
      }
      if (category && category !== 'all') {
        conditions.push(eq(products.category, category));
      }
      return and(...conditions);
    },
    limit,
    offset: (page - 1) * limit,
    orderBy: (products, { desc }) => [desc(products.createdAt)],
  });

  const total = await db.select({ count: sql`count(*)` })
    .from(assistiveTechProducts)
    .where(/* same conditions */);

  return NextResponse.json({
    products,
    pagination: {
      page,
      limit,
      total: total[0].count,
      totalPages: Math.ceil(total[0].count / limit),
    },
  });
}
```

#### 생성
```typescript
// POST /api/admin/assistive-tech
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  // Zod 검증
  const schema = z.object({
    name: z.string().min(1),
    category: z.enum(['smart-glasses', 'wearable', 'smart-cane', 'smartphone', 'video-magnifier']),
    description: z.string().min(10),
    features: z.array(z.string()).min(1),
    manufacturer: z.string().optional(),
    price: z.string().optional(),
    imageUrl: z.string().url().optional(),
    externalLink: z.string().url().optional(),
    isPublished: z.boolean().default(false),
  });

  const validated = schema.parse(body);

  const [product] = await db.insert(assistiveTechProducts)
    .values({
      ...validated,
      createdBy: parseInt(session.user.id),
      updatedBy: parseInt(session.user.id),
    })
    .returning();

  return NextResponse.json(product, { status: 201 });
}
```

#### 수정
```typescript
// PATCH /api/admin/assistive-tech/[id]
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const validated = schema.partial().parse(body); // partial: 모든 필드 optional

  const [updated] = await db.update(assistiveTechProducts)
    .set({
      ...validated,
      updatedBy: parseInt(session.user.id),
      updatedAt: new Date(),
    })
    .where(eq(assistiveTechProducts.id, parseInt(params.id)))
    .returning();

  if (!updated) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(updated);
}
```

#### 삭제
```typescript
// DELETE /api/admin/assistive-tech/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  await db.delete(assistiveTechProducts)
    .where(eq(assistiveTechProducts.id, parseInt(params.id)));

  return NextResponse.json({ success: true });
}
```

### 제품 등록 폼
```typescript
// components/ProductForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import ImageUpload from './ImageUpload';

const schema = z.object({
  name: z.string().min(1, '제품명은 필수입니다'),
  category: z.enum(['smart-glasses', 'wearable', 'smart-cane', 'smartphone', 'video-magnifier']),
  description: z.string().min(10, '설명은 최소 10자 이상입니다'),
  features: z.array(z.object({ value: z.string().min(1) })).min(1, '최소 1개 특징 필요'),
  manufacturer: z.string().optional(),
  price: z.string().optional(),
  imageUrl: z.string().optional(),
  externalLink: z.string().url('올바른 URL을 입력하세요').optional().or(z.literal('')),
  isPublished: z.boolean().default(false),
});

type FormData = z.infer<typeof schema>;

export default function ProductForm({ initialData }: { initialData?: any }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: initialData || {
      features: [{ value: '' }],
      isPublished: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'features',
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // features 변환: [{ value: "특징1" }] → ["특징1"]
    const payload = {
      ...data,
      features: data.features.map(f => f.value),
    };

    const url = initialData
      ? `/api/admin/assistive-tech/${initialData.id}`
      : `/api/admin/assistive-tech`;

    const method = initialData ? 'PATCH' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push('/admin/assistive-tech');
      router.refresh();
    } else {
      alert('저장 실패');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name">제품명 *</label>
        <Input id="name" {...register('name')} />
        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="category">카테고리 *</label>
        <Select {...register('category')}>
          <option value="smart-glasses">AI 스마트 안경</option>
          <option value="wearable">AI 웨어러블</option>
          <option value="smart-cane">스마트 지팡이</option>
          <option value="smartphone">저시력 특화 스마트폰</option>
          <option value="video-magnifier">비디오 확대기</option>
        </Select>
        {errors.category && <p className="text-destructive text-sm">{errors.category.message}</p>}
      </div>

      <div>
        <label htmlFor="manufacturer">제조사</label>
        <Input id="manufacturer" {...register('manufacturer')} />
      </div>

      <div>
        <label htmlFor="price">가격</label>
        <Input id="price" {...register('price')} placeholder="예: 약 $1,500" />
      </div>

      <div>
        <label htmlFor="externalLink">외부 링크</label>
        <Input id="externalLink" {...register('externalLink')} placeholder="https://..." />
        {errors.externalLink && <p className="text-destructive text-sm">{errors.externalLink.message}</p>}
      </div>

      <div>
        <label htmlFor="description">제품 설명 *</label>
        <Textarea id="description" {...register('description')} rows={5} />
        {errors.description && <p className="text-destructive text-sm">{errors.description.message}</p>}
      </div>

      <div>
        <label>주요 특징 *</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <Input
              {...register(`features.${index}.value`)}
              placeholder={`특징 ${index + 1}`}
            />
            {fields.length > 1 && (
              <Button type="button" variant="destructive" onClick={() => remove(index)}>
                제거
              </Button>
            )}
          </div>
        ))}
        <Button type="button" variant="outline" onClick={() => append({ value: '' })}>
          + 특징 추가
        </Button>
        {errors.features && <p className="text-destructive text-sm">{errors.features.message}</p>}
      </div>

      <div>
        <label>이미지 업로드</label>
        <ImageUpload
          onUploadComplete={(url) => setValue('imageUrl', url)}
          initialImageUrl={initialData?.imageUrl}
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="isPublished" {...register('isPublished')} />
        <label htmlFor="isPublished">즉시 발행</label>
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          취소
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '저장 중...' : (initialData ? '수정' : '등록')}
        </Button>
      </div>
    </form>
  );
}
```

## 이미지 업로드 (Vercel Blob 사용)

```typescript
// components/ImageUpload.tsx
'use client';

import { useState } from 'react';
import { upload } from '@vercel/blob/client';

export default function ImageUpload({ onUploadComplete, initialImageUrl }: {
  onUploadComplete: (url: string) => void;
  initialImageUrl?: string;
}) {
  const [imageUrl, setImageUrl] = useState(initialImageUrl || '');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 크기 제한 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('이미지 크기는 5MB 이하여야 합니다');
      return;
    }

    setIsUploading(true);

    try {
      const blob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });

      setImageUrl(blob.url);
      onUploadComplete(blob.url);
    } catch (error) {
      alert('업로드 실패');
    }

    setIsUploading(false);
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      {isUploading && <p>업로드 중...</p>}
      {imageUrl && (
        <div>
          <p>미리보기:</p>
          <img src={imageUrl} alt="제품 이미지" className="max-w-xs" />
        </div>
      )}
    </div>
  );
}
```

## 접근성 체크리스트

- [ ] 폼 필드에 명확한 `<label>` 연결
- [ ] 에러 메시지에 `role="alert"` 또는 `aria-live`
- [ ] 필수 필드에 `*` 표시 및 `aria-required`
- [ ] 파일 업로드 버튼 키보드 접근 가능
- [ ] 테이블에 적절한 `<caption>`, `<th scope>`
- [ ] 삭제 다이얼로그에 명확한 제목 및 설명
- [ ] 키보드만으로 전체 CRUD 가능
- [ ] 스크린 리더 테스트

## 테스트 시나리오

### 기능 테스트
1. 새 제품 등록 (모든 필드 입력)
2. 이미지 업로드
3. 특징 추가/제거
4. 제품 수정 (이미지 변경 포함)
5. 제품 삭제 (다이얼로그 확인)
6. 발행/비발행 토글
7. 검색 기능
8. 카테고리 필터링
9. Pagination

### 유효성 검증 테스트
1. 필수 필드 누락 시 에러
2. URL 형식 오류 시 에러
3. 이미지 크기 초과 시 에러

## 의존성
- Story 3.1 완료 (Admin 인증)
- React Hook Form: `npm install react-hook-form`
- Zod: `npm install zod @hookform/resolvers`
- Vercel Blob (이미지 업로드): `npm install @vercel/blob`

## 완료 기준
- [ ] 모든 CRUD 기능 구현 완료
- [ ] 이미지 업로드 기능 완료
- [ ] 폼 검증 완료
- [ ] 테스트 데이터 10개 등록
- [ ] 접근성 검증 통과
- [ ] 코드 리뷰 완료
- [ ] PR 머지 완료

## 참고 자료
- React Hook Form: https://react-hook-form.com/
- Zod: https://zod.dev/
- Vercel Blob: https://vercel.com/docs/storage/vercel-blob
- TanStack Table: https://tanstack.com/table/

## 노트
- 초기 버전은 하드 삭제, 추후 소프트 삭제로 변경 가능
- 이미지는 Vercel Blob에 저장 (무료 플랜 1GB)
- 향후 일괄 업로드 (CSV) 기능 추가 고려
