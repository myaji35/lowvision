# 시각장애인과 보호자를 위한 간단한 회원 시스템

> **핵심 원칙**: 시각장애인의 디지털 접근성 장벽을 최소화하고, 보호자가 쉽게 도울 수 있는 단순한 시스템

---

## 1. 설계 철학

### 기본 가정
- 많은 저시력인은 **디지털 기기 사용에 어려움**이 있음
- 특히 **50대 이상 노인** 저시력인은 스마트폰/PC 접근성 낮음
- **보호자(가족)**가 대신 가입하고 정보를 받아주는 경우가 많음
- **전화 상담**이 여전히 가장 신뢰받는 채널

### 핵심 원칙
1. **최소 정보만 수집**: 이름, 전화번호만 필수
2. **다채널 가입**: 온라인/전화/팩스/우편 모두 가능
3. **보호자 대리 가입 허용**: 가족이 대신 가입 가능
4. **복잡한 기능 배제**: 로그인, 비밀번호 찾기 등 최소화
5. **접근성 최우선**: WCAG 2.2 AA 준수, 대활자, 고대비

---

## 2. 회원 유형 (2가지만)

### A. 당사자 회원 (저시력인 본인)
```
필수 정보:
- 이름
- 전화번호

선택 정보:
- 이메일
- 생년월일
- 주소 (우편 발송용)
- 진단명 (황반변성, 녹내장 등)

혜택:
- 협회 소식 문자/이메일 발송
- 복지 상담 우선 연결
- 행사 참여 안내
```

### B. 보호자 회원 (가족/돌봄 제공자)
```
필수 정보:
- 보호자 이름
- 전화번호
- 저시력인과의 관계 (부모/자녀/배우자 등)

선택 정보:
- 이메일
- 저시력인 이름 (본인 동의 시)
- 주소

혜택:
- 가족 대상 프로그램 안내
- 보호자 교육 자료 발송
- 저시력인 지원 정보
```

---

## 3. 가입 방법 (4가지 채널)

### ① 온라인 가입 (웹사이트)

**페이지**: `/members/register`

**UI 설계**:
```
┌─────────────────────────────────────────┐
│ 회원 가입                                │
├─────────────────────────────────────────┤
│                                          │
│ [선택] 가입 유형                          │
│  ○ 당사자 (저시력인 본인)                 │
│  ○ 보호자 (가족/돌봄 제공자)              │
│                                          │
│ [필수] 이름                               │
│ [                    ]                   │
│                                          │
│ [필수] 전화번호                           │
│ [  010  ] - [      ] - [      ]          │
│                                          │
│ [선택] 이메일                             │
│ [                    ]                   │
│                                          │
│ [선택] 주소 (우편 발송용)                  │
│ [우편번호 찾기]                           │
│ [                    ]                   │
│ [                    ]                   │
│                                          │
│ ┌────────────────────────────┐          │
│ │  [가입하기]                 │          │
│ └────────────────────────────┘          │
│                                          │
│ 💬 어려우시면 전화로 가입하세요            │
│    전화: (02)2677-4662                   │
└─────────────────────────────────────────┘
```

**접근성 요구사항**:
- 폼 필드 라벨 명확 (`<label for="">`)
- 에러 메시지 스크린리더 호환 (`aria-describedby`)
- 큰 버튼 (최소 44x44 CSS 픽셀)
- 탭 순서 논리적 배치
- 폰트 크기: 최소 1.125rem (18px)

### ② 전화 가입 (상담원 수기 입력)

**프로세스**:
```
1. 회원이 (02)2677-4662로 전화
2. 상담원이 안내
   - "한국저시력인협회입니다. 회원 가입을 도와드릴게요"
   - "이름과 전화번호만 알려주시면 됩니다"
3. 상담원이 관리자 페이지에서 수기 등록
   - /admin/members/create (전화 가입 전용)
4. 가입 완료 후 안내
   - "가입이 완료되었습니다. 문자로 확인 메시지를 보내드렸어요"

평균 소요 시간: 3분 이내
```

