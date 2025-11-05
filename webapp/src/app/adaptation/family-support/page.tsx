import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: '가족 및 보호자 지원 - 한국저시력인협회',
  description:
    '저시력인 가족을 위한 지원 가이드. 효과적인 지원 방법, 독립성 존중, 가족 교육 프로그램, 돌봄 스트레스 관리 방법을 제공합니다.',
};

export default function FamilySupportPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">적응 단계</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            가족 및 보호자 지원
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            저시력인을 가족으로 둔 분들을 위한 실질적인 지원 가이드입니다.
          </p>
        </div>
      </section>

      {/* Introduction for Families */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">가족 여러분께</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              사랑하는 가족이 저시력 진단을 받았을 때, 당신도 함께 충격과 슬픔을 느낄 것입니다.
              "어떻게 도와야 할까?", "뭘 해줘야 할까?" 고민이 많을 것입니다.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              <strong className="text-foreground">좋은 소식은</strong>, 당신의 지지가 저시력인의
              적응과 독립에 큰 도움이 된다는 것입니다. 하지만 "올바른 지원"과 "과보호"의 경계를
              아는 것이 중요합니다.
            </p>
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">핵심 원칙</p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">
                  가장 좋은 지원은 저시력인이 스스로 할 수 있도록 돕는 것입니다.
                </strong>{' '}
                모든 것을 대신 해주는 것이 아닙니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Family Role */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="role-heading"
      >
        <h2 id="role-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          가족의 역할
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>정서적 지지자</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                저시력인의 감정을 인정하고, 판단하지 않으며 들어주는 역할입니다.
              </p>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>"네 기분 이해해"라고 공감 표현</li>
                <li>"너는 할 수 있어"라고 격려</li>
                <li>좌절할 때 함께 있어주기</li>
                <li>성취를 함께 축하하기</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>정보 탐색자</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                보조공학, 복지 혜택, 재활 프로그램 등 필요한 정보를 함께 찾습니다.
              </p>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>최신 보조공학 기기 조사</li>
                <li>장애인 복지 혜택 알아보기</li>
                <li>재활 기관 연락처 정리</li>
                <li>지역 자원 파악</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>독립성 촉진자</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                저시력인이 스스로 할 수 있는 능력을 키우도록 돕습니다.
              </p>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>보조기기 사용법 함께 익히기</li>
                <li>재활 훈련 동행 및 격려</li>
                <li>안전한 환경 조성 (조명, 정리정돈)</li>
                <li>시행착오를 인내심 있게 지켜보기</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>옹호자 (Advocate)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                필요할 때 저시력인의 권리를 대변하고 목소리를 높입니다.
              </p>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>학교/직장에 합리적 편의 요청</li>
                <li>의료진에게 질문 및 의견 전달</li>
                <li>차별 상황에서 함께 대응</li>
                <li>정책 개선 활동 참여</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Effective Support Methods */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="methods-heading"
      >
        <h2 id="methods-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          효과적인 지원 방법
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>Do와 Don't</CardTitle>
            <CardDescription>실제 상황별 적절한 대응 방법</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border-2 border-green-500/30 bg-green-50/50 p-4 dark:bg-green-950/20">
                  <p className="mb-2 font-semibold text-green-700 dark:text-green-400">
                    ✓ 이렇게 하세요
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "도움이 필요하면 말해줘. 내가 도울 수 있는 게 뭐가 있을까?"
                  </p>
                </div>
                <div className="rounded-lg border-2 border-red-500/30 bg-red-50/50 p-4 dark:bg-red-950/20">
                  <p className="mb-2 font-semibold text-red-700 dark:text-red-400">
                    ✗ 이렇게 하지 마세요
                  </p>
                  <p className="text-sm text-muted-foreground">
                    물어보지도 않고 팔을 잡아끌거나 대신 해버림
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border-2 border-green-500/30 bg-green-50/50 p-4 dark:bg-green-950/20">
                  <p className="mb-2 font-semibold text-green-700 dark:text-green-400">
                    ✓ 이렇게 하세요
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "이 물건은 시계 3시 방향에 있어" (구체적 위치 설명)
                  </p>
                </div>
                <div className="rounded-lg border-2 border-red-500/30 bg-red-50/50 p-4 dark:bg-red-950/20">
                  <p className="mb-2 font-semibold text-red-700 dark:text-red-400">
                    ✗ 이렇게 하지 마세요
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "여기", "저기"처럼 모호한 표현 사용
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border-2 border-green-500/30 bg-green-50/50 p-4 dark:bg-green-950/20">
                  <p className="mb-2 font-semibold text-green-700 dark:text-green-400">
                    ✓ 이렇게 하세요
                  </p>
                  <p className="text-sm text-muted-foreground">
                    시간이 걸려도 스스로 하도록 기다려줌
                  </p>
                </div>
                <div className="rounded-lg border-2 border-red-500/30 bg-red-50/50 p-4 dark:bg-red-950/20">
                  <p className="mb-2 font-semibold text-red-700 dark:text-red-400">
                    ✗ 이렇게 하지 마세요
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "내가 해줄게, 너는 시간 걸리잖아"
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border-2 border-green-500/30 bg-green-50/50 p-4 dark:bg-green-950/20">
                  <p className="mb-2 font-semibold text-green-700 dark:text-green-400">
                    ✓ 이렇게 하세요
                  </p>
                  <p className="text-sm text-muted-foreground">
                    평소처럼 대화하고, 시각 표현도 자연스럽게 사용 ("봤어?", "보자")
                  </p>
                </div>
                <div className="rounded-lg border-2 border-red-500/30 bg-red-50/50 p-4 dark:bg-red-950/20">
                  <p className="mb-2 font-semibold text-red-700 dark:text-red-400">
                    ✗ 이렇게 하지 마세요
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "보다"는 말 쓰면 안 되지, 라며 어색하게 회피
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Overprotection vs Independence */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-orange-500/50 bg-orange-50/50 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="text-orange-700 dark:text-orange-400">
              과보호 vs 독립성: 균형 찾기
            </CardTitle>
            <CardDescription>
              사랑에서 비롯된 과보호는 오히려 독립성을 해칠 수 있습니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">과보호의 신호</h3>
              <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li>본인이 할 수 있는 일도 대신 해줌</li>
                <li>위험을 과도하게 염려하며 외출을 막음</li>
                <li>"너는 못해, 내가 할게"라고 자주 말함</li>
                <li>보조기기나 재활 훈련을 "굳이 필요 없다"며 반대</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">과보호의 결과</h3>
              <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li>저시력인의 자존감 저하</li>
                <li>학습된 무기력 (learned helplessness)</li>
                <li>사회적 고립 및 우울증 위험 증가</li>
                <li>가족 간 갈등과 의존 관계 심화</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm font-semibold">균형 잡힌 지원이란?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                저시력인이 안전하게 도전할 수 있도록 환경을 조성하되,{' '}
                <strong className="text-foreground">실패할 권리도 존중</strong>하는 것입니다.
                실패는 학습의 일부입니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Family Education Programs */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="education-heading"
      >
        <h2 id="education-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          가족 교육 프로그램
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>가족도 배워야 합니다</CardTitle>
            <CardDescription>
              저시력에 대한 이해가 효과적인 지원의 시작입니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              많은 재활 기관에서 가족을 위한 교육 프로그램을 제공합니다. 저시력의 의학적 측면,
              보조공학 사용법, 의사소통 기술 등을 배울 수 있습니다.
            </p>

            <div className="space-y-3">
              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">국립재활원 가족 교육</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>저시력 체험 (시뮬레이션 안경 착용)</li>
                  <li>안내법 (Sighted Guide) 훈련</li>
                  <li>가정 환경 개선 컨설팅</li>
                </ul>
                <p className="mt-2 text-sm">
                  문의: <span className="font-mono">02-901-1700</span>
                </p>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">한국시각장애인연합회 가족 워크숍</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>월 1회 온라인 강의 (무료)</li>
                  <li>가족 당사자 경험 공유</li>
                  <li>심리 상담 서비스 연계</li>
                </ul>
                <p className="mt-2 text-sm">
                  홈페이지: <span className="font-mono">www.kbuwel.or.kr</span>
                </p>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">대학병원 저시력 클리닉</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>진단 시 가족 상담 제공</li>
                  <li>보조공학 기기 시연 및 교육</li>
                  <li>안과 전문의 Q&A</li>
                </ul>
                <p className="mt-2 text-sm">
                  서울대병원, 세브란스병원, 삼성서울병원 등
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Caregiver Stress */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="stress-heading"
      >
        <h2 id="stress-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          돌봄 스트레스 관리
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>당신의 마음 건강도 중요합니다</CardTitle>
            <CardDescription>
              번아웃(burnout)을 예방하고 지속 가능한 지원을 하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              가족을 돌보는 것은 보람 있지만 동시에 큰 스트레스입니다. 죄책감, 분노, 슬픔,
              피로감을 느끼는 것은 정상입니다.{' '}
              <strong className="text-foreground">당신도 돌봄이 필요합니다.</strong>
            </p>

            <div className="space-y-2">
              <h3 className="font-semibold">번아웃 신호</h3>
              <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li>만성 피로 및 수면 장애</li>
                <li>짜증, 분노 폭발 증가</li>
                <li>무관심 또는 정서적 무감각</li>
                <li>자신의 건강 방치</li>
                <li>사회적 고립</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">자기 돌봄 전략</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">1.</span>
                  <div>
                    <strong className="text-foreground">자신의 시간 확보</strong>
                    <br />
                    주 1회 이상 온전히 자신을 위한 시간 (취미, 운동, 휴식)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">2.</span>
                  <div>
                    <strong className="text-foreground">돌봄 분담</strong>
                    <br />
                    다른 가족 구성원, 활동지원사, 자원봉사자에게 역할 나누기
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">3.</span>
                  <div>
                    <strong className="text-foreground">보호자 지원 그룹 참여</strong>
                    <br />
                    같은 처지의 가족들과 경험 공유 및 정서적 지지
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">4.</span>
                  <div>
                    <strong className="text-foreground">전문 상담</strong>
                    <br />
                    필요하면 심리 상담사에게 도움 요청 (보호자 우울증도 치료 대상)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">5.</span>
                  <div>
                    <strong className="text-foreground">복지 서비스 활용</strong>
                    <br />
                    장애인 활동지원 서비스, 돌봄휴가제 등 제도적 지원
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-primary/10 p-4">
              <p className="text-sm font-semibold">기억하세요</p>
              <p className="mt-2 text-sm text-muted-foreground">
                자신을 돌보는 것은 이기심이 아닙니다.{' '}
                <strong className="text-foreground">
                  건강한 당신이 더 나은 지원을 할 수 있습니다.
                </strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Children and Youth */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>아동·청소년 저시력인의 부모님께</CardTitle>
            <CardDescription>특별히 고려해야 할 사항들</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-lg">🎓</span>
                <div>
                  <strong className="text-foreground">교육권 옹호</strong>: 학교에 특수교육
                  지원 요청 (확대 교재, 보조공학, 시험 시간 연장)
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">👫</span>
                <div>
                  <strong className="text-foreground">또래 관계 촉진</strong>: 저시력이
                  사회적 고립으로 이어지지 않도록 주의
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">💪</span>
                <div>
                  <strong className="text-foreground">자기 옹호 능력 키우기</strong>: "나는
                  잘 안 보여서 도움이 필요해"라고 스스로 말할 수 있도록
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">🎯</span>
                <div>
                  <strong className="text-foreground">진로 탐색 지원</strong>: 저시력이라도
                  다양한 직업이 가능함을 보여주기 (롤모델 연결)
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">🏠</span>
                <div>
                  <strong className="text-foreground">형제자매 배려</strong>: 다른 자녀들이
                  소외감을 느끼지 않도록 균형 있는 관심
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Resources */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>가족 지원 자료 및 연락처</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="font-semibold">한국저시력인협회</p>
                <p className="text-muted-foreground">
                  전화: <span className="font-mono">02-123-4567</span> / 이메일:{' '}
                  <span className="font-mono">family@lowvision.or.kr</span>
                </p>
              </div>
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="font-semibold">장애인가족지원센터</p>
                <p className="text-muted-foreground">
                  전국 센터 찾기: <span className="font-mono">www.familynet.or.kr</span>
                </p>
              </div>
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="font-semibold">보호자 온라인 커뮤니티</p>
                <p className="text-muted-foreground">
                  카카오톡 오픈채팅: "저시력인 가족 모임" 검색
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/adaptation/mental-health">← 이전: 저시력과 마음 건강</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/daily-life/rehabilitation">다음: 재활 및 교육 →</Link>
            </Button>
            <Button asChild>
              <Link href="/rights/welfare-benefits">복지 혜택 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
