# Story 3.1: Admin 인증 및 권한 관리

## 스토리 정보
- **Story ID**: 3.1
- **Epic**: Epic 3 - CMS 및 Admin 기능
- **Title**: Admin 인증 및 권한 관리
- **Priority**: Critical
- **Status**: Draft
- **Estimated Effort**: 8 Story Points
- **Assigned To**: Dev Team
- **Created**: 2025-11-04
- **Last Updated**: 2025-11-04

## 사용자 스토리

**As a** 협회 콘텐츠 관리자
**I want** 안전하게 로그인하여 Admin 페이지에 접근하고
**So that** 인가된 사용자만 콘텐츠를 관리할 수 있다

## 수용 기준

### 필수 요구사항
- [ ] 이메일/비밀번호 기반 로그인
- [ ] NextAuth.js를 사용한 세션 관리
- [ ] 역할 기반 접근 제어 (Admin, Editor)
- [ ] 비밀번호 해싱 (bcrypt)
- [ ] 로그인 페이지 (`/admin/login`)
- [ ] 보호된 Admin 라우트 (미인증 시 리다이렉트)
- [ ] 로그아웃 기능
- [ ] "로그인 유지" 기능 (Remember Me)
- [ ] 접근성 준수 (WCAG 2.2 AA)

### 데이터베이스
- [ ] Users 테이블 (id, email, password, name, role)
- [ ] Sessions 테이블 (NextAuth.js 세션)
- [ ] Drizzle ORM 스키마 정의

### 보안
- [ ] 비밀번호 강도 검증 (최소 8자, 영문+숫자)
- [ ] Rate limiting (로그인 시도 제한)
- [ ] CSRF 보호 (NextAuth.js 내장)
- [ ] 환경 변수로 비밀키 관리

## 기술 스펙

### 컴포넌트 구조
```
/webapp/src/app/admin/
├── login/
│   └── page.tsx                  # 로그인 페이지
├── layout.tsx                    # Admin 레이아웃 (인증 체크)
└── page.tsx                      # Admin 대시보드 (홈)

/webapp/src/lib/
├── auth.ts                       # NextAuth 설정
├── db/
│   ├── schema.ts                 # Drizzle 스키마
│   └── index.ts                  # DB 연결
└── middleware/
    └── auth-check.ts             # 인증 미들웨어
```

### 데이터 모델
```typescript
// schema.ts
import { pgTable, serial, varchar, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', ['admin', 'editor']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: varchar('password', { length: 255 }).notNull(), // bcrypt hash
  name: varchar('name', { length: 100 }).notNull(),
  role: roleEnum('role').default('editor').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// NextAuth 자동 테이블 생성 (sessions, accounts, verification_tokens)
```

### NextAuth 설정
```typescript
// lib/auth.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // DB에서 사용자 조회
        const user = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, credentials.email as string)
        });

        if (!user) {
          return null;
        }

        // 비밀번호 검증
        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) {
          return null;
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as 'admin' | 'editor';
      }
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
```

### 로그인 페이지
```typescript
// app/admin/login/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      setError('이메일 또는 비밀번호가 올바르지 않습니다');
    } else {
      router.push('/admin');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <div>
          <h1 className="text-2xl font-bold">관리자 로그인</h1>
          <p className="text-muted-foreground">한국저시력인협회 CMS</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div role="alert" className="text-destructive text-sm">
              {error}
            </div>
          )}

          <div>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
        </form>
      </div>
    </div>
  );
}
```

### Admin 레이아웃 (인증 체크)
```typescript
// app/admin/layout.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div>
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <h1>Admin Panel</h1>
          <div>
            {session.user?.name} ({session.user?.role})
            <form action={async () => {
              'use server';
              await signOut();
            }}>
              <button type="submit">로그아웃</button>
            </form>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
```

## 초기 사용자 생성

### Seed 스크립트
```typescript
// scripts/seed-admin.ts
import bcrypt from 'bcryptjs';
import { db } from '../src/lib/db';
import { users } from '../src/lib/db/schema';

async function main() {
  const hashedPassword = await bcrypt.hash('changeme123', 10);

  await db.insert(users).values({
    email: 'admin@lowvision.or.kr',
    password: hashedPassword,
    name: '관리자',
    role: 'admin',
  });

  console.log('Admin user created: admin@lowvision.or.kr / changeme123');
}

main();
```

**실행:**
```bash
tsx scripts/seed-admin.ts
```

## 접근성 체크리스트

- [ ] 로그인 폼에 명확한 `<label>` 연결
- [ ] 에러 메시지에 `role="alert"` 적용
- [ ] 비밀번호 입력 시 보기/숨기기 토글 (선택)
- [ ] 포커스 인디케이터 명확
- [ ] 키보드만으로 로그인 가능
- [ ] 스크린 리더 친화적

## 테스트 시나리오

### 기능 테스트
1. 올바른 이메일/비밀번호로 로그인 성공
2. 잘못된 비밀번호로 로그인 실패
3. 존재하지 않는 이메일로 로그인 실패
4. 로그인 후 Admin 페이지 접근 가능
5. 로그아웃 후 Admin 페이지 접근 시 로그인 페이지로 리다이렉트
6. 세션 만료 후 로그인 페이지로 리다이렉트

### 보안 테스트
1. 비밀번호가 평문으로 저장되지 않는지 확인 (bcrypt hash)
2. SQL Injection 방어 (Drizzle ORM 사용)
3. CSRF 토큰 검증 (NextAuth.js 내장)

## 의존성
- NextAuth.js: `npm install next-auth @auth/drizzle-adapter`
- bcryptjs: `npm install bcryptjs @types/bcryptjs`
- Drizzle ORM: 이미 설치됨

## 환경 변수

```env
# .env.local
NEXTAUTH_URL=http://localhost:3020
NEXTAUTH_SECRET=<random-secret-key> # openssl rand -base64 32

# Database (이미 설정됨)
DATABASE_URL=<database-connection-string>
```

## 완료 기준
- [ ] 로그인 페이지 구현 완료
- [ ] NextAuth 설정 완료
- [ ] Admin 레이아웃 인증 체크 구현
- [ ] 초기 Admin 사용자 생성 완료
- [ ] 로그인/로그아웃 테스트 통과
- [ ] 접근성 검증 통과
- [ ] PR 머지 완료

## 참고 자료
- NextAuth.js Docs: https://next-auth.js.org/
- Drizzle ORM: https://orm.drizzle.team/
- bcrypt: https://www.npmjs.com/package/bcryptjs

## 노트
- 초기 Admin 계정 비밀번호는 반드시 변경 필요
- 향후 2FA (이중 인증) 추가 고려
- 비밀번호 재설정 기능은 Phase 2에서 추가