**상담원 스크립트**:
```
[시작]
"안녕하세요, 한국저시력인협회입니다.
회원 가입을 도와드릴까요? (네/아니오)

[필수 정보]
이름을 알려주시겠어요?
(입력: ________)

전화번호를 알려주시겠어요?
(입력: 010-____-____)

[선택 정보 - 간단히 안내]
이메일 주소가 있으시면 알려주세요. 없으시면 괜찮습니다.
(있음: 입력 / 없음: 건너뛰기)

우편물을 받으실 주소가 있으시면 알려주세요.
(있음: 입력 / 없음: 건너뛰기)

[완료]
가입이 완료되었습니다!
문자 메시지로 확인 메시지를 보내드렸어요.
앞으로 협회 소식을 전화와 문자로 안내해드리겠습니다.
감사합니다!"
```

### ③ 팩스 가입

**양식**: A4 1장 (대활자 인쇄)
```
┌───────────────────────────────────────────┐
│    한국저시력인협회 회원 가입 신청서        │
├───────────────────────────────────────────┤
│                                            │
│ □ 당사자   □ 보호자                         │
│                                            │
│ 이름: ___________________________          │
│                                            │
│ 전화번호: ___ - ____ - ____                │
│                                            │
│ 이메일: ___________________________        │
│                                            │
│ 주소: _____________________________        │
│      _____________________________         │
│                                            │
│ 가입일: 2025년 __월 __일                   │
│                                            │
│ 서명: _______________                      │
│                                            │
│ ▶ 팩스: (02)2677-4665                     │
│ ▶ 우편: (우편번호) (주소)                  │
└───────────────────────────────────────────┘
```

**처리 프로세스**:
- 팩스 수신 → 상담원이 수기 입력 (전화 가입과 동일)
- 입력 완료 후 본인에게 확인 전화

### ④ 우편 가입

- 팩스 양식과 동일
- 우편 주소: (협회 주소)
- 처리 기간: 우편 수령 후 3일 이내

---

## 4. 회원 데이터 구조 (최소한)

### 데이터베이스 스키마

```sql
CREATE TABLE members (
  -- 기본 정보
  id SERIAL PRIMARY KEY,
  member_type VARCHAR(20) NOT NULL, -- 'individual' 또는 'caregiver'
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE, -- 전화번호가 고유 식별자

  -- 선택 정보
  email VARCHAR(255),
  birth_date DATE,
  postal_code VARCHAR(10),
  address TEXT,
  address_detail TEXT,

  -- 저시력 정보 (당사자만)
  condition VARCHAR(100), -- 'AMD', 'Glaucoma', 'RP' 등
  diagnosis_date DATE,

  -- 보호자 정보 (보호자 회원만)
  caregiver_relationship VARCHAR(50), -- '부모', '자녀', '배우자' 등
  patient_name VARCHAR(100), -- 저시력인 이름 (본인 동의 시)

  -- 수신 동의
  sms_consent BOOLEAN DEFAULT true,
  email_consent BOOLEAN DEFAULT true,
  mail_consent BOOLEAN DEFAULT true,

  -- 가입 경로
  signup_method VARCHAR(20), -- 'online', 'phone', 'fax', 'mail'

  -- 메타 정보
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'active', -- 'active', 'inactive'

  -- 메모 (상담원용)
  notes TEXT
);

-- 전화번호 인덱스 (빠른 검색)
CREATE INDEX idx_members_phone ON members(phone);

-- 이메일 인덱스
CREATE INDEX idx_members_email ON members(email);
```

---

## 5. 회원 관리 (관리자용)

### 관리자 대시보드 `/admin/members`

