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
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '재활 및 교육 - 한국저시력인협회',
  description:
    '저시력 재활 훈련 및 교육 프로그램 안내. 보행 훈련, 일상생활 기술, 디지털 접근성, 전국 재활 기관 정보를 제공합니다.',
};

interface TrainingProgram {
  id: string;
  name: string;
  description: string;
  skills: string[];
  duration: string;
  provider: string;
}

const trainingPrograms: TrainingProgram[] = [
  {
    id: 'mobility',
    name: '보행 훈련 (Orientation & Mobility)',
    description:
      '흰 지팡이를 사용하여 안전하고 독립적으로 이동하는 방법을 배웁니다. 실내외 환경에서 장애물 인식, 교차로 횡단, 대중교통 이용 등을 훈련합니다.',
    skills: [
      '흰 지팡이 기본 기술 (왼쪽-오른쪽 탐색)',
      '실내 보행 (벽 따라가기, 문 찾기)',
      '야외 보행 (인도, 횡단보도)',
      '대중교통 이용 (버스, 지하철)',
      '방향 감각 및 공간 인지',
      '전자 보행 보조기기 (WeWALK 등)',
    ],
    duration: '3개월 ~ 6개월 (주 2-3회)',
    provider: '국립재활원, 한국시각장애인연합회 지부',
  },
  {
    id: 'daily-living',
    name: '일상생활 기술 (ADL: Activities of Daily Living)',
    description:
      '요리, 청소, 옷 정리, 금전 관리 등 독립적인 생활을 위한 실용적인 기술을 습득합니다.',
    skills: [
      '요리 (안전한 칼질, 조리 기구 사용)',
      '청소 및 정리정돈 (체계적 수납)',
      '옷 관리 (색상 구분, 세탁)',
      '금전 관리 (지폐 구분, 앱 활용)',
      '개인 위생 (화장, 면도)',
      '시간 관리 (점자/음성 시계)',
    ],
    duration: '2개월 ~ 4개월 (주 1-2회)',
    provider: '지역 시각장애인복지관',
  },
  {
    id: 'digital',
    name: '디지털 접근성 교육',
    description:
      '스마트폰, 컴퓨터의 접근성 기능을 활용하여 디지털 세상에 독립적으로 접근하는 방법을 배웁니다.',
    skills: [
      'iOS VoiceOver / Android TalkBack 사용법',
      'PC 스크린 리더 (센스리더, NVDA)',
      '음성 인식 (Siri, Google Assistant)',
      '확대 기능 및 고대비 모드',
      '접근 가능한 앱 활용 (은행, 교통, 쇼핑)',
      '전자책 및 오디오북 이용',
    ],
    duration: '1개월 ~ 3개월 (주 2회)',
    provider: '정보화진흥원, 한국시각장애인연합회',
  },
  {
    id: 'reading',
    name: '독서 및 문해력 훈련',
    description:
      '점자, 확대 독서, 음성 도서 등 다양한 방법으로 독서 능력을 유지하거나 새로 습득합니다.',
    skills: [
      '점자 읽기 및 쓰기 (한글 점자)',
      '확대 독서 (전자 확대기, 앱)',
      '음성 도서 이용 (국립장애인도서관)',
      '광학문자인식(OCR) 활용',
      'AI 독서 보조 (Seeing AI, Envision)',
    ],
    duration: '점자: 6개월 이상 / 기타: 1-2개월',
    provider: '한국점자도서관, 실로암시각장애인복지관',
  },
];

