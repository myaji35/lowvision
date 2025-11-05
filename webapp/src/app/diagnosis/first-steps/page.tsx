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
  title: '진단 직후 가이드 - 한국저시력인협회',
  description:
    '저시력 진단을 받은 직후 무엇을 해야 할지 단계별 가이드를 제공합니다. 의료적 조치부터 심리적 지원, 재활 계획까지.',
};

export default function FirstStepsPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">진단 단계</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            진단 직후 가이드
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            저시력 진단을 받았다면? 지금 바로 시작할 수 있는 단계별 실천 가이드
          </p>
        </div>
      </section>

      {/* Reassurance */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">당신은 혼자가 아닙니다</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              저시력 진단은 두렵고 막막하게 느껴질 수 있습니다. 하지만 걱정하지 마세요.{' '}
              <strong className="text-foreground">
                수많은 저시력인들이 독립적이고 의미 있는 삶을 살고 있습니다.
              </strong>
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              이 가이드는 진단 직후 혼란스러운 시기를 지나, 새로운 일상으로 나아가는 데 도움을
              드립니다.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Timeline Steps */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          단계별 실천 가이드
        </h2>

        {/* Step 1 */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <div className="space-y-1">
                <CardTitle>진단 후 즉시: 의료적 조치 확인</CardTitle>
                <CardDescription>진단 후 0-1주</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="ml-14 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">✅ 해야 할 일</h3>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">진단서 및 소견서 발급</strong>: 향후 복지 혜택
                  신청에 필요
                </li>
                <li>
                  <strong className="text-foreground">치료 계획 확인</strong>: 약물, 수술, 정기 검진
                  일정
                </li>
                <li>
                  <strong className="text-foreground">잔존 시력 평가</strong>: 현재 시력으로 할 수 있는
                  일 파악
                </li>
                <li>
                  <strong className="text-foreground">안과 전문의와 상담</strong>: 질환 진행 속도 및
                  예후 질문
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">💡 팁</p>
              <p className="mt-2 text-sm text-muted-foreground">
                진료 시 가족이나 친구와 동행하세요. 의사의 설명을 녹음하거나 메모하는 것도
                도움이 됩니다.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <div className="space-y-1">
                <CardTitle>1-2주: 감정 수용과 심리적 지원</CardTitle>
                <CardDescription>진단 후 1-2주</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="ml-14 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">감정의 단계 이해하기</h3>
              <p className="text-sm text-muted-foreground">
                저시력 진단 후 부정, 분노, 우울, 수용 등 다양한 감정을 경험하는 것은 자연스러운
                과정입니다.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">✅ 해야 할 일</h3>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">감정 표현하기</strong>: 가족, 친구와 솔직하게
                  이야기
                </li>
                <li>
                  <strong className="text-foreground">전문 상담 고려</strong>: 심리 상담사 또는 동료
                  지원 그룹
                </li>
                <li>
                  <strong className="text-foreground">정보 수집</strong>: 저시력인 성공 사례 찾아보기
                </li>
                <li>
                  <strong className="text-foreground">서두르지 않기</strong>: 감정 회복에 충분한 시간
                  갖기
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">🤝 도움받을 곳</h3>
              <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li>한국저시력인협회 동료 지원 프로그램</li>
                <li>병원 심리 상담실</li>
                <li>장애인복지관 상담 서비스</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <div className="space-y-1">
                <CardTitle>2-4주: 복지 혜택 및 등록 절차</CardTitle>
                <CardDescription>진단 후 2-4주</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="ml-14 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">✅ 해야 할 일</h3>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">장애인 등록 신청</strong>: 주민센터 방문
                  (진단서 지참)
                </li>
                <li>
                  <strong className="text-foreground">장애인 복지카드 발급</strong>: 각종 할인 및
                  지원 혜택
                </li>
                <li>
                  <strong className="text-foreground">활동지원 서비스 신청</strong>: 일상생활 지원
                  필요 시
                </li>
                <li>
                  <strong className="text-foreground">교통비 감면 신청</strong>: 대중교통 할인
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">💡 팁</p>
              <p className="mt-2 text-sm text-muted-foreground">
                장애인 등록은 의무가 아니지만, 복지 혜택 수혜를 위해 권장됩니다. 자세한 내용은{' '}
                <Link
                  href="/rights/welfare-benefits"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  복지 혜택 총람
                </Link>
                을 참고하세요.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                4
              </div>
              <div className="space-y-1">
                <CardTitle>1-3개월: 보조공학 및 재활 시작</CardTitle>
                <CardDescription>진단 후 1-3개월</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="ml-14 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">보조공학 기기 탐색</h3>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">확대경</strong>: 독서용 (휴대용, 탁상용)
                </li>
                <li>
                  <strong className="text-foreground">스마트 안경</strong>: AI 기반 환경 인식 및 읽기
                  (Envision Glasses 등)
                </li>
                <li>
                  <strong className="text-foreground">스마트폰 접근성</strong>: 화면 읽기, 확대 기능
                  활성화
                </li>
                <li>
                  <strong className="text-foreground">비디오 확대기</strong>: 고배율 확대 필요 시
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">재활 훈련 프로그램</h3>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">보행 훈련</strong>: 흰 지팡이 사용법, 안전한
                  이동
                </li>
                <li>
                  <strong className="text-foreground">일상생활 기술</strong>: 요리, 청소, 옷 관리 등
                </li>
                <li>
                  <strong className="text-foreground">잔존 시력 활용법</strong>: 편심 주시, 조명 최적화
                </li>
              </ul>
            </div>

            <Button asChild variant="outline" className="mt-4">
              <Link href="/daily-life/assistive-tech">
                최신 보조공학 가이드 보기 →
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                5
              </div>
              <div className="space-y-1">
                <CardTitle>3-6개월: 일상 재구축 및 사회 참여</CardTitle>
                <CardDescription>진단 후 3-6개월</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="ml-14 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">✅ 해야 할 일</h3>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">직장 복귀 준비</strong>: 직무 조정, 보조기기 지원
                  요청
                </li>
                <li>
                  <strong className="text-foreground">취미 활동 재개</strong>: 적응된 방법으로 계속
                  즐기기
                </li>
                <li>
                  <strong className="text-foreground">동료 모임 참여</strong>: 한국저시력인협회 행사,
                  자조 모임
                </li>
                <li>
                  <strong className="text-foreground">가족 교육</strong>: 가족이 저시력 이해하도록 돕기
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">💪 격려의 말</p>
              <p className="mt-2 text-sm text-muted-foreground">
                6개월이 지나면 대부분의 저시력인들이 새로운 일상에 적응합니다. 천천히, 그러나
                꾸준히 나아가세요.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="resources-heading">
        <h2 id="resources-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          도움이 되는 자료
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>재활 기관</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 한국시각장애인복지관</li>
                <li>• 서울시각장애인복지관</li>
                <li>• 각 지역 장애인복지관</li>
                <li>• 공공 어린이 재활병원 (소아 저시력)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>법률 및 권익 옹호</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 장애인권익옹호기관 (1644-8295)</li>
                <li>• 한국장애인단체총연맹</li>
                <li>• 장애인차별금지추진연대</li>
              </ul>
              <Button asChild variant="link" className="mt-2 h-auto p-0">
                <Link href="/rights/welfare-benefits">자세히 보기 →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>심리 지원</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 한국저시력인협회 동료 상담</li>
                <li>• 병원 정신건강의학과</li>
                <li>• 정신건강복지센터 (1577-0199)</li>
              </ul>
              <Button asChild variant="link" className="mt-2 h-auto p-0">
                <Link href="/adaptation/mental-health">심리 가이드 →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>보조공학 지원</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 국립재활원 보조기기센터</li>
                <li>• 각 지역 보조기기센터</li>
                <li>• 장애인보조기구 교부 사업</li>
              </ul>
              <Button asChild variant="link" className="mt-2 h-auto p-0">
                <Link href="/daily-life/assistive-tech">보조공학 보기 →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>자주 묻는 질문</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Q. 장애인 등록을 꼭 해야 하나요?</h3>
              <p className="text-sm text-muted-foreground">
                A. 의무는 아니지만, 복지 혜택(활동지원, 교통비 감면, 보조기기 지원 등)을 받으려면
                등록이 필요합니다.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Q. 보조공학 기기는 얼마나 비싸나요?</h3>
              <p className="text-sm text-muted-foreground">
                A. 간단한 확대경은 수만 원부터, AI 스마트 안경은 수백만 원까지 다양합니다.
                장애인보조기구 교부 사업으로 일부 지원받을 수 있습니다.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Q. 직장을 계속 다닐 수 있나요?</h3>
              <p className="text-sm text-muted-foreground">
                A. 네, 많은 저시력인들이 직장 생활을 합니다. 장애인고용공단의 근로 지원, 보조기기
                지원 등을 활용하세요.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Q. 가족에게 어떻게 설명해야 하나요?</h3>
              <p className="text-sm text-muted-foreground">
                A. 솔직하게 현재 상황과 필요한 도움을 이야기하세요. 가족과 함께 재활 교육을 받는
                것도 좋습니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/diagnosis/causes">← 이전: 원인 질환</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="secondary">
              <Link href="/adaptation/mental-health">다음: 마음 건강 →</Link>
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