**기능**:
```
1. 회원 목록
   - 검색: 이름, 전화번호, 이메일
   - 필터: 가입 유형, 가입 방법, 상태
   - 정렬: 가입일, 이름 가나다순

2. 회원 등록 (전화/팩스/우편 대행)
   - 간단한 폼
   - 필수: 이름, 전화번호만
   - 가입 방법 자동 태그 ('phone', 'fax', 'mail')

3. 회원 수정
   - 전화번호 변경 시 확인 필요
   - 메모 추가 (상담 이력)

4. 대량 문자/이메일 발송
   - 세그먼트 선택 (당사자/보호자)
   - 템플릿 사용
```

**UI 예시**:
```
┌─────────────────────────────────────────────────────┐
│ 회원 관리                                  [새 회원 등록] │
├─────────────────────────────────────────────────────┤
│ 검색: [이름/전화번호]  [검색]                           │
│                                                      │
│ 필터: [전체 ▼] [당사자/보호자] [가입 방법 ▼]            │
│                                                      │
│ ┌──┬────────┬─────────────┬──────┬──────┬─────┐   │
│ │No│ 이름   │ 전화번호     │ 유형 │ 가입일│ 상태 │   │
│ ├──┼────────┼─────────────┼──────┼──────┼─────┤   │
│ │1 │ 홍길동 │ 010-1234-5678│ 당사자│ 1/5  │ 활성 │   │
│ │2 │ 김영희 │ 010-9876-5432│ 보호자│ 1/4  │ 활성 │   │
│ └──┴────────┴─────────────┴──────┴──────┴─────┘   │
│                                                      │
│ 총 회원: 245명 (당사자 180명 / 보호자 65명)            │
└─────────────────────────────────────────────────────┘
```

---

## 6. 회원 혜택 (단순화)

### 자동 발송 시스템

#### A. 가입 완료 메시지 (SMS)

```
[한국저시력인협회]
OO님, 회원 가입을 환영합니다!

협회 소식을 문자로 보내드리며,
언제든 전화 상담(02-2677-4662)을
이용하실 수 있습니다.

- 한국저시력인협회
```

#### B. 월간 소식 (SMS, 문자량 최소화)

```
[KLA 2월 소식]
• 2/15(토) 보조공학 체험회 (서울)
• 신규 복지 정책 안내
자세한 내용은 전화 문의하세요.
☎ 02-2677-4662
```

#### C. 중요 공지 (긴급)

```
[긴급] 한국저시력인협회

2025년 활동지원 서비스
신청 기간이 2월 말까지입니다.

상담 문의: 02-2677-4662
```

### 이메일 뉴스레터 (선택 수신자만)

- 월 1회 발송
- 대활자, 고대비 디자인
- HTML + 플레인 텍스트 병행
- 내용: 보조공학 정보, 복지 정책, 행사 안내

---

## 7. 개인정보 보호

### 수집 최소화 원칙

```
필수 수집: 이름, 전화번호만
선택 수집: 이메일, 주소 (본인 동의 시)

비수집 항목:
- 주민등록번호 ❌
- 계좌번호 ❌
- 신용카드 정보 ❌
- 의료 기록 ❌ (진단명 정도만 자발적 제공)
```

### 개인정보 처리방침

```
1. 수집 목적
   - 협회 소식 안내
   - 복지 상담 제공
   - 행사 참여 안내

2. 보유 기간
   - 회원 탈퇴 시까지
   - 탈퇴 후 즉시 삭제 (법적 보존 의무 제외)

3. 제3자 제공
   - 원칙적 금지
   - 법적 요구 시에만 (예: 수사 기관 요청)

4. 회원 권리
   - 정보 열람 요구 (전화/방문)
   - 정보 수정 요구
   - 탈퇴 요구 (전화 한 통으로 즉시 처리)
```

---

## 8. 구현 우선순위

### Phase 1 (필수, D+0~2개월)

```
1. 온라인 회원가입 폼
   - /members/register 페이지
   - 필수 필드만: 이름, 전화번호, 유형
   - 접근성 준수 (WCAG 2.2 AA)

2. 관리자 페이지
   - /admin/members (회원 목록)
   - /admin/members/create (전화/팩스 대행 등록)
   - 간단한 CRUD

3. 가입 완료 SMS 자동 발송
   - SendGrid/Twilio 연동

4. 개인정보 처리방침 페이지
   - /privacy 페이지
```

