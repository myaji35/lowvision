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
import {
  Eye,
  Heart,
  Users,
  BookOpen,
  Video,
  Image as ImageIcon,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '저시력 바로 알기 - 한국저시력인협회',
  description:
    '저시력의 정의, 원인, 증상, 진단 후 대처법까지. 저시력에 대해 알아야 할 모든 것을 한눈에 확인하세요.',
};

export default function DiagnosisPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">진단 단계</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            저시력 바로 알기
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            저시력에 대해 알아야 할 모든 것 - 정의, 원인, 증상, 그리고 진단 후 첫걸음
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold text-primary">60세+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                황반변성은 60세 이상에서 가장 흔한 저시력 원인입니다
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold text-primary">0.3 이하</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                교정시력이 0.3 이하일 때 저시력으로 분류됩니다
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold text-primary">200%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                적절한 보조공학으로 생활 능력을 200% 향상시킬 수 있습니다
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="content-heading">
        <h2 id="content-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          단계별 가이드
        </h2>

        <div className="grid gap-6">
          {/* Card 1: 저시력이란? */}
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 space-y-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    1
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-2xl">저시력이란?</CardTitle>
                    <CardDescription className="text-base">
                      저시력의 의학적 정의와 일상에서 겪는 구체적인 증상들을 알아보세요
                    </CardDescription>
                  </div>
                </div>

                <div className="ml-16 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-semibold">이런 내용을 배웁니다:</h3>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>WHO 기준 저시력의 정의 (교정시력 0.3 이하)</li>
                      <li>4가지 주요 증상: 시력 저하, 시야 제한, 대비 감소, 빛 민감도</li>
                      <li>일상생활에서 겪는 5가지 어려움</li>
                      <li>저시력과 전맹의 차이</li>
                    </ul>
                  </div>

                  <Button asChild>
                    <Link href="/diagnosis/what-is-low-vision">자세히 보기 →</Link>
                  </Button>
                </div>
              </div>

              <div className="hidden bg-muted/50 p-6 md:block md:w-64">
                <div className="space-y-2">
                  <p className="text-sm font-semibold">⏱️ 읽는 시간</p>
                  <p className="text-2xl font-bold text-primary">5분</p>
                  <p className="text-xs text-muted-foreground">저시력의 기본 개념 이해</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2: 원인 질환 */}
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 space-y-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    2
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-2xl">원인 질환</CardTitle>
                    <CardDescription className="text-base">
                      저시력을 일으키는 주요 안과 질환 6가지와 각각의 특징을 알아보세요
                    </CardDescription>
                  </div>
                </div>

                <div className="ml-16 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-semibold">6대 주요 질환:</h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-lg border bg-muted/50 p-3">
                        <p className="font-semibold">황반변성 (AMD)</p>
                        <p className="text-xs text-muted-foreground">중심 시력 손상</p>
                      </div>
                      <div className="rounded-lg border bg-muted/50 p-3">
                        <p className="font-semibold">녹내장</p>
                        <p className="text-xs text-muted-foreground">주변 시야 협착</p>
                      </div>
                      <div className="rounded-lg border bg-muted/50 p-3">
                        <p className="font-semibold">당뇨망막병증</p>
                        <p className="text-xs text-muted-foreground">혈관 손상</p>
                      </div>
                      <div className="rounded-lg border bg-muted/50 p-3">
                        <p className="font-semibold">망막색소변성증</p>
                        <p className="text-xs text-muted-foreground">야맹증, 터널 시야</p>
                      </div>
                      <div className="rounded-lg border bg-muted/50 p-3">
                        <p className="font-semibold">백내장</p>
                        <p className="text-xs text-muted-foreground">수정체 혼탁</p>
                      </div>
                      <div className="rounded-lg border bg-muted/50 p-3">
                        <p className="font-semibold">시신경염</p>
                        <p className="text-xs text-muted-foreground">급성 시력 저하</p>
                      </div>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/diagnosis/causes">자세히 보기 →</Link>
                  </Button>
                </div>
              </div>

              <div className="hidden bg-muted/50 p-6 md:block md:w-64">
                <div className="space-y-2">
                  <p className="text-sm font-semibold">⏱️ 읽는 시간</p>
                  <p className="text-2xl font-bold text-primary">8분</p>
                  <p className="text-xs text-muted-foreground">질환별 증상 및 특징 파악</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 3: 진단 직후 가이드 */}
          <Card className="overflow-hidden border-primary/50 bg-primary/5">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 space-y-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    3
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-2xl text-primary">진단 직후 가이드 ⭐</CardTitle>
                    <CardDescription className="text-base">
                      <strong>가장 중요!</strong> 저시력 진단 후 0일~6개월까지 단계별 실천 가이드
                    </CardDescription>
                  </div>
                </div>

                <div className="ml-16 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-semibold">5단계 실천 로드맵:</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary">📋</span>
                        <div>
                          <p className="font-semibold text-sm">진단 후 즉시 (0-1주)</p>
                          <p className="text-xs text-muted-foreground">의료적 조치 확인, 진단서 발급</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary">💚</span>
                        <div>
                          <p className="font-semibold text-sm">1-2주</p>
                          <p className="text-xs text-muted-foreground">감정 수용과 심리적 지원</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary">🏛️</span>
                        <div>
                          <p className="font-semibold text-sm">2-4주</p>
                          <p className="text-xs text-muted-foreground">복지 혜택 및 등록 절차</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary">🤖</span>
                        <div>
                          <p className="font-semibold text-sm">1-3개월</p>
                          <p className="text-xs text-muted-foreground">보조공학 및 재활 시작</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary">🎯</span>
                        <div>
                          <p className="font-semibold text-sm">3-6개월</p>
                          <p className="text-xs text-muted-foreground">일상 재구축 및 사회 참여</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/diagnosis/first-steps">자세히 보기 →</Link>
                  </Button>
                </div>
              </div>

              <div className="hidden bg-primary/10 p-6 md:block md:w-64">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">⏱️ 읽는 시간</p>
                  <p className="text-2xl font-bold text-primary">10분</p>
                  <p className="text-xs text-muted-foreground">실천 가능한 구체적 행동 계획</p>
                  <div className="mt-4 rounded-lg bg-primary/20 p-3">
                    <p className="text-xs font-semibold text-primary">💡 추천</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      진단 받으신 분은 이 페이지부터 시작하세요
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Video Section */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6 flex items-center gap-2">
          <Video className="h-7 w-7 text-primary" aria-hidden="true" />
          시각 자료로 이해하기
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Video Card 1: 시야 시뮬레이션 */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3 p-6">
                  <Video className="h-16 w-16 mx-auto text-primary" aria-hidden="true" />
                  <p className="text-sm font-semibold">저시력인의 시야 체험</p>
                  <p className="text-xs text-muted-foreground">
                    황반변성, 녹내장, 망막색소변성증 등<br />
                    각 질환별 시야 변화를 시뮬레이션으로 체험
                  </p>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">시야 시뮬레이션 비디오</CardTitle>
              <CardDescription>
                저시력인이 실제로 보는 시야를 체험해보세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                각 질환별로 시야가 어떻게 변하는지 이해하면, 저시력인의 어려움을 공감하고
                적절한 지원을 제공할 수 있습니다.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a
                  href="https://www.youtube.com/results?search_query=%EC%A0%80%EC%8B%9C%EB%A0%A5+%EC%8B%9C%EC%95%BC+%EC%8B%9C%EB%AE%AC%EB%A0%88%EC%9D%B4%EC%85%98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Video className="mr-2 h-4 w-4" aria-hidden="true" />
                  YouTube에서 보기
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Image Card: 안저 검사 이미지 */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3 p-6">
                  <Eye className="h-16 w-16 mx-auto text-primary" aria-hidden="true" />
                  <p className="text-sm font-semibold">정상 vs 질환별 안저 사진</p>
                  <p className="text-xs text-muted-foreground">
                    안과 검진 시 촬영하는 안저 사진으로<br />
                    각 질환의 특징을 시각적으로 비교
                  </p>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">질환별 비교 이미지</CardTitle>
              <CardDescription>
                정상 안저와 질환별 차이점을 확인하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p>황반변성: 중심부에 드루젠 침착 또는 출혈</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p>녹내장: 시신경 유두의 함몰 증가</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p>당뇨망막병증: 미세혈관류, 출혈, 삼출물</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <a
                  href="https://www.google.com/search?q=%EC%95%88%EC%A0%80%EA%B2%80%EC%82%AC+%ED%99%A9%EB%B0%98%EB%B3%80%EC%84%B1+%EB%85%B9%EB%82%B4%EC%9E%A5&tbm=isch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                  이미지 검색 결과 보기
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Educational Infographic Placeholder */}
        <Card className="mt-6 border-dashed border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
              시력 수치의 의미
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">1.0+</p>
                <p className="text-sm font-semibold mb-2">정상 시력</p>
                <p className="text-xs text-muted-foreground">안경 없이 일상생활 가능</p>
              </div>
              <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950">
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">0.3~0.5</p>
                <p className="text-sm font-semibold mb-2">저시력 (경도)</p>
                <p className="text-xs text-muted-foreground">보조공학으로 독립 생활 가능</p>
              </div>
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950">
                <p className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">0.1 이하</p>
                <p className="text-sm font-semibold mb-2">저시력 (중증)</p>
                <p className="text-xs text-muted-foreground">전문 재활 훈련 필요</p>
              </div>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4">
              💡 시력은 숫자로만 판단할 수 없습니다. 시야, 대비 감도, 색각도 중요한 요소입니다.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Self-Check Section */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6 flex items-center gap-2">
          <AlertCircle className="h-7 w-7 text-primary" aria-hidden="true" />
          자가진단
        </h2>
        <Card className="border-2 border-dashed">
          <CardHeader>
            <CardTitle>✅ 저시력 자가진단 체크리스트</CardTitle>
            <CardDescription>
              다음 증상 중 2개 이상 해당되면 안과 검진을 받으시기 바랍니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex gap-2">
                <input type="checkbox" id="check1" className="mt-0.5" />
                <label htmlFor="check1" className="text-sm">
                  안경이나 돋보기를 써도 글씨가 흐릿하게 보인다
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="check2" className="mt-0.5" />
                <label htmlFor="check2" className="text-sm">
                  얼굴 인식이 어렵다 (3-4미터 거리)
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="check3" className="mt-0.5" />
                <label htmlFor="check3" className="text-sm">
                  계단이나 문턱을 잘 못 본다
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="check4" className="mt-0.5" />
                <label htmlFor="check4" className="text-sm">
                  밝은 빛에 눈이 부시거나 어두운 곳 적응이 느리다
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="check5" className="mt-0.5" />
                <label htmlFor="check5" className="text-sm">
                  색상 구분이 어렵다
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="check6" className="mt-0.5" />
                <label htmlFor="check6" className="text-sm">
                  직선이 구부러져 보인다 (변형시)
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="check7" className="mt-0.5" />
                <label htmlFor="check7" className="text-sm">
                  시야 일부가 검게 가려진다
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="check8" className="mt-0.5" />
                <label htmlFor="check8" className="text-sm">
                  TV나 책을 아주 가까이서 봐야 한다
                </label>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-destructive/10 border border-destructive/20 p-4">
              <p className="text-sm font-semibold text-destructive">⚠️ 즉시 병원 방문이 필요한 증상</p>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li className="text-destructive font-semibold">갑작스러운 시력 상실</li>
                <li className="text-destructive font-semibold">시야에 커튼이나 그림자가 드리워짐 (망막박리 의심)</li>
                <li className="text-destructive font-semibold">심한 눈 통증 + 시력 저하 (급성 녹내장 의심)</li>
                <li className="text-destructive font-semibold">갑작스러운 섬광이나 비문증 증가</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Common Questions */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6 flex items-center gap-2">
          <Heart className="h-7 w-7 text-primary" aria-hidden="true" />
          자주 묻는 질문
        </h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <span className="text-primary">Q1.</span>
                <span>저시력과 시각장애는 같은 말인가요?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">A.</strong> 비슷하지만 엄밀히는 다릅니다. <strong>시각장애</strong>는 법적 용어로 장애인복지법상 등록 기준을
                충족하는 경우를 말하며, <strong>저시력(Low Vision)</strong>은 의학적 용어로 교정시력이 0.3 이하이거나
                시야가 20도 이하로 제한된 상태를 말합니다. 모든 저시력인이 장애인 등록을 하는 것은 아니지만,
                많은 경우 등록 기준을 충족합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <span className="text-primary">Q2.</span>
                <span>저시력은 치료 가능한가요?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">A.</strong> 원인 질환에 따라 다릅니다. <strong className="text-green-600 dark:text-green-400">백내장</strong>은 수술로 완치 가능하며,
                <strong className="text-orange-600 dark:text-orange-400"> 당뇨망막병증</strong>은 혈당 조절과
                레이저 치료로 진행을 늦출 수 있습니다. 황반변성, 녹내장, 망막색소변성증은 완치가 어렵지만,
                조기 발견 시 진행 속도를 늦출 수 있습니다. <strong>중요한 것은 잔존 시력을 보조공학과 재활 훈련으로
                최대한 활용하는 것입니다.</strong>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <span className="text-primary">Q3.</span>
                <span>저시력인도 혼자 생활할 수 있나요?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">A.</strong> <strong className="text-primary">네, 가능합니다!</strong> 적절한 보조공학 기기(AI 스마트 안경, 확대경, 스크린 리더)와 재활 훈련
                (보행 훈련, 일상생활 기술)을 통해 많은 저시력인들이 독립적으로 생활하고 있습니다.
                실제로 직장 생활, 취미 활동, 사회 참여를 활발히 하는 분들이 많습니다. 한국저시력인협회에는
                IT 전문가, 교사, 상담사 등 다양한 직업을 가진 회원들이 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <span className="text-primary">Q4.</span>
                <span>가족이 저시력 진단을 받았습니다. 어떻게 도와야 하나요?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">A.</strong> 가장 중요한 것은 <strong>과보호와 독립성 사이의 균형</strong>입니다. 모든 것을 대신 해주기보다는,
                저시력인이 스스로 할 수 있도록 적절한 도구와 훈련을 제공하는 것이 좋습니다. "내가 도와줄까?"라고
                먼저 물어보고, 필요한 경우에만 지원하세요.{' '}
                <Link href="/adaptation/family-support" className="text-primary underline font-semibold">
                  가족 및 보호자 지원 가이드
                </Link>
                를 참고하세요.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <span className="text-primary">Q5.</span>
                <span>저시력 진단을 받으면 장애인 등록을 해야 하나요?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">A.</strong> 의무는 아니지만, <strong className="text-primary">강력히 권장합니다.</strong> 장애인 등록을 하면:
                <ul className="mt-2 ml-6 list-disc space-y-1">
                  <li><strong>장애인연금</strong> (월 최대 40만원)</li>
                  <li><strong>활동지원서비스</strong> (월 44~165시간)</li>
                  <li><strong>보조공학 기기 지원</strong> (최대 1,000만원)</li>
                  <li><strong>의료비 감면</strong> (입원 10~20%, 외래 10~30%)</li>
                  <li><strong>교통비 할인</strong> (지하철 무료, 버스 할인)</li>
                </ul>
                등의 혜택을 받을 수 있습니다. 자세한 내용은{' '}
                <Link href="/rights/welfare-benefits" className="text-primary underline font-semibold">
                  복지 혜택 총람
                </Link>
                에서 확인하세요.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <span className="text-primary">Q6.</span>
                <span>보조공학 기기는 얼마나 비싸나요?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">A.</strong> 가격대가 다양합니다:
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span>휴대용 확대경</span>
                  <span className="font-semibold">5~30만원</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span>비디오 확대기</span>
                  <span className="font-semibold">100~300만원</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span>AI 스마트 안경</span>
                  <span className="font-semibold">300~500만원</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                💡 <strong>정부 지원금</strong>으로 무료 또는 저렴하게 구입 가능합니다. 장애인등록자는 보조기기 교부
                (건강보험공단) 또는 보조공학기기 지원 (한국장애인고용공단)을 신청할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <span className="text-primary">Q7.</span>
                <span>저시력은 유전되나요? 자녀도 저시력이 될까요?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">A.</strong> 질환에 따라 다릅니다. <strong className="text-orange-600 dark:text-orange-400">망막색소변성증</strong>은
                유전성이 높으며 (50~80%), <strong>황반변성</strong>과 <strong>녹내장</strong>은 가족력이 위험 요인 중 하나입니다.
                하지만 대부분의 저시력 원인 질환(당뇨망막병증, 백내장 등)은 후천적입니다. 가족력이 있는 경우,
                <strong> 조기 검진(연 1~2회)</strong>을 통해 조기 발견과 치료가 가능합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <span className="text-primary">Q8.</span>
                <span>저시력인도 스마트폰이나 컴퓨터를 사용할 수 있나요?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">A.</strong> <strong className="text-primary">물론입니다!</strong>
                모든 주요 운영체제에는 무료 접근성 기능이 내장되어 있습니다:
              </p>
              <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-muted/50 rounded">
                  <p className="font-semibold mb-1">📱 iOS/Android</p>
                  <p className="text-xs text-muted-foreground">화면 확대, VoiceOver, TalkBack</p>
                </div>
                <div className="p-3 bg-muted/50 rounded">
                  <p className="font-semibold mb-1">💻 Windows/macOS</p>
                  <p className="text-xs text-muted-foreground">돋보기, 내레이터, 고대비 모드</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                자세한 설정 방법은{' '}
                <Link href="/daily-life/digital-accessibility" className="text-primary underline font-semibold">
                  디지털 접근성 가이드
                </Link>
                에서 확인하세요.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-primary">다음 단계로 넘어갈 준비가 되셨나요?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild className="flex-1" size="lg">
                <Link href="/adaptation/mental-health">적응 단계: 마음 건강 →</Link>
              </Button>
              <Button asChild className="flex-1" variant="outline" size="lg">
                <Link href="/rights/welfare-benefits">복지 혜택 총람 보기</Link>
              </Button>
              <Button asChild className="flex-1" variant="outline" size="lg">
                <Link href="/daily-life/assistive-tech">최신 보조공학 보기</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