export default function RehabilitationPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">일상 단계</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            재활 및 교육
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            독립적인 삶을 위한 실질적인 기술을 배우고 자신감을 회복하세요.
          </p>
        </div>
      </section>

      {/* Why Rehabilitation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">재활 훈련이 중요한 이유</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              저시력 재활은 단순히 "눈을 고치는 것"이 아닙니다. 잔존 시력과 다른 감각(청각,
              촉각)을 최대한 활용하여{' '}
              <strong className="text-foreground">삶의 질을 향상시키는 과정</strong>
              입니다.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              많은 저시력인이 재활 훈련 후 "시력은 그대로지만, 할 수 있는 일이 훨씬 늘었다"고
              말합니다. 기술을 배우면 의존성이 줄고, 자존감이 높아지며, 사회 참여가 확대됩니다.
            </p>
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">재활의 3가지 효과</p>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">기능적 독립성</strong>: 타인 도움 없이
                  일상생활 가능
                </li>
                <li>
                  <strong className="text-foreground">심리적 안정</strong>: "나도 할 수 있다"는
                  자신감
                </li>
                <li>
                  <strong className="text-foreground">사회적 참여</strong>: 직장, 학교,
                  커뮤니티 활동 가능
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Training Programs */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="programs-heading"
      >
        <h2 id="programs-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          주요 재활 훈련 프로그램
        </h2>

        {trainingPrograms.map((program) => (
          <Card key={program.id} id={program.id}>
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <Badge variant="secondary">{program.duration}</Badge>
              </div>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">배우게 될 기술</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  {program.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="text-sm">
                  <strong className="text-foreground">제공 기관</strong>:{' '}
                  {program.provider}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Rehabilitation Centers */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="centers-heading"
      >
        <h2 id="centers-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          전국 재활 기관 및 교육 기관
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>국립재활원</CardTitle>
              <CardDescription>서울 강북구</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">제공 프로그램</strong>: 보행 훈련,
                  일상생활 기술, 심리 상담
                </li>
                <li>
                  <strong className="text-foreground">특징</strong>: 국내 최대 규모, 전문
                  재활팀
                </li>
                <li>
                  <strong className="text-foreground">연락처</strong>:{' '}
                  <span className="font-mono">02-901-1700</span>
                </li>
                <li>
                  <strong className="text-foreground">홈페이지</strong>:{' '}
                  <a
                    href="https://www.nrc.go.kr"
                    className="underline hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.nrc.go.kr
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>한국시각장애인연합회</CardTitle>
              <CardDescription>전국 17개 시도지부</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">제공 프로그램</strong>: 보행 훈련,
                  디지털 교육, 자조 모임
                </li>
                <li>
                  <strong className="text-foreground">특징</strong>: 전국 네트워크, 당사자
                  중심
                </li>
                <li>
                  <strong className="text-foreground">연락처</strong>:{' '}
                  <span className="font-mono">02-2033-9200</span>
                </li>
                <li>
                  <strong className="text-foreground">홈페이지</strong>:{' '}
                  <a
                    href="https://www.kbuwel.or.kr"
                    className="underline hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.kbuwel.or.kr
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>실로암시각장애인복지관</CardTitle>
              <CardDescription>서울 강남구</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">제공 프로그램</strong>: 점자 교육, 독서
                  훈련, 직업 재활
                </li>
                <li>
                  <strong className="text-foreground">특징</strong>: 점자 교육 전문, 직업
                  훈련 우수
                </li>
                <li>
                  <strong className="text-foreground">연락처</strong>:{' '}
                  <span className="font-mono">02-880-0600</span>
                </li>
                <li>
                  <strong className="text-foreground">홈페이지</strong>:{' '}
                  <a
                    href="https://www.silwel.or.kr"
                    className="underline hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.silwel.or.kr
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>지역 시각장애인복지관</CardTitle>
              <CardDescription>전국 주요 도시</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">주요 기관</strong>: 부산, 대구, 광주,
                  대전, 인천 등
                </li>
                <li>
                  <strong className="text-foreground">제공 프로그램</strong>: 일상생활 기술,
                  보행 훈련, 문화 활동
                </li>
                <li>
                  <strong className="text-foreground">찾기</strong>: "시각장애인복지관 +
                  지역명" 검색
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Digital Accessibility Guide */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="digital-heading"
      >
        <h2 id="digital-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          디지털 접근성 설정 가이드
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>스마트폰 접근성 기능</CardTitle>
            <CardDescription>
              iPhone과 Android의 내장 접근성 기능을 활용하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="font-semibold">iPhone (iOS)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">VoiceOver</strong>
                    <br />
                    설정 &gt; 손쉬운 사용 &gt; VoiceOver
                    <br />
                    화면의 모든 요소를 음성으로 읽어줌
                  </li>
                  <li>
                    <strong className="text-foreground">확대/축소</strong>
                    <br />
                    설정 &gt; 손쉬운 사용 &gt; 확대/축소
                    <br />
                    3손가락 두 번 탭으로 화면 확대
                  </li>
                  <li>
                    <strong className="text-foreground">고대비</strong>
                    <br />
                    설정 &gt; 손쉬운 사용 &gt; 디스플레이 및 텍스트 크기
                    <br />
                    명암비 증가, 투명도 줄이기
                  </li>
                  <li>
                    <strong className="text-foreground">Siri</strong>
                    <br />
                    "Hey Siri, 전화 걸어줘" 등 음성 명령
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Android</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">TalkBack</strong>
                    <br />
                    설정 &gt; 접근성 &gt; TalkBack
                    <br />
                    화면 내용을 음성으로 안내
                  </li>
                  <li>
                    <strong className="text-foreground">확대</strong>
                    <br />
                    설정 &gt; 접근성 &gt; 확대
                    <br />
                    삼중 탭으로 화면 확대
                  </li>
                  <li>
                    <strong className="text-foreground">고대비 텍스트</strong>
                    <br />
                    설정 &gt; 접근성 &gt; 고대비 텍스트
                    <br />
                    텍스트 가독성 향상
                  </li>
                  <li>
                    <strong className="text-foreground">Google Assistant</strong>
                    <br />
                    "OK Google, 메시지 보내줘" 등 음성 명령
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>PC 스크린 리더</CardTitle>
            <CardDescription>컴퓨터 화면을 음성으로 읽어주는 프로그램</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">센스리더 (한국어 특화)</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>국내 개발, 한글 최적화</li>
                  <li>Microsoft Office, 인터넷 뱅킹 지원</li>
                  <li>다운로드: 엑스비전테크놀로지 홈페이지</li>
                  <li>가격: 약 70만원 (장애인 복지 지원 가능)</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">NVDA (무료)</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>오픈소스 스크린 리더</li>
                  <li>Windows 전용, 다국어 지원</li>
                  <li>다운로드: www.nvaccess.org</li>
                  <li>가격: 무료</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">JAWS (전문가용)</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>세계적으로 가장 많이 사용</li>
                  <li>고급 기능 제공</li>
                  <li>가격: 약 100만원 이상</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How to Apply */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>재활 프로그램 신청 방법</CardTitle>
            <CardDescription>대부분의 프로그램은 무료 또는 저렴한 비용으로 제공됩니다</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">신청 절차</h3>
              <ol className="ml-6 list-decimal space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">1단계: 기관 선택</strong>
                  <br />
                  위치, 프로그램, 평판을 고려해 재활 기관 선택
                </li>
                <li>
                  <strong className="text-foreground">2단계: 전화 상담</strong>
                  <br />
                  재활 기관에 연락하여 상담 예약 (진단서 필요 여부 확인)
                </li>
                <li>
                  <strong className="text-foreground">3단계: 초기 평가</strong>
                  <br />
                  재활 전문가가 시력, 기능 수준, 목표 평가
                </li>
                <li>
                  <strong className="text-foreground">4단계: 개별 훈련 계획 수립</strong>
                  <br />
                  본인의 필요와 목표에 맞는 맞춤형 훈련 계획
                </li>
                <li>
                  <strong className="text-foreground">5단계: 훈련 시작</strong>
                  <br />
                  정해진 일정에 따라 훈련 진행 (보통 주 1-3회)
                </li>
              </ol>
            </div>

            <div className="rounded-lg border bg-primary/10 p-4">
              <p className="text-sm font-semibold">비용 지원</p>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li>장애인복지관: 대부분 무료</li>
                <li>국립재활원: 건강보험 적용 (일부 본인 부담)</li>
                <li>보조공학 기기: 장애인 보조기기 교부 사업 (지자체)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Success Stories */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">재활 훈련 후 달라진 삶</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              "보행 훈련을 받고 나서 혼자 출퇴근할 수 있게 됐어요. 3개월간 힘들었지만, 지금은
              지팡이 없는 삶을 상상할 수 없어요." <em>- 김OO, 37세, 녹내장</em>
            </p>
            <p className="leading-relaxed text-muted-foreground">
              "스마트폰 VoiceOver 사용법을 배운 뒤 세상이 넓어졌어요. 인터넷 뱅킹, 쇼핑,
              택시 호출까지 혼자 다 해요." <em>- 이OO, 52세, 황반변성</em>
            </p>
            <p className="leading-relaxed text-muted-foreground">
              "점자를 배우는 6개월이 가장 어려웠지만, 이제는 점자책으로 소설을 읽어요.
              독서를 다시 할 수 있게 돼서 너무 기뻐요." <em>- 박OO, 28세, RP</em>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/adaptation/family-support">← 이전: 가족 및 보호자 지원</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/daily-life/assistive-tech">다음: 최신 보조공학 →</Link>
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