### Phase 2 (권장, D+2~6개월)

```
1. 이메일 뉴스레터 시스템
   - Mailchimp 연동
   - 대활자 템플릿

2. 대량 SMS 발송 기능
   - 관리자 페이지에서 세그먼트 선택

3. 회원 통계 대시보드
   - 가입 추이
   - 유형별 분포
```

### Phase 3 (선택, D+6개월 이후)

```
1. 회원 로그인 (필요 시)
   - 전화번호 + SMS 인증 (비밀번호 불필요)

2. 모바일 앱 (선택)
```

---

## 9. 비용 추정 (연간)

| 항목 | 도구 | 비용 |
|------|------|------|
| **SMS 발송** | 알리고, 카카오 비즈메시지 | 월 10만원 (3,000건 기준) |
| **이메일 발송** | Mailchimp Free | 무료 (2,000명까지) |
| **데이터베이스** | Supabase Free | 무료 (초기) |
| **웹 호스팅** | Vercel/GCP | 월 5만원 |
| **개인정보 보호** | SSL 인증서 | 무료 (Let's Encrypt) |
| **총계** | | **연 180만원** |

---

## 10. 성공 지표 (간단)

| 지표 | 6개월 목표 | 12개월 목표 |
|------|-----------|------------|
| 총 회원 수 | 200명 | 500명 |
| 전화 가입 비율 | 40% | 30% (온라인 증가 목표) |
| SMS 오픈율 | 70% | 80% |
| 탈퇴율 | <5% | <5% |

---

## 11. 핵심 차별점

### 기존 복잡한 회원 시스템과의 차이

| 기존 시스템 | 우리 시스템 |
|------------|-----------|
| 이메일 + 비밀번호 필수 | 이름 + 전화번호만 |
| 이메일 인증 필수 | 인증 불필요 |
| 로그인해야 정보 열람 | 전화 한 통으로 상담 |
| 비밀번호 찾기 복잡 | 비밀번호 없음 (선택적) |
| 온라인 전용 | 전화/팩스/우편 병행 |
| 본인만 가입 가능 | 보호자 대리 가입 허용 |

### 접근성 장벽 제거

```
❌ 제거한 장벽:
- 복잡한 회원가입 양식 (10개 이상 필드)
- 이메일 인증 링크 (저시력인은 이메일 확인 어려움)
- 비밀번호 규칙 (대소문자/숫자/특수문자)
- 로그인 필수 (전화 상담으로 대체)
- CAPTCHA (시각장애인 접근 불가)

✅ 추가한 지원:
- 전화 가입 (디지털 소외 계층)
- 보호자 대리 가입 (고령 저시력인)
- SMS 중심 소통 (이메일보다 접근 쉬움)
- 큰 버튼, 대활자 (시각 접근성)
- 간단한 UI (인지 부담 최소화)
```

---

## 12. 구현 예시 (코드)

### 회원가입 폼 (`/src/app/members/register/page.tsx`)

```tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    memberType: 'individual', // 'individual' 또는 'caregiver'
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 검증
    if (!formData.name || !formData.phone) {
      alert('이름과 전화번호는 필수 항목입니다.');
      return;
    }

    try {
      const response = await fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('가입이 완료되었습니다! 문자 메시지를 확인해주세요.');
        // 성공 페이지로 이동
      }
    } catch (error) {
      alert('오류가 발생했습니다. 전화로 가입해주세요: 02-2677-4662');
    }
  };

  return (
    <div className="container max-w-2xl py-12">
      <h1 className="text-3xl font-bold mb-8">회원 가입</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 가입 유형 */}
        <div>
          <Label className="text-xl mb-4 block">가입 유형</Label>
          <RadioGroup
            value={formData.memberType}
            onValueChange={(value) =>
              setFormData({ ...formData, memberType: value })
            }
          >
            <div className="flex items-center space-x-3 mb-3">
              <RadioGroupItem value="individual" id="individual" />
              <Label htmlFor="individual" className="text-lg cursor-pointer">
                당사자 (저시력인 본인)
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="caregiver" id="caregiver" />
              <Label htmlFor="caregiver" className="text-lg cursor-pointer">
                보호자 (가족/돌봄 제공자)
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* 이름 (필수) */}
        <div>
          <Label htmlFor="name" className="text-xl mb-2 block">
            이름 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            required
            className="text-lg py-6"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            aria-required="true"
          />
        </div>

        {/* 전화번호 (필수) */}
        <div>
          <Label htmlFor="phone" className="text-xl mb-2 block">
            전화번호 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="010-1234-5678"
            className="text-lg py-6"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            aria-required="true"
          />
        </div>

        {/* 이메일 (선택) */}
        <div>
          <Label htmlFor="email" className="text-xl mb-2 block">
            이메일 (선택)
          </Label>
          <Input
            id="email"
            type="email"
            className="text-lg py-6"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <p className="text-sm text-muted-foreground mt-2">
            이메일이 있으면 뉴스레터를 받으실 수 있습니다.
          </p>
        </div>

        {/* 주소 (선택) */}
        <div>
          <Label htmlFor="address" className="text-xl mb-2 block">
            주소 (선택)
          </Label>
          <Input
            id="address"
            type="text"
            className="text-lg py-6"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <p className="text-sm text-muted-foreground mt-2">
            우편물을 받으실 주소를 입력해주세요.
          </p>
        </div>

        {/* 제출 버튼 */}
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            size="lg"
            className="w-full text-xl py-8"
          >
            가입하기
          </Button>

          <div className="text-center p-6 bg-muted rounded-lg">
            <p className="text-lg font-medium mb-2">
              💬 어려우시면 전화로 가입하세요
            </p>
            <p className="text-2xl font-bold text-primary">
              <a href="tel:02-2677-4662">(02)2677-4662</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
```

### API 엔드포인트 (`/src/app/api/members/route.ts`)

```typescript
import { NextResponse } from 'next/server';
// import { createClient } from '@supabase/supabase-js'; // DB 연동 시

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { memberType, name, phone, email, address } = body;

    // 간단한 검증
    if (!name || !phone) {
      return NextResponse.json(
        { error: '이름과 전화번호는 필수입니다.' },
        { status: 400 }
      );
    }

    // TODO: DB에 저장
    // const supabase = createClient(...)
    // const { data, error } = await supabase
    //   .from('members')
    //   .insert({
    //     member_type: memberType,
    //     name,
    //     phone,
    //     email: email || null,
    //     address: address || null,
    //     signup_method: 'online',
    //   });

    // TODO: SMS 발송 (Twilio/알리고)
    // await sendWelcomeSMS(phone, name);

    return NextResponse.json({
      success: true,
      message: '가입이 완료되었습니다.',
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
```

---

## 13. 결론

### 핵심 메시지

> **"전화 한 통으로 가입하고, 문자 한 통으로 소식을 받는다"**

이 시스템은 **시각장애인과 보호자 모두에게 가장 쉬운 경험**을 제공합니다:

1. **당사자**: 복잡한 인터넷 가입 없이 전화로 3분 안에 완료
2. **보호자**: 부모/자녀를 대신해 간단히 등록 가능
3. **협회**: 관리 부담 최소화, 전화 상담 중심 운영

### 성공 기준

- 전화 가입이 40% 이상 (디지털 소외 계층 포용)
- 가입 완료율 90% 이상 (중도 포기 최소화)
- 회원 만족도 4.5/5.0 이상

---

**문서 버전**: 1.0
**작성일**: 2025년 11월 6일
**다음 단계**: Phase 1 구현 착수 (회원가입 폼 + 관리자 페이지)
