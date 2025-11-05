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
  title: '저시력이란? - 한국저시력인협회',
  description:
    '저시력의 정의, 증상, 그리고 일상생활에서 겪는 어려움에 대해 알아보세요. 저시력인과 가족을 위한 첫걸음 정보를 제공합니다.',
};

export default function WhatIsLowVisionPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">진단 단계</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            저시력이란?
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            저시력의 정의와 증상을 이해하고, 나에게 맞는 지원을 찾아보세요.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="definition-heading">
        <h2 id="definition-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          저시력의 정의
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>의학적 정의</CardTitle>
            <CardDescription>
              WHO(세계보건기구) 및 한국 장애인복지법 기준
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">저시력(Low Vision)이란?</h3>
              <p className="leading-relaxed text-muted-foreground">
                안경이나 콘택트렌즈, 약물, 수술 등 일반적인 치료로도{' '}
                <strong className="text-foreground">시력 교정이 충분히 되지 않아</strong>{' '}
                일상생활에 어려움을 겪는 상태를 말합니다.
              </p>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
              <h4 className="font-semibold">수치적 기준</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">교정시력</strong>: 좋은 눈의 시력이 0.3 이하
                </li>
                <li>
                  <strong className="text-foreground">시야</strong>: 중심 시야가 20도 이하로 제한됨
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                ⚠️ <strong className="text-foreground">중요:</strong> 저시력은 '전맹(전혀 보이지 않음)'과는
                다릅니다. 저시력인은 잔존 시력이 있어, 적절한 보조기기와 훈련을 통해 독립적인 생활이
                가능합니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Symptoms Section */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="symptoms-heading">
        <h2 id="symptoms-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          저시력의 주요 증상
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>시력 저하</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>작은 글씨나 물체가 흐릿하게 보임</li>
                <li>얼굴 인식이 어려움</li>
                <li>TV나 책을 아주 가까이서 봐야 함</li>
                <li>밝은 곳에서도 사물이 선명하지 않음</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>시야 제한</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>터널처럼 중앙만 보임 (주변시야 상실)</li>
                <li>중심부가 가려지고 주변만 보임 (중심시야 상실)</li>
                <li>시야의 일부가 검게 가려짐</li>
                <li>계단이나 문턱을 잘 못 봄</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>대비 감소</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>색상 구분이 어려움</li>
                <li>회색 음영을 잘 구별하지 못함</li>
                <li>어두운 배경에 어두운 물체를 못 봄</li>
                <li>명암 차이가 큰 곳에서 적응 어려움</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>빛 민감도</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>밝은 빛에 눈이 부심 (광과민증)</li>
                <li>어두운 곳에서 적응이 느림 (야맹증)</li>
                <li>햇빛이나 형광등 아래서 불편함</li>
                <li>역광에서 사물 인식 어려움</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Daily Life Challenges */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="challenges-heading">
        <h2 id="challenges-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          일상생활에서 겪는 어려움
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-2xl" role="img" aria-label="독서">
                  📖
                </span>
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">독서 및 학습</h3>
                  <p className="text-sm text-muted-foreground">
                    신문, 책, 약 설명서 읽기 어려움
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl" role="img" aria-label="이동">
                  🚶
                </span>
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">이동 및 보행</h3>
                  <p className="text-sm text-muted-foreground">
                    계단, 문턱, 장애물 인식 어려움
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl" role="img" aria-label="얼굴 인식">
                  👤
                </span>
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">사회적 교류</h3>
                  <p className="text-sm text-muted-foreground">
                    얼굴 인식, 표정 읽기 어려움
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl" role="img" aria-label="일상 활동">
                  🍳
                </span>
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">일상 활동</h3>
                  <p className="text-sm text-muted-foreground">
                    요리, 청소, 옷 색상 구분 어려움
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl" role="img" aria-label="디지털 기기">
                  📱
                </span>
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">디지털 접근</h3>
                  <p className="text-sm text-muted-foreground">
                    스마트폰, 컴퓨터 화면 보기 어려움
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Hope Message */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">저시력인도 독립적인 삶이 가능합니다</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              저시력은 극복할 수 없는 장애가 아닙니다. 적절한 보조공학 기기, 재활 훈련, 환경 개선을
              통해 독립적이고 의미 있는 삶을 살 수 있습니다.
            </p>
            <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">보조공학</strong>: 확대경, AI 스마트 안경, 음성
                지원 기기
              </li>
              <li>
                <strong className="text-foreground">재활 훈련</strong>: 보행 훈련, 일상생활 기술
                습득
              </li>
              <li>
                <strong className="text-foreground">환경 개선</strong>: 조명 조절, 고대비 환경
                조성
              </li>
              <li>
                <strong className="text-foreground">심리적 지원</strong>: 동료 지원, 가족 상담
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div>
            <Button asChild variant="outline">
              <Link href="/diagnosis/causes">다음: 원인 질환 알아보기 →</Link>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="secondary">
              <Link href="/diagnosis/first-steps">진단 직후 가이드</Link>
            </Button>
            <Button asChild>
              <Link href="/daily-life/assistive-tech">최신 보조공학 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
